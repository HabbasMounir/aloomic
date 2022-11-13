



let content=document.querySelectorAll('.Provide--contentBx   .content')
let contentp=document.querySelectorAll('.Provide--contentBx  .content p')
let  contentpactive=document.querySelector('.Provide--contentBx  .content p.active')
    content.forEach((e ,i) => {

        e.addEventListener("click", click => {

            if(contentp[i].classList.contains("active")){
                contentp[i].classList.remove('active')  
            }else{
                contentp.forEach(e=>e.classList.remove('active'))
                contentp[i].classList.toggle('active')
            }
          })
        })




