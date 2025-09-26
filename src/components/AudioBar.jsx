import React from "react";

export default function AudioBar({ src, label="Audio guide" }) {
    return (
        <div>
            <audio className="audio" controls src={src}>
                Your browser does not support audio.
            </audio>
            <div style={{fontSize:14, color:"#aab3d6"}}>{label}</div>
        </div>
    );
}
