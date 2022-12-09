$(function () {
  $("#form").validate({
    errorPlacement: function (error, element) {
      error.appendTo(element.parent());
    },
    success: function (label) {
      label.parent().removeClass("error-parent");
    },
    highlight: function (element, errorClass) {
      $(element).parent().addClass("error-parent");
      $(element).fadeOut(function () {
        $(element).fadeIn();
      });
    },
    rules: {
      fname: {
        required: true,
        minlength: 2
      },
      lname: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      options: {
        required: true
      },
      another: {
        required: true
      },
      pet: {
        //required function to run on submit

        required: true,
        minlength: 2
      },
      tellme: {
        required: true,
        minlength: 4
      }
    },
    messages: {
      fname: {
        required: "Please enter a first name",
        minlength: "Your first name must be at least 2 characters"
      },
      lname: {
        required: "Please enter a first name",
        minlength: "Your last name must be at least 2 characters"
      },
      email: {
        required: "Please enter a email address",
        email: "Please enter a valid email"
      },
      options: {
        required: "Please make a selection"
      },
      another: {
        required: "Please make a selection"
      },
      pet: {
        required: "Please pick two of these"
      },
      tellme: {
        required: "Please tell me about your pets",
        minlength: "Your instructions must consist of at least 4 characters"
      }
    }
  });
});
