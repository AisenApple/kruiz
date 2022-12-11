$('.form').on('submit', e => {
    e.preventDefault();

    $.fancybox.open({
        src: "#modal",
        type: "inline"
    })
});

$('.app-submit-btn').on('click', e => {
    e.preventDefault();

    $.fancybox.close();
});