import { ComponentProps, PropsWithChildren } from "react"
import styles from "./Typography.module.css"

interface ITypographyProps extends ComponentProps<"p"> {
  tag?: "h1" | "h2" | "h3" | "p"
}

export const Typography = ({
  tag = "p",
  children,
  className,
  ...props
}: ITypographyProps & PropsWithChildren) => {
  if (tag === "p") {
    return (
      <p {...props} className={`${styles.paragraph} ${className}`}>
        {children}
      </p>
    )
  }

  if (tag === "h1") {
    return (
      <h1 {...props} className={`${styles.h1} ${className}`}>
        {children}
      </h1>
    )
  }

  if (tag === "h2") {
    return (
      <h2 {...props} className={`${styles.h2} ${className}`}>
        {children}
      </h2>
    )
  }

  if (tag === "h3") {
    return (
      <h3 {...props} className={`${styles.h3} ${className}`}>
        {children}
      </h3>
    )
  }
}
