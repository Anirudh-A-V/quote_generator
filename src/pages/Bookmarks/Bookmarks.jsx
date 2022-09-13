import React, { useEffect, useRef, useState } from "react";
import './Bookmarks.css';
import Navbar from '../../components/Navbar/Navbar';
import Quote from '../../components/Quote/Quote';
// import { useDispatch, useSelector } from "react-redux";
// import { addBookmark, deleteBookmark, getBookmarks } from "../../actions/bookmarkActions";
// import { useHistory } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { useTranslation } from "react-i18next";

const Bookmarks = () => {
    return (
        <div className="Book-App">
            <div className='Navbar-container'>
                <Navbar />
            </div>
            <div className='Quote-container'>
                <Quote />
                <Quote />
                <Quote />
                <Quote />
                <Quote />
            </div>
            
        </div>
    );
}

export default Bookmarks;