import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WeatherConditions from '@/components/WeatherConditions';
import Activities from '@/components/Activities';
import NewsFeed from '@/components/NewsFeed';
import MemberPortal from '@/components/MemberPortal';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WeatherConditions />
        <Activities />
        <NewsFeed />
        <MemberPortal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
