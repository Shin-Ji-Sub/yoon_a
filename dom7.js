const imgContainer = $(".img-container");
const bgImg = document.querySelector(".bg-img");
const stopBtn = document.querySelector(".stop-btn");
const playBtn = document.querySelector(".play-btn");


// make img tag
function makeImg (idx) {
    const img = `
        <img class="img" src="./img/${idx}.jpg">
    `

    imgContainer.append(img);
}

for (let i = 1; i < 11; i++) {
    makeImg(i);
}



const imgTag = document.querySelectorAll(".img");
let currentImg = imgTag[0];
let stack = 1;

currentImg.style.border = "3px solid purple";

imgTag.forEach((v, i) => {
    v.addEventListener("click", (e) => {
        let strArr = String(e.target.src);
        const jpgAddr = strArr.slice(31);
    
        stack = strArr.slice(35, 37);
        console.log(stack.substr(0, 1));
        if (stack[1] == '.') {
            stack = Number(stack.substr(0, 1));
        } else {
            stack = Number(stack);
        }

        if (currentImg != null) {
            currentImg.style.border = "none";
            currentImg = e.target;
            currentImg.style.border = "3px solid purple";
        } else {
            currentImg = e.target;
            currentImg.style.border = "3px solid purple";
        }
        bgImg.src = `./${jpgAddr}`;
    });
});

const preBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

preBtn.addEventListener("click", () => {
    if (stack - 1 < 1) {
        stack = 10;
        bgImg.src = `./img/10.jpg`;

        currentImg.style.border = "none";
        currentImg = imgTag[imgTag.length - 1];
        currentImg.style.border = "3px solid purple";
    } else {
        stack--;
        bgImg.src = `./img/${stack}.jpg`;
        
        currentImg.style.border = "none";
        currentImg = imgTag[stack - 1];
        currentImg.style.border = "3px solid purple";
    }
});

nextBtn.addEventListener("click", () => {
    if (stack + 1 > 10) {
        stack = 1;
        bgImg.src = `./img/1.jpg`;
        currentImg.style.border = "none";
        currentImg = imgTag[0];
        currentImg.style.border = "3px solid purple";
    } else {
        stack++;
        bgImg.src = `./img/${stack}.jpg`;
        currentImg.style.border = "none";
        currentImg = imgTag[stack - 1];
        currentImg.style.border = "3px solid purple";
    }
});

document.addEventListener("keydown", (e) => {
    if(e.keyCode == 37) {
        if (stack - 1 < 1) {
            stack = 10;
            bgImg.src = `./img/10.jpg`;
    
            currentImg.style.border = "none";
            currentImg = imgTag[imgTag.length - 1];
            currentImg.style.border = "3px solid purple";
        } else {
            stack--;
            bgImg.src = `./img/${stack}.jpg`;
            
            currentImg.style.border = "none";
            currentImg = imgTag[stack - 1];
            currentImg.style.border = "3px solid purple";
        }
    } else if (e.keyCode == 39) {
        if (stack + 1 > 10) {
            stack = 1;
            bgImg.src = `./img/1.jpg`;
            currentImg.style.border = "none";
            currentImg = imgTag[0];
            currentImg.style.border = "3px solid purple";
        } else {
            stack++;
            bgImg.src = `./img/${stack}.jpg`;
            currentImg.style.border = "none";
            currentImg = imgTag[stack - 1];
            currentImg.style.border = "3px solid purple";
        }
    }
});


// 자동 슬라이드
let isPlay = true;
let interval;

function autoSlide (isTrue) {
    if (isTrue) {
        interval = setInterval(() => {
            if (stack + 1 > 10) {
                stack = 1;
                bgImg.src = `./img/1.jpg`;
                currentImg.style.border = "none";
                currentImg = imgTag[0];
                currentImg.style.border = "3px solid purple";
            } else {
                stack++;
                bgImg.src = `./img/${stack}.jpg`;
                currentImg.style.border = "none";
                currentImg = imgTag[stack - 1];
                currentImg.style.border = "3px solid purple";
            }
        }, 1000);
    } else {
        clearInterval(interval);
    }
}

stopBtn.addEventListener("click", () => {
    autoSlide(false);
});

playBtn.addEventListener("click", () => {
    autoSlide(true);
});


