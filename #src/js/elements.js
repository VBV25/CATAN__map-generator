//--------8888-------!
/*-
  gexNumberArray[i] != gexNumber8 &&
   gexNumberArray[i] != gexNumber9 &&
    gexNumberArray[i] != gexNumber14 &&
     gexNumberArray[i] != gexNumber17
      -*/
function numberCheckGex8888() {
    let comparisonNumberFilledGex = true;
    for (let i = 0; i < gexNumberArray.length; i++) {
        function chekingForMatchNum8888() {
            if (gex8888.classList.contains('block1')) {
                if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != tree1 &&
                        gexNumberArray[i] != tree2 &&
                        gexNumberArray[i] != tree3 &&
                        gexNumberArray[i] != tree4 &&
                        gexNumberArray[i] != tree5
                    ) {
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableTrees2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                } else if (gexNumberArray[i] == 3) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != tree1 &&
                        gexNumberArray[i] != tree2 &&
                        gexNumberArray[i] != tree3 &&
                        gexNumberArray[i] != tree4 &&
                        gexNumberArray[i] != tree5 &&
                        gexNumberArray[i] != tree6
                    ) {
                        tree6 = 11;
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableTrees2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                } else if (gexNumberArray[i] == 11) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != tree1 &&
                        gexNumberArray[i] != tree2 &&
                        gexNumberArray[i] != tree3 &&
                        gexNumberArray[i] != tree4 &&
                        gexNumberArray[i] != tree5 &&
                        gexNumberArray[i] != tree6
                    ) {
                        tree6 = 3;
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableTrees2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                }
            } else if (gex8888.classList.contains('block2')) {
                if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != rams1 &&
                        gexNumberArray[i] != rams2 &&
                        gexNumberArray[i] != rams3 &&
                        gexNumberArray[i] != rams4 &&
                        gexNumberArray[i] != rams5
                    ) {
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableRams2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                } else if (gexNumberArray[i] == 3) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != rams1 &&
                        gexNumberArray[i] != rams2 &&
                        gexNumberArray[i] != rams3 &&
                        gexNumberArray[i] != rams4 &&
                        gexNumberArray[i] != rams5 &&
                        gexNumberArray[i] != rams6
                    ) {
                        rams6 = 11;
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableRams2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                } else if (gexNumberArray[i] == 11) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != rams1 &&
                        gexNumberArray[i] != rams2 &&
                        gexNumberArray[i] != rams3 &&
                        gexNumberArray[i] != rams4 &&
                        gexNumberArray[i] != rams5 &&
                        gexNumberArray[i] != rams6
                    ) {
                        rams6 = 3;
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableRams2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                }
            } else if (gex8888.classList.contains('block3')) {
                if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != rye1 &&
                        gexNumberArray[i] != rye2 &&
                        gexNumberArray[i] != rye3 &&
                        gexNumberArray[i] != rye4 &&
                        gexNumberArray[i] != rye5
                    ) {
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableRye2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                } else if (gexNumberArray[i] == 3) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != rye1 &&
                        gexNumberArray[i] != rye2 &&
                        gexNumberArray[i] != rye3 &&
                        gexNumberArray[i] != rye4 &&
                        gexNumberArray[i] != rye5 &&
                        gexNumberArray[i] != rye6
                    ) {
                        rye6 = 11;
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableRye2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                } else if (gexNumberArray[i] == 11) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != rye1 &&
                        gexNumberArray[i] != rye2 &&
                        gexNumberArray[i] != rye3 &&
                        gexNumberArray[i] != rye4 &&
                        gexNumberArray[i] != rye5 &&
                        gexNumberArray[i] != rye6
                    ) {
                        rye6 = 3;
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableRye2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                }
            } else if (gex8888.classList.contains('block4')) {
                if (gexNumberArray[i] != 3 && gexNumberArray[i] != 11) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != clay1 &&
                        gexNumberArray[i] != clay2 &&
                        gexNumberArray[i] != clay3 &&
                        gexNumberArray[i] != clay4 &&
                        gexNumberArray[i] != clay5
                    ) {
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableClay2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                } else if (gexNumberArray[i] == 3) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != clay1 &&
                        gexNumberArray[i] != clay2 &&
                        gexNumberArray[i] != clay3 &&
                        gexNumberArray[i] != clay4 &&
                        gexNumberArray[i] != clay5 &&
                        gexNumberArray[i] != clay6
                    ) {
                        clay6 = 11;
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableClay2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                } else if (gexNumberArray[i] == 11) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != clay1 &&
                        gexNumberArray[i] != clay2 &&
                        gexNumberArray[i] != clay3 &&
                        gexNumberArray[i] != clay4 &&
                        gexNumberArray[i] != clay5 &&
                        gexNumberArray[i] != clay6
                    ) {
                        clay6 = 3;
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableClay2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                }
            } else if (gex8888.classList.contains('block5')) {
                if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != stone1 &&
                        gexNumberArray[i] != stone2 &&
                        gexNumberArray[i] != stone3 &&
                        gexNumberArray[i] != stone4 &&
                        gexNumberArray[i] != stone5
                    ) {
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableStone2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                } else if (gexNumberArray[i] == 3) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != stone1 &&
                        gexNumberArray[i] != stone2 &&
                        gexNumberArray[i] != stone3 &&
                        gexNumberArray[i] != stone4 &&
                        gexNumberArray[i] != stone5 &&
                        gexNumberArray[i] != stone6
                    ) {
                        stone6 = 11;
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableStone2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                } else if (gexNumberArray[i] == 11) {
                    if (
                        PROP8888 &&
                        gexNumberArray[i] != stone1 &&
                        gexNumberArray[i] != stone2 &&
                        gexNumberArray[i] != stone3 &&
                        gexNumberArray[i] != stone4 &&
                        gexNumberArray[i] != stone5 &&
                        gexNumberArray[i] != stone6
                    ) {
                        stone6 = 3;
                        gex8888.children[0].textContent = gexNumberArray[i];
                        newNumResGex = gexNumberArray[i];
                        overwritingVariableStone2();
                        return (comparisonNumberFilledGex = false);
                    } else {
                        return (comparisonNumberFilledGex = true);
                    }
                }
            }
        }
        chekingForMatchNum8888();
        if (comparisonNumberFilledGex == false) {
            //Функция удаления из масива
            let indexAllNum;
            gexNumberArray.find((item, index) => {
                if (item == gex8888.children[0].textContent) {
                    indexAllNum = index;
                    return item;
                }
            });
            gexNumberArray.splice(indexAllNum, 1);
            return;
        } else {
            chekingForMatchNum8888();
        }
    }
}
//
//
//
//
//
//
//
//

