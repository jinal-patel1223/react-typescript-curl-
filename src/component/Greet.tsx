import ReactDOM from "react-dom";
import { useForm, SubmitHandler,useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other"
}

interface IFormInput {
username:string,
email:string,
channel:string,
type:{
 facebook:string,
 insta:string
},
phoneNumber:string[]
phoneNumbers:{}[]
}
export const  Greet = () =>{
  const navigate = useNavigate();
  const form =useForm<IFormInput>({

    defaultValues:{
      username:"",
      email:"",
      channel:"",
      type:{
        facebook:"",
        insta:""
      },
      phoneNumber:["",""],
      phoneNumbers:[{number:""}]
    
    }
  })
const {register,control,handleSubmit ,formState }=form
const {fields} = useFieldArray({
 name:"phoneNumbers",
 control
})
const {errors}=formState;
  const onSubmit=(data:IFormInput)=>{
    console.log("hello",data)
    navigate("/login")
  }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>UserName</label>
          <input  type="text" id="username" {...register("username",{
            required:{
              value:true,
              message:"user name is requried"
            }
          })}/>
      <p className="error">{errors.username?.message}</p>

      <label>Email</label>
          <input  type="text" id="email" {...register("email",{
            required:{
              value:true,
              message:"Email is requried"
            }
          })}/>
      <p className="error">{errors.email?.message}</p>


      <label>Channel</label>
          <input  type="text" id="channel" {...register("channel",{
            required:{
              value:true,
              message:"Channel is requried"
            }
          })}/>
      <p className="error">{errors.channel?.message}</p>

      <label>Facebook</label>
          <input  type="text" id="facebook" {...register("type.facebook",{
            required:{
              value:true,
              message:"facebook id is requried"
            }
          })}/>
      <p className="error">{errors.type?.facebook?.message}</p>
      <label>Insta</label>
          <input  type="text" id="insta" {...register("type.insta",{
            required:{
              value:true,
              message:"insta id is requried"
            }
          })}/>
      <p className="error">{errors.type?.insta?.message}</p>
      <label>number</label>
          <input  type="text" id="phoneNumber" {...register("phoneNumber.0",{
            required:{
              value:true,
              message:"number is requried"
            }
          })}/>
      <p className="error">{errors.phoneNumber?.message}</p>
      <label>number 1</label>
          <input  type="text" id="phoneNumber" {...register("phoneNumber.1",{
            required:{
              value:true,
              message:"number1 is requried"
            }
          })}/>
      <p className="error">{errors.phoneNumber?.message}</p>
          <label>Add number</label>
          {/* <div>
 {
  fields.map((el,index)=>{
    return(
    <div key={el.id}>
      <input type="text" {...register(`phoneNumbers.${index}.number` as const) } 
      />

    </div>)
  })
 }
</div> */}
      <input type="submit" />
    </form>
    )
}