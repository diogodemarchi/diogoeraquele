import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import L from "leaflet";
import "leaflet.markercluster";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHighlighter,
  faHouse,
  faLocationDot,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Trans, useTranslation } from "react-i18next";
import usePOI from "../constants/PointsOfInterest";
import ReactDOMServer from "react-dom/server";
import { states } from "../constants/geojson";

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const VacationMap = () => {
  const { t, i18n } = useTranslation();
  const { poi } = usePOI();
  const [hideAirports, setHideAirports] = useState(false);
  const [hideCities, setHideCities] = useState(false);
  const [hideLandmarks, setHideLandmarks] = useState(false);
  const [hideActivities, setHideActivities] = useState(false);
  const [hideNaturePlaces, setHideNaturePlaces] = useState(false);
  const [hideBeaches, setHideBeaches] = useState(false);
  const [hideFood, setHideFood] = useState(false);
  const [highlightStates, setHighlightStates] = useState(true);

  // support fontawesome icons
  const createCustomIcon = (icon, color) => {
    return L.divIcon({
      className: `fa fa-solid fa-${icon.iconName} fa-2x ${color ?? "text-black"}`,
    });
  };

  const pointsOfInterest = [
    {
      name: t("omas_house"),
      description: t("omas_house_description"),
      position: [-26.639564, -49.2525337],
      icon: faHouse,
      color: "text-red-500",
      maps: "",
      imgSrc: "/images/sitio3.jpg",
    },
    ...(!hideAirports ? poi.southAirports : []),
    ...(!hideAirports ? poi.southEastAirports : []),
    ...(!hideAirports ? poi.northAirports : []),
    ...(!hideCities ? poi.cities : []),
    ...(!hideLandmarks ? poi.landmarks : []),
    ...(!hideActivities ? poi.activities : []),
    ...(!hideNaturePlaces ? poi.naturePlaces : []),
    ...(!hideBeaches ? poi.beaches : []),
    ...(!hideFood ? poi.food : []),
  ];

  const MarkerCluster = ({ children }) => {
    const map = useMap();

    useEffect(() => {
      const markers = L.markerClusterGroup({
        showCoverageOnHover: true,
        zoomToBoundsOnClick: true,
        spiderfyOnMaxZoom: true,
        maxClusterRadius: 20,
      })
        .on("clustermouseover", function (ev) {
          const childMarkers = ev.propagatedFrom.getAllChildMarkers();
          const iconCounts = {};
          childMarkers.forEach((marker) => {
            const iconType = marker.options.icon.options.className;
            if (!iconCounts[iconType]) {
              iconCounts[iconType] = 0;
            }
            iconCounts[iconType]++;
          });
          let tooltipContent = "";
          for (const icon in iconCounts) {
            tooltipContent += `<div style="margin: 8px;"><span style="font-size: 18px;">${iconCounts[icon]} </span><i class="${ReactDOMServer.renderToString(icon)}"></i></div>`;
          }
          ev.propagatedFrom
            .bindTooltip(tooltipContent, {
              sticky: false,
            })
            .openTooltip();
        })
        .on("clustermouseout", function (ev) {
          ev.propagatedFrom.unbindTooltip();
        });
      children.forEach((child) => {
        const { position, icon, color, popupContent, tooltipContent } =
          child.props;
        const marker = L.marker(position, {
          icon: createCustomIcon(icon ?? faLocationDot, color),
        }).bindPopup(child.props.children);
        marker.bindPopup(popupContent);
        marker.bindTooltip(tooltipContent).openTooltip();
        markers.addLayer(marker);
      });

      map.addLayer(markers);

      return () => {
        map.removeLayer(markers); // Clean up when the component is unmounted
      };
    }, [map, children]);

    return null;
  };

  const ButtonWithIcons = ({ items, isActive, toggleActive, labelText }) => (
    <div className="flex flex-col items-center mx-2">
      <label
        className={`btn btn-outline mt-4 ${
          isActive ? "btn-primary" : "btn-secondary"
        }`}
      >
        {[...new Set(items.map((item) => item.icon))].map((icon, index) => (
          <FontAwesomeIcon key={index} icon={icon} />
        ))}
        <input type="checkbox" onClick={toggleActive} className="hidden" />
      </label>
      <span className="text-xs">{labelText}</span>
    </div>
  );

  const stringToColor = (str) => {
    let hash = 0;
    str.split("").forEach((char) => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash);
    });
    let colour = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      colour += value.toString(16).padStart(2, "0");
    }
    return colour;
  };

  const extractCoordinatesFromMaps = (url) => {
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
    const match = url.match(regex);

    if (match) {
      const latitude = parseFloat(match[1]);
      const longitude = parseFloat(match[2]);
      return [latitude, longitude];
    }
  };

  const style = (feature) => {
    return {
      fillColor:
        feature.properties.color ||
        stringToColor(feature.properties.name || ""),
      weight: 0.5,
      opacity: 1,
      color: "green",
      dashArray: "3",
      fillOpacity: 0.15,
    };
  };

  const onEachFeature = (feature, layer) => {
    const { name, id, imgSrc } = feature.properties;

    if (name) {
      layer.bindTooltip(name);
    }

    if (i18n.exists(id)) {
      layer.bindPopup(
        ReactDOMServer.renderToString(
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 text-center w-full">
              {name}
            </h3>
            <div className="flex flex-col items-center w-full">
              {imgSrc && (
                <img
                  className="w-full max-h-56 object-contain"
                  alt=""
                  src={process.env.PUBLIC_URL + imgSrc}
                />
              )}
              <div className="mt-2 text-base-content text-center h-32 overflow-y-scroll w-[60vw] md:w-[40vw]">
                <p>
                  <Trans i18nKey={id} />
                </p>
              </div>
            </div>
          </div>,
        ),
        {
          maxWidth: "auto",
          className: "custom-popup",
          autoPan: true,
          keepInView: true,
          closeOnEscapeKey: true,
        },
      );
    }
  };

  const getPOIname = (name) => {
    if (i18n.exists(name)) {
      return t(name);
    }
    return name;
  };

  const getPOIdescription = (name) => {
    if (i18n.exists(name + "_description")) {
      return t(name + "_description");
    }
  };

  return (
    <div className="container mx-auto p-4 min-w-96">
      <MapContainer
        center={pointsOfInterest[0].position}
        zoom={12}
        className="h-[60vh] w-full rounded-lg shadow-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {highlightStates && (
          <GeoJSON
            key="my-geojson"
            data={states.features}
            style={style}
            onEachFeature={onEachFeature}
          ></GeoJSON>
        )}

        <MarkerCluster>
          {pointsOfInterest.map((point) => (
            <Marker
              key={point.name}
              position={
                point.position || extractCoordinatesFromMaps(point.maps)
              }
              icon={point.icon}
              color={point.color}
              tooltipContent={getPOIname(point.name)}
              popupContent={ReactDOMServer.renderToString(
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {getPOIname(point.name)}
                  </h3>
                  <div className="flex flex-col items-center w-[60vw] md:w-[40vw] max-w-fit">
                    {point.imgSrc && (
                      <img
                        className="max-w-none h-56"
                        alt=""
                        src={process.env.PUBLIC_URL + point.imgSrc}
                      />
                    )}
                    <p className="mt-2 text-base-content">
                      {point.description || getPOIdescription(point.name)}
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <a
                      key={point.maps}
                      href={point.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary !text-primary-content max-w-full h-fit p-2 flex items-center flex-nowrap"
                    >
                      <FontAwesomeIcon
                        icon={faMapLocationDot}
                        className="w-4 h-4"
                      />
                      {t("view_on_maps")}
                    </a>
                  </div>
                </div>,
              )}
            ></Marker>
          ))}
        </MarkerCluster>
      </MapContainer>
      <div className="flex flex-wrap justify-center mt-4">
        <ButtonWithIcons
          items={[{ icon: faHighlighter }]}
          isActive={highlightStates}
          toggleActive={() => setHighlightStates(!highlightStates)}
          labelText={t("fedetal_states")}
        />
        <ButtonWithIcons
          items={poi.food}
          isActive={!hideFood}
          toggleActive={() => setHideFood(!hideFood)}
          labelText={t("food")}
        />
        <ButtonWithIcons
          items={[
            ...poi.southAirports,
            ...poi.northAirports,
            ...poi.southEastAirports,
          ]}
          isActive={!hideAirports}
          toggleActive={() => setHideAirports(!hideAirports)}
          labelText={t("airports")}
        />
        <ButtonWithIcons
          items={poi.cities}
          isActive={!hideCities}
          toggleActive={() => setHideCities(!hideCities)}
          labelText={t("cities")}
        />
        <ButtonWithIcons
          items={poi.landmarks}
          isActive={!hideLandmarks}
          toggleActive={() => setHideLandmarks(!hideLandmarks)}
          labelText={t("landmarks")}
        />
        <ButtonWithIcons
          items={poi.activities}
          isActive={!hideActivities}
          toggleActive={() => setHideActivities(!hideActivities)}
          labelText={t("activities")}
        />
        <ButtonWithIcons
          items={poi.naturePlaces}
          isActive={!hideNaturePlaces}
          toggleActive={() => setHideNaturePlaces(!hideNaturePlaces)}
          labelText={t("places")}
        />
        <ButtonWithIcons
          items={poi.beaches}
          isActive={!hideBeaches}
          toggleActive={() => setHideBeaches(!hideBeaches)}
          labelText={t("beaches")}
        />
      </div>
    </div>
  );
};

export default VacationMap;
