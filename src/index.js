
import './index.css';

const c = 10;

const NUMBER_OF_POINTS = 10000;
const DELAY_BETWEEN_DRAW = 0; // in ms

const draw = (n) => {

    const a = n * 137.5;
    const r = c * Math.sqrt(n);

    const x = r * Math.cos(a) + window.innerWidth / 2;
    const y = r * Math.sin(a) + window.innerHeight / 2;

    const point = document.createElement("div");
    point.id = n;
    point.classList.add("point");

    point.style.top = y + "px";
    point.style.left = x + "px";

    document.getElementById("root").append(point);

    setTimeout(() => {
        if(n < NUMBER_OF_POINTS){
            draw(n+1);
        }
    }, DELAY_BETWEEN_DRAW);
   
}

window.onload = async () => {
    draw(0);
}