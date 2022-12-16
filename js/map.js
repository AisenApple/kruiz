let myMap;

const init = () => {
    myMap = new ymaps.Map("map__box", {
       center: [45.049824, 38.969451],
       zoom: 7
    });

    const coords = [
        [45.049519, 38.969432],
        [45.051385, 38.970869],
        [45.049003, 38.962787],
        [45.050742, 38.968971]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'defailt#image',
        iconImageHref: "./img/marker.png",
        iconImageSize: [43, 55],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);
}

ymaps.ready(init);