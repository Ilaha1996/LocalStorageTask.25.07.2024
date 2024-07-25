let fullnameInput = document.querySelector("#Fullname");
let addBtn = document.querySelector("#AddBtn");
let infoItems = document.querySelector("#InfoItems");
let errMsg = document.getElementById("ErrMsg");

let teacherListArr = JSON.parse(localStorage.getItem("fullnameList")) || [];

document.addEventListener("DOMContentLoaded", function() {
    teacherListArr.forEach(teacher => {
        let containerDiv = document.createElement("div");
        let li = document.createElement("li");
        let deleteBTN = document.createElement("button");

        deleteBTN.innerText = "Remove";
        deleteBTN.style.color = "red";
        deleteBTN.addEventListener("click", function() {
            containerDiv.remove(); 
            teacherListArr = teacherListArr.filter(item => item !== teacher);
            localStorage.setItem("fullnameList", JSON.stringify(teacherListArr));
        });

        li.innerText = teacher;
        li.style.marginRight = "20px";

        containerDiv.append(li);
        containerDiv.append(deleteBTN);
        containerDiv.style.display = "flex";
        containerDiv.style.marginTop = "10px";
        infoItems.append(containerDiv);
    });
});

addBtn.addEventListener("click", function() {
    let fullname = fullnameInput.value.trim();
    
    if (fullname === "") {
        errMsg.style.display = "block";
        return;
    } else {
        errMsg.style.display = "none";
    }

    teacherListArr.push(fullname);
    localStorage.setItem("fullnameList", JSON.stringify(teacherListArr));
    
    let containerDiv = document.createElement("div");
    let li = document.createElement("li");
    let deleteBTN = document.createElement("button");

    deleteBTN.innerText = "Remove";
    deleteBTN.style.color = "red";
    deleteBTN.addEventListener("click", function() {
        containerDiv.remove(); 
        teacherListArr = teacherListArr.filter(item => item !== fullname);
        localStorage.setItem("fullnameList", JSON.stringify(teacherListArr));
    });

    li.innerText = fullname;
    li.style.marginRight = "20px";

    containerDiv.append(li);
    containerDiv.append(deleteBTN);
    containerDiv.style.display = "flex";
    containerDiv.style.marginTop = "10px";
    infoItems.append(containerDiv);
    
    fullnameInput.value = "";
});
