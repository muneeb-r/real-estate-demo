import React from "react";
import { FilterState } from "../types";

interface FiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, onFiltersChange }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({
      ...filters,
      search: e.target.value,
    });
  };

  const handleBedroomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "" ? "" : parseInt(e.target.value);
    onFiltersChange({
      ...filters,
      minBedrooms: value,
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFiltersChange({
      ...filters,
      sortBy: e.target.value as FilterState["sortBy"],
    });
  };

  return (
    <div className="filters">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search properties..."
          value={filters.search}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="bedrooms">Min Bedrooms:</label>
          <select
            id="bedrooms"
            value={filters.minBedrooms}
            onChange={handleBedroomsChange}
            className="filter-select"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            value={filters.sortBy}
            onChange={handleSortChange}
            className="filter-select"
          >
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
