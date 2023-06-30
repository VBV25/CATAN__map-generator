  //-------1-------!
  function numberCheckGex1() {
      allNumberGexRandom()
      if (gex1.classList.contains('block1')) {
          console.log('дерево');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

              while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                  allNumberGexRandom()
              }
              gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
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

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
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
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                  allNumberGexRandom()
              }
              gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }
          //---
          else {
              gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
          }
          return
      } else if (gex1.classList.contains('block5')) {
          console.log('камень');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                  allNumberGexRandom()
              }
              gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                  propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex == gexNumber2 || propertyRandomKeysObjectAllNumberGex == gexNumber4 || propertyRandomKeysObjectAllNumberGex == gexNumber5 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                  propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }
          //---
          else {
              gex1.children[0].textContent = propertyRandomKeysObjectAllNumberGex
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
      allNumberGexRandom()
      if (gex3.classList.contains('block1')) {
          console.log('дерево');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                  allNumberGexRandom()
              }
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }
          //---
          else {
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
          }
          return
      } else if (gex3.classList.contains('block2')) {
          console.log('бараны');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                  allNumberGexRandom()
              }
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }
          //---
          else {
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
          }
          return
      } else if (gex3.classList.contains('block3')) {
          console.log('рожь');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                  allNumberGexRandom()
              }
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }
          //---
          else {
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
          }
          return
      } else if (gex3.classList.contains('block5')) {
          console.log('камень');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                  allNumberGexRandom()
              }
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                  propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber6 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                  propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }
          //---
          else {
              gex3.children[0].textContent = propertyRandomKeysObjectAllNumberGex
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

  //--------8-------!
  function numberCheckGex8() {
      allNumberGexRandom()
      if (gex8.classList.contains('block1')) {
          console.log('дерево');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                  allNumberGexRandom()
              }
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }
          //---
          else {
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
          }
          return
      } else if (gex8.classList.contains('block2')) {
          console.log('бараны');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                  allNumberGexRandom()
              }
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }
          //---
          else {
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
          }
          return
      } else if (gex8.classList.contains('block3')) {
          console.log('рожь');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                  allNumberGexRandom()
              }
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }
          //---
          else {
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
          }
          return
      } else if (gex8.classList.contains('block5')) {
          console.log('камень');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                  allNumberGexRandom()
              }
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                  propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber4 || propertyRandomKeysObjectAllNumberGex === gexNumber9 || propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                  propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }
          //---
          else {
              gex8.children[0].textContent = propertyRandomKeysObjectAllNumberGex
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

  //--------12-------!
  function numberCheckGex12() {
      allNumberGexRandom()
      if (gex12.classList.contains('block1')) {
          console.log('дерево');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                  allNumberGexRandom()
              }
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }
          //---
          else {
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
          }
          return
      } else if (gex12.classList.contains('block2')) {
          console.log('бараны');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                  allNumberGexRandom()
              }
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }
          //---
          else {
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
          }
          return
      } else if (gex12.classList.contains('block3')) {
          console.log('рожь');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                  allNumberGexRandom()
              }
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }
          //---
          else {
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
          }
          return
      } else if (gex12.classList.contains('block5')) {
          console.log('камень');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                  allNumberGexRandom()
              }
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                  propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber16 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                  propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }
          //---
          else {
              gex12.children[0].textContent = propertyRandomKeysObjectAllNumberGex
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

  //--------16-------!
  function numberCheckGex16() {
      allNumberGexRandom()
      if (gex16.classList.contains('block1')) {
          console.log('дерево');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                  allNumberGexRandom()
              }
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }
          //---
          else {
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
          }
          return
      } else if (gex16.classList.contains('block2')) {
          console.log('бараны');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                  allNumberGexRandom()
              }
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }
          //---
          else {
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
          }
          return
      } else if (gex16.classList.contains('block3')) {
          console.log('рожь');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                  allNumberGexRandom()
              }
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }
          //---
          else {
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
          }
          return
      } else if (gex16.classList.contains('block5')) {
          console.log('камень');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                  allNumberGexRandom()
              }
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                  propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex === gexNumber12 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                  propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }
          //---
          else {
              gex16.children[0].textContent = propertyRandomKeysObjectAllNumberGex
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

  //--------17-------
  function numberCheckGex17() {
      allNumberGexRandom()
      if (gex17.classList.contains('block1')) {
          console.log('дерево');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                  allNumberGexRandom()
              }
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }
          //---
          else {
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
          }
          return
      } else if (gex17.classList.contains('block2')) {
          console.log('бараны');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                  allNumberGexRandom()
              }
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }
          //---
          else {
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
          }
          return
      } else if (gex17.classList.contains('block3')) {
          console.log('рожь');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                  allNumberGexRandom()
              }
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }
          //---
          else {
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
          }
          return
      } else if (gex17.classList.contains('block5')) {
          console.log('камень');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                  allNumberGexRandom()
              }
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                  propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber13 || propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber18 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                  propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }
          //---
          else {
              gex17.children[0].textContent = propertyRandomKeysObjectAllNumberGex
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
  //--------18-------
  function numberCheckGex18() {

      if (gex18.classList.contains('block1')) {
          console.log('дерево');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                  allNumberGexRandom()
              }
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
              return
          }
          //---
          else {
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableTrees()
          }
          return
      } else if (gex18.classList.contains('block2')) {
          console.log('бараны');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                  allNumberGexRandom()
              }
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
              return
          }
          //---
          else {
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRams()
          }
          return
      } else if (gex18.classList.contains('block3')) {
          console.log('рожь');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                  allNumberGexRandom()
              }
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
              return
          }
          //---
          else {
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableRye()
          }
          return
      } else if (gex18.classList.contains('block5')) {
          console.log('камень');
          if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
              while (propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                  allNumberGexRandom()
              }
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }

          //проверка на 3 и 11
          //3
          else if (propertyRandomKeysObjectAllNumberGex === 3) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                  propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                  allNumberGexRandom()
              }
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }
          //11
          else if (propertyRandomKeysObjectAllNumberGex === 11) {

              while (propertyRandomKeysObjectAllNumberGex === gexNumber14 || propertyRandomKeysObjectAllNumberGex === gexNumber15 || propertyRandomKeysObjectAllNumberGex === gexNumber17 || propertyRandomKeysObjectAllNumberGex === gexNumber19 || propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                  propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                  allNumberGexRandom()
              }
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
              return
          }
          //---
          else {
              gex18.children[0].textContent = propertyRandomKeysObjectAllNumberGex
              overwritingVariableStone()
          }
          return
      } else {
          console.log('глина');
      }
  }
  allNumberGexRandom()
  console.log('propertyRandomKeysObjectAllNumberGex начало операции  ' + propertyRandomKeysObjectAllNumberGex)
  if (gex18.classList.contains('block1') && propertyRandomKeysObjectAllNumberGex === gexNumber14 && propertyRandomKeysObjectAllNumberGex === gexNumber15 && propertyRandomKeysObjectAllNumberGex === gexNumber17 && propertyRandomKeysObjectAllNumberGex === gexNumber19 && propertyRandomKeysObjectAllNumberGex == tree1 && propertyRandomKeysObjectAllNumberGex == tree2 && propertyRandomKeysObjectAllNumberGex == tree3 && propertyRandomKeysObjectAllNumberGex == tree4 && propertyRandomKeysObjectAllNumberGex == tree5) {
      randomNumberFunction()

      console.log('доп функция')
      console.log('numberArray' + numberArray)
      console.log('randomNumber' + randomNumber)
      while (randomNumber === gexNumber15 || randomNumber === gexNumber16 || randomNumber === gexNumber18 || randomNumber == tree1 || randomNumber == tree2 || randomNumber == tree3 || randomNumber == tree4 || randomNumber == tree5) { randomNumberFunction() }
      gex18.children[0].textContent = randomNumber + '|' + propertyRandomKeysObjectAllNumberGex
      overwritingVariableTrees()
      return
  } else if (gex18.classList.contains('block2') && propertyRandomKeysObjectAllNumberGex === gexNumber14 && propertyRandomKeysObjectAllNumberGex === gexNumber15 && propertyRandomKeysObjectAllNumberGex === gexNumber17 && propertyRandomKeysObjectAllNumberGex === gexNumber19 && propertyRandomKeysObjectAllNumberGex == rams1 && propertyRandomKeysObjectAllNumberGex == rams2 && propertyRandomKeysObjectAllNumberGex == rams3 && propertyRandomKeysObjectAllNumberGex == rams4 && propertyRandomKeysObjectAllNumberGex == rams5) {
      randomNumberFunction()
      console.log('доп функция')
      console.log('numberArray' + numberArray)
      console.log('randomNumber' + randomNumber)
      while (randomNumber === gexNumber15 || randomNumber === gexNumber16 || randomNumber === gexNumber18 || randomNumber == rams1 || randomNumber == rams2 || randomNumber == rams3 || randomNumber == rams4 || randomNumber == rams5) { randomNumberFunction() }
      gex18.children[0].textContent = randomNumber + '|' + propertyRandomKeysObjectAllNumberGex
      overwritingVariableRams()
      return
  } else if (gex18.classList.contains('block3') && propertyRandomKeysObjectAllNumberGex === gexNumber14 && propertyRandomKeysObjectAllNumberGex === gexNumber15 && propertyRandomKeysObjectAllNumberGex === gexNumber17 && propertyRandomKeysObjectAllNumberGex === gexNumber19 && propertyRandomKeysObjectAllNumberGex == rye1 && propertyRandomKeysObjectAllNumberGex == rye2 && propertyRandomKeysObjectAllNumberGex == rye3 && propertyRandomKeysObjectAllNumberGex == rye4 && propertyRandomKeysObjectAllNumberGex == rye5) {
      randomNumberFunction()
      console.log('доп функция')
      console.log('numberArray' + numberArray)
      console.log('randomNumber' + randomNumber)
      while (randomNumber === gexNumber15 || randomNumber === gexNumber16 || randomNumber === gexNumber18 || randomNumber == rye1 || randomNumber == rye2 || randomNumber == rye3 || randomNumber == rye4 || randomNumber == rye5) { randomNumberFunction() }
      gex18.children[0].textContent = randomNumber + '|' + propertyRandomKeysObjectAllNumberGex
      overwritingVariableRye()
      return
  } else if (gex18.classList.contains('block5') && propertyRandomKeysObjectAllNumberGex === gexNumber14 && propertyRandomKeysObjectAllNumberGex === gexNumber15 && propertyRandomKeysObjectAllNumberGex === gexNumber17 && propertyRandomKeysObjectAllNumberGex === gexNumber19 && propertyRandomKeysObjectAllNumberGex == stone1 && propertyRandomKeysObjectAllNumberGex == stone2 && propertyRandomKeysObjectAllNumberGex == stone3 && propertyRandomKeysObjectAllNumberGex == stone4 && propertyRandomKeysObjectAllNumberGex == stone5) {
      randomNumberFunction()
      console.log('доп функция')
      console.log('numberArray' + numberArray)
      console.log('randomNumber' + randomNumber)
      while (randomNumber === gexNumber15 || randomNumber === gexNumber16 || randomNumber === gexNumber18 || randomNumber == stone1 || randomNumber == stone2 || randomNumber == stone3 || randomNumber == stone4 || randomNumber == stone5) { randomNumberFunction() }
      gex18.children[0].textContent = randomNumber + '|' + propertyRandomKeysObjectAllNumberGex
      overwritingVariableStone()
      return
  } else if (gex18.classList.contains('block4')) { console.log('') }
  //
  //
  //
  else {}

  //
  //
  //
  //

  //--------19-------

  randomNumberFunction()
      //------НУМЕРАЦИЯ ГЕКСА---------
  function numberCheckGex19() {

      ///ДЕРЕВЬЯ
      if (gex19.classList.contains('block1')) {
          console.log('дерево');
          if (randomNumber != 6 || randomNumber != 8 || randomNumber != 3 || randomNumber != 11) {
              while (randomNumber === gexNumber15 || randomNumber === gexNumber16 || randomNumber === gexNumber18 || randomNumber == tree1 || randomNumber == tree2 || randomNumber == tree3 || randomNumber == tree4 || randomNumber == tree5) {
                  randomNumberFunction()
              }
              gex19.children[0].textContent = randomNumber + '|' + gexNumberArray[0]
              overwritingVariableTrees()
              return
          }
          //---
          else {
              gex19.children[0].textContent = randomNumber + '|' + gexNumberArray[0]
              overwritingVariableTrees()
          }
          return
      }
      ///БАРАНЫ
      else if (gex19.classList.contains('block2')) {
          console.log('бараны');
          if (randomNumber != 6 || randomNumber != 8 || randomNumber != 3 || randomNumber != 11) {
              while (randomNumber === gexNumber15 || randomNumber === gexNumber16 || randomNumber === gexNumber18 || randomNumber == rams1 || randomNumber == rams2 || randomNumber == rams3 || randomNumber == rams4 || randomNumber == rams5) {
                  randomNumberFunction()
              }
              gex19.children[0].textContent = randomNumber + '|' + gexNumberArray[0]
              overwritingVariableRams()
              return
          }
          //---
          else {
              gex19.children[0].textContent = randomNumber + '|' + gexNumberArray[0]
              overwritingVariableRams()
          }
          return
      }
      ///РОЖЬ
      else if (gex19.classList.contains('block3')) {
          console.log('рожь');
          if (randomNumber != 6 || randomNumber != 8 || randomNumber != 3 || randomNumber != 11) {
              while (randomNumber === gexNumber15 || randomNumber === gexNumber16 || randomNumber === gexNumber18 || randomNumber == rye1 || randomNumber == rye2 || randomNumber == rye3 || randomNumber == rye4 || randomNumber == rye5) {
                  randomNumberFunction()
              }
              gex19.children[0].textContent = randomNumber + '|' + gexNumberArray[0]
              overwritingVariableRye()
              return
          }
          //---
          else {
              gex19.children[0].textContent = randomNumber + '|' + gexNumberArray[0]
              overwritingVariableRye()
          }
          return
      }
      ///КАМЕНЬ
      else if (gex19.classList.contains('block5')) {
          console.log('камень');
          if (randomNumber != 6 || randomNumber != 8 || randomNumber != 3 || randomNumber != 11) {
              while (randomNumber === gexNumber15 || randomNumber === gexNumber16 || randomNumber === gexNumber18 || randomNumber == stone1 || randomNumber == stone2 || randomNumber == stone3 || randomNumber == stone4 || randomNumber == stone5) {
                  randomNumberFunction()
              }
              gex19.children[0].textContent = randomNumber + '|' + gexNumberArray[0]
              overwritingVariableStone()
              return
          }
          //---
          else {
              gex19.children[0].textContent = randomNumber + '|' + gexNumberArray[0]
              overwritingVariableStone()
          }
          return
      }
      ///
      else {
          console.log('глина');
      }
  }
  //numberCheckGex19()
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
  //--------8888-------!
  /*-
  gexNumberArray[i] != gexNumber8 ||
   gexNumberArray[i] != gexNumber9 ||
    gexNumberArray[i] != gexNumber14 ||
     gexNumberArray[i] != gexNumber17
      -*/
  function numberCheckGex8888() {
      let comparisonNumberFilledGex = true
      for (let i = 0; i < gexNumberArray.length; i++) {
          function chekingForMatchNum8888() {
              if (gex8888.classList.contains('block1')) {
                  if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                      if (PROP8888 || gexNumberArray[i] != tree1 || gexNumberArray[i] != tree2 || gexNumberArray[i] != tree3 || gexNumberArray[i] != tree4 || gexNumberArray[i] != tree5) {
                          // gex8888.children[0].textContent = gexNumberArray[i]
                          overwritingVariableTrees()
                          return comparisonNumberFilledGex = false
                      } else {
                          return comparisonNumberFilledGex = true
                      }
                  } else if (gexNumberArray[i] == 3) {
                      if (PROP8888 || gexNumberArray[i] != tree1 || gexNumberArray[i] != tree2 || gexNumberArray[i] != tree3 || gexNumberArray[i] != tree4 || gexNumberArray[i] != tree5 || gexNumberArray[i] != 11) {
                          // gex8888.children[0].textContent = gexNumberArray[i]
                          overwritingVariableTrees()
                          return comparisonNumberFilledGex = false
                      } else {
                          return comparisonNumberFilledGex = true
                      }
                  } else if (gexNumberArray[i] == 11) {
                      if (PROP8888 || gexNumberArray[i] != tree1 || gexNumberArray[i] != tree2 || gexNumberArray[i] != tree3 || gexNumberArray[i] != tree4 || gexNumberArray[i] != tree5 || gexNumberArray[i] != 3) {
                          //gex8888.children[0].textContent = gexNumberArray[i]
                          overwritingVariableTrees()
                          return comparisonNumberFilledGex = false
                      } else {
                          return comparisonNumberFilledGex = true
                      }
                  }
              } else if (gex8888.classList.contains('block2')) {
                  if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                      if (PROP8888 || gexNumberArray[i] != rams1 || gexNumberArray[i] != rams2 || gexNumberArray[i] != rams3 || gexNumberArray[i] != rams4 || gexNumberArray[i] != rams5) {
                          // gex8888.children[0].textContent = gexNumberArray[i]
                          overwritingVariableRams()
                          return comparisonNumberFilledGex = false
                      } else {
                          return comparisonNumberFilledGex = true
                      }
                  } else if (gexNumberArray[i] == 3) {
                      if (PROP8888 || gexNumberArray[i] != rams1 || gexNumberArray[i] != rams2 || gexNumberArray[i] != rams3 || gexNumberArray[i] != rams4 || gexNumberArray[i] != rams5 || gexNumberArray[i] != 11) {
                          // gex8888.children[0].textContent = gexNumberArray[i]
                          overwritingVariableRams()
                          return comparisonNumberFilledGex = false
                      } else {
                          return comparisonNumberFilledGex = true
                      }
                  } else if (gexNumberArray[i] == 11) {
                      if (PROP8888 || gexNumberArray[i] != rams1 || gexNumberArray[i] != rams2 || gexNumberArray[i] != rams3 || gexNumberArray[i] != rams4 || gexNumberArray[i] != rams5 || gexNumberArray[i] != 3) {
                          //gex8888.children[0].textContent = gexNumberArray[i]
                          overwritingVariableRams()
                          return comparisonNumberFilledGex = false
                      } else {
                          return comparisonNumberFilledGex = true
                      }
                  }
              } else if (gex8888.classList.contains('block3')) {
                  if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                      if (PROP8888 || gexNumberArray[i] != rye1 || gexNumberArray[i] != rye2 || gexNumberArray[i] != rye3 || gexNumberArray[i] != rye4 || gexNumberArray[i] != rye5) {
                          // gex8888.children[0].textContent = gexNumberArray[i]
                          overwritingVariableRye()
                          return comparisonNumberFilledGex = false
                      } else {
                          return comparisonNumberFilledGex = true
                      }
                  } else if (gexNumberArray[i] == 3) {
                      if (PROP8888 || gexNumberArray[i] != rye1 || gexNumberArray[i] != rye2 || gexNumberArray[i] != rye3 || gexNumberArray[i] != rye4 || gexNumberArray[i] != rye5 || gexNumberArray[i] != 11) {
                          // gex8888.children[0].textContent = gexNumberArray[i]
                          overwritingVariableRye()
                          return comparisonNumberFilledGex = false
                      } else {
                          return comparisonNumberFilledGex = true
                      }
                  } else if (gexNumberArray[i] == 11) {
                      if (PROP8888 || gexNumberArray[i] != rye1 || gexNumberArray[i] != rye2 || gexNumberArray[i] != rye3 || gexNumberArray[i] != rye4 || gexNumberArray[i] != rye5 || gexNumberArray[i] != 3) {
                          //gex8888.children[0].textContent = gexNumberArray[i]
                          overwritingVariableRye()
                          return comparisonNumberFilledGex = false
                      } else {
                          return comparisonNumberFilledGex = true
                      }
                  }
              } else if (gex8888.classList.contains('block4')) {
                  if (gexNumberArray[i] != 3 || gexNumberArray[i] != 11) {
                      if (PROP8888 || gexNumberArray[i] != stone1 || gexNumberArray[i] != stone2 || gexNumberArray[i] != stone3 || gexNumberArray[i] != stone4 || gexNumberArray[i] != stone5) {
                          // gex8888.children[0].textContent = gexNumberArray[i]
                          overwritingVariableStone()
                          return comparisonNumberFilledGex = false
                      } else {
                          return comparisonNumberFilledGex = true
                      }
                  } else if (gexNumberArray[i] == 3) {
                      if (PROP8888 || gexNumberArray[i] != stone1 || gexNumberArray[i] != stone2 || gexNumberArray[i] != stone3 || gexNumberArray[i] != stone4 || gexNumberArray[i] != stone5 || gexNumberArray[i] != 11) {
                          // gex8888.children[0].textContent = gexNumberArray[i]
                          overwritingVariableStone()
                          return comparisonNumberFilledGex = false
                      } else {
                          return comparisonNumberFilledGex = true
                      }
                  } else if (gexNumberArray[i] == 11) {
                      if (PROP8888 || gexNumberArray[i] != stone1 || gexNumberArray[i] != stone2 || gexNumberArray[i] != stone3 || gexNumberArray[i] != stone4 || gexNumberArray[i] != stone5 || gexNumberArray[i] != 3) {
                          //gex8888.children[0].textContent = gexNumberArray[i]
                          overwritingVariableStone()
                          return comparisonNumberFilledGex = false
                      } else {
                          return comparisonNumberFilledGex = true
                      }
                  }
              } else { return }
          }
          chekingForMatchNum8888()
          if (comparisonNumberFilledGex == false) {
              gex8888.children[0].textContent = gexNumberArray[i]
              return
          } else {
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
  //
  //


  //PROP9999 ||
  ///
  //

  /*

       //--------9999-------
       function numberCheckGex9999() {
          allNumberGexRandom()
          if (gex9999.classList.contains('block1')) {
              console.log('дерево');
              if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {

                  while (propertyRandomKeysObjectAllNumberGex === gexNumber2 || propertyRandomKeysObjectAllNumberGex === gexNumber3 || propertyRandomKeysObjectAllNumberGex === gexNumber5 || propertyRandomKeysObjectAllNumberGex === gexNumber7 || propertyRandomKeysObjectAllNumberGex === gexNumber10 || propertyRandomKeysObjectAllNumberGex === gexNumber11 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableTrees()
                  return
              }
              //проверка на 6 и 8
              //6
              else if (propertyRandomKeysObjectAllNumberGex === 6) {

                  while (PROP9999 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 8) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableTrees()
                  return
              }
              //8
              else if (propertyRandomKeysObjectAllNumberGex === 8) {

                  while (PROP9999 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 6) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableTrees()
                  return
              }
              //проверка на 3 и 11
              //3
              else if (propertyRandomKeysObjectAllNumberGex === 3) {

                  while (PROP9999 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 11) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableTrees()
                  return
              }
              //11
              else if (propertyRandomKeysObjectAllNumberGex === 11) {

                  while (PROP9999 || propertyRandomKeysObjectAllNumberGex == tree1 || propertyRandomKeysObjectAllNumberGex == tree2 || propertyRandomKeysObjectAllNumberGex == tree3 || propertyRandomKeysObjectAllNumberGex == tree4 || propertyRandomKeysObjectAllNumberGex == tree5 || propertyRandomKeysObjectAllNumberGex == 3) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableTrees()
                  return
              }
              //---
              else {
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableTrees()
              }
              return
          } else if (gex9999.classList.contains('block2')) {
              console.log('бараны');
              if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableRams()
                  return
              }
              //проверка на 6 и 8
              //6
              else if (propertyRandomKeysObjectAllNumberGex === 6) {

                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 8) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableRams()
                  return
              }
              //8
              else if (propertyRandomKeysObjectAllNumberGex === 8) {

                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 6) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableRams()
                  return
              }
              //проверка на 3 и 11
              //3
              else if (propertyRandomKeysObjectAllNumberGex === 3) {

                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 11) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableRams()
                  return
              }
              //11
              else if (propertyRandomKeysObjectAllNumberGex === 11) {

                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == rams1 || propertyRandomKeysObjectAllNumberGex == rams2 || propertyRandomKeysObjectAllNumberGex == rams3 || propertyRandomKeysObjectAllNumberGex == rams4 || propertyRandomKeysObjectAllNumberGex == rams5 || propertyRandomKeysObjectAllNumberGex == 3) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableRams()
                  return
              }
              //---
              else {
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableRams()
              }
              return
          } else if (gex9999.classList.contains('block3')) {
              console.log('рожь');
              if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableRye()
                  return
              }
              //проверка на 6 и 8
              //6
              else if (propertyRandomKeysObjectAllNumberGex === 6) {

                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 8) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableRye()
                  return
              }
              //8
              else if (propertyRandomKeysObjectAllNumberGex === 8) {

                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 6) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableRye()
                  return
              }
              //проверка на 3 и 11
              //3
              else if (propertyRandomKeysObjectAllNumberGex === 3) {

                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 11) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableRye()
                  return
              }
              //11
              else if (propertyRandomKeysObjectAllNumberGex === 11) {

                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == rye1 || propertyRandomKeysObjectAllNumberGex == rye2 || propertyRandomKeysObjectAllNumberGex == rye3 || propertyRandomKeysObjectAllNumberGex == rye4 || propertyRandomKeysObjectAllNumberGex == rye5 || propertyRandomKeysObjectAllNumberGex == 3) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableRye()
                  return
              }
              //---
              else {
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableRye()
              }
              return
          } else if (gex9999.classList.contains('block5')) {
              console.log('камень');
              if (propertyRandomKeysObjectAllNumberGex != 6 || propertyRandomKeysObjectAllNumberGex != 8 || propertyRandomKeysObjectAllNumberGex != 3 || propertyRandomKeysObjectAllNumberGex != 11) {
                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 || propertyRandomKeysObjectAllNumberGex == stone5) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableStone()
                  return
              }
              //проверка на 6 и 8
              //6
              else if (propertyRandomKeysObjectAllNumberGex === 6) {

                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                      propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 8) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableStone()
                  return
              }
              //8
              else if (propertyRandomKeysObjectAllNumberGex === 8) {

                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                      propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 6) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableStone()
                  return
              }
              //проверка на 3 и 11
              //3
              else if (propertyRandomKeysObjectAllNumberGex === 3) {

                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                      propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 11) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableStone()
                  return
              }
              //11
              else if (propertyRandomKeysObjectAllNumberGex === 11) {

                  while (PROP9999 ||propertyRandomKeysObjectAllNumberGex == stone1 || propertyRandomKeysObjectAllNumberGex == stone2 || propertyRandomKeysObjectAllNumberGex == stone3 || propertyRandomKeysObjectAllNumberGex == stone4 ||
                      propertyRandomKeysObjectAllNumberGex == stone5 || propertyRandomKeysObjectAllNumberGex == 3) {
                      allNumberGexRandom()
                  }
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableStone()
                  return
              }
              //---
              else {
                  gex9999.children[0].textContent = propertyRandomKeysObjectAllNumberGex
                  overwritingVariableStone()
              }
              return
          } else {
              console.log('глина');
          }
      }
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