//кнопка генерации карты
const generateMapGexButton = document.getElementById('generateMapGex');
//поле для текста
const romainingNumberTokens = document.getElementById('romainingNumberTokens');
//каждый гекс карты
const gex0 = document.getElementById('gex0');
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
const gex20 = document.getElementById('gex20');
const gex21 = document.getElementById('gex21');
const gex22 = document.getElementById('gex22');
const gex23 = document.getElementById('gex23');

//ВСЕ блоки гексов карты
let allMapGex = Array.from(document.getElementsByClassName('map__gex'));

//КОЛЛИЧЕСТВО ВОЗМОЖНЫХ ГЕКСОВ КОНКРЕТНЫХ РЕСУРСОВ
const gexMapAtrNumberBase = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3]
    //клон массива
let gexMapAtrNumber = gexMapAtrNumberBase.slice(0)

/*-значения:
    1 - дерево(5шт)
    2 - рожь (5шт)
    3 - бараны (5шт)
    4 - глина(4шт)
    5 - камень (4шт)
-*/

/*-----------НОВЫЕ МАССИВЫ СГЕНЕРИРОВАННОЙ КАРТЫ--------*/
//---новый массив гексов сформированной карты---
let newMapQuantityGexArray = []
    //массив гексов с деревом
let treeGexArray = []
    //массив гексов ржи
let ryeGexArray = []
    //массив гексов с баранами
let ramsGexArray = []
    //массив гексов с глиной
let clayGexArray = []
    //массив с камнем
let stoneGexArray = []

//-----------раскрас гексов и сортировка----------
const gexMapPicture = (allMapGexArray) => {
    allMapGexArray.forEach((element) => {
        let datasetGexMap = element.dataset.gex
        element.classList.remove('block1');
        element.classList.remove('block2');
        element.classList.remove('block3');
        element.classList.remove('block4');
        element.classList.remove('block5');
        if (datasetGexMap == 1) {
            element.classList.add('block1');
            treeGexArray.push(element)
        }
        if (datasetGexMap == 2) {
            element.classList.add('block2');
            ramsGexArray.push(element)
        }
        if (datasetGexMap == 3) {
            element.classList.add('block3');
            ryeGexArray.push(element)
        }
        if (datasetGexMap == 4) {
            element.classList.add('block4');
            clayGexArray.push(element)
        }
        if (datasetGexMap == 5) {
            element.classList.add('block5');
            stoneGexArray.push(element)
        }
    })
}
gexMapPicture(allMapGex);

//--получение рандомного числа из массива и его индекса--
let randomIndexGexMapAtrNumber
let randomGexMapAtrNumber
const objectGexMapArrForRandom = () => {
    randomIndexGexMapAtrNumber = Math.floor(Math.random() * gexMapAtrNumber.length)
    randomGexMapAtrNumber = gexMapAtrNumber[randomIndexGexMapAtrNumber]
}

//----очистка массивов с ресурсами
const initialStateArrayGexRes = () => {
    treeGexArray = []
    ryeGexArray = []
    ramsGexArray = []
    clayGexArray = []
    stoneGexArray = []
}

//----Функция генерации рандомного гекса карты
//вместо gexSerialNumber --- подставляем гекс КОТОРЫЙ сравниваем (пример:gex1)
//вместо comparableGex... --- подставляем гексы с какими сравниваем (пример:gex2,gex3,gex4)
const mapGenerationGex = (gexSerialNumber, comparableGex1 = gex0, comparableGex2 = gex0, comparableGex3 = gex0, comparableGex4 = gex0) => {
    //let getAttributeGex = gexSerialNumber.getAttrubute('id')
    objectGexMapArrForRandom()
    gexSerialNumber.setAttribute('data-gex', randomGexMapAtrNumber);
    if (gexSerialNumber.dataset.gex === comparableGex1.dataset.gex || gexSerialNumber.dataset.gex === comparableGex2.dataset.gex || gexSerialNumber.dataset.gex === comparableGex3.dataset.gex || gexSerialNumber.dataset.gex === comparableGex4.dataset.gex || gexSerialNumber.dataset.gex === undefined) {
        let newNumGexMapDatasetIndex;
        let newNumGexMapDataset = gexMapAtrNumber.find((item, index) => {
            if (item != comparableGex1.dataset.gex && item != comparableGex2.dataset.gex && item != comparableGex3.dataset.gex && item != comparableGex4.dataset.gex && item != undefined) {
                newNumGexMapDatasetIndex = index;
                return item
            }
        });
        gexSerialNumber.setAttribute('data-gex', newNumGexMapDataset)
        gexMapAtrNumber.splice(newNumGexMapDatasetIndex, 1)
    } else {
        gexMapAtrNumber.splice(randomIndexGexMapAtrNumber, 1);
    }
}

