const generateNumberGexBtn = document.getElementById('generateNumberGex');
const allGexNumberToken = document.getElementsByClassName('map__gex-text');

//обнуление чисел на карте
const allGexNumberTokenArr = Array.from(allGexNumberToken);
const startNumberGexMap = () => {
    allGexNumberTokenArr.forEach((el) => {
        el.textContent = 1;
    })
}

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
}

//массив номерных жетонов общий
const gexNumberBaseArray = [4, 5, 6, 8, 9, 10, 3, 11, 4, 5, 6, 8, 9, 10, 3, 11, 4, 5, 6, 8, 9, 10, 4, 5, 6, 8, 9, 10];
let gexNumberArray = gexNumberBaseArray.slice(0)

//--функция-взятия рандомного значения с индексом из общего массива
let propertyRandomAllNumberGex; //значение
let propertyRandomAllNumberGexIndex; // индекс
const gexMapNumberArrRandomFn = () => {
    propertyRandomAllNumberGexIndex = Math.floor(Math.random() * gexNumberArray.length)
    return propertyRandomAllNumberGex = gexNumberArray[propertyRandomAllNumberGexIndex]
}

//--------ОБЪЕКТЫ-для исключения повтора чисел на одном ресурсе------
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

/*------------------КЛИК-ФУНКЦИЯ--------------------------*/
generateNumberGexBtn.onclick = function() {

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

    //---БОЛЬШОЙ----ПРАВЫЙ_ВЕРХНИЙ ОСТРОВ---(без 1 гекса)
    //-----1--(12гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex12)
    delleteNumberFromArray(gex12)
        //-----2----(9гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex9, gexNumber12)
    delleteNumberFromArray(gex9)
        //-----3----(10гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex10, gexNumber9, gexNumber12)
    delleteNumberFromArray(gex10)
        //-----4----(13гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex13, gexNumber9, gexNumber10, gexNumber12)
    delleteNumberFromArray(gex13)
        //-----5----(15гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex15, gexNumber9, gexNumber10, gexNumber12, gexNumber13)
    delleteNumberFromArray(gex15)
        //-----6----(14гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex14, gexNumber9, gexNumber10, gexNumber12, gexNumber13, gexNumber15)
    delleteNumberFromArray(gex14)
        //-----7----(11гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex11, gexNumber9, gexNumber10, gexNumber12, gexNumber13, gexNumber14, gexNumber15)
    delleteNumberFromArray(gex11)

    //---БОЛЬШОЙ----ЛЕВЫЙ-НИЖНИЙ-ОСТРОВ---
    //-----8--(20гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex20)
    delleteNumberFromArray(gex20)
        //-----9--(18гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex18, gexNumber20)
    delleteNumberFromArray(gex18)
        //-----10--(19гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex19, gexNumber18, gexNumber20)
    delleteNumberFromArray(gex19)
        //-----11--(22гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex22, gexNumber18, gexNumber19, gexNumber20)
    delleteNumberFromArray(gex22)
        //-----12--(23гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex23, gexNumber18, gexNumber19, gexNumber20, gexNumber22)
    delleteNumberFromArray(gex23)
        //-----13--(17гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex17, gexNumber18, gexNumber19, gexNumber20, gexNumber22, gexNumber23)
    delleteNumberFromArray(gex17)
        //-----14--(21гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex21, gexNumber20, gexNumber23)
    delleteNumberFromArray(gex21)

    //---МАЛЫЙ----ЛЕВЫЙ-верхний-ОСТРОВ---
    //-----15--(3гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex3)
    delleteNumberFromArray(gex3)
        //-----16--(2гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex2, gexNumber3)
    delleteNumberFromArray(gex2)
        //-----17--(4гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex4, gexNumber2, gexNumber3)
    delleteNumberFromArray(gex4)
        //----18---(1гекс)---
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex1, gexNumber2)
    delleteNumberFromArray(gex1)

    //---МАЛЫЙ----ПРАВЫЙ-НИЖНИЙ-ОСТРОВ---(без 1 гекса)
    //-----19--(6гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex6)
    delleteNumberFromArray(gex6)
        //-----20--(5гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex5, gexNumber6)
    delleteNumberFromArray(gex5)
        //-----21--(7гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex7, gexNumber5, gexNumber6)
    delleteNumberFromArray(gex7)

    //------ОСТАВШИЕСЯ 3 ГЕКСА-----
    //-----22--(16гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex16, gexNumber14)
    delleteNumberFromArray(gex16)
        //-----23--(8гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex8, gexNumber7)
    delleteNumberFromArray(gex8)

    //----------------------------------------------------------

    romainingNumberTokens.textContent = gexNumberArray
};