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

function logArrayValues() {
    project.forEach((elem, index) => {
      // Schedule each project's processing at staggered intervals
      setTimeout(() => {
        const dataImage = elem.getAttribute('data-image');
        const image = elem.getAttribute('image');
        projectImage.src = dataImage;
        projectImage.poster=image
        elem.classList.add("text-gradient");
  
        
        setTimeout(() => {
          elem.classList.remove("text-gradient");
        }, 3999); 
      }, 4000 * index);
    });
  }
  
  
  logArrayValues();
  

  const totalDuration = project.length * 4000;
  setInterval(logArrayValues, totalDuration);
