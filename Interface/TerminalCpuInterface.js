const blessed = require('blessed')
const keyMap = require("../data/keyMap")
const {CPUInterface} = require("./CPUInterface")

const DISPLAY_HEIGHT = 32
const DISPLAY_WIDTH = 64
const COLOR = "#ffffff"


class TerminalCPUInterface extends CPUInterface{

    constructor(){
        super()

        this.blessed = blessed 

        //screen related data 

        this.frameBuffer = this._createFrameBuffer()
        this.screen = blessed.screen({smartCSR: true})
        this.screen.title = "CHIP-8"
        this.color = blessed.helpers.attrToBinary({fg: COLOR})

        //key replated 
        this.keys = 0
        this.keyPressed = undefined


        //Sound Disabled for now 
        this.soundEnabled = false 

        // Exit the Emulator 
        this.screen.key(['excape', 'C-c'], ()=>{
            process.exit(0)
        })

        //TODO KeyPress event 



        setInterval(()=>{
            this._resetKeys()
        }, 100)

    }

    _createFrameBuffer() {

        let frameBuffer = []

        for(let i = 0; i<DISPLAY_WIDTH; i++){
            frameBuffer.push([])
            for(let j = 0; j<DISPLAY_HEIGHT; j++){
                frameBuffer[i].push(0)
            }
        }

        return frameBuffer
    }

    _resetKeys(){
        this.keys = 0
        this.keyPressed = undefined
    }
    
    _setKeys(keyIndex) {
        let keyMask = 1 << keyIndex
    
        this.keys = this.keys | keyMask
        this.keyPressed = keyIndex
    }

    drawPixel(){
        //TODO complete drawPixel with blessed
    }



}