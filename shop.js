const products=[
    {id:1, name:"Headphones", img: "headphone.png", count:1, uniPrice:5500 },
    {id:2, name:"Laptop", img: "laptop.png", count:1, uniPrice:120000 },
    {id:3, name:"Mouse", img: "mouse.png", count:2, uniPrice:800 },
    {id:4, name:"Keyboard", img: "keyboard.png", count:1, uniPrice:2500 },
    {id:5, name:"Monitor", img: "monitor.png", count:1, uniPrice:15000 },
    {id:6, name:"Phone Case", img: "phone_case.png", count:3, uniPrice:1500 },
    
]

function createItem(product){
    let itemDiv = document.createElement("div")
    itemDiv.classList.add("item")
    let itemImage = document.createElement("img")
    itemImage.setAttribute("src",product.img)
    itemImage.setAttribute("alt",product.img)
    itemImage.setAttribute("width","100px")
    let itemTittle = document.createElement("h2")
    itemTittle.textContent=product.name
    let itemCount =document.createElement("input")
    itemCount.setAttribute("type","number")
    itemCount.setAttribute("name","count")
    itemCount.setAttribute("class","count")
    itemCount.setAttribute("value", product.count)
    let itemPrice = document.createElement("p")
    itemPrice.textContent="KSH."
    let unitprice =  document.createElement("span")
    unitprice.setAttribute("class","unit-price")
    itemPrice.appendChild(unitprice)
    let delBtn = document.createElement("button")
    delBtn.setAttribute("class","delete")
    let deleteIcon = document.createElement("img")
    deleteIcon.setAttribute("src","delete.png")
    deleteIcon.setAttribute("alt","delete icon")
    delBtn.appendChild(deleteIcon)
    itemDiv.append(itemImage,itemTittle,itemCount,itemPrice,delBtn)
    document.querySelector(".cart-list").append(itemDiv)
}

for(let i=0;i<products.length;i++){
    createItem(products[i])
}

document.querySelectorAll(".delete").forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        
        e.target.parentElement.remove()
    })
})