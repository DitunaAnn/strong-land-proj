$(document).ready(function(){
    $(".modalbox").fancybox();
});

$(document).ready(function() {
$("#price__show-less").hide();
  var grid = $('#price-list');
    var modalCaptionImgElement = $('#price .price-block__hidden__image img');
    var modalCaptionElement    = $('#price .price-block__hidden-title');

    $(document).on('click', '.price-block-grid__col', function() {
        var $this                  = $(this);
        var imgElement             = $this.find('img');
        var captionBlockElement    = $this.find('.price-block-grid__text');
        var img;
        var caption;

        if(imgElement.length && captionBlockElement.length && modalCaptionImgElement.length && modalCaptionElement.length) {
            img     = imgElement.prop('src');
            caption = $.trim(captionBlockElement.text().replace(/\s+/g, ' '));

            if(img && caption) {
                modalCaptionImgElement.attr('src', img);
                modalCaptionElement.text(caption);

                $.fancybox.open({
                    type : 'inline',
                    src  : '#price'
                });
            }
        }
    });

  grid.find('.price-block-grid__col').slice(0, 8).addClass('price-block-grid__col_active');


  $("#price__show-more").on('click', function (e) {
      e.preventDefault();
      grid.find('.price-block-grid__col').slice(8).addClass('price-block-grid__col_active');
      if ($(".price-block-grid__col").hasClass('price-block-grid__col_active')) {
        $("#price__show-more").hide();
         $("#price__show-less").fadeIn('slow');
      }
    });

 $("#price__show-less").on('click', function(e) {
    e.preventDefault();
    $('.price-block-grid__col:not(:lt(8))').removeClass('price-block-grid__col_active');
    $("#price__show-more").fadeIn('slow');
    $("#price__show-less").hide();

    desiredHeight = $(window).height();

    $('html,body').animate({
      scrollTop: $(".price-block").offset().top + desiredHeight
    }, 1500);
  });
});

$(document).ready(function() {
    var modalCaptionElement    = $('#services .services__hidden-title');
    var modalCaptionPrice    = $('#services .services__hidden-icon_price');

    $(document).on('click', '.services-block__list_btn', function() {
        var $this                  = $(this);
        var captionBlockElement    = $this.closest('.services-block__list_link').find('.services-block__list_text');
        var captionBlockPrice    = $this.closest('.services-block__list_link').find('.services-block__list_price');
        var caption;
        var price;

        if(captionBlockElement.length && modalCaptionElement.length && captionBlockPrice.length && modalCaptionPrice.length) {
            caption = $.trim(captionBlockElement.text().replace(/\s+/g, ' '));
            price = $.trim(captionBlockPrice.text().replace(/\s+/g, ' '));

            if(caption) {
                modalCaptionElement.text(caption);
                modalCaptionPrice.text(price);

                $.fancybox.open({
                    type : 'inline',
                    src  : '#services'
                });
            }
        }
    });
});

$(document).ready(function() {
$("#work__show-less").hide();
	var grid = $('#work-list');
	grid.find('.work-performed-block-grid__col').slice(0, 3).addClass('work-performed-block-grid__col_active');


	$("#work__show-more").on('click', function (e) {
      e.preventDefault();
      grid.find('.work-performed-block-grid__col').slice(3).addClass('work-performed-block-grid__col_active');
      if ($(".work-performed-block-grid__col").hasClass('work-performed-block-grid__col_active')) {
        $("#work__show-more").hide();
         $("#work__show-less").fadeIn('slow');
      }
    });

 $("#work__show-less").on('click', function(e) {
    e.preventDefault();
    $('.work-performed-block-grid__col:not(:lt(3))').removeClass('work-performed-block-grid__col_active');
    $("#work__show-more").fadeIn('slow');
    $("#work__show-less").hide();

    // desiredHeight = $(window).height();

    // $('html,body').animate({
    //   scrollTop: $(".work-performed-block").offset().top + desiredHeight
    // }, 1500);
  });
});

