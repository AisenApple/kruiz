const openItem = item => {
    const container = item.closet(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block")
    const reqHeight = textBlock.height();

    container.addClass("active");
    contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
    const items = container.find('.team__content');
    const itemContainer = container.find(".team__content");

    itemContainer.removeClass("active");
    items.height(0);
}

$('.team__title').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closet('.team');
    const elemContainer = $this.closet(".team__item");

    if (elemContainer.hasClass("active")) {
        closeEveryItem(container);
    }else {
        closeEveryItem(container);
        openItem($this);
    }
    
})