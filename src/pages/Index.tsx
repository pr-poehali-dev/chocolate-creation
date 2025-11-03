import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Креативный набор',
    price: 2990,
    category: 'Творчество',
    image: 'https://cdn.poehali.dev/projects/9efa0495-a321-4871-a3f8-98737b04b2da/files/272b5cd3-0357-4ed3-b324-4db07449f731.jpg',
    tags: ['Новинка', 'Популярное']
  },
  {
    id: 2,
    name: 'Дизайнерский элемент',
    price: 4500,
    category: 'Дизайн',
    image: 'https://cdn.poehali.dev/projects/9efa0495-a321-4871-a3f8-98737b04b2da/files/272b5cd3-0357-4ed3-b324-4db07449f731.jpg',
    tags: ['Хит продаж']
  },
  {
    id: 3,
    name: 'Арт-коллекция',
    price: 3200,
    category: 'Творчество',
    image: 'https://cdn.poehali.dev/projects/9efa0495-a321-4871-a3f8-98737b04b2da/files/272b5cd3-0357-4ed3-b324-4db07449f731.jpg',
    tags: ['Новинка']
  },
  {
    id: 4,
    name: 'Премиум набор',
    price: 5990,
    category: 'Премиум',
    image: 'https://cdn.poehali.dev/projects/9efa0495-a321-4871-a3f8-98737b04b2da/files/272b5cd3-0357-4ed3-b324-4db07449f731.jpg',
    tags: ['Эксклюзив']
  },
  {
    id: 5,
    name: 'Студийный комплект',
    price: 3700,
    category: 'Дизайн',
    image: 'https://cdn.poehali.dev/projects/9efa0495-a321-4871-a3f8-98737b04b2da/files/272b5cd3-0357-4ed3-b324-4db07449f731.jpg',
    tags: ['Популярное']
  },
  {
    id: 6,
    name: 'Минималистичный стиль',
    price: 2500,
    category: 'Творчество',
    image: 'https://cdn.poehali.dev/projects/9efa0495-a321-4871-a3f8-98737b04b2da/files/272b5cd3-0357-4ed3-b324-4db07449f731.jpg',
    tags: ['Новинка']
  }
];

const categories = ['Все', 'Творчество', 'Дизайн', 'Премиум'];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary py-24 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 animate-fade-in">
          <div className="text-center space-y-6">
            <h1 className="font-heading text-6xl md:text-7xl font-bold text-white tracking-tight">
              Магазин<br/>креативных решений
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
              Уникальные товары для творческих людей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold shadow-xl hover:scale-105 transition-transform">
                Каталог товаров
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold">
                О нас
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(254, 243, 242)"/>
          </svg>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 space-y-6 animate-slide-up">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base border-2 focus:border-primary"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(cat)}
                    className="whitespace-nowrap font-medium"
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border">
              <Icon name="SlidersHorizontal" size={20} className="text-muted-foreground" />
              <div className="flex-1">
                <label className="text-sm font-medium text-muted-foreground block mb-2">
                  Цена: {priceRange[0]}₽ - {priceRange[1]}₽
                </label>
                <div className="flex gap-4">
                  <Input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-32"
                    placeholder="От"
                  />
                  <Input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-32"
                    placeholder="До"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    {product.tags.map((tag) => (
                      <Badge key={tag} className="bg-secondary text-secondary-foreground shadow-lg">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {product.category}
                    </Badge>
                    <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-3xl font-bold text-primary">
                      {product.price.toLocaleString()}₽
                    </span>
                    <Button className="gap-2 font-semibold shadow-md hover:shadow-xl transition-all">
                      <Icon name="ShoppingCart" size={18} />
                      В корзину
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Icon name="PackageOpen" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="font-heading text-2xl font-bold text-muted-foreground mb-2">
                Товары не найдены
              </h3>
              <p className="text-muted-foreground">
                Попробуйте изменить параметры поиска
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white border-0">
              О нас
            </Badge>
          </div>
          
          <h2 className="font-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Мы создаём уникальные вещи
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Наша миссия — вдохновлять креативных людей через качественные товары. 
            Каждый продукт в нашем каталоге тщательно отобран и создан с любовью к деталям.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {[
              { icon: 'Sparkles', title: 'Уникальность', desc: 'Эксклюзивные товары' },
              { icon: 'Heart', title: 'Качество', desc: 'Проверенные материалы' },
              { icon: 'Zap', title: 'Быстро', desc: 'Доставка за 1-3 дня' }
            ].map((item, i) => (
              <Card key={i} className="p-6 border-2 hover:border-primary transition-all hover:shadow-xl animate-scale-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <Icon name={item.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center space-y-4">
          <h3 className="font-heading text-3xl font-bold">Креативный магазин</h3>
          <p className="text-white/80">Товары для вдохновения</p>
          <div className="flex justify-center gap-4 pt-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Instagram" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Facebook" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Twitter" size={24} />
            </Button>
          </div>
          <div className="pt-8 border-t border-white/20 text-white/60 text-sm">
            © 2024 Креативный магазин. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
