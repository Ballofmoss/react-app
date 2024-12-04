import { ComponentProps, PropsWithChildren, ReactNode, useEffect } from "react"
import styles from "./Button.module.css"

interface IButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary"
  icon?: ReactNode
}

export const Button = ({
  children,
  variant = "primary",
  icon,
  className,
  ...props
}: IButtonProps & PropsWithChildren) => {
  console.log(children)

  return (
    <button
      {...props}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {icon && (
        <div className={`${styles.icon} ${children ? "" : styles.onlyIcon}`}>
          {icon}
        </div>
      )}
      {children && <div>{children}</div>}
    </button>
  )
}
