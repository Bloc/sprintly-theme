$(function() {
  console.log("hey");
  $addItem = $("body#logged_in_default #logged_in_header a#add_item_small").clone();
  $("body#logged_in_default #logged_in_header a#add_item_small").remove();

  $(".global-filters-container .add-filter").before($addItem);
})