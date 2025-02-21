import { Iuser } from "./Persontype";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form"
type editProps = {
    data: Iuser
    onClickBackButtton: () => void
    updatedata: (data: Iuser) => void
}
type userinfo = {
    id: string
    firstName: string,
    lastName: string,
    email: string
}
const EditUser = (props: editProps) => {


    const { data, onClickBackButtton, updatedata } = props
    const infoForm = useForm<userinfo>({
        defaultValues: {
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
        }
    })
    const { register, control, handleSubmit, formState } = infoForm
    const { errors } = formState;
    const onSubmit: SubmitHandler<userinfo> = (data) => {
        updatedata(data)
        onClickBackButtton()
    }
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

export default EditUser;