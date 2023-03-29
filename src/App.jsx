import "./App.css";
import Header from "./components/Header";
import TopNav from "./components/TopNav";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Header />
      <About />
    </div>
  );
}

export default App;
