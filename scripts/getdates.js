const currentyear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = `©${currentyear} Lucas Nunes - Brazil` ;

const lastupdated = new Date(document.lastModified).toLocaleDateString();
document.querySelector("#lastupdated").textContent = `Last Updated: ${lastupdated}`;