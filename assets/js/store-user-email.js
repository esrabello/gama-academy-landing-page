function storeEmail(num) {
    let userEmail = document.getElementsByClassName("input-email")[num].value;
    localStorage.setItem("Email do Usuário", userEmail);
    // console.log(`Email ${userEmail} salvo no Local Storage.`);
}

