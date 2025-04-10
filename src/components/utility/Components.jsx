import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar'
import Counter from './Counter';
import TodoList from '@/Pages/TodoList';
import Country from './Country';
import Card from './Card';
import Memes from './memesList';
import { ReduxCounter } from '@/redux/slices/Counter';
import SearchBar from './Searchbar';


function Components() {
  return (
    <>
        <div>
            <Sidebar />
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
            <div>
               <SearchBar/>
           </div>
        </div>
    </>
  )
}

export default Components