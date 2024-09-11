import useCounter from "./counter";


function Counter({initialValue=2})
{
    const{count,increment,decrement,reset}=useCounter(initialValue)
return(
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
)
}
export default Counter;
