import { Outlet } from "react-router-dom";
import Navbar from "./../components/shared/Navbar/Navbar";
import Footer from "./../components/shared/Footer/Footer";
import SearchProduct from "./../components/shared/Navbar/SearchProduct/SearchProduct";

function App() {
  return (
    <>
      <Navbar />
      <div className="md:hidden px-4 mt-5">
        <SearchProduct />
      </div>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
