import "./App.css";

import NavBar from "./components/Nav/NavBar";
import Home from "./Pages/Home/Home";

export default function App() {
  return (
    <div className="font-display max-w-400 mx-auto">
      <NavBar />
      <Home />
      
    </div>
  );
}
