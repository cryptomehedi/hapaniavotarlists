import { useForm } from "react-hook-form";
import { useState } from "react";
import SweetAlertMessage from "../Shared/SweetAlertMessage";
import axios from "axios";
import allCategories from "../../Data/categories.json"

const VotarDataAdd = () => {
  const [loading, setLoading] = useState(false);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = async data =>{ 
    setLoading(true)
    SweetAlertMessage({run: true})
    // console.log(data);
    const votar = data
    await axios.post('https://hapaniavotarlists-server.vercel.app/api/v1/votarList', votar)
    .then(data=>{
      console.log(data);
      if (data?.data?.success === true ){ 
        SweetAlertMessage({show:true})
      } else {
        SweetAlertMessage({show:true, icon: "error", lastTitle: data?.data?.massage, text: "Check again"})
      }
    })
    setTimeout(() => {
        setLoading(false)
    }, 3000);
    reset()
  }

  
  return (
    <div className="md:flex md:justify-center my-2 mb-16">
      <div className="card md:w-96 lg:w-4/6 bg-base-100 shadow-xl p-2">
        <h2 className="text-3xl text-center shadow-xl rounded-full">Add New Votar</h2>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" >
        <div className="form-control shadow-xl p-1 rounded-lg">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <select
            {...register("address")}
              name="address"
              className="select select-bordered w-full max-w-xs"
            >
             {
              allCategories.map(i=> <option key={i.id} value={i.value}>{i.name}</option>)
            }
            </select>
          </div>
          <div className="form-control shadow-xl p-1 rounded-lg">
            <label className="label">
              <span className="label-text">Votar Serial NO</span>
            </label>
            <input
            {...register("SLN", { required: "Votar Serial NO is required" , pattern:{value: /^(0|[1-9]\d*)(\.\d+)?$/ , message: 'Please Enter Number Only'}, maxLength: {value:4 , message: "only 4 character"}})}
              type="tel"
              maxLength={4}
              placeholder="Votar Serial NO"
              className="input input-bordered"
            />
            <p className='text-red-500'>{errors.SLN && errors.SLN.message}</p>
          </div>
          <div className="form-control shadow-xl p-1 rounded-lg">
            <label className="label">
              <span className="label-text">Votar Name</span>
            </label>
            <input 
                {...register("name", { required: "Votar Name is required" ,minLength: {value:7 , message: "Please Type Proper Name"}})}
              type="text"
              defaultValue={"md. "}
              placeholder="Votar Name"
              className="input capitalize input-bordered"
            />
            <p className='text-red-500'>{errors.name && errors.name.message}</p>
          </div>

          <div className="form-control shadow-xl p-1 rounded-lg">
            <label className="label">
              <span className="label-text">Votar NID No</span>
            </label>
            <input
            {...register("NID", { required: "Votar NID No is required" , pattern:{value: /^(0|[1-9]\d*)(\.\d+)?$/ , message: 'Please Enter Number Only'} , minLength: {value:12 , message: "PLease Check NID Number Again"} })}
              type="tel"
              maxLength={12}
              defaultValue={642139}
              placeholder="Votar NID No"
              className="input input-bordered"
            />
            <p className='text-red-500'>{errors.NID && errors.NID.message}</p>
          </div>

          <div className="form-control shadow-xl p-1 rounded-lg">
            <label className="label">
              <span className="label-text">Votar Father Name</span>
            </label>
            <input
            {...register("father", { required: "Votar Father Name is required" , minLength: {value:7 , message: "Please Type Proper Name"} })}
              type="text"
              defaultValue={"md. "}
              placeholder="Votar Father Name"
              className="input capitalize input-bordered"
            />
            <p className='text-red-500'>{errors.father && errors.father.message}</p>
          </div>

          <div className="form-control shadow-xl p-1 rounded-lg">
            <label className="label">
              <span className="label-text">Votar mother Name</span>
            </label>
            <input
            {...register("mother", { required: "Votar Mother Name is required" , minLength: {value:8 , message: "Please Type Proper Name"} })}
              type="text"
              defaultValue={"Mst. "}
              placeholder="Votar Mother Name"
              className="input capitalize input-bordered"
            />
            <p className='text-red-500'>{errors.mother && errors.mother.message}</p>
          </div>

          <div className="form-control shadow-xl p-1 rounded-lg">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <select
            {...register("gender")}
              name="gender"
              className="select select-bordered w-full max-w-xs"
            >
              <option value="male">Men</option>
              <option value="female">Women</option>
            </select>
          </div>
          
          <div className="form-control mt-6">
            <button className="btn text-white font-bold btn-accent">
              {loading ? "Adding Votar..." : "Add Votar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default VotarDataAdd;
