let player;
const playerContainer = $('.player');

let eventsInit = () => {
    $(".player__start").click(e => {
        e.preventDefault();

        if (playerContainer.hasClass('paused')) {
            playerContainer.removeClass("paused");
            player.pauseVideo()

        } else {
            playerContainer.addClass("paused");
            player.playVideo()
        }
    });

    $(".played__playback").click(e => {
        const bar = $(e.CurrentTarget);
        const clickedPosition = e.originalEvent.layerX
        const newbuttonPositionPercent = (clickedPosition / bar.width()) * 100;

        $(".player__playback-button").css({
            left: '${newButtonPositionPercent}%'
        });
        
    })
};

//const formatTime = timeSec => {
  //  const roundTime = Math.round(timeSec);

    //const minutes = addZero (Math.floor(roundTime / 60));
//    const seconds = addZero(roundTime - minutes * 60);

  //  function addZero(num) {
    //    return num <10 ? '0${num}' : num;
    //}

    //return '${minutes} : ${seconds}';
//}

const onPlayerReady = () => {
    let interval;
    const durationSec = player.getDuration();

    $(".player__duration-estimate").text(formatTime(durationSec));

    if (typeof interval != 'undefined') {
        interval = setInterval(() => {
            const completedSec = player.CurrentTime();
            const completedPercent = (completedSec / durationSec) * 100;

            $(".player__playback-button").css({
                left: '${completedPercent}%'
            });

            $(".player__duration-completed").text(formatTime(completedSec));
        }, 1000);
    }
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player("yt__player", {
        height: "233",
        width: "394",
        videoId: "tCEwTW_2TR4",
        events: {
           
        },
        playerVars: {
            controls: 0,
            disablekb: 1,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 0
        }
    });
}

eventsInit();