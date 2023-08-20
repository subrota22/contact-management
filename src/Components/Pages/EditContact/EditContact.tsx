import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import  {Helmet} from "react-helmet" ;
const EditContact = () => {
    const { id }:any = useParams();
    //get contact data from state
    let contactData = useSelector((store:any) => store?.reducers?.contacts?.contactData);
    //finde one match object from contact
    let getContact = contactData.find((item:any) => item.id === parseInt(id));
    const [contact, setContact] = useState(getContact);
   const navigate = useNavigate(); 
       //submit form data 
    const formHandleSubmit = (e:any) => {
        e.preventDefault();
        // Find the index of the object with the specified ID
        let targetIndex = contactData.findIndex((data:any) => parseInt(data.id) === parseInt(id));

        // Check if the object was found
        if (targetIndex !== -1) {
            // Update the contact property of the object
            contactData[targetIndex].firstName = contact.firstName;
            contactData[targetIndex].lastName = contact.lastName;
            contactData[targetIndex].email = contact.email;
            contactData[targetIndex].message = contact.message;
            contactData[targetIndex].status = contact.status;
            Swal.fire({
                icon: "success",
                title: "Congrasulations!!",
                text: "Your " + contactData[targetIndex].id + " number id of contact info updated successfully !!",
                timer: 4000,
            });
            navigate("/");
        } else {
            Swal.fire({
                icon: "error",
                title: "Not found!!",
                text: "Object with ID" + parseInt(id) + "not found.",
                timer: 4000,
                background:"#04477C",
                color:"white"
            });
        }
        e.target.reset();
    }
    //handle input feild by onchange 
    const handleInputFeild = (e:any) => {
        const key = e?.target?.name;
        const value = e?.target?.value;
        let newData = { ...contact };
        newData[key] = value;
        setContact(newData)
    }
    return (
        <>
    <Helmet><title>Edit contact</title></Helmet>
            <form onSubmit={formHandleSubmit} className="my-18">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left  ms-5" style={{ width: "500px" }}>
                            <h1 className="text-5xl font-bold">Edit contact !!</h1>
                            <p className="py-6">Edit your  contact to save it.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First name</span>
                                    </label>
                                    <input type="text" defaultValue={getContact.firstName} name="firstName" onChange={(e) => handleInputFeild(e)} placeholder="Enter your first name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last name</span>
                                    </label>
                                    <input type="text" defaultValue={getContact.lastName} name="lastName" onChange={(e) => handleInputFeild(e)} placeholder="Enter your last name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" defaultValue={getContact.email} onChange={(e) => handleInputFeild(e)} placeholder="Enter your email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea name="message" defaultValue={getContact.message} onChange={(e) => handleInputFeild(e)} placeholder="Enter your message here!!" className="input input-bordered h-20 pt-3" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Status</span>
                                    </label>

                                    <div className="flex flex-row justify-around">
                                        <div className="flex justify-around">
                                            <input type="radio" onChange={(e) => handleInputFeild(e)} value={"active"} name="status" className="radio radio-accent my-4" />
                                            <p className="mt-3 ms-3">Active</p>
                                        </div>
                                        <div className="flex justify-around">
                                            <input type="radio" onChange={(e) => handleInputFeild(e)} value={"inactive"} name="status" className="radio radio-accent my-4" />
                                            <p className="mt-3 ms-3"> Inactive</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-success text-white">Edit contact</button>
                                    <input type="reset" className="btn btn-warning text-white mt-3" value={"Clear form"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default EditContact;