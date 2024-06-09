// ".notes-container" sınıfına sahip öğeyi seçer
const notesContainer = document.querySelector(".notes-container");

// ".btn" sınıfına sahip düğmeyi seçer
const createBtn = document.querySelector(".btn");

// ".input-box" sınıfına sahip tüm öğeleri seçer
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// "createBtn" düğmesine tıklama olayını dinler ve tetiklenen işlevi tanımlar
createBtn.addEventListener("click", () => {
    // Yeni bir <p> (paragraf) öğesi oluşturur
    let inputBox = document.createElement("p");

    // Yeni bir <img> (resim) öğesi oluşturur
    let img = document.createElement("img");

    // Yeni oluşturulan <p> öğesine "input-box" sınıfı ekler
    inputBox.className = "input-box";

    // Yeni oluşturulan <p> öğesine "contenteditable" özniteliğini ekler, bu sayede kullanıcı bu öğenin içeriğini düzenleyebilir
    inputBox.setAttribute("contenteditable", "true");

    // Yeni oluşturulan <img> öğesinin kaynağını "delete.png" olarak ayarlar
    img.src = "delete.png";

    // Yeni <p> öğesini "notesContainer" içine ekler ve ardından bu <p> öğesinin içine <img> öğesini ekler
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
       nt.onkeyup = function() {
               updateStorage();
       }
    })
  }

})