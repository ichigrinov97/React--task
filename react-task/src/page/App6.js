// Список задач с использованием useState: Создайте компонент списка задач,
//  который позволяет пользователю добавлять и удалять задачи из списка

import { use, useState } from "react";

// import { useState } from "react";




// function App6() {

//     const [data, setData] = useState('')
//     const [arr, setArr] = useState(['hello', 'hai', 'nihao', 'privet', 'ola'])

//     function abcPush() {
//         setArr([...arr, data])
//     }


//     return (

//         <div>
//             <input type="text" onChange={(e) => setData(e.target.value)} />
//             <button onClick={abcPush}>Добавить</button>
//             {arr.map(active => <h1> {active} <button onClick={()=> setArr(arr.filter(el => el !== active))}>Удалить</button></h1>)}
//         </div>
//     );


// }

// export default App6;



// Форма сиспользованием useState: Создайте компонент текстового поля, который
//  позволяет пользователю по изменению значения инпута отображать значение в
//  консоль



// function App6() {

//     const [data,setData] = useState('')

//     return (
//         <div>
//             <input type="text" onChange={(e)=> setData(e.target.value) } />
//             <h1>{data}</h1>

//         </div>

//      );
// }

// export default App6;

// Отображение текста с использованием useState: Создайте компонент, который
//  предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
//  отображается текст, а принажатиина"Скрыть" текст скрывается



// function App6() {

//     const [data,setData] = useState('')
//     const [flag,setFlag] = useState(false)

//     return (  
//         <div>
//             <input type="text" onChange={(e)=> setData(e.target.value)} />
//             <h1 style={{display: flag == false? 'block': 'none'}}>{data}</h1>
//             <button onClick={()=> setFlag(false)}>Show</button>
//             <button onClick={()=>setFlag(true)}>Close</button>
//         </div>
//     );
// }

// export default App6;


// Условие: Реализуй кнопку + и кнопку -. При нажатии на них увеличивай или уменьшай счётчик на 1.

// Условие: Добавь в задачу 1 кнопку Сброс, которая вернёт значение счётчика к 0.

// Условие: Добавь в задачу 1 кнопку *2, которая умножит значение счетчика на 2.

// Условие: Добавь  в задачу 1 инпут и кнопку "Установить". Введённое число устанавливается как значение счётчика.

import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'plus':
            return { count: state.count + 1 }
        case 'minus':
            return { count: state.count - 1 }
        case 'default':
            return { count: 0 }
        case 'umn':
            return {count : state.count * 2}
        case 'inpt':
            return {count : action.counter}

        default:
            break;
    }
}


function App6() {


   
    const [state, dispatch] = useReducer(reducer, { count: 0 })


    return (
        <div>
            <input type="text" onChange={(e)=> dispatch({type:'inpt', counter:e.target.value})} />
            <button onClick={()=> dispatch({type: 'inpt'})}>Установить</button>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'plus' })}>+1</button>
            <button onClick={() => dispatch({ type: 'minus' })} > -1</button>
            <button onClick={() => dispatch({ type: 'default' })}>сброс</button>
            <button onClick={() => dispatch({ type: 'umn' })}>*2</button>
        </div >
    );
}

export default App6;