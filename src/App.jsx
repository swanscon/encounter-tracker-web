import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import EncounterTracker from "./pages/EncounterTracker";
import OddCourage from "./pages/OddCourage";
import MeritsHorizon from "./pages/MeritsHorizon";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracker" element={<EncounterTracker />} />
            <Route path="/odd-courage" element={<OddCourage />} />
            <Route path="/merits-horizon" element={<MeritsHorizon />} />
        </Routes>
    );
}

export default App;
