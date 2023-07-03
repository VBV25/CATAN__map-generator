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
const romainingNumberTokens = document.getElementById('romainingNumberTokens');
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
let gexNumberArray = [3, 4, 5, 6, 8, 9, 10, 11, 4, 5, 6, 8, 9, 10, 4, 5, 9];
//--функция-взятия рандомного значения с индексом из общего массива
//значение
let propertyRandomKeysObjectAllNumberGex;
//index
let keyObjectAllNumberGex;

function allNumberGexRandom() {
    let keysObjectAllNumberGex = Object.keys(gexNumberArray);
    let randomObjectAllNumberGexArray = Math.floor(
        Math.random() * keysObjectAllNumberGex.length
    );
    keyObjectAllNumberGex = keysObjectAllNumberGex[randomObjectAllNumberGexArray];
    for (let j = 0; j < keysObjectAllNumberGex.length; j++) {
        if (keysObjectAllNumberGex[j] == keyObjectAllNumberGex) {
            propertyRandomKeysObjectAllNumberGex =
                gexNumberArray[keysObjectAllNumberGex[j]];
        }
    }
}
//-------------------------------------------------------
//--рандом число
/*
let keyObjectNumber;
let randomNumber;
let numberArray = [3, 4, 5, 6, 8, 9, 10, 11];

function randomNumberFunction() {
    let keysObjectNumber = Object.keys(numberArray);
    let randomObjectNumber = Math.floor(Math.random() * keysObjectNumber.length);
    keyObjectNumber = keysObjectNumber[randomObjectNumber];
    for (let j = 0; j < keysObjectNumber.length; j++) {
        if (keysObjectNumber[j] == keyObjectNumber) {
            randomNumber = numberArray[keysObjectNumber[j]];
        }
    }
}
*/

//-----------
//-------------------ГЛИНА-------------
//массив номерных жетонов для гексов с глиной
let clayNumberGexArray = [6, 8, 4, 5, 9, 10];
//--функция-взятия рандомного значения с индексом из массива для глины
//значение
let propertyRandomKeysObjectClayNumberGex;
//index
let keyObjectClayNumberGex;

function clayNumberGexRandom() {
    let keysObjectClayNumberGex = Object.keys(clayNumberGexArray);
    let randomObjectClayNumberGexArray = Math.floor(
        Math.random() * keysObjectClayNumberGex.length
    );
    keyObjectClayNumberGex =
        keysObjectClayNumberGex[randomObjectClayNumberGexArray];
    for (let j = 0; j < keysObjectClayNumberGex.length; j++) {
        if (keysObjectClayNumberGex[j] == keyObjectClayNumberGex) {
            propertyRandomKeysObjectClayNumberGex =
                clayNumberGexArray[keysObjectClayNumberGex[j]];
        }
    }
}

