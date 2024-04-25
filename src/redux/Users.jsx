import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersList } from "./user-action";
import Pagination from "./Pagination";

const Users = () => {
  // const url = "https://jsonplaceholder.typicode.com/users";
  const url = "https://jsonplaceholder.typicode.com/posts";
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.userReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPge, SetPostsPerPage] = useState(10);
  const [users, setUsers] = useState();
  const [usersCopy, setUsersCopy] = useState();

  const indexOfLastPost = currentPage * postsPerPge; // 10
  const indexOfFirstPost = indexOfLastPost - postsPerPge; // 10-10
  const currentPosts = users && users.slice(indexOfFirstPost, indexOfLastPost); // 0-9 10 recors will display

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(reduxState);

  const getUsers = async () => {
    const response = await axios.get(url);
    setUsers(response.data);
    setUsersCopy(response.data);
    // dispatch(setUsersList(response.data));
    console.log(response.data);
  };

  // const getUsers = () => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => dispatch(setUsersList(data)));
  // };
  useEffect(() => {
    getUsers();
  }, []);

  const search = (e) => {
    const searchedEle = e.target.value;
    const filteredData = usersCopy.filter((data) =>
      data.title.toLowerCase().includes(searchedEle.toLowerCase())
    );
    if (searchedEle != "") {
      setUsers(filteredData);
    } else {
      setUsers(usersCopy);
    }
    // console.log(filteredData);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          search(e);
        }}
      />
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          {/* <th>Contact</th> */}
        </tr>

        {currentPosts &&
          currentPosts.map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.title}</td>
              {/* <td>{data.phone}</td> */}
            </tr>
          ))}
      </table>
      <Pagination
        length={users && users.length}
        postsPerPage={postsPerPge}
        handlePagination={handlePagination}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Users;
