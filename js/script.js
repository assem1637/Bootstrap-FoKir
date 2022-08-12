


var typed = new Typed('.typed', {
    strings: ["Front-End Developer", "Back-End Developer" , "Full Stack WEB Developer"],
    typeSpeed: 35,
    backSpeed: 10,
    loop:true,
  });
  



// navbar
  
  
var nav = document.querySelector("nav");
window.onscroll = function() {

  if(scrollY > 80) {
    nav.style.cssText = "background: #333 !important";

  } else {  
    nav.style.cssText = "background: transparent !important";
  }

}





// btn scroll To Top

let arrow = document.querySelector(".arrow");

window.addEventListener("scroll" , function() {

  if(window.scrollY > 60) {
      arrow.style.cssText = "right: 3%";
  } else {
      arrow.style.cssText = "right: -100%";
  }


})

arrow.addEventListener("click" , function() {

    window.scrollTo(0,0)

})






// counter

let sectionCounter = document.querySelector(".Counter");
let counters = document.querySelectorAll(".number");
let isStarted = false;

function startCounting(el){

  let goal = el.dataset.count;
  let counting = setInterval( ()=> {

    el.textContent++;
    if(el.textContent == goal) {
      clearInterval(counting)
    }

  }, 2000 / goal)

}



window.addEventListener("scroll" , function(){


    if(window.scrollY >= (sectionCounter.offsetTop - 300)) {

        if(!isStarted) {
           counters.forEach( (num)=> {startCounting(num)} );
        }
        isStarted = true;

    }


});







// Change Color Name Section At Navbar

let item = document.querySelectorAll("nav ul li > a");

for(let x=0 ; x<item.length ; x++) {

  let attrHref =  item[x].getAttribute("href");
  let sections = document.querySelector(attrHref); 
  
  


  let Siblings = item[x].parentElement.parentElement.children;

  

  window.addEventListener("scroll" , function(){

    if(window.scrollY >= sections.offsetTop - 100) {

      for(let i=0 ; i<Siblings.length ; i++) {

        let childrenHref = Siblings[i].children[0];
        childrenHref.style.cssText = "color: #FFF !important";

      }
      item[x].style.cssText = "color: #FF305B !important";

    }

  })


};





// Spinner

let Spinner = document.querySelector(".loading");
let body = document.querySelector("body");

window.addEventListener("load" , function(){

  this.setTimeout(function(){

    Spinner.style.cssText = "opacity: 0 !important";
    body.style.cssText = "opacity: 1 !important";
    body.style.cssText = "overflow: visible !important";

  } , 2000);


  this.setTimeout(function(){

    Spinner.style.cssText = "display: none !important";

  } , 3000)

});
