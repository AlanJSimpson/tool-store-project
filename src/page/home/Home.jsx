import AboutUs from '../../components/aboutUs/AboutUs';
import Catalog from '../../components/catalog/Catalog';
import NavBar from '../../components/navBar/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <AboutUs />
      <Catalog />
    </div>
  );
}
