import React from 'react'
import './styles.css'


function Stickers({setSticker, setScaleMod}) {

  return (
    <section id='stickerSelector'>
        <p class='stickerButton'onClick={e => {
            console.log("sticker set to dot"), 
            setSticker('src/assets/Basic_red_dot.png')
            setScaleMod(1)
        }}>dot</p>
        <p class='stickerButton' onClick={e => {
            console.log("sticker set to pizza"),
            setSticker('src/assets/pizza.png')
            setScaleMod(1)
        }}>circle</p>
        <p class='stickerButton'>bolt</p>
        <p class='stickerButton'>blur</p>
    </section>
  )
}

export default Stickers