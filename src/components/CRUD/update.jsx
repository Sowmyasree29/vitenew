import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Global } from "./crud";

function Update() {
    const [formData, setFormData] = useState({
        name: "",
        id: "",
        todo: ""
    });

    const location = useLocation();
    const todoItem = location.state?.todoItem; // Optional chaining to handle cases where state or todoItem might be undefined

    const dynamicpath = useParams();
    const { updatedTodo} = useContext(Global);

    useEffect(() => {
        if (todoItem) { 
            setFormData(todoItem);
        }
    }, [dynamicpath, todoItem]);

    function submitHandler(e) {
        e.preventDefault();
        if (formData && updatedTodo) {
            updatedTodo(formData);
        }
    }

    function changeHandler(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="name"
                    onChange={changeHandler}
                    placeholder="enter name"
                    value={formData.name} // Using formData to control the input value
                /><br />
                <input
                    type="text"
                    name="id"
                    onChange={changeHandler}
                    placeholder="enter id"
                    value={formData.id} // Using formData to control the input value
                /><br />
                <input
                    type="text"
                    name="todo"
                    onChange={changeHandler}
                    placeholder="enter todo"
                    value={formData.todo} // Using formData to control the input value
                /><br />
                <button>update</button>
            </form>
        </>
    );
}

export default Update;
