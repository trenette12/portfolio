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