import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Events from "./Events";
import Footer from "./footer";

function HomePage({ event }) {
  return (
    <div className="App">
      <Navbar />
      <Events event={event} />
      <Footer />
    </div>
  );
}

export default HomePage;
