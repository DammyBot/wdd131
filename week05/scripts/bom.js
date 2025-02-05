let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {displayList(chapter)});
console.log(chaptersArray);

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if(input.value != ""){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

function displayList(chapter) {
    if (input.value != "") {
        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");

        if(chapter.includes(input.value)){
            alert("Chapter already exists");
            return;
        }else{
            li.textContent = input.value;
            deleteBtn.textContent = "❌";

            li.append(deleteBtn);
            list.append(li);
            chapter.push(input.value);
            console.log(chaptersArray);
        }

        deleteBtn.addEventListener('click', () => {
            list.removeChild(li);
        });
    }else{
        alert("Please enter a chapter name");
    }
}

function setChapterList(){}

function getChapterList(){
    return ["Chapter 1", "Chapter 2"];
}