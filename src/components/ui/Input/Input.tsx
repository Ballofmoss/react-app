import { ComponentProps, ReactNode} from "react"
import styles from "./Input.module.css"

interface IInputProps extends ComponentProps<"input"> {
  variant?: "primary" | "secondary"
  icon?: ReactNode
}

export const Input = ({
  variant = "primary",
  icon,
  className,
  ...props
}: IInputProps) => {

  return (
    <input
      {...props}
      className={`${styles.input} ${styles[variant]} ${className}`}
    />
  )
}
