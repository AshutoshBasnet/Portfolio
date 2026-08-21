import Navbar from '../components/ui/Navbar.jsx';
import HeroSection from '../components/ui/HeroSection.jsx';
import AboutSection from '../components/ui/AboutSection.jsx';
import ProjectsSection from '../components/ui/ProjectsSection.jsx';
import EducationCertificationsSection from '../components/ui/EducationCertificationsSection.jsx';
import ContactSection from '../components/ui/ContactSection.jsx';
import Footer from '../components/ui/Footer.jsx';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EducationCertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
