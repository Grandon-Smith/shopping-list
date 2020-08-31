//-------Make Cross out function------->

// $(function() {
//     $("button.shopping-item-toggle").click(function(event){
//         $('span.shopping-item').toggleClass('shopping-item__checked')
//     })
// });


 function crossOut() {
  //  event.preventDefault();
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

};

$(crossOut());

// // <---------------End cross out------------------------>

// // <--------------make delete item function -------------->

function deleteItems() {
  // event.preventDefault();
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  $(event.currentTarget).closest('li').remove();
});
}

$(deleteItems());

//<-----------------------and delete function ------------->

//<---------------- make add item function ------------------>


$(function(){
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const listItem = $('#shopping-list-entry').val();


    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });

});
