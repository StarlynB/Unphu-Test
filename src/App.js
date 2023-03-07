import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import LoginPage  from './Pages/LoginPage';
import UserList from './Pages/UserList';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import Pagination from './Components/Pagination';



function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };


  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/profile' element={<HomePage/>}></Route>
        <Route path='/users' element={<UserList/>}></Route>
      </Routes>

      <Footer/>

      
    </>
    
  );
}

export default App;
