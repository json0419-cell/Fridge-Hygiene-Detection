import React, { useState } from "react";

export default function Quiz(){
    const [score, setScore] = useState(null);
    const ans = { q1:"b", q2:"c", q3:"a", q4:"b" };

    function submit(e){
        e.preventDefault();
        let s = 0;
        Object.keys(ans).forEach(k=>{
            const chosen = document.querySelector(`input[name=${k}]:checked`);
            if(chosen && chosen.value === ans[k]) s++;
        });
        setScore(`${s} / ${Object.keys(ans).length}`);
    }

    return (
        <>
            <h1>Quick Quiz</h1>
            <p className="lead">Test your understanding (no grading recorded).</p>
            <form className="card" onSubmit={submit}>
                <h3>1) Which sensor type is most suitable for VOCs?</h3>
                <label><input type="radio" name="q1" value="a" /> Temperature sensor</label><br/>
                <label><input type="radio" name="q1" value="b" /> Gas sensor</label><br/>
                <label><input type="radio" name="q1" value="c" /> Photoelectric sensor</label>

                <h3>2) What is a key advantage of vision over basic sensors?</h3>
                <label><input type="radio" name="q2" value="a" /> Lower cost</label><br/>
                <label><input type="radio" name="q2" value="b" /> Immune to lighting</label><br/>
                <label><input type="radio" name="q2" value="c" /> Spatial localization of stains/frost</label>

                <h3>3) Which method helps when labeled data are scarce?</h3>
                <label><input type="radio" name="q3" value="a" /> Synthetic data / few-shot learning</label><br/>
                <label><input type="radio" name="q3" value="b" /> More sensors</label><br/>
                <label><input type="radio" name="q3" value="c" /> Ignore it</label>

                <h3>4) A typical embedded constraint is:</h3>
                <label><input type="radio" name="q4" value="a" /> Unlimited power</label><br/>
                <label><input type="radio" name="q4" value="b" /> Need for lightweight models</label><br/>
                <label><input type="radio" name="q4" value="c" /> Infinite memory</label>

                <p><button type="submit">Submit</button></p>
                {score && <p className="notice">Your score: {score}</p>}
            </form>
        </>
    );
}
