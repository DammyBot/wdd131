const infoDate = document.querySelector('.getdate');
date = new Date().getDate();
month = new Date().getMonth() + 1;
year = new Date().getFullYear();
hour = new Date().getHours();
minute = new Date().getMinutes();
seconds = new Date().getSeconds();
infoDate.innerHTML = `${date}/${month}/${year} ${hour}:${minute}:${seconds}`;