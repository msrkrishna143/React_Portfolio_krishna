import React, { useState } from 'react';
import Logout from './Logout';

import { useLocation } from "react-router-dom";
//import TodoList from '@/Pages/TodoList';
//import Country from '@/Pages/Country';
//import Card from '@/Pages/Card';
//import Memes from '@/Pages/memesList';
import Card from '@/components/utility/Card';
import Counter from '@/components/utility/Counter';
import Country from '@/components/utility/Country';
import Memes from '@/components/utility/memesList';
import TodoList from '@/Pages/TodoList';
import { ReduxCounter } from '@/redux/slices/Counter';
import { ReduxCountry } from '@/redux/slices/Country';


function Home(route) {

    return (
    <>
        <div>
            <Logout/>
        </div>
        <div className="grid-container">
            <div>
                <Counter totalPoints={15} />
            </div>
            <div>
                <TodoList/>
            </div>
            <div>
                <Country />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Memes />
            </div>
            <div>
                <ReduxCounter/>
            </div>
           
           
        </div></>
    );
  
}
export default Home;