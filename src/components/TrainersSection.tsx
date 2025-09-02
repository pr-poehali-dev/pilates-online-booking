import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const TrainersSection = () => {
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

  return (
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
  );
};

export default TrainersSection;