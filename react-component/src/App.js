import "./App.css";
import MyButton from "./primitive/MyButton";
import MyInput from "./primitive/MyInput";
function App() {
  return (
    <>
      <MyButton className="danger"></MyButton>
      <MyButton className="warning"></MyButton>
      <MyButton className="primary"></MyButton>
      <MyButton className="secondary"></MyButton>
      <MyButton className="success"></MyButton>
      <MyButton className="info"></MyButton>
      <MyButton className="light"></MyButton>
      <MyButton className="neutral"></MyButton>
      <MyButton className="highlight"></MyButton>
      <MyButton className="neutral2"></MyButton>
      <br></br>
      <MyInput
        type="text"
        name="name"
        value=""
        width="200px"
        height="40px"
      />
      <MyInput
        type="number"
        name="age"
        value=""
        width="200px"
        height="40px"
      />
    </>
  );
}

export default App;
