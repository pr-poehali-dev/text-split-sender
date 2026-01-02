import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <Badge variant="outline" className="text-sm px-4 py-2">
              Финальный Оффер
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Система <span className="text-primary">"Товарный Снайпер"</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Превратите вашу хаотичную рекламу в автономную машину продаж. 
              Получайте рентабельные заказы из Яндекс.Директ с гарантированной защитой вашего бюджета.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-12 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Внедрение и обслуживание Системы "Товарный Снайпер"
          </h2>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-8 md:p-10 text-center">
            <div className="flex justify-center mb-4">
              <Icon name="Sparkles" size={40} className="text-primary" />
            </div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Вы получаете не просто "ведение рекламы", а полноценную систему, которая работает на вас 24/7. Мы не просто приводим трафик, мы строим управляемый и предсказуемый канал продаж для вашего интернет-магазина.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Что входит в систему
            </h2>
          </div>

          <div className="grid gap-8 md:gap-12">
            <Card className="p-8 animate-scale-in hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Target" size={28} className="text-primary" />
                </div>
                <div>
                  <Badge className="mb-2">1-я неделя</Badge>
                  <h3 className="text-2xl font-bold mb-2">
                    Стратегический фундамент
                  </h3>
                </div>
              </div>
              <div className="space-y-4 ml-16">
                <div className="bg-primary/5 p-6 rounded-lg border-2 border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Star" size={20} className="text-primary" />
                    <h4 className="font-bold text-xl">
                      Настройка "Гипер-Фида"
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы проводим аудит и доработку вашего товарного фида. Находим и исправляем ошибки, из-за которых вы теряете до 80% релевантности. Мы обогащаем фид данными (размер, цвет, материал), чтобы Директ мог с ювелирной точностью показывать нужный товар на нужный запрос.
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-semibold text-lg mb-2">
                    ABC-Анализ "Фокус на Прибыль"
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Мы проводим глубокий анализ вашей товарной матрицы по методу ABC, разделяя все товары на три категории:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Группа А</strong> (20% товаров, дающие 80% выручки): Ваши "чемпионы". На них мы направляем максимум внимания и бюджета.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Группа B</strong> (30% товаров, дающие 15% выручки): "Рабочие лошадки". Работаем над повышением их эффективности.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Группа С</strong> (50% товаров, дающие 5% выручки): "Кандидаты на вылет". Мы либо отключаем на них рекламу, чтобы не сжигать бюджет, либо ищем способы сделать их рентабельными.</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Этот подход гарантирует, что каждый рубль вашего бюджета работает на самые прибыльные позиции.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 animate-scale-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Zap" size={28} className="text-primary" />
                </div>
                <div>
                  <Badge className="mb-2">2-4 недели</Badge>
                  <h3 className="text-2xl font-bold mb-2">
                    Запуск и калибровка "Боевой Системы"
                  </h3>
                </div>
              </div>
              <div className="space-y-3 ml-16 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Создание гиперсегментированных динамических кампаний</span>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Непрерывный А/Б тест связок "стратегия-цель"</span>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Выход на идеальную модель: оплата за конверсию с ограничением по ДРР</span>
                </p>
              </div>
            </Card>

            <Card className="p-8 animate-scale-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="BarChart" size={28} className="text-primary" />
                </div>
                <div>
                  <Badge className="mb-2">Ежемесячно</Badge>
                  <h3 className="text-2xl font-bold mb-2">
                    Сервисное Обслуживание
                  </h3>
                </div>
              </div>
              <div className="space-y-3 ml-16 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Еженедельный Спринт-Отчет "Пульс Кампании":</strong> Каждый понедельник инфографика с планом/фактом</span>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Ежемесячный Стратегический Созвон:</strong> Живой видео-созвон с анализом юнит-экономики</span>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Сервис "Ранний Доступ":</strong> Тестируем новые технологии Директа на вашем проекте первыми</span>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Бонусный Стек
            </h2>
            <p className="text-muted-foreground text-lg">
              Дополнительная ценность для вашего успеха
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Icon name="Gauge" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Бонус №1: Персональный Дашборд "E-com Штурвал" в Яндекс.Метрике</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Мы создаем для вас персональный, настроенный дашборд прямо внутри вашего аккаунта Яндекс.Метрики. На одном экране вы будете видеть 3-5 ключевых показателей вашего бизнеса (ДРР, CPO, ROMI, выручка) в виде понятных графиков. Это ваш личный "штурвал" для контроля ситуации в любой момент.
              </p>
              <p className="text-sm font-semibold text-primary">Ценность: 25 000 рублей.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Icon name="TrendingUp" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Бонус №2: Стратегия Масштабирования "Следующий Уровень"</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Через 3 месяца совместной работы мы проводим отдельную стратегическую сессию и готовим для вас пошаговый план: как увеличить количество заказов в 2-3 раза, сохранив или улучшив показатели рентабельности.
              </p>
              <p className="text-sm font-semibold text-primary">Ценность: 30 000 рублей.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Icon name="ListChecks" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Бонус №3: Чек-лист "5-минутная Проверка Здоровья Кампании"</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Простой чек-лист из 5 пунктов, который позволит вам в любой момент самостоятельно убедиться, что система работает как надо.
              </p>
              <p className="text-sm font-semibold text-primary">Ценность: 10 000 рублей.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary text-secondary-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Icon name="Shield" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Стандарт "Товарный Снайпер 95/5"
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Наша главная гарантия защиты вашего бюджета
            </p>
          </div>
          
          <Card className="p-8 bg-background text-foreground">
            <div className="mb-8">
              <p className="text-lg leading-relaxed text-foreground">
                Мы не даем пустых обещаний по окупаемости. Вместо этого мы даем твердую, измеримую гарантию на качество НАШЕЙ работы, которая закрепляется в договоре.
              </p>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-xl mb-4 text-foreground">
                Стандарт "Товарный Снайпер 95/5":
              </h4>
              <p className="text-lg leading-relaxed text-foreground">
                Мы гарантируем, что минимум 95% вашего рекламного бюджета будет инвестировано в переходы по релевантным связкам: поисковый запрос – заголовок объявления – карточка товара. Никаких кликов на синие подушки при запросе на зеленые.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6 mb-6">
              <p className="text-muted-foreground leading-relaxed">
                Если по итогам отчетного месяца внутренний аудит кампании показывает, что доля нецелевых расходов по нашей вине превысила 5%, мы компенсируем вам эту разницу, уменьшая стоимость "Сервисного Обслуживания" в следующем месяце на сумму перерасхода.
              </p>
            </div>

            <div className="bg-secondary/10 p-5 rounded-lg">
              <p className="text-base font-semibold text-foreground leading-relaxed">
                Это встроенный механизм защиты ваших инвестиций, который отличает нашу систему от всего, что есть на рынке.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Инвестиция в ваш рост
            </h2>
          </div>

          <Card className="p-8 md:p-12 text-center">
            <div className="space-y-6 mb-8">
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-muted-foreground">Внедрение и 1 месяц обслуживания</span>
                <span className="font-semibold">60 000 ₽</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-muted-foreground">Бонус: Дашборд "E-com Штурвал"</span>
                <span className="font-semibold text-primary">+ 25 000 ₽</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-muted-foreground">Бонус: Стратегия "Следующий Уровень"</span>
                <span className="font-semibold text-primary">+ 30 000 ₽</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-muted-foreground">Бонус: Чек-лист проверки</span>
                <span className="font-semibold text-primary">+ 10 000 ₽</span>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg mb-8">
              <p className="text-sm text-muted-foreground mb-2">Общая ценность пакета</p>
              <p className="text-4xl font-bold line-through text-muted-foreground/60 mb-2">125 000 ₽</p>
              <p className="text-sm text-muted-foreground mb-4">Ваша инвестиция сегодня</p>
              <p className="text-5xl md:text-6xl font-bold text-primary">60 000 ₽</p>
            </div>

            <div className="bg-destructive/10 border-2 border-destructive/30 p-6 rounded-lg mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Icon name="AlertCircle" size={28} className="text-destructive" />
                <h3 className="text-xl font-bold">Ограниченное предложение</h3>
              </div>
              <p className="text-muted-foreground mb-2">
                Из-за глубокого погружения в каждый проект, я беру в работу по системе 
                "Товарный Снайпер" <strong className="text-foreground">не более 2-х новых клиентов в месяц</strong>.
              </p>
              <div className="mt-4 p-4 bg-background rounded">
                <p className="font-semibold text-destructive text-lg">
                  На данный момент в этом месяце осталось <span className="text-2xl">1 место</span>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Полный пакет бонусов общей ценностью 65 000 рублей гарантированно закрепляется только за этим местом.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full md:w-auto text-lg px-12 py-6 font-semibold">
                Забронировать последнее место
              </Button>
              <p className="text-sm text-muted-foreground">
                Превратите хаос в управляемый канал продаж
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Почему нам доверяют
            </h2>
            <p className="text-muted-foreground text-lg">
              Реальные кейсы и отзывы клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-l-4 border-l-primary animate-fade-in">
              <div className="mb-4">
                <Icon name="TrendingUp" size={32} className="text-primary mb-2" />
                <h3 className="font-bold text-lg mb-2">Результат после другого подрядчика</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "Клиент Магазин X пришел после работы с фрилансером. Результат: в первую неделю охват 
                вырос в <strong className="text-foreground">4 раза</strong>, а стоимость конверсии стала в 
                <strong className="text-foreground"> 2 раза ниже</strong>. Эффективность кампании в 2 раза выше, чем ранее созданная."
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="mb-4">
                <Icon name="Clock" size={32} className="text-primary mb-2" />
                <h3 className="font-bold text-lg mb-2">Окупаемость с первого дня</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "Заказывал настройку. Получил заявки по нужной стоимости <strong className="text-foreground">в первый же день</strong>. 
                Алексей погружается в работу и предлагает рабочие варианты, что действительно ценно для 
                бизнеса — не сливать бюджет, а получать результат."
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4">
                <Icon name="Award" size={32} className="text-primary mb-2" />
                <h3 className="font-bold text-lg mb-2">То, чего не умеют другие</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "Отличный специалист своего дела, знает все нюансы Директа, делает хорошую и 
                <strong className="text-foreground"> уникальную (чего другие не умеют)</strong> настройку 
                рекламных компаний, подсказывает и консультирует 'до и после'."
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы получать рентабельные заказы?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Система "Товарный Снайпер" превратит вашу контекстную рекламу в предсказуемый поток продаж. 
            Начните работать с гарантией защиты инвестиций уже сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Rocket" size={20} className="mr-2" />
              Запустить систему
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="container max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Товарный Снайпер. Ваш автономный канал продаж из Яндекс.Директ</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;