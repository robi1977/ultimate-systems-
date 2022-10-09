import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EnvelopIcon } from "./EnvelopIcon";
import { LockIcon } from "./LockIcon";
import { registerUser } from "../features/user/userAction";

const Register = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  )
  const dispatch = useDispatch();
  
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  useEffect(() => {
    if(success) navigate('/login');

    if(userInfo) navigate('/dashboard');
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    if (data.password !== data.confirmPassword) {
      //FIXME: przerzucenie do errors i return
      alert("Różne hasła");
      return 
    }

    data.email = data.email.toLowerCase();
    //FIXME: usunąć console.log
    console.log(data);
    dispatch(registerUser(data));
  }

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit(submitForm)} >
        <h3 className="form-title">Zaczynamy!</h3>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <EnvelopIcon/>
          <input type="email" className="input-field" id="email" {...register("email", {required: true})} placeholder="piotrkowalski@gmail.com"/>
          {/* FIXME: dokończyć spany z informacją o błędach */}
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Hasło</label>
          <LockIcon/>
          <input type="password" className="input-field" id="password" {...register("password", {required: true, min: 8})} placeholder="Minimum 8 znaków"/>
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="passwordConfirm">Powtórz hasło</label>
          <LockIcon/>
          <input type="password" className="input-field" id="confirmPassword" {...register("confirmPassword", {required: true, min: 8})} placeholder="Minimum 8 znaków"/>
          <span></span>
        </div>
        <div className="form-group">
          <button type="submit" className="form-button" disabled={loading}>Zarejestruj się</button>
        </div>
      </form>
    </div>
  );
}

export default Register;