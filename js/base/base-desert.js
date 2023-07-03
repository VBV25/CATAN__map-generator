//кнопка генерации карты
const generateMapGexButton = document.getElementById('generateMapGex');

//каждый гекс карты
const gex1 = document.getElementById('gex1');
const gex2 = document.getElementById('gex2');
const gex3 = document.getElementById('gex3');
const gex4 = document.getElementById('gex4');
const gex5 = document.getElementById('gex5');
const gex6 = document.getElementById('gex6');
const gex7 = document.getElementById('gex7');
const gex8 = document.getElementById('gex8');
const gex9 = document.getElementById('gex9');

const gex11 = document.getElementById('gex11');
const gex12 = document.getElementById('gex12');
const gex13 = document.getElementById('gex13');
const gex14 = document.getElementById('gex14');
const gex15 = document.getElementById('gex15');
const gex16 = document.getElementById('gex16');
const gex17 = document.getElementById('gex17');
const gex18 = document.getElementById('gex18');
const gex19 = document.getElementById('gex19');

const numberGexMapArr = [1, 2, 3, 4, 5];
/*-значения:
     ключь-номер по порядку
свойство- название ресурса гекса
    1 - дерево(4шт)
    2 - рожь (4шт)
    3 - бараны (4шт)
    4 - глина(3шт)
    5 - камень (3шт)

    пустыня не указана
    -*/

//функция генерации случайных чисел
function randomGexMap(min = 1, max = 5) {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
}
/*--------раскрас гексов----*/
function gexMapPicture() {
    //находим блоки гексов карты
    let mapGex = document.getElementsByClassName('map__gex');
    //создаем массив из данных блоков
    let gexMapDataAtr = Array.from(mapGex);
    //console.log(gexMapDataAtr);
    gexMapDataAtr.forEach(function(element) {
        let datasetGexMap = element.dataset.gex
        if (datasetGexMap == 1) {
            element.classList.remove('block2');
            element.classList.remove('block3');
            element.classList.remove('block4');
            element.classList.remove('block5');
            element.classList.add('block1');
            return false
        } else if (datasetGexMap == 2) {
            element.classList.remove('block1');
            element.classList.remove('block3');
            element.classList.remove('block4');
            element.classList.remove('block5');
            element.classList.add('block2');
            return false
        } else if (datasetGexMap == 3) {
            element.classList.remove('block1');
            element.classList.remove('block2');
            element.classList.remove('block4');
            element.classList.remove('block5');
            element.classList.add('block3');
            return false
        } else if (datasetGexMap == 4) {
            element.classList.remove('block1');
            element.classList.remove('block2');
            element.classList.remove('block3');
            element.classList.remove('block5');
            element.classList.add('block4');
            return false
        } else if (datasetGexMap == 5) {
            element.classList.remove('block1');
            element.classList.remove('block2');
            element.classList.remove('block4');
            element.classList.remove('block3');
            element.classList.add('block5');
            return false
        }
    })
    return false
}
gexMapPicture();
/*-------------------------*/

