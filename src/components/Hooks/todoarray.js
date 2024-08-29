



export const TodoArray=()=>
{
    const todos=[]
    for(let i=1;i<10;i++)
    {
        const myObj={
            id:i,
            text:`Item is ${i}`
        }
        todos.push(myObj)
    }
    return todos
}
TodoArray();
