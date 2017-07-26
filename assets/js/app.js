
$.ajax({
    method: 'GET',
    url: "https://accounts.spotify.com/authorize",
    response_type: 'code',
     headers: {
            'Authorization': 'Bearer ' + 'access_token'
        },
    client_id: "4d65d408f60a49898178c1c1e6e8688b",
    redirect_uri: 'https://api.spotify.com/v1/me/player/recently-played',
    scope: "user-read-recently-played",
    limit: '5'
}).done(function(result){
    $("#main").append(result);
});

$.ajax(
  {
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    data: {
      grant_type:    "authorization_code",
      code:          'code',
      redirect_uri:  'https://api.spotify.com/v1/me/player/recently-played',
      client_secret: 'fb08053d24cd498ead5f5d52e7e28e37',
      contentType:     'application/json',
      client_id:     '4d65d408f60a49898178c1c1e6e8688b'
    },
    success: function(result) {
      $("#main").append(result);
    },
  }
);