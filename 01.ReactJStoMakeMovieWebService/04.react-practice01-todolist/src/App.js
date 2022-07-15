import { useState, useEffect } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDo("");
        // setToDos(function (currentArray) { return...});
        // food = [1,2,3] + 4
        // [4, ...food] = [4,1,2,3]
        setToDos(currentArray => [toDo, ...currentArray]);
    }
    //console.log(toDos);
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

export default App;
