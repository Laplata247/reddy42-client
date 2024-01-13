import React, {useState} from 'react'
import './styles.css'
import 'boxicons'
// import dot from 'src/assets/Basic_red_dot.png'


function Stickers({setSticker, setScaleMod}) {
    const [open, setOpen] = useState(false)
    const [className, setClassName] = useState('stickerSelectorOpen')
    const [size1, setSize1] = useState(0)
    const [size2, setSize2] = useState(0)
    const [size3, setSize3] = useState(0)
    const [size4, setSize4] = useState(0)
    const [size5, setSize5] = useState(0)
    const [size6, setSize6] = useState(0)

    const openMenu= () =>{
        setOpen(!open)
        if (open === false){
            setClassName('stickerSelectorClosed')
        }else{
            setClassName('stickerSelectorOpen')

        }

        console.log(open, className)
    }
const handleSlide = (e)=>{
    console.log(e.target.value)
}

  return (
    <nav id={className}>
        <header>
            {(open? <h2 class='title'>PS</h2>: <h2 class='title'>Pain Selector</h2> )}
            <box-icon id='sideArrow' name='right-arrow-circle' onClick={openMenu}></box-icon>
        </header>
        <section id='menu'>
            <div id='choices'>
                <p class='choiceTitle'>Symbol</p>
                <p class='stickerButton'onClick={e => {
                    console.log("sticker set to dot"), 
                    setSticker('src/assets/dot.png')
                    setScaleMod(size1)
                }}><img src={"src/assets/dot.png"} alt="Girl in a jacket" height={50}/>
                </p>
                <p class='stickerButton' onClick={e => {
                    console.log("sticker set to pizza"),
                    setSticker('src/assets/dot_2.png')
                    setScaleMod(size2)
                }}><img src={"src/assets/dot_2.png"} alt="Girl in a jacket" height="50"/></p>
                <p class='stickerButton'>bolt</p>
                <p class='stickerButton'>blur</p>
                <p class='stickerButton'>blur</p>
                <p class='stickerButton'>blur</p>
            </div>
            <div id='sizes'>
                <p id='sizeTitle'>Size</p>
                <div class='scale'>
                    <label for="size1">x0.1</label>
                    <input type="range" id="size1" name="volume" min="0.1" max="11" onChange={e =>{setSize1(e.target.value); setScaleMod(size1)}}/>
                    <label for="size1">{size1}</label>
                </div>
                <div class='scale'>
                    <label for="size2">x0.1</label>
                    <input type="range" id="size2" name="volume" min="0.1" max="11" onChange={e =>{setSize2(e.target.value); setScaleMod(size2)}}/>
                    <label for="size2">{size2}</label>
                </div>
                <div class='scale'>
                    <label for="size3">x0.1</label>
                    <input type="range" id="size3" name="volume" min="0.1" max="11" onChange={e =>{setSize3(e.target.value); setScaleMod(size3)}}/>
                    <label for="size3">{size3}</label>
                </div>
                <div class='scale'>
                    <label for="size4">x0.1</label>
                    <input type="range" id="size4" name="volume" min="0.1" max="11" onChange={e =>{setSize4(e.target.value); setScaleMod(size4)}}/>
                    <label for="size4">{size4}</label>
                </div>
                <div class='scale'>
                    <label for="size5">x0.1</label>
                    <input type="range" id="size5" name="volume" min="0.1" max="11" onChange={e =>{setSize5(e.target.value); setScaleMod(size5)}}/>
                    <label for="size5">{size5}</label>
                </div>
                <div class='scale'>
                    <label for="size6">x0.1</label>
                    <input type="range" id="size6" name="volume" min="0.1" max="11" onChange={e =>{setSize6(e.target.value); setScaleMod(size6)}}/>
                    <label for="size6">{size6}</label>
                </div>

            </div>
        </section>
    </nav>
  )
}

export default Stickers