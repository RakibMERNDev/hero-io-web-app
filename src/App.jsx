import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/Navigation/NavBar";

export default function App() {
  return (
    <div className="font-display max-w-400 mx-auto">
      <NavBar/>
      <Home />
    </div>
  );
}
