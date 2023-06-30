//  -!!!---новый массив гексов сформированной карты---!!!-
//  newMapQuantityGexArray
// массив гексов с деревом
//   treeGexArray 
// массив гексов ржи
//  ryeGexArray 
// массив гексов с баранами
//  ramsGexArray 
// массив гексов с глиной
//  clayGexArray
// массив с камнем
//  stoneGexArray 
//  находится в js файле формирования карты
const romainingNumberTokens = document.getElementById('romainingNumberTokens')
const generateNumberGexBtn = document.getElementById('generateNumberGex');
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
    gexNumber15 = Number(gex15.children[0].textContent);
    gexNumber16 = Number(gex16.children[0].textContent);
    gexNumber17 = Number(gex17.children[0].textContent);
    gexNumber18 = Number(gex18.children[0].textContent);
    gexNumber19 = Number(gex19.children[0].textContent);
}
//------------------------------------------------------
const numberGex6 = 6
const numberGex8 = 8

//---------ВСЕ РЕСУРСЫ КРОМЕ ГЛИНЫ-----
//массив номерных жетонов общий
let gexNumberArray = [3, 4, 5, 6, 8, 9, 10, 11, 4, 5, 6, 8, 9, 10, 4, 5, 9, 10]
    //--функция-взятия рандомного значения с индексом из общего массива
    //значение
let propertyRandomKeysObjectAllNumberGex;
//index
let keyObjectAllNumberGex;

function allNumberGexRandom() {
    let keysObjectAllNumberGex = Object.keys(gexNumberArray)
    let randomObjectAllNumberGexArray = Math.floor(Math.random() * keysObjectAllNumberGex.length)
    keyObjectAllNumberGex = keysObjectAllNumberGex[randomObjectAllNumberGexArray]
    for (let j = 0; j < keysObjectAllNumberGex.length; j++) {
        if (keysObjectAllNumberGex[j] == keyObjectAllNumberGex) {
            propertyRandomKeysObjectAllNumberGex = gexNumberArray[keysObjectAllNumberGex[j]]
        }
    }
}
//-------------------------------------------------------
//--рандом число
let keyObjectNumber
let randomNumber
let numberArray = [3, 4, 5, 6, 8, 9, 10, 11]

function randomNumberFunction() {

    let keysObjectNumber = Object.keys(numberArray)
    let randomObjectNumber = Math.floor(Math.random() * keysObjectNumber.length)
    keyObjectNumber = keysObjectNumber[randomObjectNumber]
    for (let j = 0; j < keysObjectNumber.length; j++) {
        if (keysObjectNumber[j] == keyObjectNumber) {
            randomNumber = numberArray[keysObjectNumber[j]]
        }
    }
}
//-----------
//-------------------ГЛИНА-------------
//массив номерных жетонов для гексов с глиной
let clayNumberGexArray = [6, 8, 4, 5, 9, 10]
    //--функция-взятия рандомного значения с индексом из массива для глины
    //значение
let propertyRandomKeysObjectClayNumberGex;
//index
let keyObjectClayNumberGex;

function clayNumberGexRandom() {
    let keysObjectClayNumberGex = Object.keys(clayNumberGexArray)
    let randomObjectClayNumberGexArray = Math.floor(Math.random() * keysObjectClayNumberGex.length)
    keyObjectClayNumberGex = keysObjectClayNumberGex[randomObjectClayNumberGexArray]
    for (let j = 0; j < keysObjectClayNumberGex.length; j++) {
        if (keysObjectClayNumberGex[j] == keyObjectClayNumberGex) {
            propertyRandomKeysObjectClayNumberGex = clayNumberGexArray[keysObjectClayNumberGex[j]]
        }
    }
}

