import React from "react";
import AudioBar from "../components/AudioBar";
import yoloImg from "../assets/img/yolo-detection.jpg";
import kmean from "../assets/img/k-mean.jpg"
import visionAudio from "../assets/audio/vision.mp3";

export default function Vision(){
    return (
        <>
            <h1>Vision-Based Approaches</h1>
            <p className="lead">
                This page presents two representative computer vision methods with detailed implementation procedures:
                (1) frost thickness estimation via K-means segmentation and regression, and
                (2) mildew detection in rice grains using YOLO-v5.
                Both illustrate how vision-based pipelines replace conventional sensors and can be transferred to fridge hygiene monitoring.
            </p>
            <AudioBar src={visionAudio} label="Vision page audio narration" />

            {/* Frost thickness estimation */}
            <div className="card">
                <h2>Frost Thickness Estimation via K-means Segmentation</h2>
                <p>
                    <strong>Goal:</strong> Estimate frost thickness in millimeters without direct sensors by
                    (i) segmenting each frame into foreground (pipes, fins, frost) vs. background using K-means (K=2),
                    (ii) quantifying pixel-level growth within Regions of Interest (RoIs) over time, and
                    (iii) mapping the normalized pixel change to physical thickness via a calibrated regression model
                    [<a href="#/references#ref1">1</a>].
                </p>

                <h3>1) Image Acquisition and Preprocessing</h3>
                <ul>
                    <li>
                        <strong>Image acquisition:</strong> Install a standard RGB camera inside a domestic refrigerator to continuously capture the
                        evaporator during frost formation. Keep the built-in LED on so illumination remains constant and stable across frames.
                    </li>
                    <li>
                        <strong>Selection of analysis area (RoI):</strong> Choose <em>three equally sized RoIs</em> on the <em>top</em> section of the evaporator pipes.
                        Because the refrigerant enters from the top, this region is the coldest and exhibits the earliest, most pronounced frosting.
                        Monitoring these RoIs yields early detection and represents growth trends across fins and tubes for timely defrosting.
                    </li>
                </ul>

                <h3>2) Image Segmentation (Core Step)</h3>
                <ul>
                    <li>
                        <strong>Objective:</strong> Split each frame into two classes—<em>foreground</em> (pipes, fins, frost) and <em>background</em> (interior walls).
                    </li>
                    <li>
                        <strong>Method:</strong> Apply the unsupervised <em>K-means</em> clustering algorithm on pixel color features with the number of clusters fixed to <code>K = 2</code>.
                    </li>
                    <li>
                        <strong>Using K-mean Algorithm Procedure:</strong>
                        <ol>
                            <li>Flatten the three-channel RGB pixel values into a 1D sequence.</li>
                            <li>Randomly initialize two cluster centroids (<em>c1</em>, <em>c2</em>).</li>
                            <li>Assign each pixel to the nearest centroid based on color-space distance.</li>
                            <li>Update each centroid as the mean color vector of the pixels assigned to it.</li>
                            <li>Iterate steps 3–4 until the centroids stabilize (converge).</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Binary mask output:</strong> After convergence, produce a binary mask in which background pixels are labeled <code>0</code>
                        and foreground (pipes + fins + frost) are labeled <code>1</code>.
                    </li>
                </ul>
                <figure>
                    <img src={kmean} alt="k-mean algorithm"/>
                    <figcaption>
                        k-mean algorithm. <em>Image source:</em>
                        <a href="https://blog.csdn.net/zhihua_oba/article/details/73832614" target="_blank" rel="noopener noreferrer">RealPars</a>
                    </figcaption>
                </figure>

                <h3>3) Frost Thickness Quantification (Pixel-Level)</h3>
                <ul>
                    <li>
                        <strong>Baseline reference:</strong> From the initial <em>frost-free</em> frame, take the segmented RoIs as the baseline
                        (<code>RoI_ini</code>) to measure incremental growth thereafter.
                    </li>
                    <li>
                        <strong>Per-frame pixel difference:</strong>
                        <ol>
                            <li>For each subsequent frame, perform the same K-means segmentation and crop the corresponding three RoIs (<code>RoI_nxt</code>).</li>
                            <li>Compute the pixel-wise difference between <code>RoI_nxt</code> and <code>RoI_ini</code>. This isolates <em>newly added frost</em>, eliminating interference from the static pipe/fin pixels.</li>
                            <li>Normalize each RoI’s difference by its area to obtain values in <code>[0, 1]</code>, denoted <code>Fp1</code>, <code>Fp2</code>, <code>Fp3</code>.</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Aggregation:</strong> Average the three normalized values to yield a frame-level frost proxy
                        <code> F_thickness = (Fp1 + Fp2 + Fp3) / 3</code>.
                    </li>
                </ul>

                <h3>4) Regression Model and Physical Thickness Estimation</h3>
                <ul>
                    <li>
                        <strong>Objective:</strong> Establish a mapping between the pixel-based proxy (<code>ΔFp</code>) and the actual frost thickness (mm).
                    </li>
                    <li>
                        <strong>Calibration (least-squares):</strong>
                        <ol>
                            <li>Manually measure true frost thickness on a subset of frames using a pixel-count technique (PCT) to obtain ground truth.</li>
                            <li>Fit a linear regression that maps <code>ΔFp</code> to thickness (mm).</li>
                            <li>
                                A representative correlation reported in the literature is
                                <em> tip = 8.83 × ΔFp − 0.42</em>, where <em>tip</em> is the estimated thickness in millimeters.
                            </li>
                        </ol>
                    </li>
                    <li>
                        <strong>Validation & application:</strong> For new, unseen frames, repeat the segmentation and quantification to obtain <code>ΔFp</code>,
                        then plug it into the regression to estimate frost thickness in millimeters—no direct physical sensor is required.
                    </li>
                </ul>

                <p className="lead" style={{ marginTop: 8 }}>
                    <strong>Summary:</strong> K-means segmentation provides accurate foreground/background separation; the normalized increase of foreground pixels inside
                    carefully chosen RoIs tracks frost growth over time. A simple data-driven regression then converts this pixel-level change into an actual thickness estimate (mm),
                    enabling reliable, sensor-free defrost control.
                </p>
            </div>


            {/* Rice mildew detection */}
            <div className="card">
                <h2>Mildew Detection in Rice Grains with YOLO-v5</h2>
                <p>
                    <strong>Core idea:</strong> Build a labeled dataset of rice grains with different mildew levels,
                    then train YOLO-v5s to detect mildew spots and quantify severity. This Food Science &amp; Nutrition study demonstrates how deep learning pipelines
                    enable rapid, non-destructive contamination detection, transferable to fridge hygiene monitoring [<a href="#/references#ref5">5</a>].
                </p>

                <h3>Implementation Steps</h3>
                <h4>1) Data Acquisition & Dataset Construction</h4>
                <ul>
                    <li><strong>Sample preparation:</strong> Rice inoculated with spores (Aspergillus, Fusarium) and incubated at 28°C, 90% RH to produce varying mildew levels.</li>
                    <li><strong>Imaging:</strong> High-resolution (2560×1876 px) images captured with micro-computer vision (MCV: microscope lens + industrial camera). Nine-point sampling per Petri dish ensured representative coverage.</li>
                </ul>

                <h4>2) Image Labeling</h4>
                <ul>
                    <li>Manual annotation of mildew regions using LabelImg.</li>
                    <li>Sporangia (distinctive optical structures) chosen as the labeling target for consistency.</li>
                </ul>

                <h4>3) Model Construction & Training</h4>
                <ul>
                    <li><strong>Model:</strong> YOLO-v5s (lightweight, fast).</li>
                    <li><strong>Training:</strong> Train/test split ≈ 60/40. Applied Mosaic augmentation and rotations for robustness.</li>
                    <li><strong>Performance:</strong> Precision ≈ 82.1%, Recall ≈ 86.5% on validation set.</li>
                </ul>

                <h4>4) Quantification & Thresholding</h4>
                <ul>
                    <li><strong>Mildew Area Index (MAI):</strong> Detected mildew area ÷ total area.</li>
                    <li><strong>Regression with microbiology:</strong> MAI correlated linearly with log(TVC, colony counts).</li>
                    <li><strong>Threshold:</strong> MAI = 0.001 separated “no visible mildew” (TVC &lt; 10⁵ CFU/g) from “light mildew” (10⁵–10⁶ CFU/g). Achieved 100% precision, 95.3% recall for light-mildew detection.</li>
                </ul>

                <h4>5) Deployment & Applications</h4>
                <ul>
                    <li>Deploy trained YOLO-v5 model in real-time inspection systems.</li>
                    <li>Outputs: bounding boxes + mildew grade + confidence scores.</li>
                    <li>Use cases: auto-sorting, quality grading, or alarms in grain storage/trading. Transferable to stains/mold on fridge surfaces.</li>
                </ul>

                <p className="lead" style={{marginTop:8}}>
                    <strong>Strengths:</strong> High accuracy for subtle mildew; demonstrates synergy of high-resolution imaging and YOLO.{" "}
                    <strong>Limitations:</strong> Requires dataset construction and careful labeling; microscope-level imaging may not directly apply to fridge scenes without adaptation.
                </p>

                <figure>
                    <img src={yoloImg} alt="YOLO mildew detection illustration"/>
                    <figcaption>
                        YOLO-v5 applied to mildew detection and quantification. <em>Image source:</em>{" "}
                        <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/fsn3.3798" target="_blank" rel="noopener noreferrer">
                            Wiley Online Library
                        </a>
                    </figcaption>
                </figure>
            </div>

            {/* Dataset construction */}
            <div className="card">
                <h2>Dataset Construction & Synthetic Data</h2>
                <p>
                    <strong>Challenge:</strong> Public datasets for fridge hygiene (frost, stains, mold) are extremely limited. Manual annotation is expensive and slow.{" "}
                    <strong>Solution:</strong> Generate synthetic images with 3D modeling (e.g., Blender) and apply domain randomization (lighting, textures, occlusion).
                    Detectors trained largely on synthetic data can transfer to real-world with modest fine-tuning. Adding just a few hundred real images significantly improves mAP [<a href="#/references#ref4">4</a>].
                </p>
                <p><em>Takeaway:</em> Diversity matters more than photorealism. Start with synthetic → fine-tune on a curated real set for the target fridge environment.</p>
            </div>
        </>
    );
}
