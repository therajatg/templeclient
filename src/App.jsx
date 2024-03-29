import "./App.css";
import { Privacy } from "./Privacy";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/privacypolicy" element={<Privacy />} />
    </Routes>
  );
}

export default App;
