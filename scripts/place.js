const init = () => {
	const text1 = document.querySelector("h1#place-header-title");
	const text2 = document.querySelector("h2#place-header-subtitle");

	text1.style.top = 0 + "px";
	text1.style.opacity = "1";

	const timer = setTimeout(() => {
		text2.style.top = 0 + "px";
		text2.style.opacity = "1";
	}, 750);
};

window.onload = () => {
	init();
};
