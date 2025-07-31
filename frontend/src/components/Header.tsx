import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setTheme } from '../store/themeSlice';
import type { Theme } from '../store/themeSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = event.target.value as Theme;
    dispatch(setTheme(newTheme));
  };

  // Theme 1: Minimalist, light, sans-serif
  if (currentTheme === 'theme1') {
    return (
      <header
        className="sticky top-0 z-50 shadow-md bg-white font-theme1 border-b border-gray-200"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 tracking-tight"
          >
            Hipster App
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-blue-600">Contact</Link>
          </nav>
          <div className="flex items-center space-x-2">
            <label htmlFor="theme-selector" className="text-sm text-gray-500">Theme:</label>
            <select
              id="theme-selector"
              value={currentTheme}
              onChange={handleThemeChange}
              className="px-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-2 border-gray-200"
            >
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </select>
          </div>
        </div>
      </header>
    );
  }

  // Theme 2: Dark, bold serif, dark navbar
  if (currentTheme === 'theme2') {
    return (
      <header className="sticky top-0 z-50 shadow-lg bg-gray-900 font-theme2 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-green-400 tracking-wide"
          >
            Hipster App
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-bold text-gray-200 hover:text-green-400">Home</Link>
            <Link to="/about" className="font-bold text-gray-200 hover:text-green-400">About</Link>
            <Link to="/contact" className="font-bold text-gray-200 hover:text-green-400">Contact</Link>
          </nav>
          <div className="flex items-center space-x-2">
            <label htmlFor="theme-selector" className="text-sm text-gray-400 font-bold">Theme:</label>
            <select
              id="theme-selector"
              value={currentTheme}
              onChange={handleThemeChange}
              className="px-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-2 border-gray-700 bg-gray-800 text-white"
            >
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </select>
          </div>
        </div>
      </header>
    );
  }

  // Theme 3: Colorful, playful, Pacifico font, vibrant navbar
  return (
    <header className="sticky top-0 z-50 shadow-xl bg-gradient-to-r from-pink-200 via-yellow-200 to-green-200 font-theme3 border-b-4 border-pink-400">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-bold text-pink-500 drop-shadow-lg tracking-wider"
          style={{ fontFamily: 'Pacifico, cursive' }}
        >
          Hipster App
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-bold text-green-600 hover:text-pink-500 transition-colors duration-200">Home</Link>
          <Link to="/about" className="font-bold text-green-600 hover:text-pink-500 transition-colors duration-200">About</Link>
          <Link to="/contact" className="font-bold text-green-600 hover:text-pink-500 transition-colors duration-200">Contact</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <label htmlFor="theme-selector" className="text-base text-pink-500 font-bold">Theme:</label>
          <select
            id="theme-selector"
            value={currentTheme}
            onChange={handleThemeChange}
            className="px-3 py-1 text-base border-2 rounded-lg focus:outline-none focus:ring-2 border-pink-300 bg-yellow-100 text-green-700 font-bold"
            style={{ fontFamily: 'Pacifico, cursive' }}
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header; 