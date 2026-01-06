import { useState } from "react"

export function useCounter(initial = 0) {
    const [count, setCount] = useState(initial)
    const increase = () => { setCount(prev => prev + 1) }
    const decrease = () => { setCount(prev => prev - 1) }

    return { count, increase, decrease }
}