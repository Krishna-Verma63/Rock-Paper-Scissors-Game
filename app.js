let user = 0;
let comp = 0;

let choice=document.querySelectorAll(".option");
let line=document.querySelector("#line");

let your=document.querySelector("#your");
let comps=document.querySelector("#comps");


const comchoice=()=>{
    let a=["scissor","rock","paper"];
 let n= Math.floor (Math.random()*3);
        console.log("Computer Choice =",a[n]) 
         return a[n]
        };
    

choice.forEach((res)=> {
    res.addEventListener("click",()=>{
        let userchoice=res.getAttribute("id");
        playgame(userchoice);
    })    
})


function Draw(){
    console.log("Draw");
}


let playgame=(userchoice)=>{ 
    console.log("Your Choice =",userchoice);
    let Computer = comchoice();
    if(Computer === userchoice){
        Draw();
         line.innerHTML="Game Draw. Play again";
         line.style.backgroundColor="#081b31"

    }else if(Computer==="rock"&& userchoice==="paper"){
        uwin();    
            line.innerText="YOU WIN. Your Paper beat computer Rock"
        line.style.backgroundColor="green"


    }else if(Computer==="paper"&& userchoice==="rock"){
            comwin();
            line.innerText="YOU LOOSE! Computer Paper beat your Rock"
            line.style.backgroundColor="red"
    }else if(Computer==="scissor" && userchoice==="rock"){
             uwin();           
             line.innerText="YOU WIN. Your Rock beat computer Scissor"
         line.style.backgroundColor="green"

    }else if(Computer==="paper"&& userchoice==="scissor"){ 
        uwin();
             line.innerText="YOU WIN. Your Scissor beat computer Paper"
        line.style.backgroundColor="green"

            
    }else if(Computer==="rock" && userchoice==="scissor"){
            comwin();
            line.innerText="YOU LOOSE! Computer Rock beat your Scissor"
        line.style.backgroundColor="red"

    }else if(Computer=="scissor" && userchoice=="paper"){
        comwin();
        line.innerText="YOU LOOSE! Computer Scissor beat your Paper"
        line.style.backgroundColor="red"
}  
        
}

function comwin(){
        console.log("Computer win");
        comp++;
        comps.innerText=comp;
};
function uwin(){
                console.log("You win");
                user++;
                your.innerText=user;

}

