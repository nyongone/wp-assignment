const init = (interval) => {
	// const slide_container = document.getElementById("slide-container");
	const slideImages = document.getElementsByClassName("slide-image");

	// let x = slideImages[0].clientWidth,
	// 	y = slideImages[0].clientHeight;

	// window.addEventListener("resize", () => {
	// 	(x = slideImages[0].clientWidth), (y = slideImages[0].clientHeight);
	// });

	let i = Array.from({ length: slideImages.length }, (_, i) => i);
	const nextSlide = () => {
		slideImages[i[0]].style.opacity = "0";
		slideImages[i[1]].style.opacity = "1";
		slideImages[i[2]].style.opacity = "0";
		i.unshift(i.pop());
	};

	const timer = setInterval(() => {
		nextSlide();
	}, interval);
};

const scene1 = () => {
	const intro = document.querySelector("h2#subtitle");
	const text = document.querySelector("span.text1");
	intro.style.top = 0 + "px";
	intro.style.opacity = "1";
	const timer = setTimeout(() => {
		text.style.left = 0 + "px";
		text.style.opacity = "1";
	}, 1000);
};

const scene2 = () => {
	const info = document.querySelector("h2#information");
	const visit_total = document.querySelector("span.visit_total");

	info.style.top = 0 + "px";
	info.style.opacity = "1";

	let i = 0;
	const timer1 = setInterval(() => {
		i += 12600;
		visit_total.innerText = i.toLocaleString("ko-KR") + "명";
		if (i >= 5000000) {
			visit_total.innerText = Number(5000000).toLocaleString("ko-KR") + "명";
			clearInterval(timer1);
		}
	}, 0.1);
};

const scene3 = () => {
	const spot_total = document.querySelector("span.spot_total");
	let i = 0;
	const timer2 = setInterval(() => {
		i += 1;
		spot_total.innerText = i.toLocaleString("ko-KR") + "개";
		if (i >= 30) {
			spot_total.innerText = Number(30).toLocaleString("ko-KR") + "개";
			clearInterval(timer2);
		}
	}, 75);
};

const scene4 = () => {
	const text = document.querySelector("span.text2");
	text.style.top = 0 + "px";
	text.style.opacity = "1";
};

window.onload = () => {
	init(5000);
	scene1();
	setTimeout(() => {
		scene2();
		scene3();
		setTimeout(() => {
			scene4();
		}, 2000);
	}, 1000);
};
