import React, {useState} from 'react'

function BIO() {
    const [person, setPerson] = useState({
        name: 'Nikita',
        surname: 'Perepechin',
        age: 27,
        sex: 'male',
        interests: ['programming', 'RD']
    });

    const [form, setForm] = useState({
        name: '',
        surname: '',
        age: 0
    });

const [isError, setError] = useState(false);

    function handleInputChange(e) {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    function handleBtnClick(key) {
        if(!form[key]) {
            setError(true);
            return;
        }
        setError(false);
        setPerson({
            ...person,
            [key]: form[key]
        })
    }




return(
    <div>
        { isError ? (<p>Ошибка формы</p>) : '' }
        <div>
            <input
            type="text"
            name='name'
            value={form.name}
            onChange={handleInputChange} />
            <button onClick={() => handleBtnClick('name')}>
                Задать имя
            </button>
        </div>
        <div>
            <input
            type="text"
            name='surname'
            value={form.surname}
            onChange={handleInputChange} />
            <button onClick={() => handleBtnClick('surname')}>
                Задать фамилию
            </button>
        </div>
        <div>
            <input
            type="number"
            name='age'
            value={form.age}
            onChange={handleInputChange} />
            <button onClick={() => handleBtnClick('age')}>
                Задать возраст
            </button>
        </div>
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