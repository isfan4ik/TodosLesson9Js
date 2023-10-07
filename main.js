document.querySelector('#push').onclick = function()  {
   if(document.querySelector('#why input').value.length == 0){
      alert("Please Enter a task name")
   }   else{
      document.querySelector('#his').innerHTML += `
      <div class="task">
       <span id="taskname">
       ${document.querySelector('#why input').value}
        </span>

        <button class="delete">
        <i class="far fa-trash-all"></i>
        </button>
      `

      var current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
         }
   }
}  


