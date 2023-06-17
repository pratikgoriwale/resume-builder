function myfunction1() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder" , "Enter Here")


    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function myfunction2() {
    let freshNode = document.createElement("textarea");
    freshNode.classList.add("form-control");
    freshNode.classList.add("aqfield");
    freshNode.classList.add("mt-2");
    freshNode.setAttribute("rows", 3);
    freshNode.setAttribute("placeholder", "Enter here");


    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(freshNode, aqAddButtonOb);
}

function generatecv() {
    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");

    let nameT2 = document.getElementById("nameT2");
    nameT1.innerHTML= nameField;
    nameT2.innerHTML = nameField;


    let contactField  = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contactField;


    let addressField  = document.getElementById("addressField").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = addressField;

    let ObjectiveField  = document.getElementById("ObjectiveField").value;
    let objectiveT = document.getElementById("objectiveT");
    objectiveT.innerHTML = ObjectiveField;

    
    
    let weField  = document.getElementsByClassName("weField");
    let str = ""


    for ( let e of weField) {

        str = str + `<li> ${e.value} </li>`;
    }

    let workexpT = document.getElementById("workexpT");
    workexpT.innerHTML = str;


    let aqfield = document.getElementsByClassName("aqfield");
    let str1 = ""


    for ( let e of aqfield) {

        str1 = str1 + `<li> ${e.value} </li>`;
    }

    let aqT = document.getElementById("aqT");
    aqT.innerHTML = str1;
   

    
    
    
    let LinkedInField  = document.getElementById("LinkedInField").value;
    let linkedT = document.getElementById("linkedT");
    linkedT.innerHTML = LinkedInField;

    let Instagramfield  = document.getElementById("Instagramfield").value;
    let InstaT = document.getElementById("InstaT");
    InstaT.innerHTML = Instagramfield;

    let Facebookfield  = document.getElementById("Facebookfield").value;
    let fbT = document.getElementById("fbT");
    fbT.innerHTML = Facebookfield;
    
    let file = document.getElementById("imgField").files[0];
    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);
    console.log(reader.result);

   reader.onloadend = function() {
    document.getElementById('imgTemplate').src = reader.result;
   };

    document.getElementById('resu-form').style.display="none";
    document.getElementById('resu-template').style.display="block"

}


function printcv() {
 
    window.print()
}

