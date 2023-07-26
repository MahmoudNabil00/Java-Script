// let firstArray = [1,2,4,6,8,10,5]
// let secondArray = [3,5,6,1,9,10]
// function getCommonElement(arr1,arr2){
//   let obj = {}
//   for(let i = 0 ; i<arr1.length;i++){
//     obj[arr1[i]]=true
//   }
//   let duplicateElement = []
//   for(let j = 0 ; j<arr2.length;j++){
//     if(obj.hasOwnProperty(arr2[j])){
//       duplicateElement.push(arr2[j])
//     }
//   }
//   return duplicateElement
// }
// console.log(getCommonElement(firstArray,secondArray))

// -----------------https://leetcode.com/problems/two-sum/-----------------------

// let arr = [2,5,5,11]
// let target = 10   // [1,2]

// //traditional solution ---

// function twoSum(arr,target){
//   let resultAsIndices = []
//   for(let i = 0 ; i<arr.length;i++){
//     for(let j= i+1 ; j<arr.length;j++){
//       if(arr[i]+arr[j]==target){
//         resultAsIndices.push(i,j)
//         return resultAsIndices
//       }
//     }
//   }
// }
// console.log(twoSum(arr,target))

//Hash Table ------------------

// function twoSum(arr,target){
//   let resultAsIndices = []
//   let hashTable = {}
//   for(let i = 0 ; i<arr.length;i++){
//     hashTable[arr[i]] = true
//   }
// }
// console.log(twoSum(arr,target))

// --------------------------https://leetcode.com/problems/roman-to-integer/-----------------------\

//[I, V, X, L, C, D , M] we have 7 symbols

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// 4  -> IV
// 9  -> IX
//40  -> XL
//90  -> XC
//400 -> CD
//900 -> CM

// Range [1-4000]

// function romanToInteger(string){
//   let splittingArray = string.split('')
//   specialCaseArray = ['IV','IX','XL','XC','CD','CM']
//   let secondCounter  = 0
//   let finalResult = []
//   let integerResult = null
//   for(let i = 0 ; i < splittingArray.length ; i++){
//     let mergedString = splittingArray[i]+splittingArray[i+1]
//     if(specialCaseArray.includes(mergedString)){
//       i++ ;
//       finalResult.push(mergedString);
//     }else{
//       finalResult.push(splittingArray[i]);
//     }
//     console.log(finalResult)
//     switch(finalResult[secondCounter]){
//       case 'I':
//         integerResult+=1
//         secondCounter++;
//         break;
//       case 'V':
//         integerResult+=5
//         secondCounter++;
//         break;
//       case 'X':
//         integerResult+=10
//         secondCounter++;
//         break;
//       case 'L':
//         integerResult+=50
//         secondCounter++;
//         break;
//       case 'C':
//         integerResult+=100
//         secondCounter++;
//         break;
//       case 'D':
//         integerResult+=500
//         secondCounter++;
//         break;
//       case 'M':
//         integerResult+=1000
//         secondCounter++;
//         break;
//       case 'IV':
//         integerResult+=4
//         secondCounter++;
//         break;
//       case 'IX':
//         integerResult+=9
//         secondCounter++;
//         break;
//       case 'XL':
//         integerResult+=40
//         secondCounter++;
//         break;
//       case 'XC':
//         integerResult+=90
//         secondCounter++;
//         break;
//       case 'CD':
//         integerResult+=400
//         secondCounter++;
//         break;
//       case 'CM':
//         integerResult+=900
//         secondCounter++;
//         break;
//     }
//   }
//   return integerResult
// }
// console.log(romanToInteger('MMDL'))

//-*-*-*-*-*-*-*-*-*-*-*-*recursion multiplication*-*-*-*-*-*-*-*-*-*-*-*

// function recursion(arr,i=0,mul=arr[0]){
//   let index = i
//   let initialArr = arr
//   let result = i==0 ? mul : mul*arr[i]
//   // result =
//   if(index == initialArr.length-1){
//     return result
//   }else{
//     index+=1
//     return recursion(initialArr,index,result)
//   }
// }
// console.log(recursion([1,2,3,4,2]))

