import "./Userlist.style.css"
import { Iuser, IuserList } from "./Persontype"
import UserModel from "./UserModel"
import { useState } from "react"
type props = {
  list: Iuser[]
  onDelete: (data: Iuser) => void
  onEdit: (data: Iuser) => void
}


const Userlist = (props: props) => {

  const { list, onDelete, onEdit } = props
  const [userModelOpen, setUserModelOpen] = useState(false)

  const [usermodeldata, setusermodeldata] = useState(null as Iuser | null)
  const openModel = (data: Iuser) => {
    setusermodeldata(data)
    setUserModelOpen(true)
  }
  const onModelClose = () => {
    setUserModelOpen(false)
  }

  return (
    <>
      <table>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>action</th>
        </tr>
        {list?.map((el) => {
          return (
            <tr>
              <td>{`${el.firstName} ${el.lastName}`}</td>
              <td>{el.email}</td>
              <td><button className="button" onClick={() => onEdit(el)}>edit</button>
                <button className="button" onClick={() => openModel(el)}>view</button>
                <button onClick={() => onDelete(el)}>delete</button></td>
            </tr>)
        })}
      </table>
      {userModelOpen && usermodeldata !== null && <UserModel modelClose={onModelClose} data={usermodeldata} />}
    </>
  )

}
export default Userlist;