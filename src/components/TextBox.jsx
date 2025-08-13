import { useState, useEffect } from "react";
import "../styles/forms.css";

export default function TextBox({ initialValue, changeValue }) {
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
            changeValue(prev);
        } else {
            const newVal = Math.max(0, eval(curValue));
            setCurValue(newVal);
            changeValue(newVal);
        }
    };

    return (
        <form type="submit" onSubmit={handleSubmit} className="small-input">
            <input type="text" onChange={handleChange} value={curValue ?? ""} />
        </form>
    );
}
