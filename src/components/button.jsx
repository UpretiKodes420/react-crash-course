export default function Mybutton({ label, type }) {


    return (

        <button className="bg-white hover:bg-purple-300 rounded-xl pl-5 pr-5 pt-2 pb-2 mt-10 mr-3 " type={type} >{label}</button>


    )
}