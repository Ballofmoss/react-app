import { CheckboxProps, Indicator, Root } from "@radix-ui/react-checkbox"
import { CheckIcon, DividerHorizontalIcon } from "@radix-ui/react-icons"

export const Checkbox = (props: CheckboxProps) => (
  <Root {...props}>
    {props.checked === "indeterminate" ||
      (props.checked === "unchecked" && <DividerHorizontalIcon />)}
    {props.checked && <CheckIcon />}
    <Indicator></Indicator>
  </Root>
)
