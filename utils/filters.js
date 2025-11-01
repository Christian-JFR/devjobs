const filterSearch = document.querySelector("#jobs-search-input");
const filterLocation = document.querySelector("#filter-location");
const filterSeniority = document.querySelector("#filter-seniority");
const filterTechnology = document.querySelector("#filter-technology");

function applyFilters() {
	const jobs = document.querySelectorAll(".job-listing-card");
	const selectedLocation = filterLocation.value;
	const selectedSeniority = filterSeniority.value;
	const selectedTechnology = filterTechnology.value;
	const searchCurrentValue = filterSearch.value;

	jobs.forEach((job) => {
		const jobTitle = job.getAttribute("data-title");
		const jobLocation = job.getAttribute("data-mode");
		const jobSeniority = job.getAttribute("data-seniority");
		const jobTechnology = job.getAttribute("data-technology");
		const technologyList = jobTechnology.split(" ");

		const titleMatch =
			searchCurrentValue === "" || jobTitle.includes(searchCurrentValue);
		const locationMatch =
			selectedLocation === "" || selectedLocation === jobLocation;
		const seniorityMatch =
			selectedSeniority === "" || selectedSeniority === jobSeniority;
		const technologyMatch =
			selectedTechnology === "" || technologyList.includes(selectedTechnology);

		const shouldShow =
			titleMatch && locationMatch && seniorityMatch && technologyMatch;

		job.classList.toggle("is-hidden", !shouldShow);
	});
}

filterSearch.addEventListener("input", applyFilters);
filterLocation.addEventListener("change", applyFilters);
filterSeniority.addEventListener("change", applyFilters);
filterTechnology.addEventListener("change", applyFilters);