//PROP9999 ||
///
//



//--------9999-------
/* 
propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || 
       */
function numberCheckGex9999() {
    allNumberGexRandom()
    if (gex9999.classList.contains('block1')) {
        if (propertyRandomKeysObjectAllNumberGex != 3 && propertyRandomKeysObjectAllNumberGex != 11) {
            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                allNumberGexRandom()
            }
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
            overwritingVariableTrees()
            return
        }
        //проверка на 3 и 11
        //3
        else if (propertyRandomKeysObjectAllNumberGex === 3) {
            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == tree1 ||
                propertyRandomKeysObjectAllNumberGex == tree2 ||
                propertyRandomKeysObjectAllNumberGex == tree3 ||
                propertyRandomKeysObjectAllNumberGex == tree4 ||
                propertyRandomKeysObjectAllNumberGex == tree5 ||
                propertyRandomKeysObjectAllNumberGex == tree6
            ) {
                allNumberGexRandom();
            }
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
            tree6 = 11;
            overwritingVariableTrees();
            return;
        }
        //11
        else if (propertyRandomKeysObjectAllNumberGex === 11) {
            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == tree1 ||
                propertyRandomKeysObjectAllNumberGex == tree2 ||
                propertyRandomKeysObjectAllNumberGex == tree3 ||
                propertyRandomKeysObjectAllNumberGex == tree4 ||
                propertyRandomKeysObjectAllNumberGex == tree5 ||
                propertyRandomKeysObjectAllNumberGex == tree6
            ) {
                allNumberGexRandom();
            }
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
            tree6 = 3;
            overwritingVariableTrees();
            return;
        }
        //---
        else {
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
            overwritingVariableTrees()
        }
        return
    } else if (gex9999.classList.contains('block2')) {
        console.log('бараны');
        if (propertyRandomKeysObjectAllNumberGex != 3 &&
            propertyRandomKeysObjectAllNumberGex != 11) {
            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                allNumberGexRandom()
            }
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
            overwritingVariableRams()
            return
        }
        //проверка на 3 и 11
        //3
        else if (propertyRandomKeysObjectAllNumberGex === 3) {
            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == rams1 ||
                propertyRandomKeysObjectAllNumberGex == rams2 ||
                propertyRandomKeysObjectAllNumberGex == rams3 ||
                propertyRandomKeysObjectAllNumberGex == rams4 ||
                propertyRandomKeysObjectAllNumberGex == rams5 ||
                propertyRandomKeysObjectAllNumberGex == rams6
            ) {
                allNumberGexRandom();
            }
            rams6 = 11;
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
            overwritingVariableRams();
            return;
        }
        //11
        else if (propertyRandomKeysObjectAllNumberGex === 11) {
            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == rams1 ||
                propertyRandomKeysObjectAllNumberGex == rams2 ||
                propertyRandomKeysObjectAllNumberGex == rams3 ||
                propertyRandomKeysObjectAllNumberGex == rams4 ||
                propertyRandomKeysObjectAllNumberGex == rams5 ||
                propertyRandomKeysObjectAllNumberGex == rams6
            ) {
                allNumberGexRandom();
            }
            rams6 = 3;
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
            overwritingVariableRams();
            return;
        }
        //---
        else {
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
            overwritingVariableRams()
        }
        return
    } else if (gex9999.classList.contains('block3')) {
        if (propertyRandomKeysObjectAllNumberGex != 3 &&
            propertyRandomKeysObjectAllNumberGex != 11) {
            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                allNumberGexRandom()
            }
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
            overwritingVariableRye()
            return
        }
        //проверка на 3 и 11
        //3
        else if (propertyRandomKeysObjectAllNumberGex === 3) {
            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == rye1 ||
                propertyRandomKeysObjectAllNumberGex == rye2 ||
                propertyRandomKeysObjectAllNumberGex == rye3 ||
                propertyRandomKeysObjectAllNumberGex == rye4 ||
                propertyRandomKeysObjectAllNumberGex == rye5 ||
                propertyRandomKeysObjectAllNumberGex == rye6
            ) {
                allNumberGexRandom();
            }
            rye6 = 11;
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
            overwritingVariableRye();
            return;
        }
        //11
        else if (propertyRandomKeysObjectAllNumberGex === 11) {
            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == rye1 ||
                propertyRandomKeysObjectAllNumberGex == rye2 ||
                propertyRandomKeysObjectAllNumberGex == rye3 ||
                propertyRandomKeysObjectAllNumberGex == rye4 ||
                propertyRandomKeysObjectAllNumberGex == rye5 ||
                propertyRandomKeysObjectAllNumberGex == rye6
            ) {
                allNumberGexRandom();
            }
            rye6 = 3;
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
            overwritingVariableRye();
            return;
        }
        //---
        else {
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
            overwritingVariableRye()
        }
        return
    } else if (gex9999.classList.contains('block4')) {
        if (propertyRandomKeysObjectAllNumberGex != 3 &&
            propertyRandomKeysObjectAllNumberGex != 11) {
            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == clay1 || propertyRandomKeysObjectAllNumberGex == clay2 || propertyRandomKeysObjectAllNumberGex == clay3 || propertyRandomKeysObjectAllNumberGex == clay4 || propertyRandomKeysObjectAllNumberGex == clay5) {
                allNumberGexRandom()
            }
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
            overwritingVariableClay()
            return
        }
        //проверка на 3 и 11
        //3
        else if (propertyRandomKeysObjectAllNumberGex === 3) {
            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == clay1 ||
                propertyRandomKeysObjectAllNumberGex == clay2 ||
                propertyRandomKeysObjectAllNumberGex == clay3 ||
                propertyRandomKeysObjectAllNumberGex == clay4 ||
                propertyRandomKeysObjectAllNumberGex == clay5 ||
                propertyRandomKeysObjectAllNumberGex == clay6
            ) {
                allNumberGexRandom();
            }
            clay6 = 11;
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
            overwritingVariableClay();
            return;
        }
        //11
        else if (propertyRandomKeysObjectAllNumberGex === 11) {
            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == clay1 ||
                propertyRandomKeysObjectAllNumberGex == clay2 ||
                propertyRandomKeysObjectAllNumberGex == clay3 ||
                propertyRandomKeysObjectAllNumberGex == clay4 ||
                propertyRandomKeysObjectAllNumberGex == clay5 ||
                propertyRandomKeysObjectAllNumberGex == clay6
            ) {
                allNumberGexRandom();
            }
            clay6 = 3;
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
            overwritingVariableClay();
            return;
        }
        //---
        else {
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
            overwritingVariableClay()
        }
        return
    } else if (gex9999.classList.contains('block5')) {
        if (propertyRandomKeysObjectAllNumberGex != 3 &&
            propertyRandomKeysObjectAllNumberGex != 11) {
            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                allNumberGexRandom()
            }
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
            overwritingVariableStone()
            return
        }
        //проверка на 3 и 11
        //3
        else if (propertyRandomKeysObjectAllNumberGex === 3) {

            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == stone1 ||
                propertyRandomKeysObjectAllNumberGex == stone2 ||
                propertyRandomKeysObjectAllNumberGex == stone3 ||
                propertyRandomKeysObjectAllNumberGex == stone4 ||
                propertyRandomKeysObjectAllNumberGex == stone5 ||
                propertyRandomKeysObjectAllNumberGex == stone6
            ) {
                allNumberGexRandom();
            }
            stone6 = 11;
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
            overwritingVariableStone();
            return;
        }
        //11
        else if (propertyRandomKeysObjectAllNumberGex === 11) {
            while (PROP9999 || propertyRandomKeysObjectAllNumberGex == stone1 ||
                propertyRandomKeysObjectAllNumberGex == stone2 ||
                propertyRandomKeysObjectAllNumberGex == stone3 ||
                propertyRandomKeysObjectAllNumberGex == stone4 ||
                propertyRandomKeysObjectAllNumberGex == stone5 ||
                propertyRandomKeysObjectAllNumberGex == stone6
            ) {
                allNumberGexRandom();
            }
            stone6 = 3;
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex;
            overwritingVariableStone();
            return;
        }
        //---
        else {
            gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
            overwritingVariableStone()
        }
        return
    }
}

//
//
//
//----ЕСЛИ РЕСУРСОВ БОЛЬШЕ ЧЕМ НУЖНО
/*

    while (quantityTreeGexArray > 5 || quantityTreeGexArray <= 3 ||
        quantityRyeGexArray > 5 || quantityRyeGexArray <= 3 ||
        quantityRamsGexArray > 5 || quantityRamsGexArray <= 3 ||
        quantityClayGexArray > 4 || quantityClayGexArray < 3 ||
        quantityStoneGexArray > 5 || quantityStoneGexArray < 3
    ) {
        console.log('ПОВТОР ФУНКЦИИ ГЕНЕРАЦИИ');

        //клон основного массива гексов
        gexMapAtrNumber = gexMapAtrNumberBase.slice(0)

        initialStateArrayGexRes()
        generateMap()
    }*/
//
//
/*
numberCheckGex9999()
    //Функция удаления из масива
if (gex9999.classList.contains('block4')) { console.log('глина'); } else {
    let indexAllNum;
    gexNumberArray.find((item, index) => {
        if (item == gex9999.children[0].textContent) {
            indexAllNum = index;
            return item
        }
    });
    gexNumberArray.splice(indexAllNum, 1);
}
gettingNewValuesGexNumber() 
*/