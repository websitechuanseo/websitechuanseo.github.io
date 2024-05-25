$(document).ready(function(){
    $('#form').on('submit', function(){
        console.log('submited');
        // return false;
        var eventsholded = [
            {"name" : "Thanh Long",
            "number" : "9",
            "size" : "XL"}
        ];
        $.ajax({
            type: "GET",
            dataType : 'json',
            async: false,
            url: 'book/book.json',
            data: { data: JSON.stringify(eventsholded) },
            success: function () {alert("Thanks!"); },
            failure: function() {alert("Error!");}
        });
        console.log('submited');
        return false;
    });
});