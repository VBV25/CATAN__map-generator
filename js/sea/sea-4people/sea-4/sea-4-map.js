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


//КОЛЛИЧЕСТВО ВОЗМОЖНЫХ ГЕКСОВ КОНКРЕТНЫХ РЕСУРСОВ
/*-значения:
    1 - дерево(4шт)
    2 - бараны (4шт)
    3 - рожь (3шт)
    4 - глина(3шт)
    5 - камень (3шт)
-*/
const gexMapAtrNumberBase = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2]
//клон массива
let gexMapAtrNumber = gexMapAtrNumberBase.slice(0)

//-----------раскрас гексов и сортировка----------
gexMapPicture(allMapGex);


//----ФУНКЦИЯ ГЕНЕРАЦИИ КАРТЫ---
const generateMap = () => {
    //-----Поочередное создание карты из ресурсов----

    mapGenerationGex(gex3)
    mapGenerationGex(gex5, gex3)
    mapGenerationGex(gex8, gex5)
    mapGenerationGex(gex12, gex8)
    mapGenerationGex(gex11, gex12)
    mapGenerationGex(gex15, gex11, gex12)
    mapGenerationGex(gex2, gex3, gex5)
    mapGenerationGex(gex4, gex2, gex5, gex8)
    mapGenerationGex(gex7, gex4, gex8, gex11, gex12)
    mapGenerationGex(gex9, gex5, gex8)
    mapGenerationGex(gex13, gex9, gex8, gex12)
    mapGenerationGex(gex16, gex12, gex13, gex15)
    mapGenerationGex(gex6, gex3, gex5, gex9)
    mapGenerationGex(gex14, gex11, gex15)
    mapGenerationGex(gex1, gex2, gex3)

    gexMapAtrNumber.push(3)

    mapGenerationGex(gex10, gex11, gex14)

    gexMapAtrNumber.push(5)

    mapGenerationGex(gex17, gex15, gex16)

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
    //заполнение карты ресурсами
    generateMap()
    //если камней 5
    if (stoneGexArray.length === 5) {
        romainingNumberTokens.textContent = '5 КАМНЕЙ'
    }
    //----ЕСЛИ РЕСУРСОВ БОЛЬШЕ ЧЕМ НУЖНО
    while (treeGexArray.length != 4 ||
        ryeGexArray.length > 4 || ryeGexArray.length < 3 ||
        ramsGexArray.length != 4 ||
        clayGexArray.length >= 4 || clayGexArray.length < 3 ||
        stoneGexArray.length > 4 || stoneGexArray.length < 3 ||
        gex10.dataset.gex == 'undefined' || gex9.dataset.gex == 'undefined' || gex11.dataset.gex == 'undefined' || gex17.dataset.gex == 'undefined'
    ) {
        romainingNumberTokens.textContent = ''
        initialStateArrayGexRes()
        gexMapAtrNumber = gexMapAtrNumberBase.slice(0)
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