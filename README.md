# Hipster Assessment

This project is a React application bootstrapped with Vite and styled using Tailwind CSS. All frontend code is located in the `frontend` directory.

## Features

- **Theme Switcher:** Select from three distinct themes (Minimalist, Dark, Playful) using a dropdown in the header. The selected theme is persisted across page reloads using localStorage.
- **Redux State Management:** Theme state is managed globally with Redux Toolkit.
- **React Router:** Multi-page navigation (Home, About, Contact) with React Router.
- **Responsive Design:** Layouts adapt for desktop and mobile.
- **API Integration:** Product data is fetched from [Fake Store API](https://fakestoreapi.com/products) and displayed on the Home page.

## Themes

- **Theme 1 (Default): Minimalist**
  - Light background, simple sans-serif font (Inter)
  - Centered, clean layout
  - Subtle blue accents
- **Theme 2: Dark Mode**
  - Dark background, bold serif font (Merriweather)
  - Sidebar layout on desktop
  - Green accents and strong contrast
- **Theme 3: Playful/Colorful**
  - Colorful backgrounds, playful Google Font (Pacifico)
  - Card-based grid layout
  - Pink, yellow, and green accents

## Project Structure

```
hipster assesment/
  frontend/    # React + Vite + Tailwind frontend app
```

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/MdFaizanuddin1/hipster-assignment-for-react-frontend-developer.git
cd hipster\ assesment
```

### 2. Install dependencies
```bash
cd frontend
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The app will be available at the URL shown in your terminal (usually http://localhost:5173).

### 4. Build for production
```bash
npm run build
```

### 5. Preview the production build
```bash
npm run preview
```
## Live Demo
[View deployed app](https://hipster-assignment-for-frontend-dev.vercel.app/)

## Tech Stack
- React 19
- Vite
- Tailwind CSS 4
- Redux Toolkit
- React Router DOM
- TypeScript

## Additional Notes
- Make sure you have Node.js (v16 or higher) and npm installed.
- Tailwind CSS is configured in the frontend project. You can add your styles in `frontend/src/index.css`.

## Test Credentials
_No authentication required — the app is publicly accessible._