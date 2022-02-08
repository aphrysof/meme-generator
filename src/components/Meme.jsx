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
   
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     * const [memeImage, setMemeImage] = useState(0)
     *  const [memeImage, setMemeImage] = useState ({
        meme: {
           
        }
    });

    const allMemeImages = memes;
     */
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
          
    

    return(
        <div className = "meme">
            
                <div className = "info">
                <input type="text" placeholder = "Shut up"  className = "first--box"/>
                <input type="text" placeholder = "and take my money" className = "second--box"/>
                </div>
                
                <div>
                <button type = "submit" onClick = {randomImage}> Get a new meme image  🖼</button>
                 </div>
                <div>
                    {/*rendering an image url as default before the change of state */}
                    <img src = {meme.randomImage} alt = "img" className = "image--container" />
                </div>
            

        </div>
    )
}