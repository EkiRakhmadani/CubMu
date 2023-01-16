import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-black">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
