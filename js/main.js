(() => {
		// what we want to work with
		// 
		// this is a 1 to 1 connection (selects 1 element)
		var angler = document.querySelector("#angler");

		// this is one to many selection (gets a collection of elements)
		var allIcons = document.querySelectorAll(".icon");

		// what we want it to to
		function logMyId() {
			// log some stuff (displays in dev tools)
			console.log(this.id);
			//debugger;
		}

		// how do we do that?
		// 1 to 1 event handling
		angler.addEventListener("click", logMyId);

		allIcons.forEach(currentbadge => currentbadge.
			addEventListener("click", logMyId));

})();