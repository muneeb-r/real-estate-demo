import { Property } from "./types";

export const mockProperties: Property[] = [
  {
    id: 1,
    title: "Modern Apartment in City Center",
    price: 250000,
    bedrooms: 2,
    location: "Downtown",
    image: "https://placehold.co/300x200",
    coordinates: [40.7589, -73.9851], // NYC Downtown coordinates
    priceHistory: [
      { date: "2024-01", price: 230000 },
      { date: "2024-04", price: 235000 },
      { date: "2024-07", price: 245000 },
      { date: "2024-10", price: 250000 },
    ],
  },
  {
    id: 2,
    title: "Cozy Suburban Home",
    price: 320000,
    bedrooms: 3,
    location: "Suburbs",
    image: "https://placehold.co/300x200",
    coordinates: [40.7282, -73.7949], // Queens suburbs
    priceHistory: [
      { date: "2024-01", price: 305000 },
      { date: "2024-04", price: 310000 },
      { date: "2024-07", price: 315000 },
      { date: "2024-10", price: 320000 },
    ],
  },
  {
    id: 3,
    title: "Luxury Penthouse with City Views",
    price: 750000,
    bedrooms: 4,
    location: "Downtown",
    image: "https://placehold.co/300x200",
    coordinates: [40.7614, -73.9776], // Manhattan
    priceHistory: [
      { date: "2024-01", price: 720000 },
      { date: "2024-04", price: 730000 },
      { date: "2024-07", price: 740000 },
      { date: "2024-10", price: 750000 },
    ],
  },
  {
    id: 4,
    title: "Charming Cottage by the Lake",
    price: 180000,
    bedrooms: 2,
    location: "Lakeside",
    image: "https://placehold.co/300x200",
    coordinates: [40.9176, -73.7004], // Bronx lakeside
    priceHistory: [
      { date: "2024-01", price: 175000 },
      { date: "2024-04", price: 176000 },
      { date: "2024-07", price: 178000 },
      { date: "2024-10", price: 180000 },
    ],
  },
  {
    id: 5,
    title: "Spacious Family Home",
    price: 420000,
    bedrooms: 5,
    location: "Suburbs",
    image: "https://placehold.co/300x200",
    coordinates: [40.6892, -74.0445], // Staten Island
    priceHistory: [
      { date: "2024-01", price: 400000 },
      { date: "2024-04", price: 405000 },
      { date: "2024-07", price: 415000 },
      { date: "2024-10", price: 420000 },
    ],
  },
  {
    id: 6,
    title: "Contemporary Studio Loft",
    price: 195000,
    bedrooms: 1,
    location: "Arts District",
    image: "https://placehold.co/300x200",
    coordinates: [40.7505, -73.9934], // Chelsea/Arts District
    priceHistory: [
      { date: "2024-01", price: 185000 },
      { date: "2024-04", price: 188000 },
      { date: "2024-07", price: 192000 },
      { date: "2024-10", price: 195000 },
    ],
  },
  {
    id: 7,
    title: "Victorian Townhouse",
    price: 580000,
    bedrooms: 3,
    location: "Historic District",
    image: "https://placehold.co/300x200",
    coordinates: [40.6936, -73.9893], // Brooklyn Heights
    priceHistory: [
      { date: "2024-01", price: 560000 },
      { date: "2024-04", price: 565000 },
      { date: "2024-07", price: 575000 },
      { date: "2024-10", price: 580000 },
    ],
  },
  {
    id: 8,
    title: "Minimalist Beach House",
    price: 650000,
    bedrooms: 3,
    location: "Beachfront",
    image: "https://placehold.co/300x200",
    coordinates: [40.5795, -74.1502], // Staten Island Beach
    priceHistory: [
      { date: "2024-01", price: 620000 },
      { date: "2024-04", price: 630000 },
      { date: "2024-07", price: 640000 },
      { date: "2024-10", price: 650000 },
    ],
  },
];
