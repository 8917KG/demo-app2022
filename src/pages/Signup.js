import { useState, useEffect } from "react"

export function Signup (props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassowrd] = useState(false)
    

    useEffect(() => {
        // check the value of email 
        // check if email contains @ and it's no the first character
        if (email.length >= 5 && email.indexOf('@') > 0){
            setValidEmail(true)
        }
        else {
            setValidEmail(false)
        }
    }, [email])

    useEffect(() => {
        if(password.length >= 8){
            setValidPassowrd(true)
        }
        else {
            setValidPassowrd(false)
        }
        

    },[password])

    return (
        <div className="container">
            <div className="row">
                <form className="col-md-4 offset-md-4"> 
                    <h2>Sign Up For an Account</h2>
                    <div className="mb-3">
                        <label htmlFor="useremail">Email (valid email address)</label>
                        <input 
                            type ="email" 
                            id = "useremail" 
                            placeholder="you@domain.com" 
                            className="form-control" 
                            value={email}
                            onChange= {(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userpw">Password (minimum 8 characters)</label>
                        <input 
                            type ="password" 
                            id = "userpw" 
                            placeholder="" 
                            className="form-control" 
                            value = {password}
                            onChange = {(event ) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="d-grid">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled = {(validEmail && validPassword) ? false:true}>Sign up
                        </button>
                    </div> 
                    
                </form>
            </div>
        </div>
    )
}