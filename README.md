# Train Stations in Germany 🚉

<p align="center">
  <a href="https://github.com/Poouyah/train-stations/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/Poouyah/train-stations/ci.yml?label=CI" alt="CI Status">
  </a>
  <a href="https://train-stations.vercel.app/">
    <img src="https://img.shields.io/website?url=https%3A%2F%2Ftrain-stations.vercel.app%2F" alt="Website">
  </a>
  <a href="https://github.com/Poouyah/train-stations/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Poouyah/train-stations" alt="License">
  </a>
  <a href="https://github.com/Poouyah/train-stations/stargazers">
    <img src="https://img.shields.io/github/stars/Poouyah/train-stations?style=social" alt="Stars">
  </a>
</p>

<p align="center">
  A frontend app visualizing German train stations on a Leaflet map. Fetch data from API, filter by city, and interact with markers. Built with Next.js and React.js.
</p>

<p align="center">
  <a href="https://train-stations.vercel.app/"><strong>Live Demo</strong></a> •
  <a href="https://github.com/Poouyah/train-stations/issues"><strong>Report Bug</strong></a> •
  <a href="https://github.com/Poouyah/train-stations/pulls"><strong>Request Feature</strong></a>
</p>

## Features ✨

- **Data Fetching**: Retrieves station data from a GitHub Gist API.
- **Map Visualization**: Interactive Leaflet map with markers and popups.
- **Station List**: Filterable sidebar list with clickable items.
- **City Filter**: Dropdown to filter by city (resets with "All").
- **Interactive Map**: Zoom and highlight stations on click.
- **State Handling**: Loading and error states.
- **Testing**: Unit and integration tests included.

## Tech Stack 🛠️

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Leaflet-199900?style=flat&logo=leaflet&logoColor=white" alt="Leaflet">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white" alt="Jest">
</p>

## Prerequisites

- Node.js (v18 or later)
- npm, yarn, pnpm, or bun

## Installation 📦

1. Clone the repository:
   ```bash
   git clone https://github.com/Poouyah/train-stations.git
   cd train-stations
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

## Running Locally 🏃‍♂️

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Testing 🧪

The project includes tests for components and integration.

1. Run tests:
   ```bash
   npm test
   # or with watch mode
   npm test -- --watch
   ```

Tests are located in the `__tests__` directory and cover:
- Rendering of loading/error states.
- Station list rendering and interactions.
- Map component props and basic rendering.
- Data fetching integration in the Home component.

## Deployment ☁️

This app is deployed on Vercel: [https://train-stations.vercel.app/](https://train-stations.vercel.app/)

## Usage 📖

- Upon loading, the app fetches station data and displays all stations on the map and in the list.
- Use the "Filter by City" dropdown to select a city; the list and map will update to show only matching stations.
- Click on a station in the list to zoom the map to its location and open a popup with details.
- Select "All" in the filter to reset and show everything.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

For more information, visit the [Next.js Documentation](https://nextjs.org/docs) or [Leaflet Documentation](https://leafletjs.com/reference.html).
