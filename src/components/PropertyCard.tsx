import React from "react";
import { useNavigate } from "react-router-dom";
import { Property } from "../types";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/property/${property.id}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="property-card" onClick={handleCardClick}>
      <div className="property-image">
        <img src={property.image} alt={property.title} />
      </div>
      <div className="property-info">
        <h3 className="property-title">{property.title}</h3>
        <div className="property-price">{formatPrice(property.price)}</div>
        <div className="property-details">
          <span className="bedrooms">
            {property.bedrooms} bed{property.bedrooms !== 1 ? "s" : ""}
          </span>
          <span className="location">{property.location}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
