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

//КОЛЛИЧЕСТВО ВОЗМОЖНЫХ ГЕКСОВ КОНКРЕТНЫХ РЕСУРСОВ
/*-значения:
     ключь-номер по порядку
свойство- название ресурса гекса
    1 - дерево(3шт)
    2 - рожь (3шт)
    3 - бараны (4шт)
    4 - глина(2шт)
    5 - камень (2шт)
    пустыня не указана
*/
const gexMapAtrNumberBase = [1, 2, 3, 4, 5, 3, 1, 2, 3, 4, 5, 1, 2, 3]
    //клон массива
let gexMapAtrNumber = gexMapAtrNumberBase.slice(0)

//-----------раскрас гексов и сортировка----------
gexMapPicture(allMapGex);

//----ФУНКЦИЯ ГЕНЕРАЦИИ КАРТЫ---
const generateMap = () => {
    //-----Поочередное создание карты из ресурсов----

    mapGenerationGex(gex4)
    mapGenerationGex(gex8, gex4)
    mapGenerationGex(gex11, gex8)
    if (gex8.dataset.gex == 2) {
        mapGenerationGex(gex7, gex4, gex11)
    } else { mapGenerationGex(gex7, gex8, gex4, gex11) }


    mapGenerationGex(gex3, gex4, gex7)
    mapGenerationGex(gex5, gex4, gex8)
    mapGenerationGex(gex10, gex7, gex11)
    mapGenerationGex(gex12, gex8, gex11)

    mapGenerationGex(gex1, gex4, gex3)
    mapGenerationGex(gex2, gex1, gex4, gex5)

    gexMapAtrNumber.push(5)
    gexMapAtrNumber.push(4)

    mapGenerationGex(gex6, gex3, gex7, gex10)
    mapGenerationGex(gex9, gex5, gex8, gex12)
    mapGenerationGex(gex13, gex10, gex11)
    if (gex11.dataset.gex != 2 && gex12.dataset.gex != 2 && gex13.dataset.gex != 2 && gex11.dataset.gex != 2 && ramsGexArray.length != 4) {
        gex14.dataset.gex = 2
    } else { mapGenerationGex(gex14, gex11, gex12, gex13) }




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
    if (stoneGexArray.length === 3) {
        romainingNumberTokens.textContent = '3 КАМНЕЙ'
    }
    //----ЕСЛИ РЕСУРСОВ БОЛЬШЕ ЧЕМ НУЖНО
    while (treeGexArray.length != 3 ||
        ryeGexArray.length != 3 ||
        ramsGexArray.length > 4 || ramsGexArray.length < 3 ||
        clayGexArray.length > 3 || clayGexArray.length < 2 ||
        stoneGexArray.length > 3 || stoneGexArray.length < 2 ||
        gex6.dataset.gex == 'undefined' || gex9.dataset.gex == 'undefined' || gex13.dataset.gex == 'undefined' || gex14.dataset.gex == 'undefined') {
        console.log('ПЕРЕЗАПУСК');
        romainingNumberTokens.textContent = ''
        initialStateArrayGexRes()
        gexMapAtrNumber = gexMapAtrNumberBase.slice(0)
        generateMap()
    }
    while (gex7.dataset.gex == gex8.dataset.gex && ramsGexArray.length != 4) {
        console.log('ПЕРЕЗАПУСК2');
        romainingNumberTokens.textContent = ''
        initialStateArrayGexRes()
        gexMapAtrNumber = gexMapAtrNumberBase.slice(0)
        generateMap()
    }
}

//---ПОЛНЫЙ РАНДОМ ГЕКСОВ КАРТЫ---

fullRandomMapGex.onclick = () => {
    initialStateArrayGexRes()
    gexMapAtrNumberFullRandom = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 2]
    allRandomGexMapGen(allMapGexNew)
    gexMapPicture(allMapGex);
}