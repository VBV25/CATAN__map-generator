const fullRandomNumGex = document.getElementById('fullRandomNumGex');

let gexNumber1 = Number(gex1.children[0].textContent);
let gexNumber2 = Number(gex2.children[0].textContent);
let gexNumber3 = Number(gex3.children[0].textContent);
let gexNumber4 = Number(gex4.children[0].textContent);
let gexNumber5 = Number(gex5.children[0].textContent);
let gexNumber6 = Number(gex6.children[0].textContent);
let gexNumber7 = Number(gex7.children[0].textContent);
let gexNumber8 = Number(gex8.children[0].textContent);
let gexNumber9 = Number(gex9.children[0].textContent);
let gexNumber10 = Number(gex10.children[0].textContent);
let gexNumber11 = Number(gex11.children[0].textContent);
let gexNumber12 = Number(gex12.children[0].textContent);
let gexNumber13 = Number(gex13.children[0].textContent);
let gexNumber14 = Number(gex14.children[0].textContent);
let gexNumber15 = Number(gex15.children[0].textContent);
let gexNumber16 = Number(gex16.children[0].textContent);
let gexNumber17 = Number(gex17.children[0].textContent);
let gexNumber18 = Number(gex18.children[0].textContent);
let gexNumber19 = Number(gex19.children[0].textContent);
let gexNumber20 = Number(gex20.children[0].textContent);
let gexNumber21 = Number(gex21.children[0].textContent);
let gexNumber22 = Number(gex22.children[0].textContent);
let gexNumber23 = Number(gex23.children[0].textContent);
let gexNumber24 = Number(gex24.children[0].textContent);
let gexNumber25 = Number(gex25.children[0].textContent);
let gexNumber26 = Number(gex26.children[0].textContent);
let gexNumber27 = Number(gex27.children[0].textContent);
let gexNumber28 = Number(gex28.children[0].textContent);
let gexNumber29 = Number(gex29.children[0].textContent);
let gexNumber30 = Number(gex30.children[0].textContent);
let gexNumber31 = Number(gex31.children[0].textContent);
let gexNumber32 = Number(gex32.children[0].textContent);
let gexNumber33 = Number(gex33.children[0].textContent);
let gexNumber34 = Number(gex34.children[0].textContent);
let gexNumber35 = Number(gex35.children[0].textContent);
let gexNumber36 = Number(gex36.children[0].textContent);
let gexNumber37 = Number(gex37.children[0].textContent);
let gexNumber38 = Number(gex38.children[0].textContent);
let gexNumber39 = Number(gex39.children[0].textContent);
let gexNumber40 = Number(gex40.children[0].textContent);
let gexNumber41 = Number(gex41.children[0].textContent);
let gexNumber42 = Number(gex42.children[0].textContent);
//
const gettingNewValuesGexNumber = () => {
    gexNumber1 = Number(gex1.children[0].textContent);
    gexNumber2 = Number(gex2.children[0].textContent);
    gexNumber3 = Number(gex3.children[0].textContent);
    gexNumber4 = Number(gex4.children[0].textContent);
    gexNumber5 = Number(gex5.children[0].textContent);
    gexNumber6 = Number(gex6.children[0].textContent);
    gexNumber7 = Number(gex7.children[0].textContent);
    gexNumber8 = Number(gex8.children[0].textContent);
    gexNumber9 = Number(gex9.children[0].textContent);
    gexNumber10 = Number(gex10.children[0].textContent);
    gexNumber11 = Number(gex11.children[0].textContent);
    gexNumber12 = Number(gex12.children[0].textContent);
    gexNumber13 = Number(gex13.children[0].textContent);
    gexNumber14 = Number(gex14.children[0].textContent);
    gexNumber15 = Number(gex15.children[0].textContent);
    gexNumber16 = Number(gex16.children[0].textContent);
    gexNumber17 = Number(gex17.children[0].textContent);
    gexNumber18 = Number(gex18.children[0].textContent);
    gexNumber19 = Number(gex19.children[0].textContent);
    gexNumber20 = Number(gex20.children[0].textContent);
    gexNumber21 = Number(gex21.children[0].textContent);
    gexNumber22 = Number(gex22.children[0].textContent);
    gexNumber23 = Number(gex23.children[0].textContent);
    gexNumber24 = Number(gex24.children[0].textContent);
    gexNumber25 = Number(gex25.children[0].textContent);
    gexNumber26 = Number(gex26.children[0].textContent);
    gexNumber27 = Number(gex27.children[0].textContent);
    gexNumber28 = Number(gex28.children[0].textContent);
    gexNumber29 = Number(gex29.children[0].textContent);
    gexNumber30 = Number(gex30.children[0].textContent);
    gexNumber31 = Number(gex31.children[0].textContent);
    gexNumber32 = Number(gex32.children[0].textContent);
    gexNumber33 = Number(gex33.children[0].textContent);
    gexNumber34 = Number(gex34.children[0].textContent);
    gexNumber35 = Number(gex35.children[0].textContent);
    gexNumber36 = Number(gex36.children[0].textContent);
    gexNumber37 = Number(gex37.children[0].textContent);
    gexNumber38 = Number(gex38.children[0].textContent);
    gexNumber39 = Number(gex39.children[0].textContent);
    gexNumber40 = Number(gex40.children[0].textContent);
    gexNumber41 = Number(gex41.children[0].textContent);
    gexNumber42 = Number(gex42.children[0].textContent);
}

