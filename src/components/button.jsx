


export default function Mybutton({ label, onClick }) {


    return (
        <main>

            <button className="bg-sky-500 hover:bg-purple-700 rounded-xl p-2 ml-3" onClick={onClick} >{label}</button>


        </main>

    )
}