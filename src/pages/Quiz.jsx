import React, { useState } from "react";
import AudioBar from "../components/AudioBar";
import quizAudio from "../assets/audio/quiz.m4a";

const QUESTIONS = [
    {
        id: "q1",
        prompt: "Why are Regions of Interest (RoIs) chosen at the top of the evaporator?",
        choices: [
            " Because lighting is better at the top",
            " Because refrigerant enters from the top, making it the coldest and earliest place for frost",
            " Because calibration is not required at the top",
            " Because the top has fewer reflections"
        ],
        answerIndex: 1,
        explanation:
            "Refrigerant enters from the top, causing frost to appear earliest and most clearly there."
    },
    {
        id: "q2",
        prompt: "What is a major disadvantage of indirect frost detection (e.g., Temperature-Time)?",
        choices: [
            " It requires a camera",
            " It is often inaccurate, causing unnecessary or belated defrosting",
            " It always costs more than $400",
            " It cannot measure temperature"
        ],
        answerIndex: 1,
        explanation:
            " Indirect methods can be inaccurate, leading to wasted energy and poor system performance."
    },
    {
        id: "q3",
        prompt: "Which method achieved the lowest frost thickness error?",
        choices: [
            " Photoelectric sensor",
            " Capacitive sensor",
            " K-means image processing",
            " Temperature-Time method"
        ],
        answerIndex: 2,
        explanation:
            " K-means segmentation reported an error of 13.69%, better than capacitive and photoelectric sensors."
    },
    {
        id: "q4",
        prompt: "What practical issue reduces long-term reliability of in-fridge cameras?",
        choices: [
            " K-means centroid oscillation",
            " Lens condensation in a cold, humid environment",
            " Lack of Modbus communication",
            " Dataset domain randomization"
        ],
        answerIndex: 1,
        explanation:
            " Lens condensation degrades image quality over time and must be prevented."
    },
    {
        id: "q5",
        prompt: "Which future direction is suggested for real-world adoption?",
        choices: [
            " Ignore dataset diversity",
            " Test methods on different fridge/ASHP models and enlarge datasets",
            " Remove all defrost controls",
            " Rely only on manual cleaning"
        ],
        answerIndex: 1,
        explanation:
            " Future research emphasizes testing across models and expanding datasets for better generalization."
    }
];

export default function Quiz() {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const total = QUESTIONS.length;
    const score = QUESTIONS.reduce(
        (acc, q) => (answers[q.id] === q.answerIndex ? acc + 1 : acc),
        0
    );

    function selectChoice(qid, idx) {
        if (submitted) return;
        setAnswers((prev) => ({ ...prev, [qid]: idx }));
    }

    function handleSubmit() {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function handleReset() {
        setAnswers({});
        setSubmitted(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <h1>Interactive Quiz</h1>
            <p className="lead">
                A short 5-question quiz. All answers can be found in this tutorial.
            </p>
            <AudioBar src={quizAudio} label="Quiz page audio narration" />

            <div className="card">
                <h2>Your Progress</h2>
                <p>
                    Answered: <strong>{Object.keys(answers).length}</strong> / {total}{" "}
                    | Score: {submitted ? <strong>{score}</strong> : "Submit to see"} /{" "}
                    {total}
                </p>
                <div className="cta-row">
                    {!submitted ? (
                        <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                            disabled={Object.keys(answers).length < total}
                        >
                            Submit
                        </button>
                    ) : (
                        <button className="btn btn-primary" onClick={handleReset}>
                            Retake
                        </button>
                    )}
                </div>
            </div>

            {QUESTIONS.map((q, idx) => {
                const selected = answers[q.id];
                const isCorrect = submitted && selected === q.answerIndex;

                return (
                    <div
                        className={`card ${submitted ? (isCorrect ? "success" : "error") : ""}`}
                        key={q.id}
                    >
                        <h3>
                            {idx + 1}. {q.prompt}
                        </h3>
                        <ul className="choices">
                            {q.choices.map((c, ci) => {
                                const chosen = selected === ci;
                                return (
                                    <li
                                        key={ci}
                                        className={`choice ${chosen ? "selected" : ""}`}
                                        onClick={() => selectChoice(q.id, ci)}
                                    >
                                        <span className="radio">{chosen ? "●" : "○"}</span>
                                        <span>{c}</span>
                                    </li>
                                );
                            })}
                        </ul>
                        {submitted && (
                            <div className="explanation">
                                {isCorrect ? (
                                    <p>
                                        <strong>Correct!</strong> {q.explanation}
                                    </p>
                                ) : (
                                    <p>
                                        <strong>Incorrect.</strong> {q.explanation}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
}
