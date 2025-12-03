import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface FeedPost {
  id: number;
  author: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

const mockFeed: FeedPost[] = [
  {
    id: 1,
    author: 'Мия',
    avatar: '💕',
    time: '5 минут назад',
    content: 'Новый образ! Как вам розовые чулочки? 🎀',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600',
    likes: 234,
    comments: 42,
  },
  {
    id: 2,
    author: 'Юки',
    avatar: '🌸',
    time: '15 минут назад',
    content: 'Сегодня чувствую себя особенно мило ✨',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600',
    likes: 421,
    comments: 67,
  },
  {
    id: 3,
    author: 'Сакура',
    avatar: '✨',
    time: '1 час назад',
    content: 'Всем привет! Рада присоединиться к сообществу 💖',
    likes: 189,
    comments: 31,
  },
];

export default function Feed() {
  const [posts, setPosts] = useState(mockFeed);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const handleLike = (postId: number) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
      setPosts(posts.map(p => p.id === postId ? { ...p, likes: p.likes - 1 } : p));
    } else {
      newLiked.add(postId);
      setPosts(posts.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p));
    }
    setLikedPosts(newLiked);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 opacity-30 animate-pulse">
          <img src="https://cdn.poehali.dev/projects/420e8a83-0677-4178-8e99-945548515c2e/files/763edf77-9471-4a8c-a93d-c2f9785dee76.jpg" alt="" className="w-full h-full object-contain" />
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 relative z-10">
          Лента новостей
        </h2>
        <p className="text-gray-600 relative z-10">Последние обновления от друзей 💫</p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden border-2 border-pink-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur animate-fade-in relative">
            <div className="absolute top-2 right-2 w-12 h-12 opacity-20">
              <img src="https://cdn.poehali.dev/projects/420e8a83-0677-4178-8e99-945548515c2e/files/763edf77-9471-4a8c-a93d-c2f9785dee76.jpg" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12 border-2 border-pink-200">
                  <AvatarFallback className="bg-gradient-to-br from-pink-200 to-purple-200 text-2xl">
                    {post.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{post.author}</h3>
                  <p className="text-sm text-gray-500">{post.time}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{post.content}</p>

              {post.image && (
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt="Post content"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="flex items-center gap-4 pt-4 border-t border-pink-100">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    likedPosts.has(post.id)
                      ? 'bg-gradient-to-r from-pink-300 to-pink-400 text-white scale-105'
                      : 'bg-pink-50 text-pink-600 hover:bg-pink-100'
                  }`}
                >
                  <Icon name="Heart" size={18} className={likedPosts.has(post.id) ? 'fill-current' : ''} />
                  <span className="font-medium">{post.likes}</span>
                </button>

                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all duration-300">
                  <Icon name="MessageCircle" size={18} />
                  <span className="font-medium">{post.comments}</span>
                </button>

                <button className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-300">
                  <Icon name="Share2" size={18} />
                  <span className="font-medium">Поделиться</span>
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}