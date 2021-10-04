Array.from(document.getElementsByTagName('audio'))[0].play();

let gallery = document.getElementById("gallery");
let players = [
	{
		'id': 1,
		'total': 88,
		'position': 'CDM'
	},
	{
		'id': 2,
		'total': 85,
		'position': 'CB'
	},
	{
		'id': 3,
		'total': 85,
		'position': 'CAM'
	},
	{
		'id': 4,
		'total': 85,
		'position': 'ST'
	},
	{
		'id': 5,
		'total': 85,
		'position': 'CAM'
	},
	{
		'id': 6,
		'total': 78,
		'position': 'ST'
	},
	{
		'id': 7,
		'total': 81,
		'position': 'LB'
	},
	{
		'id': 8,
		'total': 84,
		'position': 'RB'
	},
	{
		'id': 9,
		'total': 79,
		'position': 'CDM'
	},
	{
		'id': 10,
		'total': 78,
		'position': 'CM'
	},
	{
		'id': 11,
		'total': 81,
		'position': 'LB'
	},
	{
		'id': 12,
		'total': 79,
		'position': 'CB'
	},
	{
		'id': 13,
		'total': 79,
		'position': 'LB'
	},
	{
		'id': 14,
		'total': 79,
		'position': 'ST'
	},
	{
		'id': 15,
		'total': 77,
		'position': 'RB'
	},
	{
		'id': 16,
		'total': 83,
		'position': 'CM'
	},
	{
		'id': 17,
		'total': 82,
		'position': 'GK'
	},
	{
		'id': 18,
		'total': 83,
		'position': 'CM'
	},
	{
		'id': 19,
		'total': 78,
		'position': 'CM'
	},
	{
		'id': 20,
		'total': 80,
		'position': 'CAM'
	},
	{
		'id': 21,
		'total': 81,
		'position': 'LW'
	},
	{
		'id': 22,
		'total': 81,
		'position': 'CB'
	},
	{
		'id': 23,
		'total': 80,
		'position': 'CB'
	}
];

const updateGallery = (isAsc) => {
	gallery.innerHTML = '';
	if (isAsc) players.sort((player1, player2) => player1.total-player2.total);
	else players.sort((player1, player2) => player2.total-player1.total);
	for (let i = 0; i < 23; ++i) {
		let imageContainer = document.createElement('div');
		imageContainer.classList.add('image-container');
		let image = document.createElement('img');
		image.alt = "Карточка игрока";
		image.src = `../../images/players/${players[i].id}.png`;
		imageContainer.appendChild(image);
		if (players[i].hide) imageContainer.style.display = 'none';
		gallery.appendChild(imageContainer)
	}
};
updateGallery(false);

let inlineTags = Array.from(document.getElementsByClassName("inline-tag"));
inlineTags.forEach(tag => {
	tag.onclick = () => {
		inlineTags.map(innerTag => innerTag.classList.remove("checked"));
		tag.classList.add("checked");

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
		};

		modal.onclick = (event) => {
			if (event.target === modalImage) return;
			modal.style.display = 'none';
		};

		containers.map((container, index) => {
			if (players[index].position !== tag.ariaValueText && tag.innerText !== "ВСЕ") {
				container.style.display = "none";
				players[index].hide = true;
			}
			else {
				container.style.display = "initial";
				players[index].hide = false;
			}
		});
	}
});


const icons = Array.from(document.getElementsByClassName("icons"));
icons[0].onclick = () => {
	console.log('0');
	icons[0].classList.add("checked");
	icons[1].classList.remove("checked");
	updateGallery(true);
}
icons[1].onclick = () => {
	icons[1].classList.add("checked");
	icons[0].classList.remove("checked");
	updateGallery(false);
}
