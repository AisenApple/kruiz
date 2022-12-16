const mesureWidth = (item) => {
    let reqItemWidth = 0;

    const screenWidth = $(window).width();
    const container = item.closest(".catalog__menu");
    const titlesBlocks = container.find(".catalog__menu-title");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
    
    const textContainer = item.find(".catalog__menu-container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        reqItemWidth = screenWidth - titlesWidth;
    } else {
        reqItemWidth = 500;
    }

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingRight - paddingLeft
    }
};

const closeEveryItemInContainer = container => {
    const item = container.find(".catalog__menu-item");
    const content = container.find(".catalog__menu-content");

    items.removeClass("active");
    hiddenContent.width(reqWidth.container);
}

const openItem = item => {
    const hiddenContent = item.find(".catalog__menu-content");
    const reqWidth = mesureWidth();
    const textBlock = item.find(".catalog__menu-container");

    item.addClass("acive");
    hiddenContent.width(reqWidth);
    textBlock.width(reqWidth.textContainer);

}
$(".catalog__menu__title").on("click", e =>{
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closet(".catalog__menu-item");
    const itemOpened = item.hasClass("active");
    const container = $this.closet(".catalog__menu")

    if (itemOpened) {
        closeEveryItemInContainer(container)
    } else {
        closeEveryItemInContainer(container)
        openItem(item);
    }

    
});