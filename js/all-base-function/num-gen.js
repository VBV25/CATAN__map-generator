const generateNumberGexBtn = document.getElementById('generateNumberGex');
const allGexNumberToken = document.getElementsByClassName('map__gex-text');

//обнуление чисел на карте
const allGexNumberTokenArr = Array.from(allGexNumberToken);
const startNumberGexMap = () => {
    allGexNumberTokenArr.forEach((el) => {
        el.textContent = 1;
    })
}

//--функция-взятия рандомного значения с индексом из общего массива
let propertyRandomAllNumberGex; //значение
let propertyRandomAllNumberGexIndex; // индекс
const gexMapNumberArrRandomFn = () => {
    propertyRandomAllNumberGexIndex = Math.floor(Math.random() * gexNumberArray.length)
    return propertyRandomAllNumberGex = gexNumberArray[propertyRandomAllNumberGexIndex]
}

//--------ОБЪЕКТЫ-для исключения повтора чисел на одном ресурсе------

//обнуление жетонов
const startResNum = (obj) => {
    for (let key in obj) {
        obj[key] = 0
    }
}

//----ДЕРЕВО---
const tree = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
}

//----БАРАНЫ---
const rams = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
}

//----РОЖЬ---
const rye = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
}

//----ГЛИНА---
const clay = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
}

//----КАМЕНЬ---
const stone = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
}

//функция перезаписи переменных
let tokenValueNew
const overwritingVariable = (res, tokenValNew) => {
    tokenValNew = tokenValueNew
    if (res[1] === 0) {
        return res[1] = tokenValNew;
    } else if (res[1] != 0 && res[2] === 0) {
        return res[2] = tokenValNew;
    } else if (res[1] != 0 && res[2] != 0 && res[3] === 0) {
        return res[3] = tokenValNew;
    } else if (res[1] != 0 && res[2] != 0 && res[3] != 0 && res[4] === 0) {
        return res[4] = tokenValNew;
    } else if (res[1] != 0 && res[2] != 0 && res[3] != 0 && res[4] != 0 && res[5] === 0) {
        return res[5] = tokenValNew;
    }
}

//проверка на 3 и 11
const checkNum11and3 = (res, tokenValNew) => {
    //3
    if (tokenValNew === 3) {
        return res[6] = 11;
    }
    //11
    else if (tokenValNew === 11) {
        return res[6] = 3;
    }
}


//---Функция удаления из масива---
const delleteNumberFromArray = (generatedGex) => {
    let indexAllNum;
    gexNumberArray.find((item, index) => {
        if (item == generatedGex.children[0].textContent) {
            indexAllNum = index;
            return item;
        }
    });
    gexNumberArray.splice(indexAllNum, 1);
}

//-----------БЛОК-ФУНКЦИЙ-определения числа с рандомом------------
let compTok1
let compTok2
let compTok3
let compTok4
let compTok5
let compTok6
let resVar1
let resVar2
let resVar3
let resVar4
let resVar5
let resVar6

//---цикл с поиском подходящего числа---
let numberGexForEach
let numberIndexGexForEach
const matchNumSearchCycle = () => {
    shuffle(gexNumberArray)
    gexNumberArray.find((item, index) => {
        if (
            item != compTok1 &&
            item != compTok2 &&
            item != compTok3 &&
            item != compTok4 &&
            item != compTok5 &&
            item != compTok6 &&
            item != resVar1 &&
            item != resVar2 &&
            item != resVar3 &&
            item != resVar4 &&
            item != resVar5 &&
            item != resVar6) {
            numberGexForEach = item
            numberIndexGexForEach = index
            return numberGexForEach
        }
    })
}

