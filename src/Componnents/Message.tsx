import { useState } from "react";

function Message() {
  const items = ["Ethiopia", "somalia", "congo", "angola", "comoros"];

  const [selectItems, setSelectedItems] = useState(-1);

  return (
    <>
      <h1> List Items</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectItems === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedItems(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Message;
