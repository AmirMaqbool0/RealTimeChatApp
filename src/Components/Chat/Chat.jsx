import React, { useEffect, useState } from 'react';
import './style.css';
import { collection, getFirestore, orderBy, query, onSnapshot , addDoc,serverTimestamp} from "firebase/firestore";
import { app } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

const Chat = () => {
    const [chat, setChat] = useState([]);
    const db = getFirestore(app);
    const [sendMessage,setSendMessage] = useState()
    const [isUser,setIsUser] = useState()

    useEffect(() => {
        readData();
    }, []);

    const readData = async () => {
        const q = query(collection(db, "Messages"), orderBy("timestamp"))
        const unsubscribe = onSnapshot(q, snapshot => {
          setChat(snapshot.docs.map(doc => ({
            id: doc.id,
            message: doc.data()
          })))
        })
        return unsubscribe // Return unsubscribe function to clean up listener
    };
    
  console.log(chat)
     useEffect(()=>{
    onAuthStateChanged(auth,function(user){
        if (user){
            setIsUser(user)
            console.log(user)
        }
        else{
            setIsUser(null)
        }

    })
     },[])
   const send =() =>{
    const adddocref =collection(db,'Messages')
    addDoc(adddocref,{
     uid:isUser.uid,
     pohotoURL:isUser.photoURL,
     displayname:isUser.displayName,
     message:sendMessage ,
     timestamp:serverTimestamp()
    })
    setSendMessage('')
   }
   const signout =() =>{
    auth.signOut()
   }
   const sendbtn = (e) =>{
    if(e.key== 'Enter'){
        send()
    }
   } 
       return (
        <div className='chat-container'>
            <div className="header-container">
            <div className="header">
                <span>{isUser?.displayName}</span>
                <button onClick={signout}>SignOut </button>
            </div>
            </div>
         
    
            <div className="chat-box">
            {
                chat.map((item, key) => (
                    <div key={key}>
                        <div className={`${item.message.uid === isUser.uid ? 'chat' : 'other-chat'}`}>
                            <img src={item.message.pohotoURL} alt="" />
                        <p>{item.message.message}</p>
                      
                        </div>
                    </div>
                ))
            }
            
            </div>
            <div className="input-box">
                <input type="text" value={sendMessage} onChange={(e)=> setSendMessage(e.target.value)} onKeyUp={sendbtn} />
                <button onClick={send}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
