const form_connexion = document.querySelector(".form_connexion");

/**
 * 
 * @param {string} email email de l'utilisateur
 * @returns {string} verieEmail validation du email
 */
function EmailValide(email) {
    // recuperation errorEmail
    const errorEmail = document.querySelector(".errorEmail");

    // expression reguliere
    const verieEmail = new RegExp("^[^\s@]+@[^\s@]+\\.[^\s@]+$");
    // const verieEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (verieEmail.test(email.value)) {
        errorEmail.textContent = "";
        return true;
    } else {
        errorEmail.textContent = "Email invalide !";
        return false;
    }
}

// recupération de chamsrequis
const chamsrequis = document.querySelector(".chamsrequis");

// verifie si le champs email est remplis
function verfiechampsEmail(email) {
    if(email.value.trim() !== "") {
        chamsrequis.textContent="";
        return EmailValide(email);
    } else {
        chamsrequis.textContent = "Tous les champs sont requis !";
        chamsrequis.style = "padding: 5px 10px";
    }
}

/**
 * 
 * @param {string} mdp de l'utilisateur
 * @returns {string} verifieMDP de l'utilisateur
 */

function MDPValide(mdp) {
    // recupèration de errorMDP
    const errorMDP = document.querySelector(".errorMDP");
    
    const verifieMDP = new RegExp("^[A-Z]+[^\s@]+$");
    if (verifieMDP.test(mdp.value)) {
        errorMDP.textContent = "";
        return true;
    } else {
        errorMDP.textContent = "Le mot de passe doit commencer par une pajuscule, et est au moins 8 caractéres !";
        chamsrequis.style = "background-color: white";
        return false;
    }
}

function verifieChampsMDP(mdp) {
    if (mdp.value.trim() !== "") {
        // invocation de la foction MDPValide
        chamsrequis.textContent="";
        return MDPValide(mdp);
    } else {
        chamsrequis.textContent = "Tous les champs sont requis !";
        chamsrequis.style = "padding: 5px 10px";
    }
}

//fonction de la redirection d'un autre page si tout est ok
function redirectionPage(email, mdp, lien) {
    if (verfiechampsEmail(email) && verifieChampsMDP(mdp)) {
        window.location.href = lien;
    }
}

// fonction d'ecouteur d'evenemat
form_connexion.addEventListener('submit', function (event) {
    event.preventDefault();

    // récupèration du email
    const email = document.querySelector("#email");
    verfiechampsEmail(email);

    // récupèration du mot de passe
    const mdp = document.querySelector("#mdp");
    verifieChampsMDP(mdp);

    // redirectionPage
    redirectionPage(email, mdp, "accueil.html");
})