import React, { useEffect, useRef } from "react";

const ClockDisplay = ({ seconds, minutes, hours }) => {
    const canvasRef = useRef(null);

    //arc definition
    const secAngle = seconds * 360/60;

    const minutesSmooth = minutes + seconds / 60;
    const minAngle = minutesSmooth * 360/60;

    const hoursSmooth = hours + minutesSmooth / 60;
    const hourAngle = hoursSmooth * 360/12;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        //animation handler (zabranuje aby se animace zrychlovala po kazdem updatu)
        const timerIdHolder = {timerId: null};

        //animation function
        const render = () => { 
            //animation request
            timerIdHolder.timerId = window.requestAnimationFrame(render);

            //cleare canvas every step
            context.clearRect(0, 0, canvas.width, canvas.height);

            //canvas shape

            //CIFERNIK
            //minuty
            for(let i=0; i < 60; i++){

                const minuteStep = i *  360 / 60

                context.save();
                context.beginPath();
                context.translate(50, 50);
                context.rotate(minuteStep * Math.PI / 180);
                context.translate(0, -42);
                context.fillStyle = "white";
                context.fillRect(-0.3, 0, 0.6, 5);
                context.fill();
                context.closePath()
                context.restore();
            } 


            //hodiny
            for(let i=0; i < 12; i++){

                const hourStep = i *  360 / 12
                context.save();
                context.beginPath();
                context.translate(50, 50);
                context.rotate(hourStep * Math.PI / 180);
                context.translate(0, -42);
                context.fillStyle = "white";
                context.fillRect(-2, 0, 4, 10);
                context.fill();
                context.closePath()
                context.restore();
            }

            //KRUH
            context.save();
            context.beginPath();
            context.translate(50, 50);
            context.strokeStyle = "white";
            context.lineWidth = 1.5;
            context.arc(0, 0, 45, 0, 2 * Math.PI);
            context.stroke();
            context.closePath();
            context.restore();

            //SECUNDY
            context.save();
            context.beginPath();
            context.translate(50, 50);
            context.rotate(secAngle * Math.PI / 180);
            context.fillStyle = "white";
            context.fillRect(-0.5, 0, 1, -40);
            context.fill();
            context.closePath()
            context.restore();

            //MINUTY
            context.save();
            context.beginPath();
            context.translate(50, 50);
            context.rotate(minAngle * Math.PI / 180);
            context.fillStyle = "white";
            context.fillRect(-1.25, 0, 2.5, -35);
            context.fill();
            context.closePath()
            context.restore();

            //HODINY
            context.save();
            context.beginPath();
            context.translate(50, 50);
            context.rotate(hourAngle * Math.PI / 180);
            context.fillStyle = "white";
            context.fillRect(-2, 0, 4, -27);
            context.fill();
            context.closePath()
            context.restore();

            //STRED
            context.save();
            context.beginPath();
            context.translate(50, 50);
            context.fillStyle = "white";
            context.arc(0, 0, 5, 0, 2 * Math.PI);
            context.fill();
            context.stroke();
            context.closePath()
            context.restore();
            //STRED2
            context.save();
            context.beginPath();
            context.translate(50, 50);
            context.fillStyle = "black";
            context.arc(0, 0, 2.5, 0, 2 * Math.PI);
            context.fill();
            context.closePath()
            context.restore();

        };
        render();

        //animation cancel
        return () => cancelAnimationFrame(timerIdHolder.timerId);
    },[seconds]);

    return (

        <div>
            <canvas id="canvas" ref={canvasRef} height="100px" width="100px"/>
        </div>
    )
}

export default ClockDisplay;