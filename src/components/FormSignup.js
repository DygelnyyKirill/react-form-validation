const FormSignup = ({ title }) => {
    return (
        <div>
            <form className='form'>
                <h3>{ title }</h3>
                <div className='form-control'>
                <label>Login</label>
                    <input 
                        type='text'
                        placeholder='Enter your login'
                    />
                </div>
                <div className='form-control'>
                <label>Password</label>
                    <input 
                        type='text'
                        placeholder='Enter your password'
                    />
                </div>
                <input type='submit' value='Save Tasks' className='btn' />
                <span className="form-input">
                    Already have an account? Login <a href='#'>here</a>
                </span>
            </form>
        </div>
    )
}

FormSignup.defaultProps = {
    title: 'Get started with your to-do list now'
}

export default FormSignup