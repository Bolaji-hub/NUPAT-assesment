import "./App.css";
import Header from "./components/Header";
import TopNav from "./components/TopNav";
import About from "./components/About";
import Image from "./components/Image";
import Whyus from "./components/Whyus";
import Testimonial from "./components/Testimonial";
import Whychoose from "./components/Whychoose";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Header />
      <About />
      <Image />
      <Whyus />
      <Testimonial />
      <Whychoose />
    </div>
  );
}

export default App;
