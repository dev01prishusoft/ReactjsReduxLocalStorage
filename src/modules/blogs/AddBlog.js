import React, { useState, useEffect } from "react"
import { Redirect } from "react-router";

import './BlogLists.css';
import { Link } from "react-router-dom";

const AddBlogPage = () => {
    const [singleObj, setSingleObj] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [blodDataArr, setBlogDataArr] = useState([]);
    const [redirectVar, setRedirectVar] = useState(false);
    const [userObj, setUserObj] = useState({});

    useEffect(() => {
        let x = localStorage.getItem('blogData');
        let authData = localStorage.getItem('userData');
        if (JSON.parse(x).length > 0) {
            setBlogDataArr([...JSON.parse(x)]);
        }
        if (Object.keys(JSON.parse(authData)).length > 0) {
            setUserObj({ ...JSON.parse(authData) })
        }

        // eslint-disable-next-line
    }, []);

    const setData = (value, name) => {
        singleObj[name] = value;
        setSingleObj({ ...singleObj });
    }

    const submit = () => {
        setSubmitted(true);
        if (!singleObj.title || !singleObj.description) {
            return
        } else {
            blodDataArr.push({ ...singleObj, createdDate: new Date(), author: userObj.email });
            setBlogDataArr([...blodDataArr]);
            setSubmitted(false);
            localStorage.setItem('blogData', JSON.stringify(blodDataArr));
            setRedirectVar(true);
        }

    }

    if (redirectVar) {
        return (<Redirect to="/home" replace />);
    }

    return (
        <div className="blogWrapper">
            <div className="logOutDiv">
                <h3>Blogs</h3>
                <div className="logoutPart">
                    <Link to={`/`}>
                        <i className="fa fa-sign-out logoutIcon" aria-hidden="true"></i>
                    </Link>
                    <div className="emailDetail"><span className="userEmail">Login as: </span>{userObj.email}</div>
                </div>
            </div>
            <div className="secondPortion">
                <div className="Addlbl">Create Blog</div>
                <div className="formContent">
                    <div className="spacing">
                        <div className="formsGroup">
                            <label className="addBlogLBL">Title: </label>
                            <div style={{ width: "100%" }}>
                                <input
                                    onChange={e => setData(e.target.value, "title")}
                                    autoComplete="off"
                                    className="input"
                                    placeholder="Enter title"
                                    value={singleObj.title ? singleObj.title : ""}
                                />
                                {submitted && !singleObj.title && (
                                    <div className="errorMsg">
                                        Title is required<sup>*</sup>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                    <div className="spacing">
                        <div className="formsGroup">
                            <label className="addBlogLBL">Description: </label>
                            <div style={{ width: "100%" }}>
                                <textarea
                                    onChange={e => setData(e.target.value, "description")}
                                    autoComplete="off"
                                    className="textarea"
                                    placeholder="Enter description"
                                    value={singleObj.description ? singleObj.description : ""}
                                />
                                {submitted && !singleObj.description && (
                                    <div className="errorMsg">
                                        Description is required<sup>*</sup>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                    <div className="spacing">
                        <div className="formsGroup">
                            <label className="addBlogLBL"></label>
                            <div className="displyFlex" style={{ width: "100%" }}>
                                <button className="addBtn" onClick={() => submit()}>
                                    Add Blog
                                    </button>
                                <Link to={`/home`}>
                                    <button className="addBtn" style={{ marginLeft: "5px" }}>
                                        Cancel
                            </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBlogPage;