

$.ajax({
    method: GET,
    url: "https://api.spotify.com/v1/me/player/recently-played",
    client_id: "57bebce4bd80406cbe48eaef036ab7f1",
    scope: "user-read-recentlyplayed"
}).done(function(result){
    $("#p3").append(result);
});

