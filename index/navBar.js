function Benefits() 
{
    var benefits = document.getElementById("Benefits");
    var qual = document.getElementById("Quals");

    if (benefits.style.display === "none") 
    {
        qual.style.display = "none"
        document.getElementById("qualbutton").style.backgroundColor = "black";
        benefits.style.display = "block";
        document.getElementById("benebutton").style.backgroundColor = "orangered";
    }else{
        benefits.style.display = "block";
        document.getElementById("benebutton").style.backgroundColor = "orangered";
    }
}

function Quals() 
{
    var benefits = document.getElementById("Benefits");
    var qual = document.getElementById("Quals");

    if (benefits.style.display === "block") 
    {
        benefits.style.display = "none";
        document.getElementById("benebutton").style.backgroundColor = "black";
        qual.style.display = "block";  
        document.getElementById("qualbutton").style.backgroundColor = "orangered";       
    }
}

        const hamburger = document.querySelector('.hamburger');
    const navLink = document.querySelector('.nav__link');

    hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');});