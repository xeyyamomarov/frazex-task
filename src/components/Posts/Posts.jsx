import "./style.css";
import { useState, useEffect } from "react";
import { Table } from "../Table";
import { Pagination } from "antd";
import axios from "axios";
export const Posts = () => {
  const [postsTable, setPostsTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPostsTable(res.data);
    });
  }, []);

  const columns = [
    { heading: "UserId", value: "id" },
    { heading: "Title", value: "title" },
    { heading: "Body", value: "body" },
  ];
  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsTable.slice(indexofFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <Table columns={columns} data={currentPosts} />
      <div className="pagination">
        <Pagination
          simple
          defaultCurrent={currentPage}
          total={postsTable.length}
          onChange={paginate}
        />
      </div>
    </div>
  );
};
