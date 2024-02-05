

  var swiper = new Swiper(".bg-silider", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
  
  var swiper = new Swiper(".our-team-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
        grid: {
          rows: 2,
          fill: "row",
        },
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: "row",
        },
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
      
  });
  var swiper = new Swiper(".our-blog-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
       
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".bg-slider", {
    breakpoints: {
      576: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: "row",
        },
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: "row",
        },
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        grid: {
          rows: 1,
          fill: "row",
        },
        spaceBetween: 30,
      },
    },
  });
  
  var swiper = new Swiper(".post-sample-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
  
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  


  $(document).ready(function () {
  $('.tab-btn').click(function () {
    var btn = $(this).attr('data-target');
      $('.tab-btn').removeClass('active')
      $(this).addClass('active')
      $('.bio-area').css('display','none')
      $('#tab-select-' + btn).css('display','block');
  })
})
