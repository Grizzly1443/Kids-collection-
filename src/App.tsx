import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, Star, RotateCcw, Leaf, ShieldCheck, 
  Shirt, Archive, Gift, Heart, Clock, Truck, Smile, Camera,
  Instagram, Facebook, Twitter, PinIcon
} from 'lucide-react';

const products = [
  { id: 1, name: 'Dino Roar Tee', price: 24, originalPrice: 30, rating: 4.8, isSale: true, isNew: false, emoji: '🦕', bg: 'bg-blue-100' },
  { id: 2, name: 'Rainbow Leggings', price: 22, originalPrice: null, rating: 5.0, isSale: false, isNew: true, emoji: '🌈', bg: 'bg-pink-100' },
  { id: 3, name: 'Adventure Sun Hat', price: 18, originalPrice: null, rating: 4.9, isSale: false, isNew: false, emoji: '👒', bg: 'bg-yellow-100' },
  { id: 4, name: 'Cozy Bear Romper', price: 34, originalPrice: 40, rating: 4.7, isSale: true, isNew: false, emoji: '🐻', bg: 'bg-orange-100' },
  { id: 5, name: 'Starry Night PJs', price: 28, originalPrice: null, rating: 4.9, isSale: false, isNew: true, emoji: '🌟', bg: 'bg-indigo-100' },
  { id: 6, name: 'Magic Unicorn Tutu', price: 32, originalPrice: null, rating: 5.0, isSale: false, isNew: false, emoji: '🦄', bg: 'bg-purple-100' },
  { id: 7, name: 'Little Sailor Onesie', price: 20, originalPrice: 25, rating: 4.6, isSale: true, isNew: false, emoji: '⛵', bg: 'bg-cyan-100' },
  { id: 8, name: 'Bunny Ear Hoodie', price: 38, originalPrice: null, rating: 4.9, isSale: false, isNew: true, emoji: '🐰', bg: 'bg-rose-100' },
];

const categories = [
  { name: 'Tops & Tees', emoji: '👕', color: 'bg-[#FFD93D]/20' },
  { name: 'Bottoms', emoji: '👖', color: 'bg-[#6BCB77]/20' },
  { name: 'Accessories', emoji: '🧢', color: 'bg-[#FF6B6B]/20' },
  { name: 'Bundles & Sets', emoji: '🎁', color: 'bg-purple-200/40' }
];

