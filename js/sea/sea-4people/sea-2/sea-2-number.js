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
const gexNumberBaseArray = [4, 5, 6, 8, 9, 10, 3, 11, 4, 5, 6, 8, 9, 10, 4, 5, 6, 8, 9, 10, 4, 5, 9];
let gexNumberArray = gexNumberBaseArray.slice(0)
const numArrAdditionalBase = [6, 8, 10, 3, 11, 5, 9]
let numArrAdditional = numArrAdditionalBase.slice(0)
/*------------------КЛИК-ФУНКЦИЯ--------------------------*/
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
    randomNumberCheckGex(gex15, gexNumber10, gexNumber12, gexNumber13)
    delleteNumberFromArray(gex15)
    //-----6----(14гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex14, gexNumber11, gexNumber12, gexNumber15)
    delleteNumberFromArray(gex14)
    //-----7----(11гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex11, gexNumber9, gexNumber12, gexNumber14)
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
    randomNumberCheckGex(gex23, gexNumber20, gexNumber22)
    delleteNumberFromArray(gex23)
    //-----13--(17гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex17, gexNumber18, gexNumber19)
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
    randomNumberCheckGex(gex1, gexNumber2, gexNumber3, gexNumber4)
    delleteNumberFromArray(gex1)

    //---МАЛЫЙ----ПРАВЫЙ-НИЖНИЙ-ОСТРОВ---
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
    //-----22--(8гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex8, gexNumber5, gexNumber6, gexNumber7)
    delleteNumberFromArray(gex8)

    //------ОСТАВШИЕСЯ ГЕКС-----
    //-----23--(16гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex16, gexNumber14)
    delleteNumberFromArray(gex16)

    //----------------------------------------------------------

    romainingNumberTokens.textContent = gexNumberArray
    populaNumberGex();
};