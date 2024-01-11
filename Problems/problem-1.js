test = [-5,-4,-3,-2,-1,1,2,3,4,5,6];

// Решение через map и sort.
// Сначала возводим каждый элемент массива в квадрат -> O(n)
// Далее, сортируем по возрастанию -> тоже O(n*log n)
// Итог: суммарная сложность по времени O(n*log n)
const map_func = (array) => {
    let squared_array =  array.map(item => item**2);
    return squared_array.sort((a,b) => a - b)
};

// Решение через два указателя.
// Проходим по всему массиву, сравнивая левые и правые значения -> O(n).
// Набольшее добавляем в результирующий массив.
// Результирующий массив переворачиваем, чтобы получить (от меньшего к большему) -> O(n).
// Итог: суммарная сложность по времени O(n)
const two_pointer_func = (array) =>{
    let left = 0;
    let right = array.length - 1;
    let result = [];

    while (left <= right) {
        let var_left = array[left] ** 2;
        let var_right = array[right] ** 2;

        if (var_left > var_right) {
            result.push(var_left);
            left += 1;
        }
        else{
            result.push(var_right)
            right -= 1;
        }
    }
    return result.reverse();
}

// Решение через вставку в массив.
// Проходим по массиву и сравниваем каждое возведенное в квадрат значение с последним в 
// результирующем массиве.
// Если новое значение меньше последнего, то проходимся по результирующему массиву и
// ищем куда вставить.
// Итог: в худшем случае будет O(n^2)
const splice_func = (array) =>{
    let result = [];
    result.push(array[0]**2);
    let new_array = array.slice(1, array.length);

    for (let index = 0; index < new_array.length; index++) {
        let number_squared = new_array[index] **2;
        if (number_squared >= result.at(-1)){
            result.push(number_squared);
        }
        else{
            for (let j = 0; j <= result.length; j++) {
                if (result[j] > number_squared) {
                    result.splice(j, 0, number_squared);
                    break;
                };
            };
        };  
    };
    return result;
};

console.log(splice_func(test));
console.log(two_pointer_func(test));
console.log(map_func(test));