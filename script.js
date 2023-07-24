const calculateFormEl=document.getElementById('calculatorForm');
const resultEl=document.getElementById('result');


const calculateMarks= (event) => {
    resultEl.innerHTML="";
    const maxMarks=400;
    event.preventDefault();
    const formData=new FormData(calculateFormEl);
    let data={};
    formData.forEach((value,key) => {
      data[key]= +value;
    });
    const totalMarks=data.math + data.science +data.hindi + data.english;
    const percentage=(totalMarks*100)/maxMarks;
    
    resultEl.innerText=`You have got ${totalMarks} marks out of ${maxMarks} and Your percentage is ${percentage}%`;

}