$('#contact-form').submit(function(e){
  var name = document.getElementById('inputName'),
      email = document.getElementById('inputEmail'),
      message = document.getElementById('inputMessage');

      if (!name.value || !email.value || !message.value){
        alertfy.error('Please check your entries')
      } else {
        $.ajax({
          url: "https://formspree.io/narcismorar@gmail.com",
          method: "POST",
          data: $(this).serialize(),
          dataType: "json"
        });
        e.prevetDefault()
        $(this).get(0).reset()
        alertfy.success('Message sent')
      }
})
