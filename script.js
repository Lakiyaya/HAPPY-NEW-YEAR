const btn = document.getElementById("wishBtn");
const messages = document.getElementById("messages");
const msgArray = document.querySelectorAll(".msg");

let index = 0;

btn.addEventListener("click", () => {
  // show messages one by one
  if(index < msgArray.length){
    msgArray[index].style.display = "block";
    messages.classList.add("show");
    index++;
  } else {
    // reset if clicked again
    msgArray.forEach(msg => msg.style.display = "none");
    index = 0;
    messages.classList.remove("show");
  }
});
