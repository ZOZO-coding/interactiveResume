import {img} from './images.js';

// get the button
const btn = document.querySelector("#generator");

const imgContainer = document.querySelector(".img-container");

// random img generate
function randomPic() {
    const randomNum = Math.floor(Math.random() * img.length);
    return img[randomNum];
}

const randomImgGenerator = () => {
    const newImg = document.createElement("img"); // creates a new image
    newImg.src = randomPic();
    imgContainer.innerHTML = "";
    imgContainer.append(newImg);
}

btn.addEventListener('click', randomImgGenerator);