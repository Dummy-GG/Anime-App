import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';
import { React,useEffect,useState} from 'react';
import './App.css';
import { DataProvider } from './DataContext/DataContext';
function App() {
 
  
  return (
    <DataProvider>
    <>
      <Header />
      <main className='body'>
        <SideBar  />
        <Content />
      </main>
    </>
    </DataProvider>
  );
}

export default App;
