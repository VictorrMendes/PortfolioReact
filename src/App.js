import About from "./components/About";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Introduction/>
        <About/>
        <Skills/>
        
      </div>
  );
}

export default App;
