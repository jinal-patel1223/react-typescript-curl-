import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { Iuser } from "./Persontype";

type backButon = {
    onClickBackButtton: () => void
    onAddUserData: (data: Iuser) => void
}
type userinfo = {
    id: ""
    firstName: string,
    lastName: string,
    email: string
}
const AddUser = (props: backButon) => {
    const { onClickBackButtton, onAddUserData: onAddUserDataProp } = props
    const infoForm = useForm<userinfo>({
        defaultValues: {
            id: "",
            firstName: '',
            lastName: "",
            email: "",
        }
    })
    const { register, control, handleSubmit, formState } = infoForm
    const onSubmit: SubmitHandler<userinfo> = (data) => {
        onAddUserDataProp(data)
        onClickBackButtton()

    }
    const { errors } = formState;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Frist Name :</label>
                <input type="text" id="fristname" {...register("firstName", {
                    required: true, maxLength: 30
                })} />
                {errors.firstName && errors.firstName.type === "required" && <span>This is required</span>}

            </div>
            <div>
                <label>Last Name :</label>
                <input type="text" id="last name " {...register("lastName", { required: true, maxLength: 30 })} />
                {errors.lastName && errors.lastName.type === "required" && <span>This is required</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type="text" id="email" {...register("email", { required: true, pattern: /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/i })} />
                {errors.email && errors.email.type === "required" && <span>This is required</span>}
            </div>
            <div>
                <input type="button" value="back" onClick={onClickBackButtton} />
                <input type="submit" />
            </div>
        </form>
    )
}

export default AddUser;