//-*-*-*-*-*-*-*-*-*-*-*-*88. Merge Sorted Array*-*-*-*-*-*-*-*-*-*-*-*
/*
    - two array sorted as ascending order
    - m and n represent the number of the element in the each array
    -Requirements :
    - Merge nums1 and nums2 into a single array sorted in non-decreasing order 
    */
// nums1 has a length of m + n
// n elements are set to 0 and should be ignored. nums2 has a length of n.

// function merge(nums1, m, nums2, n) {
//     if(m===0){
//         nums1[0]=[1]
//         return nums1
//     }
//     nums1.push(...nums2)
//     console.log(nums1)
//     nums1.splice(n,n)
//     console.log(nums1)
//     nums1.sort((a, b)=>  a - b);
//     return nums1
// };

// let arr1 = [1,2,3]
// let arr2 = [2,5,6]
// let m = arr1.length
// let n = arr2.length
// arr1.push(...Array(arr2.length).fill(0))
// // console.log(merge(arr1,m,arr2,n))
// console.log(merge([0],0,[1],1))

//-*-*-*-*-*-*-*-*-*-*-*Pyramid Shape*-*-*-*-*-*-*-*-*-*-*-*
// function PyramidShape(row){
//     let concatString = []
//     let numberOfSpaces = row
//     let between = 0
//     for(let i = 0 ; i<row;i++){
//         if(i!==0){
//             ++between
//             concatString.push('\n')
//             --numberOfSpaces
//         }
//         for(let j = 0 ; j<numberOfSpaces;j++){
//             j+1==numberOfSpaces ? concatString.push('*') : concatString.push(' ')
//         }
//         if(between!=0){
//             for(let k = 0 ;k < between ; k++ ){
//                 concatString.push(' ','*')
//             }
//         }
//     }
//     console.log(concatString)
//     return concatString.join('')
// }
// console.log(PyramidShape(5))

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

//-*-*-*-*-*-*-*-*-*-*-*20. Valid Parentheses (Stack)*-*-*-*-*-*-*-*-*-*-*-*
// instructions
// --Open brackets must be closed by the same type of brackets.
// --Open brackets must be closed in the correct order.
// --Every close bracket has a corresponding open bracket of the same type.
// var isValidParentheses = function(brackets) {
//     let hashTable = {
//         ')' : '(',
//         '}' : '{',
//         ']' : '[',
//     }
//     let order = 1
//     let validSymbolsBrackets = ['(',')','{','}', '[',']']
//     let separateBrackets = brackets.split('')
//     console.log(separateBrackets)
//     if(separateBrackets.length === 0 || separateBrackets.length === 1) return false;
//     for(let i = separateBrackets.length-1 ; i>=0 ; i--){
//         i =  separateBrackets.length-1
//         order = 0
//         if(!validSymbolsBrackets.includes(separateBrackets[i])) return false;
//         if(separateBrackets[i] == '(' || separateBrackets[i] == '[' || separateBrackets[i] == '{') {return false}
//         else{
//             let closeBracket = separateBrackets[i]
//             let step = 0
//             if(separateBrackets.length==0) return true
//             loop2: for(let j = i - 1 ; j >= 0 ; j--){
//                 if(separateBrackets[j] == closeBracket){
//                     step++
//                 }
//                 if(hashTable[closeBracket] == separateBrackets[j] && (order % 2 == 0 || order == 0) && step==0){
//                     separateBrackets.splice(i,1)
//                     separateBrackets.splice(j,1)
//                     // i = separateBrackets.length-1
//                     if(separateBrackets.length==0){
//                         return true
//                     }
//                     break loop2;
//                 }
//                 if(hashTable[closeBracket] == separateBrackets[j] && step == 0 && order % 2 == 0){
//                     separateBrackets.splice(i,1)
//                     separateBrackets.splice(j,1)
//                     // i = separateBrackets.length-1
//                     if(separateBrackets.length==0){
//                         return true
//                     }
//                     break loop2;
//                 }
//                 if(step>0 && hashTable[closeBracket] == separateBrackets[j]){
//                     step--
//                     order++
//                 }
//                 else{
//                     order++
//                     if(j==0){
//                         return false
//                     }
//                 }
//             }
//         }
//     }
//     return true
// };
// console.log(isValidParentheses('()({[]})'));

