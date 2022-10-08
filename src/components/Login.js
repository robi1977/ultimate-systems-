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
    <form onSubmit={handleSubmit(submitForm)} >
      <h3 className="form-title">Logowanie</h3>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <EnvelopIcon/>
        <input type="email" className="input-field" id="email" {...register("email", {required: true})} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Hasło</label>
        <LockIcon/>
        <input type="password" className="input-field" id="password" {...register("password", {required: true})} />
      </div>
      <button type="submit" className="button">Zaloguj się</button>
    </form>
  )
}
export default Login;