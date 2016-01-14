//var playerObj;
function changeVideo(referenceID, playerID) {
    var playerObj;

    videojs(playerID).ready(function () { playerObj = this; });
    $('#' + playerID).bind('contextmenu', function () { return false; });
    playerObj.catalog.getVideo('ref:' + referenceID, function (error, video) {
        playerObj.catalog.load(video);
        //playerObj.play();
    });
    //$("html, body").animate({ scrollTop: 0 }, 300);
}