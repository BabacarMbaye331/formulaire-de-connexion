const form_connexion = document.querySelector(".form_connexion");
// recuperation des messages d'erreurs
const chamsrequis = document.querySelector(".chamsrequis");
const errorMDP = document.querySelector(".errorMDP");
const errorEmail = document.querySelector(".errorEmail");

fetch("../http-api/users.json")
    .then(user => user.json())
    .then(data =>  {
        // console.log(data)

        // enregistrement des donnees dans le localStorage
        window.localStorage.setItem("users", JSON.stringify(data))
    })
    .catch(e =>  console.error("erreur avec ", e))
    

// recuperation des donnees au niveau du localStorage
const users = JSON.parse(localStorage.getItem("users"));

// connexion de l' API pour l'authentification des users
async function donneesEregistrer(emailUser, mdpUser) {

    for (const user of users) {
        if (emailUser.value === user.email && mdpUser.value === user.mdp) {

            // recuperation des donnees de l'utilisateur
            let donneesUsers = {
                id : user.id_user,
                prenom : user.prenom,
                nom : user.nom,
                email : user.email,
                mdp : user.mdp
            }

            // Stocker dans localStorage pour persister après redirection
            localStorage.setItem("currentUser", JSON.stringify(donneesUsers));

            redirectionPage(emailUser, mdpUser, "../pages/accueil.html");
        } else {
            console.log("veillez vous inscrire !");
        }
    }
}


/**
 * 
 * @param {string} email email de l'utilisateur
 * @returns {string} verieEmail validation du email
 */
function EmailValide(email) {

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


// verifie si le champs email est remplis

function verfiechampsEmail(email) {
    const valueEmail = email.value;
    if (valueEmail !== "") {
        chamsrequis.textContent = "";
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
    const verifieMDP = new RegExp("^[A-Z]+[A-Za-z0-9-_./&@]+$");
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
        chamsrequis.textContent = "";
        return MDPValide(mdp);
    } else {
        chamsrequis.textContent = "Tous les champs sont requis !";
        chamsrequis.style.padding = "5px 10px";
    }
}

//fonction de la redirection d'un autre page si tout est ok
function redirectionPage(email, mdp, lien) {
    if (verfiechampsEmail(email) && verifieChampsMDP(mdp)) {
        window.location.href = lien;
    } else {
        console.log("erreur de connexion")
    }
}

// fonction d'ecouteur d'evenemat
form_connexion.addEventListener('submit', function (event) {
    event.preventDefault();

    // récupèration des champs
    const email = document.querySelector("#email");
    const mdp = document.querySelector("#mdp");



    // redirectionPage
    // redirectionPage(email, mdp, "../pages/accueil.html");
    donneesEregistrer(email, mdp)
})