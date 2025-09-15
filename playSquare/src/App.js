import { useState } from 'react';
// 需要将展示的内容设置为响应式可变的

// 需要判断游戏状态，那么就需要对多个Square进行管理，就需要一个父组件对各个子组件的状态统一管理，那么就是棋盘组件
// 要从多个子组件收集数据，或让两个子组件相互通信，请改为在其父组件中声明共享 state。父组件可以通过 props 将该 state 传回给子组件。这使子组件彼此同步并与其父组件保持同步。
// 所以得在棋盘组件里面设置一个响应式数组，然后通过props将数组传给每个子组件
// useState 是通过追踪调用 set 函数来触发更新

function Square({value, onClick}) {
  // const [value,setValue] = useState(initValue);
  /*
  function handleClick() {
    if(value === '') setValue('X');
  }
  */

  return (
    <button className="square" onClick={onClick}>{value}</button>
  )
}

export default function Board() { // 向外暴露 默认主函数
  const [squares,setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice(); // 需要创建副本，如果直接修改原数组，会导致数组的标志-引用指针不变，而React是用Object.is浅比较导致无法触发更新
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)}/> {/* 得套一层箭头函数用回调，因为如果不套的话就直接调用了，相当于传入了handleClick(0)的返回值undefined*/}
        <Square value={squares[1]} onClick={() => handleClick(1)}/>
        <Square value={squares[2]} onClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)}/>
        <Square value={squares[4]} onClick={() => handleClick(4)}/>
        <Square value={squares[5]} onClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)}/>
        <Square value={squares[7]} onClick={() => handleClick(7)}/>
        <Square value={squares[8]} onClick={() => handleClick(8)}/>
      </div>
    </>
  )
}
