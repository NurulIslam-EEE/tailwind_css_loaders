import React, { useState } from 'react';
type LoaderKey =
  | "spinner"
  | "dots"
  | "pulse"
  | "bars"
  | "gradient"
  | "squares"
  | "wave"
  | "dual"
  | "morphing"
  | "heart";

const TailwindLoaders = () => {
  const [activeLoader, setActiveLoader] = useState('spinner');

  const loaders: Record<LoaderKey, { name: string; component: JSX.Element }> = {
    spinner: {
      name: 'Classic Spinner',
      component: (
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      )
    },
    dots: {
      name: 'Three Dots',
      component: (
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      )
    },
    pulse: {
      name: 'Pulse Ring',
      component: (
        <div className="relative">
          <div className="w-12 h-12 bg-blue-500 rounded-full animate-ping absolute"></div>
          <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
        </div>
      )
    },
    bars: {
      name: 'Loading Bars',
      component: (
        <div className="flex space-x-1">
          <div className="w-2 h-8 bg-blue-500 rounded animate-pulse"></div>
          <div className="w-2 h-8 bg-blue-500 rounded animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-8 bg-blue-500 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-8 bg-blue-500 rounded animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        </div>
      )
    },
    gradient: {
      name: 'Gradient Spinner',
      component: (
        <div className="animate-spin rounded-full h-12 w-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
          <div className="bg-white rounded-full h-full w-full"></div>
        </div>
      )
    },
    squares: {
      name: 'Square Grid',
      component: (
        <div className="grid grid-cols-2 gap-1 w-8 h-8">
          <div className="bg-blue-500 animate-pulse"></div>
          <div className="bg-blue-500 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          <div className="bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="bg-blue-500 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        </div>
      )
    },
    wave: {
      name: 'Wave Loader',
      component: (
        <div className="flex items-end space-x-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-6 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      )
    },
    dual: {
      name: 'Dual Ring',
      component: (
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )
    },
    morphing: {
      name: 'Morphing Dots',
      component: (
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
        </div>
      )
    },
    heart: {
      name: 'Heartbeat',
      component: (
        <div className="w-12 h-12 bg-red-500 transform rotate-45 animate-pulse relative">
          <div className="w-6 h-6 bg-red-500 rounded-full absolute -top-3 left-0"></div>
          <div className="w-6 h-6 bg-red-500 rounded-full absolute top-0 -left-3"></div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Tailwind CSS Loaders
        </h1>
        
        {/* Loader Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(loaders).map(([key, loader]) => (
            <button
              key={key}
              onClick={() => setActiveLoader(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeLoader === key
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {loader.name}
            </button>
          ))}
        </div>

        {/* Active Loader Display */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">
              {loaders[activeLoader].name}
            </h2>
            <div className="flex justify-center items-center h-32">
              {loaders[activeLoader].component}
            </div>
          </div>
        </div>

        {/* All Loaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(loaders).map(([key, loader]) => (
            <div
              key={key}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold mb-6 text-gray-800 text-center">
                {loader.name}
              </h3>
              <div className="flex justify-center items-center h-20">
                {loader.component}
              </div>
            </div>
          ))}
        </div>

        {/* Usage Example */}
        <div className="mt-12 bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm overflow-x-auto">
          <div className="mb-2 text-gray-500">// Example usage in your component:</div>
          <div className="text-white">
            {`<div className="flex justify-center items-center">
  <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
</div>`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindLoaders;
