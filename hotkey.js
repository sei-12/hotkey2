class Hotkeys{
    static start(hotkeys){

    }

    static stop(hotkeys){

    }
}

class Modifier{
    static Ctrl  = "Control"
    static Shift = "Shift"
    static Alt   = ""
    static Cmd   = "Meta"
}

const Hotkey = function(node,modifiers,char,func){

    const setModikyIsDown = () => {
        let modikeyIsDown = []
        this.modifiers.forEach(modifier => {
            modikeyIsDown[modifier] = false
        })
        return modikeyIsDown
    }

    const handleNodeKeydown = (e) => {
        if(this.modikeyIsDown.every(x => x) == false){
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
        if(this.modikeyIsDown[e.key] != undefined){
            this.modikeyIsDown[e.key] = true
        }
    }

    const handleDocumentKeyup = (e) => {
        if(this.modikeyIsDown[e.key] != undefined){
            this.modikeyIsDown[e.key] = false
        }
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