//массив номерных жетонов общий
const gexNumberBaseArray = [4, 5, 3, 6, 8, 9, 10, 11, 4, 3, 5, 6, 8, 9, 10, 11, 4, 5, 6, 8, 9, 10, 5];
let gexNumberArray = gexNumberBaseArray.slice(0)

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
const resursCheckGexFn = function (generatedGex, comparisonToken1, comparisonToken2, comparisonToken3, comparisonToken4, comparisonToken5, comparisonToken6, resurceVariable = 0) {
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
const randomNumberCheckGex = function (generatedGex, comparisonToken1 = 1, comparisonToken2 = 1, comparisonToken3 = 1, comparisonToken4 = 1, comparisonToken5 = 1, comparisonToken6 = 1) {
    if (generatedGex.dataset.gex != 7) {
        arrayShuffle(gexNumberArray)
        //--дерево--
        if (generatedGex.classList.contains('block1')) {
            resursCheckGexFn(generatedGex, comparisonToken1, comparisonToken2, comparisonToken3, comparisonToken4, comparisonToken5, comparisonToken6, tree)
            checkNum11and3(tree, tokenValueNew)
            overwritingVariable(tree, tokenValueNew)
            delleteNumberFromArray(generatedGex)
            return;
        }
        //--бараны--
        else if (generatedGex.classList.contains('block2')) {
            resursCheckGexFn(generatedGex, comparisonToken1, comparisonToken2, comparisonToken3, comparisonToken4, comparisonToken5, comparisonToken6, rams)
            checkNum11and3(rams, tokenValueNew)
            overwritingVariable(rams, tokenValueNew)
            delleteNumberFromArray(generatedGex)
            return;
        }
        //--рожь--
        else if (generatedGex.classList.contains('block3')) {
            resursCheckGexFn(generatedGex, comparisonToken1, comparisonToken2, comparisonToken3, comparisonToken4, comparisonToken5, comparisonToken6, rye)
            checkNum11and3(rye, tokenValueNew)
            overwritingVariable(rye, tokenValueNew)
            delleteNumberFromArray(generatedGex)
            return;
        }
        //--глина--
        else if (generatedGex.classList.contains('block4')) {
            resursCheckGexFn(generatedGex, comparisonToken1, comparisonToken2, comparisonToken3, comparisonToken4, comparisonToken5, comparisonToken6, clay)
            checkNum11and3(clay, tokenValueNew)
            overwritingVariable(clay, tokenValueNew)
            delleteNumberFromArray(generatedGex)
            return;
        }
        //--камень--
        else if (generatedGex.classList.contains('block5')) {
            resursCheckGexFn(generatedGex, comparisonToken1, comparisonToken2, comparisonToken3, comparisonToken4, comparisonToken5, comparisonToken6, stone)
            checkNum11and3(stone, tokenValueNew)
            overwritingVariable(stone, tokenValueNew)
            delleteNumberFromArray(generatedGex)
            return;
        }

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



/*------------------КЛИК-ФУНКЦИЯ--------------------------*/
generateNumberGexBtn.onclick = function () {
    romainingNumberTokens.textContent = ''
    //------ВОЗВРАТ БАЗОВЫХ НАСТРОЕК---
    startResNum(tree)
    startResNum(rams)
    startResNum(rye)
    startResNum(clay)
    startResNum(stone)
    //обнуление номерных жетонов
    startNumberGexMap()
    //общий массив с номерными жетонами--
    gexNumberArray = gexNumberBaseArray.slice(0);


    //-------НОМЕРА НА ГЕКСАХ---ГЕНЕРАЦИЯ-----
    console.log(gexNumberArray);
    console.log(gexNumberArray.length);
    console.log('ВЫПОЛНЕНИЕ');

    //-----1--(15-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex15)

    //-----2----(22-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex22, gexNumber15)

    //-----3----(28-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex28, gexNumber22)

    //-----4----(21-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex21, gexNumber15, gexNumber22, gexNumber28)

    //-----5----(14-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex14, gexNumber15, gexNumber21)

    //-----6----(16-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex16, gexNumber15, gexNumber22)

    //-----7----(29-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex29, gexNumber22, gexNumber28)

    //-----8--(27-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex27, gexNumber21, gexNumber28)

    //-----9--(20-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex20, gexNumber14, gexNumber21, gexNumber27)

    //-----10--(23-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex23, gexNumber16, gexNumber22, gexNumber29)

    //-----11--(8-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex8, gexNumber14, gexNumber15)

    //-----12--(9-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex9, gexNumber8, gexNumber15, gexNumber16, gexNumber22)

    //-----13--(34-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex34, gexNumber27, gexNumber28)

    //-----14--(35-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex35, gexNumber28, gexNumber29, gexNumber34)

    //-----15--(7-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex7, gexNumber8, gexNumber14)

    //-----16--(10-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex10, gexNumber9, gexNumber16)

    //-----17--(13-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex13, gexNumber7, gexNumber14, gexNumber20)


    //---добавляем в массив доп значения---
    gexNumberArray.push(4)
    gexNumberArray.push(6)
    gexNumberArray.push(8)
    gexNumberArray.push(10)
    gexNumberArray.push(9)


    //----18---(17-гекс)---
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex17, gexNumber10, gexNumber16, gexNumber23)

    //-----19--(26-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex26, gexNumber20, gexNumber27)

    //-----20--(30-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex30, gexNumber23, gexNumber29)

    //-----21--(33-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex33, gexNumber27, gexNumber26, gexNumber34)

    //-----22--(36-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex36, gexNumber29, gexNumber30, gexNumber35)

    //-----23--(19-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex19, gexNumber13, gexNumber20, gexNumber26)

    //-----24--(24-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex24, gexNumber17, gexNumber23, gexNumber30)

    //-----25--(2-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex2, gexNumber7, gexNumber8)

    //-----26--(3-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex3, gexNumber2, gexNumber8, gexNumber9)

    //-----27--(4-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex4, gexNumber3, gexNumber9, gexNumber10)

    //-----28--(6-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex6, gexNumber7, gexNumber13)

    //-----29--(11-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex11, gexNumber10, gexNumber17)

    //-----30--(12-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex12, gexNumber6, gexNumber13, gexNumber19)

    //-----31--(18-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex18, gexNumber11, gexNumber17, gexNumber24)

    //-----32--(39-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex39, gexNumber33, gexNumber34)

    //-----33--(40-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex40, gexNumber34, gexNumber35, gexNumber39)

    //-----34--(41-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex41, gexNumber35, gexNumber36, gexNumber40)

    //-----35--(32-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex32, gexNumber26, gexNumber33)

    //-----36--(37-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex37, gexNumber30, gexNumber36)

    //-----37--(25-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex25, gexNumber19, gexNumber26, gexNumber32)

    //-----38--(31-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex31, gexNumber24, gexNumber30, gexNumber37)

    //-----39--(1-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex1, gexNumber2, gexNumber6, gexNumber7)

    //-----40--(5-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex5, gexNumber4, gexNumber10, gexNumber11)

    //-----41--(38-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex38, gexNumber32, gexNumber33, gexNumber39)

    //-----42--(42-гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex42, gexNumber36, gexNumber37, gexNumber41)

    //----------------------------------------------------------

    romainingNumberTokens.textContent = gexNumberArray
    populaNumberGex();
};


/*--------ПОЛНЫЙ РАНДОМ НОМЕРНЫХ ЖЕТОНОВ---*/

let fullRandomNumberGexArr = gexNumberBaseArray.slice(0)

let propertyFullRandomAllNumberGex; //значение
let propertyFullRandomAllNumberGexIndex; // индекс
const gexMapFullNumberArrRandomFn = () => {
    propertyFullRandomAllNumberGexIndex = Math.floor(Math.random() * fullRandomNumberGexArr.length)
    return propertyFullRandomAllNumberGex = fullRandomNumberGexArr[propertyFullRandomAllNumberGexIndex]
}

fullRandomNumGex.onclick = () => {
    romainingNumberTokens.textContent = ''
    //обнуление номерных жетонов
    startNumberGexMap()
    //общий массив с номерными жетонами--
    fullRandomNumberGexArr = gexNumberBaseArray.slice(0)
    allMapGex.forEach((el) => {
        if (el.dataset.gex != 7) {
            //перемешиваем массив
            arrayShuffle(fullRandomNumberGexArr)
            //получаем рандомное число
            gexMapFullNumberArrRandomFn()
            //присваиваем число жетону гекса
            el.children[0].textContent = propertyFullRandomAllNumberGex
            //удаляем число из массива
            fullRandomNumberGexArr.splice(propertyFullRandomAllNumberGexIndex, 1)

        }
    })

    //выделяем 6 и 8 
    populaNumberGex();
}