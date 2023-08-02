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

//КОЛЛИЧЕСТВО ВОЗМОЖНЫХ ГЕКСОВ КОНКРЕТНЫХ РЕСУРСОВ
/*-значения:
    1 - дерево(5шт)
    2 - рожь (5шт)
    3 - бараны (5шт)
    4 - глина(4шт)
    5 - камень (4шт)
-*/
const gexMapAtrNumberBase = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3]
let gexMapAtrNumber = gexMapAtrNumberBase.slice(0)

//доп гексы
const mapGexArrAdditionalBase = [5, 4, 3, 2]
let mapGexArrAdditional = mapGexArrAdditionalBase.slice(0)

//-----------раскрас гексов и сортировка----------
gexMapPicture(allMapGex);


//----ФУНКЦИЯ ГЕНЕРАЦИИ КАРТЫ---
const generateMap = () => {
    //-----Поочередное создание карты из ресурсов----

    //-----ЛЕВЫЙ-ВЕРХНИЙ-МАЛЫЙ-ОСТРОВ---
    //--1 гекс вконце--
    mapGenerationGex(gex2, gex1)
    mapGenerationGex(gex3, gex1, gex2)
    mapGenerationGex(gex4, gex1, gex2, gex3)

    //-----правый-нижний-МАЛЫЙ-ОСТРОВ---
    mapGenerationGex(gex5, gex1, gex2, gex3, gex6)
    mapGenerationGex(gex6, gex5)
    mapGenerationGex(gex7, gex5, gex6)
    //--8 гекс вконце--

    //-----правый-верхний-БОЛЬШОЙ-ОСТРОВ---
    mapGenerationGex(gex9, gex2, gex3, gex4)
    mapGenerationGex(gex10, gex9)
    mapGenerationGex(gex11, gex9, gex10)
    mapGenerationGex(gex12, gex9, gex10, gex11)
    mapGenerationGex(gex13, gex10, gex12)
    mapGenerationGex(gex14, gex9, gex10, gex11, gex12)
    mapGenerationGex(gex15, gex12, gex13, gex14)
    //16-крайний-ниже вконце

    //-----левый-нижний-БОЛЬШОЙ-ОСТРОВ---
    mapGenerationGex(gex20)
    mapGenerationGex(gex18, gex20)
    mapGenerationGex(gex19, gex18, gex20)
    mapGenerationGex(gex22, gex18, gex19, gex20)
    mapGenerationGex(gex17, gex18, gex19, gex20)
    mapGenerationGex(gex23, gex20, gex22)
    mapGenerationGex(gex21, gex20, gex23)

    //---1---
    mapGenerationGex(gex1, gex2, gex3, gex4)

    //---16---
    mapGenerationGex(gex16, gex14)

    //---8---
    mapGenerationGex(gex8)

    //---Смена изображений в соответствии со значением атрибута----
    gexMapPicture(allMapGex)
}

/*------------------КЛИК-ФУНКЦИЯ--------------------------*/
generateMapGexButton.onclick = function () {
    romainingNumberTokens.textContent = ''
    //------начальные данные генерации---
    //очищаем массивы ресурсов
    initialStateArrayGexRes()
    //клон основного массива гексов
    gexMapAtrNumber = gexMapAtrNumberBase.slice(0)
    mapGexArrAdditional = mapGexArrAdditionalBase.slice(0)
    //заполнение карты ресурсами
    generateMap()
    //остаток массива гексов
    romainingNumberTokens.textContent = gexMapAtrNumber
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
        gex16.dataset.gex == 'undefined' || gex8.dataset.gex == 'undefined' || gex1.dataset.gex == 'undefined' || gex17.dataset.gex == 'undefined' || gex21.dataset.gex == 'undefined' || gex22.dataset.gex == 'undefined' || gex23.dataset.gex == 'undefined' || gex19.dataset.gex == 'undefined'
    ) {
        romainingNumberTokens.textContent = ''
        initialStateArrayGexRes()
        gexMapAtrNumber = gexMapAtrNumberBase.slice(0)
        mapGexArrAdditional = mapGexArrAdditionalBase.slice(0)
        generateMap()
    }
}

//---ПОЛНЫЙ РАНДОМ ГЕКСОВ КАРТЫ---
fullRandomMapGex.onclick = () => {
    initialStateArrayGexRes()
    gexMapAtrNumberFullRandom = gexMapAtrNumberBase.slice(0)
    allRandomGexMapGen(allMapGexNew)
    gexMapPicture(allMapGex);
}