/*------------------КЛИК-ФУНКЦИЯ--------------------------*/
generateMapGexButton.onclick = function() {
    /*------начальные данные генерации-*/
    const objectGexMapArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 5]
    let propertyRandomkeysObjectGexMap;
    let keyObjectGexMap;

    function objectGexMapArrForRandom() {
        let keysObjectGexMap = Object.keys(objectGexMapArr)
        let randomObjectGexMapArr = Math.floor(Math.random() * keysObjectGexMap.length)
        keyObjectGexMap = keysObjectGexMap[randomObjectGexMapArr]
        for (j = 0; j < keysObjectGexMap.length; j++) {
            if (keysObjectGexMap[j] == keyObjectGexMap) {
                propertyRandomkeysObjectGexMap = objectGexMapArr[keysObjectGexMap[j]]
            }
        }
    }
    /*------------------------------------------*/
    objectGexMapArrForRandom()
    gex1.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    objectGexMapArr.splice(keyObjectGexMap, 1)

    //---2--
    objectGexMapArrForRandom()
    gex2.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex2.dataset.gex === gex1.dataset.gex) {
        let new2NumGexMapDataset = objectGexMapArr.find(el => el != gex1.dataset.gex)
        let new2NumGexMapDatasetIndex = objectGexMapArr.findIndex(el => el != gex1.dataset.gex)
        gex2.setAttribute('data-gex', new2NumGexMapDataset)
        objectGexMapArr.splice(new2NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }

    //----3---
    objectGexMapArrForRandom()
    gex3.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex3.dataset.gex === gex1.dataset.gex || gex3.dataset.gex === gex2.dataset.gex) {
        let new3NumGexMapDataset = numberGexMapArr.find(el => el != gex1.dataset.gex && el != gex2.dataset.gex)
        let new3NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex1.dataset.gex && el != gex2.dataset.gex)
        gex3.setAttribute('data-gex', new3NumGexMapDataset)
        objectGexMapArr.splice(new3NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----4---
    objectGexMapArrForRandom()
    gex4.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex4.dataset.gex === gex1.dataset.gex || gex4.dataset.gex === gex2.dataset.gex || gex4.dataset.gex === gex3.dataset.gex) {
        let new4NumGexMapDataset = numberGexMapArr.find(el => el != gex1.dataset.gex && el != gex2.dataset.gex && el != gex3.dataset.gex)
        let new4NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex1.dataset.gex && el != gex2.dataset.gex && el != gex3.dataset.gex)
        gex4.setAttribute('data-gex', new4NumGexMapDataset)
        objectGexMapArr.splice(new4NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----5---
    objectGexMapArrForRandom()
    gex5.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex5.dataset.gex === gex1.dataset.gex || gex5.dataset.gex === gex2.dataset.gex || gex5.dataset.gex === gex3.dataset.gex || gex5.dataset.gex === gex4.dataset.gex) {
        let new5NumGexMapDataset = numberGexMapArr.find(el => el != gex1.dataset.gex && el != gex2.dataset.gex && el != gex3.dataset.gex && el != gex4.dataset.gex)
        let new5NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex1.dataset.gex && el != gex2.dataset.gex && el != gex3.dataset.gex && el != gex4.dataset.gex)
        gex5.setAttribute('data-gex', new5NumGexMapDataset)
        objectGexMapArr.splice(new5NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----6---
    objectGexMapArrForRandom()
    gex6.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex6.dataset.gex === gex2.dataset.gex || gex6.dataset.gex === gex3.dataset.gex || gex6.dataset.gex === gex4.dataset.gex || gex6.dataset.gex === gex5.dataset.gex) {
        let new6NumGexMapDataset = numberGexMapArr.find(el => el != gex2.dataset.gex && el != gex3.dataset.gex && el != gex4.dataset.gex && el != gex5.dataset.gex)
        let new6NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex2.dataset.gex && el != gex3.dataset.gex && el != gex4.dataset.gex && el != gex5.dataset.gex)
        gex6.setAttribute('data-gex', new6NumGexMapDataset)
        objectGexMapArr.splice(new6NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----7---
    objectGexMapArrForRandom()
    gex7.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex7.dataset.gex === gex3.dataset.gex || gex7.dataset.gex === gex4.dataset.gex || gex7.dataset.gex === gex5.dataset.gex || gex7.dataset.gex === gex6.dataset.gex) {
        let new7NumGexMapDataset = numberGexMapArr.find(el => el != gex3.dataset.gex && el != gex4.dataset.gex && el != gex5.dataset.gex && el != gex6.dataset.gex)
        let new7NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex3.dataset.gex && el != gex4.dataset.gex && el != gex5.dataset.gex && el != gex6.dataset.gex)
        gex7.setAttribute('data-gex', new7NumGexMapDataset)
        objectGexMapArr.splice(new7NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----8---
    objectGexMapArrForRandom()
    gex8.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex8.dataset.gex === gex4.dataset.gex || gex8.dataset.gex === gex5.dataset.gex || gex8.dataset.gex === gex6.dataset.gex || gex8.dataset.gex === gex7.dataset.gex) {
        let new8NumGexMapDataset = numberGexMapArr.find(el => el != gex4.dataset.gex && el != gex5.dataset.gex && el != gex6.dataset.gex && el != gex7.dataset.gex)
        let new8NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex4.dataset.gex && el != gex5.dataset.gex && el != gex6.dataset.gex && el != gex7.dataset.gex)
        gex8.setAttribute('data-gex', new8NumGexMapDataset)
        objectGexMapArr.splice(new8NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----9---
    objectGexMapArrForRandom()
    gex9.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex9.dataset.gex === gex4.dataset.gex || gex9.dataset.gex === gex5.dataset.gex || gex9.dataset.gex === gex6.dataset.gex || gex9.dataset.gex === gex8.dataset.gex) {
        let new9NumGexMapDataset = numberGexMapArr.find(el => el != gex4.dataset.gex && el != gex5.dataset.gex && el != gex6.dataset.gex && el != gex8.dataset.gex)
        let new9NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex4.dataset.gex && el != gex5.dataset.gex && el != gex6.dataset.gex && el != gex8.dataset.gex)
        gex9.setAttribute('data-gex', new9NumGexMapDataset)
        objectGexMapArr.splice(new9NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----11---
    objectGexMapArrForRandom()
    gex11.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex11.dataset.gex === gex6.dataset.gex || gex11.dataset.gex === gex7.dataset.gex || gex11.dataset.gex === gex8.dataset.gex || gex11.dataset.gex === gex9.dataset.gex) {
        let new11NumGexMapDataset = numberGexMapArr.find(el => el != gex6.dataset.gex && el != gex7.dataset.gex && el != gex8.dataset.gex && el != gex9.dataset.gex)
        let new11NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex6.dataset.gex && el != gex7.dataset.gex && el != gex8.dataset.gex && el != gex9.dataset.gex)
        gex11.setAttribute('data-gex', new11NumGexMapDataset)
        objectGexMapArr.splice(new11NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----12---
    objectGexMapArrForRandom()
    gex12.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex12.dataset.gex === gex7.dataset.gex || gex12.dataset.gex === gex8.dataset.gex || gex12.dataset.gex === gex9.dataset.gex || gex12.dataset.gex === gex11.dataset.gex) {
        let new12NumGexMapDataset = numberGexMapArr.find(el => el != gex7.dataset.gex && el != gex8.dataset.gex && el != gex9.dataset.gex && el != gex11.dataset.gex)
        let new12NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex7.dataset.gex && el != gex8.dataset.gex && el != gex9.dataset.gex && el != gex11.dataset.gex)
        gex12.setAttribute('data-gex', new12NumGexMapDataset)
        objectGexMapArr.splice(new12NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----13---
    objectGexMapArrForRandom()
    gex13.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex13.dataset.gex === gex8.dataset.gex || gex13.dataset.gex === gex9.dataset.gex || gex13.dataset.gex === gex11.dataset.gex || gex13.dataset.gex === gex12.dataset.gex) {
        let new13NumGexMapDataset = numberGexMapArr.find(el => el != gex8.dataset.gex && el != gex9.dataset.gex && el != gex11.dataset.gex && el != gex12.dataset.gex)
        let new13NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex8.dataset.gex && el != gex9.dataset.gex && el != gex11.dataset.gex && el != gex12.dataset.gex)
        gex13.setAttribute('data-gex', new13NumGexMapDataset)
        objectGexMapArr.splice(new13NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----14---
    objectGexMapArrForRandom()
    gex14.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex14.dataset.gex === gex9.dataset.gex || gex14.dataset.gex === gex11.dataset.gex || gex14.dataset.gex === gex12.dataset.gex || gex14.dataset.gex === gex13.dataset.gex) {
        let new14NumGexMapDataset = numberGexMapArr.find(el => el != gex9.dataset.gex && el != gex11.dataset.gex && el != gex12.dataset.gex && el != gex13.dataset.gex)
        let new14NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex9.dataset.gex && el != gex11.dataset.gex && el != gex12.dataset.gex && el != gex13.dataset.gex)
        gex14.setAttribute('data-gex', new14NumGexMapDataset)
        objectGexMapArr.splice(new14NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----15---
    objectGexMapArrForRandom()
    gex15.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex15.dataset.gex === gex11.dataset.gex || gex15.dataset.gex === gex12.dataset.gex || gex15.dataset.gex === gex13.dataset.gex || gex15.dataset.gex === gex14.dataset.gex) {
        let new15NumGexMapDataset = numberGexMapArr.find(el => el != gex11.dataset.gex && el != gex12.dataset.gex && el != gex13.dataset.gex && el != gex14.dataset.gex)
        let new15NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex11.dataset.gex && el != gex12.dataset.gex && el != gex13.dataset.gex && el != gex14.dataset.gex)
        gex15.setAttribute('data-gex', new15NumGexMapDataset)
        objectGexMapArr.splice(new15NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----16---
    objectGexMapArrForRandom()
    gex16.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex16.dataset.gex === gex11.dataset.gex || gex16.dataset.gex === gex12.dataset.gex || gex16.dataset.gex === gex14.dataset.gex || gex16.dataset.gex === gex15.dataset.gex) {
        let new16NumGexMapDataset = numberGexMapArr.find(el => el != gex11.dataset.gex && el != gex12.dataset.gex && el != gex14.dataset.gex && el != gex15.dataset.gex)
        let new16NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex11.dataset.gex && el != gex12.dataset.gex && el != gex14.dataset.gex && el != gex15.dataset.gex)
        gex16.setAttribute('data-gex', new16NumGexMapDataset)
        objectGexMapArr.splice(new16NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----17---
    objectGexMapArrForRandom()
    gex17.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex17.dataset.gex === gex13.dataset.gex || gex17.dataset.gex === gex14.dataset.gex || gex17.dataset.gex === gex15.dataset.gex || gex17.dataset.gex === gex16.dataset.gex) {
        let new17NumGexMapDataset = numberGexMapArr.find(el => el != gex13.dataset.gex && el != gex14.dataset.gex && el != gex15.dataset.gex && el != gex16.dataset.gex)
        let new17NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex13.dataset.gex && el != gex14.dataset.gex && el != gex15.dataset.gex && el != gex16.dataset.gex)
        gex17.setAttribute('data-gex', new17NumGexMapDataset)
        objectGexMapArr.splice(new17NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----18---
    objectGexMapArrForRandom()
    gex18.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex18.dataset.gex === gex14.dataset.gex || gex18.dataset.gex === gex15.dataset.gex || gex18.dataset.gex === gex16.dataset.gex || gex18.dataset.gex === gex17.dataset.gex) {
        let new18NumGexMapDataset = numberGexMapArr.find(el => el != gex14.dataset.gex && el != gex15.dataset.gex && el != gex16.dataset.gex && el != gex17.dataset.gex)
        let new18NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex14.dataset.gex && el != gex15.dataset.gex && el != gex16.dataset.gex && el != gex17.dataset.gex)
        gex18.setAttribute('data-gex', new18NumGexMapDataset)
        objectGexMapArr.splice(new18NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----19---
    objectGexMapArrForRandom()
    gex19.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex19.dataset.gex === gex15.dataset.gex || gex19.dataset.gex === gex16.dataset.gex || gex19.dataset.gex === gex17.dataset.gex || gex19.dataset.gex === gex18.dataset.gex) {
        let new19NumGexMapDataset = numberGexMapArr.find(el => el != gex15.dataset.gex && el != gex16.dataset.gex && el != gex17.dataset.gex && el != gex18.dataset.gex)
        let new19NumGexMapDatasetIndex = numberGexMapArr.findIndex(el => el != gex15.dataset.gex && el != gex16.dataset.gex && el != gex17.dataset.gex && el != gex18.dataset.gex)
        gex19.setAttribute('data-gex', new19NumGexMapDataset)
        objectGexMapArr.splice(new19NumGexMapDatasetIndex, 1)
    } else {
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }

    /*---Смена изображений в соответствии со значением атрибута----*/
    setTimeout(gexMapPicture(), 1000)
}