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

}
//массив номерных жетонов общий
const gexNumberBaseArray = [4, 5, 6, 8, 9, 10, 3, 11, 4, 5, 6, 8, 9, 10, 5, 9, 6];
let gexNumberArray = gexNumberBaseArray.slice(0)
const numArrAdditionalBase = [8, 10, 4, 5, 9, 6]
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
    randomNumberCheckGex(gex3)
    delleteNumberFromArray(gex3)
    //-----2----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex5, gexNumber3)
    delleteNumberFromArray(gex5)
    //-----3----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex8, gexNumber5)
    delleteNumberFromArray(gex8)
    //-----4----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex12, gexNumber8)
    delleteNumberFromArray(gex12)
    //-----5----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex11, gexNumber12)
    delleteNumberFromArray(gex11)
    //-----6----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex15, gexNumber11, gexNumber12)
    delleteNumberFromArray(gex15)
    //-----7----
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex2, gexNumber3, gexNumber5)
    delleteNumberFromArray(gex2)
    //-----8--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex4, gexNumber2, gexNumber5, gexNumber8)
    delleteNumberFromArray(gex4)
    //-----9--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex7, gexNumber4, gexNumber8, gexNumber11, gexNumber12)
    delleteNumberFromArray(gex7)
    //-----10--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex9, gexNumber5, gexNumber8)
    delleteNumberFromArray(gex9)
    //-----11------
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex13, gexNumber8, gexNumber9, gexNumber12)
    delleteNumberFromArray(gex13)
    //-----12--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex16, gexNumber12, gexNumber13, gexNumber15)
    delleteNumberFromArray(gex16)
    //-----13--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex6, gexNumber3, gexNumber5, gexNumber9)
    delleteNumberFromArray(gex6)
    //-----14--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex14, gexNumber11, gexNumber15)
    delleteNumberFromArray(gex14)
    //-----15--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex1, gexNumber2, gexNumber3)
    delleteNumberFromArray(gex1)
    //-----16--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex10, gexNumber11, gexNumber14)
    delleteNumberFromArray(gex10)
    //-----17--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex17, gexNumber15, gexNumber16)
    delleteNumberFromArray(gex17)

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
