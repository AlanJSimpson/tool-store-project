import Catalog from '../../components/catalog/Catalog';
import Footer from '../../components/footer/Footer';
import MobileApp from '../../components/mobileApp/MobileApp';
import NavBar from '../../components/navBar/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Catalog />
      <MobileApp />
      <Footer />
    </div>
  );
}
