import { useState, useEffect } from "react";
import "../styles/forms.css";

export default function TextBox({ initialValue }) {
    const [curValue, setCurValue] = useState(initialValue);
    const [prev, setPrev] = useState(initialValue);

    useEffect(() => {
        setCurValue(initialValue);
        setPrev(initialValue);
    }, [initialValue]);

    const handleChange = (e) => {
        e.preventDefault();
        if (Number.isInteger(Number.parseInt(curValue))) {
            setPrev(curValue);
        }
        setCurValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Number.isInteger(Number.parseInt(curValue))) {
            setCurValue(prev);
        } else {
            const newVal = eval(curValue);
            setCurValue(newVal > 0 ? newVal : 0);
        }
    };

    return (
        <form type="submit" onSubmit={handleSubmit} className="small-input">
            <input type="text" onChange={handleChange} value={curValue ?? ""} />
        </form>
    );
}
