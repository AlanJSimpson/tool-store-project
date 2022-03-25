import Catalog from '../../components/catalog/Catalog';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navBar/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Catalog />
      <Footer />
    </div>
  );
}
