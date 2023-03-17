import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./selected-items.css";
import { removeCarInCollectionAC } from "../../actions/actions";

const SelectedItems = () => {
  const { selectedItem } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeItem = (e) => {
    dispatch(removeCarInCollectionAC(e));
  };

  return selectedItem.map((car) => {
    return (
      <li
        onClick={removeItem}
        className="selectedItems"
        id={car.id}
        key={car.id}
      >
        {car.carBrand}
      </li>
    );
  });
};

export default SelectedItems;
