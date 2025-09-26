import React from "react";
import AudioBar from "../components/AudioBar";
import chAudio from "../assets/audio/challenges.mp3";

export default function Challenges(){
    return (
        <>
            <h1>Challenges</h1>
            <p className="lead">Dataset scarcity, lighting/reflections, occlusions, and embedded constraints.</p>
            <AudioBar src={chAudio} label="Challenges page audio narration" />

            <div className="grid grid-2">
                <div className="card">
                    <h2>Data Scarcity</h2>
                    <p>Few labeled images of stains/mold inside real fridges. Consider synthetic data, few-shot learning, and standardized labeling protocols.</p>
                </div>
                <div className="card">
                    <h2>Lighting & Reflections</h2>
                    <p>Glossy surfaces and low light cause specular highlights and noise. Use domain adaptation, HDR/multi-frame fusion, or robust augmentations.</p>
                </div>
                <div className="card">
                    <h2>Occlusions</h2>
                    <p>Food items occlude surfaces. Mitigate via multi-view capture, temporal cues, or rearrangement heuristics.</p>
                </div>
                <div className="card">
                    <h2>Embedded Constraints</h2>
                    <p>On-device real-time needs lightweight models: pruning, quantization, knowledge distillation, or efficient backbones.</p>
                </div>
            </div>
        </>
    );
}
