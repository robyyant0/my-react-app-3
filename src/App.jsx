 import React from "react";
 
const Button = (props) =>{
    return  (
           <button 
                className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`}
                type="submit"  > {props.children}
            </button>
    );
}

const ButtonVariant = (props) =>{
  const {children = ".....", variant = "bg-black"} = props;
  return  (
         <button 
              className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
              type="submit"  > {children}
          </button>
  );
}

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">

          <Button variant="bg-red-700" text="">Login</Button>
          <Button variant="bg-slate-700" text="">logout</Button>
          <ButtonVariant></ButtonVariant>
          <ButtonVariant>Register</ButtonVariant>
      </div>
    </div>
  )
}

export default App



 /*
 class ButtonSlate extends React.Component {
  render() {
    return  (
           <button 
                className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white"
                type="submit"  > Buy Now
            </button>
    );
  }
}

class ButtonBlack extends React.Component {
  render() {
    return  (
           <button 
                className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                type="submit"  > Buy Now
            </button>
    );
  }
}
*/