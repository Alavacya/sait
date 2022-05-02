var x = document.querySelector('.header-page__li-taurus');
var y =  document.querySelector('.tooltip');
x.onmouseover = function () {
	y.style.display = 'block';
};
x.onmouseout = function () {
	y.style.display = 'none';
};

const tl = gsap.timeline({ default: {ease: 'power1.out' } });
tl.to('.text', { y: "0%", duration: 1, stagger: 0.25 });
tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to('.intro', { y:"-100%", duration: 1 }, "-=1");
tl.fromTo('.header-page', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.section__top-title', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.section__top-suptitle', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.section__top-button', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");




let bodyScroll = document.querySelector('.scroll-text');
window.addEventListener('scroll', function() {
	let value = window.scrollY;
	bodyScroll.style.clipPath = "circle("+ value +"px at center center)";
});





const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				let bodyScroll = document.querySelector('.scroll-text');
				window.addEventListener('scroll', function() {
					let value = window.scrollY;
					bodyScroll.style.clipPath = "circle("+ value +"px at center center)";
				});	
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
};

