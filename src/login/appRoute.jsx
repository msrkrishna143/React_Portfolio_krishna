// App.js
import { Routes, Route } from 'react-router-dom';
import LoginForm from './loginForm';
import Home from './Home';
import Logout from './Logout';
import Card from '@/components/utility/Card';
import Counter from '@/components/utility/Counter';
import Country from '@/components/utility/Country';
import Memes from '@/components/utility/memesList';
import TodoList from '@/Pages/TodoList';



 
const AppRoutes = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/loginForm" element={<LoginForm />} />
            <Route path="/home" element={<Home totalPoints={15}/>} />
            <Route path="/country" element={<Country/>}/>
            <Route path="/card" element={<Card/>} />
            <Route path="/todolist" element={<TodoList/>}/>
            <Route path="/memes" element={<Memes/>}/>
            <Route path="/counter" element={<Counter/>} />
         </Routes>
      </>
   );
};
 
export default AppRoutes;