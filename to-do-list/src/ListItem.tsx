interface Props {
    item: string;
    onDeleteItem: () => void;
}
function ListItem({ item, onDeleteItem }: Props) {
    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td>{item}</td>
            <td><button onClick={onDeleteItem} className="btn btn-danger">Delete</button></td>
        </tr>
    )
}

export default ListItem;