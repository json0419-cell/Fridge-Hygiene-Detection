import React from "react";

export default function References(){
    return (
        <>
            <h1>Annotated Bibliography</h1>
            <p className="lead">Each citation includes a synopsis and a reliability note.</p>

            <div className="card" id="ref1">
                <h3>[1] Rahman, H. U., Akbar, H., Malik, A. N., Nawaz, T., Lazoglu, I. (2024).</h3>
                <p><strong>Title:</strong> Effective image processing-based technique for frost detection and quantification in domestic refrigerators. <em>International Journal of Refrigeration</em>, 160, 217–228.</p>
                <p><strong>Synopsis:</strong> Uses image features and regression to quantify frost; reports higher accuracy/robustness than capacitive/photoelectric sensors.</p>
                <p><strong>Reliability:</strong> Peer-reviewed refrigeration journal; recent (2024); strong experimental grounding.</p>
            </div>

            <div className="card" id="ref2">
                <h3>[2] Zhao, H., Li, P., Li, J., Liu, Z., Sang, Y., Ye, T., Zheng, W. (2025).</h3>
                <p><strong>Title:</strong> Applying neural network model to real-time frosting detection and intelligent defrosting control for air source heat pump. <em>Applied Energy</em>, 377, 124444.</p>
                <p><strong>Synopsis:</strong> YOLOv5/NN for real-time frost detection tied to defrost control; demonstrates practicality beyond mere detection.</p>
                <p><strong>Reliability:</strong> Top-tier energy journal; rigorous review; strong relevance to real systems.</p>
            </div>

            <div className="card" id="ref3">
                <h3>[3] (2025).</h3>
                <p><strong>Title:</strong> Comparative study on adaptable intelligent frost recognition method for air-source heat pump and cold chain based on image texture features under complex lighting conditions. <em>International Journal of Refrigeration</em>.</p>
                <p><strong>Synopsis:</strong> Compares deep-learning frost recognition under complex lighting; discusses energy/COP implications for cold-chain.</p>
                <p><strong>Reliability:</strong> Peer-reviewed refrigeration journal; contemporary focus on robustness.</p>
            </div>

            <div className="card" id="ref4">
                <h3>[4] Rajpura, P. S., et al. (2017).</h3>
                <p><strong>Title:</strong> Object Detection Using Deep CNNs Trained on Synthetic Images. <em>arXiv</em>:1709.05011.</p>
                <p><strong>Synopsis:</strong> Shows synthetic data can help when labels are scarce; relevant to the fridge hygiene data gap.</p>
                <p><strong>Reliability:</strong> Widely cited preprint; pair with recent works for balance.</p>
            </div>

            <div className="card" id="ref5">
                <h3>[5] (2023).</h3>
                <p><strong>Title:</strong> Mildew detection in rice grains based on computer vision and the YOLO-V5 model. <em>Food Science & Nutrition</em>.</p>
                <p><strong>Synopsis:</strong> Applies YOLOv5 to detect mildew spots on grain surfaces; provides transferable insights for stains/mold localization.</p>
                <p><strong>Reliability:</strong> Peer-reviewed food science journal; domain-adjacent evidence.</p>
            </div>

            <p className="notice">
                In body pages, cite references using [1]–[5] and link to the corresponding anchors here (e.g., Vision → [1], [2], [3]).
            </p>
        </>
    );
}
