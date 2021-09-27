let startApp = () => {
	const containers = Array.from(document.getElementsByClassName('image-container'));
	const modal = document.getElementById('modal');
	const modalImage = document.getElementById('modal-image');
	const closeButton = document.getElementById('close-button');

	containers.forEach(container => {
		let image = Array.from(container.getElementsByTagName('img'))[0];
		image.onclick = (event) => {
			modal.style.display = 'block';
			modalImage.src = event.target.src;
			modalImage.alt = event.target.alt;
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


let gallery = document.getElementById("gallery");
for (let i = 1; i <= 23; ++i) {
	let imageContainer = document.createElement('div');
	imageContainer.classList.add('image-container');
	let image = document.createElement('img');
	image.alt = "Карточка игрока";
	image.src = `./images/players/${i}.png`;
	imageContainer.appendChild(image);
	gallery.appendChild(imageContainer)
}

startApp();

