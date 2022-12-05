import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clock from './Clock';
import reportWebVitals from './reportWebVitals';
import Welcome from './Welcome';
import Welcome1 from './Welcome1';
import Toggle from './Toggle';
import Greeting from './Greetings';
import LoginControl from './LoginControl';
import NameForm from './NameForm';
import Hook1 from './Hook1';
import Hook2 from './Hook2';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NumberList from './MyList';
import MyData from './MyData';

const root = ReactDOM.createRoot(document.getElementById('root'));
const numbers = [10,20,30,40,50];
root.render(
  <React.StrictMode>
    {/* <App />
    <Clock />
    <Welcome name="Alex"/>
    <Welcome1 name ="Julie" />
    <Toggle /> 
    <Greeting isLoggedIn = {true}/> 
    <LoginControl /> 
    <NameForm /> 
    <Hook1 /> 
    <Hook2 /> 

    <BrowserRouter>
      <Routes>
        <Route path="" element = { <Login />}></Route>
        <Route path="/login" element = { <Login />}></Route>
        <Route path="/signup" element = { <SignUp />}></Route>
        <Route path="/home" element = { <Home />}></Route>
      </Routes>
    </BrowserRouter>*/}

    <NumberList numbers = {numbers}/>
    <MyData />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
