const abouttitle = document.getElementById("headinga");
const abouttitle2 = document.getElementById("heading-about1")
const description = document.getElementById("description");
const descriptionsecond = document.getElementById("description1");
const rectangle = document.getElementById("rectangle");
const rectangle2 = document.getElementById("rectangle1");
const about = document.getElementById("about");
const cards = document.querySelectorAll(".card");
const videos = document.querySelectorAll(".card-video video");
const events = document.getElementById("events");
const eventtitle = document.getElementById("heading-events");
const carddes = document.getElementById("updated");
const mem = document.getElementById("opt");
const alu = document.getElementById("opt1");
const memcontainer = document.getElementById("memcontainer");
const alucontainer = document.getElementById("alucontainer");
const hamburguer = document.getElementById("burger-menu")
const navMenu = document.querySelector(".list-nav-bar")


hamburguer.addEventListener("click", ()=>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})
const screenWidth = window.innerWidth;

let heightMax = '22rem'; // Default height value
let widthmax = '35rem'; // Default height value

// Check if screen resolution is over 1900
if (screenWidth > 1900) {
    heightMax = '36rem'; // Set height to 70rem
    widthmax = "55rem"
}

if (screenWidth > 1200) {
    
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: about,
    start: "top 10%", 
    onEnter: () => {

        setTimeout(() => {
            fadeInc(abouttitle);
        fadeInc(description);
        fadeInc(abouttitle2);
        fadeInc(descriptionsecond);
    }, 200)
        
    },
    once: false 
});

ScrollTrigger.create({
    trigger: events,
    start: "top 70%", 
    onEnter: () => {
        
        setTimeout(() => {
            fadeIne(eventtitle);
        fadeInc(cards);
    }, 100)
        
    },
    once: false 
});
}

// Animation properties for rectangle
const animationProperties = {
    targets: rectangle,
    width: ['5rem', widthmax],
    height: ['1rem', heightMax], // Use dynamic height
    easing: 'easeInOutQuad',
    duration: 2000,
    autoplay: true,
    loop: false
};

// Animation properties for rectangle2
const animationProperties1 = {
    targets: rectangle2,
    width: ['5rem', widthmax],
    height: ['1rem', heightMax], // Use dynamic height
    easing: 'easeInOutQuad',
    duration: 2000,
    autoplay: true,
    loop: false
};
function fadeIn(element) {
    const timeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000,
    });

    timeline.add({
        targets: element,
        opacity: [0, 1],
        translateY: [100, 0],
    });

    timeline.play();
}

function fadeIn2(element) {
    const timeline = anime.timeline({
        easing: "easeOutExpo",
        duration: 2000,
    });
    timeline.add({
        targets: element,
        opacity: [0, 1],
        translateY:["23rem", "1.7rem"],
    });
}

function fadeIn3(element) {
    const timeline = anime.timeline({
        easing: "easeOutExpo",
        duration:4000,
    });
    timeline.add({
        targets: element,
        opacity: [0, 1],
        translateX:["-4rem", "1rem"],
    });
    timeline.play(); // Ensure the timeline is played
}
function fadeIne(element) {
    const timeline = anime.timeline({
        easing: "easeOutExpo",
        duration:6000,
    });
    timeline.add({
        targets: element,
        opacity: [0, 1],
        translateX:["-28rem", "0rem"],
    });
    timeline.play(); // Ensure the timeline is played
}

function fadeIn4(element) {
    const timeline = anime.timeline({
        easing: "easeOutExpo",
        duration:4000,
    });
    timeline.add({
        targets: element,
        opacity: [0, 1],
        translateX:["4rem", "6rem"],
    });
    timeline.play(); // Ensure the timeline is played
}
function fadeInc(element) {
    const timeline = anime.timeline({
        easing: "easeOutExpo",
        duration:6000,
    });
    timeline.add({
        targets: element,
        opacity: [0, 1],
        translateX:["-12rem", "0rem"],
    });
    timeline.play(); // Ensure the timeline is played
}

function fadeIn5(element) {
    const timeline = anime.timeline({
        easing: "easeOutExpo",
        duration:4000,
    });
    timeline.add({
        targets: element,
        opacity: [0, 1],
        translateY:["5rem", "5rem"],
        translateX: ["1rem", "6rem"]
    });
    timeline.play(); // Ensure the timeline is played
}




// Attach event listeners to each card
cards.forEach((card, index) => {
    card.addEventListener("mouseenter", function() {
        videos[index].play(); // Play the video when mouse enters
    });

    card.addEventListener("mouseleave", function() {
        videos[index].pause(); // Pause the video when mouse leaves
        videos[index].currentTime = 0; // Reset video to beginning
    });
});


window.addEventListener("blur", function() {
    videos.forEach((video) => {
        video.reset();
    });
});

// Play the video again when the window regains focus
window.addEventListener("focus", function() {
    const activeIndex = [...cards].findIndex(card => card.matches(":hover"));
    if (activeIndex !== -1) {
        videos[activeIndex].play();
    }
});


window.addEventListener("load", function() {
    
    const loaderVideo = document.getElementById("loader-video");
    const content = document.getElementById("fullpage");
    

    
    content.style.display = "none";
    
    // Listen for the ended event on the loader video
    loaderVideo.addEventListener("ended", function() {
        // Hide the loader video
        loaderVideo.style.display = "none";
        // Display the website content
        content.style.display = "block";
        loaderVideo.style.zIndex = '-10'
    });
});


function showPopup(event) {
    document.getElementById(`popup_${event}`).style.display = "block";
}

function closePopup(event) {
    document.getElementById(`popup_${event}`).style.display = "none";
}


