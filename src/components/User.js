import React from 'react'
import './user.css'

const User = ({id,email,name,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{name}</span>
            <span>{email}</span>
            <span>
                <div className="btn">
                <button>редактировать</button>
                <button onClick={handleDelete}>удалить</button>
                </div>
            </span>
        </div>
    )
}

export default User