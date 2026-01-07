import LoginField from "./login-field";
import Mybutton from "./button";
import { useForm } from "react-hook-form";
export default function LoginSection() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className=" justify-center  mt-4 gap-4 p-5">
      <label className="text-4xl font-bold text-white">Login</label>
      <LoginField
        inputtype={"text"}
        fieldname={"username"}
        {...register("userName")}
      />
      <LoginField
        inputtype={"password"}
        fieldname={"password"}
        {...register("Password", { "required": true, "maxLength": 20 })}
      />
      <div className=" flex justify-center">
        <form onSubmit={handleSubmit(validation)}>
          <Mybutton label={"login"} type={"submit"} />
          <Mybutton label={"signup"} type={"submit"} />
        </form>
      </div>
    </div>
  );
}
function validation() {
  console.log("Data submitted sucessfully")
}
