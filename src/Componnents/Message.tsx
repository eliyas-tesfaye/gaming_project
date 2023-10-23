import { Fragment } from "react";
import { MouseEvent } from "react";

function Message() {
  const items = ["Ethiopia", "somalia", "congo", "angola", "comoros"];
  const selectItems = 0;

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
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
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default Message;
