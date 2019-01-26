(() => {
		// what we want to work with
		// 
		// this is a 1 to 1 connection (selects 1 element)
		var badge = document.querySelector("#badge");

		// this is one to many selection (gets a collection of elements)
		var allTheBadges = document.querySelectorAll(".isabadge");

		// what we want it to to
		function logMyId() {
			// log some stuff (displays in dev tools)
			console.log(this.id);
			//debugger;
		}

		// how do we do that?
		// 1 to 1 event handling
		badge.addEventListener("click", logMyId);

		allTheBadges.forEach(currentbadge => currentbadge.
			addEventListener("click", logMyId));

})();