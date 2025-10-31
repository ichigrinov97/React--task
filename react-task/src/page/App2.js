// 1.
//  Создайте компонент с input и кнопкой. По нажатию на кнопку отображайте количество
//  символов вinputвконсоль.



// function App2(){

//     const result = function(e){

//         console.log(e.target.value.length);


//     }


//     return (
//         <div>
//             <input onChange = {result} type="text" />
//         </div>
//     );
// }

// export default App2;


// 2. Реализуйте компонент, в котором пользователь вводит email. При потере фокуса (onBlur)
// проверьте корректность email через RegExp и отобразите результат в консоль.


// function App2(){

//     const res = function(e){
//         if(/^[\w]+@[\w]+\.[\w]{2,6}/gm.test(e.target.value)){
//             console.log(e.target.value); 
//         }else{
//             console.log('null');

//         }
//     }

//     return (
//         <div>
//             <input onBlur={res} type="text" />
//         </div>
//     );
// }

// export default App2;

// 3. Пособытию изменения input отображать вконсоль каждое вводимое значение


// function App2(){

//     const res = function(e){
//         console.log(e.target.value);

//     }



//     return (
//         <input onChange={res} type="text" />
//     );
// }

// export default App2;


// 4. Создайте компонент с checkbox. При его активации в консоль выводится "Согласен", при
//  отключении —"Несогласен".


// function App2 (){

//     const res = function(e){
//         if(e.target.checked == true){
//             console.log('согласен');

//         }else{
//             console.log("несогласен");

//         }
//     }


//     return (
//         <input  onClick={res} type="checkbox" />
//     );
// }

// export default App2;

// 5. Реализуйте компонент с кнопкой, которая при каждом нажатии меняет свой цвет в
//  соответствии с массивом цветов ['red', 'white', 'blue']. Используйте рандомный выбор цвета из
//  массива прикаждомклике.


// function App2(){

//     const res = function(e){
//         const arr = ['red','white', 'blue'];
//         e.target.style.backgroundColor = arr[Math.round(Math.random()*arr.length)]
//     }


//     return (
//         <div>
//             <button onClick={res}>Click</button>
//         </div>
//     );
// }

// export default App2;


// 6. Реализуйте компонент с массивом чисел и кнопкой. При клике на кнопку вычислите и
// выведите сумму всех чисел измассива вконсоль.


// function App2() {

//     const arr = [1, 2, 4, 54, 7, 8, 6, 41, 52];
//     let sum = 0;
//     const res = function(){
//         for (let i = 0; i < arr.length; i++) {
//             sum += arr[i] 
//         }
//      console.log(sum);
       
//     }

//     return (
//         <button onClick={res}>Click</button>
//     );
// }

// export default App2;


// 7. Создайте компонент с массивом элементов и кнопкой. При каждом клике на кнопку
// выбирайте случайный элемент измассива иотображайте еговконсоль.


// function App2(){

//     const arr = ['string','hello',true, 15]
//     const res = function(e){
//         console.log(arr[Math.round(Math.random()*arr.length)]);
        
//     }

//     return(
//         <button onClick={res}>Click</button>
//     );
// }

// export default App2;


// 8. Реализуйте компонент, который по нажатию на кнопку отображает текущую дату и время в
// //  консоль.

// function App2(){

//     const res = function(e){
//         const data = new Date();
//         console.log(data);
        
//     }


//     return(

//         <button onClick={res}>Click</button>
//     );
// }
// export default App2;\

// 9. Создайте поле ввода. При вводе слова длиной > 10 символов выведите предупреждение в
// консоль.


function App2(){

    const res = function(e){
        if(e.target.value.length > 10){
            console.log('WARRING!');
            
        }else{
            console.log(e.target.value);
            
        }
    }


    return(
        <input onChange={res} type="text" />

    );
}

export default App2;