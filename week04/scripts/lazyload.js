const lastModified = document.getElementById("lastModified");
const date = new Date();
lastModified.textContent = `Last modified: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;