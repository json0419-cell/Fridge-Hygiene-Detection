import React from "react";
import AudioBar from "../components/AudioBar";
import pipeline from "../assets/img/pipeline-diagram.jpg";
import appAudio from "../assets/audio/applications.mp3";

export default function Applications(){
    return (
        <>
            <h1>Applications in Refrigerator Hygiene</h1>
            <p className="lead">Frost detection & quantification; coupling with defrost control; stains/mold detection via transferable pipelines.</p>
            <AudioBar src={appAudio} label="Applications page audio narration" />

            <div className="card">
                <h2>Frost Detection</h2>
                <ul>
                    <li>Domestic refrigerators: feature-regression vs. YOLO/NN.</li>
                    <li>Air-source heat pumps & cold chain: real-time detection + control integration ([<a href="#/references#ref2">2</a>]).</li>
                </ul>
            </div>

            <div className="card">
                <h2>Stains & Mold</h2>
                <p>Fridge-surface studies are limited; adopt food-surface pipelines (data capture, labeling schema, augmentation) and add domain adaptation for enclosure lighting/occlusion.</p>
            </div>

            <figure>
                <img src={pipeline} alt="Application pipeline diagram"/>
                <figcaption>Pipeline: data capture → detection → alert/defrost control. <em>Image source:</em> add credit link.</figcaption>
            </figure>
        </>
    );
}
