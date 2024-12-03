import { ComponentProps, PropsWithChildren, ReactNode, useEffect } from "react"
import styles from "./Button.module.css"
interface IButtonProps extends ComponentProps<'button'> {
    variant?: "primary" | "secondary"
}

export const Button = ({children, variant = "primary", ...props}:IButtonProps & PropsWithChildren) => {
    useEffect(()=>{
        console.log("init")
        return() => {
            console.log("unMount") 
        }
    }, [])
    return <button className={styles[variant]} {...props}>{children}</button>
}