const navButtonHandler = (page) => {
	location.href = page;
};

function Mobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent,
	);
}

if (Mobile()) {
	location.href = "/404.html";
}
