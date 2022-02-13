console.log("rrrrrrrrrrrr")

const data =[
    {
        namee:'usha',
        age:19,
        city:'pune',
        language:'js',
        framework:'react',
        image:'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        namee:'emma watson',
        age:20,
        city:'pune',
        language:'devops',
        framework:'reactdevops',
        image:'https://randomuser.me/api/portraits/women/76.jpg'
    },
    {
        namee:'elon musk',
        age:21,
        city:'pune',
        language:'cloud',
        framework:'reactcloud',
        image:'https://randomuser.me/api/portraits/women/77.jpg'
    },
    {
        namee:'camilo cambelo',
        age:22,
        city:'hyderabad',
        language:'fullstack',
        framework:'reactfs',
        image:'https://randomuser.me/api/portraits/women/78.jpg'
    },
    {
        namee:'harry james',
        age:23,
        city:'manipur',
        language:'python',
        framework:'reactpy',
        image:'https://randomuser.me/api/portraits/women/75.jpg'
    }

]


//cv iterator

function cviterator(profiles) {
    let nextindex=0;
    return{
        next:function () {
            return nextindex<profiles.length ? {value:profiles[nextindex++],done:false} : {done:true}
        }
    }
    
}

//button listener

const next=document.getElementById('next')
next.addEventListener('click',cvnext)

const candidate=cviterator(data);
cvnext();


function cvnext() {
    const currentcandidate= candidate.next().value;
    let image=document.getElementById('image')
    let profiles=document.getElementById('profiles')

    if(currentcandidate!=undefined){

    image.innerHTML=`<img src='${currentcandidate.image}'>`
    profiles.innerHTML=`<ul class="list-group">
    
    <li class="list-group-item">name is ${currentcandidate.namee}</li>
    <li class="list-group-item">age is ${currentcandidate.age}</li>
    <li class="list-group-item">lives in ${currentcandidate.city}</li>
    <li class="list-group-item">working on ${currentcandidate.language}</li>
    <li class="list-group-item">${currentcandidate.framework}</li>
  </ul>`
    }
    else{
        alert('end')
        window.location.reload();
    }
    
}