// Форма ввода с использованием useState и useEffect: Создайте компонент React,
// который содержит форму с полем ввода. Используйте хук useState для хранения
// значения введенного текста и хук useEffect для отслеживания изменений этого
// значения. При каждом изменении значения в поле ввода, выводить его в консоль
// с помощьюuseEffect.

import { useEffect, useMemo, useRef, useState } from "react";
import axios from 'axios';
import Global from "../context"
import { useContext } from "react";


// function App4 () {

//     const [text,setText] = useState('');


//     useEffect(
//         () => {
//             console.log(text);

//         }
//     )

//     function ChangeText(e) {
//         setText(e.target.value)
//     }


//     return ( 
//         <div>
//             <input type="text" onChange={ChangeText} />
//         </div>

//      );
// }

// export default App4;



// Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
// который увеличивает значение счетчика на 1 каждую секунду с использованием
// useEffect



// function App4() {

//     const [numb, setNumb] = useState(0);


//     useEffect(() => {
//         const interval = setInterval(() => {
//             setNumb(numb + 1)
//         }, 1000)

//         return ()=> clearInterval(interval);
//     });



//     return (
//         <div>
//             <h1>{numb}</h1>
//         </div>

//     );
// }

// export default App4;


// Запрос к API с использованием useState и useEffect: Создайте компонент, который
// выполняет запрос к API https
// ://api.ipify.org/?format=json и отображает полученные
// данныевзаголовок.



// function App4() {

//     const [data, setData] = useState('');

//     async function Data() {
//         const findData = await axios.get('https://api.ipify.org/?format=json');    
//         setData(findData.data.ip)
//     };

//     useEffect(() => {
//         Data();
//     });




//     return (
//         <div>
//             <h1>{data}</h1>
//         </div>

//     );
// }

// export default App4;




// Таймер с использованием useState и useEffect: Создайте компонент, который
//  отображает текущее время и обновляет его каждую секунду.


// function App4() {

//     const [timeH,setTimeH] = useState();
//     const [timeM,setTimeM] = useState();
//     const [timeS,setTimeS] = useState();


//     function changeTime(){
//         let clock = new Date();
//         setTimeH(clock.getHours());
//         setTimeM(clock.getMinutes());
//         setTimeS(clock.getSeconds());
//     }

//     useEffect(()=>{
//         setInterval(()=>{
//             changeTime()
//         },1000)
//     },[]);

//     return ( 

//         <div>
//             <h1>{timeH}:{timeM}:{timeS}</h1>
//         </div>

//      );
// }

// export default App4;



// Факты с использованием useState и useEffect: http
//  ://numbersapi.com/:
//  id. Создайте
//  компонент React, который при первичном рендеринге отправляет запрос к APIс
//  рандомно сгенерированным числом и отображает результат в консоль.



// function App4() {

//     const [numb,setNumb] = useState();


//     async function findNumb() {
//         const myNumb = await axios.get('http://numbersapi.com/random/trivia')
//         console.log(myNumb.data);
//         setNumb(myNumb.data)
//     }



//     useEffect(()=>{
//         findNumb()
//     },[])




//     return (  
//         <div>{numb}</div>
//     );
// }

// export default App4;



// Создайте компонент, который поклику на кнопкуменяет цвет текста на красный


// function App4() {

//     const data = useRef();



//     return (  
//         <div>
//             <h1 ref={data}>Hello</h1>
//             <button onClick={()=>{
//                 data.current.style.color = 'red'
//             }}></button>
//         </div>
//     );
// }

// export default App4;


//  Создайте компонент, который по клику на кнопку рандомно у h1 меняет цвет
//  текста


// function App4() {

//     const data = useRef();



//     return (  
//         <div>
//             <h1 ref={data}>Hello</h1>
//             <button onClick={()=>{
//                 data.current.style.color = '#' + Math.round(Math.random()*1000);
//             }}></button>
//         </div>
//     );
// }

// export default App4;


//  Создайте компонент, который при каждом клике на кнопку увеличивает размер
//  шрифтатекставэлементе настранице.



// function App4() {

//     const data = useRef();



//     return (  
//         <div>
//             <h1 ref={data} style={{fontSize: 50 + 'px'}}>Hello</h1>
//             <button onClick={()=>{
//                 data.current.style.fontSize = parseInt(data.current.style.fontSize) + 10 +'px' ;
//             }}></button>
//         </div>
//     );
// }

// export default App4;


// Создайте компонент, который при фокусе на текстовом поле добавляет
//  background(onFocus, onBlur)



// function App4() {

//     const data = useRef();



//     return (  
//         <div>
//             <input ref={data} onFocus = {()=>data.current.style.backgroundColor = 'red'} onBlur ={()=>data.current.style.backgroundColor = 'blue'} type="text" />
//         </div>
//     );
// }

// export default App4;



// Реализуйте компонент, который отслеживает количество кликов на кнопку с
//  помощь ю useRef ивыводит эточисловконсольприкаждомклике.


// function App4() {

//     const data = useRef(0);



