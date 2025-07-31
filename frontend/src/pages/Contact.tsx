import { useAppSelector } from '../store/hooks';
import { themes } from '../themes/themeConfig';

const Contact = () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const themeConfig = themes[currentTheme];

  // Theme 1: Minimalist, centered, light, sans-serif
  if (currentTheme === 'theme1') {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-white font-theme1 px-2 pt-4" style={{ backgroundColor: themeConfig.colors.background }}>
        <div className="w-full max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: themeConfig.colors.text }}>Contact Us</h1>
          <p className="text-lg mb-6 text-center" style={{ color: themeConfig.colors.textSecondary }}>
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
        <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow border border-gray-200">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-200" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-200" placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Message</label>
              <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-200" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="w-full px-4 py-2 font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </div>
    );
  }

  // Theme 2: Dark mode, sidebar, bold serif font
  if (currentTheme === 'theme2') {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex bg-gray-900 font-theme2 pt-4">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-gray-800 text-white py-8 px-6 min-h-screen shadow-lg">
          <h2 className="text-2xl font-bold mb-8 tracking-wide">Sidebar</h2>
          <ul className="space-y-4">
            <li className="hover:text-green-400 cursor-pointer">Dashboard</li>
            <li className="hover:text-green-400 cursor-pointer">Contact</li>
            <li className="hover:text-green-400 cursor-pointer">Support</li>
            <li className="hover:text-green-400 cursor-pointer">Settings</li>
          </ul>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-start py-8 px-2 md:px-8">
          <div className="w-full max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-bold mb-4 text-left text-white">Contact Us</h1>
            <p className="text-lg mb-6 text-left text-gray-300">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>
          <div className="w-full max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow border border-gray-700">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-200">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-700 bg-gray-900 text-white" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-200">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-700 bg-gray-900 text-white" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-200">Message</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-700 bg-gray-900 text-white" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="w-full px-4 py-2 font-bold rounded-md bg-green-600 text-white hover:bg-green-700">Send Message</button>
            </form>
          </div>
        </main>
      </div>
    );
  }

  // Theme 3: Colorful, playful, card grid, Pacifico font
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 font-theme3 px-2 pt-4">
      <div className="w-full max-w-4xl mx-auto mb-8">
        <h1 className="text-5xl font-bold mb-4 text-center text-pink-500 drop-shadow-lg" style={{ fontFamily: 'Pacifico, cursive' }}>Contact Us</h1>
        <p className="text-xl mb-6 text-center text-green-600">
          Have a question or want to work together? We'd love to hear from you.
        </p>
      </div>
      <div className="w-full max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-xl border-4 border-yellow-300 hover:border-pink-400 transition-all duration-300" style={{ fontFamily: 'Pacifico, cursive', background: 'linear-gradient(135deg, #fffbe7 60%, #ffe4e6 100%)' }}>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-bold mb-2 text-pink-500">Name</label>
            <input type="text" id="name" className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none border-pink-200 bg-yellow-100 text-green-700 font-bold" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-bold mb-2 text-pink-500">Email</label>
            <input type="email" id="email" className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none border-pink-200 bg-yellow-100 text-green-700 font-bold" placeholder="your.email@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-bold mb-2 text-pink-500">Message</label>
            <textarea id="message" rows={4} className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none border-pink-200 bg-yellow-100 text-green-700 font-bold" placeholder="Your message..."></textarea>
          </div>
          <button type="submit" className="w-full px-4 py-3 font-bold rounded-lg bg-pink-400 text-white hover:bg-pink-500 transition-all duration-200">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 