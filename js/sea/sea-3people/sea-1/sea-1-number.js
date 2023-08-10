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


function gettingNewValuesGexNumber() {
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

}
//------------------------------------------------------


//---------ВСЕ РЕСУРСЫ КРОМЕ ГЛИНЫ-----

//массив номерных жетонов общий
const gexNumberBaseArray = [3, 4, 5, 6, 8, 9, 10, 11, 4, 5, 6, 8, 9, 10];
let gexNumberArray = gexNumberBaseArray.slice(0)
const numArrAdditionalBase = [5, 9, 6, 8, 4, 10, 5, 9, 6, 8, 4, 10, 3, 11]
let numArrAdditional = numArrAdditionalBase.slice(0)

//----ФУНКЦИЯ ГЕНЕРАЦИИ КАРТЫ---
const generateNumGexMapFinalFn = () => {
    //-----1--(4гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex4)
    delleteNumberFromArray(gex4)
    //-----2----(8гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex8, gexNumber4)
    delleteNumberFromArray(gex8)
    //-----3----(11гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex11, gexNumber4, gexNumber8)
    delleteNumberFromArray(gex11)
    //-----4----(7гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex7, gexNumber4, gexNumber8, gexNumber11)
    delleteNumberFromArray(gex7)
    //-----5----(3гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex3, gexNumber4, gexNumber7)
    delleteNumberFromArray(gex3)
    //-----6----(5гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex5, gexNumber4, gexNumber8)
    delleteNumberFromArray(gex5)
    //-----7----(10гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex10, gexNumber7, gexNumber11)
    delleteNumberFromArray(gex10)
    //-----8--(12гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex12, gexNumber8, gexNumber11)
    delleteNumberFromArray(gex12)
    //-----9--(1гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex1, gexNumber3, gexNumber4)
    delleteNumberFromArray(gex1)
    //-----10--(2гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex2, gexNumber1, gexNumber4, gexNumber5)
    delleteNumberFromArray(gex2)
    //-----11--(6гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex6, gexNumber3, gexNumber7, gexNumber10)
    delleteNumberFromArray(gex6)
    //-----12--(9гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex9, gexNumber5, gexNumber8, gexNumber12)
    delleteNumberFromArray(gex9)
    //-----13--(13гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex13, gexNumber10, gexNumber11)
    delleteNumberFromArray(gex13)
    //-----14--(14гекс)--
    gettingNewValuesGexNumber()
    randomNumberCheckGex(gex14, gexNumber11, gexNumber12, gexNumber13)
    delleteNumberFromArray(gex14)

}




let allGexNumTokenArrNew = []
/*------------------КЛИК-ФУНКЦИЯ--------------------------*/
generateNumberGexBtn.onclick = function () {
    allGexNumTokenArrNew = []
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
    generateNumGexMapFinalFn()
    gettingNewValuesGexNumber()
    allGexNumberTokenArr.forEach((el) => {
        allGexNumTokenArrNew.push(+el.innerHTML)
    })


    //----ЕСЛИ ЕСТЬ НЕПОДХОДЯЩИЕ ЦИФРЫ
    let whileIfNumGex100 = 0
    allGexNumTokenArrNew.find((item) => {
        if (item == 100) {
            whileIfNumGex100 = 100
            return whileIfNumGex100
        } else {
            whileIfNumGex100 = 0
            return whileIfNumGex100
        }
    })

    while (whileIfNumGex100 == 100) {
        allGexNumTokenArrNew = []
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

        generateNumGexMapFinalFn()
        gettingNewValuesGexNumber()
        allGexNumberTokenArr.forEach((el) => {
            allGexNumTokenArrNew.push(+el.innerHTML)
        })
        allGexNumTokenArrNew.find((item) => {
            if (item == 100) {
                whileIfNumGex100 = 100
                return whileIfNumGex100
            } else {
                whileIfNumGex100 = 0
                return whileIfNumGex100
            }
        })

    }





    //----------------------------------------------------------

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
