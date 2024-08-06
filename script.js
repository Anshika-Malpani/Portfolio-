var project=document.querySelectorAll(".project")
var img1=document.querySelector(".img1")
var img2=document.querySelector(".img2")
var img3=document.querySelector(".img3")
var img4=document.querySelector(".img4")
var image=document.querySelectorAll(".image")
var projectImage=document.querySelector(".projectImage")

function typeWriterEffect() {

    const span = document.querySelector(".change");

    function typeWriter(textElement, text, speed, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                textElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                setTimeout(function () {
                    textElement.innerHTML = "";
                    if (callback) {
                        callback();
                    }
                }, 1000);
            }
        }
        type();
    }

    function changing() {
        typeWriter(span, 'ANSHIKA', 300, function () {
            setTimeout(function () {
                typeWriter(span, 'A DEVELOPER', 300, changing);
            }, 1000);
        });
    }

    changing();
}
typeWriterEffect();


// project.forEach(function(elem,idx){
//     elem.addEventListener("mouseenter",function(){
//         if(idx==0){
//             img1.style.display="block"
//         }
//         else if(idx==1)
//         {
//             img2.style.display="block"
//         }
//         else if(idx==2)
//         {
//             img3.style.display="block"
//         }
//         else 
//         {
//             img4.style.display="block"
//         }
//     })
//     elem.addEventListener("mouseleave",function(){
//             image.forEach(function(e,i){
//                 e.style.display = "none";
//             })
           
//     })
// })





// function logArrayValues() {
//   let index = 0;

//   function printNextValue() {
//     if (index < project.length) {
//       var dataImage=project[index].getAttribute('data-image');
//       projectImage.src=dataImage
//       project[index].classList.add("text-gradient");
//     setTimeout(printNextValue, 3000); 
//     setTimeout(changeColor,2999); 
//     index++;
//     }
//     function changeColor(){
//         let i=index;
//         i--
//         project[i].classList.remove("text-gradient");
//     }
// }


 
//   printNextValue();
// }
// logArrayValues()
// setInterval(logArrayValues,12500);

let intervalId; // Declare a variable to hold the interval ID

function logArrayValues() {
    project.forEach((elem, index) => {
        // Schedule each project's processing at staggered intervals
        setTimeout(() => {
            const dataImage = elem.getAttribute('data-image');
            projectImage.src = dataImage;
            elem.classList.add("text-gradient");

            setTimeout(() => {
                elem.classList.remove("text-gradient");
            }, 2999);
        }, 3000 * index);
    });
}

logArrayValues();

const totalDuration = project.length * 3000;
intervalId = setInterval(logArrayValues, totalDuration); 


document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        clearInterval(intervalId); // Clear the interval when the tab is not active
    } else {
        intervalId = setInterval(logArrayValues, totalDuration); // Restart the interval when the tab is active
    }
});

function skillsAnimation(){
    gsap.registerPlugin(ScrollTrigger);

        gsap.from("#skills-section", {
            scrollTrigger: {
                trigger: "#skills-section",
                start: "top 80%",
                toggleActions: "play none none reverse",
                
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,

        });
        gsap.fromTo(".skill-card", 
            {opacity: 0,  scale: 0}, // Added scale for smoother entrance
            {
            scrollTrigger: {
                trigger: ".skill-card",
                start: "top 80%",
                // toggleActions: "play none none reverse",
                
                
            },
            opacity: 1,
            scale: 1, // Scale back to normal
            duration: 1, // Added easing for smoothness
            
        });

        
}

function aboutAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about-text", {
        scrollTrigger: {
            trigger: ".about-text",
            start: "top 80%", // Start animation when the top of the section hits 80% of the viewport height
            toggleActions: "play none none reverse",
            // markers:true
        },
        opacity: 0,
        y: 80, // Move up 50 pixels
        duration: 1,
    });

    gsap.from(".about-image", {
        scrollTrigger: {
            trigger: ".about-text",
            start: "top 80%",
            toggleActions: "play none none reverse",
            // markers:true
        },
        opacity: 0,
        scale: 0.8, // Scale down to 80%
        duration: 1,
    });
}


skillsAnimation()
aboutAnimation()