import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OurBurgers from '@/components/OurBurgers';
import Menu from '@/components/Menu';
import Extras from '@/components/Extras';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import FloatingCart from '@/components/FloatingCart';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-cream">
        <Header />
        <main>
          <Hero />
          <OurBurgers />
          <Menu />
          <Extras />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        <FloatingCart />
      </div>
    </CartProvider>
  );
}

export default App;
