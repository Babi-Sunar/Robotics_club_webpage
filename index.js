// function light(){
//         const link = document.getElementById("style");
//     link.href = "light.css";

// };
// function dark(){
//         const link = document.getElementById("style");
//     link.href = "dark.css";

// };

document.getElementById("change-mode").addEventListener("change", function(){
    const link = document.getElementById("style");
    if(this.checked){
        link.href = "dark.css";
    }
    else {
        link.href = "light.css";
    }
});

// const img = document.getElementsByClassName("team_member_image");
// img.addEventListener("dbClick", () =>{
//     img.classList.toggle("zoomed");
// });



