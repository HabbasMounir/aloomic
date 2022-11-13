let coen=document.querySelectorAll(".Industry--contentBx .content")
let endless=document.querySelectorAll(".Industry--endless img")


// if scroll is work the code well be better 

document.addEventListener("scroll", function(){

    let m=[]
    let y = window.innerHeight /2;
    coen.forEach((e ,i) => {
        e.style.opacity= "0.2"
        m[i]=Math.abs( e.getBoundingClientRect().y-y)
    }
    )
    coen[m.indexOf(Math.min(...m))].style.opacity= "1" 


  })


  setInterval(()=>{


    let m=[]
    let y = window.innerHeight / 2;
    coen.forEach((e ,i) => {
        e.style.opacity= "0.2"
        m[i]=Math.abs( e.getBoundingClientRect().y-y)
    }
    )


    coen[m.indexOf(Math.min(...m))].style.opacity= "1" 


  
       endless.forEach(e=>{
         e.style.transform=`rotate(${360/m.length*(m.indexOf(Math.min(...m)))}deg)`;
    })
  










  },100)


















