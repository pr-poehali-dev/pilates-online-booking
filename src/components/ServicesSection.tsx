import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    {
      title: "Групповые занятия",
      price: "1 500 ₽",
      description: "Занятия в малых группах до 12 человек",
      features: ["Профессиональные инструкторы", "Современное оборудование", "Индивидуальный подход"]
    },
    {
      title: "Персональные тренировки", 
      price: "3 500 ₽",
      description: "Индивидуальные занятия один на один с тренером",
      features: ["Персональная программа", "Максимальное внимание", "Быстрый результат"]
    },
    {
      title: "Полу-персональные",
      price: "2 200 ₽", 
      description: "Занятия в парах или мини-группах до 4 человек",
      features: ["Оптимальная цена", "Дружеская атмосфера", "Качественная проработка"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Наши услуги
          </h3>
          <p className="text-xl text-gray-600">
            Выберите подходящий формат занятий
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{service.price}</div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                      Выбрать тариф
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>{service.title}</DialogTitle>
                      <DialogDescription>
                        Стоимость: {service.price} за занятие
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor={`service-${index}-name`}>Имя</Label>
                        <Input id={`service-${index}-name`} placeholder="Ваше имя" />
                      </div>
                      <div>
                        <Label htmlFor={`service-${index}-phone`}>Телефон</Label>
                        <Input id={`service-${index}-phone`} placeholder="+7 (999) 123-45-67" />
                      </div>
                      <div>
                        <Label htmlFor={`service-${index}-sessions`}>Количество занятий</Label>
                        <select className="w-full p-2 border rounded-md">
                          <option>1 занятие</option>
                          <option>4 занятия</option>
                          <option>8 занятий</option>
                          <option>12 занятий</option>
                        </select>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                        Оформить абонемент
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;