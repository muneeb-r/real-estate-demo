export interface Property {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  location: string;
  image: string;
  coordinates: [number, number]; // [latitude, longitude]
  priceHistory?: PriceHistoryPoint[];
}

export interface PriceHistoryPoint {
  date: string;
  price: number;
}

export interface FilterState {
  search: string;
  minBedrooms: number | "";
  sortBy: "price-asc" | "price-desc" | "";
}
