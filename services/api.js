const container = document.querySelector(".jobs-listings");

const RESULTS_PER_PAGE = 3;

fetch("../data.json")
	.then((response) => response.json())
	.then((jobs) => {
		jobs.forEach((job) => {
			const article = document.createElement("article");
			article.className = "job-listing-card";

			article.dataset.title = job.title.toLowerCase();
			article.dataset.mode = job.data.mode;
			article.dataset.seniority = job.data.seniority;
			article.dataset.technology = job.data.technology.join(" ");

			const wrapper = document.createElement("div");

			const title = document.createElement("h3");
			title.textContent = job.title;

			const meta = document.createElement("small");
			meta.textContent = `${job.company} | ${job.location}`;

			const description = document.createElement("p");
			description.textContent = job.description;

			const button = document.createElement("button");
			button.className = "button-apply-job";
			button.textContent = "Aplicar";

			wrapper.append(title, meta, description);
			article.append(wrapper, button);
			container.appendChild(article);
		});
	});