//     return (  
//         <div>
//             <button onClick={()=>{
//                console.log(data.current +=1);
//             }}>+1</button>
//         </div>
//     );
// }

// export default App4;


//  Разработайте компонент для реализации "подсказок" (tooltips). При наведении на
//  элемент интерфейса (например, кнопку), компонент отображает подсказку с
//  текстом. (onMouseEnter срабатывает, когда курсор мыши входит в область
//  элемента. onMouseLeave срабатывает, когда курсор мыши покидает область
//  элемента.)

// function App4() {

//     const data = useRef();



//     return (  
//         <div>
//             <button onMouseEnter={()=>{data.current.style.display = 'block'}} onMouseLeave ={()=>{data.current.style.display = 'none'}}>покажи</button>
//             <h1 ref={data} style={{display:'none'}}>Подсказка</h1>
//         </div>
//     );
// }

// export default App4;



// Создайте компонент React, который отображает сумму двух чисел. Используй хук
//  useState для хранения значений чисел и хук useMemo для кэширования
//  результата суммы. При изменении значений чисел, сумма должна
//  пересчитыватьсятолько тогда, когда необходимо


// function App4() {

//     const [inp1,setInp1] = useState(0);
//     const [inp2,setInp2] = useState(0);

//     const i1 = (e) =>setInp1(e.target.value);
//     const i2 = (e) =>setInp2(e.target.value);
//     const res = useMemo(()=> +inp1 + +inp2);

//     return ( 

//         <div>
//             <input onChange={i1} type="number" />
//             <input onChange={i2} type="number" />
//             <h1>{res}</h1>
//         </div>
//      );
// }

// export default App4;



// Разработайте компонент, который выполняет факториал числа при вводе
//  значения в текстовое поле. Используйте useMemo, чтобы кэшировать результаты
//  вычислений для разных введенных значений и отображать их без повторных
//  вычислений




// function App4() {

//     const [inp1,setInp1] = useState(1);

//     const i1 = (e) =>setInp1(e.target.value);
//     const res = useMemo(()=> {
//         let fact = 1;
//         for (let i = 1; i <= +inp1; i++) {
//             fact *= i;



//         }
//         return fact;
//     });

//     return ( 

//         <div>
//             <input onChange={i1} type="number" />
//             <h1>{res}</h1>
//         </div>
//      );
// }

// export default App4;


//  Создайте компонент для отображения списка чисел от 1 до N, где N- число,
//  введенное пользователем с клавиатуры. Используйте useMemo, чтобы вычислить
//  сумму списка чисел только при изменении N.


// function App4() {

//     const [inp1,setInp1] = useState(0);


//     const n = (e) =>setInp1(e.target.value);
//     const arr = [];
//     let sum = 0;
//     const res = useMemo(()=>{
//         for (let i = 1; i <= inp1; i++) {
//             arr.push(<p>{i}</p>)
//             sum += i

//         }
//         return {list:arr , sum: sum};
//     })


//     return ( 

//         <div>
//             <input onChange={n} type="number" /> 
//             <p>{res.list}</p>
//             <h1>{res.sum}</h1>
//         </div>
//      );
// }

// export default App4;


// Напишите программу, которая принимает строку от пользователя и выводит ее в
//  обратном порядке. Используй хук useState для хранения строки и хук useMemo
//  для кэшированиярезультата.




// function App4() {

//     const [inp,setInp] = useState('');
//     const i = (e) => setInp(e.target.value);

//     const res = useMemo(()=>inp.split('').reverse().join(''));



//     return ( 

//         <div>
//             <input onChange={i} type="text" /> 
//             <h1>{res}</h1>
//         </div>
//      );
// }

// export default App4;



// Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес
//  должен быть получен с использованием useMemo при монтировании
//  компонента и кэширован для избегания повторных запросов к API при
//  обновлениидругихчастейкомпонента. https
//  ://api.ipify.org/?format=json



// function App4() {

//     const [data,setData] = useState('');


//     async function getData() {
//         const ip = await axios.get('https://api.ipify.org/?format=json');
//         setData(ip.data.ip);
//     }

//     useMemo(()=>getData())



//     return ( 

//         <div>
//             <h1>{data}</h1>
//         </div>
//      );
// }

// export default App4;


// Создай инпут с типом «password» и кнопку «Показать/скрыть». При нажатии меняется type у инпута.
// Подсказка: С useRef можно напрямую изменить ref.current.type.



// function App4() {

//     const flag = useRef()


//     return ( 
//         <div>
//             <input ref={flag} type="password" />
//             <button onClick={()=>flag.current.type = 'text'}>Показать/Скрыть</button>
//         </div>
//      );
// }

// export default App4;

// Создай текстовое поле, и сохраняй значение в useRef, а не в useState. Добавь кнопку «Показать введённое», которая покажет текст в alert.

// function App4() {

//     const flag = useRef()


//     return ( 
//         <div>
//             <input ref={flag} type="text" />
//             <button onClick={()=>alert(flag.current.value)}>Показать текст</button>
//         </div>
//      );
// }

// export default App4;


