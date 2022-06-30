import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "../Table";
import { Pagination } from "antd";

export const Users = ({ isOpen, setIsOpen }) => {
  const [usersTable, setUsersTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsersTable(res.data));
  }, []);

  const columns = [
    { heading: "UserId", value: "id" },
    { heading: "Name", value: "name" },
    { heading: "Username", value: "username" },
    { heading: "Email", value: "email" },
    { heading: "Street", value: "address.street" },
  ];
  const indexOfLastUser = currentPage * usersPerPage;
  const indexofFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersTable.slice(indexofFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <Table columns={columns} data={currentUsers} />
      <div className="pagination">
        <Pagination
          simple
          defaultCurrent={currentPage}
          total={usersTable.length}
          onChange={paginate}
        />
      </div>
    </div>
  );
};
