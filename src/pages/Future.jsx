import React from "react";
import AudioBar from "../components/AudioBar";
import smart from "../assets/img/smart-fridge.jpg";
import futureAudio from "../assets/audio/future.mp3";

export default function Future(){
    return (
        <>
            <h1>Future Directions & Conclusions</h1>
            <p className="lead">Synthetic/few-shot learning, multimodal sensing (vision + gas/temperature), and IoT/control integration.</p>
            <AudioBar src={futureAudio} label="Future page audio narration" />

            <div className="card">
                <h2>Synthetic & Few-Shot</h2>
                <p>Bridge data gaps for stains/mold; apply domain randomization and curriculum fine-tuning for generalization.</p>
            </div>
            <div className="card">
                <h2>Multimodal Sensing</h2>
                <p>Fuse RGB with depth/multispectral and VOC sensors for robust hygiene detection under challenging conditions.</p>
            </div>
            <div className="card">
                <h2>IoT & Control</h2>
                <p>On-device detection linked to alerts, cleaning reminders, and defrost control policies; both household and industrial settings.</p>
            </div>

            <figure>
                <img src={smart} alt="Smart fridge concept"/>
                <figcaption>Smart fridge concept illustration. <em>Image source:</em> add credit link.</figcaption>
            </figure>
        </>
    );
}
