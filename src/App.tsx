import CategoryList from './components/category/categorylist/CategoryList';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <CategoryList />
      <Footer />
    </>
  );
}

export default App;