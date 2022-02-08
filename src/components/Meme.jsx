import React from 'react'
import {memes} from './MemesData.js'
import { useState } from 'react'

export default function Meme () {
    
const [meme, setMeme] = useState({
    topText: " ",
    bottomText: " ",
    randomImage: 'http://i.imgflip.com/1bij.jpg'
})

const [allMemeImages, setAllMemeImages] = React.useState(memes)
   
        {/*
        Setting a random image as defaut and changing its state when the button is clicked
        */}
        const randomImage = e => {
            const image = allMemeImages.length;
            const randomNumber = (Math.floor(Math.random() * image));
            const url = memes[randomNumber].url;
            setMeme(prevMeme => ({
                ...prevMeme, randomImage: url

            }))
        };
        function handleChange(event) {
            const {name, value} = event.target
            setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            }))
        }
        
    

    return(
        <main>
            <div className = "form">
            <input 
            type="text" 
            placeholder = "Top text"  
            className = "form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            />

            <input type="text" 
            placeholder = "Bottom text" 
            className = "form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />
            <button type = "submit" onClick = {randomImage} className = "form--button"> Get a new meme image  🖼</button>
             {/*rendering an image url as default before the change of state */}
             <div className="meme">
            <img src={meme.randomImage} className="meme--image" alt = "img" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
        </div>
        
        </main>
        
       
    )
}