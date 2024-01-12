import React, {useState} from 'react'
import './styles.css'
import 'boxicons'
// import dot from 'src/assets/Basic_red_dot.png'


function Stickers({setSticker, setScaleMod}) {
    const [open, setOpen] = useState(false)
    const [className, setClassName] = useState('stickerSelectorOpen')

    const openMenu= () =>{
        setOpen(!open)
        if (open === false){
            setClassName('stickerSelectorClosed')
        }else{
            setClassName('stickerSelectorOpen')

        }

        console.log(open, className)
    }

  return (
    <nav id={className}>
        <header>
            <h1>Sticker Selector</h1>
            <box-icon id='sideArrow' name='right-arrow-circle' onClick={openMenu}></box-icon>
        </header>
        <p class='stickerButton'onClick={e => {
            console.log("sticker set to dot"), 
            setSticker('src/assets/Basic_red_dot.png')
            setScaleMod(1)
            }}><img src={"src/assets/Basic_red_dot.png"} alt="Girl in a jacket" height="50"></img>
        </p>
        <p class='stickerButton' onClick={e => {
            console.log("sticker set to pizza"),
            setSticker('src/assets/pizza.png')
            setScaleMod(1)
        }}>circle</p>
        <p class='stickerButton'>bolt</p>
        <p class='stickerButton'>blur</p>
    </nav>
  )
}

export default Stickers