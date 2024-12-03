import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Root } from "./components/Root"

const rootNode = document.querySelector("#root")
if(rootNode) {
  createRoot(rootNode).render(<StrictMode><Root></Root></StrictMode>)
}
 