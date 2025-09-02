import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Контакты
          </h3>
          <p className="text-xl text-gray-600">
            Найдите нас и начните свое путешествие к здоровью
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="p-6 border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Наш адрес</h4>
                  <p className="text-gray-600">ул. Спортивная, 15, Москва</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Телефон</h4>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Часы работы</h4>
                  <p className="text-gray-600">Пн-Вс: 8:00 - 22:00</p>
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="p-8 border-0 bg-white/80 backdrop-blur-sm">
            <h4 className="text-2xl font-bold mb-6 text-center">Свяжитесь с нами</h4>
            <div className="space-y-4">
              <div>
                <Label htmlFor="contact-name">Имя</Label>
                <Input id="contact-name" placeholder="Ваше имя" />
              </div>
              <div>
                <Label htmlFor="contact-phone">Телефон</Label>
                <Input id="contact-phone" placeholder="+7 (999) 123-45-67" />
              </div>
              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="contact-message">Сообщение</Label>
                <Textarea id="contact-message" placeholder="Ваше сообщение" rows={4} />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary text-lg py-3">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить сообщение
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;