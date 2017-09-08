// Background Change based on User Input
const changeBackground = document.querySelectorAll('.controls input');
function colorUpdate(){
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}
changeBackground.forEach(input => input.addEventListener('change', colorUpdate));

// Random Quote API
$.ajax({
    url: 'https://timshim-quotes-v1.p.mashape.com/quotes', 
    type: 'GET', 
    data: {}, 
    dataType: 'json',
    success: function(data) { 
      console.log(data);
      $("#quote").append("<br><br><p><i>'" + data.quoteText + "'</i></p>- " + data.author);
    },
    error: function(err) {
       alert(err); 
      },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "X109PFEWt2msh5NTNQZkGAvNDKzhp1bBfS8jsniaW3z7onUzGk"); // Enter here your Mashape key
    }
});

// Javascript Smooth Scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  })
});



