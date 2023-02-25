// All References .....
const textArea = document.getElementById("text-area");

//Global Variable....
let fontWeight = ""
let fontStyle = ""
let textDecoration = ""
let upperLowerCase = ""
//All Event Lestenter......
document.getElementById("bold").addEventListener("click", (e) => {

    if (e.type ==="click") {
        if (fontWeight === "bold") {
            fontWeight = "normal"
            textArea.style.fontWeight = fontWeight
        } else {
            fontWeight = "bold"
            textArea.style.fontWeight = fontWeight
        }

    }
})
document.getElementById("italic").addEventListener("click", (e) => {
    if (e.type ==="click") {
        if (fontStyle === "italic") {
            fontStyle = "normal"
            textArea.style.fontStyle = fontStyle;
        } else {
            fontStyle = "italic"
            textArea.style.fontStyle = fontStyle;
        }
    }
})
document.getElementById("underline").addEventListener("click", (e) => {
    if (e.type ==="click") {
        if (textDecoration === "underline") {
            textDecoration = "none"
            textArea.style.textDecoration = textDecoration
        } else {
            textDecoration = "underline"
            textArea.style.textDecoration = textDecoration
        }
    }
});
document.getElementById("upperLowerCase").addEventListener("click",(e)=>{
    if(e.type ==="click"){
        console.log(e)
        if(upperLowerCase === "lowercase"){
            upperLowerCase = "uppercase"
            textArea.style.textTransform = upperLowerCase;
        }else{
            upperLowerCase = "lowercase"
            textArea.style.textTransform = upperLowerCase
        }
    }
})
document.getElementById("left-align").addEventListener("click", () => {
    textArea.style.textAlign = "left"
})
document.getElementById("center-align").addEventListener("click", () => {
    textArea.style.textAlign = "center";
})
document.getElementById("justify-align").addEventListener("click", () => {
    textArea.style.textAlign = "justify";
})
document.getElementById("right-align").addEventListener("click", () => {
    textArea.style.textAlign = "right"
})
document.getElementById("font-size-inp").addEventListener("change", () => {
    let value = document.getElementById("font-size-inp").value;
    textArea.style.fontSize = value + "px";
})
document.getElementById("color-inp").addEventListener("change", () => {
    let color = document.getElementById("color-inp").value
    textArea.style.color = color
})