import React from "react";
import { Link } from "react-router-dom";
import AudioBar from "../components/AudioBar";
import frostCompare from "../assets/img/frost-vs-no-frost.jpg";
import homeAudio from "../assets/audio/home.m4a";

export default function Home(){
    return (
        <>
            {/* Hero Section */}
            <div className="hero">
                <div className="hero-content">
                    <h1>Fridge Hygiene Detection</h1>
                    <p className="lead">
                        A tutorial reviewing vision-based methods for frost estimation and
                        hygiene monitoring in household refrigerators. Learn how these methods work,
                        where they are applied, their challenges, and future directions.
                    </p>
                    <AudioBar src={homeAudio} label="Home page audio narration" />
                </div>
            </div>

            {/* Why this matters */}
            <div className="card">
                <h2>Why This Matters</h2>
                <ul>
                    <li><strong>Food safety:</strong> Stains and mold inside fridges can contaminate stored food.</li>
                    <li><strong>Energy efficiency:</strong> Frost on evaporators reduces performance; on-demand defrosting saves energy.</li>
                    <li><strong>Smart appliances:</strong> Vision methods enable fridges to self-monitor hygiene and efficiency.</li>
                </ul>
                <figure>
                    <img src={frostCompare} alt="Frost vs no frost comparison" />
                    <figcaption>
                        Frost vs. no frost evaporator comparison.
                        <em>Image source:</em> Coolblue,
                        <a href="https://www.coolblue.nl/en/advice/what-are-the-pros-and-cons-of-a-no-frost-fridge.html" target="_blank" rel="noopener noreferrer">
                            What are the pros and cons of a No Frost fridge?
                        </a>
                    </figcaption>

                </figure>
            </div>

            {/* What you will learn */}
            <div className="card">
                <h2>What You Will Learn</h2>
                <ul>
                    <li>Understand vision-based methods such as K-means segmentation and YOLO detection.</li>
                    <li>Explore applications in frost detection, defrosting, and hygiene monitoring.</li>
                    <li>Identify practical challenges and how researchers address them.</li>
                    <li>Discover future research directions, from advanced models to economic analysis.</li>
                </ul>
            </div>

            {/* Two core topics */}
            <div className="grid grid-2">
                <div className="card">
                    <h3>Frost Detection</h3>
                    <p>
                        Using K-means segmentation to estimate frost thickness from camera images,
                        enabling accurate, sensor-free defrost control.
                    </p>
                    <Link to="/vision" className="btn btn-light">Learn More</Link>
                </div>
                <div className="card">
                    <h3>Hygiene Monitoring</h3>
                    <p>
                        Using YOLO-v5 object detection to localize stains and mold on fridge surfaces,
                        providing timely cleaning prompts and enhancing food safety.
                    </p>
                    <Link to="/applications" className="btn btn-light">See Use Cases</Link>
                </div>
            </div>

            {/* How to use this tutorial */}
            <div className="card">
                <h2>How to Use This Tutorial</h2>
                <ol>
                    <li>Start with <Link to="/vision">Vision</Link> to learn the methods.</li>
                    <li>Explore <Link to="/applications">Applications</Link> for real-world scenarios.</li>
                    <li>Review <Link to="/challenges">Challenges</Link> to understand limitations.</li>
                    <li>Look ahead to <Link to="/future">Future</Link> research directions.</li>
                    <li>Check your knowledge with the <Link to="/quiz">Quiz</Link>.</li>
                </ol>
            </div>

        </>
    );
}
