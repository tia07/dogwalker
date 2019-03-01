



// SLIDE CONTENT IN ON SCROLL
function slidein(){
	const pic = document.getElementById('aboutme-picture');
	const meDescription = document.getElementById('aboutme-description');

	if(window.scrollY > 470){
		meDescription.style.transform = "translateX(0%)"; 
 		meDescription.style.opacity ='1';
 		pic.style.transform = "translateX(0%)"; 
 		pic.style.opacity ='1';

 	}
}
window.addEventListener('scroll',slidein);

// GHOSTLY REVEAL ON SCROLL.
function reveal(){
	const service = document.querySelectorAll('.services');

	if (window.scrollY>1150){
		for(i=0;i<service.length;i++){
			service[i].style.opacity = '1';
		}
	}
}

window.addEventListener('scroll',reveal); 

//window.onscroll = function() {
  //slidein();
  //reveal();}
//TESTIMONIALS

let cards = document.querySelectorAll(".card");
let wrap = document.getElementById('client-testimonialWrap');
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let index = 1;

//NEXT BUTTON
next.addEventListener('click', function(){
	
	index+=1;
	if ( index >= cards.length){
		index = 0;
	}
	
 wrap.appendChild(cards[index]);


});
// PREVOUVSE BUTTON
prev.addEventListener('click',function(){
	index-=1;
	if ( index < 0){
		index = cards.length - 1;
	}

 wrap.appendChild(cards[index]);

});

// GOOGLE API MAP
function initiateMap(){
	const location = {lat:48.856613, lng:2.352222};
	const map = new google.maps.Map(document.getElementById('map'),{
		zoom:4,
		center:location
	});
}



// BURGER MENUE
 const navSlide= function(){
 	const burger = document.querySelector('#burger-icon');
 	const navBar = document.querySelector('.navigation');
 	const body = document.body.style;

 	burger.addEventListener('click',function(){

 		navBar.classList.toggle('nav-active');
 			
 		
 		if(body.overflow == 'hidden'){


 			body.overflowY = 'auto';
 			body.overflowX = 'hidden';




 		}else{
 			
 			body.overflowY = 'hidden';
 			body.overflowX = 'hidden';

 		}
 		

 	});
 }
 navSlide();
