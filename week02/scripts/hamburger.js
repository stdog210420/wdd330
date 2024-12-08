
const hambutton = document.querySelector('.🍔');
const mainnav = document.querySelector('.navigation');

let hasAlerted = false; // initializd


hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

// To solve the mid resizing issue with responsive class [window.onresize]
window.addEventListener('resize', () => {
	if (window.innerWidth > 760) { // window.innerWidth includes the scrollbar (if any), document.documentElement.clientWidth does not
		mainnav.classList.remove('responsive');
	};
	if (!hasAlerted) {
		window.alert("The 'responsive' class has been removed."); // 顯示彈窗
		hasAlerted = true;
	}
});