import React from "react";
import { FixedSizeList as List } from "react-window";


const ListItem = ({ index, style }) => {
  return (
    <div style={style}>
      List Item {index}
    </div>
  );
};
const MyListComponent = () => {
  const itemCount = 1000; // Total number of items in the list
  const itemSize = 50; // Height of each item in the list

  const renderItem = ({ index, style }) => {
    return <ListItem index={index} style={style} />;
  };

  return (
    <List
      height={300} // Total height of the visible area
      itemCount={itemCount} // Total number of items in the list
      itemSize={itemSize} // Height of each item in the list
      width={300} // Total width of the visible area
    >
      {renderItem}
    </List>
  );
};

export default MyListComponent;
