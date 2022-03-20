$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:7
        }
    }
})

function redirecionar() {
    window.open("https://pt.wikipedia.org/wiki/The_Boys_(s%C3%A9rie_de_televis%C3%A3o)")
}

function assistir() {
    window.open("https://www.youtube.com/watch?v=q5l-2R7E_48")
}