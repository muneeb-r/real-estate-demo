# Real Estate Listings Dashboard

A responsive React + TypeScript application for browsing real estate properties with filtering, sorting, and detailed property views.

## Demo

https://github.com/user-attachments/assets/06846a65-7471-483d-845f-4c1109730eec


## Features

- **Property Listings**: Display properties in a responsive grid layout
- **Search**: Search properties by title (case-insensitive)
- **Filters**: Filter by minimum number of bedrooms
- **Sorting**: Sort properties by price (ascending/descending)
- **Property Details**: Detailed view for each property with full information
- **Interactive Map**: View properties on an interactive map with markers
- **Price Charts**: Historical price trends for each property
- **View Toggle**: Switch between grid and map views
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Hover Animations**: Smooth card animations with shadow and scale effects

## Bonus Features ✨

### 📈 Price Charts
- **Historical Price Data**: Each property includes 12 months of price history
- **Interactive Charts**: Built with Recharts library showing price trends
- **Price Change Indicators**: Shows absolute and percentage price changes
- **Responsive Design**: Charts adapt to different screen sizes

### 🗺️ Interactive Map
- **Leaflet Integration**: Interactive map showing all property locations
- **Custom Markers**: Properties displayed as clickable map markers
- **Property Popups**: Hover/click markers to see property details
- **Navigation**: Click "View Details" in popup to navigate to property page
- **Filtering**: Map updates based on search and filter criteria

## How to Run

1. **Install dependencies:**
   ```bash
   yarn
   ```

2. **Start the development server:**
   ```bash
   yarn run dev
   ```

3. **Open your browser and navigate to:** `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── PropertyCard.tsx     # Individual property card component
│   ├── Filters.tsx          # Search and filter controls
│   ├── PriceChart.tsx       # Price history chart component (Bonus)
│   └── MapView.tsx          # Interactive map component (Bonus)
├── pages/
│   ├── PropertyList.tsx     # Main listings page with grid/map toggle
│   └── PropertyDetails.tsx  # Individual property details with price chart
├── types.ts                 # TypeScript type definitions
├── data.ts                  # Mock property data with coordinates & price history
├── App.tsx                  # Main app component with routing
├── App.css                  # All styling including chart and map styles
└── main.tsx                 # Entry point
```

## Technical Approach

### Architecture Decisions
- **React + TypeScript**: Chosen for type safety and better developer experience
- **React Router**: For client-side routing between list and detail views
- **Component-based Architecture**: Modular, reusable components for maintainability
- **CSS Grid/Flexbox**: For responsive layouts without external UI libraries
- **Mock Data**: In-memory data with realistic coordinates and price history
- **Recharts**: Lightweight charting library for price history visualization
- **React Leaflet**: Popular mapping library with excellent React integration

### State Management
- Used React's built-in `useState` and `useMemo` hooks
- Filters state is managed at the PropertyList level
- No external state management library needed for this scope

### Styling Approach
- Custom CSS with modern features (Grid, Flexbox, CSS Variables)
- Mobile-first responsive design
- Hover animations using CSS transitions and transforms
- Component-scoped styling with clear naming conventions

### Key Implementation Details

1. **Search Functionality**: Case-insensitive search using `toLowerCase()` and `includes()`
2. **Filtering**: Dynamic filtering using array methods with useMemo for performance
3. **Sorting**: Immutable sorting to avoid state mutations
4. **Routing**: Clean URL structure (`/property/:id`) for shareable links
5. **Error Handling**: Graceful handling of invalid property IDs
6. **Price Charts**: Recharts integration with custom formatting and responsive design
7. **Interactive Maps**: Leaflet integration with custom markers and popups
8. **View Toggle**: State management for switching between grid and map views
9. **Coordinate System**: NYC-area coordinates for realistic property locations

## Attention to Detail Requirements ✅

1. **Search placeholder**: "Search properties..." ✅
2. **Empty state message**: "No properties found. Try adjusting your filters." ✅
3. **Hover animations**: Card shadow and scale-up effects ✅

## Improvements for Production

Given more time, I would implement:

- **Real API Integration**: Replace mock data with actual REST API
- **Loading States**: Skeleton loaders and loading indicators
- **Error Boundaries**: React error boundaries for better error handling
- **Image Optimization**: Lazy loading and responsive images
- **Advanced Filtering**: Price range, property type, more locations
- **Map Integration**: Interactive map view with property markers
- **Favorites System**: Allow users to save favorite properties
- **URL State**: Sync filters with URL parameters for bookmarkable searches
- **Testing**: Unit tests with Jest and React Testing Library
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Performance**: Virtual scrolling for large datasets
- **SEO**: Meta tags and structured data for better search indexing

## Development Time

This project was completed in approximately **4 hours**, focusing on:

**Core Features (2 hours):**
- ⏰ 15 minutes: Project setup and TypeScript configuration
- ⏰ 60 minutes: Component development and functionality
- ⏰ 30 minutes: Styling and responsive design
- ⏰ 15 minutes: Testing, refinement, and documentation

**Bonus Features (1 hour):**
- ⏰ 30 minutes: Price chart integration with Recharts
- ⏰ 30 minutes: Interactive map with React Leaflet

## Satisfaction Level: 10/10

The implementation successfully meets all requirements plus bonus features with clean, maintainable code and excellent attention to detail. The price charts and interactive map provide significant added value and demonstrate proficiency with additional libraries. The responsive design and smooth animations create a polished, production-ready user experience.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
