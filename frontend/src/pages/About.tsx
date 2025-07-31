import { useAppSelector } from '../store/hooks';
import { themes } from '../themes/themeConfig';

const About = () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const themeConfig = themes[currentTheme];

  // Theme 1: Minimalist, centered, light, sans-serif
  if (currentTheme === 'theme1') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white font-theme1 px-2" style={{ backgroundColor: themeConfig.colors.background }}>
        <div className="w-full max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: themeConfig.colors.text }}>About Us</h1>
          <p className="text-lg mb-6 text-center" style={{ color: themeConfig.colors.textSecondary }}>
            We are passionate about creating beautiful, user-friendly web applications that provide an exceptional user experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="p-6 rounded-lg shadow bg-white border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Innovation</h3>
            <p className="text-gray-600">We constantly explore new technologies and methodologies to deliver cutting-edge solutions.</p>
          </div>
          <div className="p-6 rounded-lg shadow bg-white border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Quality</h3>
            <p className="text-gray-600">Every line of code is written with attention to detail and best practices.</p>
          </div>
          <div className="p-6 rounded-lg shadow bg-white border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">User Experience</h3>
            <p className="text-gray-600">We prioritize user needs and create intuitive, accessible interfaces.</p>
          </div>
        </div>
      </div>
    );
  }

  // Theme 2: Dark mode, sidebar, bold serif font
  if (currentTheme === 'theme2') {
    return (
      <div className="min-h-screen flex bg-gray-900 font-theme2">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-gray-800 text-white py-8 px-6 min-h-screen shadow-lg">
          <h2 className="text-2xl font-bold mb-8 tracking-wide">Sidebar</h2>
          <ul className="space-y-4">
            <li className="hover:text-green-400 cursor-pointer">Dashboard</li>
            <li className="hover:text-green-400 cursor-pointer">About</li>
            <li className="hover:text-green-400 cursor-pointer">Team</li>
            <li className="hover:text-green-400 cursor-pointer">Contact</li>
          </ul>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-start py-8 px-2 md:px-8">
          <div className="w-full max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-bold mb-4 text-left text-white">About Us</h1>
            <p className="text-lg mb-6 text-left text-gray-300">
              We are passionate about creating beautiful, user-friendly web applications that provide an exceptional user experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="p-6 rounded-lg shadow bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-green-400">Innovation</h3>
              <p className="text-gray-300">We constantly explore new technologies and methodologies to deliver cutting-edge solutions.</p>
            </div>
            <div className="p-6 rounded-lg shadow bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-green-400">Quality</h3>
              <p className="text-gray-300">Every line of code is written with attention to detail and best practices.</p>
            </div>
            <div className="p-6 rounded-lg shadow bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-green-400">User Experience</h3>
              <p className="text-gray-300">We prioritize user needs and create intuitive, accessible interfaces.</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Theme 3: Colorful, playful, card grid, Pacifico font
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 font-theme3 px-2">
      <div className="w-full max-w-4xl mx-auto mb-8">
        <h1 className="text-5xl font-bold mb-4 text-center text-pink-500 drop-shadow-lg" style={{ fontFamily: 'Pacifico, cursive' }}>About Us</h1>
        <p className="text-xl mb-6 text-center text-green-600">
          We are passionate about creating beautiful, user-friendly web applications that provide an exceptional user experience.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="p-8 rounded-3xl shadow-xl border-4 border-yellow-300 bg-white hover:border-pink-400 transition-all duration-300" style={{ fontFamily: 'Pacifico, cursive', background: 'linear-gradient(135deg, #fffbe7 60%, #ffe4e6 100%)' }}>
          <h3 className="text-2xl font-bold mb-3 text-pink-500">Innovation</h3>
          <p className="text-green-600">We constantly explore new technologies and methodologies to deliver cutting-edge solutions.</p>
        </div>
        <div className="p-8 rounded-3xl shadow-xl border-4 border-yellow-300 bg-white hover:border-pink-400 transition-all duration-300" style={{ fontFamily: 'Pacifico, cursive', background: 'linear-gradient(135deg, #fffbe7 60%, #ffe4e6 100%)' }}>
          <h3 className="text-2xl font-bold mb-3 text-pink-500">Quality</h3>
          <p className="text-green-600">Every line of code is written with attention to detail and best practices.</p>
        </div>
        <div className="p-8 rounded-3xl shadow-xl border-4 border-yellow-300 bg-white hover:border-pink-400 transition-all duration-300" style={{ fontFamily: 'Pacifico, cursive', background: 'linear-gradient(135deg, #fffbe7 60%, #ffe4e6 100%)' }}>
          <h3 className="text-2xl font-bold mb-3 text-pink-500">User Experience</h3>
          <p className="text-green-600">We prioritize user needs and create intuitive, accessible interfaces.</p>
        </div>
      </div>
    </div>
  );
};

export default About; 