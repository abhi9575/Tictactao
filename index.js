let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');


const winningbet = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]

const resetfn =()=>{

}

boxes.forEach((ele)=>{
  ele.addEventListener('click',()=>{
    console.log('box clicked');
  })
})

reset.addEventListener('click', resetfn);