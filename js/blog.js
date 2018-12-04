$("#js-topics").on("click", "a", function(){
    var topic = $(this).attr('data-topic');
    history.pushState(null, null, "/tutorials/#" + topic);
    showTopic(topic);
});

$(document).ready(function(e) {
    getTopic();
});

$(window).on('popstate', function(e) {
    getTopic();
});

function getTopic(){
    var topic = window.location.hash.split("#")[1];
    if(topic) showTopic(topic);
    else $("section.blog-posts").show();
}
function showTopic(topic){
    $("section.blog-posts").hide();
    $("section." + topic).show();
}
