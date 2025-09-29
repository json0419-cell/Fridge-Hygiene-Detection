import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AudioBar from "../components/AudioBar";
import refAudio from "../assets/audio/references.m4a";

export default function References(){
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const targetId = params.get("to"); // e.g. "ref1"
        if (targetId) {
            setTimeout(() => {
                const el = document.getElementById(targetId);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 0);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location.search]);

    return (
        <>
            <h1>Annotated Bibliography</h1>
            <p className="lead">
                This bibliography contains five key references used in this tutorial.
                Each entry includes citation details, a synopsis, and a note on reliability.
            </p>
            <AudioBar src={refAudio} label="References page audio narration" />

            {/* Ref 1 */}
            <div className="card" id="ref1">
                <h3>[1] Effective image processing-based technique for frost detection and quantification in domestic refrigerators</h3>
                <p>
                    <strong>Authors:</strong> Rahman, H. U., Akbar, H., Malik, A. N., Nawaz, T., Lazoglu, I. (2024) <br />
                    <strong>Source:</strong> <em>International Journal of Refrigeration</em> <br />
                    <strong>Link:</strong>{" "}
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S0140700724000355" target="_blank" rel="noopener noreferrer">
                        ScienceDirect
                    </a>
                </p>
                <p>
                    <strong>Synopsis:</strong> Proposes an image-processing technique for frost detection and quantification in refrigerators.
                    Compared with capacitive and photoelectric sensors, the method achieved the lowest error (~13.69%) while being low cost and more robust.
                </p>
                <p><strong>Reliability:</strong> Peer-reviewed refrigeration journal (2024); strong experimental validation.</p>
            </div>

            {/* Ref 2 */}
            <div className="card" id="ref2">
                <h3>[2] Applying neural network model to real-time frosting detection and intelligent defrosting control for air source heat pump</h3>
                <p>
                    <strong>Authors:</strong> Zhao, H., Li, P., Li, J., Liu, Z., Sang, Y., Ye, T., Zheng, W. (2025) <br />
                    <strong>Source:</strong> <em>Applied Energy</em> <br />
                    <strong>Link:</strong>{" "}
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S0306261924018270" target="_blank" rel="noopener noreferrer">
                        ScienceDirect
                    </a>
                </p>
                <p>
                    <strong>Synopsis:</strong> Introduces a YOLO-based neural network model for real-time frost detection in ASHPs,
                    integrated with automatic defrost control. Demonstrates practical deployment and system-level energy benefits.
                </p>
                <p><strong>Reliability:</strong> Published in <em>Applied Energy</em>, a leading energy journal; highly credible.</p>
            </div>

            {/* Ref 3 */}
            <div className="card" id="ref3">
                <h3>[3] Comparative study on adaptable intelligent frost recognition method ... under complex lighting conditions</h3>
                <p>
                    <strong>Authors:</strong> Wang, X., et al. (2025) <br />
                    <strong>Source:</strong> <em>International Journal of Refrigeration</em> <br />
                    <strong>Link:</strong>{" "}
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S0140700725001392" target="_blank" rel="noopener noreferrer">
                        ScienceDirect
                    </a>
                </p>
                <p>
                    <strong>Synopsis:</strong> Compares adaptable frost recognition methods in ASHP and cold chain systems under complex lighting.
                    Focuses on robustness and generalization across environmental conditions.
                </p>
                <p><strong>Reliability:</strong> Peer-reviewed (2025), valuable for understanding robustness issues in real deployments.</p>
            </div>

            {/* Ref 4 */}
            <div className="card" id="ref4">
                <h3>[4] Object Detection Using Deep CNNs Trained on Synthetic Images</h3>
                <p>
                    <strong>Authors:</strong> Rajpura, P. S., et al. (2017) <br />
                    <strong>Source:</strong> <em>arXiv preprint</em> <br />
                    <strong>Link:</strong>{" "}
                    <a href="https://arxiv.org/abs/1706.06782" target="_blank" rel="noopener noreferrer">
                        arXiv
                    </a>
                </p>
                <p>
                    <strong>Synopsis:</strong> Demonstrates the use of synthetic images for CNN object detection.
                    Shows that synthetic-to-real transfer is feasible and adding a small set of real images significantly improves performance.
                </p>
                <p><strong>Reliability:</strong> Widely cited preprint; influential in synthetic data research, though not peer-reviewed.</p>
            </div>

            {/* Ref 5 */}
            <div className="card" id="ref5">
                <h3>[5] Mildew detection in rice grains based on computer vision and the YOLO convolutional neural network</h3>
                <p>
                    <strong>Authors:</strong> Han, Y., et al. (2023) <br />
                    <strong>Source:</strong> <em>Food Science &amp; Nutrition</em> <br />
                    <strong>Link:</strong>{" "}
                    <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/fsn3.3798" target="_blank" rel="noopener noreferrer">
                        Wiley Online Library
                    </a>
                </p>
                <p>
                    <strong>Synopsis:</strong> Applies YOLO-v5 and micro-computer vision to mildew detection in rice grains.
                    Achieved precision ≈82.1% and recall ≈86.5%, with mildew area index correlated to microbial counts.
                </p>
                <p><strong>Reliability:</strong> Peer-reviewed food science journal (2023); credible evidence for vision-based food safety applications.</p>
            </div>
        </>
    );
}
