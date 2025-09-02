import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const ScheduleSection = () => {
  const schedule = [
    { time: "09:00", class: "Утренний пилатес", trainer: "Анна Морозова", spots: 8 },
    { time: "11:00", class: "Реабилитационный", trainer: "Мария Соколова", spots: 6 },
    { time: "13:00", class: "Силовой пилатес", trainer: "Дмитрий Петров", spots: 10 },
    { time: "16:00", class: "Для беременных", trainer: "Елена Васильева", spots: 5 },
    { time: "18:00", class: "Классический", trainer: "Ольга Иванова", spots: 12 },
    { time: "20:00", class: "Стретчинг", trainer: "Светлана Козлова", spots: 9 }
  ];

  return (
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
  );
};

export default ScheduleSection;