/*------------------КЛИК-ФУНКЦИЯ--------------------------*/
generateNumberGexBtn.onclick = function() {
        let newNumResGex = 0
        gex1.children[0].textContent = 1
        gex2.children[0].textContent = 1
        gex3.children[0].textContent = 1
        gex4.children[0].textContent = 1
        gex5.children[0].textContent = 1
        gex6.children[0].textContent = 1
        gex7.children[0].textContent = 1
        gex8.children[0].textContent = 1
        gex9.children[0].textContent = 1
        gex10.children[0].textContent = 1
        gex11.children[0].textContent = 1
        gex12.children[0].textContent = 1
        gex13.children[0].textContent = 1
        gex14.children[0].textContent = 1
        gex15.children[0].textContent = 1
        gex16.children[0].textContent = 1
        gex17.children[0].textContent = 1
        gex18.children[0].textContent = 1
        gex19.children[0].textContent = 1
            //-------------МАССИВЫ С НОМЕРНЫМИ ЖЕТОНАМИ-----------------
            //--общий массив с номерными жетонами--
        gexNumberArray = [3, 4, 5, 6, 8, 9, 10, 11, 4, 5, 6, 8, 9, 10, 4, 5, 9, 10]
        console.log(gexNumberArray);
        //--массив для глины
        clayNumberGexArray = [6, 8, 4, 5, 9, 10]
            //
            //-----крайние  гексы
        numberArray = [3, 4, 5, 6, 8, 9, 10, 11]
            //


        //--------ДЕРЕВО-------
        //номерные жетоны гекса с деревом
        let tree1 = 0
        let tree2 = 0
        let tree3 = 0
        let tree4 = 0
        let tree5 = 0
            //функция перезаписи переменных
        function overwritingVariableTrees() {
            if (tree1 == 0) {
                tree1 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (tree1 != 0 && tree2 == 0) {
                tree2 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (tree1 != 0 && tree2 != 0 && tree3 == 0) {
                tree3 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (tree1 != 0 && tree2 != 0 && tree3 != 0 && tree4 == 0) {
                tree4 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (tree1 != 0 && tree2 != 0 && tree3 != 0 && tree4 != 0 && tree5 == 0) {
                tree5 = propertyRandomKeysObjectAllNumberGex
                return
            }
            console.log('деевья')
            console.log(tree1)
            console.log(tree2)
            console.log(tree3)
            console.log(tree4)
            console.log(tree5)
        }

        function overwritingVariableTrees2() {
            if (tree1 == 0) {
                tree1 = newNumResGex
                return
            } else if (tree1 != 0 && tree2 == 0) {
                tree2 = newNumResGex
                return
            } else if (tree1 != 0 && tree2 != 0 && tree3 == 0) {
                tree3 = newNumResGex
                return
            } else if (tree1 != 0 && tree2 != 0 && tree3 != 0 && tree4 == 0) {
                tree4 = newNumResGex
                return
            } else if (tree1 != 0 && tree2 != 0 && tree3 != 0 && tree4 != 0 && tree5 == 0) {
                tree5 = newNumResGex
                return
            }
            console.log('деевья')
            console.log(tree1)
            console.log(tree2)
            console.log(tree3)
            console.log(tree4)
            console.log(tree5)
        }
        //
        //номерные жетоны гекса с бараними
        let rams1 = 0
        let rams2 = 0
        let rams3 = 0
        let rams4 = 0
        let rams5 = 0
            //функция перезаписи переменных
        function overwritingVariableRams() {
            if (rams1 == 0) {
                rams1 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (rams1 != 0 && rams2 == 0) {
                rams2 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (rams1 != 0 && rams2 != 0 && rams3 == 0) {
                rams3 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (rams1 != 0 && rams2 != 0 && rams3 != 0 && rams4 == 0) {
                rams4 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (rams1 != 0 && rams2 != 0 && rams3 != 0 && rams4 != 0 && rams5 == 0) {
                rams5 = propertyRandomKeysObjectAllNumberGex
                return
            }
            console.log('бараны')
            console.log(rams1)
            console.log(rams2)
            console.log(rams3)
            console.log(rams4)
            console.log(rams5)
        }

        function overwritingVariableRams2() {
            if (rams1 == 0) {
                rams1 = newNumResGex
                return
            } else if (rams1 != 0 && rams2 == 0) {
                rams2 = newNumResGex
                return
            } else if (rams1 != 0 && rams2 != 0 && rams3 == 0) {
                rams3 = newNumResGex
                return
            } else if (rams1 != 0 && rams2 != 0 && rams3 != 0 && rams4 == 0) {
                rams4 = newNumResGex
                return
            } else if (rams1 != 0 && rams2 != 0 && rams3 != 0 && rams4 != 0 && rams5 == 0) {
                rams5 = newNumResGex
                return
            }
            console.log('бараны')
            console.log(rams1)
            console.log(rams2)
            console.log(rams3)
            console.log(rams4)
            console.log(rams5)
        }
        //
        //--массив номерных жетонов гекса ржи
        let rye1 = 0
        let rye2 = 0
        let rye3 = 0
        let rye4 = 0
        let rye5 = 0
            //функция перезаписи переменных
        function overwritingVariableRye() {
            if (rye1 == 0) {
                rye1 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (rye1 != 0 && rye2 == 0) {
                rye2 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (rye1 != 0 && rye2 != 0 && rye3 == 0) {
                rye3 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (rye1 != 0 && rye2 != 0 && rye3 != 0 && rye4 == 0) {
                rye4 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (rye1 != 0 && rye2 != 0 && rye3 != 0 && rye4 != 0 && rye5 == 0) {
                rye5 = propertyRandomKeysObjectAllNumberGex
                return
            }
            console.log('рожь')
            console.log(rye1)
            console.log(rye2)
            console.log(rye3)
            console.log(rye4)
            console.log(rye5)
        }

        function overwritingVariableRye2() {
            if (rye1 == 0) {
                rye1 = newNumResGex
                return
            } else if (rye1 != 0 && rye2 == 0) {
                rye2 = newNumResGex
                return
            } else if (rye1 != 0 && rye2 != 0 && rye3 == 0) {
                rye3 = newNumResGex
                return
            } else if (rye1 != 0 && rye2 != 0 && rye3 != 0 && rye4 == 0) {
                rye4 = newNumResGex
                return
            } else if (rye1 != 0 && rye2 != 0 && rye3 != 0 && rye4 != 0 && rye5 == 0) {
                rye5 = newNumResGex
                return
            }
            console.log('рожь')
            console.log(rye1)
            console.log(rye2)
            console.log(rye3)
            console.log(rye4)
            console.log(rye5)
        }
        //
        //--массив номерных жетонов гекса с камнем
        let stone1 = 0
        let stone2 = 0
        let stone3 = 0
        let stone4 = 0
        let stone5 = 0
            //функция перезаписи переменных
        function overwritingVariableStone() {
            if (stone1 == 0) {
                stone1 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (stone1 != 0 && stone2 == 0) {
                stone2 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (stone1 != 0 && stone2 != 0 && stone3 == 0) {
                stone3 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (stone1 != 0 && stone2 != 0 && stone3 != 0 && stone4 == 0) {
                stone4 = propertyRandomKeysObjectAllNumberGex
                return
            } else if (stone1 != 0 && stone2 != 0 && stone3 != 0 && stone4 != 0 && stone5 == 0) {
                stone5 = propertyRandomKeysObjectAllNumberGex
                return
            }
            console.log('камни')
            console.log(stone1)
            console.log(stone2)
            console.log(stone3)
            console.log(stone4)
            console.log(stone5)
        }

        function overwritingVariableStone2() {
            if (stone1 == 0) {
                stone1 = newNumResGex
                return
            } else if (stone1 != 0 && stone2 == 0) {
                stone2 = newNumResGex
                return
            } else if (stone1 != 0 && stone2 != 0 && stone3 == 0) {
                stone3 = newNumResGex
                return
            } else if (stone1 != 0 && stone2 != 0 && stone3 != 0 && stone4 == 0) {
                stone4 = newNumResGex
                return
            } else if (stone1 != 0 && stone2 != 0 && stone3 != 0 && stone4 != 0 && stone5 == 0) {
                stone5 = newNumResGex
                return
            }

            console.log('камни')
            console.log(stone1)
            console.log(stone2)
            console.log(stone3)
            console.log(stone4)
            console.log(stone5)
        }
        //------------------------------------------------------------

        //-----массивы в которые кладутся объекты с гексами карты(для подсчета сколько гексов того или иного ресурса)------------
        treeGexArray = []
        ryeGexArray = []
        ramsGexArray = []
        clayGexArray = []
        stoneGexArray = []
            //------------------------------------------------------------

        //---сортировка гексов по классам ресурсов(дерево,бараны,рожь,глина,камень)
        populatingArrayEachResource()


        //-------НОМЕРА НА ГЛИНЕ--------
        function numberCheckGexClay() {
            clayGexArray.forEach(function(element) {
                let clayGexMapNumber = element.children[0]
                clayNumberGexRandom()
                clayGexMapNumber.textContent = propertyRandomKeysObjectClayNumberGex
                if (propertyRandomKeysObjectClayNumberGex != 6 && propertyRandomKeysObjectClayNumberGex != 8) {
                    let indexNum;
                    clayNumberGexArray.find((item, index) => {
                        if (item != 6 && item != 8) {
                            indexNum = index;
                            return item
                        }
                    });
                    let indexAllNum;
                    gexNumberArray.find((item, index) => {
                        if (item == propertyRandomKeysObjectClayNumberGex) {
                            indexAllNum = index;
                            return item
                        }
                    });
                    clayNumberGexArray.splice(indexNum, 4);
                    gexNumberArray.splice(indexAllNum, 1);
                } else if (propertyRandomKeysObjectClayNumberGex == 6) {
                    clayNumberGexArray.splice(keyObjectClayNumberGex, 1);
                } else if (propertyRandomKeysObjectClayNumberGex == 8) {
                    clayNumberGexArray.splice(keyObjectClayNumberGex, 1);
                }
            })
            return false
        }
        numberCheckGexClay()
        gettingNewValuesGexNumber()
        console.log(gexNumberArray);
        //
        //
        //
        //-------НОМЕРА НА ОСТАЛЬНЫХ ГЕКСАХ--------
        //--------1-------!

        function numberCheckGex1() {
            let comparisonNumberFilledGex = true

            for (i = 0; i < gexNumberArray.length; i++) {


                function chekingForMatchNum1() {
                    if (gex1.classList.contains('block1')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber4 && gexNumberArray[i] != gexNumber5 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5) {
                                // gex1 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber4 && gexNumberArray[i] != gexNumber5 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 11) {
                                // gex1 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber4 && gexNumberArray[i] != gexNumber5 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 3) {
                                //gex1 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex1.classList.contains('block2')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber4 && gexNumberArray[i] != gexNumber5 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5) {
                                // gex1 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber4 && gexNumberArray[i] != gexNumber5 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 11) {
                                // gex1 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber4 && gexNumberArray[i] != gexNumber5 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 3) {
                                //gex1 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex1.classList.contains('block3')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber2 &&
                                gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber5 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5) {
                                // gex1 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber2 &&
                                gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber5 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 11) {
                                // gex1 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber2 &&
                                gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber5 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 3) {
                                //gex1 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex1.classList.contains('block4')) {
                        if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber2 &&
                                gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber5 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5) {
                                // gex1 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber2 &&
                                gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber5 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 11) {
                                // gex1 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber2 &&
                                gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber5 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 3) {
                                //gex1 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else { return }
                }
                chekingForMatchNum1()
                if (comparisonNumberFilledGex == false) {
                    gex1.children[0].textContent = gexNumberArray[i]
                    console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])

                    //Функция удаления из масива
                    if (gex1.classList.contains('block4')) { console.log('глина'); } else {
                        let indexAllNum;
                        gexNumberArray.find((item, index) => {
                            if (item == gex1.children[0].textContent) {
                                indexAllNum = index;
                                return item
                            }
                        });
                        gexNumberArray.splice(indexAllNum, 1);
                    }
                    return
                } else {
                    chekingForMatchNum1()
                }
            }
        }
        //--------2-------!
        function numberCheckGex2() {
            allNumberGexRandom()
            if (gex2.classList.contains('block1')) {
                console.log('дерево');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

                    while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                        allNumberGexRandom()
                    }
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //---
                else {
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                }
                return
            } else if (gex2.classList.contains('block2')) {
                console.log('бараны');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                        allNumberGexRandom()
                    }
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //---
                else {
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                }
                return
            } else if (gex2.classList.contains('block3')) {
                console.log('рожь');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                        allNumberGexRandom()
                    }
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //---
                else {
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                }
                return
            } else if (gex2.classList.contains('block5')) {
                console.log('камень');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                        allNumberGexRandom()
                    }
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //---
                else {
                    gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                }
                return
            } else {
                console.log('глина');
            }
        }

        //
        //
        //
        //--------3-------!

        function numberCheckGex3() {
            let comparisonNumberFilledGex = true

            for (i = 0; i < gexNumberArray.length; i++) {


                function chekingForMatchNum3() {
                    if (gex3.classList.contains('block1')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber6 && gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5) {
                                // gex3 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber6 && gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 11) {
                                // gex3 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber6 && gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 3) {
                                //gex3 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex3.classList.contains('block2')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber6 && gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5) {
                                // gex3 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber6 && gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 11) {
                                // gex3 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber6 && gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 3) {
                                //gex3 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex3.classList.contains('block3')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber6 && gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5) {
                                // gex3 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber6 && gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 11) {
                                // gex3 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber6 && gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 3) {
                                //gex3 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex3.classList.contains('block4')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber6 && gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5) {
                                // gex3 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber6 && gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 11) {
                                // gex3 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber2 && gexNumberArray[i] != gexNumber6 && gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 3) {
                                //gex3 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else { return }
                }
                chekingForMatchNum3()
                if (comparisonNumberFilledGex == false) {
                    gex3.children[0].textContent = gexNumberArray[i]
                    console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])

                    //Функция удаления из масива
                    if (gex3.classList.contains('block4')) { console.log('глина'); } else {
                        let indexAllNum;
                        gexNumberArray.find((item, index) => {
                            if (item == gex3.children[0].textContent) {
                                indexAllNum = index;
                                return item
                            }
                        });
                        gexNumberArray.splice(indexAllNum, 1);
                    }
                    return
                }
            }
        }
        //--------4-------!
        function numberCheckGex4() {
            allNumberGexRandom()
            if (gex4.classList.contains('block1')) {
                console.log('дерево');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                        allNumberGexRandom()
                    }
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //---
                else {
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                }
                return
            } else if (gex4.classList.contains('block2')) {
                console.log('бараны');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                        allNumberGexRandom()
                    }
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //---
                else {
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                }
                return
            } else if (gex4.classList.contains('block3')) {
                console.log('рожь');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                        allNumberGexRandom()
                    }
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //---
                else {
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                }
                return
            } else if (gex4.classList.contains('block5')) {
                console.log('камень');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                        allNumberGexRandom()
                    }
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //---
                else {
                    gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                }
                return
            } else {
                console.log('глина');
            }
        }


        //
        //
        //
        //--------5-------!
        function numberCheckGex5() {
            allNumberGexRandom()
            if (gex5.classList.contains('block1')) {
                console.log('дерево');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                        allNumberGexRandom()
                    }
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //---
                else {
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                }
                return
            } else if (gex5.classList.contains('block2')) {
                console.log('бараны');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                        allNumberGexRandom()
                    }
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //---
                else {
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                }
                return
            } else if (gex5.classList.contains('block3')) {
                console.log('рожь');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                        allNumberGexRandom()
                    }
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //---
                else {
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                }
                return
            } else if (gex5.classList.contains('block5')) {
                console.log('камень');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                        allNumberGexRandom()
                    }
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //---
                else {
                    gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                }
                return
            } else {
                console.log('глина');
            }
        }

        //
        //
        //
        //--------6-------!
        function numberCheckGex6() {
            allNumberGexRandom()
            if (gex6.classList.contains('block1')) {
                console.log('дерево');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                        allNumberGexRandom()
                    }
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //---
                else {
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                }
                return
            } else if (gex6.classList.contains('block2')) {
                console.log('бараны');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                        allNumberGexRandom()
                    }
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //---
                else {
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                }
                return
            } else if (gex6.classList.contains('block3')) {
                console.log('рожь');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                        allNumberGexRandom()
                    }
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //---
                else {
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                }
                return
            } else if (gex6.classList.contains('block5')) {
                console.log('камень');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                        allNumberGexRandom()
                    }
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //---
                else {
                    gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                }
                return
            } else {
                console.log('глина');
            }
        }

        //
        //
        //
        //
        //--------7-------!
        function numberCheckGex7() {
            allNumberGexRandom()
            if (gex7.classList.contains('block1')) {
                console.log('дерево');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                        allNumberGexRandom()
                    }
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //---
                else {
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                }
                return
            } else if (gex7.classList.contains('block2')) {
                console.log('бараны');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                        allNumberGexRandom()
                    }
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //---
                else {
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                }
                return
            } else if (gex7.classList.contains('block3')) {
                console.log('рожь');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                        allNumberGexRandom()
                    }
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //---
                else {
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                }
                return
            } else if (gex7.classList.contains('block5')) {
                console.log('камень');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                        allNumberGexRandom()
                    }
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //---
                else {
                    gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                }
                return
            } else {
                console.log('глина');
            }
        }

        //
        //
        //
        //
        //--------8-------!

        function numberCheckGex8() {
            let comparisonNumberFilledGex = true

            for (i = 0; i < gexNumberArray.length; i++) {


                function chekingForMatchNum8() {
                    if (gex8.classList.contains('block1')) {
                        if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber9 &&
                                gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5) {
                                // gex8 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber9 &&
                                gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 11) {
                                // gex8 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber9 &&
                                gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 3) {
                                //gex8 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex8.classList.contains('block2')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber9 &&
                                gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5) {
                                // gex8 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber9 &&
                                gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 11) {
                                // gex8 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber9 &&
                                gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 3) {
                                //gex8 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex8.classList.contains('block3')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber9 &&
                                gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5) {
                                // gex8 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber9 &&
                                gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 11) {
                                // gex8 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber9 &&
                                gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 3) {
                                //gex8 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex8.classList.contains('block4')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber9 &&
                                gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5) {
                                // gex8 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber4 &&
                                gexNumberArray[i] != gexNumber9 &&
                                gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 11) {
                                // gex8 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber4 && gexNumberArray[i] != gexNumber9 && gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 3) {
                                //gex8 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else { return }
                }
                chekingForMatchNum8()
                if (comparisonNumberFilledGex == false) {
                    gex8.children[0].textContent = gexNumberArray[i]
                    console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])

                    //Функция удаления из масива
                    if (gex8.classList.contains('block4')) { console.log('глина'); } else {
                        let indexAllNum;
                        gexNumberArray.find((item, index) => {
                            if (item == gex8.children[0].textContent) {
                                indexAllNum = index;
                                return item
                            }
                        });
                        gexNumberArray.splice(indexAllNum, 1);
                    }
                    return
                }
            }
        }

        //--------9-------!
        function numberCheckGex9() {
            allNumberGexRandom()
            if (gex9.classList.contains('block1')) {
                console.log('дерево');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                        allNumberGexRandom()
                    }
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //---
                else {
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                }
                return
            } else if (gex9.classList.contains('block2')) {
                console.log('бараны');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                        allNumberGexRandom()
                    }
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //---
                else {
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                }
                return
            } else if (gex9.classList.contains('block3')) {
                console.log('рожь');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                        allNumberGexRandom()
                    }
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //---
                else {
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                }
                return
            } else if (gex9.classList.contains('block5')) {
                console.log('камень');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                        allNumberGexRandom()
                    }
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //---
                else {
                    gex9.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                }
                return
            } else {
                console.log('глина');
            }
        }

        //
        //
        //
        //

        //--------10-------!
        function numberCheckGex10() {
            allNumberGexRandom()
            if (gex10.classList.contains('block1')) {
                console.log('дерево');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                        allNumberGexRandom()
                    }
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //---
                else {
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                }
                return
            } else if (gex10.classList.contains('block2')) {
                console.log('бараны');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                        allNumberGexRandom()
                    }
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //---
                else {
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                }
                return
            } else if (gex10.classList.contains('block3')) {
                console.log('рожь');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                        allNumberGexRandom()
                    }
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //---
                else {
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                }
                return
            } else if (gex10.classList.contains('block5')) {
                console.log('камень');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                        allNumberGexRandom()
                    }
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //---
                else {
                    gex10.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                }
                return
            } else {
                console.log('глина');
            }
        }

        //
        //
        //
        //

        //--------11-------
        function numberCheckGex11() {
            allNumberGexRandom()
            if (gex11.classList.contains('block1')) {
                console.log('дерево');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                        allNumberGexRandom()
                    }
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //---
                else {
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                }
                return
            } else if (gex11.classList.contains('block2')) {
                console.log('бараны');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                        allNumberGexRandom()
                    }
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //---
                else {
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                }
                return
            } else if (gex11.classList.contains('block3')) {
                console.log('рожь');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                        allNumberGexRandom()
                    }
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //---
                else {
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                }
                return
            } else if (gex11.classList.contains('block5')) {
                console.log('камень');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                        allNumberGexRandom()
                    }
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //---
                else {
                    gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                }
                return
            } else {
                console.log('глина');
            }
        }
        //--------12-------!

        function numberCheckGex12() {
            let comparisonNumberFilledGex = true

            for (i = 0; i < gexNumberArray.length; i++) {


                function chekingForMatchNum12() {
                    if (gex12.classList.contains('block1')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5) {
                                // gex12 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 11) {
                                // gex12 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 3) {
                                //gex12 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex12.classList.contains('block2')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5) {
                                // gex12 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 11) {
                                // gex12 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 3) {
                                //gex12 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex12.classList.contains('block3')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5) {
                                // gex12 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 11) {
                                // gex12 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 3) {
                                //gex12 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex12.classList.contains('block4')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5) {
                                // gex12 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 11) {
                                // gex12 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber7 && gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 3) {
                                //gex12 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else { return }
                }
                chekingForMatchNum12()
                if (comparisonNumberFilledGex == false) {
                    gex12.children[0].textContent = gexNumberArray[i]
                    console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])

                    //Функция удаления из масива
                    if (gex12.classList.contains('block4')) { console.log('глина'); } else {
                        let indexAllNum;
                        gexNumberArray.find((item, index) => {
                            if (item == gex12.children[0].textContent) {
                                indexAllNum = index;
                                return item
                            }
                        });
                        gexNumberArray.splice(indexAllNum, 1);
                    }
                    return
                }
            }
        }
        //
        //
        //
        //

        //--------13-------!
        function numberCheckGex13() {
            let comparisonNumberFilledGex = true

            for (i = 0; i < gexNumberArray.length; i++) {


                function chekingForMatchNum13() {
                    if (gex13.classList.contains('block1')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber8 && gexNumberArray[i] != gexNumber9 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5) {
                                // gex13.children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber8 && gexNumberArray[i] != gexNumber9 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 11) {
                                // gex13 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber8 && gexNumberArray[i] != gexNumber9 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 3) {
                                //gex13 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex13.classList.contains('block2')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber8 && gexNumberArray[i] != gexNumber9 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5) {
                                // gex13 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber8 && gexNumberArray[i] != gexNumber9 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 11) {
                                // gex13 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber8 && gexNumberArray[i] != gexNumber9 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 3) {
                                //gex13 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex13.classList.contains('block3')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber8 && gexNumberArray[i] != gexNumber9 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5) {
                                // gex13 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber8 && gexNumberArray[i] != gexNumber9 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 11) {
                                // gex13 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber8 && gexNumberArray[i] != gexNumber9 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 3) {
                                //gex13 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex13.classList.contains('block4')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber8 && gexNumberArray[i] != gexNumber9 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5) {
                                // gex13 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber8 && gexNumberArray[i] != gexNumber9 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 11) {
                                // gex13 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber8 && gexNumberArray[i] != gexNumber9 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 3) {
                                //gex13 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else { return }
                }
                chekingForMatchNum13()
                if (comparisonNumberFilledGex == false) {
                    gex13.children[0].textContent = gexNumberArray[i]
                    console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])

                    //Функция удаления из масива
                    if (gex13.classList.contains('block4')) { console.log('глина'); } else {
                        let indexAllNum;
                        gexNumberArray.find((item, index) => {
                            if (item == gex13.children[0].textContent) {
                                indexAllNum = index;
                                return item
                            }
                        });
                        gexNumberArray.splice(indexAllNum, 1);
                    }
                    return
                }
            }
        }



        //
        //
        //
        //

        //--------14-------!
        function numberCheckGex14() {
            allNumberGexRandom()
            if (gex14.classList.contains('block1')) {
                console.log('дерево');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                        allNumberGexRandom()
                    }
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //---
                else {
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                }
                return
            } else if (gex14.classList.contains('block2')) {
                console.log('бараны');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                        allNumberGexRandom()
                    }
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //---
                else {
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                }
                return
            } else if (gex14.classList.contains('block3')) {
                console.log('рожь');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                        allNumberGexRandom()
                    }
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //---
                else {
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                }
                return
            } else if (gex14.classList.contains('block5')) {
                console.log('камень');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                        allNumberGexRandom()
                    }
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //---
                else {
                    gex14.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                }
                return
            } else {
                console.log('глина');
            }
        }

        //
        //
        //
        //

        //--------15-------!
        function numberCheckGex15() {
            allNumberGexRandom()
            if (gex15.classList.contains('block1')) {
                console.log('дерево');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                        allNumberGexRandom()
                    }
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                    return
                }
                //---
                else {
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableTrees()
                }
                return
            } else if (gex15.classList.contains('block2')) {
                console.log('бараны');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                        allNumberGexRandom()
                    }
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                    return
                }
                //---
                else {
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRams()
                }
                return
            } else if (gex15.classList.contains('block3')) {
                console.log('рожь');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                        allNumberGexRandom()
                    }
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                    return
                }
                //---
                else {
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableRye()
                }
                return
            } else if (gex15.classList.contains('block5')) {
                console.log('камень');
                if (propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                    while (propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                        allNumberGexRandom()
                    }
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }

                //проверка на 3 и 11
                //3
                else if (propertyRandomKeysObjectAllNumberGex === 3) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                        allNumberGexRandom()
                    }
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //11
                else if (propertyRandomKeysObjectAllNumberGex === 11) {

                    while (propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                        propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                        allNumberGexRandom()
                    }
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                    return
                }
                //---
                else {
                    gex15.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                    overwritingVariableStone()
                }
                return
            } else {
                console.log('глина');
            }
        }
        //
        //--------16-------!
        function numberCheckGex16() {
            let comparisonNumberFilledGex = true
            for (i = 0; i < gexNumberArray.length; i++) {


                function chekingForMatchNum16() {
                    if (gex16.classList.contains('block1')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber12 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5) {
                                // gex16 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber12 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 11) {
                                // gex16 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber12 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 3) {
                                //gex16 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex16.classList.contains('block2')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber12 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5) {
                                // gex16 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber12 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 11) {
                                // gex16 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber12 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 3) {
                                //gex16 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex16.classList.contains('block3')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber12 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5) {
                                // gex16 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber12 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 11) {
                                // gex16 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber12 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 3) {
                                //gex16 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex16.classList.contains('block4')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber12 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5) {
                                // gex16 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber12 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 11) {
                                // gex16 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber11 && gexNumberArray[i] != gexNumber12 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 3) {
                                //gex16 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else { return }
                }
                chekingForMatchNum16()
                if (comparisonNumberFilledGex == false) {
                    gex16.children[0].textContent = gexNumberArray[i]
                    console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])

                    //Функция удаления из масива
                    if (gex16.classList.contains('block4')) { console.log('глина'); } else {
                        let indexAllNum;
                        gexNumberArray.find((item, index) => {
                            if (item == gex16.children[0].textContent) {
                                indexAllNum = index;
                                return item
                            }
                        });
                        gexNumberArray.splice(indexAllNum, 1);
                    }
                    return
                }
            }
        }
        //--------17-------!

        function numberCheckGex17() {
            let comparisonNumberFilledGex = true

            for (i = 0; i < gexNumberArray.length; i++) {


                function chekingForMatchNum17() {
                    if (gex17.classList.contains('block1')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5) {
                                // gex17 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 11) {
                                // gex17 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 3) {
                                //gex17 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex17.classList.contains('block2')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5) {
                                // gex17 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 11) {
                                // gex17 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 3) {
                                //gex17 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex17.classList.contains('block3')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5) {
                                // gex17 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 11) {
                                // gex17 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 3) {
                                //gex17 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex17.classList.contains('block4')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5) {
                                // gex17 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 11) {
                                // gex17 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber13 && gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 3) {
                                //gex17 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else { return }
                }
                chekingForMatchNum17()
                if (comparisonNumberFilledGex == false) {
                    gex17.children[0].textContent = gexNumberArray[i]
                    console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])

                    //Функция удаления из масива
                    if (gex17.classList.contains('block4')) { console.log('глина'); } else {
                        let indexAllNum;
                        gexNumberArray.find((item, index) => {
                            if (item == gex17.children[0].textContent) {
                                indexAllNum = index;
                                return item
                            }
                        });
                        gexNumberArray.splice(indexAllNum, 1);
                    }
                    return
                }
            }
        }
        //
        //
        //

        //--------18-------!
        function numberCheckGex18() {
            let comparisonNumberFilledGex = true

            for (i = 0; i < gexNumberArray.length; i++) {


                function chekingForMatchNum18() {
                    if (gex18.classList.contains('block1')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5) {
                                // gex18 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 11) {
                                // gex18 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 3) {
                                //gex18 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex18.classList.contains('block2')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5) {
                                // gex18 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 11) {
                                // gex18 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 3) {
                                //gex18 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex18.classList.contains('block3')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5) {
                                // gex18 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 11) {
                                // gex18 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 3) {
                                //gex18 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex18.classList.contains('block4')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5) {
                                // gex18 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 11) {
                                // gex18 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber14 && gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber17 && gexNumberArray[i] != gexNumber19 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 3) {
                                //gex18 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else { return }
                }
                chekingForMatchNum18()
                if (comparisonNumberFilledGex == false) {
                    gex18.children[0].textContent = gexNumberArray[i]
                    console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])

                    //Функция удаления из масива
                    if (gex18.classList.contains('block4')) { console.log('глина'); } else {
                        let indexAllNum;
                        gexNumberArray.find((item, index) => {
                            if (item == gex18.children[0].textContent) {
                                indexAllNum = index;
                                return item
                            }
                        });
                        gexNumberArray.splice(indexAllNum, 1);
                    }
                    return
                }
            }
        }
        //--------19-------!

        function numberCheckGex19() {
            let comparisonNumberFilledGex = true

            for (i = 0; i < gexNumberArray.length; i++) {


                function chekingForMatchNum19() {
                    if (gex19.classList.contains('block1')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5) {
                                // gex19 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 11) {
                                // gex19 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != tree1 && gexNumberArray[i] != tree2 && gexNumberArray[i] != tree3 && gexNumberArray[i] != tree4 && gexNumberArray[i] != tree5 && gexNumberArray[i] != 3) {
                                //gex19 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableTrees2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex19.classList.contains('block2')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5) {
                                // gex19 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 11) {
                                // gex19 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != rams1 && gexNumberArray[i] != rams2 && gexNumberArray[i] != rams3 && gexNumberArray[i] != rams4 && gexNumberArray[i] != rams5 && gexNumberArray[i] != 3) {
                                //gex19 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRams2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex19.classList.contains('block3')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5) {
                                // gex19 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 11) {
                                // gex19 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != rye1 && gexNumberArray[i] != rye2 && gexNumberArray[i] != rye3 && gexNumberArray[i] != rye4 && gexNumberArray[i] != rye5 && gexNumberArray[i] != 3) {
                                //gex19 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableRye2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else if (gex19.classList.contains('block4')) {
                        if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                            if (gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5) {
                                // gex19 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 3) {
                            if (gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 11) {
                                // gex19 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        } else if (gexNumberArray[i] == 11) {
                            if (gexNumberArray[i] != gexNumber15 && gexNumberArray[i] != gexNumber16 && gexNumberArray[i] != gexNumber18 && gexNumberArray[i] != stone1 && gexNumberArray[i] != stone2 && gexNumberArray[i] != stone3 && gexNumberArray[i] != stone4 && gexNumberArray[i] != stone5 && gexNumberArray[i] != 3) {
                                //gex19 .children[0].textContent = gexNumberArray[i]
                                console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])
                                newNumResGex = gexNumberArray[i]
                                overwritingVariableStone2()
                                return comparisonNumberFilledGex = false
                            } else {
                                return comparisonNumberFilledGex = true
                            }
                        }
                    } else { return }
                }
                chekingForMatchNum19()
                if (comparisonNumberFilledGex == false) {
                    gex19.children[0].textContent = gexNumberArray[i]
                    console.log('значение- gexNumberArray[i]: ' + gexNumberArray[i])

                    //Функция удаления из масива
                    if (gex19.classList.contains('block4')) { console.log('глина'); } else {
                        let indexAllNum;
                        gexNumberArray.find((item, index) => {
                            if (item == gex19.children[0].textContent) {
                                indexAllNum = index;
                                return item
                            }
                        });
                        gexNumberArray.splice(indexAllNum, 1);
                    }
                    return
                }
            }
        }
        //
        //
        //
        //
        //
        //
        //----------------------------------------------------------

        //-----1 на заполнение----
        console.log('10 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('10 гекс')
        numberCheckGex10()
            //Функция удаления из масива
        if (gex10.classList.contains('block4')) { console.log('глина'); } else {
            let indexAllNum;
            gexNumberArray.find((item, index) => {
                if (item == gex10.children[0].textContent) {
                    indexAllNum = index;
                    return item
                }
            });
            gexNumberArray.splice(indexAllNum, 1);
        }

        //-------2-на заполнение------
        console.log('5 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('5 гекс')
        numberCheckGex5()
            //Функция удаления из масива
        if (gex5.classList.contains('block4')) { console.log('глина'); } else {
            let indexAllNum;
            gexNumberArray.find((item, index) => {
                if (item == gex5.children[0].textContent) {
                    indexAllNum = index;
                    return item
                }
            });
            gexNumberArray.splice(indexAllNum, 1);
        }
        gettingNewValuesGexNumber()

        //--------3-на заполнение-------
        console.log('6 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('6 гекс')
        numberCheckGex6()
            //Функция удаления из масива
        if (gex6.classList.contains('block4')) { console.log('глина'); } else {
            let indexAllNum;
            gexNumberArray.find((item, index) => {
                if (item == gex6.children[0].textContent) {
                    indexAllNum = index;
                    return item
                }
            });
            gexNumberArray.splice(indexAllNum, 1);
        }
        gettingNewValuesGexNumber()

        //------4-на заполнение------
        console.log('11 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('11 гекс')
        numberCheckGex11()
            //Функция удаления из масива
        if (gex11.classList.contains('block4')) { console.log('глина'); } else {
            let indexAllNum;
            gexNumberArray.find((item, index) => {
                if (item == gex11.children[0].textContent) {
                    indexAllNum = index;
                    return item
                }
            });
            gexNumberArray.splice(indexAllNum, 1);
        }
        gettingNewValuesGexNumber()

        //--------5-на заполнение----
        console.log('15 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('15 гекс')
        numberCheckGex15()
            //Функция удаления из масива
        if (gex15.classList.contains('block4')) { console.log('глина'); } else {
            let indexAllNum;
            gexNumberArray.find((item, index) => {
                if (item == gex15.children[0].textContent) {
                    indexAllNum = index;
                    return item
                }
            });
            gexNumberArray.splice(indexAllNum, 1);
        }
        gettingNewValuesGexNumber()
            //-----------6-на заполнение------
        console.log('14 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('14 гекс')
        numberCheckGex14()
            //Функция удаления из масива
        if (gex14.classList.contains('block4')) { console.log('глина'); } else {
            let indexAllNum;
            gexNumberArray.find((item, index) => {
                if (item == gex14.children[0].textContent) {
                    indexAllNum = index;
                    return item
                }
            });
            gexNumberArray.splice(indexAllNum, 1);
        }
        gettingNewValuesGexNumber()

        //--------7-на заполнение------
        console.log('9 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('9 гекс')
        numberCheckGex9()
            //Функция удаления из масива
        if (gex9.classList.contains('block4')) { console.log('глина'); } else {
            let indexAllNum;
            gexNumberArray.find((item, index) => {
                if (item == gex9.children[0].textContent) {
                    indexAllNum = index;
                    return item
                }
            });
            gexNumberArray.splice(indexAllNum, 1);
        }
        gettingNewValuesGexNumber()

        //----8-на заполнение------
        console.log('2 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('2 гекс')
        numberCheckGex2()
            //Функция удаления из масива
        if (gex2.classList.contains('block4')) { console.log('глина'); } else {
            let indexAllNum;
            gexNumberArray.find((item, index) => {
                if (item == gex2.children[0].textContent) {
                    indexAllNum = index;
                    return item
                }
            });
            gexNumberArray.splice(indexAllNum, 1);
        }
        gettingNewValuesGexNumber()
            //----9-на заполнение------
        console.log('4 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('4 гекс')
        numberCheckGex4()
            //Функция удаления из масива
        if (gex4.classList.contains('block4')) { console.log('глина'); } else {
            let indexAllNum;
            gexNumberArray.find((item, index) => {
                if (item == gex4.children[0].textContent) {
                    indexAllNum = index;
                    return item
                }
            });
            gexNumberArray.splice(indexAllNum, 1);
        }
        gettingNewValuesGexNumber()
            //----10-на заполнение------
        console.log('7 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('7 гекс')
        numberCheckGex7()
            //Функция удаления из масива
        if (gex7.classList.contains('block4')) { console.log('глина'); } else {
            let indexAllNum;
            gexNumberArray.find((item, index) => {
                if (item == gex7.children[0].textContent) {
                    indexAllNum = index;
                    return item
                }
            });
            gexNumberArray.splice(indexAllNum, 1);
        }
        gettingNewValuesGexNumber()
            //----11-на заполнение------
        console.log('13 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('13 гекс')
        numberCheckGex13()

        gettingNewValuesGexNumber()
            //----12-на заполнение------
        console.log('16 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('16 гекс')
        numberCheckGex16()

        gettingNewValuesGexNumber()
            //----13-на заполнение------
        console.log('18 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('18 гекс')
        numberCheckGex18()


        gettingNewValuesGexNumber()
            //----14-на заполнение------
        console.log('1 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('1 гекс')
        numberCheckGex1()

        gettingNewValuesGexNumber()
            //----15-на заполнение------
        console.log('3 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('3 гекс')
        numberCheckGex3()

        gettingNewValuesGexNumber()
            //----16-на заполнение------
        console.log('8 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('8 гекс')
        numberCheckGex8()

        gettingNewValuesGexNumber()
            //----17-на заполнение------
        console.log('12 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('12 гекс')
        numberCheckGex12()

        gettingNewValuesGexNumber()
            //----18-на заполнение------
        console.log('17 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('17 гекс')
        numberCheckGex17()

        gettingNewValuesGexNumber()
            //----19-на заполнение------
        console.log('19 гекс')
        console.log('gexNumberArray ' + gexNumberArray)

        console.log('19 гекс')
        numberCheckGex19()


        gettingNewValuesGexNumber()
        console.log('деевья')
        console.log(tree1)
        console.log(tree2)
        console.log(tree3)
        console.log(tree4)
        console.log(tree5)
        console.log('бараны')
        console.log(rams1)
        console.log(rams2)
        console.log(rams3)
        console.log(rams4)
        console.log(rams5)
        console.log('рожь')
        console.log(rye1)
        console.log(rye2)
        console.log(rye3)
        console.log(rye4)
        console.log(rye5)
        console.log('камни')
        console.log(stone1)
        console.log(stone2)
        console.log(stone3)
        console.log(stone4)
        console.log(stone5)
        romainingNumberTokens.textContent = gexNumberArray
    }
    //
    //
    //
    //
console.log('----------ТОРМОЗИМ ЗАПОЛНЕНИЕ------------')
    // console.log('значение старого массива');

//console.log(gexNumberArray[0]);
//console.log('массив');

// console.log(gexNumberArray);
//console.log('новый рандом');
// console.log(randomNumber)