import "bootstrap/dist/css/bootstrap.min.css"
import List from "./List"


function App() {

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <h1>To Do List</h1>
            <hr />
            <List />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
