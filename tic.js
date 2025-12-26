let boxes=document.querySelectorAll(".choice");
let reset=document.querySelector(".res");
let msg=document.querySelector(".msg");
let win=document.getElementById("win");



let turn0=true;

const arr=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

boxes.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        if(turn0){
            choice.innerText="O";
            turn0=false;
        }
        else{
             choice.innerText="X";
            turn0=true;
        }
        choice.disabled=true;
        
        checkWinner();
    });
});
const showWinner=(winner)=>{
    win.innerText=`Congratulations... winner is ${winner}`;
    msg.classList.remove("hide");

    boxes.forEach(box => box.disabled = true);
    
}

const checkWinner=()=>{
    for(let pattern of arr){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!=="" && pos2!=="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1);
            }
        }
    }
}

reset.addEventListener("click",()=>{
    turn0=true;
    msg.classList.add("hide");
    boxes.forEach((choice)=>{
        choice.innerText=" ";
        choice.disabled=false;
    })
});




