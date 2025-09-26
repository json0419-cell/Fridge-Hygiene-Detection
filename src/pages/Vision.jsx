import React from "react";
import AudioBar from "../components/AudioBar";
import yoloImg from "../assets/img/yolo-detection.jpg";
import visionAudio from "../assets/audio/vision.mp3";

export default function Vision(){
    return (
        <>
            <h1>Vision-Based Approaches</h1>
            <p className="lead">Traditional image processing vs. deep learning (YOLO/NN), with synthetic data to mitigate dataset scarcity; transferable insights for stains/mold.</p>
            <AudioBar src={visionAudio} label="Vision page audio narration" />

            <div className="card">
                <h2>Traditional Image Processing (Rahman 2024) [<a href="#/references#ref1">1</a>]</h2>
                <p>Feature extraction + regression to quantify frost thickness. Reported better accuracy/robustness than capacitive/photoelectric sensors in domestic refrigerators.</p>
            </div>

            <div className="grid grid-2">
                <div className="card">
                    <h2>Deep Learning for Frost (Zhao 2025; Comparative 2025) [<a href="#/references#ref2">2</a>][<a href="#/references#ref3">3</a>]</h2>
                    <p>YOLOv5/NN deliver real-time frost detection and remain robust under complex lighting; some work connects detection to defrost control policies.</p>
                </div>
                <div className="card">
                    <h2>Synthetic Data (Rajpura 2017) [<a href="#/references#ref4">4</a>]</h2>
                    <p>When labeled data are scarce, pre-train with synthetic images and fine-tune on limited real samples to bridge the domain gap.</p>
                </div>
            </div>

            <div className="card">
                <h2>Transferable to Stains/Mold (Mildew 2023) [<a href="#/references#ref5">5</a>]</h2>
                <p>Food-surface mildew detection with YOLOv5 shows object detection is well-suited for contamination localization; fridge deployment needs domain adaptation for low light, reflections, and occlusions.</p>
                <figure>
                    <img src={yoloImg} alt="YOLO detection illustration"/>
                    <figcaption>YOLO-style detection illustration. <em>Image source:</em> add credit link.</figcaption>
                </figure>
            </div>
        </>
    );
}
