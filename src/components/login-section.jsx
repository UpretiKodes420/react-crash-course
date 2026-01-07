import LoginField from "./login-field"
import Mybutton from "./button"




export default function LoginSection() {
    return (
        <div className=" justify-center  mt-4 gap-4 p-5">
            <label className="text-4xl font-bold text-white">Login</label>
            <LoginField inputtype={"text"} fieldname={"username"} />
            <LoginField inputtype={"password"} fieldname={"password"} />
            <div className=" flex justify-center">
                <form >
                    <Mybutton label={"login"} type={"submit"} />
                    <Mybutton label={"signup"} type={"submit"} />
                </form>

            </div>

        </div>


    )
}