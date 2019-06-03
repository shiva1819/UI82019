var Demo = document.getElementById('demo');
var Demo1 = document.getElementById('demo1');
var btn = document.getElementById('btn');

// ele.addEventListener('event, cb, boolean(bubbling/capturing));
btn.innerText = "HIDE";
Demo.addEventListener('click', eventChange);
btn.addEventListener('click', function(){
    if(Demo1.style.display == "block"){
        Demo1.style.display = "none";
        this.innerText = "SHOW";
    }else{
        Demo1.style.display = "block";
        this.innerText = "HIDE";
    }
})
// Demo.onclick = function(){
//     test();
// }
Demo.style.color = "green";
function eventChange(){ 
    

    if(Demo.style.color == "green"){
    
        Demo.style.color = "red";
    
    }else{
        Demo.style.color = "green";
    }
}

// Demo.className = "green yellow";
function test(){
    // alert('this is clicked..!')

    // debugger
    console.log(Demo.classList);
    var classListItems = Demo.classList;
    classListItems = classListItems.toString().split(' ').splice(0,1);
    console.log(classListItems);

    // var RestClass = classListItems.splice(0,1);



    // return false;
    Demo.className = classListItems[0];
    // id, href, src, 
    // Demo.id = 'one';
    Demo.setAttribute('id', 'Demo');
    // Demo.setAttribute('class', 'someclass');
    Demo.innerHTML = "<i>THIS IS NEW HEADING...</i>";

    // Demo.removeAttribute('class');
    console.log(Demo.innerText);
}

// Demo1.addEventListener('click', function(){
//     alert('this is clicked...! - 2')
// });