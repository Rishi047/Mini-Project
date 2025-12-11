# Mini Project

A modern web application built with React and TypeScript.

## Project Structure

```
src/
├── main.tsx                 # Application entry point
├── components/
│   └── ui/
│       ├── carousel.tsx     # Carousel component
│       └── separator.tsx    # Separator component
├── const/
│   └── index.ts            # Constants and configuration
├── hooks/
│   └── use-auth.ts         # Authentication hook
└── lib/
    ├── trpc.ts             # tRPC client configuration
    └── utils.ts            # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

```bash
npm run build
```

## Technologies Used

- **React** - UI framework
- **TypeScript** - Type-safe JavaScript
- **tRPC** - End-to-end typesafe APIs
- **Vite** - Next generation frontend tooling

## Features

- Authentication support via `use-auth` hook
- Reusable UI components (Carousel, Separator)
- Type-safe API calls with tRPC
- Utility functions for common operations

## License

MIT
