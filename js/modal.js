const validateFields = (form, filedArray) => {
    filedArray.forEach(field => {
        field.removeClass("input-error");
        if (field.val().trim == "") {
            field.addClass("input-error");
        }
    });

    const errorFields = form.find(".input-error");

    return errorFields.length == 0;
}
$('.form').on('submit', e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal = $("#modal");
    const content = modal.find(".modal__content");

    modal.addClass("error-modal");

    const isValid = validateFields(form, [name, phone, comment, to]);

    if (isValid) {
        const request = $.ajax({
            url: "",
            method: "post",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val(),
            },
            error: data => {
                const message = data.responseJSON.message;
                content.text(message);
                modal.addClass("error-modal");

                $.fancybox.open({
                    src: "#modal",
                    type: "inline"
                });
            }
        });
        request.done((data) => {
            content.text(data.message);
        });
    }
    request.fail(data => {
        const message = data.responseJSON.message;
        content.text(message);
        modal.addClass("error-modal");

        $.fancybox.open({
            src: "#modal",
            type: "inline"
        });
    });
    request.always(() => {
        $.fancybox.open({
            src: "#modal",
            type: "inline"
        });
    })
});

$('.app-submit-btn').on('click', e => {
    e.preventDefault();

    $.fancybox.close();
});