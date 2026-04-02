window.addEventListener("DOMContentLoaded", () => {

    // Récupérer les données de l'utilisateur connecté depuis localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser.email);
})


