import { useState } from "react";
import ListItem from "./ListItem";


function List() {
    const [list, setList] = useState<string[]>([]);
    const [item, setItem] = useState("");

    const handleAddItem = () => {
        const newList = [...list];
        const newItem = item;
        if (newItem != "") {
            setList([...newList, newItem]);
        }
        setItem("");
    }

    const deleteItem = (index: number) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }


    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-8">
                            <input id="txtitem" type="text" value={item} onChange={e => setItem(e.target.value)} style={{ width: "70%" }} />
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary" onClick={handleAddItem}>Add to List</button>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Check</th>
                        <th scope="col">Item</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, index) =>
                            <ListItem item={item} onDeleteItem={() => deleteItem(index)} key={index} />
                        )
                    }

                </tbody>
            </table>

        </>
    )
}

export default List;
