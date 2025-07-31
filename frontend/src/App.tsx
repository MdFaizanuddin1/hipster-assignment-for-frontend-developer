import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useAppSelector } from './store/hooks';
import { themes } from './themes/themeConfig';

const AppContent = () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const themeConfig = themes[currentTheme];

  return (
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

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;
