
import React, { useState } from 'react';
// import './HowToList.css';

const addEventList = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formState, setFormState] = useState({
        event_name: '',
        event_host: '',
        event_date: ''
    })

    const changeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.addCard(formState);
        props.getList();
        setFormState({
            event_name: '',
            event_host: '',
            event_date: ''
        })
    }

    return(
        <form onSubmit={handleSubmit} className='addForm'>
            <p>Add Your event!</p>
            <label htmlFor='title'>Event Name: </label>
            <input type='text' name='title' value={formState.title} onChange={changeHandler} />
            <label htmlFor='author'>Event Host: </label>
            <input type='text' name='author' value={formState.author} onChange={changeHandler} />
            <label htmlFor='description'>Event Date: </label>
            <textarea name='description' value={formState.description} onChange={changeHandler} />
            <button type='submit'>Add</button>
        </form>
    )
}

export default addEventList;