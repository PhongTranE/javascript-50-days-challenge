const panels = document.querySelectorAll('.panel')


panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActivecClasses();
        panel.classList.add('active')
    })
})

function removeActivecClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}