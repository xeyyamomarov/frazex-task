import "./style.css";
import { useState, useEffect } from "react";
import { Table } from "../Table";
import axios from "axios";
import { Pagination } from "antd";
export const Comments = () => {
  const [commentsTable, setCommentsTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(5);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setCommentsTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    { heading: "PostId", value: "id" },
    { heading: "Name", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "Body", value: "body" },
  ];
  const indexOfLastComments = currentPage * commentsPerPage;
  const indexofFirstComments = indexOfLastComments - commentsPerPage;
  const currentComments = commentsTable.slice(
    indexofFirstComments,
    indexOfLastComments
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <Table data={currentComments} columns={columns} />
      <div className="pagination">
        <Pagination
          simple
          defaultCurrent={1}
          total={commentsTable.length}
          onChange={paginate}
        />
      </div>
    </div>
  );
};
