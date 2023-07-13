$(()=> {
    $.ajax("/data/blog.json").done(function (data){
        console.log(data);
        let html = " ";
        data.forEach(function (blog) {
            html += "<tr>";
            html += "<td>" + blog.title + "</td>";
            html += "<td>" + blog.content + "</td>";
            html += "<td>" + blog.categories + "</td>";
            html += "<td>" + blog.date + "</td>";
            html += "</tr>";
        });
        $("#insertBlogs").html(html);
    });


















});