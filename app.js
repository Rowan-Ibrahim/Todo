let input=document.querySelector('input');
let addBtn=document.getElementById('addBtn');
let noTask=document.getElementById('noTask');
let allTask=document.getElementById('allTask');
let invalid =document.getElementById('invalid');
let closeBtn=document.getElementById('close-btn');

let closeInvalid = ()=>{
    invalid.classList.add('none');
}
closeBtn.addEventListener=('click',closeInvalid);



let addTask = ()=>{
 
  if(input.value.length<3 || input.value.trim ()== '') {
invalid.classList.remove('none');
  } else{
        noTask.classList.add('none') ;
  allTask.innerHTML +=`
 <div class="alert alert-info task">
 ${input.value}
 <button class=" delete btn btn-danger float-right" style="padding:3px">remove</button>
 </div>
 ${input.value=""
}`
 
  
  allTask.addEventListener('click',function (e) {
    if(e.target.classList.contains('task')){
        e.target.classList.toggle('check');
      }   
    }) }}
addBtn.addEventListener('click',addTask);

document.addEventListener('click',function (e) {
   if(e.target.classList.contains('delete')){
       e.target.parentElement.remove();
     }   
  if(allTask.children.length==0){
      noTask.classList.remove('none')
  }
   });
 