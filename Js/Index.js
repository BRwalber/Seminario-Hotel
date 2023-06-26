var slideIndex = 0;
var sliderTimer = 0;
var botoes = document.querySelectorAll(".carousel-nav");
var slides = document.querySelectorAll(".mySlides");

showSlides(slideIndex);

  // Botões de controle do carrossel manual
botoes.forEach(function(dot, index){
	dot.addEventListener('click', function(event){
    	// remove a marcação dos botões de navegação
        document.querySelector('.carousel-nav.active').classList.remove('active')
       	slides.forEach(function(slide){
        	slide.classList.add('hidden');
        });
        
        // adiciona a marcação dos botões de navegação
        slides[index].classList.remove('hidden');  
  		botoes[index].classList.add('active');

        // delay adicional ao clicar
        clearTimeout(sliderTimer);
        sliderTimer = setTimeout(function(){
        	showSlides(index);
        }, 2000);
    });
})

  // Apresentação de imagens automatica

function showSlides(newSlideIndex) {
  // Reinicia a ordem de imagens (slideindex) ao clicar 
  slideIndex = isNaN(newSlideIndex) ? slideIndex : newSlideIndex;

  // Esconder todas as imagens deixando apenas a selecionada
  slides.forEach(function(slide){
      slide.classList.add('hidden');
  })

  // Encremento 
 slideIndex++;
 
  // Ao chegar na ultima imagem, retornar para a inicial (1) 
  if (slideIndex > slides.length) {slideIndex = 1}



  // Botões de controle do carrossel automatico

  // Remove classe active dos botões  
  botoes.forEach(function(dot){
    dot.classList.remove('active');
  })
  
  // Apresentação de slide e botões
  slides[slideIndex-1].classList.remove('hidden');  
  botoes[slideIndex-1].className += " active";
  
  // Delay entre as imagens
  sliderTimer = setTimeout(showSlides, 5000);
}

  // Menu fixo (Sticky) 

window.addEventListener('scroll', function(){
  let header = document.querySelector('.container_menu_2');
  header.classList.toggle('sticky', window.scrollY > 80);
})