import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup 
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../store/slice/userSlice';
import { useAppDispatch, useAppSelector } from './redux-hooks';


export const useAuth = () => {
  const { email, token, id } = useAppSelector((state) => state.user);
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
  const auth = getAuth();
  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  };
  const handleRegistration = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
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
        console.log(error);
      });
  };
  return {
    handleLogin,
    handleRegistration,
    googleAuth,
  }
}