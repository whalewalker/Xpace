import {useState} from "react";

const  SignIn = () =>{
    const [user, setUser] = useState({})

    const handleSubmit = (event) =>{
        event.preventDefault();
        setUser({email: '', password: ''})
    }

    const handleChange = (event) =>{
        const {value, name} = event.target;
        console.log(event.target)
        setUser({[name]:value})
    }

    return(
        <divn className="sign-in">
        <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form action="" onSubmit={handleSubmit}>
                <input type="email" name="email" value={user.email} onChange={handleChange} required/>
                <label htmlFor="email">Email</label>

                <input type="password" name="password" value={user.password} onChange={handleChange} required/>
                <label htmlFor="password">Password</label>

                <input type="submit" value="Submit form"/>
            </form>
        </divn>
    )
}

export default SignIn;