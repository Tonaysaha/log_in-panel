
function App() {
  

  return (
    <>
    
      <div className='py-4'>
    < h1 className="text-5xl font-bold text-center">Counter_Application</h1>
</div>
     
    </>
  )
}

export default App
// import { useState} from 'react'

// import image from '../public/img/background.jpg'
// function App() {
//   const [count,setCount]=useState(0);
//   // const [box,setBox]=useState(false)

//   const HandleIncrease=()=>{
//     console.log(count)
//     setCount(count+1)
//   }
//   const HandleDecrease=()=>{
//     console.log(count)
//     if(count>0){
//       setCount(count-1)
//     }
//   }
// return (

//   <div className="bg-[url('../public/img/background.jpg')]">
//  <div className='py-4'>
//   < h1 className="text-5xl font-bold text-center">Counter_Application</h1>
//   <div className="flex justify-center  gap-5 mt-8">
//     <h className=" text-4xl py-5 bg-grey-100 w-[200px] h-[100px] text-center font-bold my-4 border-2 border-black rounded-md" > {count} </h>
//   </div>

//   <div className="  flex justify-center gap-5 mt-8" > 
//   <button onClick={HandleIncrease} className="border-2 border-grey-600 bg-green-500 text-white font-bold rounded-md p-2 "> Increase </button>
//   <button onClick={HandleDecrease} className="border-2 bg-red-600 text-white font-bold rounded-md p-2 border-white-500" > Decrease </button>
//   </div>
  
//   </div>
//   </div>
//   // {box&&<div className='h-[50px] rounded-md w-[50px] bg-red-400 border-2'></div>}
// )