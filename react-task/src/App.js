import { Routes, Route } from 'react-router-dom';
import './App.css';
import App1 from './page/app1';
import App2 from './page/App2';
import App3 from './page/App3';
import App4 from './page/App4';
import Global from './context';
import Person from './page/person';
import App5 from './page/App5'
import {useState} from 'react';
import App6 from './page/App6'


function App() {

  const [language,setLanguage] = useState('ru')
  const [theme,setTheme] = useState('white')

  return (
    <Global.Provider value={{language: language, setLanguage: setLanguage, theme: theme, setTheme: setTheme}}>
      <Routes>
        <Route path='/App3' element={<App3></App3>}></Route>
        <Route path='/app1' element={<App1></App1>}></Route>
        <Route path='/App2' element={<App2></App2>}></Route>
        <Route path='/App4' element={<App4></App4>}></Route>
        <Route path='/person' element={<Person></Person>}></Route>
        <Route path='/App5' element={<App5></App5>}></Route>
        <Route path='/App6' element={<App6></App6>}></Route>

      </Routes>
    </Global.Provider>
  );
}

export default App;
