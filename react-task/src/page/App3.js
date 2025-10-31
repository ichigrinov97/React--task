// 1.
//  Создайте компонент с полем ввода и параграфом. При вводе данных в input отображать
//  вводимое значениевпараграфтекущей страницы

import { use, useState } from "react";
import Global from "../context"
import { useContext } from "react";






// function App3() {

//     const [a,b] = useState('',);

//     function changePar(e) {
//        b(e.target.value) 

//     }


//     return ( 
//         <div>
//             <input onChange = {changePar}type="text" />
//             <p>{a}</p>
//         </div>
//      );
// }

// export default App3;


// 2. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input 
// ипроверить вводимую строку напалиндром.Результат отображать вконсоль


// function App3() {

//     const [value, setValue] = useState('',)

//     function dataFromValue() {
//         if(value.split('').reverse().join('') == value){
//             console.log(value);
//         }else{
//             console.log(null);
            
//         }
        
        
//     }


//     function Change(e){
//         setValue(e.target.value)
//     }

//     return (
//         <div>
//             <input onChange={Change} type="text" />

//             <button onClick={dataFromValue}>Click</button>
//         </div>

//     );
// }

// export default App3;





// function App3() {

//     const [value, setValue] = useState('')

//     function Change(e) {
//         setValue(e.target.value)
//     }
//     function data (){
//         if(value.split('').reverse().join('') == value){
//             console.log(value);   
//         }else{
//             console.log(null);
            
//         }
//     }

//     return ( 
//         <div>
//             <input onChange = {Change} type="text" />
//             <button onClick={data}>click</button>
//         </div>
        

//      );
// }

// export default App3;



// 3. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input 
// ипроверить вводимую строку напочту. Результат отображать вконсоль


// function App3() {

//     const [value,setValue] = useState();

//     function change(e) {
//         setValue(e.target.value);
//     }

//     function postData() {
//         if (value.includes('@')) {
//             console.log(true);
//         }else{
//             console.log(false);
            
//         }
        
//     }

//     return ( 
//         <div>
//             <input onChange={change} type="text" />
//             <button onClick={postData}>click</button>
//         </div>

//      );
// }

// export default App3;



// 4. Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку собрать данные из
// двух input (2 разных state). Сравнить значения 2 input на равенство. Результат отображать в
// консоль


// function App3() {

//     const [value1 ,setValue1] = useState();
//     const [value2 , setValue2] = useState();

//     function change1(e) {
//         setValue1(e.target.value);
//     }
//     function change2(e) {
//         setValue2(e.target.value);
//     }
//     function button(){
//         if(value1 == value2){
//             console.log(true);
            
//         }else{
//             console.log(false);
            
//         }
//     }



//     return ( 

//         <div>
//             <input onChange={change1} type="text" />
//             <input onChange={change2} type="text" />
//             <button onClick={button}>Click</button>
//         </div>

//      );
// }

// export default App3;



// 5. Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в поле и
// нажатии на кнопку, компонент должен отображать приветственное сообщение с именем,
// введеннымпользователем



// function App3() {

//     const [name,setName] = useState()

//     function changeName(e) {
//         setName(e.target.value)
//     }

//     function Alet() {
//         console.log(`Hello ${name}`);
        
//     }


//     return ( 

//         <div>
//             <input onChange={changeName} type="text" />
//             <button onClick={Alet}>Hello</button>
//          </div>


//      );
// }

// export default App3;








// 6. Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку текст
// долженпоявляться или исчезать




// function App3() {

//     const [flag,setFlag] = useState(false)

//     function changeFlag(){
//         if(flag == false){
//             setFlag(true)
//         }else{
//             setFlag(false)
//         }
        
//     }

//     return ( 
//         <div>
//             <button onClick={changeFlag}> click</button>
//             {/* {flag == true?<p>hello</p>: null} */}
//             {/* <p>{flag == true?'hello':null}</p> */}
//             {/* <p style={{display:flag == true?"block":"none"}}>hello</p> */}
//         </div>


//      );
// }

// export default App3;


// 7.
//  Создайте компонент с кнопкой и параграфом для отображения результата счетчика
//  (изначально счетчик равен 0). Ваша задача так реализовать функционал, чтобы при клике на
//  кнопку автоматически прибавлялась +1 к стейту счетчика



// function App3() {

//     const [value,setValue] = useState(0,)

//     function plusOne() {
//         setValue(value + 1)
//     }

//     return ( 

//         <div>
//             <p>{value}</p>
//             <button onClick={plusOne}>+1</button>
//         </div>

//      );
// }

// export default App3;



// function App3() {

//     const [value,setValue] = useState(0,)

//     function plusOne() {
//         setValue(value + 1)
//     }
//     function minusOne() {
//         setValue(value - 1)
//     }
//     function zero() {
//         setValue(0)
//     }



//     return ( 

//         <div>
//             <p>{value}</p>
//             <button onClick={plusOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={zero}>Сброс</button>
//         </div>

//      );
// }

// export default App3;





// 10. Создайте кнопку с названием "Добавить цвет". При клике на эту кнопку цвет шрифта 
// заголовка H1 должен измениться. При следующем клике цвет должен вернуться в 
// первоначальное состояние. Текст кнопки также должен меняться с "Открыто" на "Закрыто" 
// при нажатии на саму кнопку.


// function App3() {

//     const [textBut,setTextBut] = useState('Открыто');
//     const [colorH,setColorH] = useState('black')

//     function changeText(e) {
//         if(e.target.textContent == 'Открыто'){
//             setTextBut('Закрыто')
//             setColorH('red')
//         }else{
//             setTextBut('Открыто')
//             setColorH('black')
//         }
//     }

    

//     return ( 

//         <div>
//             <h1 style={{color:colorH}}>hello</h1>
//             <button onClick={changeText}>{textBut}</button>
//         </div>

//      );
// }

// export default App3;



// 11. Напишите компонент, включающий в себя выезжающее меню из трех параграфов. По 
// нажатию на кнопку "Открыть" меню должно отображаться.


function App3() {

    const [textBut,setTextBut] = useState('Открыть')
    const [flag, setFlag] = useState(false)
    const data = useContext(Global)

    function changeTextBut() {
        if(textBut == 'Открыть'){
            setTextBut('Закрыть')
            setFlag(true);
        }else{
            setTextBut('Открыть');
            setFlag(false);
        }
    }





    return ( 
        <div>

            <div style={{display:flag ==true?"block":"none"}}>
            <p>{data.name} {data.age}</p>
            <p>Nika</p>
            <p>Hannah</p>
            </div>
            

            <button onClick={changeTextBut}>{textBut}</button>
        </div>


     );
}

export default App3;


