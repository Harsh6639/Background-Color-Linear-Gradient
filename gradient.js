let btn1 = document.getElementById("myButton1");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".codeCopy");
let rgb1 = "#000";
let rgb2 = "fff";

let hexaValues = () => {
    let hexaValues = "0123456789abcdef";
    let colors = "#";

    for (let i = 0; i < 6; i++) {
        colors = colors + hexaValues[Math.floor(Math.random() * 16)];
    }
    return colors;
};
const handleButton1 = () => {
    rgb1 = hexaValues();
    console.log(rgb1);
    btn1.innerHTML = rgb1;
    btn1.style.background = rgb1;
    document.body.style.background = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};
const handleButton2 = () => {
    rgb2 = hexaValues();
    console.log(rgb2);
    btn2.innerHTML = rgb2;
    btn2.style.background = rgb2;
    document.body.style.background = rgb2;
    document.body.style.background = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};
btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);
copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerHTML)
        .then(
            () => {
                alert("Copied to clipboard: " + copyDiv.innerHTML);
            },
            (err) => {
                console.error("Could not copy text: ", err);
            }
        );

}
)


