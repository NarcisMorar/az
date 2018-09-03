$('#contactForm').submit(function(e){
  var name = document.getElementById('inputName'),
      email = document.getElementById('inputEmail'),
      message = document.getElementById('inputMessage');

      if (!name.value || !email.value || !message.value){
        alertfy.error('Please check your entries')
      } else {
        $.ajax({
            url: "mail/contact_me.php",
            type: "POST",
            data: {
                name: name,
                email: email,
                message: message
            },
            cache: false,
            success: function() {
                // Success message
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-success')
                    .append("<strong>Your message has been sent. </strong>");
                $('#success > .alert-success')
                    .append('</div>');

                //clear all fields
                $('#contactForm').trigger("reset");
            },
            error: function() {
                // Fail message
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                $('#success > .alert-danger').append('</div>');
                //clear all fields
                $('#contactForm').trigger("reset");
            },
        })




        
      /*  $.ajax({
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
