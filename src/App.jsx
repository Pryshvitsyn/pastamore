import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Menu as MenuIcon, X, MapPin, Star, Clock,
  ChevronRight, Phone, Instagram, Facebook, Calendar, Utensils
} from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div className="flex gap-2 text-sm font-semibold">
      {['en', 'it', 'ru'].map(lang => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          className={`uppercase px-2 py-1 rounded-md transition-colors ${i18n.language === lang
            ? 'bg-[var(--color-brand-charcoal)] text-white'
            : 'text-[var(--color-brand-charcoal)] hover:bg-[var(--color-brand-beige-dark)]'
            }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[var(--color-brand-beige)]/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-3xl font-bold font-serif text-[var(--color-brand-rose-dark)]">
              Pastamore.
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
            <a href="#about" className="hover:text-[var(--color-brand-rose-dark)] transition">{t('nav.about')}</a>
            <a href="#locations" className="hover:text-[var(--color-brand-rose-dark)] transition">{t('nav.locations')}</a>
            <a href="#menu" className="hover:text-[var(--color-brand-rose-dark)] transition">{t('nav.menu')}</a>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-brand-charcoal)]">
              {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[var(--color-brand-beige)] border-t border-[var(--color-brand-beige-dark)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-lg hover:bg-[var(--color-brand-beige-dark)]">{t('nav.about')}</a>
            <a href="#locations" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-lg hover:bg-[var(--color-brand-beige-dark)]">{t('nav.locations')}</a>
            <a href="#menu" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-lg hover:bg-[var(--color-brand-beige-dark)]">{t('nav.menu')}</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden crafto-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-5xl md:text-7xl font-bold text-[var(--color-brand-charcoal)] mb-6 leading-tight">
            {t('hero.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-lg">
            {t('hero.subtitle')}
          </p>
          <a href="#locations" className="inline-flex items-center px-8 py-4 bg-[var(--color-brand-rose-dark)] text-white text-lg font-bold rounded-full hover:bg-[#b0635e] transition transform hover:scale-105 shadow-lg">
            {t('hero.cta')}
            <ChevronRight className="ml-2" />
          </a>
        </div>
      </div>

      <div className="md:absolute right-0 top-0 bottom-0 md:w-1/2 mt-12 md:mt-0 p-4 md:p-0">
        <img
          src="/hero.png"
          alt="Fresh Pasta"
          className="w-full h-full object-cover rounded-3xl md:rounded-none md:rounded-l-[100px] shadow-2xl border-8 border-white md:border-0"
        />
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
        <div>
          <h3 className="text-sm font-bold tracking-widest text-[var(--color-brand-rose-dark)] uppercase mb-2">Pastamore</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('about.title')}</h2>
        </div>
        <p className="text-xl leading-relaxed text-[var(--color-brand-charcoal)] font-semibold">
          {t('about.desc')}
        </p>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-gray-600">
            {t('about.story_p1')}
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            {t('about.story_p2')}
          </p>
        </div>
      </div>
    </section>
  );
};

const Locations = () => {
  const { t } = useTranslation();

  const locations = [
    {
      id: "trastevere",
      image: "/trastevere.png"
    },
    {
      id: "borgo_pio",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "prenestina",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section id="locations" className="py-24 bg-[var(--color-brand-beige)]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">{t('locations.title')}</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {locations.map((loc) => (
            <div key={loc.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src={loc.image} alt={t(`locations.${loc.id}.title`)} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{t(`locations.${loc.id}.title`)}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(`locations.${loc.id}.desc`)}
                </p>
                <button className="flex items-center text-[var(--color-brand-rose-dark)] font-bold hover:text-black transition">
                  <MapPin className="mr-2" size={20} /> Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = React.useState('trastevere');

  const menuData = {
    trastevere: [
      {
        category: "Antipasti",
        image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=1000",
        items: [
          { name: "Selezione salumi e formaggi", desc: "Tagliere with artisanal cold cuts, cheeses, jams, olives", price: "21,5 €" },
          { name: "Panzanella romana", price: "9,5 €" },
          { name: "Caprese", desc: "Bufala, pomodoro, basilico", price: "15 €" },
          { name: "Focaccia al rosmarino", price: "from 5 €" }
        ]
      },
      {
        category: "Insalate",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000",
        items: [
          { name: "Insalata viminale", desc: "Lattuga, carciofini, bufala, tonno, olive", price: "15 €" },
          { name: "Caesar salad", price: "14 €" },
          { name: "La greca", price: "13,5 €" },
          { name: "Insalata pastamore", desc: "Prosciutto di parma, rucola, noci, parmigiano, pane carasau", price: "15 €" }
        ]
      },
      {
        category: "Primo Amore (Sandwich di pasta al forno)",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000",
        items: [
          { name: "Stracciatella di burrata", desc: "Gamberi, limone e basilico", price: "9 €" },
          { name: "Prosciutto e mozzarella", price: "8 €" },
          { name: "Verdure alla piastra", price: "8 €" },
          { name: "Guanciale croccante", desc: "Crema al pecorino e cicoria", price: "8 €" },
          { name: "Pomodoro e mozzarella", price: "8 €" }
        ]
      },
      {
        category: "Primi Piatti",
        image: "/hero.png",
        items: [
          { name: "Fettuccine alla crema di tartufo", price: "20 €" },
          { name: "Fettuccine alla bolognese", price: "16,5 €" },
          { name: "Spaghetti al pomodorino e gamberi", price: "19 €" },
          { name: "Lasagna al ragù", price: "16 €" },
          { name: "Strozzapreti", desc: "Pesto di pistacchio e stracciatella", price: "17,5 €" },
          { name: "Fettuccine Pastamore", desc: "Barbabietola con alici e burrata", price: "15 €" },
          { name: "Tonnarelli cacio e pepe", price: "13 €" },
          { name: "Rigamore alla carbonara", price: "13 €" },
          { name: "Spaghetti al pomodorino", desc: "Burrata e zest di limone", price: "15 €" },
          { name: "Rigamore all'amatriciana", price: "13 €" }
        ]
      },
      {
        category: "Pizze",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=1000",
        items: [
          { name: "Margherita", price: "12 €" },
          { name: "Diavola", price: "15 €" },
          { name: "Prosciutto", price: "15 €" },
          { name: "4 formaggi", price: "15 €" },
          { name: "Pizza al tartufo", desc: "Funghi champignon e bufala", price: "23,5 €" },
          { name: "Tonno e cipolla", price: "16 €" },
          { name: "Bufalissima", price: "17,5 €" },
          { name: "Amatriciana", price: "16 €" },
          { name: "Capricciosa", price: "17 €" },
          { name: "Mortazza special", desc: "Mortadella, burrata, pistacchio", price: "18 €" }
        ]
      },
      {
        category: "Secondi e Contorni",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=1000",
        items: [
          { name: "Polpo e patate alla mediterranea", price: "20 €" },
          { name: "Polpette alla romana", price: "17 €" },
          { name: "Saltimbocca alla romana", price: "16 €" },
          { name: "Pollo alla cacciatora", price: "17 €" },
          { name: "Cicoria ripassata / Insalata verde / Patate al forno", desc: "Contorni freschi", price: "6 €" }
        ]
      },
      {
        category: "Dolci",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=1000",
        items: [
          { name: "Crostata ai frutti di bosco", price: "8 €" },
          { name: "Torta al cioccolato", desc: "Con caramello salato o frutti rossi", price: "8 €" }
        ]
      }
    ],
    borgo_pio: [
      {
        category: "Primi (Delivery + Shop)",
        image: "/hero.png",
        items: [
          { name: "Spaghetti cacio e pepe", desc: "Con tartare di gamberi, zest di limone", price: "18 €" },
          { name: "Spaghetti aglio, olio e peperoncino calabrese", desc: "Con tartare di gamberi", price: "18 €" },
          { name: "Rigamore amatriciana", price: "9 €" },
          { name: "Lasagna al ragù", price: "10 €" }
        ]
      },
      {
        category: "Sandwich di Pasta (Asporto)",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000",
        items: [
          { name: "Mozzarella e prosciutto crudo", price: "10 €" },
          { name: "Crema di pecorino", desc: "Carciofi e guanciale croccante", price: "9 €" },
          { name: "Pomodoro e burrata", price: "9 €" },
          { name: "Burrata, alici e zest di limone", price: "9,5 €" }
        ]
      }
    ],
    prenestina: [
      {
        category: "Primi piatti tipici",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000",
        items: [
          { name: "Tonnarelli cacio e pepe", price: "13 €" },
          { name: "Rigatoni alla carbonara", price: "13 €" },
          { name: "Rigatoni all’amatriciana", price: "13 €" },
          { name: "Gnocchi 'sciuè sciuè'", desc: "Con caprino e basilico", price: "13 €" }
        ]
      }
    ]
  };

  const tabs = [
    { id: 'trastevere', label: 'Trastevere (Main)' },
    { id: 'borgo_pio', label: 'Borgo Pio' },
    { id: 'prenestina', label: 'Prenestina' }
  ];

  return (
    <section id="menu" className="py-24 bg-white crafto-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Il Nostro Menu</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all shadow-md ${activeTab === tab.id
                ? 'bg-[var(--color-brand-rose-dark)] text-white scale-105'
                : 'bg-white text-[var(--color-brand-charcoal)] hover:bg-[var(--color-brand-beige-dark)]'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {menuData[activeTab].map((section, idx) => (
            <div key={idx} className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border-4 border-[var(--color-brand-beige-dark)]">
              <div className="md:flex h-full">
                <div className="md:w-1/3 relative h-64 md:h-auto min-h-[250px] overflow-hidden">
                  <img src={section.image} alt={section.category} className="absolute inset-0 w-full h-full object-cover object-center" />
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <h3 className="text-3xl font-serif font-bold text-[var(--color-brand-rose-dark)] mb-8 border-b-2 border-gray-100 pb-4">
                    {section.category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-start">
                        <div className="pr-4">
                          <h4 className="text-xl font-bold">{item.name}</h4>
                          {item.desc && <p className="text-gray-500 text-sm mt-1">{item.desc}</p>}
                        </div>
                        <div className="font-bold text-[var(--color-brand-rose-dark)] whitespace-nowrap">
                          {item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const { t } = useTranslation();

  const reviews = [
    { id: 1, rating: 5 },
    { id: 2, rating: 5 },
    { id: 3, rating: 5 }
  ];

  return (
    <section className="py-24 bg-[var(--color-brand-beige)]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t('reviews.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-lg border border-[var(--color-brand-beige-dark)] hover:-translate-y-2 transition duration-300">
              <div className="flex gap-1 mb-6 text-[var(--color-brand-rose-dark)]">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-gray-700 italic mb-6">
                {t(`reviews.${review.id}.text`)}
              </p>
              <div>
                <p className="font-bold text-lg">{t(`reviews.${review.id}.author`)}</p>
                <p className="text-sm text-gray-500 font-medium bg-[var(--color-brand-beige)] inline-block px-3 py-1 rounded-full mt-2">
                  via {t(`reviews.${review.id}.source`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[var(--color-brand-charcoal)] text-[var(--color-brand-beige)] py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-4xl font-serif text-[var(--color-brand-rose)] mb-8">Pastamore.</h2>

        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="flex gap-6">
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-[var(--color-brand-rose-dark)] transition"><Instagram /></a>
            <a href="https://www.facebook.com/marialiafalcone" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-[var(--color-brand-rose-dark)] transition"><Facebook /></a>
          </div>
          <p className="text-gray-400 mt-4 text-sm font-medium">
            <a href="https://www.facebook.com/marialiafalcone" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-rose)] transition flex items-center justify-center gap-2 mb-2">
              Maria Lia Falcone <Facebook size={16} className="inline" />
            </a>
            <span className="block mt-1 text-gray-500 leading-relaxed max-w-lg mx-auto flex flex-wrap items-center justify-center gap-1">
              Direttore artistico / Co-founder gruppo
              <a href="#" className="hover:text-[var(--color-brand-beige)] transition underline decoration-[var(--color-brand-rose)] underline-offset-4">Ottica Roma</a> e
              <a href="#" className="hover:text-[var(--color-brand-beige)] transition underline decoration-[var(--color-brand-rose)] underline-offset-4">Wiki Wiki</a> e
              <a href="#" className="hover:text-[var(--color-brand-beige)] transition underline decoration-[var(--color-brand-rose)] underline-offset-4">Pastamore</a> ❤️ e
              <a href="https://www.alladance.it/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition inline-block ml-1">
                <img src="https://www.alladance.it/wp-content/uploads/2022/07/LOGO-ALLA-DANCE-copia.png" alt="Alla Dance" className="h-4 object-contain align-middle brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
              </a>
            </span>
          </p>
        </div>

        <p className="text-gray-500 mt-8 text-sm w-full border-t border-gray-700 pt-8">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

const BookingWidget = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      <div className={`flex flex-col gap-3 transition-all duration-300 origin-bottom right-0 ${expanded ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        <a
          href="https://www.thefork.com"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg transition-transform hover:-translate-y-1 font-bold whitespace-nowrap"
        >
          <Utensils size={20} />
          {t('book.thefork')}
        </a>
        <a
          href="tel:+390612345678"
          className="pointer-events-auto bg-white hover:bg-gray-50 text-[var(--color-brand-charcoal)] border-2 border-gray-200 px-6 py-3 rounded-full flex items-center gap-3 shadow-lg transition-transform hover:-translate-y-1 font-bold whitespace-nowrap"
        >
          <Phone size={20} />
          {t('book.phone')}
        </a>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="pointer-events-auto bg-[var(--color-brand-rose-dark)] hover:bg-[var(--color-brand-rose)] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
      >
        {expanded ? <X size={28} /> : <Calendar size={28} />}
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen text-[var(--color-brand-charcoal)] font-sans relative">
      <Navbar />
      <Hero />
      <About />
      <Locations />
      <Menu />
      <Reviews />
      <Footer />
      <BookingWidget />
    </div>
  );
}

export default App;
