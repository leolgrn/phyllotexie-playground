
import './index.css';

let c = 10;

const NUMBER_OF_POINTS = 10000;
const DELAY_BETWEEN_DRAW = 0; // in ms

const draw = (n) => {

    const a = n * 68.75 * Math.PI/180;
    const r = c * Math.sqrt(n);

    const x = r * Math.cos(a) + window.innerWidth / 2;
    const y = r * Math.sin(a) + window.innerHeight / 2;

    const point = document.createElement("div");
    point.id = n;
    point.classList.add("point");

    point.style.top = y + "px";
    point.style.left = x + "px";

    point.style.background = `rgba(${n % 255}, 255, ${n % 100}, 1)`

    document.getElementById("root").append(point);


    if(n < NUMBER_OF_POINTS){
        requestAnimationFrame(() => {
                draw(n+1);
        });
    }

}

window.onload = async () => {
    draw(0);
}