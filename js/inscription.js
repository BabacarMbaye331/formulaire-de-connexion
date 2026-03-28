const form_inscription = document.querySelector('.form_inscription');

// Verifie est-ce  le champs nom n'est vide et est-ce valide
function nomValid(nom) {
    if (nom.value !== "") {
        const verifNom = new RegExp("^[A-Z]+[a-z0-9]+$");
        if (verifNom.test(nom.value)) {
            console.log("Nom : " + nom.value)

            return true;
        } else {
            console.log("nom invalide !")
            return false;
        }
    } else {
        console.log("veillez remplir votre nom");

        return false;
    }
}

// Verifie est-ce  le champs prenom n'est vide et est-ce valide
function prenomValid(prenom) {
    if (prenom.value !== "") {
        const verifNom = new RegExp("^[A-Z]+[a-z0-9]+$");
        if (verifNom.test(prenom.value)) {
            console.log("prenom : " + prenom.value);

            return true;
        } else {
            console.log("prenom invalide !")
            return false;
        }
    } else {
        console.log("veillez remplir votre prenom");
        return false;
    }
}

// function de verification Email
function EmailValide(email) {
    if (email.value.trim() !== "") {
        const verifEmail = new RegExp("^[^\s@]+@[^\s@]+\\.[^\s@]+$")
        if (verifEmail.test(email.value)) {
            console.log("Email : " + email.value);

            return true;
        } else {
            console.log("Email invalide !");
            return false;
        }
    } else {
        console.log("veillez entrer votre email !");

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
        calculAge(datenais);

        return true;
    } else {
        console.log("veillez entrer votre date de naissance !");

        return false;
    }
}

// foncion de verification du mot de passe
function validateMDP(mdp) {
    if (mdp.value !== "") {
        const verifMDP = /^[A-Z].{7,}$/;
        if (verifMDP.test(mdp.value)) {
            console.log("mot de passe : " + mdp.value);

            return true;
        } else {
            console.log("mdp incorrect !");
            return false;
        }
    } else {
        console.log("Mot de passe doit commencer par une mauscule, et est au au moins 8 caractéres.")

        return false;
    }

}

// fonction pour confirmation du mot de passe
function ConfirmationMDP(conf_MDP, mdp) {
    if (conf_MDP.value !== "") {
        if (conf_MDP.value === mdp.value) {
            console.log("succé !");
            return true;
        } else {
            console.log("il n'est pas conforme avec le mot de pass !");
            return false;
        }
    } else {
        console.log("pas encore confirmer !");
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

    // invocation des fonction
    const nomOk = nomValid(nom);
    const prenomOk = prenomValid(prenom);
    const dateNaissanceOk = validation_date(dateNaissance);
    const emailOk = EmailValide(email);
    const mdpOk = validateMDP(mdp);
    const confimMDPOK = ConfirmationMDP(conf_mdp, mdp);

    // fonction pour soumetre le bouton d'inscription
    if (nomOk, prenomOk, dateNaissanceOk, emailOk, mdpOk, confimMDPOK) {
        console.log("tout  est ok");
    }
});