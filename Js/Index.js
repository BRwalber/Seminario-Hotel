var slideIndex = 0;
var sliderTimer = 0;
var dots = document.querySelectorAll(".carousel-nav");
var slides = document.querySelectorAll(".mySlides");

showSlides(slideIndex);

  // Botões de controle do carrossel
dots.forEach(function(dot, index){
	dot.addEventListener('click', function(event){
    	// remove a marcação dos botões de navegação
        document.querySelector('.carousel-nav.active').classList.remove('active')
       	slides.forEach(function(slide){
        	slide.classList.add('hidden');
        });
        
        // adiciona a marcação dos botões de navegação
        slides[index].classList.remove('hidden');  
  		dots[index].classList.add('active');

        // delay
        clearTimeout(sliderTimer);
        sliderTimer = setTimeout(function(){
        	showSlides(index);
        }, 2000);
    });
})

  // Apresentação de imagens 
function showSlides(newSlideIndex) {
  // optionally override global slideIndex 
  slideIndex = isNaN(newSlideIndex) ? slideIndex: newSlideIndex;

  // Esconder todas as imagens
  slides.forEach(function(slide){
      slide.classList.add('hidden');
  })
 
 slideIndex++;
 
  //
  if (slideIndex > slides.length) {slideIndex = 1}
  
  // disable all dots 
  dots.forEach(function(dot){
    dot.classList.remove('active');
  })
  
  // show slide, enable dot
  slides[slideIndex-1].classList.remove('hidden');  
  dots[slideIndex-1].className += " active";
  
  // Delay entre as imagens
  sliderTimer = setTimeout(showSlides, 5000);
}

  // Sticky 

window.addEventListener('scroll', function(){
  let header = document.querySelector('.container_menu_2');
  header.classList.toggle('sticky', window.scrollY > 80);
})