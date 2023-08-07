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
}
//массив номерных жетонов общий
const gexNumberBaseArray = [4, 5, 6, 8, 9, 10, 3, 11, 4, 5, 6, 8, 9, 10, 5, 9, 6, 8];
let gexNumberArray = gexNumberBaseArray.slice(0)
const numArrAdditionalBase = [4, 10, 5, 9, 6, 8, 3, 11]
let numArrAdditional = numArrAdditionalBase.slice(0)

const cleanupObjResParamFn = () => {
    startResNum(tree)
    startResNum(rams)
    startResNum(rye)
    startResNum(clay)
    startResNum(stone)
}
//------ДОП ФУНКЦИИ-----
const addFnObgectResNum = (numberGex, gexNumber) => {
    //--дерево--
    if (numberGex.classList.contains('block1')) {
        checkNum11and3(tree, gexNumber)
        overwritingVariable(tree, gexNumber)
        return;
    }
    //--бараны--
    else if (numberGex.classList.contains('block2')) {
        checkNum11and3(rams, gexNumber)
        overwritingVariable(rams, gexNumber)
        return;
    }
    //--рожь--
    else if (numberGex.classList.contains('block3')) {
        checkNum11and3(rye, gexNumber)
        overwritingVariable(rye, gexNumber)
        return;
    }
    //--глина--
    else if (numberGex.classList.contains('block4')) {
        checkNum11and3(clay, gexNumber)
        overwritingVariable(clay, gexNumber)
        return;
    }
    //--камень--
    else if (numberGex.classList.contains('block5')) {
        checkNum11and3(stone, gexNumber)
        overwritingVariable(stone, gexNumber)
        return;
    }
}

const gen3RightGexAdditionalFn = (numberGex, addParam1 = 1, addParam2 = 1) => {
    if (tokenValueNew != 4 || tokenValueNew != 3 || tokenValueNew != 11 || tokenValueNew != 10
        || tokenValueNew != addParam1 || tokenValueNew != addParam2
    ) {
        while (tokenValueNew != 4 && tokenValueNew != 3 && tokenValueNew != 11 && tokenValueNew != 10
            && tokenValueNew != addParam1 && tokenValueNew != addParam2) {
            cleanupObjResParamFn()
            addFnObgectResNum(gex6, gexNumber6)
            addFnObgectResNum(gex12, gexNumber12)
            addFnObgectResNum(gex18, gexNumber18)
            randomNumberCheckGex(numberGex, addParam1, addParam2)
        }
    }

}
//----------------


/*-----------КЛИК-ФУНКЦИЯ----------------*/
generateNumberGexBtn.onclick = function () {
    //------ВОЗВРАТ БАЗОВЫХ НАСТРОЕК---
    cleanupObjResParamFn()
    //обнуление номерных жетонов
    startNumberGexMap()
    //общий массив с номерными жетонами--
    gexNumberArray = gexNumberBaseArray.slice(0);
    numArrAdditional = numArrAdditionalBase.slice(0)


    //----ГЕНЕРАЦИЯ-номеров----

    //---ПРАВЫЕ ТРИ ГЕКСА---(6,12,18)
    //-----1--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex6)
    gen3RightGexAdditionalFn(gex6)
    delleteNumberFromArray(gex6)
    //-----2--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex12, gexNumber6)
    gen3RightGexAdditionalFn(gex12, gexNumber6)
    delleteNumberFromArray(gex12)
    //-----3--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex18, gexNumber12)
    gen3RightGexAdditionalFn(gex18, gexNumber12)
    delleteNumberFromArray(gex18)
    //------
    gettingNewValuesGexNumber()
    cleanupObjResParamFn()
    addFnObgectResNum(gex6, gexNumber6)
    addFnObgectResNum(gex12, gexNumber12)
    addFnObgectResNum(gex18, gexNumber18)
    //------



    //----ОСТАЛЬНЫЕ ГЕКСЫ---
    //------4----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex8)
    delleteNumberFromArray(gex8)
    //-----5----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex9, gexNumber8)
    delleteNumberFromArray(gex9)
    //-----6----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex10, gexNumber9)
    delleteNumberFromArray(gex10)

    //-----7----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex11, gexNumber6, gexNumber12, gexNumber10, gexNumber18)
    delleteNumberFromArray(gex11)
    //-----8----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex7, gexNumber8)
    delleteNumberFromArray(gex7)


    //-----9----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex2, gexNumber7, gexNumber8)
    delleteNumberFromArray(gex2)
    //-----10----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex3, gexNumber2, gexNumber8, gexNumber9)
    delleteNumberFromArray(gex3)
    //-----11--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex4, gexNumber3, gexNumber9, gexNumber10)
    delleteNumberFromArray(gex4)
    //-----12--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex5, gexNumber4, gexNumber6, gexNumber10, gexNumber11)
    delleteNumberFromArray(gex5)
    //-----13--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex14, gexNumber7, gexNumber8)
    delleteNumberFromArray(gex14)
    //-----14------
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex15, gexNumber8, gexNumber9, gexNumber14)
    delleteNumberFromArray(gex15)
    //-----15--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex16, gexNumber9, gexNumber10, gexNumber15)
    delleteNumberFromArray(gex16)
    //-----16--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex17, gexNumber10, gexNumber11, gexNumber16, gexNumber18)
    delleteNumberFromArray(gex17)

    //-----17--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex1, gexNumber2, gexNumber7)
    delleteNumberFromArray(gex1)
    //-----18--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex13, gexNumber7, gexNumber14)
    delleteNumberFromArray(gex13)

    //---------------------------------

    romainingNumberTokens.textContent = gexNumberArray
    populaNumberGex();
};

///-------ПОЛНЫЙ РАНДОМ НОМЕРОВ-------

fullRandomNumGexAllMap.onclick = function () {
    romainingNumberTokens.textContent = ''
    //обнуление номерных жетонов
    startNumberGexMap()
    //общий массив с номерными жетонами--
    fullRandomNumberGexArr = gexNumberBaseArray.slice(0)
    allMapGex.forEach((el) => {
        if (el.dataset.gex != 7) {
            //перемешиваем массив
            allArrayShuffle(fullRandomNumberGexArr)
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
