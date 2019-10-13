/*
Given two sorted arrays arr1 and arr2 of passport numbers, 
implement a function findDuplicates that returns an array 
of all passport numbers that are both in arr1 and arr2.

Note that the output array should be sorted in an ascending order.
*/
function find_duplicates(arr1, arr2){
    if (arr1.length == 0 || arr2.length == 0)
        return []
    let duplicates = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] == arr2[j]){
            duplicates.push(arr1[i])
            i++
            j++
        }
        else if (arrr1[i] > arr2[j])
            j++
        else
            i++        
    }
    return duplicates
}

// Test
console.log(find_duplicates([1, 2, 3, 4, 5, 6, 7],[3, 6, 7, 8, 20]))