import Home from "./components/Home"
import About from "./components/About"

export default function App() {
  return(
    <>
      <h1>Hello Riya</h1>
      {/* <Home /> */}
      {0 < 1 ? <Home/> : <About/>};
    </>
  )
}