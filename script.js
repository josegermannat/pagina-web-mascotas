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
  
const button = document.getElementById("button-next");
button.addEventListener("click", obtenerDetallesPet);

function obtenerDetallesPet(){
const perro = {};
perro.name = document.getElementById("Name").value;
perro.Birthday = document.getElementById("Birthday").value;
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
 
console.log(perro);
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