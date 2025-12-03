import { useState } from 'react';
import Gallery from './Gallery';
import Feed from './Feed';
import Profile from './Profile';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'feed' | 'profile'>('gallery');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Floating mascot decorations */}
      <div className="fixed top-20 left-10 w-24 h-24 opacity-20 animate-bounce pointer-events-none z-0">
        <img src="https://cdn.poehali.dev/projects/420e8a83-0677-4178-8e99-945548515c2e/files/763edf77-9471-4a8c-a93d-c2f9785dee76.jpg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="fixed bottom-20 right-10 w-32 h-32 opacity-15 animate-pulse pointer-events-none z-0">
        <img src="https://cdn.poehali.dev/projects/420e8a83-0677-4178-8e99-945548515c2e/files/763edf77-9471-4a8c-a93d-c2f9785dee76.jpg" alt="" className="w-full h-full object-contain transform -scale-x-100" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-pink-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center overflow-hidden p-1 shadow-lg">
                <img src="https://cdn.poehali.dev/projects/420e8a83-0677-4178-8e99-945548515c2e/files/763edf77-9471-4a8c-a93d-c2f9785dee76.jpg" alt="Mascot" className="w-full h-full object-contain" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                CuteGallery
              </h1>
            </div>
            
            <nav className="flex gap-2">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'gallery'
                    ? 'bg-gradient-to-r from-pink-300 to-purple-300 text-white shadow-lg scale-105'
                    : 'bg-white/50 text-gray-600 hover:bg-white/80'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon name="Grid3x3" size={18} />
                  <span>Галерея</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('feed')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'feed'
                    ? 'bg-gradient-to-r from-pink-300 to-purple-300 text-white shadow-lg scale-105'
                    : 'bg-white/50 text-gray-600 hover:bg-white/80'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon name="Sparkles" size={18} />
                  <span>Лента</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'profile'
                    ? 'bg-gradient-to-r from-pink-300 to-purple-300 text-white shadow-lg scale-105'
                    : 'bg-white/50 text-gray-600 hover:bg-white/80'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon name="User" size={18} />
                  <span>Профиль</span>
                </div>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        {activeTab === 'gallery' && <Gallery />}
        {activeTab === 'feed' && <Feed />}
        {activeTab === 'profile' && <Profile />}
      </main>

      {/* Footer mascot */}
      <footer className="mt-20 py-8 text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur rounded-full shadow-lg">
          <img src="https://cdn.poehali.dev/projects/420e8a83-0677-4178-8e99-945548515c2e/files/763edf77-9471-4a8c-a93d-c2f9785dee76.jpg" alt="Mascot" className="w-8 h-8 object-contain" />
          <span className="text-sm text-gray-600">Сделано с любовью 💕</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;