//----ФУНКЦИЯ ГЕНЕРАЦИИ КАРТЫ---
const generateMap = () => {
    //-----Поочередное создание карты из ресурсов----

    //-----ЛЕВЫЙ-ВЕРХНИЙ-МАЛЫЙ-ОСТРОВ---
    //--1 гекс внизу--
    mapGenerationGex(gex2, gex1)
    mapGenerationGex(gex3, gex1, gex2)
    mapGenerationGex(gex4, gex1, gex2, gex3)

    //-----правый-нижний-МАЛЫЙ-ОСТРОВ---
    mapGenerationGex(gex5, gex1, gex2, gex3, gex6)
    mapGenerationGex(gex6, gex5)
    mapGenerationGex(gex7, gex5, gex6)
        //--8 гекс внизу--

    //-----правый-верхний-БОЛЬШОЙ-ОСТРОВ---
    mapGenerationGex(gex9, gex1, gex2, gex3, gex11)
    mapGenerationGex(gex10, gex9)
    mapGenerationGex(gex11, gex9, gex10)
    mapGenerationGex(gex12, gex9, gex10, gex11)
    mapGenerationGex(gex13, gex10, gex12)
    mapGenerationGex(gex14, gex9, gex10, gex11, gex12)
    mapGenerationGex(gex15, gex12, gex13, gex14)
        //16-крайний-ниже

    //-----левый-нижний-БОЛЬШОЙ-ОСТРОВ---
    mapGenerationGex(gex20)
    mapGenerationGex(gex18, gex20)
    mapGenerationGex(gex19, gex18, gex20)
    mapGenerationGex(gex22, gex19, gex20)
    mapGenerationGex(gex23, gex20, gex22)
    mapGenerationGex(gex17, gex18, gex19)
    mapGenerationGex(gex21, gex20, gex23)

    //---1---
    mapGenerationGex(gex1, gex2)

    //---16---
    mapGenerationGex(gex16, gex14)

    //---8---
    mapGenerationGex(gex8)

    //---Смена изображений в соответствии со значением атрибута----
    gexMapPicture(allMapGex)
}

/*------------------КЛИК-ФУНКЦИЯ--------------------------*/
generateMapGexButton.onclick = function() {
    romainingNumberTokens.textContent = ''
        //------начальные данные генерации---
        //очищаем массивы ресурсов
    initialStateArrayGexRes()
        //клон основного массива гексов
    gexMapAtrNumber = gexMapAtrNumberBase.slice(0)
        //заполнение карты ресурсами
    generateMap()
        //если камней 5
    if (stoneGexArray.length === 5) {
        romainingNumberTokens.textContent = '5 КАМНЕЙ'
    }
    //----ЕСЛИ РЕСУРСОВ БОЛЬШЕ ЧЕМ НУЖНО
    while (treeGexArray.length > 5 ||
        ryeGexArray.length > 5 ||
        ramsGexArray.length > 5 ||
        clayGexArray.length >= 5 ||
        stoneGexArray.length >= 5 ||
        gex16.dataset.gex == 'undefined' || gex8.dataset.gex == 'undefined' || gex1.dataset.gex == 'undefined'
    ) {
        romainingNumberTokens.textContent = ''
        initialStateArrayGexRes()
        gexMapAtrNumber = gexMapAtrNumberBase.slice(0)
        generateMap()
    }
}