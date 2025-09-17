import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Property } from "../types";

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MapViewProps {
  properties: Property[];
  selectedProperty?: Property;
  onPropertySelect?: (property: Property) => void;
}

const MapView: React.FC<MapViewProps> = ({
  properties,
  selectedProperty,
  onPropertySelect,
}) => {
  // Center map on NYC area
  const center: [number, number] = [40.7589, -73.9851];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Create custom icon for selected property
  const selectedIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [30, 45],
    iconAnchor: [15, 45],
    popupAnchor: [0, -45],
    shadowSize: [45, 45],
    shadowAnchor: [15, 45],
  });

  const defaultIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 38],
    iconAnchor: [12, 38],
    popupAnchor: [0, -38],
    shadowSize: [38, 38],
    shadowAnchor: [12, 38],
  });

  return (
    <div className="map-container">
      <MapContainer
        center={center}
        zoom={11}
        style={{ height: "400px", width: "100%", borderRadius: "8px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {properties.map((property) => (
          <Marker
            key={property.id}
            position={property.coordinates}
            icon={
              selectedProperty?.id === property.id ? selectedIcon : defaultIcon
            }
            eventHandlers={{
              click: () => onPropertySelect?.(property),
            }}
          >
            <Popup>
              <div className="map-popup">
                <img
                  src={property.image}
                  alt={property.title}
                  className="popup-image"
                />
                <div className="popup-content">
                  <h4>{property.title}</h4>
                  <p className="popup-price">{formatPrice(property.price)}</p>
                  <p className="popup-details">
                    {property.bedrooms} bed{property.bedrooms !== 1 ? "s" : ""}{" "}
                    • {property.location}
                  </p>
                  <button
                    onClick={() => onPropertySelect?.(property)}
                    className="popup-button"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
