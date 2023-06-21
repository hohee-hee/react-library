import "./App.css";
import MyButton from "./primitive/MyButton";
import MyInput from "./primitive/MyInput";
function App() {
  return (
    <>
      <MyButton
        value="버튼"
        color="black"
        background="#ffffff"
        callback={() => {
          alert("gut");
        }}
      ></MyButton>
      <MyButton></MyButton>
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
