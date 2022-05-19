//initilize global variables
const button = document.querySelector(".submit")
const input = document.querySelector("#favchap")
const list = document.querySelector(".list")
const warning = document.querySelector("#warning")
var chapter_list = []


function update_list() {
    //Recieves and checks data
    console.log('Log: update_list() activated...');
    let text_input = input.value
    let text_length = text_input.length
    if (text_length >= 1){
        warning.style.display = 'none'
        chapter_list.push(text_input)
        update_display()
        input.value = ''
    }
    else {
        warning.style.color = 'red'
        warning.style.display = 'block'
    }
}
function update_display() {
    //Clears screen and reloads list
    console.log('Log: update_display()');
    list.innerHTML = ""
    chapter_list.forEach(item => {
        list.innerHTML += `<li> <p>${item}</p> <button onclick="remove_item('${item}')">[X]</button> </li>`
    })

}
function remove_item(item) {
    //removes item and triggers display update
    console.log(`Remove item called with ${item}`);
    for(let index = 0; index < chapter_list.length; index++){ 
        if (chapter_list[index] == item) {
            chapter_list.splice(index, 1); 
        }
    }
    update_display()
}

console.log('Javascript loaded...');
button.addEventListener("click", update_list);