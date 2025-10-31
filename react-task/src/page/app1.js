// 1.
//  На входе статичный массив чисел. Отобразить на странице только чётные числа, каждое в 
// теге <li>.

import App from "../App";
import img from './img1.svg'



// function App1() {

//     let arr = [1, 3, 2, 5, 4, 6]

//     return (
//         <div>
//             <ul>
//                 <li> {arr.filter(el => el % 2 == 0 ? el : null)} </li>
//             </ul>
//         </div>

//     );
// }



// export default App1();



// 2. На входе статичный массив строк. Отфильтровать и отобразить только те строки, длина 
// которых больше 5 символов. Вывести в виде списка.


// function App1() {

//     let app = ['string', 'testiiing', 'hello', 'end', 'start']

//     return (
//         <div>
//             <ul>
//                 <li>{app.filter(el => el.length > 5 ? el : null)+''}</li>
//             </ul>
//         </div>
//     );
// }

// export default App1();


// 3. На входе массив чисел. Отобразить сумму всех чисел на странице в теге <h3>!!!!!!!!!!!!!!!.


// function App1() {
//     let  arr = [1, 10, 40, 2, 4];

//     return(
//         <h3>{arr.reduce(function(sum,el){
//            return sum +=el;
//         },0)}</h3>

//     );
// }

// export default App1();


// 4. На входе массив строк. Преобразовать каждую строку в верхний регистр и отобразить на 
// странице.

// function App1(){

//     let arr = ['string', 'testiiing', 'hello', 'end', 'start']

//     return (
//         <h1>{arr.map(el => <p>{el.toUpperCase()}</p>)}</h1>
//     );
// }

// export default App1();

// 5. На входе массив булевых значений [true, false, true...]. Отобразить на странице в виде 
// (если true) и (eckb false)

// function App1(){

//     let arr = [true,false,true,false,false,false,true,true]

//     return (
//         <h1>{arr.map(el=> el == true? el = '+': el = '-')}</h1>
//     );
// }
// export default App1();

// 6. На входе массив дат в формате строки. Отобразить только те, которые позже 2020 года.

// function App1(){

//     let arr = ['20.01.2021','20.01.2020','20.01.2019','20.01.2022']


//     return(
//         <h3>{arr.map(function(el){
//             return el.split('.')[2] > 2020? <p>{el}</p>: null;
//         })}</h3>
//     );
// }

// export default App1();


// 7. На входе массив из строк и чисел. Отобразить строки с классом text, а числа с классом 
// number.


// function App1() {

//     let arr = ['string', 2, 'hello', 5]

//     return (
//         <div>
//             {arr.map(el => isNaN(el) ? <p className='text'>{el}</p> : <p className="number">{el}</p>)}
//         </div>
//     );
// }

// export default App1();


// 8. На входе массив имён. Отобразить приветствие для каждого имени в формате: "Привет, 
// [имя]!" в теге <p>.



// function App1(){

//     let arr = ['ivan', 'hannah', 'elips', 'lex']

//     return (
//         <div>
//             {arr.map(el => <p>Привет {el}!</p>)}
//         </div>
//     );
// }

// export default App1();


// 9. На входе статичный массив чисел. Ваша задача каждое число массива возвести в квадрат и 
// отобразить на странице 


// function App1() {


//     let arr = [1, 10, 15, 20, 14, 5, 7, 8]

//     return (
//         <div>
//             {arr.map(el => <p>{el ** 2}</p>)}
//         </div>

//     );
// }

// export default App1();

// 10. На входе статичный массив чисел. Ваша задача найти корень каждого числа и отобразить на 
// странице в виде h1


// function App1(){

//     let arr = [1, 25, 49, 64, 81, 100]

//     return(
//         <div>
//             {arr.map(el => <p>{Math.sqrt(el)}</p>)}
//         </div>
//     );
// }
// export default App1();

// 11. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на странице 
// только те строки, которые содержат знак @


// function App1(){

//     let arr = ['test@list.ru','testlist.ru','testing@list.ru','telist.ru',]

//     return(
//         <div>
//             {arr.filter(el=> el.includes('@')).map(el => <h1>{el}</h1>)}
//         </div>
//     );
// }
// export default App1();

// 12. На входе статичный массив строк. Ваша задача отобразить на странице все строки массива, 
// а также картинку. Каждая итерация будет возвращать 
// <div>
//  <p>el</p>
//  <img/>
//  </div>


function App1(){

    let arr = ['ivan', 'hannah', 'elips', 'lex']

    return (
        <div>
            {arr.map(el => <div>
                <p>{el}</p>
                <img src={img} alt="" />
            </div>)}
        </div>
    );
}
export default App1;


// 13. На входе статичный массив чисел и букв. Ваша задача отобразить на странице в случае 
// числа четность и нечетность текущего значения в параграфе, в случае строки отобразить 
// саму строку в параграфе


// function App1() {

//     let arr = [1, 2, 5, 6, 'string', 'hello']

//     return (
//         <div>
//             {arr.map(function (el) {
//                 if (!isNaN(el) && el % 2 == 0) {
//                     return <p> четные {el}</p>
//                 } else if(!isNaN(el) && el %2 !==0){
//                     return <p> нечетные {el}</p>
//                 }else{
//                     return <p>{el}</p>
//                 }
//             })}
//         </div >
//     );
// }
// export default App1();


// 14. На входе массив из объектов. каждый объект содержит title с названием фильма и  
// description с кратким описанием фильма. В h1 отобразить каждый title, в p - description

// function App1(){

//     let arr = [{title:'sonic', description:'about blue animal'},{title:'titanic', description:'about boat and iceberg'},{title:'khatiko', description:'about sad dog'}]

//     return(
//         <div>
//             {arr.map(function(el){
//                 return <div>
//                     <h1>{el.title}</h1>
//                     <p>{el.description}</p>
//                 </div>
//             })}
//         </div>
//     );
// }

// export default App1();

// 1.
//  На входе массив объектов { city: string, population: number }. Отобразить города, где 
// население больше 1 млн.

// function App1(){

//     let arr = [{ city: 'Moscow', population: 10000000 },{ city: 'Minsk', population: 2000000 },{ city: 'Mogilev', population: 250000 }]

//     return (
//         <div>
//             {arr.filter(el=>el.population > 1000000).map(el => <h1>{el.city}</h1> )}
//         </div>
//     );

// }
// export default App1();


// 2. На входе массив чисел. Отобразить числа, которые делятся на 3 без остатка, в теге <span>.

// function App1() {

//     let arr = [1, 2, 14, 15, 25, 18]

//     return (
//         <span>
//             {arr.filter(el => el%3 ==0 )+''}
//         </span>
//     );
// }

// export default App1();

// 3. На входе массив строк. Если строка содержит слово "JS" — отобразить её, иначе пропустить.


// function App1(){

//     let arr = ['string', 'stringJS', 'StrJS' , 'str']

//     return (
//         <div>
//             {arr.map(el=> el.includes('JS')?<h1>{el}</h1>:null )}
//         </div>
//     );
// }

// export default App1();


// 4. На входе массив объектов { task: string, completed: boolean }. Отобразить все задачи. 
// Выполненные — зачёркнутыми.

