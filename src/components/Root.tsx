import { useState } from "react"
import { Button } from "./ui"

export const Root = () => {
    const [isShow, setIsShow] = useState<boolean>(false) 
    const toggleJaba = () => {
        setIsShow((prev) => !prev)
    }
    return (
        <>
            <div>test</div>
            <Button onClick={toggleJaba}>Убери жабу</Button>
            {isShow ? <Button variant="secondary" >Жаба</Button> : <div>жаба пропала бля</div>}
            <div>test1</div>
            <div>test2</div>
            <div>test3</div>
        </>
    )
}