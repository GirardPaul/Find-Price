// Selectionner les éléments

let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

// Cacher l'erreur

error.style.display = "none";

// Générer un nombre aléatoire

let nombreAleatoire = Math.floor(Math.random()*(1000 - 0 + 1));
let propositions = 0;
let nombreChoisi;


// Fonction vérifier le nombre nombreChoisi

function verifier(nombre) {
    
    let instruction = document.createElement('div');
    console.log(nombreChoisi);
    

    if(nombreChoisi < nombreAleatoire){
        instruction.textContent =  "#" + propositions + " " + "("+nombreChoisi+")" + " " + "C'est plus !";
        instruction.className = "instruction plus"; 
        
        //Plus
    }
    else if(nombreChoisi > nombreAleatoire)
    {
        instruction.textContent = "#" + propositions + " " + "("+nombreChoisi+")" + " " + "C'est moins !";
        instruction.className = "instruction moins"; 
     
        //moins

    }
    else
    {
        instruction.textContent = "#" + propositions + " " + "("+nombreChoisi+")" + " " + "Félicitations vous avez trouvé!";
        instruction.className = "instruction fini"; 
        input.disabled = true;
        
        //trouvé
    }

    document.querySelector('#instructions').prepend(instruction);
}

// Vérifier que l'utilisateur donne bien un nombre

input.addEventListener('keyup', () => {

    //isNaN = is Not a Number
    if(isNaN(input.value)){
        error.style.display = "inline";
    }
    else{
        error.style.display = "none";
    }

});

// Agir à l'envoi du formulaire

formulaire.addEventListener('submit', (event) => {

    //Annuler l'évènement par défault du navigateur qui consiste à envoyer les données du formulaire à une autre page
    event.preventDefault();

    if(isNaN(input.value) || input.value == ""){
        input.style.borderColor = "red";
    }
    else{
        propositions++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = "";
        verifier(nombreChoisi);
    }

});

