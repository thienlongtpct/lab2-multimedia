Array.from(document.getElementsByTagName('audio'))[0].play();

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

let inlineTags = Array.from(document.getElementsByClassName("inline-tag"));
inlineTags.forEach(tag => {
	tag.onclick = () => {
		inlineTags.map(innerTag => innerTag.classList.remove("checked"));
		tag.classList.add("checked");
		containers.map(container => {
			if (container.querySelector(".tag").innerText !== tag.innerText && tag.innerText !== "ВСЕ") container.style.opacity = "0.5";
			else container.style.opacity = "1";
		});
	}
});