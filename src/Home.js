import NavBar from './NavBar';
import {useState } from 'react';
import './App.css';

function Home(){
    const [accounts,setAccounts] = useState([]);

    return (
      <div className='overlay'>
  
      <div className="home">
      <NavBar accounts ={accounts} setAccounts={setAccounts} />      </div>
      <div className='background' ></div>
      </div>
    );
}

export default Home;