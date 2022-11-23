import axios from "axios";
import React, { useState,useEffect } from "react";
import BaseTable from 'react-base-table'
import 'react-base-table/styles.css'
import Paginacion from './componets/paginacion'

function App() {


  const columns = [
    {
      width: 200,
      title: "firstName",
      key: "firstName",
      dataKey: "firstName",
    },
    {
      width: 120,
      title: "lastName",
      key: "lastName",
      dataKey: "lastName",
    },
    {
      width: 120,
      title: "age",
      key: "age",
      dataKey: "age"
    },
    {
      width: 120,
      title: "username",
      key: "username",
      dataKey: "username"
    },
    {
      width: 120,
      title: "ip",
      key: "ip",
      dataKey: "ip"
    }
  ];

  const [usuario, setUsario] = useState([]);
  const [currentPage, setcurrentPage] = useState([1]);
  const [userPerPage] = useState([5]);


  useEffect(() => {
    axios({
      url: "https://dummyjson.com/users",
    })
      .then((response) => {
        setUsario(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });

  },[]);

const indexOfLastUser = currentPage * userPerPage;
const indexOfFirstUser = indexOfLastUser - userPerPage;
const currentPost = usuario.slice(indexOfFirstUser,indexOfLastUser);
const pagina = pageNumber =>setcurrentPage(pageNumber);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
        <BaseTable width={800} height={500} fixed columns={columns} data={currentPost}/>;
        <Paginacion userPerPage={userPerPage} totalUser={usuario.length} pagina={pagina}/>
    </div>
  );
}

export default App;
