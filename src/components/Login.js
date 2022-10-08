import { useForm } from "react-hook-form";
import { EnvelopIcon } from "./EnvelopIcon";
import { LockIcon } from "./LockIcon";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    //FIXME: do usunięcia console.log 
    console.log(data);
  }

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit(submitForm)} >
        <h3 className="form-title">Logowanie</h3>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <EnvelopIcon/>
          <input type="email" className="input-field" id="email" {...register("email", {required: true})} placeholder="piotrkowalski@gmail.com"/>
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Hasło</label>
          <LockIcon/>
          <input type="password" className="input-field" id="password" {...register("password", {required: true})} placeholder="Minimum 8 znaków"/>
          <span></span>
        </div>
        <div className="form-group">
          <button type="submit" className="form-button">Zaloguj się</button>
        </div>
      </form>
    </div>
  )
}
export default Login;