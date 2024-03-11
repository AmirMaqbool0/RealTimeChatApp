import { useState } from 'react'
import  { auth } from './firebase'
import SignIn from './Components/SignIn/SignIn'
import Chat from './Components/Chat/Chat'
import { onAuthStateChanged } from 'firebase/auth'


function App() {
  const [isSignin, setIsSignin] = useState()
    onAuthStateChanged(auth,function(user){
      if(user){
        setIsSignin(true)
        console.log('SignIn')
      }
      else{
        setIsSignin(false)
        console.log('Not SignIn')
      }
    })
  return (
    <>
    {
      isSignin ? <Chat/> :  <SignIn/>
    }
   
    </>
  )
}

export default App
