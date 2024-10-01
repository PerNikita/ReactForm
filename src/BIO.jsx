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
        age: 0,
        sex: 'female',
        interests: ''
    })

    const [isError, setError] = useState(false)


    function handleInputChange(e) {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    function handleBtnClick(key) {
        let value = form[key];

        if(!value){
            setError(true);
            return;
        }
        setError(false);
        

        if(Array.isArray(person[key])) {
            value = [...person[key], form[key]]
        }

        setPerson({
            ...person,
            [key]: value
        })
    }

return(
    <div>
        {isError ? (<p>Ошибка формы</p>) : ''} 
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
        <p>
        Пол:
        <label>
          <input
          type="radio"
          name="sex"
          value="male"
          checked={form.sex === 'male'}
          onChange={handleInputChange} />
          Мужской
        </label>
        <label>
          <input
          type="radio"
          name="sex"
          value="female"
          checked={form.sex === 'female'}
          onChange={handleInputChange} />
          Женский
        </label>
        <button onClick={() => handleBtnClick('sex')}>
            Задать пол
        </button>
      </p>
      <div>
        <input
        type="text"
        name='interests'
        value={form.interests}
        onChange={handleInputChange} />
        <button onClick={() => handleBtnClick('interests')}>
            Добавить интересы
        </button>
        </div>
        </div>
        <p>Имя: {person.name}</p>
        <p>Фамилия: {person.surname}</p>
        <p>Возвраст: {person.age}</p>
        <p>Пол: {person.sex === 'male' ? 'мужской' : 'женский'}</p>
        <div>Интересы: {person.interests.map(interest => (
            <p key={interest}>{interest}</p>
        )
        )}</div>
    </div>
)}

export default BIO