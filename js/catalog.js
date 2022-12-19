$(() => {
    const mesureWidth = (item) => {
        let reqItemWidth = 0;

        const screenWidth = $(window).width();
        const container = item.closest(".catalog__menu");
        const titlesBlocks = container.find(".catalog__menu-title");
        const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

        const textContainer = item.find(".catalog__menu-container");
        const paddingLeft = parseInt(textContainer.css("padding-left"));
        const paddingRight = parseInt(textContainer.css("padding-right"));

        const isTablets = window.matchMedia("(max-width: 768px)").matches;
        const isMobile = window.matchMedia("(max-width: 480px)").matches;

        if(isTablets) {
            reqItemWidth = screenWidth = titlesWidth;
        }

        if (isMobile) {
            reqItemWidth = screenWidth - titlesWidth.width();
        }  
        if (!isTablets && !isMobile){
            reqItemWidth = 500;
        }

        return {
            container: reqItemWidth,
            textContainer: reqItemWidth - paddingRight - paddingLeft
        }
    };

    const closeEveryItemInContainer = container => {
        //const item = container.find(".catalog__menu-item");
        //const hiddenContent = container.find(".catalog__menu-content");
        //const reqWidth = mesureWidth();

        //item.removeClass("active");
        //hiddenContent.width(reqWidth.container);

        const elems = container.find(".colors__menu-item");
        const contentBlock = container.find(".catalog__menu-content");

        elems.removeClass("active");
        contentBlock.width(0);
    }

    const openItem = item => {
        const hiddenContent = item.find(".catalog__menu-content");
        const reqWidth = mesureWidth(item);
        const textBlock = item.find(".catalog__menu-container");

        item.addClass("active");
        hiddenContent.width(reqWidth.container);
        textBlock.width(reqWidth.textContainer);

    }
    $(".catalog__menu-title").on("click", e => {
        e.preventDefault();

        const $this = $(e.currentTarget);
        const item = $this.closest(".catalog__menu-item");
        const itemOpened = item.hasClass("active");
        const container = $this.closest(".catalog__menu")

        if (itemOpened) {
            closeEveryItemInContainer(container)
        } else {
            closeEveryItemInContainer(container)
            openItem(item);
        }


    });
});