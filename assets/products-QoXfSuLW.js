import"./main-oK4nxsJG.js";const d=[{id:1,img:"/images/products/Image 20.png",title:"Arm Prosthesis",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, officiis, hic eveniet in facilis illo commodi aut architecto velit similique quo, exercitationem aperiam ad porro ipsam iure expedita. Fuga saepe ducimus voluptates nobis consequuntur. Consequuntur? dfdfsfsdfsdfsdfsfsdfdsf"},{id:2,img:"/images/products/Image 20-1.png",title:"Leg Prosthesis",desc:"Enhanced mobility with ergonomic support. Ideal for walking and running."},{id:3,img:"/images/products/Image 20-2.png",title:"Hand Prosthesis",desc:"Multi-functional grip for versatile tasks. Compact and lightweight design."},{id:4,img:"/images/products/Image 20-3.png",title:"Custom Arm Fit",desc:"Tailored for maximum comfort and performance.Supports various grip styles."},{id:5,img:"/images/products/Image 20-4.png",title:"Running Prosthesis",desc:"Optimized for speed and agility.Perfect for athletes and active users."},{id:6,img:"/images/products/Image 20-5.png",title:"Robotic Hands",desc:"Advanced robotics for precise movements.Seamless integration with neural inputs"}];let c="";d.forEach(e=>{c+=`<div class="products__item">
                        <img src="${e.img}" alt="${e.title}" />
                        <h3>${e.title}</h3>
                        <p>${e.desc.length>50?e.desc.slice(0,51)+"...":e.desc}</p>
                        <button class="products__btn second__button" id=${e.id}>Learn More</button>
                    </div>`});document.getElementById("productList").innerHTML=c;Array.from(document.querySelectorAll(".products__btn")).forEach(e=>{e.addEventListener("click",a=>{const t=d.filter(s=>s.id==a.target.id)[0],i=document.getElementById("detail"),o=document.getElementById("detailContent");i.classList.add("active"),o.innerHTML=`<div class="products__left">
                                <img src="${t.img}" alt="${t.title}">
                            </div>
                            <div class="products__right">
                                <div class="products__detail-header">
                                    <h3>${t.title}</h3>
                                </div>
                                <div class="products__detail-text">
                                    <p>${t.desc}</p>
                                </div>
                            </div>
                            <div class="products__cancel" id="cancel">
                                <img src="/icons/cancel.svg" alt="cancel">
                            </div>
                            `,document.getElementById("cancel").addEventListener("click",()=>{i.classList.remove("active")}),i.addEventListener("click",s=>{s.target.className==="products__detail-container"&&i.classList.remove("active")})})});