// function isValidParentheses(bracket){
//     let validSymbolsBrackets = ['(',')','{','}', '[',']']
//     const hashTable = {
//     "(": ")",
//     "[": "]",
//     "{": "}"
//     }
//     stack = []
//     let separateBrackets = bracket.split('')
//     if(separateBrackets.length % 2 != 0 || separateBrackets.length == 0){return false}
//     for(let i = 0 ; i < separateBrackets.length ; i++){
//         if(!validSymbolsBrackets.includes(separateBrackets[i])) {return false};
//         if(separateBrackets[i] == '(' || separateBrackets[i] == '[' || separateBrackets[i] == '{'){
//             stack.push(separateBrackets[i])
//         }
//         else if(separateBrackets[i] == ')' || separateBrackets[i] == ']' || separateBrackets[i] == '}'){
//             if(hashTable[stack[stack.length-1]] == separateBrackets[i]){
//                 stack.pop()
//             }else{
//                 return false
//             }
//         }
//     }
//     if(stack.length != 0){return false}
//     return true
// }
// console.log(isValidParentheses('((((('))

//-*-*-*-*-*-*-*-*-*-*-*-*217. Contains Duplicate *-*-*-*-*-*-*-*-*-*-*-*
//-- return true if any value appears twice at least
//-- else return false

// var containsDuplicate = function(nums) {
//     let hashMap = {}
//     for(let i = 0 ; i < nums.length ; i++){
//         if(hashMap[nums[i]]){return true}
//         hashMap[nums[i]] = true
//     }
//     return false
// };
// console.log(containsDuplicate([1,2,3]))

//-*-*-*-*-*-*-*-*-*-*-*-* 242. Valid Anagram *-*-*-*-*-*-*-*-*-*-*-*

// return true if (t) is anagram of (s)

// var isAnagram = function(s, t) {
//     let anagramObj = {}
//     let anagramComparison = {}
//     if(s.length !== t.length){return false}
//     for(let letter of s){
//         if(anagramObj.hasOwnProperty(letter)){
//             anagramObj[letter] = anagramObj[letter] + 1
//         }else{
//             anagramObj[letter] = 1
//         }

//     }
//     for(let letter of t){
//         if(anagramComparison.hasOwnProperty(letter)){
//             anagramComparison[letter] = anagramComparison[letter] + 1
//         }else{
//             anagramComparison[letter] = 1
//         }

//     }
//     console.log([anagramObj,anagramComparison]);
//     for(let letter of t){
//         if(anagramObj.hasOwnProperty(letter)){
//             if(anagramObj[letter] == anagramComparison[letter]){
//                 continue ;
//             }else{
//                 return false
//             }
//         }else{
//             return false
//         }
//     }
//     return true
// };
// console.log(isAnagram("rat","cat"))

//-*-*-*-*-*-*-*-*-*-*-*-* 125. Valid Palindrome *-*-*-*-*-*-*-*-*-*-*-*

// var isPalindrome = function(s) {
//     s = s.replace(/[^a-zA-Z0-9]/g, '');
//     let splittingArray = s.split('')
//     console.log(splittingArray);
//     for(let i = 0 , j = splittingArray.length-1 ; i < splittingArray.length;i++,j--){
//         if(splittingArray[i].toLowerCase()==splittingArray[j].toLowerCase()){
//             continue ;
//         }else{
//             return false
//         }
//     }
//     return true
// };
// console.log(isPalindrome("A man, a plan, a canal: Panama"))

//-*-*-*-*-*-*-*-*-*-*-*-*  121. Best Time to Buy and Sell Stock (Sliding Window)*-*-*-*-*-*-*-*-*-*-*-*

//SlideWindow Algorithm ::--

