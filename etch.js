    
    const divcontainer = document.querySelector(".container");
    
    for(let i = 0; i < (16*16); i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add('flexelement');
    divcontainer.appendChild(gridElement);

}
    const flexielements = document.querySelectorAll(".flexelement");
    flexielements.forEach((element) => {
        element.addEventListener('mouseenter', (e) => {
          //  e.target.style.backgroundColor = "blue";
          e.target.classList.add('colourchanger');
        });
    });
