import React from "react";
import AudioBar from "../components/AudioBar";
import frost from "../assets/img/frost-vs-no-frost.jpg";
import pipeline from "../assets/img/pipeline-diagram.jpg";
import homeAudio from "../assets/audio/home.mp3";

export default function Home(){
    return (
        <>
            <h1>Fridge Hygiene Detection</h1>
            <p className="lead">
                A mixed-media tutorial reviewing research on frost, stains, and mold detection inside refrigerators—comparing sensor-based and computer vision approaches, summarizing recent results (2024–2025), datasets, metrics, limitations, and future directions.
            </p>
            <AudioBar src={homeAudio} label="Home page audio narration (replace with your recording)" />

            <section className="card">
                <h2>Learning Objectives</h2>
                <ul>
                    <li>Why fridge hygiene matters for <span className="badge">food safety</span> and <span className="badge">energy efficiency</span>.</li>
                    <li>Strengths/weaknesses of sensor-based vs. vision-based methods.</li>
                    <li>Frost detection highlights: Rahman (2024), Zhao (2025), Comparative Study (2025).</li>
                    <li>Transferable approaches for stains/mold (Mildew 2023) and synthetic data.</li>
                </ul>
            </section>

            <div className="grid grid-2">
                <figure>
                    <img src={frost} alt="Frost vs no frost"/>
                    <figcaption>Frost vs. no-frost evaporator. <em>Image source:</em> add proper credit link.</figcaption>
                </figure>
                <figure>
                    <img src={pipeline} alt="Detection pipeline"/>
                    <figcaption>Typical detection pipeline (sensors / vision). <em>Image source:</em> add credit.</figcaption>
                </figure>
            </div>

            <section className="card">
                <h2>How to Use This Tutorial</h2>
                <p>Use the top navigation to explore <strong>Sensors</strong>, <strong>Vision</strong>, practical <strong>Applications</strong>, known <strong>Challenges</strong>, <strong>Future</strong> directions, and the <strong>References</strong> (annotated). Don’t forget the interactive <strong>Quiz</strong>!</p>
            </section>
        </>
    );
}
