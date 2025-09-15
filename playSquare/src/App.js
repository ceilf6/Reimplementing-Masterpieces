import { useState } from 'react';
// 需要将展示的内容设置为响应式可变的

function Square({initValue}) {
  const [value,setValue] = useState(initValue);

  function handleClick() {
    if(value === '') setValue('X');
  }

  return (
    <button className="square" onClick={handleClick}>{value}</button>
  )
}

export default function Board() { // 向外暴露 默认主函数
  return (
    <>
      <div className="board-row">
        <Square initValue="" />
        <Square initValue="" />
        <Square initValue="" />
      </div>
      <div className="board-row">
      <Square initValue="" />
        <Square initValue="" />
        <Square initValue="" />
      </div>
      <div className="board-row">
        <Square initValue="" />
        <Square initValue="" />
        <Square initValue="" />
      </div>
    </>
  )
}
