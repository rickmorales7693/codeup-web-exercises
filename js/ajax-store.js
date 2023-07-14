$(() => {

    function refresh(){
        $.ajax("data/inventory.json").done(function (data) {
            console.log(data);
            let html = " ";
            data.forEach(function (product) {
                html += "<tr>";
                html += "<td>" + product.title + "</td>";
                html += "<td>" + product.quantity + "</td>";
                html += "<td>" + product.price + "</td>";
                html += "<td>" + product.categories + "</td>";
                html += "</tr>";
            });
            $("#insertProducts").html(html);
        });
    }

    refresh();

    $("#refresh").click(function () {
        refresh();
    });



})