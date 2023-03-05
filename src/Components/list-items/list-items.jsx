import React from "react";
import "./list-items.css";
import {useDispatch, useSelector} from "react-redux";
import {addCarInCollectionAC} from "../../actions/actions";

const ListItems = () => {
  const {carModels, carCollection} = useSelector(state => state)
  const dispatch = useDispatch()


  const choiceOfCar = (e) => {
    const carId = Number (e.target.id);
    const index = carModels.findIndex(({ id }) => id === carId);
    const newCar = carCollection.includes(carModels[index])
    if (!newCar) {
      dispatch(addCarInCollectionAC(carModels[index]))
    }
  };

  return carModels.map(({ carBrand, id }) => {
    return (
      <li onClick={choiceOfCar} key={id} id={id} className="item">
        {carBrand}
      </li>
    );
  });
};

export default ListItems;
