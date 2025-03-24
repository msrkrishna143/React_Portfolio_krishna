import React, {useState, useEffect} from 'react';
//import memesData from "../memesData.js";
import memesData from '@/memesData';
import { useLocation } from "react-router-dom";

const Memes = () => {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState(memesData)
 
    function getMemesImg() {
      const randomImage = Math.floor(Math.random() * allMemes.length);
      const url = allMemes[randomImage].Profile_img;
      setMeme((prevMeme) => ({
        ...prevMeme,
        url: url,
      }));
    }
    function getMemeImage() {
        const memesArray = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
  return (
    <>
    <div className="grid-container">
        <div className="grid-item">
            <div className="header">
                <b>Meme Component - Use Effect</b>
                
            </div>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
      </div>
    </div>
    </>
  )
}
 
export default Memes