// function getLargestSumOfNthConsecutiveElements(arr, size) {
//   let currentSum = 0;
//   let maxSum = -Infinity;  // this mean any negative number
//   for (let i = 0; i < arr.length; i++) {
//     if(i > size-1){
//         currentSum -= arr[i-size]
//         currentSum += arr[i]
//         // console.log(currentSum,i);
//     }else{
//         currentSum += arr[i]
//         // console.log(currentSum,i);
//     }
//     maxSum = Math.max(maxSum,currentSum)
//   }
//   return maxSum
//      }
// let arr = [ 5, 7, 1, 4, 3, 6, 2, 9, 2 ];
// let size = 5;
// console.log(getLargestSumOfNthConsecutiveElements(arr, size));

// the indices indicate to the days 
// the element indicate to price 
// var maxProfit = function(prices) {
//     let slicedArray = prices.slice(0,prices.length-1)
//     let minStock = Math.min(...slicedArray)
//     // if(minStock==0){
//     //     slicedArray.splice(prices.indexOf(minStock),1)
//     //     minStock = Math.min(...slicedArray)
//     // }
//     let profits = []
//     let dayAtMinStock = prices.indexOf(minStock) //--incorrect procedure
//     if(dayAtMinStock == prices.length-1){return 0}else{
//         for(let i = dayAtMinStock + 1 ; i < prices.length ; i++){
//             if(prices[i] - minStock > 0){
//                 profits.push(prices[i] - minStock)
//             }else{
//                 if(i==prices.length){
//                     return 0;
//                 }else{
//                     continue;
//                 }
//             }
//         }
//     }
//     if(profits.length==0){return 0}else{return Math.max(...profits)}
// }

// var maxProfit = function(prices) {
//     let profits = []
//     for(let i = 0 ; i < prices.length ; i++){
//         if(prices[i+1]-prices[i] > 0){
//             profits.push(prices[i+1] - prices[i])
//         }else{
//             continue;
//         }
//     }
//     if(profits.length==0){return 0}else{return Math.max(...profits)}
// }

// var maxProfit = function(prices) {
//     let profits = []
//     for(let i = 0 ; i < prices.length ; i++){
//         let currentPrice = prices[i]
//         for(let j = i+1 ; j < prices.length ; j++){
//             if(prices[j]-currentPrice > 0){
//                 profits.push(prices[j]-currentPrice)
//             }
//         }
//     }
//     if(profits.length==0){return 0}else{return Math.max(...profits)}
// }


// var maxProfit = function(prices) {
//     let profits = 0
//     let pointer = 0
//     for(let i = 0 ; i < prices.length ; i++){
//         if((prices[i+1] - prices[pointer]) > profits ){
//             profits = prices[i+1] - prices[pointer]

//         }
//         if(i==prices.length-1 && (prices[i]-prices[pointer] > profits)){
//             profits = prices[i]-prices[pointer]
//         }
//         if(pointer == 0 && profits==0){
//             pointer++
//         }
//         if(prices[i] < prices[pointer]){
//             pointer = i
//             if((prices[i+1] - prices[pointer]) > profits ){
//                 profits = prices[i+1] - prices[pointer]
//             }
//         }
//     }
//     return profits
// }


// let maxProfit = 0
// let left = 0
// for(let right = 1 ; right < prices.length ; right++){
//     let currProfit = prices[right] - prices[left];
//     if(currProfit < 0)
//         left = right
//     else if(currProfit > maxProfit )
//         maxProfit = currProfit
// }
// return maxProfit

let arrr=[7,1,5,3,6,4]
let arrr1=[2,1,4]
let arrr2=[1,2,4,2,5,7,2,4,9,0,9]
let arrr3=[3,2,6,5,0,3]
let arrr4=[2,4,1,11,7]
        // ptr = 1
        // i = 1
        // i+1 = 2
        // profits = 0
// let arr  = [7,5,3,1,6,4]
// let arr2 = [1,2]
// let arr3 = [3,3]
// let arr4 = [2,4,1]
let arr5 = [3,2,3,5,0,6]
            // ptr = 2
            // i =3
            // profits = 3
// let arr6 = [6,1,3,2,4,7]
// let arr7 = [4,1,2]

console.log(maxProfit(arrr4));

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
