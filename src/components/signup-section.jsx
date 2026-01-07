import LoginField from "./login-field"
import Mybutton from "./button"

export default function SignupSection() {
    return (
        <div className=" justify-center  mt-4 gap-4 p-5">
            <label className="text-4xl font-bold text-white">Login</label>
            <LoginField inputtype={"text"} fieldname={"username"} />
            <LoginField inputtype={"password"} fieldname={"password"} />
            <div className=" flex justify-center">
                <Mybutton label={"login"} />
                <Mybutton label={"signup"} />
            </div>

        </div>


    )
}