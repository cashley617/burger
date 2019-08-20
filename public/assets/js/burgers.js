// Setting page to listen 

$(document).ready(function() {
    // Adding a burger
    $("#addBurger").on("click", function() {
        console.log("You clicked to add a burger");

        // Sent this burger to the back 
        var burger = {
            "burger_name": $(burgerName).val(),
            "devoured": $(burgerName).data("eaten")
        };

        // Post request 
        $.post("/api/burger", burger).done((response)=>{
            location.reload();
        });
    });

    // Update burger
    $(".burgerBlock").on("click", function() {
        var burgerID = $(this).data("id");
        var devoured = $(this).data("eaten");
        var burgerUpdate = {
            "devoured": devoured
        };

        // Ajax Request 
        $.ajax("api/burger/" + burgerID, {
            type: "PUT",
            data: burgerUpdate
        }).done((response)=>{
            location.reload();
        });
    });
});