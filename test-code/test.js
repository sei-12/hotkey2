
const inputText = document.getElementById("input-text")

class Obj{
    aaa(){
        console.log("Ogj.aaa()")
    }
}
let obj = new Obj()

let hotkeys = [
    new Hotkey(document,[Modifier.Cmd],"a",()=>{console.log("document Cmd a")}),
    new Hotkey(document,[Modifier.Cmd,Modifier.Ctrl],"v",()=>{console.log("document Cmd Ctrl v")}),
    new Hotkey(inputText,[Modifier.Cmd],"u",()=>{console.log("inputText Cmd u")}),
    new Hotkey(inputText,[Modifier.Cmd,Modifier.Shift],"u",()=>{console.log("inputText Cmd Shift u")}),

    new Hotkey(document,[Modifier.Cmd,Modifier.Ctrl],"m",(()=>{
        let count = 0
        return () => {
            console.log("document Cmd Shift u : " + count)
            count += 1
        }
    })()),
    
    new Hotkey(document,[Modifier.Cmd,Modifier.Ctrl],"n",obj.aaa),
    new Hotkey(document,[Modifier.Cmd,Modifier.Ctrl],"n",()=>{console.log("document Cmd Ctrl n")}),
]


hotkeys.forEach( hotkey => hotkey.start())
// window.addEventListener("keydown",e=>console.log(e.key))