// Создайте счетчик в виде h1 и две кнопки +1 и −1. По клику на кнопки значение textContent для заголовка должно меняться


// function App4() {

//     const flag = useRef()


//     return ( 
//         <div>
//             <h1 ref={flag}>0</h1>
//             <button onClick={()=> flag.current.textContent = +flag.current.textContent + 1}>+1</button>
//             <button onClick={()=> flag.current.textContent = +flag.current.textContent - 1}>-1</button>
//         </div>
//      );
// }

// export default App4;



// Сделай форму с несколькими инпутами и кнопку «Сбросить». При клике форма должна очиститься без использования useState.
// Подсказка: Хранить ref на каждый <input> и обнулять через .value = ''.



// function App4() {

//     const inp1 = useRef();
//     const inp2 = useRef();


//     return (
//         <div>
//             <input ref={inp1} type="text" />
//             <input ref={inp2} type="text" />
//             <button onClick={() => {
//                 inp1.current.value = '';
//                 inp2.current.value = '';
//             }}>сбросить</button>

//         </div>
//     );
// }

// export default App4;


// Сохрани и выведи текущее время (Date.now()), но так, чтобы оно не менялось при ререндере.

// function App4() {


//     const ref = useRef();

//     useEffect(()=>{
//         const time = setInterval(() => {
//             ref.current.textContent = Date.now();
//         }, 0);
//         return ()=>clearInterval(time);
//     },[])


//     return (
//         <div>
//             <h1 ref={ref}></h1>
//         </div>
//     );
// }

// export default App4;

// Сделай кнопку, которая кликается автоматически через 2 секунды после монтирования.
// Подсказка: Через ref вызови .click() у кнопки внутри useEffect


// function App4() {


//         const refbut = useRef(null)


//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             if(refbut.current){
//                 refbut.current.click()
//             }
//         },2000)
//         return ()=> clearInterval(interval)
//     },[])


//     return (
//         <div>
//             <button ref={refbut} onClick={}>autoclick</button>
//         </div>
//     );
// }

// export default App4;




// Сделай список элементов с кнопкой удаления. Удаляй DOM-узел напрямую (без useState).
// Подсказка: Работа с ref.current.remove() (в реальных приложениях лучше так не делать — но для практики полезно)



// function App4() {


//         const refbut = useRef()
//         const refbut2 = useRef()
//         const refbut3 = useRef()


//     return (
//         <div>
//             <h1 ref={refbut}>list</h1>
//             <h1 ref={refbut2}>list2</h1>
//             <h1 ref={refbut3}>list3</h1>
//             <button onClick={()=>{

//                 refbut.current.textContent = ''
//                 refbut3.current.textContent = ''
//                 refbut2.current.textContent = ''
//             }}>autoclick</button>
//         </div>
//     );
// }

// export default App4;




// Разработайте приложение для отображения текущей погоды. Используйте
//  useContext, чтобы хранить информацию о погоде (температура, влажность,
//  скорость ветра ит. д.). В компоненте отобразите эту информацию опогоде.



// function App4() {

//     const data = useContext(Global)

//     return (
//         <div>
//             <h1>{data.temp}</h1>
//             <h1>{data.wind}</h1>
//             <h1>{data.wat}</h1>
            
//         </div>

//     );
// }

// export default App4;



// Используйте useContext, чтобы сохранять данные о текущем пользователе.
//  Отобразите эту информацию в компоненте,используя контекст.


// function App4() {

//     const data = useContext(Global)

//     return (
//         <div>
//             <h1>{data.name}</h1>
//             <h1>{data.age}</h1>
            
//         </div>

//     );
// }

// export default App4;

import bike1 from './img/bike1.svg';
import bike2 from './img/bike2.svg';
import bike3 from './img/bike3.svg';
import bike4 from './img/bike4.svg';
import bike5 from './img/bike5.svg';

const products = [
    {
        id:1,
        img:bike1,
        name:'Audi Bike',
        price:'1 000$'
    },
    {
        id:2,
        img:bike2,
        name:'BMW Bike',
        price:'2 000$'
    },
    {
        id:3,
        img:bike3,
        name:'Lotus Bike',
        price:'3 000$'
    },
    {
        id:4,
        img:bike4,
        name:'Volvo Bike',
        price:'4 000$'
    },
    {
        id:5,
        img:bike5,
        name:'Fiat Bike',
        price:'5 000$'
    }
];



function App4() {

    const [productIndex,setProductIndex] = useState(0);
    const product = products[productIndex];
    

    function Next() {
        const lastindex = products.length - 1;
        lastindex == productIndex?setProductIndex(0):setProductIndex(productIndex + 1)
            
    }

    function Back() {
        const firstindex = 0;
        firstindex == productIndex?setProductIndex(products.length - 1):setProductIndex(productIndex - 1)
    }

    return ( 
        <>
        <div>
           <div>
                <img src={product.img} alt="" />
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                </div>
        </div>
        <div>
            <button onClick={Back}>Назад</button>
            <button onClick={Next}>Вперед</button>
        </div>
        </>
     );
}

export default App4;