import TestButton from './components/TestButton'
import './styles/style.css'

function App() {

  return (
    <div className='bg-blue-500 w-full h-screen mx-auto'>
      <div className="flex flex-col mx-auto w-[50%]">
        <div className="mt-50 w-75 h-20 bg-white flex items-center justify-center mx-auto border-b-10 border-r-10">
          <p className='text-center font-semibold text-[50px]'>garçom</p>
        </div>
        <div className="mx-auto">
          <br></br>
          <TestButton text_btn={"Cadastro"}></TestButton>
          <br></br>
          <TestButton text_btn={"Login"}></TestButton>
        </div>
    </div>
    </div>
  )
}

export default App
