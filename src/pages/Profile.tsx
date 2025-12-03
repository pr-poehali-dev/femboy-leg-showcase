import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Profile() {
  const userStats = [
    { label: 'Публикации', value: 42, icon: 'Image' as const },
    { label: 'Лайки', value: 1234, icon: 'Heart' as const },
    { label: 'Звёзды', value: 567, icon: 'Star' as const },
    { label: 'Подписчики', value: 892, icon: 'Users' as const },
  ];

  const achievements = [
    { emoji: '🌟', name: 'Звезда сообщества', description: 'Получено 500+ лайков' },
    { emoji: '💝', name: 'Любимчик', description: '1000+ реакций сердечек' },
    { emoji: '🎨', name: 'Креатор', description: 'Создано 50+ публикаций' },
    { emoji: '✨', name: 'Волшебник', description: 'Активность 30 дней подряд' },
  ];

  const recentPhotos = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300',
    'https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=300',
    'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=300',
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="border-2 border-pink-100 bg-white/80 backdrop-blur overflow-hidden mb-6 animate-fade-in">
        <div className="h-32 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200" />
        
        <div className="px-8 pb-8">
          <div className="flex flex-col sm:flex-row gap-6 -mt-16 mb-6">
            <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
              <AvatarFallback className="bg-gradient-to-br from-pink-300 to-purple-300 text-6xl">
                🎀
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 mt-16 sm:mt-20">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-800">Мия</h1>
                <div className="flex gap-2">
                  <Badge className="bg-gradient-to-r from-pink-300 to-pink-400 text-white border-0">
                    ⭐ VIP
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-300 to-purple-400 text-white border-0">
                    ✨ Топ креатор
                  </Badge>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Люблю розовый, милые образы и позитив ✨💕 Делюсь своим стилем с миром!
              </p>
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                Редактировать профиль
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {userStats.map((stat) => (
              <Card key={stat.label} className="p-4 text-center border-2 border-pink-50 hover:border-purple-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-white to-pink-50/30">
                <Icon name={stat.icon} className="mx-auto mb-2 text-purple-400" size={24} />
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </Card>

      <Card className="border-2 border-pink-100 bg-white/80 backdrop-blur p-6 mb-6 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Достижения
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.name}
              className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl">{achievement.emoji}</div>
              <div>
                <h3 className="font-semibold text-gray-800">{achievement.name}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="border-2 border-pink-100 bg-white/80 backdrop-blur p-6 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Мои фото
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {recentPhotos.map((photo, index) => (
            <div
              key={index}
              className="aspect-square rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
