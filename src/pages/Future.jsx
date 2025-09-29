import React from "react";
import AudioBar from "../components/AudioBar";
import futureAudio from "../assets/audio/future.m4a";
import {Link} from "react-router-dom";

export default function Future(){
    return (
        <>
            <h1>Future Directions &amp; Outlook</h1>
            <p className="lead">
                Multiple studies highlight important future work needed to transform vision-based frost and hygiene detection
                from research prototypes into reliable, commercial systems.
                These directions cover physical integration, dataset development, model improvement, and broader applicability.
            </p>
            <AudioBar src={futureAudio} label="Future page audio narration" />

            {/* Physical integration issues */}
            <div className="card">
                <h2>1. Overcoming Physical & Environmental Challenges</h2>
                <ul>
                    <li><strong>Transparent evaporator covers:</strong> Replace opaque casings with transparent ones to allow unobstructed camera views [<Link to="/references?to=ref1">1</Link>].</li>
                    <li><strong>Lens condensation prevention:</strong> Long-term camera operation in cold, humid environments risks fogging. Anti-fog coatings, micro-heating, or airflow design must be developed [<Link to="/references?to=ref1">1</Link>].</li>
                    <li><strong>Dust and aging effects:</strong> Future designs should include protective covers and regular maintenance schedules to mitigate performance degradation over time [<a href="#/references#ref3">3</a>].</li>
                </ul>
            </div>

            {/* Data and generalization */}
            <div className="card">
                <h2>2. Expanding Data & Improving Generalization</h2>
                <ul>
                    <li><strong>Larger and more diverse datasets:</strong> Expanding image datasets improves robustness under complex real-world conditions [<a href="#/references#ref2">2</a>].</li>
                    <li><strong>Validation on varied equipment:</strong> Future work should verify generalization across different refrigerator and ASHP models [<Link to="/references?to=ref2">2</Link>].</li>
                    <li><strong>Testing on real-world food samples:</strong> For mildew detection, validate models with grains collected from depots or markets rather than lab-prepared samples [<a href="#/references#ref5">5</a>].</li>
                </ul>
            </div>

            {/* Model advancement */}
            <div className="card">
                <h2>3. Advancing Model Architectures</h2>
                <ul>
                    <li><strong>More advanced segmentation models:</strong> Investigate U-net, Deeplab, or similar architectures for more accurate mildew segmentation [<Link to="/references?to=ref5">5</Link>].</li>
                    <li><strong>Optimized or alternative detectors:</strong> Replace legacy DetectNet with modern object detectors (e.g., RPN-based or transformer-based architectures) for better performance [<Link to="/references?to=ref4">4</Link>].</li>
                    <li><strong>Integrating depth & semantic segmentation:</strong> For occluded scenes, combine synthetic training with semantic segmentation and depth maps to improve detection [<Link to="/references?to=ref4">4</Link>].</li>
                </ul>
            </div>

            {/* Synthetic data strategy */}
            <div className="card">
                <h2>4. Improving Synthetic Data Strategies</h2>
                <ul>
                    <li><strong>Add distractor objects:</strong> Incorporate 3D models of common fridge items (fruits, vegetables, packages) in synthetic training to reduce false positives [<Link to="/references?to=ref4">4</Link>].</li>
                    <li><strong>Diversity over realism:</strong> Use domain randomization with varied lighting, materials, and clutter to enhance model transferability to real images [<Link to="/references?to=ref4">4</Link>].</li>
                </ul>
            </div>

            {/* Toward proactive intelligence */}
            <div className="card">
                <h2>5. From Detection to Prediction & Economics</h2>
                <ul>
                    <li><strong>Intelligent prediction:</strong> Move beyond detecting existing frost to proactively predict frosting degree, enabling smarter control strategies [<Link to="/references?to=ref2">2</Link>].</li>
                    <li><strong>Economic analysis:</strong> Study payback period and cost-benefit analysis for large-scale adoption in commercial and household systems [<Link to="/references?to=ref2">2</Link>].</li>
                </ul>
            </div>

            {/* Summary */}
            <div className="card">
                <h2>Summary & Outlook</h2>
                <p>
                    Future research should integrate hardware modifications, prevent environmental degradation, expand and diversify datasets,
                    and adopt advanced models. By combining synthetic data with real-world validation,
                    and by addressing both prediction and economic feasibility,
                    vision-based frost and hygiene detection can transition from promising prototypes to practical, commercial solutions.
                </p>
            </div>
        </>
    );
}
