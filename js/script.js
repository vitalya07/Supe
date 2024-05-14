$(document).ready(function() {
    $('.video__slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
      responsive: [
          {
            breakpoint: 1560,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
            },
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            arrows: true,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
          }
        }
      ]
  });

  $(".slogan__consultation").on("click",function() {
    $(".modal__wrapper").fadeIn(1400)
  });
  $(".modal__close").on("click",function() {
    $(".modal__wrapper").fadeOut(1400)
  });

  function valideForms(form){
    $(form).validate({
        rules:{
            name:'required',
            phone:'required',
            email:{
                required: true,
                email: true,
            }
        },
        messages: {
            name:"Пожалуйста, введите имя",
            phone:"Пожалуйста, введите свой телефон",
            email:{
                required: "Пожалуйста, введите email",
                email:"Неправильно введен адрес",
            }
        }
    });
};

valideForms('#consultation-form');
valideForms('#consultation form');
valideForms('#order form');

  $('form').submit(function(e) {
      e.preventDefault();
      if(!$(this).valid()) {
          return;
      }   
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('.modal__box, .modal__wrapper').fadeOut(1000);
          $('.modal__well, .modal__box').fadeIn();
          $('.modal__well, .modal__wrapper').fadeOut(2400);
          $('.modal__well').fadeOut(9400);
          $('form').trigger('reset');
      });
    return false;
  });

  $("#phone").mask("+7(999) 999-9999"); 

    $('.video__slider-play').on('click', function() { $(this).parent().find('#overlay').fadeOut(); });
 
})

window.addEventListener("DOMContentLoaded", function() {
  let videos =document.querySelectorAll(".video__slider-item");
  let pe = document.querySelectorAll(".video__play");

  videos.forEach(function(video) {
      video.addEventListener("click", function() {
          if(video.classList.contains("redy")) {
              return
          }
          video.classList.add("redy");
          let src = video.dataset.src
          video.insertAdjacentHTML('afterbegin', '<iframe width="100%" height="100%" src="' + src + ' " title="Видео №14 Разогрев-Регенерация готового блюда, перед отдачей на линию раздачи." frameborder="0" allow="accelerometer; autoplay = 1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');  
      })
  })
  pe.forEach(function(p) {
      p.addEventListener("click", function(){
          p.style.display = "none";
      });
  });
  
})

