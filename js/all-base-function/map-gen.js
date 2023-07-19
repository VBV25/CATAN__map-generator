//кнопка генерации карты
const generateMapGexButton = document.getElementById('generateMapGex');
//кнопка ПОЛНОГО РАНДОМА генерации карты
const fullRandomMapGex = document.getElementById('fullRandomMapGex');
//поле для текста
const romainingNumberTokens = document.getElementById('romainingNumberTokens');
//ВСЕ блоки гексов карты
let allMapGex = Array.from(document.getElementsByClassName('map__gex'));
let allMapGexNew = allMapGex.slice(0)

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

//--получение рандомного числа из массива и его индекса--
let randomIndexGexMapAtrNumber
let randomGexMapAtrNumber
const objectGexMapArrForRandom = (arr) => {
    randomIndexGexMapAtrNumber = Math.floor(Math.random() * arr.length)
    randomGexMapAtrNumber = arr[randomIndexGexMapAtrNumber]
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
    shuffle(gexMapAtrNumber)
    objectGexMapArrForRandom(gexMapAtrNumber)
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

//-------ПОЛНЫЙ РАНДОМ ГЕКСОВ---
let gexMapAtrNumberFullRandom

const arrayShuffle = () => {
    for (let i = 0; i < 30; i++) {
        shuffle(gexMapAtrNumberFullRandom)
    }
    console.log(gexMapAtrNumberFullRandom);

    return gexMapAtrNumberFullRandom
}

const allRandomGexMapGen = (arrayGex) => {
    arrayShuffle()
    arrayGex.forEach((el) => {
        objectGexMapArrForRandom(gexMapAtrNumberFullRandom)
        el.dataset.gex = randomGexMapAtrNumber
        gexMapAtrNumberFullRandom.splice(randomIndexGexMapAtrNumber, 1);
    })
}