// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    nums.sort((num1, num2) => num2 - num1);

    let finalNum = undefined;
    let repeatedNum = new Set();
    let actNum = 0;
    
    nums.forEach(num => {
        
   
        if (!repeatedNum.has(num)) {
            repeatedNum.add(num);
            actNum++;

            if (actNum == 3) {
                finalNum = num;
            }
        }
    });

    return finalNum;
}


// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === undefined);
console.log(greater3([1,1,2,5]) === 1);