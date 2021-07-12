const FormSignup = ({ title }) => {
    return (
        <div>
            <form className='form'>
                <h3>{ title }</h3>
            </form>
        </div>
    )
}

FormSignup.defaultProps = {
    title: 'Get started with your to-do list now'
}

export default FormSignup