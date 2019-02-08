'use strict';

var carousel = (function() {
  var queries = {
    carousel: '.musician__carouselcontent',
  };

  var dom = {};

  var catchDom = function() {
    dom.carousel = $(queries.carousel);
  };

  var propertiesByDefault = {
    slick: {
      infinite: true,
      slidesToShow: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }
  };

  var suscribeEvents = function() {
    dom.carousel.slick(propertiesByDefault.slick);
  }

  var events = {};

  var initialize = function() {
    catchDom();
    suscribeEvents();
  }

  return {
    init: initialize
  }

})();

$(document).ready(carousel.init);
