console.log("Script Loaded!")
var videoList = document.getElementById("video-list");

var http = new XMLHttpRequest();
http.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist", true);
http.onreadystatechange = function() {
    if(this.readyState === 4) {
        var response = JSON.parse(this.responseText);
        console.log(response);
        if(response.length > 0) {
            for(var i=0; i<response.length;i++) {
                // <div class="video-card">
                //     <img class="thumbnail" src="https://i.ytimg.com/vi/uVteeLDOlyk/maxresdefault.jpg" alt="Thumbnail" />
                //     <h3 class="title">How to get thumbnails from any youtube videos?</h3>
                // </div>
                var thumbnail = document.createElement("img")
                thumbnail.src = response[i].thumbnail

                videoList.appendChild(thumbnail);
            }
        }
    }
}
http.send();