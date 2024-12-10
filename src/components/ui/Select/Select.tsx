import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import styles from "./Select.module.css"
import {
  Root,
  Portal,
  Trigger,
  Item,
  Group,
  Content,
  Value,
  ItemText,
  ItemIndicator,
  Icon,
  Viewport,
} from "@radix-ui/react-select"
import { ComponentProps, forwardRef, PropsWithChildren } from "react"

const Select = ({ children }: PropsWithChildren) => {
  return (
    <Root>
      {children}
      <Portal>
        <Content
          collisionPadding={0}
          position="popper"
          className={styles.content}
        >
          <Viewport>
            <Group>
              <SelectItem className={styles.selectItem} value="test">
                тест
              </SelectItem>
            </Group>
          </Viewport>
        </Content>
      </Portal>
    </Root>
  )
}

Select.Trigger = ({ children }: PropsWithChildren) => {
  return (
    <Trigger>
      <div className={styles.trigger}>
        <Value placeholder={children} />
        <Icon>
          <ChevronDownIcon />
        </Icon>
      </div>
    </Trigger>
  )
}

interface ISelectItemProps extends ComponentProps<"div"> {
  value: string
}

const SelectItem = forwardRef<HTMLDivElement, ISelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Item {...props} ref={forwardedRef}>
        <ItemText>{children}</ItemText>
        <ItemIndicator>
          <CheckIcon />
        </ItemIndicator>
      </Item>
    )
  },
)

export { Select }
