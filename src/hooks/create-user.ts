import { useAppDispatch } from './redux-hooks';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { getUsers } from '../store/slice/userSlice';


export const addUser = async (id: any, userInfo: any, userName: any) => {
  // const users = await getDocs(collection(db, 'users'));
  // const array: any = [];
  // users.forEach((doc) => {
  //     array.push(doc.data())
  // });
  // const currentUser = array.filter((user:any) => user.uid === id
  // );
  // if(currentUser.length !== 0) return null;
  
    try {
        const docRef = await addDoc(collection(db, "users"), {
          uid: id,
          name: userName,
          phone: userInfo.phoneNumber,
          photo: userInfo.photoURL,
          email: userInfo.email,
          status: null,
          aboutUser: null,
          location: null,
          contacts: [],
          dialogs: [],
          media: [],
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export const getUsersData = async ( id: any) => {
  const users = await getDocs(collection(db, 'users'));
  const array: any = [];
  users.forEach((doc) => {
      array.push(doc.data())
  });
  const currentUser = array.filter((user:any) => user.uid === id
  );
   return {
    allUsers: array,
    authUser: currentUser,
   }
}

