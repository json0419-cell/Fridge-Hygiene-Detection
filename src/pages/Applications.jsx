import React from "react";
import AudioBar from "../components/AudioBar";
import appAudio from "../assets/audio/applications.mp3";

export default function Applications(){
    return (
        <>
            <h1>Applications in Household Refrigerators</h1>
            <p className="lead">
                How vision-based methods are deployed inside <em>household refrigerators</em> to improve energy efficiency and food hygiene.
                We focus on two practical use cases: (1) K-means–based frost thickness estimation for on-demand defrosting, and
                (2) YOLO-based surface hygiene monitoring (stains &amp; mold).
            </p>
            <AudioBar src={appAudio} label="Applications page audio narration" />

            {/* Intro */}
            <div className="card">
                <h2>Why Apply Vision in Fridges?</h2>
                <ul>
                    <li><strong>Energy efficiency:</strong> Frost on evaporators reduces heat-exchange efficiency; on-demand defrosting stabilizes performance and saves energy.</li>
                    <li><strong>Food safety &amp; hygiene:</strong> Stains and mold on shelves/liners can contaminate stored food; objective detection enables timely cleaning.</li>
                    <li><strong>Cost &amp; coverage:</strong> A small RGB camera (≈$10–12) observes the <em>entire surface</em>, while capacitive/photoelectric sensors are point-based and may drift with aging [<a href="#/references#ref1">1</a>].</li>
                </ul>
            </div>

            {/* Use Case 1: Frost */}
            <div className="card">
                <h2>Use Case 1 — Frost Thickness &amp; On-Demand Defrosting (K-means)</h2>
                <p>
                    Camera-based estimation (K=2 segmentation, RoI-wise ΔFp, regression to mm) enables <strong>sensor-free, automatic defrosting</strong>
                    in domestic fridges. Studies report higher accuracy than capacitive/photoelectric sensors at lower cost [<a href="#/references#ref1">1</a>].
                    Similar pipelines have been integrated to ASHP controllers via Modbus and validated on embedded devices [<a href="#/references#ref2">2</a>][<a href="#/references#ref3">3</a>].
                </p>
                <h3>Deployment Workflow</h3>
                <ol>
                    <li><strong>Camera:</strong> Mount a compact RGB module facing the evaporator (transparent cover if needed); keep illumination stable.</li>
                    <li><strong>Perception:</strong> K=2 K-means foreground segmentation per frame; compute RoI-wise ΔFp; apply calibrated regression to get thickness (mm).</li>
                    <li><strong>Policy:</strong> Start/stop thresholds (hysteresis) on thickness/coverage decide when to trigger or terminate defrost.</li>
                    <li><strong>Control:</strong> Send commands to the fridge controller via an industrial/MCU interface (e.g., <em>Modbus</em>) for closed-loop automation.</li>
                    <li><strong>Edge:</strong> Run on a low-power SBC (e.g., <em>Raspberry Pi</em>); keep preprocessing lightweight for real time.</li>
                </ol>
                <p className="lead" style={{marginTop: 8}}>
                    <strong>Value:</strong> whole-surface monitoring, reduced energy consumption, minimal BOM increase, simpler maintenance vs. aging point sensors.
                </p>
            </div>

            {/* Use Case 2: Hygiene */}
            <div className="card">
                <h2>Use Case 2 — Surface Hygiene Monitoring (YOLO)</h2>
                <p>
                    Deep-learning detectors (e.g., YOLO-v5s) localize stains and mold on shelves, liners, and door bins.
                    A related Food Science &amp; Nutrition case achieved strong precision/recall for <em>mildew detection in rice grains</em>;
                    the same detection/quantification logic transfers to fridge interiors with appropriate adaptation [<a href="#/references#ref5">5</a>].
                </p>
                <h3>Deployment Workflow</h3>
                <ol>
                    <li><strong>Placement:</strong> An interior camera observes key surfaces; use wide FOV or multiple angles for coverage.</li>
                    <li><strong>Model:</strong> Collect a small fridge-specific labeled set (low light, reflections); fine-tune YOLO-v5s for stains/mold classes.</li>
                    <li><strong>UX:</strong> Surface detections power “Clean recommended” notifications with annotated thumbnails in the app/GUI.</li>
                    <li><strong>Ops:</strong> Optionally log hygiene history or guide users through a cleaning routine (with confirmation).</li>
                </ol>
                <p className="lead" style={{marginTop: 8}}>
                    <strong>Value:</strong> objective hygiene feedback, fewer missed cleanings, improved food safety with minimal user burden.
                </p>
            </div>

            {/* High-level comparison */}
            <div className="card">
                <h2>High-Level Comparison</h2>
                <div className="table-wrap">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Aspect</th>
                            <th>RGB Camera</th>
                            <th>Capacitive Sensor</th>
                            <th>Photoelectric Sensor</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Coverage</td>
                            <td>Whole surface (spatial map)</td>
                            <td>Point measurement</td>
                            <td>Point measurement</td>
                        </tr>
                        <tr>
                            <td>Comparative Accuracy</td>
                            <td>Lowest thickness error in study [<a href="#/references#ref1">1</a>]</td>
                            <td>Higher error than vision [<a href="#/references#ref1">1</a>]</td>
                            <td>Highest error among the three [<a href="#/references#ref1">1</a>]</td>
                        </tr>
                        <tr>
                            <td>Incremental Cost</td>
                            <td>$10–12 camera</td>
                            <td>IC ≈ $400</td>
                            <td> $10 </td>
                        </tr>
                        <tr>
                            <td>Extensibility</td>
                            <td>Also detects stains/mold; software-upgradable</td>
                            <td>Frost thickness only</td>
                            <td>Point frost presence</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p className="note">
                    Notes: Costs are indicative and vary by vendor. Accuracy refers to comparative results in the same testbed [<a href="#/references#ref1">1</a>].
                </p>
            </div>


            {/* Summary */}
            <div className="card">
                <h2>Summary</h2>
                <p>
                    Vision enables two high-impact fridge applications:
                    <em> K-means–based frost monitoring for automated, on-demand defrosting</em> and
                    <em> YOLO-based hygiene detection for safer storage</em>.
                    With a low-cost camera and lightweight pipelines, manufacturers can improve both efficiency and food safety at scale.
                </p>
            </div>
        </>
    );
}
