import useCustomStorage from "./customhookstorage"


function LocalStorage()
{
    const{submitHandler,changeHandler,formData,data}=useCustomStorage()


    return(
        <div>
        <form onSubmit={submitHandler}>
            <input type="text" name="name" placeholder="enter name"  value={formData.name} onChange={changeHandler}/><br />
            <input type="text" name="id" value={formData.id} onChange={changeHandler} placeholder="enter id"/>
            <button>submit</button>

        </form>
        {
            data.length>0 &&(
                <div>
                    {
                        data.map(each=>
                            <>
                             <h2>{each.name}</h2>
                             <h2>{each.id}</h2>
                            </>
                           
                            
                        )
                    }
                </div>
            )
        }
        </div>
    )
}
export default LocalStorage