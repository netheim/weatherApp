import React from 'react';
import icon from "../../assets/icons8-search.svg";
import classes from './MySearch.module.css'

const MySearch = ({props}) => {
    return (
        <div className={classes.search}>
            <a onClick={props.searchLocation} href="#" className={classes.searchIcon}>
                <img src={icon} alt="" width={30}/>
            </a>
            <input
                // onKeyPress={searchPressed}
                value={props.search}
                className={classes.searchInput}
                type="text"
                placeholder="Search..."
                onChange={event => props.setSearch(event.target.value)}
            />
        </div>
    );
};

export default MySearch;