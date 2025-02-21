
import "./Usermodel.style.css"
import { Iuser, IuserList } from "./Persontype"
type closezMode = {
    modelClose: () => void,
    data: Iuser
}

const UserModel = (props: closezMode) => {
    const { modelClose, data } = props
    return (
        <div id="myModal" className="modal">


            <div className="modal-content">
                <div className="close" onClick={modelClose} >&times;</div>
                <h3> Employee Data</h3>
                <div>
                    <div>
                        <label>Frist Name:{data.firstName}</label>
                    </div>
                    <div>
                        <label>Last Name:{data.lastName}</label>
                    </div>
                    <div>
                        <label>Email:{data.email}</label>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default UserModel;