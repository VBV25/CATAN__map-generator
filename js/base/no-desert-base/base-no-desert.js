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
const gex10 = document.getElementById('gex10');
const gex11 = document.getElementById('gex11');
const gex12 = document.getElementById('gex12');
const gex13 = document.getElementById('gex13');
const gex14 = document.getElementById('gex14');
const gex15 = document.getElementById('gex15');
const gex16 = document.getElementById('gex16');
const gex17 = document.getElementById('gex17');
const gex18 = document.getElementById('gex18');
const gex19 = document.getElementById('gex19');

/*-значения:
     ключь-номер по порядку
свойство- название ресурса гекса
    1 - дерево(4шт)
    2 - рожь (4шт)
    3 - бараны (4шт)
    4 - глина(3шт)
    5 - камень (4шт)

    пустыня не указана
    -*/
/*
//функция генерации случайных чисел
function randomGexMap(min = 1, max = 5) {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
}
*/

/*--------раскрас гексов----*/
function gexMapPicture() {
    //находим блоки гексов карты
    let mapGex = document.getElementsByClassName('map__gex');
    //создаем массив из данных блоков
    let gexMapDataAtr = Array.from(mapGex);
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

/*-----------НОВЫЕ МАССИВЫ СГЕНЕРИРОВАННОЙ КАРТЫ--------*/
//---новый массив гексов сформированной карты---
let newMapQuantityGexArray = []

//массив гексов с деревом
let treeGexArray = Array.from([])
let quantityTreeGexArray = treeGexArray.length
    //массив гексов ржи
let ryeGexArray = Array.from([])
let quantityRyeGexArray = ryeGexArray.length
    //массив гексов с баранами
let ramsGexArray = Array.from([])
let quantityRamsGexArray = ramsGexArray.length
    //массив гексов с глиной
let clayGexArray = Array.from([])
let quantityClayGexArray = clayGexArray.length
    //массив с камнем
let stoneGexArray = Array.from([])
let quantityStoneGexArray = stoneGexArray.length

//заполнение массивов с конкретным ресурсом
let allGexMap
let allGexMapArray

//---сортировка гексов по классам ресурсов(дерево,бараны,рожь,глина,камень)
function populatingArrayEachResource() {
    let allGexMap = document.getElementsByClassName('map__gex');
    let allGexMapArray = Array.from(allGexMap)
    allGexMapArray.forEach(function(element) {
            let elementGexMap = element
            if (element.classList.contains('block1')) {
                treeGexArray.push(elementGexMap)
            } else if (element.classList.contains('block2')) {
                ramsGexArray.push(elementGexMap)
            } else if (element.classList.contains('block3')) {
                ryeGexArray.push(elementGexMap)
            } else if (element.classList.contains('block4')) {
                clayGexArray.push(elementGexMap)
            } else {
                stoneGexArray.push(elementGexMap)
            }
        })
        //количество объектов в каждом из сортированных массивов
    quantityTreeGexArray = treeGexArray.length
    quantityRyeGexArray = ryeGexArray.length
    quantityRamsGexArray = ramsGexArray.length
    quantityClayGexArray = clayGexArray.length
    quantityStoneGexArray = stoneGexArray.length
}
//------------------------------------------------------

const objectGexMapArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    /*------------------КЛИК-ФУНКЦИЯ--------------------------*/
    //----ФУНКЦИЯ ГЕНЕРАЦИИ КАРТЫ---
function generateMapGex() {
    /*------начальные данные генерации-*/
    newMapQuantityGexArray = [];
    const objectGexMapArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    let propertyRandomkeysObjectGexMap;
    let keyObjectGexMap;
    //--получение рандомного числа из массива--
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

    //---1--
    objectGexMapArrForRandom()
    gex1.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    objectGexMapArr.splice(keyObjectGexMap, 1)
    newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)

    //---2--
    objectGexMapArrForRandom()
    gex2.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex2.dataset.gex === gex1.dataset.gex) {
        let new2NumGexMapDatasetIndex;
        let new2NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex1.dataset.gex) {
                new2NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex2.setAttribute('data-gex', new2NumGexMapDataset)
        objectGexMapArr.splice(new2NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new2NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }

    //----3---
    objectGexMapArrForRandom()
    gex3.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex3.dataset.gex === gex1.dataset.gex || gex3.dataset.gex === gex2.dataset.gex) {
        let new3NumGexMapDatasetIndex;
        let new3NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex1.dataset.gex && item != gex2.dataset.gex) {
                new3NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex3.setAttribute('data-gex', new3NumGexMapDataset)
        objectGexMapArr.splice(new3NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new3NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----4---
    objectGexMapArrForRandom()
    gex4.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex4.dataset.gex === gex1.dataset.gex || gex4.dataset.gex === gex2.dataset.gex || gex4.dataset.gex === gex3.dataset.gex) {
        let new4NumGexMapDatasetIndex;
        let new4NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex1.dataset.gex && item != gex2.dataset.gex && item != gex3.dataset.gex) {
                new4NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex4.setAttribute('data-gex', new4NumGexMapDataset)
        objectGexMapArr.splice(new4NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new4NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----5---
    objectGexMapArrForRandom()
    gex5.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex5.dataset.gex === gex1.dataset.gex || gex5.dataset.gex === gex2.dataset.gex || gex5.dataset.gex === gex3.dataset.gex || gex5.dataset.gex === gex4.dataset.gex) {
        let new5NumGexMapDatasetIndex;
        let new5NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex1.dataset.gex && item != gex2.dataset.gex && item != gex3.dataset.gex && item != gex4.dataset.gex) {
                new5NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex5.setAttribute('data-gex', new5NumGexMapDataset)
        objectGexMapArr.splice(new5NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new5NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----6---
    objectGexMapArrForRandom()
    gex6.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex6.dataset.gex === gex2.dataset.gex || gex6.dataset.gex === gex3.dataset.gex || gex6.dataset.gex === gex4.dataset.gex || gex6.dataset.gex === gex5.dataset.gex) {
        let new6NumGexMapDatasetIndex;
        let new6NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex2.dataset.gex && item != gex3.dataset.gex && item != gex4.dataset.gex && item != gex5.dataset.gex) {
                new6NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex6.setAttribute('data-gex', new6NumGexMapDataset)
        objectGexMapArr.splice(new6NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new6NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----7---
    objectGexMapArrForRandom()
    gex7.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex7.dataset.gex === gex3.dataset.gex || gex7.dataset.gex === gex4.dataset.gex || gex7.dataset.gex === gex5.dataset.gex || gex7.dataset.gex === gex6.dataset.gex) {
        let new7NumGexMapDatasetIndex;
        let new7NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex3.dataset.gex && item != gex4.dataset.gex && item != gex5.dataset.gex && item != gex6.dataset.gex) {
                new7NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex7.setAttribute('data-gex', new7NumGexMapDataset)
        objectGexMapArr.splice(new7NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new7NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----8---
    objectGexMapArrForRandom()
    gex8.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex8.dataset.gex === gex4.dataset.gex || gex8.dataset.gex === gex5.dataset.gex || gex8.dataset.gex === gex6.dataset.gex || gex8.dataset.gex === gex7.dataset.gex) {
        let new8NumGexMapDatasetIndex;
        let new8NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex4.dataset.gex && item != gex5.dataset.gex && item != gex6.dataset.gex && item != gex7.dataset.gex) {
                new8NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex8.setAttribute('data-gex', new8NumGexMapDataset)
        objectGexMapArr.splice(new8NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new8NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----9---
    objectGexMapArrForRandom()
    gex9.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex9.dataset.gex === gex4.dataset.gex || gex9.dataset.gex === gex5.dataset.gex || gex9.dataset.gex === gex6.dataset.gex || gex9.dataset.gex === gex8.dataset.gex) {
        let new9NumGexMapDatasetIndex;
        let new9NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex4.dataset.gex && item != gex5.dataset.gex && item != gex6.dataset.gex && item != gex8.dataset.gex) {
                new9NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex9.setAttribute('data-gex', new9NumGexMapDataset)
        objectGexMapArr.splice(new9NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new9NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----10---
    objectGexMapArrForRandom()
    gex10.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex10.dataset.gex === gex5.dataset.gex || gex10.dataset.gex === gex7.dataset.gex || gex10.dataset.gex === gex6.dataset.gex || gex10.dataset.gex === gex9.dataset.gex) {
        let new10NumGexMapDatasetIndex;
        let new10NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex5.dataset.gex && item != gex6.dataset.gex && item != gex7.dataset.gex && item != gex9.dataset.gex) {
                new10NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex10.setAttribute('data-gex', new10NumGexMapDataset)
        objectGexMapArr.splice(new10NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new10NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----11---
    objectGexMapArrForRandom()
    gex11.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex11.dataset.gex === gex6.dataset.gex || gex11.dataset.gex === gex7.dataset.gex || gex11.dataset.gex === gex9.dataset.gex || gex11.dataset.gex === gex10.dataset.gex) {
        let new11NumGexMapDatasetIndex;
        let new11NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex6.dataset.gex && item != gex7.dataset.gex && item != gex9.dataset.gex && item != gex10.dataset.gex) {
                new11NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex11.setAttribute('data-gex', new11NumGexMapDataset)
        objectGexMapArr.splice(new11NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new11NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----12---
    objectGexMapArrForRandom()
    gex12.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex12.dataset.gex === gex6.dataset.gex || gex12.dataset.gex === gex7.dataset.gex || gex12.dataset.gex === gex10.dataset.gex || gex12.dataset.gex === gex11.dataset.gex) {
        let new12NumGexMapDatasetIndex;
        let new12NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex6.dataset.gex && item != gex7.dataset.gex && item != gex10.dataset.gex && item != gex11.dataset.gex) {
                new12NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex12.setAttribute('data-gex', new12NumGexMapDataset)
        objectGexMapArr.splice(new12NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new12NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----13---
    objectGexMapArrForRandom()
    gex13.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex13.dataset.gex === gex8.dataset.gex || gex13.dataset.gex === gex9.dataset.gex || gex13.dataset.gex === gex10.dataset.gex || gex13.dataset.gex === gex11.dataset.gex) {
        let new13NumGexMapDatasetIndex;
        let new13NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex8.dataset.gex && item != gex9.dataset.gex && item != gex10.dataset.gex && item != gex11.dataset.gex) {
                new13NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex13.setAttribute('data-gex', new13NumGexMapDataset)
        objectGexMapArr.splice(new13NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new13NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----14---
    objectGexMapArrForRandom()
    gex14.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex14.dataset.gex === gex9.dataset.gex || gex14.dataset.gex === gex10.dataset.gex || gex14.dataset.gex === gex11.dataset.gex || gex14.dataset.gex === gex13.dataset.gex) {
        let new14NumGexMapDatasetIndex;
        let new14NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex9.dataset.gex && item != gex10.dataset.gex && item != gex11.dataset.gex && item != gex13.dataset.gex) {
                new14NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex14.setAttribute('data-gex', new14NumGexMapDataset)
        objectGexMapArr.splice(new14NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new14NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----15---
    objectGexMapArrForRandom()
    gex15.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex15.dataset.gex === gex11.dataset.gex || gex15.dataset.gex === gex12.dataset.gex || gex15.dataset.gex === gex10.dataset.gex || gex15.dataset.gex === gex14.dataset.gex) {
        let new15NumGexMapDatasetIndex;
        let new15NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex11.dataset.gex && item != gex12.dataset.gex && item != gex10.dataset.gex && item != gex14.dataset.gex) {
                new15NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex15.setAttribute('data-gex', new15NumGexMapDataset)
        objectGexMapArr.splice(new15NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new15NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----16---
    objectGexMapArrForRandom()
    gex16.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex16.dataset.gex === gex11.dataset.gex || gex16.dataset.gex === gex12.dataset.gex || gex16.dataset.gex === gex14.dataset.gex || gex16.dataset.gex === gex15.dataset.gex) {
        let new16NumGexMapDatasetIndex;
        let new16NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex11.dataset.gex && item != gex12.dataset.gex && item != gex14.dataset.gex && item != gex15.dataset.gex) {
                new16NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex16.setAttribute('data-gex', new16NumGexMapDataset)
        objectGexMapArr.splice(new16NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new16NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----17---
    objectGexMapArrForRandom()
    gex17.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex17.dataset.gex === gex13.dataset.gex || gex17.dataset.gex === gex14.dataset.gex || gex17.dataset.gex === gex15.dataset.gex) {
        let new17NumGexMapDatasetIndex;
        let new17NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex13.dataset.gex && item != gex14.dataset.gex && item != gex15.dataset.gex) {
                new17NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex17.setAttribute('data-gex', new17NumGexMapDataset)
        objectGexMapArr.splice(new17NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new17NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----18---
    objectGexMapArrForRandom()
    gex18.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex18.dataset.gex === gex14.dataset.gex || gex18.dataset.gex === gex15.dataset.gex || gex18.dataset.gex === gex16.dataset.gex || gex18.dataset.gex === gex17.dataset.gex) {
        let new18NumGexMapDatasetIndex;
        let new18NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex14.dataset.gex && item != gex15.dataset.gex && item != gex16.dataset.gex && item != gex17.dataset.gex) {
                new18NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex18.setAttribute('data-gex', new18NumGexMapDataset)
        objectGexMapArr.splice(new18NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new18NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }
    //----19---
    objectGexMapArrForRandom()
    gex19.setAttribute('data-gex', propertyRandomkeysObjectGexMap);
    if (gex19.dataset.gex === gex15.dataset.gex || gex19.dataset.gex === gex16.dataset.gex || gex19.dataset.gex === gex18.dataset.gex) {
        let new19NumGexMapDatasetIndex;
        let new19NumGexMapDataset = objectGexMapArr.find((item, index) => {
            if (item != gex15.dataset.gex && item != gex16.dataset.gex && item != gex18.dataset.gex) {
                new19NumGexMapDatasetIndex = index;
                return item
            }
        });
        gex19.setAttribute('data-gex', new19NumGexMapDataset)
        objectGexMapArr.splice(new19NumGexMapDatasetIndex, 1)
        newMapQuantityGexArray.push(new19NumGexMapDataset)
    } else {
        newMapQuantityGexArray.push(propertyRandomkeysObjectGexMap)
        objectGexMapArr.splice(keyObjectGexMap, 1);
    }

    /*---Смена изображений в соответствии со значением атрибута----*/
    setTimeout(gexMapPicture(), 1000)
    populatingArrayEachResource()
        //
        //return newMapQuantityGexArray


}


generateMapGexButton.onclick = function() {
    treeGexArray = []
    ryeGexArray = []
    ramsGexArray = []
    clayGexArray = []
    stoneGexArray = []
    generateMapGex()
        // console.log('массив: ' + treeGexArray);
        // console.log('количество элементов в массиве: ' + quantityTreeGexArray);
    while (quantityTreeGexArray === 5 || quantityRyeGexArray === 5 ||
        quantityRamsGexArray === 5 ||
        quantityClayGexArray === 5 ||
        quantityStoneGexArray === 5 || quantityRyeGexArray === 3 || quantityRamsGexArray === 3 || quantityStoneGexArray === 3 || quantityTreeGexArray === 3) {
        treeGexArray = []
        ryeGexArray = []
        ramsGexArray = []
        clayGexArray = []
        stoneGexArray = []
        generateMapGex()
    }
}