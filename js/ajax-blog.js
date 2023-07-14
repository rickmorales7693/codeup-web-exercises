$(()=> {
    $.ajax("data/blog.json").done(function (data){
        console.log(data);
        let html = " ";
        data.forEach(function (blog) {
            html += "<h2>" + blog.title + "</h2>";
            html += "<h4>" + blog.date + "</h4>";
            html += "<p>" + blog.content + "</p>";
            html += "<p>" + blog.categories + "</p>";
        });
        $("#insertBlogs").html(html);
    });


















});