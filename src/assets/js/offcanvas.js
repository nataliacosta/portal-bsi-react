/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
export function openNav() {
    document.getElementById("off-canvas").style.width = "85%";
    document.getElementById("menuOffcanvas").style.display = "block";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
export function closeNav() {
    document.getElementById("menuOffcanvas").style.display = "none";
    document.getElementById("off-canvas").style.width = "0";
}