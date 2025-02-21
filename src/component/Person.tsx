import React, { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Person.style.css"
import { Iuser, IuserList, pageData } from "./Persontype"
import Userlist from "./Userlist";
import AddUser from "./AddUser";
import { emphasize } from "@mui/material";
import EditUser from "./EditUser";
import { VERSION } from "@angular/cli";
type user = {
  name: string,
  city: string,
  state: string

}
export const Person = ({ props }: { props: user[] }) => {
  const navigate = useNavigate();

  const [userList, setUserList] = useState(IuserList as Iuser[])
  const [showPage, setShowPage] = useState(pageData.list)
  const [showEditData, setShowEditData] = useState({} as Iuser)

  const addUserData = () => {
    setShowPage(pageData.add)
  }
  const backToList = () => {
    setShowPage(pageData.list)
  }
  const addUser = (data: Iuser) => {
    setUserList([...userList, data])

  }
  const onDeleteClick = (data: Iuser) => {
    const indexOfUser = userList.indexOf(data)

    if (indexOfUser === -1) {

      return;
    }
    const tempData = [...userList]; // Create a proper array copy
    tempData.splice(indexOfUser, 1); // Remove the user at found index
    setUserList(tempData); //

  }
  const onEditData = (data: Iuser) => {
    setShowPage(pageData.edit)
    setShowEditData(data)
  }
  const updateUserdata = (data: Iuser) => {
    const filterdata = userList.filter((e) => e.email === data.email)[0];
    const indexOf = userList.indexOf(filterdata)
    const tempdatalist = [...userList]
    tempdatalist[indexOf] = data
    setUserList(tempdatalist)

  }
  return (
    <>
      <article className="header">
        <header> <h2>Simple React Typescript Curl</h2></header>
      </article>
      <section className="section">
        {showPage === pageData.list ? <div>This Content Part</div> : <div> Add User</div>}

        {showPage === pageData.list &&
          <>
            <input type="button" value="add user" onClick={addUserData} />
            <Userlist list={userList} onDelete={onDeleteClick} onEdit={onEditData} /> </>}
        {
          showPage === pageData.add && <AddUser onAddUserData={addUser} onClickBackButtton={backToList} />
        }
        {
          showPage === pageData.edit && <EditUser data={showEditData} onClickBackButtton={backToList} updatedata={updateUserdata} />
        }
      </section>

      {/*   
    <div>
     
        <table >
        <thead>
            <tr>
            <th>name</th>
            <th>city </th>
            <th>state</th></tr>
            </thead>
            <tbody>
          {props.map((el, index) => (
            <tr key={index}>
              <td>{el.name}</td>
              <td>{el.city}</td>
              <td>{el.state}</td>
              <td>  <button  onClick={handleEdit}>edit</button></td>
              <td>  <button >delete</button></td>
            </tr>
          ))}
        </tbody>
        </table>
    </div> */}
    </>
  )
}