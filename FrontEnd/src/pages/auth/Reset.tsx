
function Reset(){
    return (
        <>
            <header className="login__header">
                <h1>Reset Password</h1>
            </header>
            <form className={"login__form"}>
                <div className="login__camp">
                    <span className={"login__error"}></span>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Enter your email..."
                    />
                </div>
                <button className={"login__button"}>Submit</button>
            </form>
        </>
    )
}

export default Reset;