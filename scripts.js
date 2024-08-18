function filterElements(category){
    const elements = document.querySelectorAll(".box");

    elements.forEach((element) => {
        element.classList.remove("show");
        if(category === "Todos" || element.classList.contains(category)) {
            element.classList.add("show");
        }  
    });
};
    

$(document).ready(function(){
  $('.single-item').slick();
});

$('.single-marcas').slick({
centerMode: true,
centerPadding: '120px',
slidesToShow: 2,
responsive: [
{
  breakpoint: 768,
  settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
  }
},
{
  breakpoint: 480,
  settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
  }
}
]
});