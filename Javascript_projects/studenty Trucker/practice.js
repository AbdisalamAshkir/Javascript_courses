function addStudent(){
    const name = document.getElementById("studentName").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    if(name && age && gender){
        const studentList=document.getElementById('studentList');
        const studentItem=document.createElement('li');
        studentItem.textContent=`${name}- ${age} years old  ${gender}`;
        studentList.appendChild(studentItem)

    }else{
        alert('fill the the space')
    }

}
     