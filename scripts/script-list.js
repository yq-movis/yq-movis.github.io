
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
