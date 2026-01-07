import LoginSection from "./components/login-section";

export default function App() {


  return (
    <div className=" h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="flex justify-center items-center ">


        <div className=" flex justify-center w-96 h-[28rem] mt-[5rem] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-br-[3vw] rounded-tl-[3vw] shadow-xl/30 ">
          <LoginSection />
        </div>

      </div>

    </div>

  );
}