$(window).on('load resize', function() {
	if ($(".work-performed-block-grid__col").hasClass('work-performed-block-grid__col_active')) {
        $("#work__show-less").hide();
      };
  if (window.matchMedia('(max-width: 1170px)').matches) {
    $('.work-performed-block-grid:not(.slick-initialized)').slick({
		slidesToShow: 2,
		infinite: true,
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 980,
				settings:{
					slidesToShow: 1,
					arrows: true,
					dots: true
				}
			},
		]
    });
  } else {
  	$("#work__show-less").hide();
    $(".work-performed-block-grid.slick-initialized").slick("unslick");
  }
});

$(window).on('load resize', function(e) {
    $(".question-items__question").click(function (e) {
    e.preventDefault(), $(this).hasClass("question-items__question_active") ? $(this).next(".question-items__answer").slideUp(300, function () {
      $(this).removeAttr("style"), $(this).prev(".question-items__question").removeClass("question-items__question_active")
    }) : ($(".question-items__question").removeClass("question-items__question_active"), $(".question-items__answer").slideUp(300, function () {
      $(this).removeAttr("style")
    }), $(this).addClass("question-items__question_active"), $(this).next(".question-items__answer").slideDown(300))
  });
});

// $(document).ready(function() {
// $('.question-items__answer').hide();
// $('.question-items__question').click(function(){

// 	$(this).next('.question-items__answer').slideUp(300);
// },
// function(){
// 	$(this).next('.question-items__answer').slideDown(300);
// });
// });
$(window).on('load resize', function(e) {
    var $resultSumElement = $('#result');
    var $discountElement  = $('input[name="discount"]');
    var $price            = $('input#bardahl').val();
    var discountPrice     = .30;

    $resultSumElement.text('Итого: ' + $price + ' руб.');

    $(document).on('click', '.price-form__discount_oil-type', function() {
        var $this         = $(this);
        var $priceElement = $this.find('input[name="oil"]');

        if($priceElement.length && $discountElement.length) {
            $price = $priceElement.val();

            if($discountElement.prop('checked')) {
                $resultSumElement.text('Итого: ' + ($price - ($price * discountPrice)) + ' руб.');
            }
            else {
                $resultSumElement.text('Итого: ' + $price + ' руб.');
            }
        }
    }).on('click', 'input[name="discount"]', function() {
        if($(this).prop('checked')) {
            $resultSumElement.text('Итого: ' + ($price - ($price * discountPrice)) + ' руб.');
        }
        else {
            $resultSumElement.text('Итого: ' + $price + ' руб.');
        }
    });
});

// $(window).on('load resize', function(e) {
// 	 e.preventDefault();
// 	 var buttonCheck =  document.querySelector('input[name = form]'),
// 	 	button = document.getElementById("f_send");
// 	 	if($('input[name="discount"]:checked')) {
//    $("#f_send").addClass("disabled") }
//    	else {
//    		$("#f_send").addAttr("disabled");
//    		}
// 	});

// $(window).on('resize', function(e) {
//  	e.preventDefault();
// 	var price = document.querySelector('input[name = oil]:checked').value;
// 	    // discount = document.querySelector('input[name = discount]:checked').value;
// 	    result.innerHTML = 'Итого: ' + price + ' руб.'
// });

$(document).ready(function() {
	$(".form-grid__checkbox_input").change(function() {

		if($(this).prop("checked"))
			$(this).closest(".form").find(".form-grid__button").removeAttr("disabled");
		else
				$(this).closest(".form").find(".form-grid__button").attr("disabled", "disabled");
	});
});

$('document').ready(function() {
  $('.form-grid__button').on('click', function() {
    $(this).closest(".form").find('input[required]').addClass('req');
    $(this).closest(".form").find('select[required]').addClass('req');
  });
});

document.addEventListener('invalid', (function () {
  return function (e) {
    e.preventDefault();
    document.getElementsByClassName(".form-grid__checkbox_input").focus();
  };
})(), true);

