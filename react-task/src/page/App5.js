//  Сделайте счётчик от 1 до 5. Блокируйте кнопку, если предел достигнут. Пределы: 10, -10
import { useMemo, useReducer, useRef, useState } from "react";



// function App5() {

//     const [count, setCount] = useState(0)


//     const butPlus = useRef()
//     const butMinus = useRef()


//     return (
//         <div>
//             <h1>{count}</h1>
//             <button ref={butPlus} onClick={(e) => {
//                 setCount(count + 1)
//                 butMinus.current.disabled = false
//                 if (count >= 4) {
//                     e.target.disabled = true
//                 } else {
//                     e.target.disabled = false
//                 }
//             }
//             }>+1</button>
//             <button  ref={butMinus} onClick={(e) => {
//                 setCount(count - 1)
//                 butPlus.current.disabled = false
//                 if (count <= -4) {
//                     e.target.disabled = true
//                 } else {
//                     e.target.disabled = false
//                 }

//             }
//             }>-1</button>
//         </div>

//     );
// }

// export default App5;


// При вводе в поле снизу отображаются подходящие имена из массива.useReducer


// function reducer(state,obj) {
//     switch (obj.action) {
//         case 'change':
//             return obj.event.target.value;

//         default:
//             break;
//     }
// }




// function App5() {

//     const [inputValue,setInputValue] = useReducer(reducer , '')
//     const arrOfnames = ['ivan', 'vika', 'ian' ,'vlad'];



//     return (  
//         <div>

//             <input type="text" value={inputValue} onChange={(e)=>setInputValue({action:'change', event: e})} />
//             {arrOfnames.filter(el => el.startsWith(inputValue)).map(el => <p>{el}</p>)}

//         </div>




//     );
// }

// export default App5;


// При отображении страницы запускается расчёт факториал по вводимому
//  значению в поле для ввода. Используйте мемоизацию.




function App5() {

   
 const [number, setNumber] = useState(1)
    const fact = useMemo(()=>{
        
        const calcfact = (el) =>{
            if(el <= 1){
                return 1;
            }
            return el * calcfact(el-1);
        }
        return calcfact(number)
    },[number])

    return (

        <div>
            <input type="number" onChange={(e)=>setNumber(+(e.target.value))}/>
            <h1>{fact}</h1>
        </div>


    );
}

export default App5;