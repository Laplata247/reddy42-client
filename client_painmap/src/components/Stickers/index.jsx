import React, {useState, useEffect} from 'react'
import './styles.css'
import 'boxicons'
// import dot from 'src/assets/Basic_red_dot.png'


function Stickers({setSticker, setScaleMod}) {
    const [open, setOpen] = useState(false)
    const [className, setClassName] = useState('stickerSelectorClosed')
    const [size1, setSize1] = useState(3)
    const [size2, setSize2] = useState(3)
    const [size3, setSize3] = useState(3)
    const [size4, setSize4] = useState(3)
    const [size5, setSize5] = useState(3)
    const [size6, setSize6] = useState(3)
    const [activeSticker1, setactiveSticker1] = useState('activeSticker')
    const [activeSticker2, setactiveSticker2] = useState('inactiveSticker')
    const [activeSticker3, setactiveSticker3] = useState('inactiveSticker')
    const [activeSticker4, setactiveSticker4] = useState('inactiveSticker')
    const [activeSticker5, setactiveSticker5] = useState('inactiveSticker')
    const [activeSticker6, setactiveSticker6] = useState('inactiveSticker')



    const openMenu= () =>{
        setOpen(!open)
        if (open === false){
            setClassName('stickerSelectorClosed')
        }else{
            setClassName('stickerSelectorOpen')
        }
    }
    const handleClick=(num)=>{
        if(num===1){
            setactiveSticker1('activeSticker'), setactiveSticker2('inactiveSticker'), setactiveSticker3('inactiveSticker'), setactiveSticker4('inactiveSticker'), setactiveSticker5('inactiveSticker'),setactiveSticker6('inactiveSticker')
        }else if(num===2){
            setactiveSticker1('inactiveSticker'), setactiveSticker2('activeSticker'), setactiveSticker3('inactiveSticker'), setactiveSticker4('inactiveSticker'), setactiveSticker5('inactiveSticker'),setactiveSticker6('inactiveSticker')
        } else if(num===3){
            setactiveSticker1('inactiveSticker'), setactiveSticker2('inactiveSticker'), setactiveSticker3('activeSticker'), setactiveSticker4('inactiveSticker'), setactiveSticker5('inactiveSticker'),setactiveSticker6('inactiveSticker')
        } else if(num===4){
            setactiveSticker1('inactiveSticker'), setactiveSticker2('inactiveSticker'), setactiveSticker3('inactiveSticker'), setactiveSticker4('activeSticker'), setactiveSticker5('inactiveSticker'),setactiveSticker6('inactiveSticker')
        } else if(num===5){
            setactiveSticker1('inactiveSticker'), setactiveSticker2('inactiveSticker'), setactiveSticker3('inactiveSticker'), setactiveSticker4('inactiveSticker'), setactiveSticker5('activeSticker'),setactiveSticker6('inactiveSticker')
        } else{
            setactiveSticker1('inactiveSticker'), setactiveSticker2('inactiveSticker'), setactiveSticker3('inactiveSticker'), setactiveSticker4('inactiveSticker'), setactiveSticker5('inactiveSticker'),setactiveSticker6('activeSticker')
        }
    }


  return (
    <nav role="menu" role="menu" id={className}>
        {/* <header>
            {(open? <h2 class='title'>PS</h2>: <h2 class='title'>Pain Selector</h2> )}
        </header> */}
        <box-icon role='arrow'id='sideArrow' name='right-arrow-circle' onClick={openMenu}></box-icon>
        <section id='menu'>
            <div id='choices'>
                <p class='choiceTitle'>Symbol</p>
                <p class={activeSticker1} onClick={e => {
                    setSticker('src/assets/dot_3.png')
                    setScaleMod(size1)
                    handleClick(1)
                }}><img src={"src/assets/dot_4Sticker.png"} alt="basic dot" height={55*size1*0.35} width={65*size1*0.35}/>
                </p>

                <p role="sticker" class={activeSticker2} onClick={e => {
                    handleClick(2)
                    handleClick(2)
                    setSticker('src/assets/bolts.png')
                    setScaleMod(size2)
                    
                }}><img src={"src/assets/boltsSticker.png"} alt="bolts" height={65*size2*0.3} width={65*size2*0.3}/></p>
                <p class={activeSticker3} onClick={e => {
                    setSticker('src/assets/circles.png')
                    setScaleMod(size3)
                    handleClick(3)
                }}><img src={"src/assets/circlesSticker.png"} alt="circles within eachother" height={65*size3*0.27} width={65*size3*0.27}/></p>
                <p class={activeSticker4} onClick={e => {
                    setSticker('src/assets/wiggly.png')
                    setScaleMod(size4)
                    handleClick(4)
                }}><img src={"src/assets/wigglySticker.png"} alt="wiggles" height={65*size4*0.35} width={65*size4*0.35}/></p>
                <p class={activeSticker5} onClick={e => {
                    setSticker('src/assets/blur.png')
                    setScaleMod(size5)
                    handleClick(5)
                }}><img class='stickerPic'src={"src/assets/blurSticker.png"} alt="blur" height={65*size5*0.3} width={65*size5*0.3}/></p>
                <p class={activeSticker6} onClick={e => {
                    setSticker('src/assets/sharp.png')
                    setScaleMod(size6)
                    handleClick(6)
                }}><img src={"src/assets/sharpSticker.png"} alt="sharp line" height={50*size6*0.2} width={65*size6*0.2}/></p>
            </div>
            <div id='sizes'>
                <p id='sizeTitle'>Size</p>
                <div class='scale'>
                    <label for="size1">s</label>
                    <input type="range" id="size1" name="volume" min="1" max="10" onChange={e =>{setSize1(e.target.value*0.3); setScaleMod(size1)}}/>
                    <label for="size1">L</label>
                </div>
                <div class='scale'>
                    <label for="size2">s</label>
                    <input role='scale' type="range" id="size2" name="volume" min="1" max="10" onChange={e =>{setSize2(e.target.value*0.3); setScaleMod(size2)}}/>
                    <label for="size2">L</label>
                </div>
                <div class='scale'>
                    <label for="size3">xs</label>
                    <input type="range" id="size3" name="volume" min="1" max="10" onChange={e =>{setSize3(e.target.value*0.4); setScaleMod(size3)}}/>
                    <label for="size3">L</label>
                </div>
                <div class='scale'>
                    <label for="size4">s</label>
                    <input type="range" id="size4" name="volume" min="1" max="10" onChange={e =>{setSize4(e.target.value*0.3); setScaleMod(size4)}}/>
                    <label for="size4">L</label>
                </div>
                <div class='scale'>
                    <label for="size5">s</label>
                    <input type="range" id="size5" name="volume" min="1" max="10" onChange={e =>{setSize5(e.target.value*0.3); setScaleMod(size5)}}/>
                    <label for="size5">L</label>
                </div>
                <div class='scale'>
                    <label for="size6">s</label>
                    <input type="range" id="size6" name="volume" min="1" max="10" onChange={e =>{setSize6(e.target.value*0.5); setScaleMod(size6)}}/>
                    <label for="size6">L</label>
                </div>

            </div>
        </section>
    </nav>
  )
}

export default Stickers
