function showImage(elemId, imgSrc) {
	const elem = document.getElementById(elemId);
	const popImage = new Image();
	popImage.src = imgSrc;
	popImage.style.position = 'absolute';
	popImage.style.zIndex = '1';
	popImage.style.width = '250px';
	popImage.style.minHeight = '250px';
	popImage.style.maxHeight = 'auto';
	elem.appendChild(popImage);
}

function hideImage(elemId) {
	const elem = document.getElementById(elemId);
	while (elem.childElementCount > 0) {
		elem.removeChild(elem.lastChild);
	}
}

// Attach the code to the keydown event
document.addEventListener('keydown', function (event) {
	// Check if the pressed key is Enter
	if (event.key === 'Enter') {
		// Get the selected text
		var selectedText = window.getSelection().toString();

		// Check if the selected text is not empty
		if (selectedText) {
			// Create a new element to wrap the selected text
			var highlight = document.createElement('span');
			highlight.classList.add('highlight');
			highlight.innerHTML = selectedText;

			// Get the range of the selected text
			var range = window.getSelection().getRangeAt(0);

			// Surround the selected text with the highlight element
			range.surroundContents(highlight);
		}
	}
});
