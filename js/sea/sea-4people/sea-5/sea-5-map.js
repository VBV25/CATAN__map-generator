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


//КОЛЛИЧЕСТВО ВОЗМОЖНЫХ ГЕКСОВ КОНКРЕТНЫХ РЕСУРСОВ
/*-значения:
    1 - дерево(4шт)
    2 - бараны (4шт)
    3 - рожь (4шт)
    4 - глина(3шт)
    5 - камень (3шт)
-*/
const gexMapAtrNumberBase = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3]
//клон массива
let gexMapAtrNumber = gexMapAtrNumberBase.slice(0)

//доп гексы
const mapGexArrAdditionalBase = [5, 4, 2, 3, 1]
let mapGexArrAdditional = mapGexArrAdditionalBase.slice(0)

//-----------раскрас гексов и сортировка----------
gexMapPicture(allMapGex);


//----ФУНКЦИЯ ГЕНЕРАЦИИ КАРТЫ---
const generateMap = () => {
    //-----Поочередное создание карты из ресурсов----

    mapGenerationGex(gex8)
    mapGenerationGex(gex9, gex8)
    mapGenerationGex(gex10, gex9)
    mapGenerationGex(gex11, gex10)
    mapGenerationGex(gex7, gex8)

    mapGenerationGex(gex2, gex7, gex8)
    mapGenerationGex(gex3, gex2, gex8, gex9)
    mapGenerationGex(gex4, gex3, gex9, gex10)
    mapGenerationGex(gex5, gex4, gex10, gex11)
    mapGenerationGex(gex14, gex7, gex8)
    mapGenerationGex(gex15, gex8, gex9, gex14)
    mapGenerationGex(gex16, gex9, gex10, gex15)
    mapGenerationGex(gex17, gex10, gex11, gex16)
    mapGenerationGex(gex6, gex5, gex11)
    mapGenerationGex(gex18, gex11, gex17)
    mapGenerationGex(gex12, gex6, gex11, gex18)
    mapGenerationGex(gex1, gex2, gex7)
    mapGenerationGex(gex13, gex7, gex14)

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

    //----ЕСЛИ РЕСУРСОВ БОЛЬШЕ ЧЕМ НУЖНО
    while (treeGexArray.length != 4 ||
        ryeGexArray.length != 4 ||
        ramsGexArray.length != 4 ||
        clayGexArray.length >= 4 || clayGexArray.length < 3 ||
        stoneGexArray.length > 4 || stoneGexArray.length < 3
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