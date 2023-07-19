//кнопка генерации карты
const generateMapGexButton = document.getElementById('generateMapGex');
//поле для текста
const romainingNumberTokens = document.getElementById('romainingNumberTokens');
//ВСЕ блоки гексов карты
let allMapGex = Array.from(document.getElementsByClassName('map__gex'));

//---перемешивание массива--
const shuffle = (array) => {
    let m = array.length,
        t, i;
    if (array.length > 0) {
        while (m) {
            i = Math.floor(Math.random() * m--)
            t = array[m];
            array[m] = array[i];
            array[m] = t
        }
        return array
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
    shuffle(gexMapAtrNumber)
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