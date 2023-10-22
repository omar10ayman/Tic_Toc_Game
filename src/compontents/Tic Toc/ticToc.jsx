import React, { useRef, useState } from 'react'
import "./ticToc.css"
import circle_img from '../../assets/circle.png'
import cross_img from '../../assets/cross.png'
export default function TicToc() {
  let [count,setcount]=useState(0)
  const [stop,setStop]=useState(false)
  const[whoWin,swtWin]=useState("")
  let [values,setValue]=useState(["","","","","","","","",""])
  const box1=useRef(null)
  const box2=useRef(null)
  const box3=useRef(null)
  const box4=useRef(null)
  const box5=useRef(null)
  const box6=useRef(null)
  const box7=useRef(null)
  const box8=useRef(null)
  const box9=useRef(null)
  const box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9]
  const onClick =(e,num)=>{
    console.log(count)
    if(stop){
      return 0;
    }else{
      if(count%2===0){
        values[num]="x"
        e.target.innerHTML=`<img src="${cross_img}"/>`
      setcount(++count)
      setValue(values)
    }else{
      values[num]="o"
      e.target.innerHTML=`<img src="${circle_img}"/>`
      setcount(++count)
      setValue(values)
    }
  }
  stopGame()
  winGame()
  console.log(values)
  }
  const stopGame =()=>{
    if(count===9){
      setStop(true)
    }
  }
  const winGame =()=>{
       if(values[0]===values[1] && values[1]===values[2] && values[2] !==""){
      whoWinner(values[2])
      box1.current.style.backgroundColor="green"
      box2.current.style.backgroundColor="green"
      box3.current.style.backgroundColor="green"
  }
  else if(values[3]===values[4] && values[4]===values[5] && values[5] !==""){
    whoWinner(values[3])
    box4.current.style.backgroundColor="green"
    box5.current.style.backgroundColor="green"
    box6.current.style.backgroundColor="green"
  }
  else if(values[6]===values[7] && values[7]===values[8] && values[8] !==""){
    whoWinner(values[8])
    box7.current.style.backgroundColor="green"
    box8.current.style.backgroundColor="green"
    box9.current.style.backgroundColor="green"
  }
  else if(values[0]===values[3] && values[3]===values[6] && values[6] !==""){
    whoWinner(values[6])
    box1.current.style.backgroundColor="green"
    box4.current.style.backgroundColor="green"
    box7.current.style.backgroundColor="green"
  }
  else if(values[1]===values[4] && values[4]===values[7] && values[7] !==""){
    whoWinner(values[7])
    box2.current.style.backgroundColor="green"
    box5.current.style.backgroundColor="green"
    box8.current.style.backgroundColor="green"
  }
  else if(values[2]===values[5] && values[5]===values[8] && values[8] !==""){
    whoWinner(values[8])
    box3.current.style.backgroundColor="green"
    box6.current.style.backgroundColor="green"
    box9.current.style.backgroundColor="green"
  }
  else if(values[0]===values[4] && values[4]===values[8] && values[8] !==""){
    whoWinner(values[8])
    box1.current.style.backgroundColor="green"
    box5.current.style.backgroundColor="green"
    box9.current.style.backgroundColor="green"
  }
  else if(values[6]===values[4] && values[4]===values[2] && values[2] !==""){
    whoWinner(values[2])
    box7.current.style.backgroundColor="green"
    box5.current.style.backgroundColor="green"
    box3.current.style.backgroundColor="green"
  }
  
  }
  const whoWinner=(winner)=>{
    setStop(true)
    if(winner==="x"){
      swtWin("x")
    }else(
      swtWin("o")
    )
  }
  const reset=()=>{
    setStop(false)
    // boxRef.current.innerHTML=""
    box_array.map(e=> e.current.innerHTML='')
    box_array.map(e=> e.current.style.backgroundColor="#1f3540")
    setValue(["","","","","","","","",""])
    setcount(0)
  }
  return (
    <div className='container'>
      <h1 style={{
        fontSize:"60px",
        color:"white",
        marginTop:"20px",

      }}>Tic Toc Game</h1>
      {count===9 && <div className='alert alert-danger '><h3>No One Win</h3></div>}
      {stop=== true && count !==9 ? <div className='alert alert-success'><h3>Congratulations, The Winner is {whoWin}</h3></div>:""}
      <div className="board">
        <div className="row1">  
          <div ref={box1} onClick={(e)=>onClick(e,0)} className="boxes complete"></div>
          <div ref={box2} onClick={(e)=>onClick(e,1)} className="boxes"></div>
          <div ref={box3} className="boxes" onClick={(e)=>onClick(e,2)}></div>
        </div>
        <div className="row2">
          <div ref={box4} className="boxes" onClick={(e)=>onClick(e,3)}></div>
          <div ref={box5} className="boxes" onClick={(e)=>onClick(e,4)}></div>
          <div ref={box6} className="boxes" onClick={(e)=>onClick(e,5)}></div>
        </div>
        <div className="row3">
         <div ref={box7} onClick={(e)=>onClick(e,6)} className="boxes"></div>
         <div ref={box8} onClick={(e)=>onClick(e,7)} className="boxes"></div>
         <div ref={box9} className="boxes" onClick={(e)=>onClick(e,8)}></div>
        </div>
      </div>
      <button onClick={reset} className='btn btn-outline-info px-4 py-2 rounded rounded-3'>Reset</button>
    </div>
  )
}
