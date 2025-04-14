import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function NotFound() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        let columns;
        let drops;
        const fontSize = 16;
        const characters = "01";

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            columns = Math.ceil(canvas.width / fontSize);
            drops = Array(columns).fill(1);
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const drawMatrix = () => {
            context.fillStyle = "rgba(0, 0, 0, 0.1)";
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = "#00ff00";
            context.font = `${fontSize}px monospace`;

            drops.forEach((y, index) => {
                const text = characters[Math.floor(Math.random() * characters.length)];
                const x = index * fontSize;

                context.fillText(text, x, y * fontSize);

                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[index] = 0;
                }
                drops[index]++;
            });
        };

        const intervalId = setInterval(drawMatrix, 50);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <div style={{ position: "relative",  boxShadow: "inset 0 10px 80px rgba(0, 255, 0, 0.5)", height: "100vh", overflow: "hidden"   }}>
            <canvas 
                ref={canvasRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: -1,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#00ff00",
                    fontFamily: "monospace",
                }}
            >
                <h1 style={{ fontSize: "8rem" }}>404</h1>
                <p style={{ fontSize: "2rem" }}>You seem to be lost in the matrix.</p>
                <Link to='/' style={{
                    color: "#00ff00", textDecoration: "none", border: "2px solid #00ff00", padding: "1rem 2rem", borderRadius: "5px", fontSize: "1.5rem",
                    display: "inline-block",
                    marginTop: "1rem",
                }}> Return Home </Link>
            </div>
        </div>
    );
};

export default NotFound