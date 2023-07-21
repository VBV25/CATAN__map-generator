/*--------ОБЩИЕ ДАННЫЕ----*/
//кнопка генерации карты
const generateMapGexButton = document.getElementById('generateMapGex');
//поле для текста
const romainingNumberTokens = document.getElementById('romainingNumberTokens');
//ВСЕ блоки гексов карты
let allMapGexBase = Array.from(document.getElementsByClassName('map__gex'));

let allMapGex = allMapGexBase.slice(0)
let newAllMapGexArr = []

//---перемешивание массива--
const shuffle = (array) => {
    if (array.length > 0) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
    }
}

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
    //массив с морем
let seeGexArray = []


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
const gex24 = document.getElementById('gex24');
const gex25 = document.getElementById('gex25');
const gex26 = document.getElementById('gex26');
const gex27 = document.getElementById('gex27');
const gex28 = document.getElementById('gex28');
const gex29 = document.getElementById('gex29');
const gex30 = document.getElementById('gex30');
const gex31 = document.getElementById('gex31');
const gex32 = document.getElementById('gex32');
const gex33 = document.getElementById('gex33');
const gex34 = document.getElementById('gex34');
const gex35 = document.getElementById('gex35');
const gex36 = document.getElementById('gex36');
const gex37 = document.getElementById('gex37');
const gex38 = document.getElementById('gex38');
const gex39 = document.getElementById('gex39');
const gex40 = document.getElementById('gex40');
const gex41 = document.getElementById('gex41');
const gex42 = document.getElementById('gex42');


//КОЛЛИЧЕСТВО ВОЗМОЖНЫХ ГЕКСОВ КОНКРЕТНЫХ РЕСУРСОВ
/*-значения:
    1 - дерево(5шт)
    2 - рожь (5шт)
    3 - бараны (5шт)
    4 - глина(4шт)
    5 - камень (4шт)
7 - море (19шт)
-*/

//массив с ресурсами
const gexMapAtrNumberBase = [1, 7, 2, 7, 3, 7, 4, 7, 5, 7, 1, 7, 2, 7, 3, 7, 4, 7, 5, 7, 1, 7, 2, 7, 3, 7, 4, 7, 5, 7, 1, 7, 2, 7, 3, 7, 4, 7, 5, 1, 2, 3]
    //клон массива
let gexMapAtrNumber = gexMapAtrNumberBase.slice(0)



//-----------раскрас гексов и сортировка----------
const gexMapPicture = (allMapGexArray) => {
    allMapGexArray.forEach((element) => {
        let datasetGexMap = element.dataset.gex
        element.classList.remove('block1');
        element.classList.remove('block2');
        element.classList.remove('block3');
        element.classList.remove('block4');
        element.classList.remove('block5');
        element.classList.remove('block7');
        if (datasetGexMap == 1) {
            element.classList.add('block1');
            treeGexArray.push(element)
        }
        if (datasetGexMap == 2) {
            element.classList.add('block2');
            ramsGexArray.push(element)
            newAllMapGexArr.push(element)
        }
        if (datasetGexMap == 3) {
            element.classList.add('block3');
            ryeGexArray.push(element)
            newAllMapGexArr.push(element)
        }
        if (datasetGexMap == 4) {
            element.classList.add('block4');
            clayGexArray.push(element)
            newAllMapGexArr.push(element)
        }
        if (datasetGexMap == 5) {
            element.classList.add('block5');
            stoneGexArray.push(element)
            newAllMapGexArr.push(element)
        }
        if (datasetGexMap == 7) {
            element.classList.add('block7');
            seeGexArray.push(element)
        }
    })
}


//--получение рандомного числа из массива и его индекса--
let randomIndexGexMapAtrNumber
let randomGexMapAtrNumber
const objectGexMapArrForRandom = (arr) => {
    randomIndexGexMapAtrNumber = Math.floor(Math.random() * arr.length)
    randomGexMapAtrNumber = arr[randomIndexGexMapAtrNumber]
}

//----очистка массивов с ресурсами
const initialStateArrayGexRes = () => {
    newAllMapGexArr = []

    treeGexArray = []
    ryeGexArray = []
    ramsGexArray = []
    clayGexArray = []
    stoneGexArray = []
}

//ФУНКЦИЯ ПЕРЕМЕШИВАНИЯ МАССИВА
const arrayShuffle = (forArray) => {
    for (let i = 0; i < 30; i++) {
        shuffle(forArray)
    }
    return forArray
}


/*------------------КЛИК-ФУНКЦИЯ--------------------------*/
generateMapGexButton.onclick = function() {
    //----СТАРТОВЫЕ ЗНАЧЕНИЯ-----
    gexMapAtrNumber = gexMapAtrNumberBase.slice(0)
    initialStateArrayGexRes()

    //генерация карты
    allMapGex.forEach((el) => {
        arrayShuffle(gexMapAtrNumber)
        objectGexMapArrForRandom(gexMapAtrNumber)
        el.dataset.gex = randomGexMapAtrNumber
        gexMapAtrNumber.splice(randomIndexGexMapAtrNumber, 1);
    })
    gexMapPicture(allMapGex)
    allMapGex.forEach((el) => el.classList.remove('block-no-name'))

    console.log(newAllMapGexArr);

}