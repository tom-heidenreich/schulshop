import { useEffect } from "react"

export default function PrinterEasterEgg() {
    useEffect(() => {
        window.location.href = 'https://www.youtube.com/watch?v=jeg_TJvkSjg&t=25s'
    }, [])
    return "How did you find me??"
}