import { Checkbox } from "@radix-ui/react-checkbox"
import { Button, Input, Select } from "./ui"
import { PlusIcon } from "./ui/icons"
import { Typography } from "./ui/Typography/Typography"

export const Root = () => {
  return (
    <>
      <div>test</div>
      <Input placeholder="Плейсхолдер" />
      <Button icon={<PlusIcon />}>Жаба</Button>
      <Button icon={<PlusIcon />}></Button>
      <Typography className="ty54t5" tag="h1">
        Транс порт
      </Typography>
      <Typography tag="h2">Транс порт</Typography>
      <Typography tag="h3">Транс порт</Typography>
      <Typography>Транс порт</Typography>

      <Select>
        <Select.Trigger>Пиво</Select.Trigger>
      </Select>
      <label>
        <Checkbox />
        чекбокс
      </label>
    </>
  )
}
