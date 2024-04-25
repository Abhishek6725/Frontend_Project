var slider = $('.slider'),
    sliderControls = $('.slider-controls'),
    sliderItemsWrap = slider.children('.slider-items-wrap'),
    sliderItems = sliderItemsWrap.children('.slider-item'),
    sliderItemsLength = sliderItems.length;

if (slider) {
  var autoSlide = setInterval(function() {
    var activeItem = sliderControls.find('.active'),
        sliderItemsLength = sliderControls.find('a').length;

    if (activeItem.index() !== sliderItemsLength - 1) {
      activeItem.next().trigger('click');
    } else {
      sliderControls.children().first().trigger('click');
    }

  }, 5000);
}

sliderControls.on('click', 'a', function(e) {
  var self = $(this),
      index = self.index(),
      newColor = sliderItems.eq(index).css('color');

  if (!e.isTrigger) clearInterval(autoSlide);
  self.addClass('active').siblings().removeClass('active');
  
  slider.css('color', newColor);

  sliderItemsWrap.css({
    '-webkit-transform': 'translateX(-' + index * sliderItemsWrap.width() / sliderItemsLength + 'px)',
    'transform': 'translateX(-' + index * sliderItemsWrap.width() / sliderItemsLength + 'px)'
  });
});