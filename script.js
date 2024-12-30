const checkFemale =  document.getElementById("Female");
const checkMale = document.getElementById("male");
const checkYes =  document.getElementById("yes");
const checkNo = document.getElementById("no");
const weightDe0a25 = document.getElementById("0.25");
const weightDe25a50 = document.getElementById("25.50");
const weightDe50a100 = document.getElementById("50.100");
const weightmas100 = document.getElementById("+100");
const buttonPhoto = document.getElementById("photo");
const inputFile  = document.getElementById("file")
let acumulador = 1;
const buttonNext = document.querySelectorAll(".button-next");
const buttonBack = document.querySelectorAll(".button-back");
const steps0 = document.getElementById("steps0");
const steps1 = document.getElementById("steps1");
const steps2 = document.getElementById("steps2");
const steps3 = document.getElementById("steps3");
const formHuman = document.getElementById("form1");
const formPets = document.getElementById("form2");
const formDetails = document.getElementById("form3");
const formConfirm =  document.getElementById("form4");

steps0.classList.add("steps-focused");
formPets.classList.add("remove");
formDetails.classList.add("remove");
formConfirm.classList.add ("remove");


buttonNext.forEach(button => {
  button.addEventListener("click", () => {
  
    if(acumulador <= 4){
      acumulador += 1;
  switch(acumulador){
    case 1: steps0.classList.add("steps-focused")
          
    break;
    case 2: steps1.classList.add("steps-focused")
             steps0.classList.remove("steps-focused")     
             formPets.classList.remove("remove");
             formHuman.classList.add("remove")
          
    break;
    case 3: steps2.classList.add("steps-focused")
             steps1.classList.remove("steps-focused")
             formPets.classList.add("remove");
             formDetails.classList.remove("remove");
            
    break;
    case 4: steps3.classList.add("steps-focused")
            steps2.classList.remove("steps-focused")
            formDetails.classList.add("remove");
            formConfirm.classList.remove("remove");
            ObtenerImagenConfirm()
            obtenerParrafo(obtenerDetallesPet());
           buttonNext.forEach(btn => btn.innerHTML = "confirm");
    break;
    
  }console.log(acumulador);
    }
  
  })



})


buttonBack.forEach(Button =>{
  Button.addEventListener("click", () =>{
    if(acumulador > 0){
      acumulador -= 1;
      switch(acumulador){
        case 1: steps0.classList.add("steps-focused")
                 steps1.classList.remove("steps-focused")
                formPets.classList.add("remove");
                formHuman.classList.remove("remove");
        break;
        case 2: steps1.classList.add("steps-focused")
                steps2.classList.remove("steps-focused")
                formPets.classList.remove("remove");
                formDetails.classList.add("remove");
        break;
        case 3: steps2.classList.add("steps-focused")
                 steps3.classList.remove("steps-focused")
                 formDetails.classList.remove("remove");
                 formConfirm.classList.add("remove");
                 buttonNext.forEach(btn => btn.innerHTML = "next");
                 
        break;
        case 4: steps3.classList.add("steps-focused")
                steps4.classList.remove("steps-focused")
                
               
        break;
      }console.log(acumulador);
  
    }
  })
  
  


})

buttonPhoto.addEventListener("click", () => {
inputFile.click();
});


const weight = [weightDe0a25, weightDe25a50, weightDe50a100, weightmas100];


weight.forEach((element) => {
  element.addEventListener("change", () => {

  
    if (element.checked) {
      weight.forEach((otherInput) => {
        if (otherInput !== element) {
          otherInput.checked = false;  
        }
      });
    }
  });
});

checkMale.addEventListener("change", () => {
  checkFemale.checked = checkFemale.disabled;
});
checkFemale.addEventListener("change", () =>{
  checkMale.checked = checkMale.disabled;
})

checkYes.addEventListener("change", () => {
    checkNo.checked = checkYes.disabled;
});
  
  checkNo.addEventListener("change", () => {
    checkYes.checked = checkNo.disabled;
});
  



function obtenerDetallesHuman(){
const human = {};
human.FirstName = document.getElementById("FirstName").value;
human.LastName = document.getElementById("secondName").value;
human.Phone = document.getElementById("Phone").value;
human.Gmail = document.getElementById("gmail").value;
human.StreetAddress = document.getElementById("streetAddress").value;
human.City = document.getElementById("City").value;
human.Birthday = document.getElementById("Birthday1").value;


console.log(human);
}

function obtenerDetallesPet(){
const perro = {};
perro.name = document.getElementById("Name").value;
perro.Birthday = document.getElementById("Birthday2").value;
perro.bread = document.getElementById("Bread").value;
 

 if(checkFemale.checked){
    perro.Gender = "Female";
} else if (checkMale.checked){
  perro.Gender = "male";
}

 if(checkYes.checked){
     perro.spayed = "Yes";
 } else if (checkNo.checked){
   perro.spayed = "No";
 }
 switch (true) {
    case weightDe0a25.checked:
      perro.weight = "0-25";
      break;
    case weightDe25a50.checked:
      perro.weight = "25-50";
      break;
    case weightDe50a100.checked:
      perro.weight = "50-100";
      break;
    case weightmas100.checked:
      perro.weight = "+100";
      break;
  }

  const inputFileValue = inputFile.value;
  perro.photo = inputFileValue;
 
return perro;
 }
function ObtenerImagenConfirm(){
  const imgPreview2 = document.getElementById("imgPreview2");
  const input = document.getElementById("file");

  if(!input.files.length) return

  const files = input.files.length;
        
  const file = input.files[0];
  
  const objectURL = URL.createObjectURL(file);
  imgPreview2.src = objectURL;
  imgPreview2.classList.add("photoPreview2");
}
 function obtenerParrafo(obtenerDetallesPet) {  
  const parrafo = document.getElementById("parrafoConfirm");
  parrafo.innerHTML = "Well done! Just one more step left. Please confirm the details of " + obtenerDetallesPet.name  + " to complete the process. We look forward to welcoming you."
}


function previewImage(event, selector){
  console.log(event);
  const input = event.target;
    const  imgPreview = document.querySelector(selector);
    

  if(!input.files.length) return

         const files = input.files.length;
        
          const file = input.files[0];
  
   const objectURL = URL.createObjectURL(file);
   imgPreview.classList.remove("remove");

   imgPreview.src = objectURL;
   imgPreview.classList.add("photoPreview");
  const labelButton = document.getElementById("label-for-button");
  const buttonPhoto =  document.getElementById("photo");
     labelButton.classList.add("remove");
     buttonPhoto.classList.add("remove");
     const ContenedorDePhoto = document.getElementsByClassName("input-wrapper_button")
      
     let buttonCambiarPhoto = document.querySelector('.button-change-photo');

if(!buttonCambiarPhoto){
   buttonCambiarPhoto = document.createElement("button")
  buttonCambiarPhoto.innerHTML = "Change photo";
     ContenedorDePhoto[0].appendChild(buttonCambiarPhoto);
     buttonCambiarPhoto.classList.add("button-change-photo");


  

    buttonCambiarPhoto.addEventListener("click", () =>{
      URL.revokeObjectURL(imgPreview.src);
   imgPreview.src = "";
   input.value = "";
   imgPreview.classList.add("remove");

   labelButton.classList.remove("remove");
   buttonPhoto.classList.remove("remove");

   buttonCambiarPhoto.classList.add("remove");
     })
       }
       buttonCambiarPhoto.classList.remove("remove");
  }