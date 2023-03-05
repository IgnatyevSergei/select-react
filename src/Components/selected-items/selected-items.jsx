import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './selected-items.css'
import {removeCarInCollectionAC} from "../../actions/actions";

const SelectedItems = () => {
    const {carCollection} = useSelector(state => state)
    const dispatch = useDispatch()

    const removeCar = (e) => {
            const carId = Number(e.target.id);
            const newCollection = carCollection.filter((cars)=> cars.id !== carId)
        dispatch(removeCarInCollectionAC(newCollection))

        }


        return (
            carCollection.map((car) => {
                return <li onClick={removeCar} className='selectedItems' id={car.id} key={car.id}>
                    {car.carBrand}
                </li>
            })

        );
    };


    export default SelectedItems;