import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Activity" className="text-primary" size={32} />
              <h5 className="text-2xl font-bold">PILATES STUDIO</h5>
            </div>
            <p className="text-gray-400">
              Ваш путь к здоровью и гармонии через профессиональные тренировки пилатеса.
            </p>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Быстрые ссылки</h6>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-primary transition-colors">Тренеры</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-primary transition-colors">Расписание</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Услуги</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Социальные сети</h6>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Pilates Studio. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;