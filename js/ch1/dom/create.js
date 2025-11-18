// 동적으로 element(node)생성
// <p>HELLO</p>

const btn = document.querySelector("button");
btn.addEventListener("click",() =>{
    const pTag = "<p>HELLO</p>";
    document.querySelector("#test").insertAdjacentHTML("afterbegin",pTag);

    // document.body.append(pTag);

    const img = document.createElement("img");
    img.src = "1.jpg";
    img.alt = "시계";
    document.body.appendChild(img);
});