const reviews = [
  { name: 'Sarah M.', childAge: 'Mom to Leo, 3', rating: 5, quote: "The softest tees we own! Leo refuses to wear anything else. Washing hasn't faded the colors at all.", avatar: 'bg-pink-200' },
  { name: 'Jessica R.', childAge: 'Mom to Mia, 1', rating: 5, quote: "OBSESSED with the bunny hoodie. The sizing is perfect and the shipping was ridiculously fast.", avatar: 'bg-yellow-200' },
  { name: 'David T.', childAge: 'Dad to Sam, 5', rating: 5, quote: "Finally, clothes that survive playground duty! The reinforced knees on the leggings are a game changer.", avatar: 'bg-blue-200' },
];

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 35, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-2 md:gap-4 mt-6">
      {[ {label: 'Days', value: timeLeft.days}, {label: 'Hours', value: timeLeft.hours}, 
         {label: 'Mins', value: timeLeft.minutes}, {label: 'Secs', value: timeLeft.seconds} ].map((unit, i) => (
        <div key={i} className="flex flex-col items-center justify-center bg-white/20 rounded-lg p-2 md:p-3 w-16 md:w-20 backdrop-blur-sm">
          <span className="font-display text-2xl md:text-3xl text-white block leading-none">{String(unit.value).padStart(2, '0')}</span>
          <span className="text-white/80 text-xs md:text-sm font-semibold uppercase tracking-wider mt-1">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* 1. Header & Navigation */}
      <div className="bg-primary text-white text-center py-2 text-sm font-semibold px-4 tracking-wide relative z-50">
        🚚 Free shipping on orders over $50 | Use code <span className="font-bold underline text-secondary">SPARK10</span> for 10% off
      </div>
      
      <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-text-main" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <a href="#" className="font-display text-2xl tracking-tight text-text-main group flex items-center gap-2">
              <span className="text-3xl">✨</span> Little Spark Co.
            </a>
          </div>
          
          <nav className="hidden lg:flex gap-8 items-center cursor-pointer">
            {['Shop', 'Collections', 'Sale', 'About'].map((item) => (
              <a key={item} className="font-bold text-text-main/80 hover:text-primary transition-colors text-lg">{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-text-main hover:text-primary transition-colors cursor-pointer group">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 h-5 w-5 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold transform transition-transform group-hover:scale-110">3</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 gap-4">
            {['Shop', 'Collections', 'Sale', 'About'].map((item) => (
               <a key={item} href="#" className="font-bold text-xl text-text-main hover:text-primary py-2 border-b border-gray-50">{item}</a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* 2. Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFE1D5] to-[#E8D9F8] min-h-[90vh] flex flex-col justify-center items-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
            <div className="max-w-2xl relative z-10">
              <div className="inline-block animate-bounce mb-6 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-bold text-primary border border-primary/20">
                🌱 NEW Spring Collection Just Dropped
              </div>
              <h1 className="text-5xl lg:text-7xl font-display leading-[1.1] mb-6 text-text-main">
                Dress Them For <br />
                <span className="text-primary relative inline-block">
                  Every Adventure
                  <svg className="absolute w-full h-4 -bottom-1 left-0 text-secondary z-[-1] opacity-70" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none"/></svg>
                </span>
              </h1>
              <p className="text-xl text-text-main/80 mb-10 text-pretty font-medium leading-relaxed max-w-lg">
                Soft, durable & ridiculously cute clothes for kids who never slow down. Made for playground heroes and messy explorers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-primary/30 transition-transform active:scale-95 hover:-translate-y-1">
                  Shop Now
                </button>
                <button className="bg-white hover:bg-gray-50 text-text-main font-bold text-lg px-8 py-4 rounded-full shadow-md border-2 border-transparent hover:border-gray-100 transition-all active:scale-95">
                  View Lookbook
                </button>
              </div>
            </div>
            
            <div className="relative z-10 w-full h-full min-h-[400px] flex items-center justify-center lg:justify-end">
               <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-white rounded-[40px] shadow-2xl relative rotate-3 hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-center border-8 border-white overflow-hidden group">
                  <div className="absolute inset-0 bg-yellow-100 transform -skew-y-6 scale-125 z-0 group-hover:bg-yellow-200 transition-colors"></div>
                  <span className="text-9xl z-10 animate-pulse block mb-4">👶</span>
                  <div className="z-10 font-display text-2xl text-text-main bg-white px-6 py-2 rounded-full shadow-md">Cute Styles Here</div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-30 blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary rounded-full opacity-20 blur-xl"></div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. Trust Bar */}
        <section className="bg-white py-8 border-b-4 border-surface -mt-8 relative z-20 mx-4 lg:mx-auto max-w-6xl rounded-2xl shadow-sm">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Star className="text-secondary mx-auto mb-2 fill-secondary" size={28}/>, text: '4.9/5 Stars' },
              { icon: <RotateCcw className="text-secondary mx-auto mb-2" size={28}/>, text: 'Free Returns' },
              { icon: <Leaf className="text-secondary mx-auto mb-2" size={28}/>, text: 'Organic Cotton' },
              { icon: <ShieldCheck className="text-secondary mx-auto mb-2" size={28}/>, text: 'Secure Checkout' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center">
                {item.icon}
                <span className="font-bold text-text-main/80 text-sm md:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Featured Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display text-text-main mb-4">Shop by Category</h2>
            <p className="text-lg text-text-main/60">Everything they need, nothing they don't.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {categories.map((cat, i) => (
              <a key={i} href="#" className={`group rounded-[2rem] ${cat.color} p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 aspect-square border-4 border-transparent hover:border-white relative overflow-hidden`}>
                <span className="text-6xl md:text-7xl mb-4 group-hover:scale-110 transition-transform duration-300 block relative z-10">{cat.emoji}</span>
                <h3 className="font-bold text-lg md:text-xl text-text-main relative z-10">{cat.name}</h3>
                <span className="mt-2 text-sm font-bold text-text-main/50 group-hover:text-primary transition-colors flex items-center gap-1 relative z-10">Shop Now <span className="group-hover:translate-x-1 transition-transform">→</span></span>
                {/* Decorative blob behind text on hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-[2rem] scale-90 group-hover:scale-100 z-0"></div>
              </a>
            ))}
          </div>
        </section>

        {/* 5. Bestsellers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="bestsellers">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
              <div>
                <h2 className="text-4xl font-display text-text-main mb-2">Our Bestsellers</h2>
                <p className="text-lg text-text-main/60">Loved by parents, approved by kids.</p>
              </div>
              <button className="text-primary font-bold hover:underline flex items-center gap-2">View all products →</button>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <div key={product.id} className="group relative flex flex-col bg-surface rounded-3xl p-4 transition-all hover:shadow-lg">
                  {/* Badges */}
                  <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                    {product.isSale && <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Sale</span>}
                    {product.isNew && <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">New</span>}
                  </div>
                  
                  {/* Wishlist Button */}
                  <button className="absolute top-6 right-6 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-text-main hover:text-primary hover:scale-110 transition-all shadow-sm">
                    <Heart size={16} />
                  </button>

                  {/* Image Area */}
                  <div className={`w-full aspect-[4/5] rounded-2xl ${product.bg} mb-4 flex items-center justify-center overflow-hidden relative`}>
                    <span className="text-[6rem] group-hover:scale-125 transition-transform duration-500 origin-center drop-shadow-xl">{product.emoji}</span>
                    {/* Add to Cart Overlay (Desktop) */}
                    <div className="absolute inset-x-4 bottom-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 hidden md:block">
                      <button className="w-full bg-white text-text-main font-bold py-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
                        Quick Add
                      </button>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "text-gray-300"} />
                      ))}
                      <span className="text-xs text-text-main/60 ml-1">({Math.floor(product.rating * 12)})</span>
                    </div>
                    <h3 className="font-bold text-lg text-text-main leading-tight mb-2 flex-grow">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="font-display text-xl text-primary">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-text-main/40 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                     {/* Add to Cart (Mobile) */}
                     <button className="mt-4 w-full bg-text-main text-white font-bold py-3 rounded-full hover:bg-primary transition-colors md:hidden">
                        Add to Cart
                     </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Promotional Banner */}
        <section className="py-24 px-4 relative overflow-hidden bg-primary text-center flex flex-col items-center">
           {/* Decorative bg shapes */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 text-9xl rotate-12">☀️</div>
             <div className="absolute bottom-10 right-10 text-9xl -rotate-12">🌊</div>
             <div className="absolute top-1/2 right-1/4 text-6xl rotate-45">🍦</div>
           </div>
           
           <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
             <span className="px-4 py-1.5 bg-secondary text-text-main text-sm font-bold uppercase tracking-widest rounded-full mb-6 inline-block">Limited Time Only</span>
             <h2 className="text-5xl md:text-7xl font-display text-white mb-6 leading-tight drop-shadow-sm">SUMMER SALE <br className="hidden md:block"/>Up to 40% Off</h2>
             <p className="text-xl text-white/90 mb-8 font-medium max-w-xl text-center">Stock up on warm-weather essentials for the little ones before they're gone.</p>
             
             <CountdownTimer />
             
             <button className="mt-12 bg-white text-primary hover:bg-secondary hover:text-text-main font-display text-xl px-10 py-5 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 duration-200 uppercase tracking-wide">
               Shop The Sale
             </button>
           </div>
        </section>

        {/* 7. How It Works */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display text-text-main mb-4">How It Works</h2>
              <p className="text-lg text-text-main/60">Shopping for kids made gloriously simple.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-1 border-t-2 border-dashed border-gray-300 z-0"></div>

              {[
                { step: '1', title: 'Browse', desc: 'Find adorable styles for every season and stage.', icon: <Shirt size={40} className="text-primary"/> },
                { step: '2', title: 'Pick Your Faves', desc: 'Add to cart. Prepare for maximum cute.', icon: <Heart size={40} className="text-secondary"/> },
                { step: '3', title: 'Fast Delivery', desc: 'Quick shipping straight to your door.', icon: <Truck size={40} className="text-accent"/> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center relative z-10">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-surface relative">
                     <span className="absolute -top-2 -right-2 w-8 h-8 bg-text-main text-white text-sm font-bold flex items-center justify-center rounded-full border-2 border-white">{item.step}</span>
                     {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-text-main mb-3 font-display">{item.title}</h3>
                  <p className="text-text-main/70 text-lg max-w-[280px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Social Proof / Reviews */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display text-text-main mb-4">Parents Are Obsessed 💛</h2>
              <p className="text-lg text-text-main/60">Don't just take our word for it.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {reviews.map((review, i) => (
                <div key={i} className="bg-surface rounded-3xl p-8 lg:p-10 relative">
                  <div className="text-primary mb-6"><span className="text-6xl absolute top-6 right-8 opacity-10 font-display">"</span></div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-secondary text-secondary" />)}
                  </div>
                  <p className="text-text-main font-semibold text-lg lg:text-xl mb-8 leading-relaxed relative z-10">"{review.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className={`w-12 h-12 rounded-full ${review.avatar} flex items-center justify-center text-xl shadow-inner border border-white/50`}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-text-main">{review.name}</p>
                      <p className="text-sm text-text-main/60">{review.childAge}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Email Signup */}
        <section className="py-24 px-4 bg-secondary flex justify-center text-center">
          <div className="bg-white/40 p-8 md:p-16 rounded-[3rem] backdrop-blur-md shadow-lg max-w-4xl border border-white/50 w-full relative overflow-hidden">
            <div className="absolute top-10 left-10 animate-pulse text-4xl">✨</div>
            <div className="absolute bottom-10 right-10 animate-bounce text-4xl delay-150">🎉</div>
            <h2 className="text-4xl md:text-6xl font-display text-text-main mb-4 relative z-10 text-balance">Join the Spark Squad</h2>
            <p className="text-xl md:text-2xl text-text-main/80 mb-10 font-medium relative z-10 max-w-lg mx-auto">Get 10% off your first order + early access to new drops and secret sales.</p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto relative z-10" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-6 py-4 rounded-full border-2 border-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 text-lg shadow-sm placeholder:text-text-main/40 font-medium"
                required
              />
              <button type="submit" className="bg-text-main text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-primary transition-colors shadow-md whitespace-nowrap">
                Claim Discount
              </button>
            </form>
            <p className="mt-4 text-sm text-text-main/50 font-semibold relative z-10">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </section>

        {/* 10. Instagram Feed */}
        <section className="py-20 bg-white">
          <div className="text-center mb-10 px-4">
            <h2 className="text-3xl font-display text-text-main mb-2">Follow @LittleSparkCo</h2>
            <p className="text-text-main/60 text-lg">Tag us to be featured!</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
             {[
               { bg: 'bg-blue-100', emoji: '📸' }, { bg: 'bg-pink-100', emoji: '🎈' },
               { bg: 'bg-yellow-100', emoji: '🌻' }, { bg: 'bg-accent/20', emoji: '🍃' },
               { bg: 'bg-purple-100', emoji: '🍇' }, { bg: 'bg-orange-100', emoji: '🎨' }
             ].map((post, i) => (
               <a key={i} href="#" className={`aspect-square ${post.bg} relative group flex items-center justify-center overflow-hidden w-full`}>
                 <span className="text-5xl opacity-80">{post.emoji}</span>
                 <div className="absolute inset-0 bg-text-main/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <Instagram size={32} className="text-white transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-75" />
                 </div>
               </a>
             ))}
          </div>
        </section>
      </main>

      {/* 11. Footer */}
      <footer className="bg-surface pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:pr-8">
            <a href="#" className="font-display text-2xl tracking-tight text-text-main group flex items-center gap-2 mb-6">
              <span className="text-3xl">✨</span> Little Spark Co.
            </a>
            <p className="text-text-main/70 leading-relaxed font-medium mb-6">Making comfortable, durable, and absurdly cute clothes for the little adventurers in your life.</p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, PinIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-text-main hover:bg-primary hover:text-white transition-colors shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-text-main mb-6 uppercase tracking-wider">Shop</h4>
            <ul className="flex flex-col gap-4 font-medium text-text-main/70">
              {['New Arrivals', 'Best Sellers', 'Tops & Tees', 'Bottoms', 'Sale'].map((link) => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-text-main mb-6 uppercase tracking-wider">Help</h4>
            <ul className="flex flex-col gap-4 font-medium text-text-main/70">
              {['FAQ', 'Shipping & Returns', 'Size Guide', 'Contact Us', 'Track Order'].map((link) => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-text-main mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="flex flex-col gap-4 font-medium text-text-main/70 mb-6">
              <li>hello@littlesparkco.com</li>
              <li>1-800-SPARK-CO</li>
              <li>123 Sunny Lane, Suite 100<br/>Austin, TX 78701</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-text-main/60">
          <p>© {new Date().getFullYear()} Little Spark Co. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
            <span className="px-2 py-1 bg-white rounded border border-gray-200">Visa</span>
            <span className="px-2 py-1 bg-white rounded border border-gray-200">MC</span>
            <span className="px-2 py-1 bg-white rounded border border-gray-200">PayPal</span>
            <span className="px-2 py-1 bg-white rounded border border-gray-200">Apple Pay</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
