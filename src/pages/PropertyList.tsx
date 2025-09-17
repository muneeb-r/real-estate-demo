import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import Filters from "../components/Filters";
import MapView from "../components/MapView";
import { mockProperties } from "../data";
import { FilterState, Property } from "../types";

const PropertyList: React.FC = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    minBedrooms: "",
    sortBy: "",
  });
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const [selectedProperty, setSelectedProperty] = useState<
    Property | undefined
  >();

  const filteredAndSortedProperties = useMemo(() => {
    let filtered = mockProperties;

    // Apply search filter
    if (filters.search) {
      filtered = filtered.filter((property) =>
        property.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Apply bedrooms filter
    if (filters.minBedrooms !== "") {
      filtered = filtered.filter(
        (property) => property.bedrooms >= (filters.minBedrooms as number)
      );
    }

    // Apply sorting
    if (filters.sortBy === "price-asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "price-desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [filters]);

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handlePropertySelect = (property: Property) => {
    setSelectedProperty(property);
    navigate(`/property/${property.id}`);
  };

  const handleViewModeChange = (mode: "grid" | "map") => {
    setViewMode(mode);
  };

  return (
    <div className="property-list-page">
      <div className="page-header">
        <h1>Real Estate Listings</h1>
        <p>Find your perfect property</p>
      </div>

      <Filters filters={filters} onFiltersChange={handleFiltersChange} />

      <div className="view-toggle">
        <button
          className={viewMode === "grid" ? "active" : ""}
          onClick={() => handleViewModeChange("grid")}
        >
          Grid View
        </button>
        <button
          className={viewMode === "map" ? "active" : ""}
          onClick={() => handleViewModeChange("map")}
        >
          Map View
        </button>
      </div>

      {filteredAndSortedProperties.length === 0 ? (
        <div className="empty-state">
          <p>No properties found. Try adjusting your filters.</p>
        </div>
      ) : (
        <>
          {viewMode === "grid" ? (
            <div className="properties-grid">
              {filteredAndSortedProperties.map((property: Property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <MapView
              properties={filteredAndSortedProperties}
              selectedProperty={selectedProperty}
              onPropertySelect={handlePropertySelect}
            />
          )}
        </>
      )}
    </div>
  );
};

export default PropertyList;
