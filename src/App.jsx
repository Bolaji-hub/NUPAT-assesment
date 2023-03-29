import "./App.css";
import Header from "./components/Header";
import TopNav from "./components/TopNav";
import About from "./components/About";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Header />
      <About />
      <Image />
    </div>
  );
}

export default App;
