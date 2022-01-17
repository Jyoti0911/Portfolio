const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
 // typing text animation script
 var typed = new Typed(".typing", {
	strings: [ "Software Developer", "Web Developer", "Frontend Developer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});
var typed = new Typed(".typing-2", {
	strings: ["Software Developer", "Web Developer", "Frontend Developer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
})
