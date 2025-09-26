import React from "react";
import AudioBar from "../components/AudioBar";
import sensorImg from "../assets/img/sensor-diagram.jpg";
import sensorsAudio from "../assets/audio/sensors.mp3";

export default function Sensors(){
    return (
        <>
            <h1>Sensor-Based Approaches</h1>
            <p className="lead">Temperature & humidity, gas (VOCs), and capacitive/photoelectric frost sensors: simple and low-cost, but limited spatial localization.</p>
            <AudioBar src={sensorsAudio} label="Sensors page audio narration" />

            <div className="grid grid-2">
                <div className="card">
                    <h2>Temperature & Humidity</h2>
                    <p>Track environmental conditions but do not directly localize stains or frost. Good as thresholds/triggers and background context.</p>
                </div>
                <div className="card">
                    <h2>Gas Sensors (VOCs)</h2>
                    <p>Indicate spoilage volatiles; however, they cannot localize specific contaminated surfaces. Useful when fused with vision.</p>
                </div>
            </div>

            <div className="card">
                <h2>Capacitive / Photoelectric for Frost</h2>
                <p>Common in appliances; affected by drift and environment changes. Recent vision-based works report accuracy/robustness gains over these baselines.</p>
                <figure>
                    <img src={sensorImg} alt="Sensor principle diagram"/>
                    <figcaption>Working principle illustration. <em>Image source:</em> add credit link.</figcaption>
                </figure>
            </div>

            <table className="table">
                <thead><tr><th>Method</th><th>Cost</th><th>Localize?</th><th>Pros</th><th>Cons</th></tr></thead>
                <tbody>
                <tr><td>Temperature/Humidity</td><td>Low</td><td>No</td><td>Simple, robust</td><td>Indirect, coarse</td></tr>
                <tr><td>Gas (VOC)</td><td>Low–Med</td><td>No</td><td>Spoilage indication</td><td>Not surface hygiene</td></tr>
                <tr><td>Capacitive/Photoelectric</td><td>Med</td><td>Limited</td><td>Simple hardware</td><td>Drift, aging</td></tr>
                </tbody>
            </table>
        </>
    );
}
