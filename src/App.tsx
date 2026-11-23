import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ActivitiesPage from '@/pages/ActivitiesPage';
import CoursesPage from '@/pages/CoursesPage';
import RentalPage from '@/pages/RentalPage';
import GuestBerthPage from '@/pages/GuestBerthPage';
import NewsPage from '@/pages/NewsPage';
import AboutPage from '@/pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aktiviteter" element={<ActivitiesPage />} />
            <Route path="/seilkurs" element={<CoursesPage />} />
            <Route path="/utleie" element={<RentalPage />} />
            <Route path="/gjestebrygge" element={<GuestBerthPage />} />
            <Route path="/nyheter" element={<NewsPage />} />
            <Route path="/om-oss" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
