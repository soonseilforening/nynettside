import Hero from '@/components/Hero';
import WeatherConditions from '@/components/WeatherConditions';
import Activities from '@/components/Activities';
import NewsFeed from '@/components/NewsFeed';
import MemberPortal from '@/components/MemberPortal';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WeatherConditions />
      <Activities />
      <NewsFeed />
      <MemberPortal />
    </>
  );
}