//---функция проверки каждого ресурса---
const resursCheckGexFn = function(generatedGex, comparisonToken1, comparisonToken2, comparisonToken3, comparisonToken4, comparisonToken5, comparisonToken6, resurceVariable = 0) {
    compTok1 = comparisonToken1
    compTok2 = comparisonToken2
    compTok3 = comparisonToken3
    compTok4 = comparisonToken4
    compTok5 = comparisonToken5
    compTok6 = comparisonToken6
    resVar1 = resurceVariable[1]
    resVar2 = resurceVariable[2]
    resVar3 = resurceVariable[3]
    resVar4 = resurceVariable[4]
    resVar5 = resurceVariable[5]
    resVar6 = resurceVariable[6]
    gexMapNumberArrRandomFn();

    //проверка на совпадение с соседями и своей группой ресурсов
    if (
        propertyRandomAllNumberGex == compTok1 ||
        propertyRandomAllNumberGex == compTok2 ||
        propertyRandomAllNumberGex == compTok3 ||
        propertyRandomAllNumberGex == compTok4 ||
        propertyRandomAllNumberGex == compTok5 ||
        propertyRandomAllNumberGex == compTok6 ||
        propertyRandomAllNumberGex == resVar1 ||
        propertyRandomAllNumberGex == resVar2 ||
        propertyRandomAllNumberGex == resVar3 ||
        propertyRandomAllNumberGex == resVar4 ||
        propertyRandomAllNumberGex == resVar5 ||
        propertyRandomAllNumberGex == resVar6
    ) {
        //выполняем цикл подбора числа
        matchNumSearchCycle()
            //записываем число в жетон
        generatedGex.children[0].textContent = numberGexForEach;
        tokenValueNew = numberGexForEach
    } else {
        //записываем число в жетон
        generatedGex.children[0].textContent = propertyRandomAllNumberGex;
        tokenValueNew = propertyRandomAllNumberGex
    }
    return tokenValueNew
}


//------ОСНОВНАЯ ФУНКЦИЯ РАНДОМНОЙ ГЕНЕРАЦИИ ЧИСЛА-----
const randomNumberCheckGex = function(generatedGex, comparisonToken1 = 1, comparisonToken2 = 1, comparisonToken3 = 1, comparisonToken4 = 1, comparisonToken5 = 1, comparisonToken6 = 1) {
    shuffle(gexNumberArray)
        //--дерево--
    if (generatedGex.classList.contains('block1')) {
        resursCheckGexFn(generatedGex, comparisonToken1, comparisonToken2, comparisonToken3, comparisonToken4, comparisonToken5, comparisonToken6, tree)
        checkNum11and3(tree, tokenValueNew)
        overwritingVariable(tree, tokenValueNew)
        return;
    }
    //--бараны--
    else if (generatedGex.classList.contains('block2')) {
        resursCheckGexFn(generatedGex, comparisonToken1, comparisonToken2, comparisonToken3, comparisonToken4, comparisonToken5, comparisonToken6, rams)
        checkNum11and3(rams, tokenValueNew)
        overwritingVariable(rams, tokenValueNew)
        return;
    }
    //--рожь--
    else if (generatedGex.classList.contains('block3')) {
        resursCheckGexFn(generatedGex, comparisonToken1, comparisonToken2, comparisonToken3, comparisonToken4, comparisonToken5, comparisonToken6, rye)
        checkNum11and3(rye, tokenValueNew)
        overwritingVariable(rye, tokenValueNew)
        return;
    }
    //--глина--
    else if (generatedGex.classList.contains('block4')) {
        resursCheckGexFn(generatedGex, comparisonToken1, comparisonToken2, comparisonToken3, comparisonToken4, comparisonToken5, comparisonToken6, clay)
        checkNum11and3(clay, tokenValueNew)
        overwritingVariable(clay, tokenValueNew)
        return;
    }
    //--камень--
    else if (generatedGex.classList.contains('block5')) {
        resursCheckGexFn(generatedGex, comparisonToken1, comparisonToken2, comparisonToken3, comparisonToken4, comparisonToken5, comparisonToken6, stone)
        checkNum11and3(stone, tokenValueNew)
        overwritingVariable(stone, tokenValueNew)
        return;
    }
}

//---ВЫДЕЛЯЕМ ЦИФРЫ 6 и 8 
const populaNumberGex = () => {
    let allGexMapArray = Array.from(document.getElementsByClassName('map__gex'));
    allGexMapArray.forEach((element) => {
        let elementGexMapChildrenNumtext = element.children[0].textContent;
        if (elementGexMapChildrenNumtext == 1) {
            element.classList.remove('popular-number');
            element.classList.add('noNumber');
        } else if (
            elementGexMapChildrenNumtext == 6 ||
            elementGexMapChildrenNumtext == 8
        ) {
            element.classList.remove('noNumber');
            element.classList.add('popular-number');
        } else {
            element.classList.remove('popular-number');
            element.classList.remove('noNumber');
        }
    });
}