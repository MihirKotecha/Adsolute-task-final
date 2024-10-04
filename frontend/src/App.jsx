import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./components/authentication";
import InventoryCard from "./components/InventoryCard";
import InvetoryPage from "./pages/InvetoryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication isSignUp={true} />} />
          <Route path="/inventory" element={<InvetoryPage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
