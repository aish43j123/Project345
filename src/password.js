


import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
const Password = () => {
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
    
        }else if(name.value.length == 0 && pw.value.length == 0){
            alert('Please fill in email and password');
    
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
            alert('Password reset successfully');
    
        }
        // localStorage.setItem("user", JSON.stringify(user));
        // addUser(user);
        // return false;
      }
    
  

  return (
   <div>
<Button type="primary" onClick={showModal} className="cancelbtn" style={{ background: "white", color:"blue", borderColor:"white" }}>
        Forgot Password
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
             
              
              <div className="title">Forgot Password</div>
              {/* <h1>Register</h1> */}

              
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
                  placeholder="New Password"
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
   </div>
  );
};

export default Password;
