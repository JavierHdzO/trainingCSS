const panels = document.querySelectorAll('.panel')
//console.log(paneles)

const removeActiveClasses = ()=> {
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}

panels.forEach((panel)=>{
    panel.addEventListener('click',(e)=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
});

