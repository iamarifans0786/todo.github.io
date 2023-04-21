var items = document.querySelector("#item");//input
var todoBox = document.querySelector("#todo-box");//ul
items.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        var newvalue = this.value;
        this.value = ""
        var newitems = document.createElement("li");
        newitems.innerHTML = `${newvalue} <b >x</b> `;

        todoBox.appendChild(newitems);

        newitems.addEventListener("click", function (e) {
            if (e.target.nodeName == "LI") {
                this.classList.toggle("done");
            }
        });
    }

});

todoBox.addEventListener("click", (e) => {
    if (e.target.nodeName == "B") {
        e.target.parentNode.remove();
    }
});
