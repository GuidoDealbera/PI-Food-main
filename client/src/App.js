import "./App.css";
import { Routes, Route } from "react-router-dom";
import DetailRecipe from "./Components/Detail/DetailRecipe";
import LandingPage from "./Components/Landing Page/Landing";
import HomePage from "./Components/Home/Home";
import About from "./Components/About/About";
import Form from "./Components/Form/Form";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />;
        <Route path="/home" element={<HomePage />} />;
        <Route path="/detailrecipe/:idRecipe" element={<DetailRecipe />} />;
        <Route path="/about" element={<About />} />;
        <Route path="/createfood" element={<Form />} />;
      </Routes>
    </div>
  );
}

export default App;
