import React, { useState } from 'react';

import './Login.css';
import { Redirect } from 'react-router';

const LoginPage = () => {
    const [authObj, setAuthObj] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [invalidemail, setInvalidemail] = useState(false);
    const [authLoading, setAuthLoading] = useState(false);
    const [redirectVar, setRedirectVar] = useState(false);

    const blogListData = [
        {
            title: "First blog",
            description: "This is First Blog when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            author: "Mark Babrey",
            createdDate: new Date(),
            id: 1
        },
        {
            title: "Second blog",
            description: "This is Second Blog when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            author: "Mark Babrey",
            createdDate: new Date(),
            id: 2
        },
        {
            title: "Third blog",
            description: "This is Third Blog when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            author: "Mark Babrey",
            createdDate: new Date(),
            id: 3
        },
        {
            title: "Fourth blog",
            description: "This is Fourth Blog when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            author: "Mark Babrey",
            createdDate: new Date(),
            id: 4
        },
        {
            title: "Fith blog",
            description: "This is Fith Blog when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            author: "Mark Babrey",
            createdDate: new Date(),
            id: 5
        },
        {
            title: "Sixth blog",
            description: "This is Sixth Blog when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            author: "Mark Babrey",
            createdDate: new Date(),
            id: 6
        },
        {
            title: "Seventh blog",
            description: "This is Seventh Blog when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            author: "Mark Babrey",
            createdDate: new Date(),
            id: 7
        },
        {
            title: "Eight blog",
            description: "This is Eight Blog when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            author: "Mark Babrey",
            createdDate: new Date(),
            id: 8
        },
        {
            title: "Nineth blog",
            description: "This is Nineth Blog when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            author: "Mark Babrey",
            createdDate: new Date(),
            id: 9
        },
    ]

    const setDataForAuth = (value, name) => {
        if (name === 'email') {
            let re = /[^@]+@[^@]+\.[^@]+/;
            if (re.test(value)) {
                authObj[name] = value;
                setAuthObj({ ...authObj });
                setInvalidemail(false);
            } else {
                authObj[name] = value;
                setAuthObj({ ...authObj });
                setInvalidemail(true);
            }
        } else {
            authObj[name] = value;
            setAuthObj({ ...authObj });
        }
    }

    const submit = () => {
        setSubmitted(true);
        if (!authObj.password || !authObj.email || invalidemail) {
            return;
        } else {
            setAuthLoading(true);
            setSubmitted(false);
            localStorage.setItem('userData', JSON.stringify(authObj));
            localStorage.setItem('blogData', JSON.stringify(blogListData))
            setAuthLoading(false);
            setRedirectVar(true);
        }

    }

    if (redirectVar) {
        return (<Redirect to="/home" replace />);
    }

    return (
        <div className="signinWrapper">
            <div className="loginPage">
                <div className="loginLbl">Sign In</div>
                <div className="spacing">
                    <div className="inputLable">
                        <label>Email</label>
                    </div>
                    <input
                        onChange={e => setDataForAuth(e.target.value, "email")}
                        autoComplete="off"
                        className="input"
                        placeholder="Enter email"
                        value={authObj.email ? authObj.email : ""}
                    />
                    {invalidemail && (
                        <div className="errorMsg">Enter a valid email</div>
                    )}
                    {submitted && !authObj.email && (
                        <div className="errorMsg">
                            Email is required<sup>*</sup>
                        </div>
                    )}
                </div>

                <div className="spacing">
                    <div className="inputLable">
                        <label>Password</label>
                    </div>
                    <input
                        onChange={e => setDataForAuth(e.target.value, "password")}
                        autoComplete="off"
                        className="input"
                        type="password"
                        placeholder="Enter password"
                        value={authObj.password ? authObj.password : ""}
                    />
                    {submitted && !authObj.password && (
                        <div className="errorMsg">
                            Password is required<sup>*</sup>
                        </div>
                    )}
                </div>

                <div className="spacing">
                    <button className="button" onClick={() => submit()}>
                        {authLoading ? (
                            <i className="fa fa-spinner fa-spin" size="sm"></i>
                        ) : null}{" "}
                        Sign In
              </button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;