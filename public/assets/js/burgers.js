// Setting page to listen 

$(document).ready(function() {
    // Adding a burger
    $("#addBurger").on("click", function(event) {
        event.preventDefault();
        console.log("You clicked to add a burger");
        if (!$(burgerName).val().trim()) return alert('burger name cannot be blank');

        // Sent this burger to the back 
        const burger = {
            "burger_name": $(burgerName).val(),
            "devoured": $(burgerName).data("eaten")
        };

        // Post request 
        $.post("/api/burger", burger).done((response)=>{
            location.reload(); 
        });
    });

    // Update burger to eaten
    $(".burgerBlock").on("click", function(event) {
        event.preventDefault();

        const burgerID = $(this).data("id");
        const devoured = $(this).data("eaten");
        const burgerUpdate = {
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

    $(".burgerBlockTwo").on("click", function (event) {
        event.preventDefault();
        // console.log("You clicked to add a burger");
        // if (!$(burgerName).val().trim()) return alert('burger name cannot be blank');

        // Sent this burger to the back 
        const burger = {
            "burger_name": $(burgerName).val(),
            "devoured": $(burgerName).data("eaten")
        };

        // Post request 
        $.post("/api/burger", burger).done((response) => {
            location.reload();
        });
    });
});