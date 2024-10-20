import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import L from "leaflet";
import "leaflet.markercluster"; // Import marker cluster
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faWater,
  faHouse,
  faLandmark,
  faPalette,
  faMonument,
  faLocationDot,
  faPlaneDeparture,
  faCity,
  // Add other icons here as needed
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import usePOI from "../constants/PointsOfInterest";

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

  // support fontawesome icons
  const createCustomIcon = (icon, color) => {
    return L.divIcon({
      className: `fa fa-solid fa-${icon.iconName} fa-2x ${color}`,
    });
  };

  const pointsOfInterest = [
    {
      name: t("omas_house"),
      description: t("omas_house_description"),
      position: [-26.639564, -49.2525337],
      icon: faHouse,
      color: "text-red-500 shadow-2xl",
      maps: "",
    },
    ...poi.southAirports,
    ...poi.southEastAirports,
    ...poi.northAirports,
    ...poi.cities,
    {
      name: t("rio_bonito_dam"),
      description: t("rio_bonito_dam_description"),
      position: [-26.6071156, -49.3413628],
      icon: faWater,
      color: "text-blue-600",
      maps: "https://maps.app.goo.gl/UNAhN7RaJKZP9jAW8",
    },
    {
      name: t("pinhal_dam"),
      description: t("pinhal_dam_description"),
      position: [-26.6142982, -49.4087885],
      icon: faWater,
      color: "text-blue-600",
      maps: "https://maps.app.goo.gl/pNCBVGgipY2t8J6Y7",
    },
    // ...
  ];

  const MarkerCluster = ({ children }) => {
    const map = useMap();

    useEffect(() => {
      const markers = L.markerClusterGroup({
        showCoverageOnHover: true,
        zoomToBoundsOnClick: true,
        spiderfyOnMaxZoom: true,
        maxClusterRadius: 20,
      });
      children.forEach((child) => {
        const { position, icon, color, popupContent, tooltipContent } =
          child.props;
        const marker = L.marker(position, {
          icon: createCustomIcon(icon ?? faLocationDot, color),
        }).bindPopup(child.props.children);
        marker.bindPopup(popupContent).openPopup();
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
      {/* <div className="min-h-screen"></div> */}
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
              popupContent={point.description}
            ></Marker>
          ))}
        </MarkerCluster>
      </MapContainer>
    </div>
  );
};

export default VacationMap;
