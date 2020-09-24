import React, { useEffect, useState } from 'react';
import eventCard from './eventCard';
import { connect } from 'react-redux';
import { getList, addCard, deleteCard, editCard, updateCard } from '../../actions/index';
// import './HowToList.css';
import addEventList from './addEventList';

const HowToList = ({ getList, list, isEditing, deleteCard, addCard, editCard, cardToEdit, updateCard }) => {

    const [editState, setEditState] = useState({
        event_name: '',
        event_host: '',
        event_date: ''
    })

    useEffect(() => {
        getList();
    }, [])

    useEffect(() => {
        setEditState(cardToEdit)
    }, [isEditing])


    const changeHandler = event => {
        setEditState({
            ...editState,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        updateCard(editState);
        getList();
    }

    return(
        <div>
            <addEventList addCard={addCard} getList={getList} />
            {list.map(eventReport => (
                <div key={eventReport.id}>
                    <eventCard EventReport={eventReport} deleteCard={deleteCard} editCard={editCard} />
                </div>
            ))}

            {isEditing && (
                <form onSubmit={submitHandler} className='addForm'>
                    Edit
                    <label htmlFor='event-name'>Event: </label>
                    <input type='text' name='event-name' value={editState.event_name} onChange={changeHandler}/>
                    <label htmlFor='event-host'>Host: </label>
                    <input type='text' name='event-host' value={editState.event_host} onChange={changeHandler}/>
                    <label htmlFor='event-date'>Date and Time: </label>
                    <textarea name='event-date' value={editState.event_date} onChange={changeHandler}/>
                    <button type='submit'>Submit</button>
                </form>
            )}
            <button onClick={() => console.log(cardToEdit)}>Test</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.list,
        isEditing: state.isEditing,
        cardToEdit: state.cardToEdit
    }
}

const mapDispatchToProps = { getList, addCard, deleteCard, editCard, updateCard }
// deleteCard

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HowToList);