import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./containers/Home/HomePage";
import Header from "./components/Header";
import Footer from "./containers/footer/Footer";
import Chatting from "./containers/Chat/Chatting";
import Register from "./containers/register/Register";
import Success from "./containers/success/Success";
import About from "./containers/About/About";
import Privacy from "./containers/Privacy/Privacy";

function App() {
  return (
    <div className="App container-fluid m-0">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/chatting" element={<Chatting />} />

          <Route path="/register" element={<Register />} />

          <Route path="/About" element={<About />} />

          <Route path="/Privacy" element={<Privacy />} />

          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
