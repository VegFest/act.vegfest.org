// Validate Form Input
$(function() {
  $('#petitionform').submit(function(event) {
    var required_fields = $(event.target).find('input[required]');
    var number_of_issues = 0;

    for(var i = 0; i < required_fields.length; i++) {
      var field = $(required_fields[i]);
      var group = field.parent();

      if(field.val() === '') {
        number_of_issues++;

        if(group.find('.error').length < 1) {
          field.parent().append(buildFormErrorMessage());
        }
      }
    }

    if(number_of_issues > 0) {
      event.preventDefault();
    }
  })
});

function buildFormErrorMessage() {
  var message = '<span class=\"error\">' +
                  'Oops! You forgot this field. Please fill it in.' +
                '</span>';
  return message;
}
