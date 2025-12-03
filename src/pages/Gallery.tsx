import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Post {
  id: number;
  image: string;
  author: string;
  avatar: string;
  likes: number;
  stars: number;
  hearts: number;
}

const mockPosts: Post[] = [
  { id: 1, image: 'https://cdn.poehali.dev/files/405a0aaa-d2f9-47d5-9f66-b9577ea028b0.jpg', author: 'Мия', avatar: '💕', likes: 342, stars: 189, hearts: 534 },
  { id: 2, image: 'https://cdn.poehali.dev/projects/420e8a83-0677-4178-8e99-945548515c2e/files/f6e92692-65bd-4031-8d7b-749a47faac2b.jpg', author: 'Юки', avatar: '🌸', likes: 298, stars: 156, hearts: 421 },
  { id: 3, image: 'https://cdn.poehali.dev/projects/420e8a83-0677-4178-8e99-945548515c2e/files/9c71bc08-a103-4e54-8f3a-32d132a9d1c9.jpg', author: 'Рин', avatar: '🎀', likes: 487, stars: 292, hearts: 612 },
  { id: 4, image: 'https://cdn.poehali.dev/projects/420e8a83-0677-4178-8e99-945548515c2e/files/c39a619c-bc59-4aaa-aaf2-6bce9637cba1.jpg', author: 'Сакура', avatar: '✨', likes: 521, stars: 334, hearts: 767 },
  { id: 5, image: 'https://cdn.poehali.dev/projects/420e8a83-0677-4178-8e99-945548515c2e/files/fef39c6b-a80a-484d-8b86-2a26235c94f5.jpg', author: 'Айри', avatar: '🦋', likes: 656, stars: 389, hearts: 878 },
  { id: 6, image: 'https://cdn.poehali.dev/projects/420e8a83-0677-4178-8e99-945548515c2e/files/429f2dfc-23b4-4444-af5c-70232c5d1d81.jpg', author: 'Нана', avatar: '🌺', likes: 267, stars: 145, hearts: 389 },
  { id: 7, image: 'https://cdn.poehali.dev/projects/420e8a83-0677-4178-8e99-945548515c2e/files/c6d67403-414f-435b-a995-49e9308ec532.jpg', author: 'Каору', avatar: '💝', likes: 423, stars: 267, hearts: 556 },
  { id: 8, image: 'https://cdn.poehali.dev/projects/420e8a83-0677-4178-8e99-945548515c2e/files/bc5cabce-90e7-4953-978f-828b98b9a037.jpg', author: 'Хару', avatar: '🎨', likes: 378, stars: 221, hearts: 498 },
  { id: 9, image: 'https://cdn.poehali.dev/files/405a0aaa-d2f9-47d5-9f66-b9577ea028b0.jpg', author: 'Рен', avatar: '🌟', likes: 445, stars: 298, hearts: 623 },
];

export default function Gallery() {
  const [posts, setPosts] = useState(mockPosts);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [starredPosts, setStarredPosts] = useState<Set<number>>(new Set());

  const handleReaction = (postId: number, type: 'like' | 'star') => {
    if (type === 'like') {
      const newLiked = new Set(likedPosts);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
        setPosts(posts.map(p => p.id === postId ? { ...p, likes: p.likes - 1 } : p));
      } else {
        newLiked.add(postId);
        setPosts(posts.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p));
      }
      setLikedPosts(newLiked);
    } else {
      const newStarred = new Set(starredPosts);
      if (newStarred.has(postId)) {
        newStarred.delete(postId);
        setPosts(posts.map(p => p.id === postId ? { ...p, stars: p.stars - 1 } : p));
      } else {
        newStarred.add(postId);
        setPosts(posts.map(p => p.id === postId ? { ...p, stars: p.stars + 1 } : p));
      }
      setStarredPosts(newStarred);
    }
  };

  return (
    <div>
      <div className="mb-8 text-center relative">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 opacity-30 animate-bounce">
          <img src="https://i.pinimg.com/736x/98/e3/bf/98e3bf818cf6e5f5f5f8bbb7205d372a.jpg" alt="" className="w-full h-full object-contain" />
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 relative z-10">
          Милая галерея
        </h2>
        <p className="text-gray-600 relative z-10">Самые красивые моменты от нашего сообщества ✨</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="break-inside-avoid overflow-hidden border-2 border-pink-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white/80 backdrop-blur">
            <div className="relative group">
              <img
                src={post.image}
                alt={`Post by ${post.author}`}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 border-2 border-pink-200">
                    <AvatarFallback className="bg-gradient-to-br from-pink-200 to-purple-200 text-lg">
                      {post.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-gray-700">{post.author}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 relative">
                <div className="absolute -right-2 -bottom-2 w-8 h-8 opacity-40">
                  <img src="https://i.pinimg.com/736x/98/e3/bf/98e3bf818cf6e5f5f5f8bbb7205d372a.jpg" alt="" className="w-full h-full object-contain" />
                </div>
                <button
                  onClick={() => handleReaction(post.id, 'like')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 ${
                    likedPosts.has(post.id)
                      ? 'bg-gradient-to-r from-pink-300 to-pink-400 text-white scale-110'
                      : 'bg-pink-50 text-pink-600 hover:bg-pink-100'
                  }`}
                >
                  <Icon name="Heart" size={16} className={likedPosts.has(post.id) ? 'fill-current' : ''} />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>

                <button
                  onClick={() => handleReaction(post.id, 'star')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 ${
                    starredPosts.has(post.id)
                      ? 'bg-gradient-to-r from-purple-300 to-purple-400 text-white scale-110'
                      : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                  }`}
                >
                  <Icon name="Star" size={16} className={starredPosts.has(post.id) ? 'fill-current' : ''} />
                  <span className="text-sm font-medium">{post.stars}</span>
                </button>

                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600">
                  <Icon name="Sparkles" size={16} />
                  <span className="text-sm font-medium">{post.hearts}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}