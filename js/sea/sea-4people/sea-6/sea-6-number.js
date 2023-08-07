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
}
//массив номерных жетонов общий
const gexNumberBaseArray = [4, 5, 6, 8, 9, 10, 3, 11, 4, 5, 6, 8, 9, 10, 5, 9, 6, 8, 4, 10];
let gexNumberArray = gexNumberBaseArray.slice(0)
const numArrAdditionalBase = [5, 9, 6, 8, 4, 10, 3, 11]
let numArrAdditional = numArrAdditionalBase.slice(0)

/*-----------КЛИК-ФУНКЦИЯ----------------*/
generateNumberGexBtn.onclick = function () {
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
    numArrAdditional = numArrAdditionalBase.slice(0)
    //----ГЕНЕРАЦИЯ-номеров----
    //------1----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex1)
    delleteNumberFromArray(gex1)
    //-----2----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex6, gexNumber1)
    delleteNumberFromArray(gex6)
    //-----3----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex7, gexNumber1, gexNumber6)
    delleteNumberFromArray(gex7)
    //-----4----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex2, gexNumber1, gexNumber7)
    delleteNumberFromArray(gex2)


    //-----5----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex5)
    delleteNumberFromArray(gex5)
    //-----6----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex8, gexNumber5)
    delleteNumberFromArray(gex8)


    //-----7----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex20)
    delleteNumberFromArray(gex20)
    //-----8--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex14, gexNumber20)
    delleteNumberFromArray(gex14)
    //-----9--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex19, gexNumber14, gexNumber20)
    delleteNumberFromArray(gex19)
    //-----10--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex15, gexNumber14, gexNumber20)
    delleteNumberFromArray(gex15)


    //-----11------
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex13)
    delleteNumberFromArray(gex13)
    //-----12--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex16, gexNumber13)
    delleteNumberFromArray(gex16)


    //-----13--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex4, gexNumber8, gexNumber5)
    delleteNumberFromArray(gex4)
    //-----14--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex3, gexNumber2, gexNumber4)
    delleteNumberFromArray(gex3)
    //-----15--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex9, gexNumber5, gexNumber8)
    delleteNumberFromArray(gex9)


    //-----16--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex17, gexNumber16, gexNumber13)
    delleteNumberFromArray(gex17)
    //-----17--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex18, gexNumber17, gexNumber19)
    delleteNumberFromArray(gex18)
    //-----18--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex12, gexNumber13, gexNumber16)
    delleteNumberFromArray(gex12)

    //-----19--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex10, gexNumber6)
    delleteNumberFromArray(gex10)
    //-----20--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex11, gexNumber15)
    delleteNumberFromArray(gex11)
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


