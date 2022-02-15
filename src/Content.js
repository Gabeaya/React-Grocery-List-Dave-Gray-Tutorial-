import React, {useState} from 'react'


const Content = () => {

  const [getter, setGetter] = useState('Default Name');
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    setGetter(names[int]);
  }
  const handleCount = () => {
    setCount(count + 1)
    console.log(count)
  }
  const handleClick2 = () => {
    console.log(count)
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }
  return (
    <main>
      <p onDoubleClick={handleClick2}>
        Hello {getter}
      </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleCount}>2</button>
      <button onClick={(e) => handleClick3(e)}>3</button>

    </main>
  )
}

export default Content;