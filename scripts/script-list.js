
const btnList = document.querySelectorAll('.entry');

btnList.forEach(btnClicked => {
    btnClicked.addEventListener('click', () => {

        
        // same button stays a specified colour until another one is clicked
        document.querySelector('.entry-clicked')?.classList.remove('entry-clicked');
        btnClicked.classList.add('entry-clicked');
        
        // shows innerHTML, data-content, of class=entry that has the appearance and function of a button
        const showContent = document.getElementById("reflection-content");
        showContent.innerHTML = btnClicked.getAttribute("data-content");
    })
})


// Wait for DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {
        
    //select all svg elements with an ID
    const svgElements = document.querySelectorAll("svg [id]");
    
    //add event listeners to each SVG element
    svgElements.forEach(element => {
        element.addEventListener("mouseover", function() {
         //change the colour to highlight the element
            element.style.fill = "yellow"; 
        });

        element.addEventListener("mouseout", function() {
        //revert the fill colour to original state
            element.style.fill ="";
        });

    });

}); 