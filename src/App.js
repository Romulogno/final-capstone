import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ConfirmationPage from "./components/ConfirmationPage";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="reservation" element={<Reservation />} />
            <Route
              path="/reservation/ConfirmationPage"
              element={<ConfirmationPage />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
