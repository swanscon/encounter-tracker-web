import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import EncounterTracker from "./pages/EncounterTracker";
import PlayerSelector from "./pages/PlayerSelector";

function App() {
    const [playerList, setPlayerList] = useState([]);

    const handleUpdatePlayerList = (players) => {
        setPlayerList(players);
    }

    return (
        <Routes>
            <Route path="/" element={<Home clearPlayers={handleUpdatePlayerList} />} />
            <Route path="/tracker" element={<EncounterTracker playerList={playerList} />} />
            <Route path="/odd-courage" element={<PlayerSelector party="Odd Courage" addPlayers={handleUpdatePlayerList} />}/>
            <Route path="/merits-horizon" element={<PlayerSelector party="Merit's Horizon" addPlayers={handleUpdatePlayerList} />} />
        </Routes>
    );
}

export default App;
