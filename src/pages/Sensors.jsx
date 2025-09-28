import React from "react";
import AudioBar from "../components/AudioBar";
import sensorsAudio from "../assets/audio/sensors.mp3";
import { Link } from "react-router-dom";
import photoelectricImg from "../assets/img/PhotoelectricSensors.jpg";
import capacitiveImg from "../assets/img/CapacitiveSensors.jpg";
import cameraImg from "../assets/img/RGBCamera.jpg";


export default function Sensors(){
    return (
        <>
            <h1>Sensor-Based Approaches for Frost Detection</h1>
            <p className="lead">
                This page reviews indirect and direct sensor methods historically used for frost detection,
                highlighting their principles, advantages, and limitations. We then explain why camera-based
                vision methods are increasingly favored as superior alternatives.
            </p>
            <AudioBar src={sensorsAudio} label="Sensors page audio narration" />

            {/* Indirect Measurement */}
            <div className="card">
                <h2>1. Indirect Measurement Methods</h2>
                <p>
                    These approaches do not measure frost directly. Instead, they infer frosting conditions from changes in
                    operational parameters such as temperature, humidity, pressure, or elapsed time.
                </p>
                <ul>
                    <li>
                        <strong>Sensor types:</strong> Temperature-Time (T-T), Temperature-Humidity-Time (T-H-T), and pressure-based methods.
                    </li>
                    <li>
                        <strong>Advantages:</strong> Easy to implement; widely used in conventional defrost control.
                    </li>
                    <li>
                        <strong>Disadvantages:</strong>
                        <ul>
                            <li><strong>Low accuracy:</strong> T-T accuracy can be as low as 37%.</li>
                            <li><strong>Energy waste:</strong> Up to 68% of defrosting operations may be unnecessary,
                                leading to wasted energy and degraded performance.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* Direct Measurement */}
            <div className="card">
                <h2>2. Direct Measurement Methods</h2>
                <p>
                    These sensors attempt to directly measure frost accumulation on the evaporator surface.
                    They typically offer higher precision than indirect methods but suffer from cost and durability issues.
                </p>

                {/* Photoelectric */}
                <div className="grid-2">
                    <div>
                        <h3>Photoelectric Sensors</h3>
                        <ul>
                            <li><strong>Principle:</strong> Infrared transmitter/receiver pair detects frost by changes in transmitted signal.</li>
                            <li><strong>Advantages:</strong> Adequate accuracy and repeatability.</li>
                            <li><strong>Disadvantages:</strong>
                                <ul>
                                    <li>Point-source detection — only one location is monitored.</li>
                                    <li>Performance degrades in harsh fridge environments.</li>
                                    <li>Reported error margin ≈ <strong>17.5%</strong>, higher than capacitive and camera-based methods.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <figure>
                        <img src={photoelectricImg} alt="Photoelectric sensor"/>
                        <figcaption>
                            Photoelectric sensor. <em>Image source:</em>{" "}
                            <a href="https://www.keyence.com/products/sensor/photoelectric/" target="_blank" rel="noopener noreferrer">Keyence</a>
                        </figcaption>
                    </figure>
                </div>

                {/* Capacitive */}
                <div className="grid-2" style={{marginTop: "20px"}}>
                    <div>
                        <h3>Capacitive Sensors</h3>
                        <ul>
                            <li><strong>Principle:</strong> Measure capacitance change as frost builds on the surface.</li>
                            <li><strong>Advantages:</strong> Good accuracy and repeatability.</li>
                            <li><strong>Disadvantages:</strong>
                                <ul>
                                    <li>High cost: IC FDC2214 ≈ <strong>$400</strong>, far more than an RGB camera (~$12).</li>
                                    <li>Performance degradation and high maintenance costs.</li>
                                    <li>Error margin ≈ <strong>15.17%</strong>, better than photoelectric but worse than K-means (13.69%).</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <figure>
                        <img src={capacitiveImg} alt="Capacitive sensor"/>
                        <figcaption>
                            Capacitive sensor. <em>Image source:</em>{" "}
                            <a href="https://www.realpars.com/blog/capacitive-sensor" target="_blank" rel="noopener noreferrer">RealPars</a>
                        </figcaption>
                    </figure>
                </div>

                {/* Other Direct Sensors 保留原文 */}
                <h3 style={{marginTop: "20px"}}>Other Direct Sensors</h3>
                <p>
                    Resistive, fiber optic, impedance-based, and acoustic sensors have been investigated.
                    However, all suffer from susceptibility to damage in cold, humid conditions, high maintenance needs,
                    and degradation over time, limiting practical deployment.
                </p>
            </div>

            {/* Rationale for Camera-Based */}
            <div className="card">
                <h2>3. Why Camera-Based Methods Are Favored</h2>
                <div className="grid-2">
                    <div>
                        <p>
                            Computer vision methods, whether classical (e.g., K-means) or modern deep learning (e.g., YOLO-v5),
                            address the shortcomings of both indirect and direct sensors and offer a superior combination of
                            accuracy, cost, and robustness.
                        </p>
                        <ul>
                            <li>
                                <strong>Superior accuracy:</strong>
                                K-means segmentation error ≈ <strong>13.69%</strong>, lower than capacitive (15.17%) and photoelectric (17.5%) [<Link to="/references?to=ref1">1</Link>].
                                YOLOv5-frost achieved mAP ≈ <strong>98.26%</strong>.
                            </li>
                            <li><strong>Comprehensive monitoring:</strong> Cameras capture the entire evaporator surface, unlike point-based sensors.</li>
                            <li><strong>Non-contact durability:</strong> Optical, non-contact approach avoids sensor degradation in humid, cold environments.</li>
                            <li><strong>Low cost:</strong> RGB cameras (~$12) are cheaper than capacitive ICs ($400) and similar in cost to photoelectric (~$10).</li>
                            <li><strong>Robustness & adaptability:</strong> Augmentation techniques (rotation, illumination changes) improve generalization.</li>
                            <li><strong>Advanced applications:</strong> Synthetic training data can replace much of manual labeling; adding a small number of real images greatly improves performance.</li>
                        </ul>
                    </div>
                    <figure>
                        <img src={cameraImg} alt="RGB camera"/>
                        <figcaption>
                            RGB camera for vision-based detection. <em>Image source:</em>{" "}
                            <a href="https://www.e-consystems.com/usb-cameras/4k-onsemi-ar0830-usb3-camera.asp" target="_blank" rel="noopener noreferrer">e-con Systems</a>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </>
    );
}
