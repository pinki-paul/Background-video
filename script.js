const bgVideo = document.querySelector(".bg-video");
const button = document.querySelector(".btn");
const fontawesome = document.querySelector(".fa-solid");
const preloader = document.querySelector(".preloader");


//if else condition toiri krlm. je jdi button element a pause class thake thle sei pause class k soriye dite and bgVideo k play krte. otherwise pause class add krte hbe.
button.addEventListener("click",()=> {
    if (button.classList.contains("pause")) {
        button.classList.remove("pause");
        bgVideo.play();
        fontawesome.classList.add("fa-pause");// pause er icon k add kra hlo jkhn video pause hbe.
        fontawesome.classList.remove("fa-play");// pause er icon jkhn add hbe tkhn play er icon remove hbe.
    }else{
        button.classList.add("pause");
        bgVideo.pause();
        fontawesome.classList.add("fa-play");// play er icon k add kra hlo jkhn video play hbe.
        fontawesome.classList.remove("fa-pause");// play er icon jkhn add hbe tkhn pause er icon remove hbe.
    }
});

//hourglass preloader k add jkrbo j jkhn page load hye jbe tar age aobdhi ata jno dkha jai pre jno r dkha na jai.

window.addEventListener("load",() => {
    preloader.style.zIndex = "-2";
});