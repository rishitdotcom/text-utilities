function Counter() {
    const [Count, setnumber] = useState(0);
  
  
    function increment() {
       setnumber(Count + 1);
  
     }
    function decrement() {
       setnumber(Count - 1);
  
     }
    return (
      <div>
        <p >{Count}</p>
        <button onClick={increment} > increment</button>
        <button onClick={decrement} > decrement</button>
      </div>
    );
  }

  export default Counter;