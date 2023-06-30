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

//---ПОИСК КОЛИЧЕСТВА ОДИНАКОВЫХ ЭЛЕМЕНТОВ В МАССИВЕ---
/*
let count = 0;
for (let i = 0; i < gexNumberArray.length; i++) {
    if (gexNumberArray[i] === 4) {
        count += 1
    }
}
console.log(count);
*/
//------------------------------------------------------

const numberGex6 = 6
const numberGex8 = 8


//---------ВСЕ РЕСУРСЫ КРОМЕ ГЛИНЫ-----

//массив номерных жетонов общий
let gexNumberArray = [3, 4, 5, 6, 8, 9, 10, 11, 4, 5, 6, 8, 9, 10, 4, 5, 9]
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

//--функция поиска элемента с его индексом в общем массиве
/*
function allNumberGexArrSearchDelete() {
    
    gexNumberArray.find((item, index) => {
        if (item == propertyRandomKeysObjectClayNumberGex) {
            indexAllNum = index;
            return item
        }
        gexNumberArray.splice(keyObjectAllNumberGex, 1)
    });
}
*/
//-------------------------------------------------------

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
//console.log('rrrrr');
//console.log(propertyRandomKeysObjectClayNumberGex);
//console.log(keyObjectClayNumberGex);
//console.log(clayGexArray);

