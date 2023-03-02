
class Modifier{
    static Ctrl  = "Control"
    static Shift = "Shift"
    static Alt   = ""
    static Cmd   = "Meta"
}

class Modifiers{
    static keys = ["Control","Shift","Alt","Meta"]
    static fromKeyStrings(keyStrings){
        let alt,shift,cmd,ctrl
        if(keyStrings.includes(Modifier.Alt)){
            alt = true
        }
        if(keyStrings.includes(Modifier.Cmd)){
            cmd = true
        }
        if(keyStrings.includes(Modifier.Ctrl)){
            ctrl = true
        }
        if(keyStrings.includes(Modifier.Shift)){
            shift = true
        }
        return new Modifiers(alt,ctrl,cmd,shift)
    }

    constructor(alt,ctrl,cmd,shift){
        this.Alt = alt
        this.Ctrl = ctrl
        this.Cmd = cmd
        this.Shift = shift
    }

    change(eDotKey,bool){
        if(eDotKey == Modifier.Alt){
            this.Alt = bool
        }
        else if(eDotKey == Modifier.Cmd){
            this.Cmd = bool
        }
        else if(eDotKey == Modifier.Ctrl){
            this.Ctrl = bool
        }
        else if(eDotKey == Modifier.Shift){
            this.Shift = bool
        }
    }
}

const Hotkey = function(node,modifiers,char,func){

    const setModikyIsDown = () => {
        let modikeyIsDown = []
        this.modifiers.forEach(modifier => {
            modikeyIsDown.push(
                {
                    keyString:modifier,
                    isDown:false
                }
            )
        })
        return modikeyIsDown
    }

    const handleNodeKeydown = (e) => {
        if(this.modikeyIsDown.every(modi => modi.isDown) == false){
            return
        }

        if(this.modifiers.includes(Modifier.Shift)){
            // シフトの場合の処理を反映
            // a -> A
        }
        
        if(e.key == this.char){
            this.func()
        }
    }

    const handleDocumentKeydown = (e) => {
        let index = this.modikeyIsDown.findIndex(modi => modi.keyString == e.key )
        if(index == -1){
            return
        }
        this.modikeyIsDown[index].isDown = true
    }

    const handleDocumentKeyup = (e) => {
        let index = this.modikeyIsDown.findIndex(modi => modi.keyString == e.key )
        if(index == -1){
            return
        }
        this.modikeyIsDown[index].isDown = false
    }

    this.start = function(){
        this.node.addEventListener("keydown",handleNodeKeydown)
        document.addEventListener("keydown",handleDocumentKeydown)
        document.addEventListener("keyup",handleDocumentKeyup)
    }

    this.stop = function(){
        this.node.removeEventListener("keydown",handleNodeKeydown)
        document.removeEventListener("keydown",handleDocumentKeydown)
        document.removeEventListener("keyup",handleDocumentKeyup)
    }

    this.node = node
    this.modifiers = modifiers
    this.char = char
    this.func = func

    this.modikeyIsDown = setModikyIsDown()
}

