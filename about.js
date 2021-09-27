let startApp = () => {
	const containers = Array.from(document.getElementsByClassName('news-container'));
	const modal = document.getElementById('modal');
	const modalImage = document.getElementById('modal-image');
	const modalTitle = document.getElementById('modal-title');
	const closeButton = document.getElementById('close-button');

	containers.forEach(container => {
		let image = Array.from(container.getElementsByTagName('img'))[0];
		image.onclick = (event) => {
			modal.style.display = 'block';
			modalImage.src = event.target.src;
			modalImage.alt = event.target.alt;
			modalTitle.innerText = container.querySelector(".preview").innerText;
		};
	});

	closeButton.onclick = () => {
		modal.style.display = 'none';
	}

	modal.onclick = (event) => {
		if (event.target === modalImage) return;
		modal.style.display = 'none';
	}

}

startApp();

