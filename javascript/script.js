


// 1st Approach 



// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a')
// // console.log(navMenuAnchorTags)
// for(var i=0;i<navMenuAnchorTags.length;i++){
//     navMenuAnchorTags[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var targetSectonID = this.textContent.trim().toLowerCase();
//         // console.log(targetSectonID);
//         var targetSection = document.getElementById(targetSectonID);
//         // console.log(targetSection)

//         // console.log(targetSectionCoordinates)
//         var interval = setInterval(() => {
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top <= 0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0,100);
//         }, 50);
//     });
// };




// 2nd Approach 


var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
// console.log(navMenuAnchorTags)
for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectonID = this.textContent.trim().toLowerCase();
        // console.log(targetSectonID);
        var targetSection = document.getElementById(targetSectonID);
        // console.log(targetSection)

        // console.log(targetSectionCoordinates)


        // interval = setInterval(scrollVertically, 50,targetSection);

        interval = setInterval(function () {
            scrollVertically(targetSection)
        }, 1);



    });
};


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 20);
}








// ANIMATION OVER THE SKILLS SECTION
// Handle scroll event on window
// Chack that skills sections containers is visible or not
// ensure that initial width of colored skills divs is zero -> initialised/reset to 0 width value;
// Start the animation on every skill -> increase skill width from 0 to skill level at regular intervals
// Store skill level -> HTML with the data attribute

var progressBars = document.querySelectorAll('.skill-progress > div');
// console.log(progressBars);
var skillsContainer = document.getElementById('skill-display');
// console.log(skillsContainer.innerHTML);

window.addEventListener('scroll',checkScroll);
var animationDone = false;
// console.log(animationDone,!animationDone);

function initialisedBars(){
    for(let bar of progressBars){
        bar.style.width = 0 +'%';
    }
}
// console.log(progressBars)

initialisedBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        // console.log(targetWidth);
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth +'%';
        },1);
    }
}


function checkScroll(){
    // You have to check whether the skill container is visible or not
    var coordinates = skillsContainer.getBoundingClientRect();
    console.log(coordinates.top)
    console.log(window.innerHeight)
    if(!animationDone && coordinates.top <= window.innerHeight){ /* window.innerHeight tells about height of screen or viewport */
        animationDone = true;
        // console.log('skill section visible');
        fillBars();

    }else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialisedBars();
    }
}