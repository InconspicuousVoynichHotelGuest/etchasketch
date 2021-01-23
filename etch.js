    
    const divcontainer = document.querySelector(".container");
    const buttonselector = document.querySelector("button");
    const root = document.documentElement;
    let userinput = 16;
    var reg = /^\d+$/;


    function makeGrid(userdata) {
    for(let i = 0; i < (userdata * userdata); i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add('flexelement');
    gridElement.addEventListener('mouseenter', (e) => {
        e.target.classList.add('colourchanger');
      });
    divcontainer.appendChild(gridElement);
        }
    };
//function addcolour() {
 //   flexielements.forEach((element) => {
 //   element.addEventListener('mouseenter', (e) => {
      //  e.target.style.backgroundColor = "blue";
 //     e.target.classList.add('colourchanger');
 //   });
//});
//};
   makeGrid(userinput);
  // addcolour();
  //  flexielements.forEach((element) => {
   //     element.addEventListener('mouseenter', (e) => {
   //       e.target.classList.add('colourchanger');
   //     });
   // });

    buttonselector.addEventListener('click', function() {
        while(divcontainer.firstChild) {
            divcontainer.removeChild(divcontainer.firstChild);
        }
       // flexielements.forEach((element) => {
       //     element.classList.remove('colourchanger');
       // });
        userinput = prompt("Select the size of the grid:");
        if(userinput > 100|| reg.test(userinput) !== true) {
            userinput = prompt("only numbers between 1 and 100");
        };
        root.style.setProperty("--gridlength", userinput);
        makeGrid(userinput);
    });
    