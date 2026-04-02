const form_inscription = document.querySelector('.form_inscription');
const champsrequis = document.querySelector('.champsrequis');
const errorNom= document.querySelector(".errorNom");
const errorPrenom = document.querySelector('.errorPrenom');
const errorDateNaiss = document.querySelector('.errorDateNaiss');
const errorEmail = document.querySelector('.errorEmail');
const errorMDP = document.querySelector('.errorMDP');
const errorConfMDP = document.querySelector(".errorConfMDP");
const errorValidDonnees = document.querySelector(".errorValidDonnees");

// Verifie est-ce  le champs nom n'est vide et est-ce valide
function nomValid(nom) {
    if (nom.value !== "") {
        const verifNom = new RegExp("^[A-Z]+[a-z0-9]+$");
        if (verifNom.test(nom.value)) {
            errorNom.textContent = "";

            return true;
        } else {
            console.log("nom invalide !")
            return false;
        }
        
    } else {
        errorNom.textContent = "Le nom doit commencer par une majuscule !";

        return false;
    }
}

// Verifie est-ce  le champs prenom n'est vide et est-ce valide
function prenomValid(prenom) {
    if (prenom.value !== "") {
        const verifNom = new RegExp("^[A-Z]+[a-z0-9]+$");
        if (verifNom.test(prenom.value)) {
            errorPrenom.textContent = "";

            return true;
        } else {
            console.log("prenom invalide !")
            return false;
        }
        
    } else {
        errorPrenom.textContent = "Le prenom doit commencer par une majuscule !";
        return false;
    }
}

// function de verification Email
function EmailValide(email) {
    if (email.value.trim() !== "") {
        const verifEmail = new RegExp("^[^\s@]+@[^\s@]+\\.[^\s@]+$")
        if (verifEmail.test(email.value)) {
            errorEmail.textContent = "";

            return true;
        } else {
            errorEmail.textContent = "Veillez remplir votre Email correctement"
            return false;
        }

        
        
    } else {
        errorEmail.textContent = "Veillez remplir votre Email correctement"

        return false;
    }
}

// fonction pour calculer l'age de l'utilisateur
function calculAge(dateNaissance) {
    const Nais = dateNaissance.value;
    const dateNais = new Date(Nais);
    const today = new Date();

    let age = today.getFullYear() - dateNais.getFullYear();
    let mois = today.getMonth() - dateNais.getMonth();
    if (mois < 0 || (mois === 0 && today.getDate() < dateNais.getDate())) {
        age--;
        console.log("Votre anniversaire n'a pas encore eu lieu cette année.");
    } else {
        console.log("vous avez : " + age + " ans");
    }

    return age;
}

// fonction pour verifier la date de naissance est-ce valide
function validation_date(datenais) {
    if (datenais.value !== "") {
        errorDateNaiss.textContent = "";
        calculAge(datenais);

        return true;
    } else {
        errorDateNaiss.textContent = "veillez remplir votre date de naissance ";

        return false;
    }
}

// foncion de verification du mot de passe
function validateMDP(mdp) {
    if (mdp.value !== "") {
        const verifMDP = /^[A-Z][A-Za-z0-9-_/.&@].{7,}$/;
        if (verifMDP.test(mdp.value)) {
            errorMDP.textContent = "";

            return true;
        } else {
            errorMDP.textContent="Le mot de passe doit commencer par une majuscule et est au moins 8 carctéres !"
            return false;
        }
        
    } else {
        errorMDP.textContent="Le mot de passe doit commencer par une majuscule et est au moins 8 carctéres !"

        return false;
    }

}

// fonction pour confirmation du mot de passe
function ConfirmationMDP(conf_MDP, mdp) {
    if (conf_MDP.value !== "") {
        if (conf_MDP.value === mdp.value) {
            errorConfMDP.textContent ="";
            return true;
        } else {
            errorConfMDP.textContent = "Le mot de passe n'est pas conforme !";
            return false;
        }

        
    } else {
        errorConfMDP.textContent = "Le mot de passe n'est pas conforme !";
        return false;
    }
}

// fonction aptation du sauvegarde des données

// fonction d'ecouteur d'evenement
form_inscription.addEventListener("submit", function (e) {
    e.preventDefault();

    // recuperation des champs
    const nom = document.querySelector("#nom");
    const prenom = document.querySelector("#prenom");
    const dateNaissance = document.querySelector("#dateNaissance");
    const email = document.querySelector("#email");
    const mdp = document.querySelector("#mdp");
    const conf_mdp = document.querySelector("#conf_mdp");
    const check_confirme = document.querySelector("#check_confirme").checked;

    // invocation des fonction
    const nomOk = nomValid(nom);
    const prenomOk = prenomValid(prenom);
    const dateNaissanceOk = validation_date(dateNaissance);
    const emailOk = EmailValide(email);
    const mdpOk = validateMDP(mdp);
    const confimMDPOK = ConfirmationMDP(conf_mdp, mdp);

    // fonction pour soumetre le bouton d'inscription
    if (nomOk, prenomOk, dateNaissanceOk, emailOk, mdpOk, confimMDPOK && check_confirme) {
        window.location.href = "../pages/accueil.html";
        console.log("tout  est ok");
    } else {
        errorValidDonnees.textContent = "veillez confirmer l'utilisation de votre données !";
        console.log("erreur connect")
    }
});