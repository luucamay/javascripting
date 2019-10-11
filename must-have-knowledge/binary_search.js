/*You're going to write a binary search function.
You should use an iterative approach - meaning
using loops.
Your function should take two inputs:
a Python list to search through, and the value
you're searching for.
Assume the list only has distinct elements,
meaning there are no repeated values, and 
elements are in a strictly increasing order.
Return the index of value, or -1 if the value
doesn't exist in the list.*/
function binary_search(input_array, value){
    let size = input_array.length
    if (size > 0){
        let number_of_loops = Math.ceil(Math.sqrt(size))
        size = parseInt(size/2 + 1)
        index = size - 1
        for (let i = 0; i < number_of_loops; i++){
            if (input_array[index] == value)
                return index
            size = parseInt(size/2)
            if (input_array[index] > value)
                index = index - size
            else
                index = index + size
        }
    }
    return -1
}
    

test_list = [1,3,9,11,15,19,29]
test_val1 = 25
test_val2 = 15
test_val3 = 0
console.log(binary_search(test_list, test_val1))
console.log(binary_search(test_list, test_val2))
console.log(binary_search(test_list, test_val3))