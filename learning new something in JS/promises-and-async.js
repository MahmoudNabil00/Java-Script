//Call Back Function :

// function callBack(){
//     console.log('iam a callback function')
// }
// setTimeout(callBack, 1000);

//Promise :

// const myPromise = new Promise((resolved,reject)=>{
//     let connect = true ;
//     if(connect){
//         resolved('Successfully Resolved')
//     }else{
//         reject('Rejected !')
//     }
// })
// myPromise.then(res=>{
//     console.log(res)
// },rej=>{
//     console.log(rej)
// })

//Fetch() : it is return a Promise

// fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8').then((result)=>{
//     console.log(result)
//     let data = result.json()
//     return data
// }).then(data=>{
//     console.log(data)
// })

// Promises Type

//1-all()
//2-allSettled()
//3-race()

// const firstPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("first promise resolved");
//   }, 2000);
// });
// const secondPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("second promise resolved");
//   }, 3000);
// });
// const thirdPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("third promise resolved");
//   }, 1000);
// });

// Must all promise return resolved if one return reject then the returned promise will be rejected one

// Promise.all([firstPromise,secondPromise,thirdPromise]).then(resolved=>{
//     console.log(resolved)
// }).catch(err=>{
//     console.log(err)
// })

// Return all promises with their status

// Promise.allSettled([firstPromise,secondPromise,thirdPromise]).then(res=>{
//     console.log(res);
// })

// Promise.race([firstPromise,secondPromise,thirdPromise]).then(res=>{
//     console.log(res);
// })

// Async & Await

//--Async :

// function getData(){
//     let users = []
//     if(users.length > 0){
//         return Promise.resolve(`${users[0]} User found`)
//     }else{
//         return Promise.reject(`Rejected`)
//     }
// }
// // console.log(getData())
// getData().then(res=>{
//     console.log(res)
// },
// rej=>{
//     throw new Error(rej)
// })

// async function getData() {
//   let users = ['amer'];
//   if (users.length > 0) {
//     return (`${users[0]} User found`);
//   } else {
//     return (`Rejected`);
//   }
// }
// console.log(getData());
// getData().then(res=>console.log('fulfilled',res)).catch(rej=>console.log('from catch rejected',rej))

//--Await :

// const myPromise = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res('I am finished')
//     }, 2000);
// })
// async function readData(){
//     console.log('this is the first line')
//     await myPromise.then(res=>console.log(res))
//     console.log('this is the last line')
// }
// readData()

//Try ,Catch And Complete
// const promiseForTryAndCatchWithAsyncAndAwait = new Promise(
//   (resolve, reject) => {
//     let condition = false;
//     if (condition) {
//       resolve("Resolved Successfully");
//     } else {
//       reject("rejected");
//     }
//   }
// );

// async function testTryAndCatchWithPromise() {
//   try {
//      console.log(await promiseForTryAndCatchWithAsyncAndAwait)
//   } catch (error) {
//     console.log(error);
//   }finally{
//     console.log('iam done finally !')
//   }
// }

// testTryAndCatchWithPromise()

//----

// No need for this code :

// const fetchForTryAndCatchWithAsyncAndAwait = new Promise(
//   (resolve, reject) => {
//     let condition = false;
//     if (condition) {
//       resolve("Resolved Successfully");
//     } else {
//       reject("rejected");
//     }
//   }
// );


// async function testTryAndCatchWithFetch() {
//   let fetchForTryAndCatchWithAsyncAndAwait = await fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
//   try {
//      console.log(await fetchForTryAndCatchWithAsyncAndAwait.json())
//   } catch (error) {
//     console.log(error);
//   }finally{
//     console.log('iam done finally !')
//   }
// }
// testTryAndCatchWithFetch()