function openMenu() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("sidebar").style.left = "-220px";
  document.getElementById("overlay").style.display = "none";
}

function showToast(event){

    event.preventDefault();

    let toast =
    document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(function(){
        toast.classList.remove("show");
    },2000);

    event.target.reset();
}
function copyText(text) {
  navigator.clipboard.writeText(text);

  showMessage("✓ Copied to clipboard");
}

function showMessage(message) {
  const toast = document.getElementById("toast");

  toast.innerHTML = message;

  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
  }, 2500);
}
