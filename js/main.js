(() => {

// Button Version JS 

/*
	// this selects the button under the first SVG
    var angler_button = document.querySelector("#angler_button");

    // this selects the inline SVG - I added an ID to it (see above)
    var angler = document.querySelector('#angler');

    // this function runs when you click on the button
    function logIcon() {
      console.log(this.previousElementSibling.id);
    }

    // this function runs when you click on the inline SVG
    function logMe() {
      console.log(this.id);
    }

    // event handling for the button
    angler_button.addEventListener("click", logIcon);

    // event handling for the inline SVG
    angler.addEventListener("click", logMe)

 */

 	var allIcons = document.querySelectorAll(".icon");

 	function logIcon() {
      console.log(this.id);
  }

  	allIcons.forEach(currenticon => currenticon.
	addEventListener("click", logIcon));


})();