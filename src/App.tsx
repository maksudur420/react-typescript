import CountReducer from "./components/CountReducer"
import Heading from "./components/Heading"
//import Section from "./components/Section"
// import Counter from "./components/Counter"

// import List from './components/List'


function App() {
  

  return (
    <>
     <Heading title={`Hello! World`}></Heading>
     {/* <Section message={`here goes some message`}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia modi quos possimus veritatis et eum quasi minima, tenetur, distinctio enim dolorum doloribus eos sint nihil laudantium porro! Autem, delectus nostrum!</p>
     </Section> */}
     <CountReducer>{(num:number)=>{
      return(`My Number is ${num}`)
     }}</CountReducer>

     {/* <List items={['Tea','Coffee','Coke']} render={(item:string)=>{
        return(
          <span>{item}</span>
        )
     }}></List> */}
    </>
  )
}

export default App
