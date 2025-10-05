# LinkHub - React + Vite + Tailwind Starter

A modern, fast, and well-configured starter template for React applications using Vite as the build tool and Tailwind CSS for styling.

## ✨ Features

- ⚡️ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 19** - Latest React with modern features
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework with the latest version
- 📦 **TypeScript** - Full TypeScript support with strict configuration
- 🧪 **Vitest** - Fast unit testing with React Testing Library
- 🎯 **ESLint** - Code linting with React and TypeScript rules
- 💅 **Prettier** - Code formatting with Tailwind CSS plugin
- 🔧 **SASS/SCSS** - Enhanced CSS with Sass support
- 📱 **Responsive** - Mobile-first responsive design
- 🌙 **Dark Mode** - Built-in light/dark mode support

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-vite-tailwind-starter
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── test/
│   │   ├── mocks/
│   │   │   ├── filters.mock.ts
│   │   │   └── schema.mock.ts
│   │   ├── setup.ts
│   │   └── utils.tsx
│   ├── App.scss
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.scss
│   ├── main.test.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
```

## 🛠️ Available Scripts

### Development
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Testing
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:ui` - Run tests with Vitest UI

### Code Quality
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is formatted
- `npm run type-check` - Run TypeScript type checking

## 🧪 Testing

This project uses Vitest and React Testing Library for testing. The test setup includes:

- **Vitest** - Fast unit test runner
- **React Testing Library** - Testing utilities for React components
- **jsdom** - DOM environment for testing
- **@testing-library/jest-dom** - Custom Jest matchers
- **User Event** - Fire events for user interactions

### Test Structure

- [`src/test/setup.ts`](src/test/setup.ts) - Test environment setup
- [`src/test/utils.tsx`](src/test/utils.tsx) - Custom render utilities and test helpers
- [`src/test/mocks/`](src/test/mocks/) - Mock data for testing

### Writing Tests

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '../test/utils';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
```

## 🎨 Styling

### Tailwind CSS
This project uses Tailwind CSS v4 with the new Vite plugin. Global styles are defined in [`src/index.scss`](src/index.scss).

### SASS/SCSS
Component-specific styles can be written in SASS/SCSS files like [`src/App.scss`](src/App.scss).

## ⚙️ Configuration

### TypeScript
- [`tsconfig.json`](tsconfig.json) - Project references configuration
- [`tsconfig.app.json`](tsconfig.app.json) - Application TypeScript config
- [`tsconfig.node.json`](tsconfig.node.json) - Node.js TypeScript config

### Vite
Configuration in [`vite.config.ts`](vite.config.ts) includes:
- React plugin
- Tailwind CSS plugin  
- Vitest configuration
- Test coverage settings

### ESLint
Modern ESLint configuration in [`eslint.config.js`](eslint.config.js) with:
- TypeScript support
- React hooks rules
- React refresh rules

## 📦 Dependencies

### Core Dependencies
- **React 19** - UI library
- **React DOM 19** - DOM renderer

### Development Dependencies
- **Vite** - Build tool and dev server
- **TypeScript** - Type checking
- **Vitest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Tailwind CSS** - Utility-first CSS
- **SASS** - CSS preprocessing

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Popular Deployment Options
- **Vercel** - Zero-config deployment for Vite projects
- **Netlify** - Drag and drop or Git integration
- **GitHub Pages** - Free hosting for open source projects
- **Railway** - Full-stack deployment platform

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Vitest](https://vitest.dev/) - A blazing fast unit test framework