/*------------------КЛИК-ФУНКЦИЯ--------------------------*/
generateNumberGexBtn.onclick = function() {

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
    gexNumberArray = [3, 4, 5, 6, 8, 9, 10, 11, 4, 5, 6, 8, 9, 10, 4, 5, 9]
    console.log(gexNumberArray);
    //--массив для глины
    clayNumberGexArray = [6, 8, 4, 5, 9, 10]
        //
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
    }
    //
    //
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
    }
    //
    //
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
    }
    //
    //
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

    //console.log('дерева: ' + quantityTreeGexArray);
    //console.log('ржи: ' + quantityRyeGexArray);
    //console.log('баранов: ' + quantityRamsGexArray);
    //console.log('глины: ' + quantityClayGexArray);
    //console.log('камней: ' + quantityStoneGexArray);
    //console.log(gexNumberArray)
    //
    //
    //
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
    //-------1-------
    function numberCheckGex1() {
        allNumberGexRandom()
        if (gex1.classList.contains('block1')) {
            console.log('дерево');
            if (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === tree1 || propertyRandomKeysObjectAllNumberGex === tree2 || propertyRandomKeysObjectAllNumberGex === tree3 || propertyRandomKeysObjectAllNumberGex === tree4 || propertyRandomKeysObjectAllNumberGex === tree5) {

                while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                    allNumberGexRandom()
                }
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
                return
            }
            //проверка на 6 и 8
            //6
            else if (propertyRandomKeysObjectAllNumberGex === 6) {

                while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == 8) {
                    allNumberGexRandom()
                }
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
                return
            }
            //8
            else if (propertyRandomKeysObjectAllNumberGex === 8) {

                while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == 6) {
                    allNumberGexRandom()
                }
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {

                while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == 11) {
                    allNumberGexRandom()
                }
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
                return
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {

                while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == 3) {
                    allNumberGexRandom()
                }
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
                return
            }
            //---
            else {
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
            }
            return
        } else if (gex1.classList.contains('block2')) {
            console.log('бараны');
            if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                    allNumberGexRandom()
                }
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
                return
            }
            //проверка на 6 и 8
            //6
            else if (propertyRandomKeysObjectAllNumberGex === 6) {

                while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == 8) {
                    allNumberGexRandom()
                }
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
                return
            }
            //8
            else if (propertyRandomKeysObjectAllNumberGex === 8) {

                while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == 6) {
                    allNumberGexRandom()
                }
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {

                while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == 11) {
                    allNumberGexRandom()
                }
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
                return
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {

                while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == 3) {
                    allNumberGexRandom()
                }
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
                return
            }
            //---
            else {
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
            }
            return
        } else if (gex1.classList.contains('block3')) {
            console.log('рожь');
            if (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === rye1 || propertyRandomKeysObjectAllNumberGex === rye2 || propertyRandomKeysObjectAllNumberGex === rye3 || propertyRandomKeysObjectAllNumberGex === rye4 || propertyRandomKeysObjectAllNumberGex === rye5) {
                while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                    allNumberGexRandom()
                }
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
                return
            } else {
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
            }
            return
        } else if (gex1.classList.contains('block5')) {
            console.log('камень');
            if (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === stone1 || propertyRandomKeysObjectAllNumberGex === stone2 || propertyRandomKeysObjectAllNumberGex === stone3 || propertyRandomKeysObjectAllNumberGex === stone4 || propertyRandomKeysObjectAllNumberGex === stone5) {
                while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                    allNumberGexRandom()
                }
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
                return
            } else {
                gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
            }
            return
        } else {
            console.log('глина');
        }
    }
    numberCheckGex1()
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
    gettingNewValuesGexNumber()
        //
        //
        //
        //-------2-------
    function numberCheckGex2() {
        allNumberGexRandom()
        if (gex2.classList.contains('block1')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === tree1 || propertyRandomKeysObjectAllNumberGex === tree2 || propertyRandomKeysObjectAllNumberGex === tree3 || propertyRandomKeysObjectAllNumberGex === tree4 || propertyRandomKeysObjectAllNumberGex === tree5) {
                while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                    allNumberGexRandom()
                }
                gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()

            } else {
                gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
            }
            return
        } else if (gex2.classList.contains('block2')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === rams1 || propertyRandomKeysObjectAllNumberGex === rams2 || propertyRandomKeysObjectAllNumberGex === rams3 || propertyRandomKeysObjectAllNumberGex === rams4 || propertyRandomKeysObjectAllNumberGex === rams5) {
                while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                    allNumberGexRandom()
                }
                gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()

            } else {
                gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
            }
            return
        } else if (gex2.classList.contains('block3')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === rye1 || propertyRandomKeysObjectAllNumberGex === rye2 || propertyRandomKeysObjectAllNumberGex === rye3 || propertyRandomKeysObjectAllNumberGex === rye4 || propertyRandomKeysObjectAllNumberGex === rye5) {
                while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                    allNumberGexRandom()
                }
                gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()

            } else {
                gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
            }
            return
        } else if (gex2.classList.contains('block5')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === stone1 || propertyRandomKeysObjectAllNumberGex === stone2 || propertyRandomKeysObjectAllNumberGex === stone3 || propertyRandomKeysObjectAllNumberGex === stone4 || propertyRandomKeysObjectAllNumberGex === stone5) {
                while (propertyRandomKeysObjectAllNumberGex == gexNumber1 || propertyRandomKeysObjectAllNumberGex == gexNumber3 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == gexNumber6 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                    allNumberGexRandom()
                }
                gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()

            } else {
                gex2.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
            }
            return
        } else {
            console.log('глина');
        }
    }
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
        //
        //
        //
        //-------3-------
    function numberCheckGex3() {
        allNumberGexRandom()
        if (gex3.classList.contains('block1')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === tree1 || propertyRandomKeysObjectAllNumberGex === tree2 || propertyRandomKeysObjectAllNumberGex === tree3 || propertyRandomKeysObjectAllNumberGex === tree4 || propertyRandomKeysObjectAllNumberGex === tree5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                    allNumberGexRandom()
                }
                gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()

            } else {
                gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
            }
            return
        } else if (gex3.classList.contains('block2')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === rams1 || propertyRandomKeysObjectAllNumberGex === rams2 || propertyRandomKeysObjectAllNumberGex === rams3 || propertyRandomKeysObjectAllNumberGex === rams4 || propertyRandomKeysObjectAllNumberGex === rams5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                    allNumberGexRandom()
                }
                gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()

            } else {
                gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
            }
            return
        } else if (gex3.classList.contains('block3')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === rye1 || propertyRandomKeysObjectAllNumberGex === rye2 || propertyRandomKeysObjectAllNumberGex === rye3 || propertyRandomKeysObjectAllNumberGex === rye4 || propertyRandomKeysObjectAllNumberGex === rye5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                    allNumberGexRandom()
                }
                gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()

            } else {
                gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
            }
            return
        } else if (gex3.classList.contains('block5')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === stone1 || propertyRandomKeysObjectAllNumberGex === stone2 || propertyRandomKeysObjectAllNumberGex === stone3 || propertyRandomKeysObjectAllNumberGex === stone4 || propertyRandomKeysObjectAllNumberGex === stone5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                    allNumberGexRandom()
                }
                gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()

            } else {
                gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
            }
            return
        } else {
            console.log('глина');
        }
    }
    numberCheckGex3()
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
    gettingNewValuesGexNumber()
        //
        //
        //
        //-------4-------
    function numberCheckGex4() {
        allNumberGexRandom()
        if (gex4.classList.contains('block1')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === tree1 || propertyRandomKeysObjectAllNumberGex === tree2 || propertyRandomKeysObjectAllNumberGex === tree3 || propertyRandomKeysObjectAllNumberGex === tree4 || propertyRandomKeysObjectAllNumberGex === tree5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                    allNumberGexRandom()
                }
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()

            } else {
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
            }
            return
        } else if (gex4.classList.contains('block2')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === rams1 || propertyRandomKeysObjectAllNumberGex === rams2 || propertyRandomKeysObjectAllNumberGex === rams3 || propertyRandomKeysObjectAllNumberGex === rams4 || propertyRandomKeysObjectAllNumberGex === rams5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                    allNumberGexRandom()
                }
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()

            } else {
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
            }
            return
        } else if (gex4.classList.contains('block3')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === rye1 || propertyRandomKeysObjectAllNumberGex === rye2 || propertyRandomKeysObjectAllNumberGex === rye3 || propertyRandomKeysObjectAllNumberGex === rye4 || propertyRandomKeysObjectAllNumberGex === rye5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                    allNumberGexRandom()
                }
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()

            } else {
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
            }
            return
        } else if (gex4.classList.contains('block5')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === stone1 || propertyRandomKeysObjectAllNumberGex === stone2 || propertyRandomKeysObjectAllNumberGex === stone3 || propertyRandomKeysObjectAllNumberGex === stone4 || propertyRandomKeysObjectAllNumberGex === stone5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                    allNumberGexRandom()
                }
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()

            } else {
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
            }
            return
        } else {
            console.log('глина');
        }
    }
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
        //
        //
        //
        //-------5-------
    function numberCheckGex5() {
        allNumberGexRandom()
        if (gex5.classList.contains('block1')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === tree1 || propertyRandomKeysObjectAllNumberGex === tree2 || propertyRandomKeysObjectAllNumberGex === tree3 || propertyRandomKeysObjectAllNumberGex === tree4 || propertyRandomKeysObjectAllNumberGex === tree5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                    allNumberGexRandom()
                }
                gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()

            } else {
                gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
            }
            return
        } else if (gex5.classList.contains('block2')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === rams1 || propertyRandomKeysObjectAllNumberGex === rams2 || propertyRandomKeysObjectAllNumberGex === rams3 || propertyRandomKeysObjectAllNumberGex === rams4 || propertyRandomKeysObjectAllNumberGex === rams5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                    allNumberGexRandom()
                }
                gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()

            } else {
                gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
            }
            return
        } else if (gex5.classList.contains('block3')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === rye1 || propertyRandomKeysObjectAllNumberGex === rye2 || propertyRandomKeysObjectAllNumberGex === rye3 || propertyRandomKeysObjectAllNumberGex === rye4 || propertyRandomKeysObjectAllNumberGex === rye5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                    allNumberGexRandom()
                }
                gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()

            } else {
                gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
            }
            return
        } else if (gex5.classList.contains('block5')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === stone1 || propertyRandomKeysObjectAllNumberGex === stone2 || propertyRandomKeysObjectAllNumberGex === stone3 || propertyRandomKeysObjectAllNumberGex === stone4 || propertyRandomKeysObjectAllNumberGex === stone5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                    allNumberGexRandom()
                }
                gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()

            } else {
                gex5.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
            }
            return
        } else {
            console.log('глина');
        }
    }
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
        //
        //
        //
        //-------6-------
    function numberCheckGex6() {
        allNumberGexRandom()
        if (gex6.classList.contains('block1')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === tree1 || propertyRandomKeysObjectAllNumberGex === tree2 || propertyRandomKeysObjectAllNumberGex === tree3 || propertyRandomKeysObjectAllNumberGex === tree4 || propertyRandomKeysObjectAllNumberGex === tree5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                    allNumberGexRandom()
                }
                gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()

            } else {
                gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
            }
            return
        } else if (gex6.classList.contains('block2')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === rams1 || propertyRandomKeysObjectAllNumberGex === rams2 || propertyRandomKeysObjectAllNumberGex === rams3 || propertyRandomKeysObjectAllNumberGex === rams4 || propertyRandomKeysObjectAllNumberGex === rams5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                    allNumberGexRandom()
                }
                gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()

            } else {
                gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
            }
            return
        } else if (gex6.classList.contains('block3')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === rye1 || propertyRandomKeysObjectAllNumberGex === rye2 || propertyRandomKeysObjectAllNumberGex === rye3 || propertyRandomKeysObjectAllNumberGex === rye4 || propertyRandomKeysObjectAllNumberGex === rye5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                    allNumberGexRandom()
                }
                gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()

            } else {
                gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
            }
            return
        } else if (gex6.classList.contains('block5')) {
            if (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === stone1 || propertyRandomKeysObjectAllNumberGex === stone2 || propertyRandomKeysObjectAllNumberGex === stone3 || propertyRandomKeysObjectAllNumberGex === stone4 || propertyRandomKeysObjectAllNumberGex === stone5) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                    allNumberGexRandom()
                }
                gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()

            } else {
                gex6.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
            }
            return
        } else {
            console.log('глина');
        }
    }
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
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
    console.log(gexNumberArray);

    console.log('значение')
    console.log(propertyRandomKeysObjectAllNumberGex)
    console.log('index')
    console.log(keyObjectAllNumberGex);


}