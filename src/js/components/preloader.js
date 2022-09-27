export default function preloader() {
	return new Promise((resolve, reject) => {
			setTimeout(resolve, 1000);
		})
}

preloader()
	.then(() => {
		let preloader = $('.preloader');
		preloader.addClass('hidden');
		preloader.removeClass('visible');
	});
