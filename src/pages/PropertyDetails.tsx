import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockProperties } from "../data";
import PriceChart from "../components/PriceChart";

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const property = mockProperties.find((p) => p.id === parseInt(id || "0"));

  if (!property) {
    return (
      <div className="property-details-page">
        <div className="error-state">
          <h2>Property Not Found</h2>
          <p>The property you're looking for doesn't exist.</p>
          <button onClick={() => navigate("/")} className="back-button">
            Back to Listings
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="property-details-page">
      <button onClick={() => navigate("/")} className="back-button">
        ← Back to Listings
      </button>

      <div className="property-details">
        <div className="property-hero">
          <img
            src={property.image}
            alt={property.title}
            className="hero-image"
          />
        </div>

        <div className="property-content">
          <div className="property-header">
            <h1>{property.title}</h1>
            <div className="price-tag">{formatPrice(property.price)}</div>
          </div>

          <div className="property-specs">
            <div className="spec-item">
              <span className="spec-label">Bedrooms:</span>
              <span className="spec-value">{property.bedrooms}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Location:</span>
              <span className="spec-value">{property.location}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Property ID:</span>
              <span className="spec-value">#{property.id}</span>
            </div>
          </div>

          <div className="property-description">
            <h3>About this property</h3>
            <p>
              This beautiful {property.bedrooms}-bedroom property is located in
              the heart of {property.location}.
              {property.title.toLowerCase().includes("modern") &&
                " Featuring contemporary design and modern amenities,"}
              {property.title.toLowerCase().includes("luxury") &&
                " This luxury property offers premium finishes and upscale features,"}
              {property.title.toLowerCase().includes("cozy") &&
                " This cozy home provides a warm and welcoming atmosphere,"}
              {property.title.toLowerCase().includes("spacious") &&
                " With generous living spaces throughout,"}
              {property.title.toLowerCase().includes("charming") &&
                " This charming property combines character with comfort,"}
              {property.title.toLowerCase().includes("contemporary") &&
                " This contemporary property showcases sleek design elements,"}
              {property.title.toLowerCase().includes("victorian") &&
                " This historic Victorian property features classic architectural details,"}
              {property.title.toLowerCase().includes("minimalist") &&
                " This minimalist property emphasizes clean lines and open spaces,"}{" "}
              this property offers an exceptional living experience in{" "}
              {property.location}.
            </p>

            <h4>Key Features:</h4>
            <ul>
              <li>
                {property.bedrooms} well-appointed bedroom
                {property.bedrooms !== 1 ? "s" : ""}
              </li>
              <li>Prime location in {property.location}</li>
              <li>Excellent investment opportunity</li>
              <li>Move-in ready condition</li>
              {property.price > 500000 && (
                <li>Premium location and amenities</li>
              )}
              {property.location.toLowerCase().includes("downtown") && (
                <li>Walking distance to city center</li>
              )}
              {property.location.toLowerCase().includes("suburbs") && (
                <li>Family-friendly neighborhood</li>
              )}
              {property.location.toLowerCase().includes("beach") && (
                <li>Beach access and ocean views</li>
              )}
              {property.location.toLowerCase().includes("lake") && (
                <li>Waterfront access and scenic views</li>
              )}
            </ul>
          </div>

          {property.priceHistory && (
            <PriceChart
              priceHistory={property.priceHistory}
              currentPrice={property.price}
            />
          )}

          <div className="contact-section">
            <h3>Interested in this property?</h3>
            <p>
              Contact our team to schedule a viewing or get more information.
            </p>
            <div className="contact-buttons">
              <button className="contact-button primary">
                Schedule Viewing
              </button>
              <button className="contact-button secondary">
                Get More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
