import React from "react";
import "./list-items.css";
import { useDispatch, useSelector } from "react-redux";
import { addCarInCollectionAC } from "../../actions/actions";

const ListItems = () => {
  const { listItem} = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddItem = (e) => {
     dispatch(addCarInCollectionAC(e));
    
  };

  return listItem.map(({ carBrand, id }) => {
    return (
      <li onClick={handleAddItem} key={id} id={id} className="item">
        {carBrand}
      </li>
    );
  });
};

export default ListItems;
