const mainInput = document.querySelector('#head-input');
const mainButton = document.querySelector('#head-btn');
const headOl = document.querySelector('#head-ol');
const deleteBtn = document.createElement('button');
deleteBtn.className = 'delete-btn';

function addText () {
    if (mainInput.value) {
        const btn = deleteBtn.cloneNode(false);
        let li = document.createElement('li');
        li.className = 'li-list';
        li.innerText = mainInput.value;
        headOl.append(li);
        li.append(btn);
        mainInput.value = null;
        mainButton.innerHTML = 'One more thing!';
        btn.addEventListener('click', deleteLiFunc);
        function deleteLiFunc () {
            li.remove();
        }
        li.addEventListener('click', toggleFunc);
        function toggleFunc () {
            li.classList.toggle("completed");
        }
    }
}

mainButton.addEventListener('click', addText);