$(document).ready(function() {
  $('#send_message').click(function(e) {
    e.preventDefault();

    // Variable declaration
    var error = false;
    var first_name = $('#first_name').val().trim();
    var last_name = $('#last_name').val().trim();
    var email = $('#email').val().trim();
    var phone = $('#phone').val().trim();
    var gender = $('#gender').val();
    var birth_date = $('#birth_date').val();
    var plan = $('#plan').val();
    var terms = $('#terms').is(':checked');

    // Remove previous error highlight on click
    $('#first_name,#last_name,#email,#phone,#gender,#birth_date,#plan,#message,#terms').on('click change', function() {
      $(this).removeClass("error_input");
    });

    // Validation
    if (first_name.length == 0) {
      error = true;
      $('#first_name').addClass("error_input");
    }
    if (last_name.length == 0) {
      error = true;
      $('#last_name').addClass("error_input");
    }
    if (email.length == 0 || email.indexOf('@') == -1) {
      error = true;
      $('#email').addClass("error_input");
    }
    if (phone.length == 0) {
      error = true;
      $('#phone').addClass("error_input");
    }
    if (!gender) {
      error = true;
      $('#gender').addClass("error_input");
    }
    if (birth_date.length == 0) {
      error = true;
      $('#birth_date').addClass("error_input");
    }
    if (!plan) {
      error = true;
      $('#plan').addClass("error_input");
    }
    if (!terms) {
      error = true;
      $('#terms').addClass("error_input");
    }

    // If no validation error, proceed
    if (!error) {
      $('#send_message').attr({
        'disabled': 'true',
        'value': 'Sending...'
      });

      // Get optional message field
      var message = $('#message').val() ? $('#message').val().trim() : '';

      // Prepare form data
      var formData = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        gender: gender,
        birth_date: birth_date,
        plan: plan,
        message: message,
        terms: terms
      };

      // Send to Next.js API route
      fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'sent') {
          $('#join_form').fadeOut(500, function() {
            $('#success_message').fadeIn(500);
          });
        } else {
          $('#error_message').fadeIn(500);
          $('#send_message').removeAttr('disabled').attr('value', 'Send Appointment');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        $('#error_message').fadeIn(500);
        $('#send_message').removeAttr('disabled').attr('value', 'Send Appointment');
      });
    }
  });
});
