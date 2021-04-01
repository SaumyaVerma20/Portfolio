jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

jQuery('.Count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 6000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});

document.querySelectorAll('ul li a').forEach((link) => {
  function scrollTo(e) {
    e.preventDefault;
    const id = e.target.getAttribute('href');
    document.querySelector(`${id}`).scrollIntoView();
  }
  link.addEventListener('click', scrollTo);
})
