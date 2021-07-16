import useForm from './useForm'
import validate from './validateInfo'

const FormSignup = ({ title }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(validate)

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h3>{ title }</h3>
                <div className='form-control'>
                <label>E-Mail</label>
                    <input 
                        type='text'
                        placeholder='Enter your E-mail'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
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
                    {errors.password && <p>{errors.password}</p>}
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