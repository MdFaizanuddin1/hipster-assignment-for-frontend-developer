// Importing core modules for routing, state management, and components.
// Includes Redux Provider, BrowserRouter, and custom hooks/configs.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useAppSelector } from './store/hooks';
import { themes } from './themes/themeConfig';

// Functional component that consumes Redux theme state.
// Applies background color based on the selected theme.
const AppContent = () => {
  
  // Extracting the current theme from the Redux store.
  // Fetching corresponding theme configuration from the theme map.
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const themeConfig = themes[currentTheme];

  return (
    // The main container applies dynamic background color based on the selected theme.
    // Routes render Home, About, and Contact pages.
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: themeConfig.colors.background }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

// Root component wrapping the app with Redux and React Router providers.
// This is the entry point for the application.
function App() {
  return (
    // Wrapping the app with Redux Provider and Router to enable global state and routing.
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;
