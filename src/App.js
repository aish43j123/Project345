import logo from "./logo.svg";
import "./App.css";
import { useState,useEffect } from "react";
import Register from "./register";
import Password from "./password";
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
function App() {
//   const [items, setItems] = useState(["ais"]);
// console.log(items);

  // const [open, setOpen] = useState(false);
   const [open1, setOpen1] = useState(false);
  function check() {
    var storedName = JSON.parse(localStorage.getItem('name'));
    var storedPw = JSON.parse(localStorage.getItem('pw'));

    var userName = document.getElementById("userName");
    var userPw = document.getElementById("userPw");
    var userRemember = document.getElementById("rememberMe");

    if (userName.value == storedName && userPw.value == storedPw) {
      alert("You are logged in.");
    } else {
      alert("Error on login");
    }
  }
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal1 = () => {
    setIsModalVisible(true);
  };

  const handleOk1 = () => {
    setIsModalVisible(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible(false);
  };
  function store() {
    var name = document.getElementById("name");
    var pw = document.getElementById("pw");
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');

    }
    // localStorage.setItem("user", JSON.stringify(user));
    // addUser(user);
    // return false;
  }

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('items'));
  //   if (items) {
  //    setItems(items);
  //   }
  // }, []);

  return (
    <div>
      <form>
   
        <div class="container">
        <div className="title">Login Form</div>
          {/* {open && <Register open={open} setOpen={setOpen}></Register>} */}
           {/* {open1 && <Password open1={open1} setOpen1={setOpen1}></Password>}  */}
          <div className="ml">
          <label for="uname">
            {/* <b>Username</b> */}
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            id="userName"
            required
          />
          <label for="psw">
            {/* <b>Password</b> */}
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="userPw"
            required
          />
          </div>
          <button type="submit" className="ac" onClick={() => check()}>
            Login
          </button>
          <div className="cc">
            <label>
              <input
                type="checkbox"
                name="remember"
                value="lsRememberMe"
                id="rememberMe"
              />{" "}
              Remember me
            </label>
          </div>
        </div>
        <div class="cn">
          NewUser?
          <Button type="primary" onClick={showModal} className="cancelbtn" style={{ background: "white", color:"blue", borderColor:"white" }}>
        Register
      </Button>
      <Modal title="" visible={isModalVisible}  onCancel={handleCancel} okButtonProps={{
          style: {
            display: "none",
          },
        }}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}>
      <form>
            <div class="container1">
             
              
              <div className="title">Register</div>
              {/* <h1>Register</h1> */}

              <h3>Please fill in this form to create an account.</h3>
              <hr />
              <div>
                <label for="usern">
                  {/* <b>Username</b> */}
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  id="name"
                
                />

                <label for="psw">
                  {/* <b>Password</b> */}
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  id="pw"
                  required
                />

                 <label for="psw-repeat">
                  {/* <b>Confirm Password</b> */}
                </label>
                <input
                  type="password"
                  placeholder="Repeat Password"
                  name="psw-repeat"
                  id="psw-repeat" 
                 
                /> 

                <button type="submit" class="ac" onClick={() => store()}>
                  Submit
                </button>
              </div>
            </div>
          </form>
      </Modal>
          {/* <Button type="primary" onClick={showModal} class="cancelbtn">
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible}  onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
          {/* <button type="submit" class="cancelbtn" onClick={setOpen}>
            Register
          </button> */}
            
      <button class="psw" onClick={setOpen1}>
            <Password/>
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

