const filter = document.querySelector("#filter-location");
const message = document.querySelector("#filter-selected-value");

filter.addEventListener("change", function () {
	const jobs = document.querySelectorAll(".job-listing-card");

	const selectedValue = filter.value;

	if (selectedValue) {
		message.textContent = `Has seleccionado: ${selectedValue}`;
	} else {
		message.textContent = "";
	}

	jobs.forEach((job) => {
		const mode = job.getAttribute("data-mode");
		const isShown = selectedValue === "" || selectedValue === mode;
		job.classList.toggle("is-hidden", isShown === false);
	});
});
