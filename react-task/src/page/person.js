import Global from "../context";
import { useContext} from "react";


function Person() {

    const {language,setLanguage,theme,setTheme}= useContext(Global);
    

    const data = {
        ru: 'привет',
        es: 'ola',
        lt: 'labas',
        en: 'hello'
    }

    

    return ( 
        <div style={{background:theme == 'white'? 'white':'black'}}>
        <h1 style = {{color:theme == 'white'?'black':'white'}}>{data[language]}</h1>
        <button onClick={()=> setLanguage('ru')}>to ru</button>
        <button onClick={()=> setLanguage('es')}>to es</button>
        <button onClick={()=> setLanguage('lt')}>to lt</button>
        <button onClick={()=> setLanguage('en')}>to en</button>
        <button onClick={()=> setTheme('white')}>white</button>
        <button onClick={()=> setTheme('black')}>dark</button>
        </div>
        
     );
}

export default Person;