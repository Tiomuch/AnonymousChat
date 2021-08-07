import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <div className="main-text">
        Choose a topic
      </div>
      <div className="main-buttons-container">
        <button className="main-button">Sport</button>
        <button className="main-button">Science</button>
        <button className="main-button">Finance</button>
        <button className="main-button">Nature</button>
      </div>
    </>
  )
}

export default App
