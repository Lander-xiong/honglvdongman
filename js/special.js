$.ajax({
    type: "get",
    url: "http://127.0.0.1:9091/api/gettopics",
    success: function (data) {
        console.log(data);
        $('.main').html(template('sepecial-template', data));
    }
});
