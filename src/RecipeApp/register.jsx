


function Register()
{
    function submitHandler(e)
    {
        e.preventDefault();
    }
    return(
        <div>
            <h2>this is register page</h2>
            <form onSubmit={submitHandler}>
              <input type="text" placeholder="Enter username" name="username" />
            </form>
        </div>

    )
}
export default Register;