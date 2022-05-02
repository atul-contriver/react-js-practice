import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div >
      <div className="container bg-warning w-50 ml-0 mr-0 mx-auto text-center">
      <h1> Count Inc/Der </h1>

        <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
          {count}
        </h1>
        <div className="button__wrapper">
          <button className='btn btn-danger' onClick={() => setCount(count - 1)}>-</button>
          <button className='btn btn-danger' onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Counter