$(function() {
   $('.form-grid__phone_input-mask').mask('+7(000)000-00-00');
 });
// $(function(){
// $('#price-hidden-checkbox').click(function(){
// $('#f_send').attr('disabled',!this.checked);
// });
// $('#form1').submit(function(){
// return $('#price-hidden-checkbox').attr('checked');
// });
// });

  // function s() {
  //   var e = +$(".calc-oil-grid__input:checked").attr("data-oil"),
  //     i = +$(".calc-stock__input:checked").attr("data-stock");
  //   $(".calc__price").html("Итого: " + r(e - (isNaN(i) ? 0 : i)) + " руб."), $('input[name="price"]').attr("value", "Итого: " + r(e - (isNaN(i) ? 0 : i)) + " руб.")
  // }
	// selector (css selector
	// default: [hred^="#anchor"]
	// Селектор на ссылку для клика
	
	// speed (number)
	// default: 500
	// Скорость анимации прокрутки

	// beforeScroll (callback)
	// Функция, которая будет выполнена перед анимацией

	// afterScroll (callback)
	// Функция, которая будет выполнена после анимации

	// )





function toAnchor(param) {
	var options = {
		selector: '[href^="#anchor"]',
		speed: 500,
		beforeScroll: function() {},
		afterScroll: function() {},
		responsive: [],
		offset: 0
	};

	for (let key in param) {
		options[key] = param[key];
	}

	var defaults = {};

	for (let key in options) {

		defaults[key] = options[key];
	}

	if ( options.responsive.length ) {

		$(document).ready(reOpt);
		$(window).resize(reOpt);
		function reOpt (){	

			for (let i = 0; i < options.responsive.length; i++) {
				if (window.matchMedia(`(max-width: ${options.responsive[i].breakpoint}px)`).matches ) {

					for (let key in options.responsive[i].settings) {
					options[key] = options.responsive[i].settings[key];
					}
				}else {
					for (let key in options) {
						options[key] = defaults[key];
					}

				}
			}
		}
	}

	$(options.selector).click(function() {
		event.preventDefault();

		var id     = $(this).attr('href'),
			docTop = $(id).offset().top;


		options.beforeScroll();

		$('html, body').animate({
			scrollTop: docTop - options.offset
		}, options.speed);

		setTimeout(options.afterScroll, options.speed);
	});

};


toAnchor({
	responsive: [
		{
			breakpoint: 1170,
			settings: {
				offset: $('.topheader').height()
			}
		}
	]
});


	// selector (css selector)
	// default: .nav-toggle
	// Селектор кнопки переключателя для клика

	// toggleClass (string)
	// default: nav-toggle_active
	// Переключатель класса для кнопки
	
	// selectorNav (css selector)
	// default: .nav
	// Селектор блока навигации

	// toggleClassNav (string)
	// default: nav_active
	// Переключатель класса для блока навигации

	// selectorLink (css selector)
	// default: [href^="#anchor"]
	// Селектор ссылки для клика

	// blockScroll (boolean)
	// default: false
	// Блокирует прокрутку страницы при открытом меню





function toggleNav(param) {
	var options = {
		selector: '.nav-toggle',
		toggleClass: 'nav-toggle_active',
		selectorNav: '.nav',
		toggleClassNav: 'nav_active',
		selectorLink: '[href^="#anchor"]',
		blockScroll: false,
		responsive: [],
		activeState: false
	};

	for (let key in param) {
		options[key] = param[key];
	}

	var defaults = {};

	for ( let key in options) {
		defaults[key] = options[key];
	}

	if ( options.responsive.length ) {
		$(document).ready(reOpt);
		$(window).resize(reOpt);

		function reOpt () {
			for (let i = 0; i < options.responsive.length; i++) {
				if ( window.matchMedia(`(max-width: ${options.responsive[i].breakpoint}px)`).matches ) {
				
					for (let key in options.responsive[i].settings ) {
						options[key] = options.responsive[i].settings[key];
					}
				} else {

					for (let key in options) {
						options[key] = defaults[key];
					}
				}
		}
		
		}
	}

	$(`${options.selector}, ${options.selectorLink}`).click(function() {
		options.activeState = !options.activeState;

		if ( options.toggleClass ) {
			$(options.selector).toggleClass(options.toggleClass );
		}

		if ( options.toggleClassNav ) {
			$(options.selectorNav).toggleClass( options.toggleClassNav );
		}

		if ( options.blockScroll ) {
			if ( options.activeState ) {
				$('body').css('overflow', 'hidden');
			} else {
				$('body').removeAttr('style');
			}
		}
	});
}

