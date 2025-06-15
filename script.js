function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    const overlay = document.getElementById("overlay");
    const isOpen = menu.classList.toggle("show");
    overlay.classList.toggle("active", isOpen);
}

// Close dropdown and overlay when clicking outside
window.onclick = function(event) {
    if (!event.target.closest('.dropdown')) {
        document.getElementById("dropdownMenu").classList.remove("show");
        document.getElementById("overlay").classList.remove("active");
    }
};

// Close menu if overlay is clicked
document.getElementById("overlay").onclick = function() {
    document.getElementById("dropdownMenu").classList.remove("show");
    this.classList.remove("active");
};
