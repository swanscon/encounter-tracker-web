import { useState } from "react";
import { rollInit } from "../utils/rollInit";
import "../styles/forms.css";

export default function AddCreature({ updateList }) {
    const [creature, setCreature] = useState({
        init: "",
        name: "",
        ac: "",
        hp: "",
        notes: "",
        pc: false,
    });
    const [count, setCount] = useState(1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreature((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        setCreature((prev) => ({
            ...prev,
            pc: e.target.checked,
        }));
    };

    const handleUpdateCount = (e) => {
        setCount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let qty = count;
        while (qty > 0) {
            let updatedCreature = { ...creature };
            if (count > 1) {
                updatedCreature.name = `${updatedCreature.name} ${qty}`;
            }
            const initStr = String(creature.init);
            if (initStr.at(0) === "+" || initStr.at(0) === "-") {
                const newInit = rollInit(initStr);
                updatedCreature.init = newInit;
            }

            updateList(updatedCreature);
            qty--;
        }
        // reset form
        setCreature({
            init: "",
            name: "",
            ac: "",
            hp: "",
            notes: "",
            pc: false,
        });
        console.log(`Submitting creature: ${creature.name} (x ${count})`);
        setCount(1);
    };

    return (
        <div className="creature-form">
            <form>
                <label htmlFor="init">INITIATIVE</label>
                <input
                    type="text"
                    name="init"
                    onChange={handleChange}
                    value={creature.init}
                />
                <label htmlFor="name">NAME</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={creature.name}
                />
                <label htmlFor="ac">AC</label>
                <input
                    type="text"
                    name="ac"
                    onChange={handleChange}
                    value={creature.ac}
                />
                <label htmlFor="hp">HP</label>
                <input
                    type="text"
                    name="hp"
                    onChange={handleChange}
                    value={creature.hp}
                />
                <label htmlFor="notes">NOTES</label>
                <input
                    type="text"
                    name="notes"
                    onChange={handleChange}
                    value={creature.notes}
                />
                <label htmlFor="pc">PC</label>
                <input
                    type="checkbox"
                    name="pc"
                    checked={creature.pc}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="count">QTY</label>
                <input
                    type="number"
                    name="count"
                    onChange={handleUpdateCount}
                    value={count}
                />
            </form>
            <button onClick={handleSubmit}>Add To Tracker</button>
        </div>
    );
}
