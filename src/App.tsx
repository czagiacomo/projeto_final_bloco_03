import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryList from "./components/category/categorylist/CategoryList";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import CategoryForm from "./components/category/categoryform/CategoryForm";
import CategoryDelete from "./components/category/categorydelete/CategoryDelete";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/create" element={<CategoryForm />} />
            <Route path="/update/:id" element={<CategoryForm />} />
            <Route path="/delete/:id" element={<CategoryDelete />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
