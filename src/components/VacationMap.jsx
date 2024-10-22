import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import L from "leaflet";
import "leaflet.markercluster";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLocationDot,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import usePOI from "../constants/PointsOfInterest";
import ReactDOMServer from "react-dom/server";

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const VacationMap = () => {
  const { t } = useTranslation();
  const { poi } = usePOI();
  const [hideAirports, setHideAirports] = useState(false);
  const [hideCities, setHideCities] = useState(false);
  const [hideLandmarks, setHideLandmarks] = useState(false);
  const [hideActivities, setHideActivities] = useState(false);
  const [hideNaturePlaces, setHideNaturePlaces] = useState(false);
  const [hideBeaches, setHideBeaches] = useState(false);

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

  return (
    <div className="container mx-auto p-4">
      <MapContainer
        center={pointsOfInterest[0].position}
        zoom={12}
        className="h-[60vh] w-full rounded-lg shadow-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <MarkerCluster>
          {pointsOfInterest.map((point) => (
            <Marker
              key={point.name}
              position={point.position}
              icon={point.icon}
              color={point.color}
              tooltipContent={point.name}
              popupContent={ReactDOMServer.renderToString(
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">{point.name}</h3>
                  <div className="flex flex-col items-center">
                    {point.imgSrc && (
                      <img
                        className="max-w-none h-56"
                        alt=""
                        src={process.env.PUBLIC_URL + point.imgSrc}
                      />
                    )}
                    <p className="mt-2 text-base-content">
                      {point.description}
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
        <input
          type="checkbox"
          onClick={() => setHideAirports(!hideAirports)}
          className="btn btn-outline btn-primary mt-4 mr-2"
          aria-label={t("hide_airports")}
        />
        <input
          type="checkbox"
          onClick={() => setHideCities(!hideCities)}
          className="btn btn-outline btn-primary mt-4 mx-2"
          aria-label={t("hide_cities")}
        />
        <input
          type="checkbox"
          onClick={() => setHideLandmarks(!hideLandmarks)}
          className="btn btn-outline btn-primary mt-4 mx-2"
          aria-label={t("hide_landmarks")}
        />
        <input
          type="checkbox"
          onClick={() => setHideActivities(!hideActivities)}
          className="btn btn-outline btn-primary mt-4 mx-2"
          aria-label={t("hide_activities")}
        />
        <input
          type="checkbox"
          onClick={() => setHideNaturePlaces(!hideNaturePlaces)}
          className="btn btn-outline btn-primary mt-4 mx-2"
          aria-label={t("hide_nature_places")}
        />
        <input
          type="checkbox"
          onClick={() => setHideBeaches(!hideBeaches)}
          className="btn btn-outline btn-primary mt-4 mx-2"
          aria-label={t("hide_beaches")}
        />
      </div>
    </div>
  );
};

export default VacationMap;
