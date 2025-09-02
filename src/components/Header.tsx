import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Activity" className="text-primary" size={32} />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            PILATES STUDIO
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
          <a href="#trainers" className="text-gray-700 hover:text-primary transition-colors">Тренеры</a>
          <a href="#schedule" className="text-gray-700 hover:text-primary transition-colors">Расписание</a>
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
        </nav>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Записаться
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Онлайн запись</DialogTitle>
              <DialogDescription>
                Заполните форму и мы свяжемся с вами для подтверждения записи
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" placeholder="+7 (999) 123-45-67" />
              </div>
              <div>
                <Label htmlFor="service">Тип занятия</Label>
                <select className="w-full p-2 border rounded-md">
                  <option>Групповое занятие</option>
                  <option>Персональная тренировка</option>
                  <option>Полу-персональное</option>
                </select>
              </div>
              <div>
                <Label htmlFor="message">Комментарий</Label>
                <Textarea id="message" placeholder="Дополнительная информация" />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                Отправить заявку
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;