import Mybutton from "./components/button";
import { useCounter } from "../controller/count";

export default function App() {
  const { count, increase, decrease } = useCounter(0);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">{count}</h1>
      <div className="flex gap-2">
        <Mybutton label="Increase" onClick={increase} />
        <Mybutton label="Decrease" onClick={decrease} />
      </div>
    </div>
  );
}
