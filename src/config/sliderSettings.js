const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 250,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
      {
          breakpoint: 1400,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 400,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
};

export default sliderSettings;