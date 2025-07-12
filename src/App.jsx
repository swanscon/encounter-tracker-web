import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import EncounterTracker from "./pages/EncounterTracker";
import OddCourage from "./pages/OddCourage";
import MeritsHorizon from "./pages/MeritsHorizon";

function App() {
    const [preset, setPreset] = useState([]);

    const handleSetPreset = (newPreset) => {
        setPreset(newPreset);
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracker" element={<EncounterTracker props={preset} />} />
            <Route path="/odd-courage" element={<OddCourage />} />
            <Route path="/merits-horizon" element={<MeritsHorizon />} />
        </Routes>
    );
}

export default App;
