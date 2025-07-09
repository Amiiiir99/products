import Description from "./Descriprion"
import Image from "./Image"
import Name from "./Name"
import Price from "./Price"

const firstName  ="";

function App() {

  return (
    <div className="flex flex-col items-center">
      <div className="inline-block border-8 border-black">
        <div className="flex flex-col items-center ">
          <Name/>
          <Price/>
          <Description/>
          <Image/>
        </div>
        
      </div>
      <p className="mt-4 text-lg font-bold">hello, {firstName ? firstName : "there"}</p>
    </div>
    
    
    
      
    
  )
}

export default App
