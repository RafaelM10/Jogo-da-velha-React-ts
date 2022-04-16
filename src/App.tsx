import './App.css'

function App() {

  const getSquare = () => {
    return new Array(9).fill(true);
  }

  return (
    <div className="container">
      <div className='board'>
      {getSquare().map((_, i) => (
        <div className="celula">X</div>
      ))}
      </div>
    </div>
  )
}

export default App
