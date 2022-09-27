export default function scrollTop() {
	let btn = $('.scrollTop')

	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			btn.addClass('show')
		} else {
			btn.removeClass('show')
		}
	});
	btn.on('click', function (e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: 0
		}, 100);
	})
}
