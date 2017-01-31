require('./css/_scss/_bootstrap.scss')


var fancyInput = document.querySelectorAll("fancy-form-control")

// fancyInput.forEach(function(element) {
//     element.addEventListener("blur", function(){
//         if ((this.value.length > 0) && (this.className.indexOf("focus") === -1)) {
//             this.classList.add("focus")
//         } else if ( (this.value.length === 0) && (this.className.indexOf("focus") > 0)) {
//             this.classList.remove("focus")
//         }

//     })
// })

for (var entry of fancyInput.entries()) {
  entry.addEventListener("blur", function(){
        if ((this.value.length > 0) && (this.className.indexOf("focus") === -1)) {
            this.classList.add("focus")
        } else if ( (this.value.length === 0) && (this.className.indexOf("focus") > 0)) {
            this.classList.remove("focus")
        }
    })
}