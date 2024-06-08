import { useForm } from "react-hook-form";
import { useState } from "react";
import SweetAlertMessage from "../Shared/SweetAlertMessage";

const VotarDataAdd = () => {
  const [loading, setLoading] = useState(false);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = async data =>{
    console.log(data);
    SweetAlertMessage()
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 3000);
    reset()
  }

  
  return (
    <div className="md:flex md:justify-center my-2 mb-16">
      <div className="card md:w-96 lg:w-4/6 bg-base-100 shadow-xl p-2">
        <h2 className="text-3xl text-center shadow-xl rounded-full">Add New Votar</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="form-control shadow-xl p-1 rounded-lg">
            <label className="label">
              <span className="label-text">Votar Serial NO</span>
            </label>
            <input
            {...register("votarSerial", { required: "Votar Serial NO is required", maxLength: {value:4 , message: "only 4 character"}})}
              type="tel"
              maxLength={4}
              placeholder="Votar Serial NO"
              className="input input-bordered"
            />
            <p className='text-red-500'>{errors.votarSerial && errors.votarSerial.message}</p>
          </div>
          <div className="form-control shadow-xl p-1 rounded-lg">
            <label className="label">
              <span className="label-text">Votar Name</span>
            </label>
            <input 
                {...register("votarName", { required: "Votar Name is required"  })}
              type="text"
              placeholder="Votar Name"
              className="input input-bordered"
            />
            <p className='text-red-500'>{errors.votarName && errors.votarName.message}</p>
          </div>

          <div className="form-control shadow-xl p-1 rounded-lg">
            <label className="label">
              <span className="label-text">Votar Father Name</span>
            </label>
            <input
            {...register("votarFatherName", { required: "Votar Father Name is required"  })}
              type="text"
              placeholder="Votar Father Name"
              className="input input-bordered"
            />
            <p className='text-red-500'>{errors.votarFatherName && errors.votarFatherName.message}</p>
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
              <option value="Male">Men</option>
              <option value="female">Women</option>
            </select>
          </div>
          <div className="form-control shadow-xl p-1 rounded-lg">
            <label className="label">
              <span className="label-text">Votar NID No</span>
            </label>
            <input
            {...register("votarNID", { required: "Votar NID No is required" , minLength: {value:10 , message: "PLease Check NID Number Again"} })}
              type="tel"
              maxLength={10}
              placeholder="Votar NID No"
              className="input input-bordered"
            />
            <p className='text-red-500'>{errors.votarNID && errors.votarNID.message}</p>
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
