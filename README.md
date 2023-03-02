# javascript hotkey

```
curl https://raw.githubusercontent.com/sei-12/hotkey2/main/hotkey.js > hotkey.js && echo "<script src="./hotkey.js"></script>" | pbcopy
```

基本的な使い方
```javascript
let hotkey = new Hotkey(document,[Modifier.Cmd],"a",()=>{console.log("document Cmd a")})
hotkey.start()
```
```
$1.addEventListener("keydown",(e)=>{

    if( $2を全て押している == false){
        return
    }

    if( e.key == $3 ){
        $4 ()
    }
})
```