import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ActivitiesPage from '@/pages/ActivitiesPage';
import CoursesPage from '@/pages/CoursesPage';
import RentalPage from '@/pages/RentalPage';
import GuestBerthPage from '@/pages/GuestBerthPage';
import MembershipPage from '@/pages/MembershipPage';
import NewsPage from '@/pages/NewsPage';
import NewsArticlePage from '@/pages/NewsArticlePage';
import AboutPage from '@/pages/AboutPage';
import GroupPage from '@/pages/GroupPage';
import BoardPage from '@/pages/BoardPage';
import UnderConstructionBanner from '@/components/UnderConstructionBanner';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aktiviteter" element={<ActivitiesPage />} />
            <Route path="/aktiviteter/seilkurs" element={<CoursesPage />} />
            <Route path="/utleielokale" element={<RentalPage />} />
            <Route path="/gjestebrygge" element={<GuestBerthPage />} />
            <Route path="/medlemskap" element={<MembershipPage />} />
            <Route path="/nyheter" element={<NewsPage />} />
            <Route path="/nyheter/:slug" element={<NewsArticlePage />} />
            <Route path="/om-oss" element={<AboutPage />} />
            <Route path="/om-oss/styret" element={<BoardPage />} />
            <Route path="/om-oss/:groupSlug" element={<GroupPage />} />
          </Routes>
        </main>
        <Footer />
        <UnderConstructionBanner />
      </div>
    </BrowserRouter>
  );
}

export default App;
