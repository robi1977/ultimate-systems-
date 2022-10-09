import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../features/user/userAction";
import { EnvelopIcon } from "./EnvelopIcon";
import { LockIcon } from "./LockIcon";

const Login = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if(userInfo) {
      navigate('/dashboard');
    }
  }, [navigate, userInfo]);
  
  const submitForm = (data) => {
    dispatch(userLogin(data));
  }

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit(submitForm)} >
        <h3 className="form-title">Logowanie</h3>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <EnvelopIcon/>
          <input type="text" className="input-field" id="email" {...register("email", {required: true})} placeholder="piotrkowalski@gmail.com"/>
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Hasło</label>
          <LockIcon/>
          <input type="password" className="input-field" id="password" {...register("password", {required: true, min: 8})} placeholder="Minimum 8 znaków"/>
          <span></span>
        </div>
        <div className="form-group">
          <button type="submit" className="form-button" disabled={loading}>Zaloguj się</button>
        </div>
      </form>
    </div>
  )
}
export default Login;