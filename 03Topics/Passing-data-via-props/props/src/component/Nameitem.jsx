import Item from "./Item";

function Nameitem({ item }) {
  return (
    <ul className="list-group">
      {item.map((name) => (
        <Item key={name} item={name} />
      ))}
    </ul>
  );
}

export default Nameitem;
