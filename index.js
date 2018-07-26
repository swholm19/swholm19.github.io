
$(() => {
  $('.menu').hover((event) => $(`#${event.target.id}`).css('color', '#d80f23'),
  (event) => $(`#${event.target.id}`).css('color', '#000'))
})