toggleNav({
	responsive: [
		{
			breakpoint: 1170,
			settings: {
				blockScroll: true
			}
		}
	]
});


// $(function() {
//  $("#form-phone").mask("+7(999) 999-99-99");
// });

$('.preview-block-services-grid').slick({
	slidesToShow: 3,
	infinite: true,
	arrows: false,
	dots: false,
	responsive: [
		{
			breakpoint: 980,
			settings:{
				slidesToShow: 1,
				arrows: true,
				dots: true
			}
		},
		{
			breakpoint: 1170,
			settings:{
				slidesToShow: 2,
				arrows: true,
				dots: true
			}
		},
		]
});

$('.team-block-grid').slick({
	slidesToShow: 4,
	infinite: true,
	arrows: true,
	dots: true,
	responsive: [
		{
			breakpoint: 767,
			settings:{
				slidesToShow: 1
			}
		},
		{
			breakpoint: 980,
			settings:{
				slidesToShow: 2
			}
		},
		{
			breakpoint: 1170,
			settings:{
				slidesToShow: 3
			}
		},
		]
});

$('.video-block-grid').slick({
	slidesToShow: 3,
	infinite: true,
	arrows: true,
	dots: false,
	responsive: [
		{
			breakpoint: 980,
			settings:{
				slidesToShow: 1,
				arrows: true,
				dots: true
			}
		},
		{
			breakpoint: 1170,
			settings:{
				slidesToShow: 2,
				arrows: true,
				dots: true
			}
		},
		]
});

$('.certificate-block-grid').slick({
	slidesToShow: 4,
	infinite: true,
	arrows: true,
	dots: true,
	responsive: [
		{
			breakpoint: 767,
			settings:{
				slidesToShow: 1
			}
		},
		{
			breakpoint: 980,
			settings:{
				slidesToShow: 2
			}
		},
		{
			breakpoint: 1170,
			settings:{
				slidesToShow: 3
			}
		},
		]
});

$('.logos-block-grid').slick({
	slidesToShow: 5,
	infinite: true,
	arrows: true,
	dots: true,
	responsive: [
		{
			breakpoint: 767,
			settings:{
				slidesToShow: 2
			}
		},
		{
			breakpoint: 980,
			settings:{
				slidesToShow: 3
			}
		},
		{
			breakpoint: 1170,
			settings:{
				slidesToShow: 4
			}
		},
		]
});

$('.news-block-grid').slick({
	slidesToShow: 3,
	infinite: true,
	arrows: true,
	dots: true,
	responsive: [
		{
			breakpoint: 980,
			settings:{
				slidesToShow: 1
			}
		},
		{
			breakpoint: 1170,
			settings:{
				slidesToShow: 2
			}
		},
		]
});

google.maps.event.addDomListener(window, 'load', init);
function init() {
		var coordinates = {lat: 55.71802, lng: 37.524624};
        var myOptions = {
            center: new google.maps.LatLng(55.71502, 37.524624), // Координаты, какое место отображать на карте
            zoom: 15, // Уровень риближения карты
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP // Тип карты

        };
        var map = new google.maps.Map(document.getElementById("map"), // В каком блоке будет отображаться карта
            myOptions),
        	image = 'images/marker.png',
        	marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: image
        });
    }


