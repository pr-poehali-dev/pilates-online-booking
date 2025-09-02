import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const trainers = [
    {
      name: "Анна Морозова",
      specialization: "Классический пилатес",
      experience: "8 лет",
      description: "Сертифицированный инструктор по методу Пилатеса с международным образованием"
    },
    {
      name: "Мария Соколова", 
      specialization: "Реабилитационный пилатес",
      experience: "6 лет",
      description: "Специалист по восстановительной терапии и работе с травмами"
    },
    {
      name: "Елена Васильева",
      specialization: "Пилатес для беременных",
      experience: "7 лет", 
      description: "Эксперт по пренатальному и постнатальному фитнесу"
    },
    {
      name: "Дмитрий Петров",
      specialization: "Силовой пилатес",
      experience: "5 лет",
      description: "Инструктор по функциональным тренировкам и силовому пилатесу"
    },
    {
      name: "Ольга Иванова",
      specialization: "Пилатес на оборудовании",
      experience: "9 лет",
      description: "Специалист по работе с реформером и другим профессиональным оборудованием"
    },
    {
      name: "Светлана Козлова", 
      specialization: "Стретчинг и пилатес",
      experience: "4 года",
      description: "Мастер по развитию гибкости и восстановлению после тренировок"
    },
    {
      name: "Александр Николаев",
      specialization: "Мужской пилатес",
      experience: "6 лет",
      description: "Специализируется на тренировках для мужчин и спортсменов"
    }
  ];

  const schedule = [
    { time: "09:00", class: "Утренний пилатес", trainer: "Анна Морозова", spots: 8 },
    { time: "11:00", class: "Реабилитационный", trainer: "Мария Соколова", spots: 6 },
    { time: "13:00", class: "Силовой пилатес", trainer: "Дмитрий Петров", spots: 10 },
    { time: "16:00", class: "Для беременных", trainer: "Елена Васильева", spots: 5 },
    { time: "18:00", class: "Классический", trainer: "Ольга Иванова", spots: 12 },
    { time: "20:00", class: "Стретчинг", trainer: "Светлана Козлова", spots: 9 }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-pink-50">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Наши тренеры
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Команда профессионалов с многолетним опытом и международными сертификатами
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {trainer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {trainer.name}
                  </CardTitle>
                  <CardDescription className="text-secondary font-medium">
                    {trainer.specialization}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="mb-3">
                    Опыт: {trainer.experience}
                  </Badge>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {trainer.description}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="mt-4 w-full border-primary text-primary hover:bg-primary hover:text-white">
                        Записаться к тренеру
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Запись к {trainer.name}</DialogTitle>
                        <DialogDescription>
                          Специализация: {trainer.specialization}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor={`trainer-${index}-name`}>Имя</Label>
                          <Input id={`trainer-${index}-name`} placeholder="Ваше имя" />
                        </div>
                        <div>
                          <Label htmlFor={`trainer-${index}-phone`}>Телефон</Label>
                          <Input id={`trainer-${index}-phone`} placeholder="+7 (999) 123-45-67" />
                        </div>
                        <div>
                          <Label htmlFor={`trainer-${index}-date`}>Предпочитаемая дата</Label>
                          <Input id={`trainer-${index}-date`} type="date" />
                        </div>
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                          Записаться
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

      {/* Schedule Section */}
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Расписание занятий
            </h3>
            <p className="text-xl text-gray-600">
              Выберите удобное время для тренировок
            </p>
          </div>

          <Tabs defaultValue="monday" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-7 mb-8">
              <TabsTrigger value="monday">Пн</TabsTrigger>
              <TabsTrigger value="tuesday">Вт</TabsTrigger>
              <TabsTrigger value="wednesday">Ср</TabsTrigger>
              <TabsTrigger value="thursday">Чт</TabsTrigger>
              <TabsTrigger value="friday">Пт</TabsTrigger>
              <TabsTrigger value="saturday">Сб</TabsTrigger>
              <TabsTrigger value="sunday">Вс</TabsTrigger>
            </TabsList>
            
            {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
              <TabsContent key={day} value={day} className="space-y-4">
                {schedule.map((session, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-6">
                          <div className="text-2xl font-bold text-primary">
                            {session.time}
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{session.class}</h4>
                            <p className="text-gray-600">{session.trainer}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge variant="secondary">
                            <Icon name="Users" size={16} className="mr-1" />
                            Мест: {session.spots}
                          </Badge>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="bg-gradient-to-r from-primary to-secondary">
                                <Icon name="Calendar" className="mr-2" size={16} />
                                Записаться
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                              <DialogHeader>
                                <DialogTitle>Запись на {session.class}</DialogTitle>
                                <DialogDescription>
                                  Тренер: {session.trainer} | Время: {session.time}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor={`schedule-${index}-name`}>Имя</Label>
                                  <Input id={`schedule-${index}-name`} placeholder="Ваше имя" />
                                </div>
                                <div>
                                  <Label htmlFor={`schedule-${index}-phone`}>Телефон</Label>
                                  <Input id={`schedule-${index}-phone`} placeholder="+7 (999) 123-45-67" />
                                </div>
                                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                                  Подтвердить запись
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Contact Section */}
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

      {/* Footer */}
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
    </div>
  );
};

export default Index;