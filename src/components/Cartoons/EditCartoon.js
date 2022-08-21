const EditCartoon = () => {

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }
    return (
        <div className='wrapper'>
                <div className='formContainer'>
                    <h3>Edit cartoon details</h3>
                    <form className='newCartoonForm' onSubmit={handleSubmit}>              
                        <label className='sr-only'>Name</label>
                        <input className='inputName' type='text' name='name' onChange={handleChange}></input>
                        {/* <label className='sr-only' >Description</label>
                        <textarea className='inputDescription' cols="20" rows="6" name='description' onChange={handleChange}/> */}
                        <button className='newCartoonBtn' type='click'>Edit</button>  
                    </form>
                </div>
            </div>
    );
};

export default EditCartoon;