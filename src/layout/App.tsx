import { Outlet } from "react-router-dom";
import Navbar from "./../components/shared/Navbar/Navbar";
import Footer from "./../components/shared/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
