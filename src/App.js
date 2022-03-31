import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./components/Homepage";
import DetailSerie from "./components/DetailSerie";

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/singleserie/:id" element={<DetailSerie />}  />
        </Routes>
    </Router>
  );
};

export default App;
