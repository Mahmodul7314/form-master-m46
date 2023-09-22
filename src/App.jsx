/* eslint-disable no-unused-vars */

import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFullForm from './components/StateFullForm/StateFullForm'

function App() {

  // const handleSignUpSubmit = data =>{
  //  console.log('sign up data', data);
  // }
  // const handleUpdateProfile = data =>{
  //  console.log('update profile', data);
  // }

  return (
    <>
     
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
       formTitle={'Profile Update'}
       handleSubmit={handleUpdateProfile}
        submitBtnText='Update'></ReusableForm> */}
    </>
  )
}

export default App
