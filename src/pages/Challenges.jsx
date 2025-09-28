import React from "react";
import AudioBar from "../components/AudioBar";
import chAudio from "../assets/audio/challenges.mp3";


export default function Challenges(){
    return (
        <>
            <h1>Challenges in Vision-Based Fridge Hygiene Detection</h1>
            <p className="lead">
                This page summarizes key challenges and limitations reported in the literature as well as practical considerations
                when deploying vision-based methods in real refrigerators.
            </p>
            <AudioBar src={chAudio} label="Challenges page audio narration" />

            {/* Theoretical challenges */}
            <div className="card">
                <h2>Limitations of Existing Methods</h2>
                <ul>
                    <li>
                        <strong>Traditional sensors:</strong> Capacitive and photoelectric sensors can quantify frost thickness but degrade over time, require maintenance, and provide only point measurements.
                    </li>
                    <li>
                        <strong>Image segmentation methods:</strong> Static thresholds fail under dynamic lighting; segmentation accuracy drops with uneven frost distribution or long-term dust/condensation on the lens.
                    </li>
                    <li>
                        <strong>Deep learning models:</strong> Require large annotated datasets; synthetic data may not fully capture clutter in real fridge scenes; CNNs can be computationally expensive (e.g., >1s/frame vs. ~0.13s/frame for optimized YOLO).
                    </li>
                    <li>
                        <strong>Evaluation gaps:</strong> No standardized metrics for defining frost levels and defrost thresholds; limited testing across different fridge/ASHP models reduces generalizability.
                    </li>
                </ul>
            </div>

            {/* Practical considerations */}
            <div className="card">
                <h2>Practical Considerations for Real Deployment</h2>

                <h3>Hardware Challenges</h3>
                <ul>
                    <li>Evaporators are often hidden behind opaque covers → consider transparent covers for camera visibility.</li>
                    <li>Lens condensation during long-term use → requires anti-fog coating or micro-heating solutions.</li>
                    <li>Dust accumulation degrades image quality → protective covers and periodic cleaning are needed.</li>
                </ul>

                <h3>Software Challenges</h3>
                <ul>
                    <li>Low light & strong reflections inside the fridge → need image enhancement, denoising, or auxiliary LEDs/IR.</li>
                    <li>Data scarcity → synthetic datasets plus a small curated real set are required for effective fine-tuning.</li>
                </ul>

                <h3>Cost & Scalability</h3>
                <ul>
                    <li>Added camera + compute module increases BOM by &lt;1% of fridge cost.</li>
                    <li>Lightweight models (pruned/quantized YOLO or K-means pipelines) can run on low-power embedded devices.</li>
                </ul>
            </div>

            {/* Optional pipeline illustration */}
            <div className="card">
                <h2>Challenge Summary & Pipeline Illustration</h2>
                <p>
                    Vision-based hygiene detection is promising, but reliable deployment requires addressing hardware reliability,
                    data availability, algorithm robustness, and cost-effectiveness. The diagram below shows a typical pipeline,
                    highlighting potential failure points (lighting, occlusion, domain shift).
                </p>

            </div>
        </>
    );
}
