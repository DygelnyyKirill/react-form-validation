import useForm from './useForm'

const FormSignup = ({ title }) => {
    const { handleChange, values, handleSubmit } = useForm()

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h3>{ title }</h3>
                <div className='form-control'>
                <label>Login</label>
                    <input 
                        type='text'
                        placeholder='Enter your login'
                        name='login'
                        value={values.login}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-control'>
                <label>Password</label>
                    <input 
                        type='password'
                        placeholder='Enter your password'
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <input type='submit' value='Save Tasks' className='btn' />
                <span className="form-input ">
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