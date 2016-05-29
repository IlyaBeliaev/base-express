$(document).on('click', '.editable', function(e) {
  var el = $(e.currentTarget);

  var id = el.attr('data-id');
  var key = el.attr('data-key');

  var newValue = prompt('Edit field ' + key + ' in row ' + id, el.text());

  if (newValue === null) return;

  $.ajax({
    type: 'POST',
    data: JSON.stringify({ rowId: id, columnKey: key, newValue: newValue }),
    contentType: 'application/json',
    url: '/edit'
  }).done(function() {
    el.text(newValue);
  })
  .fail(function(response) {
      alert('Error: ' + response.responseText);
  });
});