/*------------------КЛИК-ФУНКЦИЯ--------------------------*/
generateNumberGexBtn.onclick = function() {
    //
    let arrayAllGexTextNum1 = [];
    //
    let newNumResGex = 0;
    gex1.children[0].textContent = 1;
    gex2.children[0].textContent = 1;
    gex3.children[0].textContent = 1;
    gex4.children[0].textContent = 1;
    gex5.children[0].textContent = 1;
    gex6.children[0].textContent = 1;
    gex7.children[0].textContent = 1;
    gex8.children[0].textContent = 1;
    gex9.children[0].textContent = 1;
    gex10.children[0].textContent = 1;
    gex11.children[0].textContent = 1;
    gex12.children[0].textContent = 1;
    gex13.children[0].textContent = 1;
    gex14.children[0].textContent = 1;

    //-------------МАССИВЫ С НОМЕРНЫМИ ЖЕТОНАМИ-----------------
    //--общий массив с номерными жетонами--
    gexNumberArray = [3, 4, 5, 6, 8, 9, 10, 11, 4, 5, 6, 8, 9, 10, 4, 5, 9];
    //--массив для глины
    clayNumberGexArray = [6, 8, 4, 5, 9, 10];
    //
    //-----крайние  гексы
    //numberArray = [3, 4, 5, 6, 8, 9, 10, 11];
    //


    //номерные жетоны гекса с деревом
    let tree1 = 0;
    let tree2 = 0;
    let tree3 = 0;
    let tree4 = 0;
    let tree5 = 0;
    let tree6 = 0;
    //функция перезаписи переменных
    function overwritingVariableTrees() {
        if (tree1 == 0) {
            tree1 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (tree1 != 0 && tree2 == 0) {
            tree2 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (tree1 != 0 && tree2 != 0 && tree3 == 0) {
            tree3 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (tree1 != 0 && tree2 != 0 && tree3 != 0 && tree4 == 0) {
            tree4 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (
            tree1 != 0 &&
            tree2 != 0 &&
            tree3 != 0 &&
            tree4 != 0 &&
            tree5 == 0
        ) {
            tree5 = propertyRandomKeysObjectAllNumberGex;
            return;
        }
    }

    function overwritingVariableTrees2() {
        if (tree1 == 0) {
            tree1 = newNumResGex;
            return;
        } else if (tree1 != 0 && tree2 == 0) {
            tree2 = newNumResGex;
            return;
        } else if (tree1 != 0 && tree2 != 0 && tree3 == 0) {
            tree3 = newNumResGex;
            return;
        } else if (tree1 != 0 && tree2 != 0 && tree3 != 0 && tree4 == 0) {
            tree4 = newNumResGex;
            return;
        } else if (
            tree1 != 0 &&
            tree2 != 0 &&
            tree3 != 0 &&
            tree4 != 0 &&
            tree5 == 0
        ) {
            tree5 = newNumResGex;
            return;
        }
    }
    //
    //номерные жетоны гекса с бараними
    let rams1 = 0;
    let rams2 = 0;
    let rams3 = 0;
    let rams4 = 0;
    let rams5 = 0;
    let rams6 = 0;
    //функция перезаписи переменных
    function overwritingVariableRams() {
        if (rams1 == 0) {
            rams1 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (rams1 != 0 && rams2 == 0) {
            rams2 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (rams1 != 0 && rams2 != 0 && rams3 == 0) {
            rams3 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (rams1 != 0 && rams2 != 0 && rams3 != 0 && rams4 == 0) {
            rams4 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (
            rams1 != 0 &&
            rams2 != 0 &&
            rams3 != 0 &&
            rams4 != 0 &&
            rams5 == 0
        ) {
            rams5 = propertyRandomKeysObjectAllNumberGex;
            return;
        }
    }

    function overwritingVariableRams2() {
        if (rams1 == 0) {
            rams1 = newNumResGex;
            return;
        } else if (rams1 != 0 && rams2 == 0) {
            rams2 = newNumResGex;
            return;
        } else if (rams1 != 0 && rams2 != 0 && rams3 == 0) {
            rams3 = newNumResGex;
            return;
        } else if (rams1 != 0 && rams2 != 0 && rams3 != 0 && rams4 == 0) {
            rams4 = newNumResGex;
            return;
        } else if (
            rams1 != 0 &&
            rams2 != 0 &&
            rams3 != 0 &&
            rams4 != 0 &&
            rams5 == 0
        ) {
            rams5 = newNumResGex;
            return;
        }
    }
    //
    //--массив номерных жетонов гекса ржи
    let rye1 = 0;
    let rye2 = 0;
    let rye3 = 0;
    let rye4 = 0;
    let rye5 = 0;
    let rye6 = 0;
    //функция перезаписи переменных
    function overwritingVariableRye() {
        if (rye1 == 0) {
            rye1 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (rye1 != 0 && rye2 == 0) {
            rye2 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (rye1 != 0 && rye2 != 0 && rye3 == 0) {
            rye3 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (rye1 != 0 && rye2 != 0 && rye3 != 0 && rye4 == 0) {
            rye4 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (rye1 != 0 && rye2 != 0 && rye3 != 0 && rye4 != 0 && rye5 == 0) {
            rye5 = propertyRandomKeysObjectAllNumberGex;
            return;
        }
    }

    function overwritingVariableRye2() {
        if (rye1 == 0) {
            rye1 = newNumResGex;
            return;
        } else if (rye1 != 0 && rye2 == 0) {
            rye2 = newNumResGex;
            return;
        } else if (rye1 != 0 && rye2 != 0 && rye3 == 0) {
            rye3 = newNumResGex;
            return;
        } else if (rye1 != 0 && rye2 != 0 && rye3 != 0 && rye4 == 0) {
            rye4 = newNumResGex;
            return;
        } else if (rye1 != 0 && rye2 != 0 && rye3 != 0 && rye4 != 0 && rye5 == 0) {
            rye5 = newNumResGex;
            return;
        }
    }
    //
    //номерные жетоны гекса с деревом
    let clay1 = 0;
    let clay2 = 0;
    let clay3 = 0;
    let clay4 = 0;
    let clay5 = 0;
    let clay6 = 0;
    //функция перезаписи переменных
    function overwritingVariableClay() {
        if (clay1 == 0) {
            clay1 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (clay1 != 0 && clay2 == 0) {
            clay2 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (clay1 != 0 && clay2 != 0 && clay3 == 0) {
            clay3 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (clay1 != 0 && clay2 != 0 && clay3 != 0 && clay4 == 0) {
            clay4 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (
            clay1 != 0 &&
            clay2 != 0 &&
            clay3 != 0 &&
            clay4 != 0 &&
            clay5 == 0
        ) {
            clay5 = propertyRandomKeysObjectAllNumberGex;
            return;
        }
    }

    function overwritingVariableClay2() {
        if (clay1 == 0) {
            clay1 = newNumResGex;
            return;
        } else if (clay1 != 0 && clay2 == 0) {
            clay2 = newNumResGex;
            return;
        } else if (clay1 != 0 && clay2 != 0 && clay3 == 0) {
            clay3 = newNumResGex;
            return;
        } else if (clay1 != 0 && clay2 != 0 && clay3 != 0 && clay4 == 0) {
            clay4 = newNumResGex;
            return;
        } else if (
            clay1 != 0 &&
            clay2 != 0 &&
            clay3 != 0 &&
            clay4 != 0 &&
            clay5 == 0
        ) {
            clay5 = newNumResGex;
            return;
        }
    }
    //
    //--массив номерных жетонов гекса с камнем
    let stone1 = 0;
    let stone2 = 0;
    let stone3 = 0;
    let stone4 = 0;
    let stone5 = 0;
    let stone6 = 0;
    //функция перезаписи переменных
    function overwritingVariableStone() {
        if (stone1 == 0) {
            stone1 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (stone1 != 0 && stone2 == 0) {
            stone2 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (stone1 != 0 && stone2 != 0 && stone3 == 0) {
            stone3 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (stone1 != 0 && stone2 != 0 && stone3 != 0 && stone4 == 0) {
            stone4 = propertyRandomKeysObjectAllNumberGex;
            return;
        } else if (
            stone1 != 0 &&
            stone2 != 0 &&
            stone3 != 0 &&
            stone4 != 0 &&
            stone5 == 0
        ) {
            stone5 = propertyRandomKeysObjectAllNumberGex;
            return;
        }
    }

    function overwritingVariableStone2() {
        if (stone1 == 0) {
            stone1 = newNumResGex;
            return;
        } else if (stone1 != 0 && stone2 == 0) {
            stone2 = newNumResGex;
            return;
        } else if (stone1 != 0 && stone2 != 0 && stone3 == 0) {
            stone3 = newNumResGex;
            return;
        } else if (stone1 != 0 && stone2 != 0 && stone3 != 0 && stone4 == 0) {
            stone4 = newNumResGex;
            return;
        } else if (
            stone1 != 0 &&
            stone2 != 0 &&
            stone3 != 0 &&
            stone4 != 0 &&
            stone5 == 0
        ) {
            stone5 = newNumResGex;
            return;
        }
    }
    //------------------------------------------------------------

    //-----массивы в которые кладутся объекты с гексами карты(для подсчета сколько гексов того или иного ресурса)------------
    treeGexArray = [];
    ryeGexArray = [];
    ramsGexArray = [];
    clayGexArray = [];
    stoneGexArray = [];
    //------------------------------------------------------------

    //---сортировка гексов по классам ресурсов(дерево,бараны,рожь,глина,камень)
    populatingArrayEachResource();

    //-------НОМЕРА НА ГЛИНЕ--------
    /*
    function numberCheckGexClay() {
        clayGexArray.forEach(function(element) {
            let clayGexMapNumber = element.children[0];
            clayNumberGexRandom();
            clayGexMapNumber.textContent = propertyRandomKeysObjectClayNumberGex;
            if (
                propertyRandomKeysObjectClayNumberGex != 6 &&
                propertyRandomKeysObjectClayNumberGex != 8
            ) {
                let indexNum;
                clayNumberGexArray.find((item, index) => {
                    if (item != 6 && item != 8) {
                        indexNum = index;
                        return item;
                    }
                });
                let indexAllNum;
                gexNumberArray.find((item, index) => {
                    if (item == propertyRandomKeysObjectClayNumberGex) {
                        indexAllNum = index;
                        return item;
                    }
                });
                clayNumberGexArray.splice(indexNum, 4);
                gexNumberArray.splice(indexAllNum, 1);
            } else if (propertyRandomKeysObjectClayNumberGex == 6) {
                clayNumberGexArray.splice(keyObjectClayNumberGex, 1);
            } else if (propertyRandomKeysObjectClayNumberGex == 8) {
                clayNumberGexArray.splice(keyObjectClayNumberGex, 1);
            }
        });
        return false;
    }
    numberCheckGexClay();
    gettingNewValuesGexNumber();
*/
    //-------НОМЕРА НА ОСТАЛЬНЫХ ГЕКСАХ--------
    //--------1-------!
    function numberCheckGex1() {
        let comparisonNumberFilledGex = true;
        for (let i = 0; i < gexNumberArray.length; i++) {
            function chekingForMatchNum1() {
                if (gex1.classList.contains('block1')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5
                        ) {
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 11;
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 3;
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex1.classList.contains('block2')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5
                        ) {
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 11;
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 3;
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex1.classList.contains('block3')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5
                        ) {
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 11;
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 3;
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex1.classList.contains('block4')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5
                        ) {
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 11;
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 3;
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex1.classList.contains('block5')) {
                    if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5
                        ) {
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 11;
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 3;
                            gex1.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                }
            }
            chekingForMatchNum1();
            if (comparisonNumberFilledGex == false) {
                //Функция удаления из масива
                let indexAllNum;
                gexNumberArray.find((item, index) => {
                    if (item == gex1.children[0].textContent) {
                        indexAllNum = index;
                        return item;
                    }
                });
                gexNumberArray.splice(indexAllNum, 1);
                return;
            } else {
                chekingForMatchNum1();
            }
        }
    }
    //--------2-------!
    function numberCheckGex2() {
        let comparisonNumberFilledGex = true;
        for (let i = 0; i < gexNumberArray.length; i++) {
            function chekingForMatchNum2() {
                if (gex2.classList.contains('block1')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5
                        ) {
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 11;
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 3;
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex2.classList.contains('block2')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5
                        ) {
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 11;
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 3;
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex2.classList.contains('block3')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5
                        ) {
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 11;
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 3;
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex2.classList.contains('block4')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5
                        ) {
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 11;
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 3;
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex2.classList.contains('block5')) {
                    if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5
                        ) {
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 11;
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 3;
                            gex2.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                }
            }
            chekingForMatchNum2();
            if (comparisonNumberFilledGex == false) {
                //Функция удаления из масива
                let indexAllNum;
                gexNumberArray.find((item, index) => {
                    if (item == gex2.children[0].textContent) {
                        indexAllNum = index;
                        return item;
                    }
                });
                gexNumberArray.splice(indexAllNum, 1);
                return;
            } else {
                chekingForMatchNum2();
            }
        }
    }
    //--------3-------!
    function numberCheckGex3() {
        let comparisonNumberFilledGex = true;
        for (let i = 0; i < gexNumberArray.length; i++) {
            function chekingForMatchNum3() {
                if (gex3.classList.contains('block1')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5
                        ) {
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 11;
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 3;
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex3.classList.contains('block2')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5
                        ) {
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 11;
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 3;
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex3.classList.contains('block3')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5
                        ) {
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 11;
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 3;
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex3.classList.contains('block4')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5
                        ) {
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 11;
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 3;
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex3.classList.contains('block5')) {
                    if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5
                        ) {
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 11;
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber1 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 3;
                            gex3.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                }
            }
            chekingForMatchNum3();
            if (comparisonNumberFilledGex == false) {
                //Функция удаления из масива
                let indexAllNum;
                gexNumberArray.find((item, index) => {
                    if (item == gex3.children[0].textContent) {
                        indexAllNum = index;
                        return item;
                    }
                });
                gexNumberArray.splice(indexAllNum, 1);
                return;
            } else {
                chekingForMatchNum3();
            }
        }
    }
    //--------4-------
    /* 
     || 
           */
    function numberCheckGex4() {
        allNumberGexRandom()
        if (gex4.classList.contains('block1')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 && propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                    allNumberGexRandom()
                }
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == tree1 ||
                    propertyRandomKeysObjectAllNumberGex == tree2 ||
                    propertyRandomKeysObjectAllNumberGex == tree3 ||
                    propertyRandomKeysObjectAllNumberGex == tree4 ||
                    propertyRandomKeysObjectAllNumberGex == tree5 ||
                    propertyRandomKeysObjectAllNumberGex == tree6
                ) {
                    allNumberGexRandom();
                }
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                tree6 = 11;
                overwritingVariableTrees();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == tree1 ||
                    propertyRandomKeysObjectAllNumberGex == tree2 ||
                    propertyRandomKeysObjectAllNumberGex == tree3 ||
                    propertyRandomKeysObjectAllNumberGex == tree4 ||
                    propertyRandomKeysObjectAllNumberGex == tree5 ||
                    propertyRandomKeysObjectAllNumberGex == tree6
                ) {
                    allNumberGexRandom();
                }
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                tree6 = 3;
                overwritingVariableTrees();
                return;
            }
            //---
            else {
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
            }
            return
        } else if (gex4.classList.contains('block2')) {
            console.log('бараны');
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                    allNumberGexRandom()
                }
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == rams1 ||
                    propertyRandomKeysObjectAllNumberGex == rams2 ||
                    propertyRandomKeysObjectAllNumberGex == rams3 ||
                    propertyRandomKeysObjectAllNumberGex == rams4 ||
                    propertyRandomKeysObjectAllNumberGex == rams5 ||
                    propertyRandomKeysObjectAllNumberGex == rams6
                ) {
                    allNumberGexRandom();
                }
                rams6 = 11;
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRams();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == rams1 ||
                    propertyRandomKeysObjectAllNumberGex == rams2 ||
                    propertyRandomKeysObjectAllNumberGex == rams3 ||
                    propertyRandomKeysObjectAllNumberGex == rams4 ||
                    propertyRandomKeysObjectAllNumberGex == rams5 ||
                    propertyRandomKeysObjectAllNumberGex == rams6
                ) {
                    allNumberGexRandom();
                }
                rams6 = 3;
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRams();
                return;
            }
            //---
            else {
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
            }
            return
        } else if (gex4.classList.contains('block3')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                    allNumberGexRandom()
                }
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == rye1 ||
                    propertyRandomKeysObjectAllNumberGex == rye2 ||
                    propertyRandomKeysObjectAllNumberGex == rye3 ||
                    propertyRandomKeysObjectAllNumberGex == rye4 ||
                    propertyRandomKeysObjectAllNumberGex == rye5 ||
                    propertyRandomKeysObjectAllNumberGex == rye6
                ) {
                    allNumberGexRandom();
                }
                rye6 = 11;
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRye();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == rye1 ||
                    propertyRandomKeysObjectAllNumberGex == rye2 ||
                    propertyRandomKeysObjectAllNumberGex == rye3 ||
                    propertyRandomKeysObjectAllNumberGex == rye4 ||
                    propertyRandomKeysObjectAllNumberGex == rye5 ||
                    propertyRandomKeysObjectAllNumberGex == rye6
                ) {
                    allNumberGexRandom();
                }
                rye6 = 3;
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRye();
                return;
            }
            //---
            else {
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
            }
            return
        } else if (gex4.classList.contains('block4')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == clay1 || propertyRandomKeysObjectAllNumberGex == clay2 || propertyRandomKeysObjectAllNumberGex == clay3 || propertyRandomKeysObjectAllNumberGex == clay4 || propertyRandomKeysObjectAllNumberGex == clay5) {
                    allNumberGexRandom()
                }
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableClay()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == clay1 ||
                    propertyRandomKeysObjectAllNumberGex == clay2 ||
                    propertyRandomKeysObjectAllNumberGex == clay3 ||
                    propertyRandomKeysObjectAllNumberGex == clay4 ||
                    propertyRandomKeysObjectAllNumberGex == clay5 ||
                    propertyRandomKeysObjectAllNumberGex == clay6
                ) {
                    allNumberGexRandom();
                }
                clay6 = 11;
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableClay();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == clay1 ||
                    propertyRandomKeysObjectAllNumberGex == clay2 ||
                    propertyRandomKeysObjectAllNumberGex == clay3 ||
                    propertyRandomKeysObjectAllNumberGex == clay4 ||
                    propertyRandomKeysObjectAllNumberGex == clay5 ||
                    propertyRandomKeysObjectAllNumberGex == clay6
                ) {
                    allNumberGexRandom();
                }
                clay6 = 3;
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableClay();
                return;
            }
            //---
            else {
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableClay()
            }
            return
        } else if (gex4.classList.contains('block5')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                    allNumberGexRandom()
                }
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {

                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == stone1 ||
                    propertyRandomKeysObjectAllNumberGex == stone2 ||
                    propertyRandomKeysObjectAllNumberGex == stone3 ||
                    propertyRandomKeysObjectAllNumberGex == stone4 ||
                    propertyRandomKeysObjectAllNumberGex == stone5 ||
                    propertyRandomKeysObjectAllNumberGex == stone6
                ) {
                    allNumberGexRandom();
                }
                stone6 = 11;
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableStone();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber1 || propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex == stone1 ||
                    propertyRandomKeysObjectAllNumberGex == stone2 ||
                    propertyRandomKeysObjectAllNumberGex == stone3 ||
                    propertyRandomKeysObjectAllNumberGex == stone4 ||
                    propertyRandomKeysObjectAllNumberGex == stone5 ||
                    propertyRandomKeysObjectAllNumberGex == stone6
                ) {
                    allNumberGexRandom();
                }
                stone6 = 3;
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableStone();
                return;
            }
            //---
            else {
                gex4.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
            }
            return
        }
    }
    //--------5-------!
    function numberCheckGex5() {
        let comparisonNumberFilledGex = true;
        for (let i = 0; i < gexNumberArray.length; i++) {
            function chekingForMatchNum5() {
                if (gex5.classList.contains('block1')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5
                        ) {
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 11;
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 3;
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex5.classList.contains('block2')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5
                        ) {
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 11;
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 3;
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex5.classList.contains('block3')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5
                        ) {
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 11;
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 3;
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex5.classList.contains('block4')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5
                        ) {
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 11;
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 3;
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex5.classList.contains('block5')) {
                    if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5
                        ) {
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 11;
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber2 &&
                            gexNumberArray[i] != gexNumber4 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 3;
                            gex5.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                }
            }
            chekingForMatchNum5();
            if (comparisonNumberFilledGex == false) {
                //Функция удаления из масива
                let indexAllNum;
                gexNumberArray.find((item, index) => {
                    if (item == gex5.children[0].textContent) {
                        indexAllNum = index;
                        return item;
                    }
                });
                gexNumberArray.splice(indexAllNum, 1);
                return;
            } else {
                chekingForMatchNum5();
            }
        }
    }
    //--------6-------!
    function numberCheckGex6() {
        let comparisonNumberFilledGex = true;
        for (let i = 0; i < gexNumberArray.length; i++) {
            function chekingForMatchNum6() {
                if (gex6.classList.contains('block1')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5
                        ) {
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 11;
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 3;
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex6.classList.contains('block2')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5
                        ) {
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 11;
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 3;
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex6.classList.contains('block3')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5
                        ) {
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 11;
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 3;
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex6.classList.contains('block4')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5
                        ) {
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 11;
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 3;
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex6.classList.contains('block5')) {
                    if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5
                        ) {
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 11;
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber3 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 3;
                            gex6.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                }
            }
            chekingForMatchNum6();
            if (comparisonNumberFilledGex == false) {
                //Функция удаления из масива
                let indexAllNum;
                gexNumberArray.find((item, index) => {
                    if (item == gex6.children[0].textContent) {
                        indexAllNum = index;
                        return item;
                    }
                });
                gexNumberArray.splice(indexAllNum, 1);
                return;
            } else {
                chekingForMatchNum6();
            }
        }
    }
    //--------7-------
    function numberCheckGex7() {
        allNumberGexRandom()
        if (gex7.classList.contains('block1')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 && propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                    allNumberGexRandom()
                }
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == tree1 ||
                    propertyRandomKeysObjectAllNumberGex == tree2 ||
                    propertyRandomKeysObjectAllNumberGex == tree3 ||
                    propertyRandomKeysObjectAllNumberGex == tree4 ||
                    propertyRandomKeysObjectAllNumberGex == tree5 ||
                    propertyRandomKeysObjectAllNumberGex == tree6
                ) {
                    allNumberGexRandom();
                }
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                tree6 = 11;
                overwritingVariableTrees();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == tree1 ||
                    propertyRandomKeysObjectAllNumberGex == tree2 ||
                    propertyRandomKeysObjectAllNumberGex == tree3 ||
                    propertyRandomKeysObjectAllNumberGex == tree4 ||
                    propertyRandomKeysObjectAllNumberGex == tree5 ||
                    propertyRandomKeysObjectAllNumberGex == tree6
                ) {
                    allNumberGexRandom();
                }
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                tree6 = 3;
                overwritingVariableTrees();
                return;
            }
            //---
            else {
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
            }
            return
        } else if (gex7.classList.contains('block2')) {
            console.log('бараны');
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                    allNumberGexRandom()
                }
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == rams1 ||
                    propertyRandomKeysObjectAllNumberGex == rams2 ||
                    propertyRandomKeysObjectAllNumberGex == rams3 ||
                    propertyRandomKeysObjectAllNumberGex == rams4 ||
                    propertyRandomKeysObjectAllNumberGex == rams5 ||
                    propertyRandomKeysObjectAllNumberGex == rams6
                ) {
                    allNumberGexRandom();
                }
                rams6 = 11;
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRams();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == rams1 ||
                    propertyRandomKeysObjectAllNumberGex == rams2 ||
                    propertyRandomKeysObjectAllNumberGex == rams3 ||
                    propertyRandomKeysObjectAllNumberGex == rams4 ||
                    propertyRandomKeysObjectAllNumberGex == rams5 ||
                    propertyRandomKeysObjectAllNumberGex == rams6
                ) {
                    allNumberGexRandom();
                }
                rams6 = 3;
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRams();
                return;
            }
            //---
            else {
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
            }
            return
        } else if (gex7.classList.contains('block3')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                    allNumberGexRandom()
                }
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == rye1 ||
                    propertyRandomKeysObjectAllNumberGex == rye2 ||
                    propertyRandomKeysObjectAllNumberGex == rye3 ||
                    propertyRandomKeysObjectAllNumberGex == rye4 ||
                    propertyRandomKeysObjectAllNumberGex == rye5 ||
                    propertyRandomKeysObjectAllNumberGex == rye6
                ) {
                    allNumberGexRandom();
                }
                rye6 = 11;
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRye();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == rye1 ||
                    propertyRandomKeysObjectAllNumberGex == rye2 ||
                    propertyRandomKeysObjectAllNumberGex == rye3 ||
                    propertyRandomKeysObjectAllNumberGex == rye4 ||
                    propertyRandomKeysObjectAllNumberGex == rye5 ||
                    propertyRandomKeysObjectAllNumberGex == rye6
                ) {
                    allNumberGexRandom();
                }
                rye6 = 3;
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRye();
                return;
            }
            //---
            else {
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
            }
            return
        } else if (gex7.classList.contains('block4')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == clay1 || propertyRandomKeysObjectAllNumberGex == clay2 || propertyRandomKeysObjectAllNumberGex == clay3 || propertyRandomKeysObjectAllNumberGex == clay4 || propertyRandomKeysObjectAllNumberGex == clay5) {
                    allNumberGexRandom()
                }
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableClay()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == clay1 ||
                    propertyRandomKeysObjectAllNumberGex == clay2 ||
                    propertyRandomKeysObjectAllNumberGex == clay3 ||
                    propertyRandomKeysObjectAllNumberGex == clay4 ||
                    propertyRandomKeysObjectAllNumberGex == clay5 ||
                    propertyRandomKeysObjectAllNumberGex == clay6
                ) {
                    allNumberGexRandom();
                }
                clay6 = 11;
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableClay();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == clay1 ||
                    propertyRandomKeysObjectAllNumberGex == clay2 ||
                    propertyRandomKeysObjectAllNumberGex == clay3 ||
                    propertyRandomKeysObjectAllNumberGex == clay4 ||
                    propertyRandomKeysObjectAllNumberGex == clay5 ||
                    propertyRandomKeysObjectAllNumberGex == clay6
                ) {
                    allNumberGexRandom();
                }
                clay6 = 3;
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableClay();
                return;
            }
            //---
            else {
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableClay()
            }
            return
        } else if (gex7.classList.contains('block5')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                    allNumberGexRandom()
                }
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {

                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == stone1 ||
                    propertyRandomKeysObjectAllNumberGex == stone2 ||
                    propertyRandomKeysObjectAllNumberGex == stone3 ||
                    propertyRandomKeysObjectAllNumberGex == stone4 ||
                    propertyRandomKeysObjectAllNumberGex == stone5 ||
                    propertyRandomKeysObjectAllNumberGex == stone6
                ) {
                    allNumberGexRandom();
                }
                stone6 = 11;
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableStone();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == stone1 ||
                    propertyRandomKeysObjectAllNumberGex == stone2 ||
                    propertyRandomKeysObjectAllNumberGex == stone3 ||
                    propertyRandomKeysObjectAllNumberGex == stone4 ||
                    propertyRandomKeysObjectAllNumberGex == stone5 ||
                    propertyRandomKeysObjectAllNumberGex == stone6
                ) {
                    allNumberGexRandom();
                }
                stone6 = 3;
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableStone();
                return;
            }
            //---
            else {
                gex7.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
            }
            return
        }
    }
    //--------8-------
    function numberCheckGex8() {
        allNumberGexRandom()
        if (gex8.classList.contains('block1')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 && propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                    allNumberGexRandom()
                }
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == tree1 ||
                    propertyRandomKeysObjectAllNumberGex == tree2 ||
                    propertyRandomKeysObjectAllNumberGex == tree3 ||
                    propertyRandomKeysObjectAllNumberGex == tree4 ||
                    propertyRandomKeysObjectAllNumberGex == tree5 ||
                    propertyRandomKeysObjectAllNumberGex == tree6
                ) {
                    allNumberGexRandom();
                }
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                tree6 = 11;
                overwritingVariableTrees();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == tree1 ||
                    propertyRandomKeysObjectAllNumberGex == tree2 ||
                    propertyRandomKeysObjectAllNumberGex == tree3 ||
                    propertyRandomKeysObjectAllNumberGex == tree4 ||
                    propertyRandomKeysObjectAllNumberGex == tree5 ||
                    propertyRandomKeysObjectAllNumberGex == tree6
                ) {
                    allNumberGexRandom();
                }
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                tree6 = 3;
                overwritingVariableTrees();
                return;
            }
            //---
            else {
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
            }
            return
        } else if (gex8.classList.contains('block2')) {
            console.log('бараны');
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                    allNumberGexRandom()
                }
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == rams1 ||
                    propertyRandomKeysObjectAllNumberGex == rams2 ||
                    propertyRandomKeysObjectAllNumberGex == rams3 ||
                    propertyRandomKeysObjectAllNumberGex == rams4 ||
                    propertyRandomKeysObjectAllNumberGex == rams5 ||
                    propertyRandomKeysObjectAllNumberGex == rams6
                ) {
                    allNumberGexRandom();
                }
                rams6 = 11;
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRams();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == rams1 ||
                    propertyRandomKeysObjectAllNumberGex == rams2 ||
                    propertyRandomKeysObjectAllNumberGex == rams3 ||
                    propertyRandomKeysObjectAllNumberGex == rams4 ||
                    propertyRandomKeysObjectAllNumberGex == rams5 ||
                    propertyRandomKeysObjectAllNumberGex == rams6
                ) {
                    allNumberGexRandom();
                }
                rams6 = 3;
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRams();
                return;
            }
            //---
            else {
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
            }
            return
        } else if (gex8.classList.contains('block3')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                    allNumberGexRandom()
                }
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == rye1 ||
                    propertyRandomKeysObjectAllNumberGex == rye2 ||
                    propertyRandomKeysObjectAllNumberGex == rye3 ||
                    propertyRandomKeysObjectAllNumberGex == rye4 ||
                    propertyRandomKeysObjectAllNumberGex == rye5 ||
                    propertyRandomKeysObjectAllNumberGex == rye6
                ) {
                    allNumberGexRandom();
                }
                rye6 = 11;
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRye();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == rye1 ||
                    propertyRandomKeysObjectAllNumberGex == rye2 ||
                    propertyRandomKeysObjectAllNumberGex == rye3 ||
                    propertyRandomKeysObjectAllNumberGex == rye4 ||
                    propertyRandomKeysObjectAllNumberGex == rye5 ||
                    propertyRandomKeysObjectAllNumberGex == rye6
                ) {
                    allNumberGexRandom();
                }
                rye6 = 3;
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRye();
                return;
            }
            //---
            else {
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
            }
            return
        } else if (gex8.classList.contains('block4')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == clay1 || propertyRandomKeysObjectAllNumberGex == clay2 || propertyRandomKeysObjectAllNumberGex == clay3 || propertyRandomKeysObjectAllNumberGex == clay4 || propertyRandomKeysObjectAllNumberGex == clay5) {
                    allNumberGexRandom()
                }
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableClay()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == clay1 ||
                    propertyRandomKeysObjectAllNumberGex == clay2 ||
                    propertyRandomKeysObjectAllNumberGex == clay3 ||
                    propertyRandomKeysObjectAllNumberGex == clay4 ||
                    propertyRandomKeysObjectAllNumberGex == clay5 ||
                    propertyRandomKeysObjectAllNumberGex == clay6
                ) {
                    allNumberGexRandom();
                }
                clay6 = 11;
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableClay();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == clay1 ||
                    propertyRandomKeysObjectAllNumberGex == clay2 ||
                    propertyRandomKeysObjectAllNumberGex == clay3 ||
                    propertyRandomKeysObjectAllNumberGex == clay4 ||
                    propertyRandomKeysObjectAllNumberGex == clay5 ||
                    propertyRandomKeysObjectAllNumberGex == clay6
                ) {
                    allNumberGexRandom();
                }
                clay6 = 3;
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableClay();
                return;
            }
            //---
            else {
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableClay()
            }
            return
        } else if (gex8.classList.contains('block5')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                    allNumberGexRandom()
                }
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {

                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == stone1 ||
                    propertyRandomKeysObjectAllNumberGex == stone2 ||
                    propertyRandomKeysObjectAllNumberGex == stone3 ||
                    propertyRandomKeysObjectAllNumberGex == stone4 ||
                    propertyRandomKeysObjectAllNumberGex == stone5 ||
                    propertyRandomKeysObjectAllNumberGex == stone6
                ) {
                    allNumberGexRandom();
                }
                stone6 = 11;
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableStone();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex == stone1 ||
                    propertyRandomKeysObjectAllNumberGex == stone2 ||
                    propertyRandomKeysObjectAllNumberGex == stone3 ||
                    propertyRandomKeysObjectAllNumberGex == stone4 ||
                    propertyRandomKeysObjectAllNumberGex == stone5 ||
                    propertyRandomKeysObjectAllNumberGex == stone6
                ) {
                    allNumberGexRandom();
                }
                stone6 = 3;
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableStone();
                return;
            }
            //---
            else {
                gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
            }
            return
        }
    }
    //--------9-------!
    function numberCheckGex9() {
        let comparisonNumberFilledGex = true;
        for (let i = 0; i < gexNumberArray.length; i++) {
            function chekingForMatchNum9() {
                if (gex9.classList.contains('block1')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5
                        ) {
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 11;
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 3;
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex9.classList.contains('block2')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5
                        ) {
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 11;
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 3;
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex9.classList.contains('block3')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5
                        ) {
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 11;
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 3;
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex9.classList.contains('block4')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5
                        ) {
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 11;
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 3;
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex9.classList.contains('block5')) {
                    if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5
                        ) {
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 11;
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber5 &&
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 3;
                            gex9.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                }
            }
            chekingForMatchNum9();
            if (comparisonNumberFilledGex == false) {
                //Функция удаления из масива
                let indexAllNum;
                gexNumberArray.find((item, index) => {
                    if (item == gex9.children[0].textContent) {
                        indexAllNum = index;
                        return item;
                    }
                });
                gexNumberArray.splice(indexAllNum, 1);
                return;
            } else {
                chekingForMatchNum9();
            }
        }
    }
    //--------10-------!
    function numberCheckGex10() {
        let comparisonNumberFilledGex = true;
        for (let i = 0; i < gexNumberArray.length; i++) {
            function chekingForMatchNum10() {
                if (gex10.classList.contains('block1')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5
                        ) {
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 11;
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 3;
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex10.classList.contains('block2')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5
                        ) {
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 11;
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 3;
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex10.classList.contains('block3')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5
                        ) {
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 11;
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 3;
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex10.classList.contains('block4')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5
                        ) {
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 11;
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 3;
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex10.classList.contains('block5')) {
                    if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5
                        ) {
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 11;
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber6 &&
                            gexNumberArray[i] != gexNumber7 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 3;
                            gex10.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                }
            }
            chekingForMatchNum10();
            if (comparisonNumberFilledGex == false) {
                //Функция удаления из масива
                let indexAllNum;
                gexNumberArray.find((item, index) => {
                    if (item == gex10.children[0].textContent) {
                        indexAllNum = index;
                        return item;
                    }
                });
                gexNumberArray.splice(indexAllNum, 1);
                return;
            } else {
                chekingForMatchNum10();
            }
        }
    }
    //--------11-------
    function numberCheckGex11() {
        allNumberGexRandom()
        if (gex11.classList.contains('block1')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 && propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                    allNumberGexRandom()
                }
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == tree1 ||
                    propertyRandomKeysObjectAllNumberGex == tree2 ||
                    propertyRandomKeysObjectAllNumberGex == tree3 ||
                    propertyRandomKeysObjectAllNumberGex == tree4 ||
                    propertyRandomKeysObjectAllNumberGex == tree5 ||
                    propertyRandomKeysObjectAllNumberGex == tree6
                ) {
                    allNumberGexRandom();
                }
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                tree6 = 11;
                overwritingVariableTrees();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == tree1 ||
                    propertyRandomKeysObjectAllNumberGex == tree2 ||
                    propertyRandomKeysObjectAllNumberGex == tree3 ||
                    propertyRandomKeysObjectAllNumberGex == tree4 ||
                    propertyRandomKeysObjectAllNumberGex == tree5 ||
                    propertyRandomKeysObjectAllNumberGex == tree6
                ) {
                    allNumberGexRandom();
                }
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                tree6 = 3;
                overwritingVariableTrees();
                return;
            }
            //---
            else {
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableTrees()
            }
            return
        } else if (gex11.classList.contains('block2')) {
            console.log('бараны');
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                    allNumberGexRandom()
                }
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == rams1 ||
                    propertyRandomKeysObjectAllNumberGex == rams2 ||
                    propertyRandomKeysObjectAllNumberGex == rams3 ||
                    propertyRandomKeysObjectAllNumberGex == rams4 ||
                    propertyRandomKeysObjectAllNumberGex == rams5 ||
                    propertyRandomKeysObjectAllNumberGex == rams6
                ) {
                    allNumberGexRandom();
                }
                rams6 = 11;
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRams();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == rams1 ||
                    propertyRandomKeysObjectAllNumberGex == rams2 ||
                    propertyRandomKeysObjectAllNumberGex == rams3 ||
                    propertyRandomKeysObjectAllNumberGex == rams4 ||
                    propertyRandomKeysObjectAllNumberGex == rams5 ||
                    propertyRandomKeysObjectAllNumberGex == rams6
                ) {
                    allNumberGexRandom();
                }
                rams6 = 3;
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRams();
                return;
            }
            //---
            else {
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRams()
            }
            return
        } else if (gex11.classList.contains('block3')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                    allNumberGexRandom()
                }
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == rye1 ||
                    propertyRandomKeysObjectAllNumberGex == rye2 ||
                    propertyRandomKeysObjectAllNumberGex == rye3 ||
                    propertyRandomKeysObjectAllNumberGex == rye4 ||
                    propertyRandomKeysObjectAllNumberGex == rye5 ||
                    propertyRandomKeysObjectAllNumberGex == rye6
                ) {
                    allNumberGexRandom();
                }
                rye6 = 11;
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRye();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == rye1 ||
                    propertyRandomKeysObjectAllNumberGex == rye2 ||
                    propertyRandomKeysObjectAllNumberGex == rye3 ||
                    propertyRandomKeysObjectAllNumberGex == rye4 ||
                    propertyRandomKeysObjectAllNumberGex == rye5 ||
                    propertyRandomKeysObjectAllNumberGex == rye6
                ) {
                    allNumberGexRandom();
                }
                rye6 = 3;
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableRye();
                return;
            }
            //---
            else {
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableRye()
            }
            return
        } else if (gex11.classList.contains('block4')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == clay1 || propertyRandomKeysObjectAllNumberGex == clay2 || propertyRandomKeysObjectAllNumberGex == clay3 || propertyRandomKeysObjectAllNumberGex == clay4 || propertyRandomKeysObjectAllNumberGex == clay5) {
                    allNumberGexRandom()
                }
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableClay()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == clay1 ||
                    propertyRandomKeysObjectAllNumberGex == clay2 ||
                    propertyRandomKeysObjectAllNumberGex == clay3 ||
                    propertyRandomKeysObjectAllNumberGex == clay4 ||
                    propertyRandomKeysObjectAllNumberGex == clay5 ||
                    propertyRandomKeysObjectAllNumberGex == clay6
                ) {
                    allNumberGexRandom();
                }
                clay6 = 11;
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableClay();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == clay1 ||
                    propertyRandomKeysObjectAllNumberGex == clay2 ||
                    propertyRandomKeysObjectAllNumberGex == clay3 ||
                    propertyRandomKeysObjectAllNumberGex == clay4 ||
                    propertyRandomKeysObjectAllNumberGex == clay5 ||
                    propertyRandomKeysObjectAllNumberGex == clay6
                ) {
                    allNumberGexRandom();
                }
                clay6 = 3;
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableClay();
                return;
            }
            //---
            else {
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableClay()
            }
            return
        } else if (gex11.classList.contains('block5')) {
            if (propertyRandomKeysObjectAllNumberGex != 3 &&
                propertyRandomKeysObjectAllNumberGex != 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                    allNumberGexRandom()
                }
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
                return
            }
            //проверка на 3 и 11
            //3
            else if (propertyRandomKeysObjectAllNumberGex === 3) {

                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == stone1 ||
                    propertyRandomKeysObjectAllNumberGex == stone2 ||
                    propertyRandomKeysObjectAllNumberGex == stone3 ||
                    propertyRandomKeysObjectAllNumberGex == stone4 ||
                    propertyRandomKeysObjectAllNumberGex == stone5 ||
                    propertyRandomKeysObjectAllNumberGex == stone6
                ) {
                    allNumberGexRandom();
                }
                stone6 = 11;
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableStone();
                return;
            }
            //11
            else if (propertyRandomKeysObjectAllNumberGex === 11) {
                while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber8 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex == stone1 ||
                    propertyRandomKeysObjectAllNumberGex == stone2 ||
                    propertyRandomKeysObjectAllNumberGex == stone3 ||
                    propertyRandomKeysObjectAllNumberGex == stone4 ||
                    propertyRandomKeysObjectAllNumberGex == stone5 ||
                    propertyRandomKeysObjectAllNumberGex == stone6
                ) {
                    allNumberGexRandom();
                }
                stone6 = 3;
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
                overwritingVariableStone();
                return;
            }
            //---
            else {
                gex11.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                overwritingVariableStone()
            }
            return
        }
    }
    //--------12-------!
    function numberCheckGex12() {
        let comparisonNumberFilledGex = true;
        for (let i = 0; i < gexNumberArray.length; i++) {
            function chekingForMatchNum12() {
                if (gex12.classList.contains('block1')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5
                        ) {
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 11;
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 3;
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex12.classList.contains('block2')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5
                        ) {
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 11;
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 3;
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex12.classList.contains('block3')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5
                        ) {
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 11;
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 3;
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex12.classList.contains('block4')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5
                        ) {
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 11;
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 3;
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex12.classList.contains('block5')) {
                    if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5
                        ) {
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 11;
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber8 &&
                            gexNumberArray[i] != gexNumber9 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 3;
                            gex12.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                }
            }
            chekingForMatchNum12();
            if (comparisonNumberFilledGex == false) {
                //Функция удаления из масива
                let indexAllNum;
                gexNumberArray.find((item, index) => {
                    if (item == gex12.children[0].textContent) {
                        indexAllNum = index;
                        return item;
                    }
                });
                gexNumberArray.splice(indexAllNum, 1);
                return;
            } else {
                chekingForMatchNum12();
            }
        }
    }
    //--------13-------!
    function numberCheckGex13() {
        let comparisonNumberFilledGex = true;
        for (let i = 0; i < gexNumberArray.length; i++) {
            function chekingForMatchNum13() {
                if (gex13.classList.contains('block1')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5
                        ) {
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 11;
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 3;
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex13.classList.contains('block2')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5
                        ) {
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 11;
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 3;
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex13.classList.contains('block3')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5
                        ) {
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 11;
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 3;
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex13.classList.contains('block4')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5
                        ) {
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 11;
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 3;
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex13.classList.contains('block5')) {
                    if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5
                        ) {
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 11;
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber10 &&
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber14 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 3;
                            gex13.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                }
            }
            chekingForMatchNum13();
            if (comparisonNumberFilledGex == false) {
                //Функция удаления из масива
                let indexAllNum;
                gexNumberArray.find((item, index) => {
                    if (item == gex13.children[0].textContent) {
                        indexAllNum = index;
                        return item;
                    }
                });
                gexNumberArray.splice(indexAllNum, 1);
                return;
            } else {
                chekingForMatchNum13();
            }
        }
    }
    //--------14-------!
    function numberCheckGex14() {
        let comparisonNumberFilledGex = true;
        for (let i = 0; i < gexNumberArray.length; i++) {
            function chekingForMatchNum14() {
                if (gex14.classList.contains('block1')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5
                        ) {
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 11;
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != tree1 &&
                            gexNumberArray[i] != tree2 &&
                            gexNumberArray[i] != tree3 &&
                            gexNumberArray[i] != tree4 &&
                            gexNumberArray[i] != tree5 &&
                            gexNumberArray[i] != tree6
                        ) {
                            tree6 = 3;
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableTrees2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex14.classList.contains('block2')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5
                        ) {
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 11;
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != rams1 &&
                            gexNumberArray[i] != rams2 &&
                            gexNumberArray[i] != rams3 &&
                            gexNumberArray[i] != rams4 &&
                            gexNumberArray[i] != rams5 &&
                            gexNumberArray[i] != rams6
                        ) {
                            rams6 = 3;
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRams2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex14.classList.contains('block3')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5
                        ) {
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 11;
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != rye1 &&
                            gexNumberArray[i] != rye2 &&
                            gexNumberArray[i] != rye3 &&
                            gexNumberArray[i] != rye4 &&
                            gexNumberArray[i] != rye5 &&
                            gexNumberArray[i] != rye6
                        ) {
                            rye6 = 3;
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableRye2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex14.classList.contains('block4')) {
                    if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5
                        ) {
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 11;
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != clay1 &&
                            gexNumberArray[i] != clay2 &&
                            gexNumberArray[i] != clay3 &&
                            gexNumberArray[i] != clay4 &&
                            gexNumberArray[i] != clay5 &&
                            gexNumberArray[i] != clay6
                        ) {
                            clay6 = 3;
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableClay2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                } else if (gex14.classList.contains('block5')) {
                    if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5
                        ) {
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 3) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 11;
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    } else if (gexNumberArray[i] == 11) {
                        if (
                            gexNumberArray[i] != gexNumber11 &&
                            gexNumberArray[i] != gexNumber12 &&
                            gexNumberArray[i] != gexNumber13 &&
                            gexNumberArray[i] != stone1 &&
                            gexNumberArray[i] != stone2 &&
                            gexNumberArray[i] != stone3 &&
                            gexNumberArray[i] != stone4 &&
                            gexNumberArray[i] != stone5 &&
                            gexNumberArray[i] != stone6
                        ) {
                            stone6 = 3;
                            gex14.children[0].textContent = gexNumberArray[i];
                            newNumResGex = gexNumberArray[i];
                            overwritingVariableStone2();
                            return (comparisonNumberFilledGex = false);
                        } else {
                            return (comparisonNumberFilledGex = true);
                        }
                    }
                }
            }
            chekingForMatchNum14();
            if (comparisonNumberFilledGex == false) {
                //Функция удаления из масива
                let indexAllNum;
                gexNumberArray.find((item, index) => {
                    if (item == gex14.children[0].textContent) {
                        indexAllNum = index;
                        return item;
                    }
                });
                gexNumberArray.splice(indexAllNum, 1);
                return;
            } else {
                chekingForMatchNum14();
            }
        }
    }
    //----------------------------------------------------------
    let indexAllNum;
    //-----1 на заполнение----
    numberCheckGex4();
    //Функция удаления из масива
    gexNumberArray.find((item, index) => {
        if (item == gex4.children[0].textContent) {
            indexAllNum = index;
            return item;
        }
    });
    gexNumberArray.splice(indexAllNum, 1);
    gettingNewValuesGexNumber();
    //-------2-на заполнение------
    numberCheckGex7();
    //Функция удаления из масива
    gexNumberArray.find((item, index) => {
        if (item == gex7.children[0].textContent) {
            indexAllNum = index;
            return item;
        }
    });
    gexNumberArray.splice(indexAllNum, 1);
    gettingNewValuesGexNumber();
    //--------3-на заполнение-------
    numberCheckGex8();
    //Функция удаления из масива
    gexNumberArray.find((item, index) => {
        if (item == gex8.children[0].textContent) {
            indexAllNum = index;
            return item;
        }
    });
    gexNumberArray.splice(indexAllNum, 1);
    gettingNewValuesGexNumber();
    //------4-на заполнение------
    numberCheckGex11();
    //Функция удаления из масива
    gexNumberArray.find((item, index) => {
        if (item == gex11.children[0].textContent) {
            indexAllNum = index;
            return item;
        }
    });
    gexNumberArray.splice(indexAllNum, 1);
    gettingNewValuesGexNumber();
    //--------5-на заполнение----
    numberCheckGex3();
    gettingNewValuesGexNumber();
    //-----------6-на заполнение------
    numberCheckGex5();
    gettingNewValuesGexNumber();
    //--------7-на заполнение------
    numberCheckGex10();
    gettingNewValuesGexNumber();
    //----8-на заполнение------
    numberCheckGex12();
    gettingNewValuesGexNumber();
    //----9-на заполнение------
    numberCheckGex1();
    gettingNewValuesGexNumber();
    //----10-на заполнение------
    numberCheckGex2();
    gettingNewValuesGexNumber();
    //----11-на заполнение------
    numberCheckGex6();
    gettingNewValuesGexNumber();
    //----12-на заполнение------
    numberCheckGex9();
    gettingNewValuesGexNumber();
    //----13-на заполнение------
    numberCheckGex13();
    gettingNewValuesGexNumber();
    //----14-на заполнение------
    numberCheckGex14();
    gettingNewValuesGexNumber();

    romainingNumberTokens.textContent = gexNumberArray;
    //
    //---сортировка гексов по классам ресурсов(дерево,бараны,рожь,глина,камень)
    function populatingArrayEachGexTextNum1() {
        let allGexMap = document.getElementsByClassName('map__gex');
        let allGexMapArray = Array.from(allGexMap);
        allGexMapArray.forEach(function(element) {
            let elementGexMap = element;
            let elementGexMapChildrenNumtext = elementGexMap.children[0].textContent;
            if (elementGexMapChildrenNumtext == 1) {
                arrayAllGexTextNum1.push(elementGexMap);
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
    populatingArrayEachGexTextNum1();
    //
    console.log('----------ТОРМОЗИМ ЗАПОЛНЕНИЕ------------');
};