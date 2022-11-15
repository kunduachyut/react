import logo from "./logo.svg";
import "./App.css";

function App() {
  const firtName = "Achyut";
  const lastName = "Kundu";
  const age = 22;
  const job = "Student";

  const getName=(firtName,lastName) => '${firtName} ${lastName}'
  const inputPlaceholder='ENter your details'
  const detailsInputbox =<input placeholder = {inputPlaceholder} autoconplete/>
  const marr=[1,2,3,4,5]
  const oBj={
    name:'Abir',
    age:55

  }
  return(
    <div className="App">
      <h3>Achyut kundu</h3>
      <h3>Firstname is : {firtName} {lastName}</h3>
      <h3>Get full name : {getName(firtName,lastName)}</h3>
      <h3>age : {oBj.age}</h3>
      {detailsInputbox}
      <br></br>

      {marr[0]}
 
    </div>
  )
}
export default App;
