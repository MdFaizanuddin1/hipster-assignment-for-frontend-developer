import { useAppSelector } from '../store/hooks';
import { themes } from '../themes/themeConfig';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Home = () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const themeConfig = themes[currentTheme];
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  // Theme 1: Minimalist, centered, light, sans-serif
  if (currentTheme === 'theme1') {
    return (
      <div
        className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-white font-theme1 px-2 pt-4"
        style={{ backgroundColor: themeConfig.colors.background }}
      >
        <div className="w-full max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: themeConfig.colors.text }}>
            Main Content
          </h1>
          <p className="text-lg mb-6 text-center" style={{ color: themeConfig.colors.textSecondary }}>
            This is a minimalist layout. Below you'll find a list of products fetched from a public API, displayed in a clean card layout.
          </p>
        </div>
        {loading ? (
          <div className="text-center text-lg" style={{ color: themeConfig.colors.textSecondary }}>
            Loading products...
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col rounded-lg shadow p-4 transition-all duration-300 h-full cursor-pointer border hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: themeConfig.colors.surface,
                  borderColor: themeConfig.colors.border,
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain mb-4 bg-white rounded"
                  style={{ border: `1px solid ${themeConfig.colors.border}` }}
                />
                <h2 className="text-lg font-semibold mb-2" style={{ color: themeConfig.colors.text }}>
                  {product.title}
                </h2>
                <p className="text-sm mb-2 flex-1" style={{ color: themeConfig.colors.textSecondary }}>
                  {product.description.length > 100
                    ? product.description.slice(0, 100) + '...'
                    : product.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-base" style={{ color: themeConfig.colors.primary }}>
                    ${product.price}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: themeConfig.colors.accent, color: '#fff' }}>
                    {product.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
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
            <li className="hover:text-green-400 cursor-pointer">Products</li>
            <li className="hover:text-green-400 cursor-pointer">Orders</li>
            <li className="hover:text-green-400 cursor-pointer">Settings</li>
          </ul>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-start py-8 px-2 md:px-8">
          <div className="w-full max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-bold mb-4 text-left text-white">Main Content</h1>
            <p className="text-lg mb-6 text-left text-gray-300">
              This is a dark mode layout with a sidebar and bold serif font. Products are shown in a dark card grid.
            </p>
          </div>
          {loading ? (
            <div className="text-center text-lg text-gray-300">Loading products...</div>
          ) : error ? (
            <div className="text-center text-red-400">{error}</div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col rounded-lg shadow-lg p-4 transition-all duration-300 h-full cursor-pointer border border-gray-700 bg-gray-800 hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-contain mb-4 bg-white rounded"
                    style={{ border: '1px solid #333' }}
                  />
                  <h2 className="text-lg font-bold mb-2 text-white">{product.title}</h2>
                  <p className="text-sm mb-2 flex-1 text-gray-300">
                    {product.description.length > 100
                      ? product.description.slice(0, 100) + '...'
                      : product.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-base text-green-400">
                      ${product.price}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-700 text-white">
                      {product.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    );
  }

  // Theme 3: Colorful, playful, card grid, Pacifico font
  return (
    <div
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 font-theme3 px-2 pt-4"
      style={{ backgroundColor: themeConfig.colors.background }}
    >
      <div className="w-full max-w-4xl mx-auto mb-8">
        <h1 className="text-5xl font-bold mb-4 text-center text-pink-500 drop-shadow-lg">Main Content</h1>
        <p className="text-xl mb-6 text-center text-green-600">
          This is a colorful, playful layout with a card-based grid and a fun font. Enjoy the vibrant product cards!
        </p>
      </div>
      {loading ? (
        <div className="text-center text-lg text-pink-400">Loading products...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col rounded-3xl shadow-xl p-6 transition-all duration-300 h-full cursor-pointer border-4 border-yellow-300 bg-white hover:scale-110 hover:shadow-2xl hover:border-pink-400"
              style={{
                fontFamily: 'Pacifico, cursive',
                background: 'linear-gradient(135deg, #fffbe7 60%, #ffe4e6 100%)',
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4 bg-yellow-100 rounded-2xl border-2 border-pink-200"
              />
              <h2 className="text-xl font-bold mb-2 text-pink-500">{product.title}</h2>
              <p className="text-base mb-2 flex-1 text-green-600">
                {product.description.length > 60
                  ? product.description.slice(0, 60) + '...'
                  : product.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-lg text-yellow-500">
                  ${product.price}
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-pink-400 text-white">
                  {product.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home; 