import React, {useState} from 'react'

function BIO() {
    const [person, setPerson] = useState({
        name: 'Nikita',
        surname: 'Perepechin',
        age: 27,
        sex: 'male',
        interests: ['programming', 'RD']
    });

    function handleNameInputChange(e) {
        setPerson({
            ...person,
            [key]: form[key]
        })
    }




return(
    <div>
        <input
        type="text"
        name=''
        value={person.name}
        onChange={handleNameInputChange} />
        <button onClick={handleSetNameBtnClick}>
            Задать имя
        </button>
        <p>Имя: {person.name}</p>
        <p>Фамилия: {person.surname}</p>
        <p>Возвраст: {person.age}</p>
        <p>Пол: {person.sex}</p>
        <div>Интересы: {person.interests.map(interest => (
            <p key={interest}>{interest}</p>
        )
        )}</div>
    </div>
)}

export default BIO