import React, { useState } from 'react';
import { providers } from '../data/providers';
import { products } from '../data/products';
import { ExternalLink, Package, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

const Providers: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);

  // Check for hash in URL to auto-select provider
  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const providerId = parseInt(hash);
      if (providerId && providers.find(p => p.id === providerId)) {
        setSelectedProvider(providerId);
      }
    }
  }, []);

  // Close zoom modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setZoomImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getProviderProducts = (providerId: number) => {
    return products.filter(product => product.providerId === providerId);
  };

  const getProviderCategories = (providerId: number) => {
    const providerProducts = getProviderProducts(providerId);
    const categories = [...new Set(providerProducts.map(product => product.category))];
    return categories;
  };

  const getProductsByCategory = (providerId: number, category: string) => {
    return products.filter(product => product.providerId === providerId && product.category === category);
  };

  const getFeaturedProducts = (providerId: number) => {
    const providerProducts = getProviderProducts(providerId);
    const categories = getProviderCategories(providerId);
    
    // Get 2 products from each category, max 6 total
    const featured = [];
    for (const category of categories.slice(0, 3)) {
      const categoryProducts = providerProducts.filter(p => p.category === category);
      featured.push(...categoryProducts.slice(0, 2));
    }
    return featured.slice(0, 6);
  };

  const selectedProviderData = selectedProvider 
    ? providers.find(p => p.id === selectedProvider)
    : null;

  if (selectedProvider && selectedProviderData) {
    const categories = getProviderCategories(selectedProvider);
    const featuredProducts = getFeaturedProducts(selectedProvider);

    return (<>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => {
              setSelectedProvider(null);
              setSelectedCategory(null);
              setIsDropdownOpen(false);
            }}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver a Proveedores
          </button>

          {/* Provider Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img
                src={selectedProviderData.logo}
                alt={selectedProviderData.name}
                className="w-24 h-24 rounded-lg object-contain bg-white p-2 shadow-md"
              />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedProviderData.name}
                </h1>
                <p className="text-gray-600 mb-4">
                  {selectedProviderData.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProviderData.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://${selectedProviderData.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  {selectedProviderData.website}
                </a>
              </div>
            </div>
          </div>

          {/* Products Navigation */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Package className="h-6 w-6 mr-2 text-blue-600" />
                Catálogo de Productos
              </h2>
              
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Productos
                  {isDropdownOpen ? (
                    <ChevronUp className="h-4 w-4 ml-2" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-2" />
                  )}
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-10">
                    <div className="py-2">
                      <button
                        onClick={() => {
                          setSelectedCategory(null);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 ${
                          !selectedCategory ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                        }`}
                      >
                        Productos Destacados
                      </button>
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 ${
                            selectedCategory === category ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                          }`}
                        >
                          {category}
                          <span className="text-sm text-gray-500 ml-2">
                            ({getProductsByCategory(selectedProvider, category).length})
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Products Display */}
          <div className="mb-8">
            {!selectedCategory ? (
              // Featured Products
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Productos Destacados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-contain bg-white p-2 cursor-zoom-in hover:opacity-95 transition"
                        onClick={() => setZoomImage({ src: product.image, alt: product.name })}
                      />
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
                            {product.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Category Products
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {selectedCategory}
                  <span className="text-lg text-gray-500 ml-2">
                    ({getProductsByCategory(selectedProvider, selectedCategory).length} productos)
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getProductsByCategory(selectedProvider, selectedCategory).map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-contain bg-white p-2 cursor-zoom-in hover:opacity-95 transition"
                        onClick={() => setZoomImage({ src: product.image, alt: product.name })}
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={zoomImage?.src || ''}
              alt={zoomImage?.alt || ''}
              className="w-full max-h-[85vh] object-contain bg-white rounded-lg"
            />
          </div>
        </div>
      )}
    </>);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Proveedores
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabajamos con proveedores de clase mundial para ofrecerte los mejores productos 
            y servicios. Haz clic en cualquier proveedor para ver su catálogo completo.
          </p>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {providers.map((provider) => {
            const providerProductCount = getProviderProducts(provider.id).length;
            
            return (
              <div
                key={provider.id}
                onClick={() => setSelectedProvider(provider.id)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={provider.logo}
                    alt={provider.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {provider.name}
                    </h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {provider.description}
                  </p>
                  
                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {provider.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Product Count */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center text-gray-500">
                      <Package className="h-4 w-4 mr-1" />
                      <span className="text-sm">
                        {providerProductCount} productos disponibles
                      </span>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium">
                      Ver Productos
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {providers.length}+
              </div>
              <div className="text-gray-600">Proveedores Verificados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Productos Disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Providers;