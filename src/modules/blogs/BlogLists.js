import React, { useState, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import {
  getAllDataAction
} from '../../redux/modules/blogs/blogs.actions';

import './BlogLists.css';


const BlogsList = (props) => {
  const { getAllDataAction } = props;
  const [allData, setAllData] = useState([]);
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    let x = localStorage.getItem('blogData');
    let authData = localStorage.getItem('userData');
    if (JSON.parse(x).length > 0) {
      getAllDataAction(JSON.parse(x));
    }
    if (Object.keys(JSON.parse(authData)).length > 0) {
      setUserObj({ ...JSON.parse(authData) })
    }

    // eslint-disable-next-line
  }, []);

  const blogsDatResp = useSelector((state) => (
    state.Home.GetAllData ? state.Home.GetAllData : {}
  ));
  useEffect(() => {
    if (blogsDatResp) {
      setAllData(blogsDatResp);
    }

  }, [blogsDatResp]);

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
        <div className="addBlogs"><Link to={`/addBlog`}><button className="addBlogButton">Add Blog</button></Link></div>
        <div className="blogContainer">
          {allData && allData.length > 0 && allData.map((a, i) => (
            <div key={i} className="blogBox">
              <h4 className="blogTitle">{a.title}</h4>
              <div className="blogAuthor">Created Date: {moment(a.createdDate).format('dd-mm-yyy hh:mm:ss')} &nbsp;&nbsp;&nbsp; Author: {a.author} </div>
              <div className="blogDescription">{a.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  GetAllData: state.Home.GetAllData,
}
);

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getAllDataAction,
  }, dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(BlogsList);
