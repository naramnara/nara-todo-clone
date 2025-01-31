import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";
const Filter = ()=>{
    const dispatch = useDispatch();
    const handleFilterChange = (event)=>{
        dispatch (setFilter(event.target.value));

    };
    return (
        <div>
            <select
            onChange={handleFilterChange}>
                <option value ="all">all</option>
                <option value="done">done</option>
                <option value ="in process">in process</option>
            </select>
        </div>
    );
};
export default Filter;