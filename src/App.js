import './App.css';
import {useState} from "react";

function App() {
    //узнаем возраст по дате рождения
    function get_age(date) {
        return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
    }
    //data
    const [students,setStudent] = useState([{
        id:1,name: "Руслан",birtdayDate: "1992-05-22",gender : "Мужчина",age:30
    }]);
    const [name,setName] = useState("");
    const [gender,setGender]= useState();
    const [birtdayDate,setBirdayDate] = useState();
    const [age,setAge] = useState([30])

        //добавляем студента в таблицу
  const addNewStudent = (e) =>{
        e.preventDefault();
        const newStudent = {
            id:Date.now(),
            name:name,
            birtdayDate:birtdayDate,
            gender:gender,
            age:get_age(birtdayDate)
        }

        setStudent( [...students,newStudent]);
        setAge([...age,get_age(birtdayDate)])
    }
//расчет среднего возраста
    const getAverage = (numbers) => {
        const sum = numbers.reduce((acc, number) => acc + number, 0);
        const length = numbers.length;
        return  Math. round(sum / length);
    };





//обработчики инпутов
    const onChangeHandler = (e) => {
        setName(e.currentTarget.value)
    }
    const onChangeHandlerGender = (e) => {
        setGender(e.currentTarget.value)
    }
    const onChangeHandlerBDay = (e) => {
        setBirdayDate(e.currentTarget.value)
    }
  return (

    <div className="App">
            <form style={{margin:10,border: "solid 3px steelblue"}}>
            <p>
                <label > Имя студента :</label>
                <input onChange={onChangeHandler} value={name}  type="text" size="30"/>
            </p>
            <p>
                <label >Дата рождения :</label>
                <input value = {birtdayDate} onChange={onChangeHandlerBDay}  type="date"/>
            </p>
            <p>
                <label>Пол :</label>
                <select onChange={onChangeHandlerGender} value={gender}>
                    <option value="Мужчина">Мужчина</option>
                    <option value="Женщина">Женщина</option>
                </select>
            </p>

            <button onClick={addNewStudent}> Добавить</button>
            </form>
    <table style={{border: "2px solid steelblue", margin: 10,width:500}}>
        <tr>
        <td >ФИО студента</td>
        <td>Дата рождения</td>
        <td>Пол</td>
        <td>Возраст</td>
      </tr>
        {/*отрисовка даты*/}
      {students.map(el=>
          <tbody key={el.id}>
         <td >{el.name}</td>
        <td>{el.birtdayDate}</td>
         <td>{el.gender}</td>
         <td>{el.age}</td>

          </tbody>

      )}
    </table>
        <div style={{margin: 10}}>Cредний возраст : {getAverage(age)}</div>
    </div>
  );
}

export default App;
