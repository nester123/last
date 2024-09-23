import React from 'react'
import ReactDOM from 'react-dom'
//import Box from './App.jsx'


function Main(){
  let count = 0

  const [num, setNum] = React.useState(count)
  function add() {
    setNum(prevnum=> prevnum + 1)
  }
  function res() {
    setNum(0)
  }
  function sub() {
    setNum(prevnum=> prevnum - 1)
  }

  return <div>
    <h1>{num}</h1>
    <div className='no'>
    <button onClick={add}>add</button>
    <button onClick={res}>reset</button>
    <button onClick={sub}>subtract</button>
    </div>
  </div>
}

ReactDOM.render(<Main />, document.getElementById('root'))
