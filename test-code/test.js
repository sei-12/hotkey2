
const inputText = document.getElementById("input-text")

let hotkeys = [
    new Hotkey(document,[Modifier.Cmd],"a",()=>{console.log("document Cmd a")}),
    new Hotkey(document,[Modifier.Cmd,Modifier.Ctrl],"v",()=>{console.log("document Cmd Ctrl v")}),
    new Hotkey(inputText,[Modifier.Cmd],"u",()=>{console.log("inputText Cmd y")}),
]

hotkeys.forEach( hotkey => hotkey.start())