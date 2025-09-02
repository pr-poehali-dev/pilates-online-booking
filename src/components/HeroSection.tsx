import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section id="home" className="py-20 text-center animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Найди свой баланс
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Откройте для себя силу и гибкость с нашими профессиональными тренерами. 
          Современная студия пилатеса для всех уровней подготовки.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на пробное занятие
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Пробное занятие - БЕСПЛАТНО!</DialogTitle>
                <DialogDescription>
                  Первое занятие совершенно бесплатно для новых клиентов
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="trial-name">Имя</Label>
                  <Input id="trial-name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="trial-phone">Телефон</Label>
                  <Input id="trial-phone" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <Label htmlFor="trial-experience">Опыт в пилатесе</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Впервые</option>
                    <option>Начинающий</option>
                    <option>Средний уровень</option>
                    <option>Продвинутый</option>
                  </select>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  Записаться бесплатно
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white transition-all">
            <Icon name="Play" className="mr-2" size={20} />
            Смотреть видео
          </Button>
        </div>
        
        {/* Hero Image */}
        <div className="relative max-w-4xl mx-auto">
          <img 
            src="/img/65d9b800-9148-4af9-8481-394d5cd4bb3c.jpg" 
            alt="Пилатес студия" 
            className="rounded-3xl shadow-2xl w-full h-96 object-cover animate-scale-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;