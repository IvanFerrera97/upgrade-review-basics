let list = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        //console.log(array[i])
        if (array[i] === text){
            console.log(array.indexOf(text))
        }
    }
}

findArrayIndex(list, 'Mosquito')