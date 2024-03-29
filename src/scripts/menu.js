// With view transitions, some scripts may no longer re-run after page navigation
// The scripts in your project will now need to hook into two events to run at the right time during page navigation: astro:page-load and astro:after-swap.
document.addEventListener("astro:page-load", () => {
	document.querySelector(".hamburger").addEventListener("click", () => {
		document.querySelector(".nav-links").classList.toggle("expanded");
	});
});
