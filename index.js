$(function() { //declaring we are using jQuery
       $("ul").empty(); //empty the list of anything that may be in it
     $('#js-shopping-list-form').submit(
       event => { //when submit is pressed
     event.preventDefault(); //prevent default
    
    const item = $(this).find('input[name="shopping-list-entry"]').val(); //get the value of the submitted item set it equal to variable 'item'

    
      //add new list item
       $("ul").append('<li><span class="shopping-item">'+ item + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span> </button><button class="shopping-item-delete"><span class="button-label">delete</span> </button></div></li>')


      
    });

//check and uncheck items buttons (use toggle)

      $("ul").on("click",".shopping-item-toggle", function(event) {  //when check button is clicked on
     //console.log("check");
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked"); //add the class .shopping-item_checked to it
      
    });

 //let's delete some items
    $('ul').on("click", ".shopping-item-delete", function(event){ //when the delete button is clicked on
     // console.log('delete');
        this.closest("li").remove(); //delete the closest shopping item on the list
    });

});