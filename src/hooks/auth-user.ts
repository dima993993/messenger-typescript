import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { setUser, checkError } from '../store/slice/authSlice';
import { getUsers } from '../store/slice/userSlice';
import { addUser, getUsersData } from './create-user';
import { useAppDispatch, useAppSelector } from './redux-hooks';

export const useAuth = () => {
  const { email, token, id } = useAppSelector((state) => state.auth);
  return {
    isAuth: !!email,
    token,
    email,
    id,
  };
};

export const useAuthorization = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth: any = getAuth();
  
  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {   
        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          }),
        );
        dispatch(checkError({
          error: false,
        }));
        navigate("/");
      })
      .catch(() => {
        dispatch(checkError({
          error: true,
        }))  
      });
  };
  const handleRegistration = (email: string, password: string, userName: string | undefined) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          })
        );
        dispatch(checkError({
          error: false,
        })) 
        
        
        navigate("/");
      })
      .catch(() => {
        dispatch(checkError({
          error: true,
        })) 
      });
  };
  const provider = new GoogleAuthProvider();
  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          })
        );
        navigate("/");
      })
      .catch((error) => { 
          
      });
  };
 
  
  return {
    handleLogin,
    handleRegistration,
    googleAuth,
  }
}