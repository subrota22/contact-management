import { useState } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsArrowRightCircle } from "react-icons/bs";
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet";
const Home = () => {

    const contactInfo = useSelector((store: string | object | number | any) => store?.reducers);
    let contactData = contactInfo?.contacts?.contactData;
    const [contact, setContact] = useState(contactData);

    const deleteContact = (id: string | object | number | any) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            background: "#04477C",
            color: "white"
        }).then((result) => {
            if (result.isConfirmed) {
                // Find the index of the object with the specified ID
                let indexToDelete = contactData.findIndex((data: string | object | number | any) => parseInt(data.id) === parseInt(id));
                //remove one object from array by it's index number
                if (indexToDelete >= 0 && indexToDelete < contactData.length) {
                    const dataAfterDelete = contactData.splice(indexToDelete, 1);
                    //set that data after deleted 
                    let removeOneData = contactData.filter((item: string | object | number | any) => item.id !== parseInt(id));
                    setContact(removeOneData);
                    if (dataAfterDelete) {
                        Swal.fire({
                            icon: "success",
                            title: "Congrasulation!!",
                            text: "One contact data deleted successfully !!",
                            timer: 6000,
                            background: "#04477C",
                            color: "white"
                        })
                    }
                }
            } else {
                Swal.fire({
                    icon: "info",
                    text: "You are all data safe now !!",
                    timer: 6000,
                    background: "#04477C",
                    color: "white"
                })
            }
        })
    }
    //search data
    const handleSearchText = (value: string | object | number | any) => {
        const searchQuery = value;
        const searchedData = contactData.filter((item: string | object | number | any) => item?.firstName.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()));
        setContact(searchedData);
        
    }
  
    return (
        <>
            <Helmet><title>Home page</title></Helmet>
            <div className="container">
                {
                    contactData?.length !== 0 &&

                    <>
                        <div className="flex sm:flex-col md:flex-col lg:flex-row">
                            <div className="alert alert-success mx-auto my-6 px-4 text-white w-fit flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className='text-xl'>Total <span className='text-primary'>{contactInfo?.contacts?.contactData?.length}</span>  contact information found !!</span>
                            </div>

                            <div className="mx-auto my-6 px-4 text-white w-96 pt-2 rounded-xl flex justify-center">
                                <input type="text" placeholder="Search by first name" onChange={(e) => handleSearchText(e.target.value)} className="input input-bordered input-success w-full max-w-xs" />
                            </div>
                        </div>
                    </>
                }
                {
                   contactData?.length === 0 &&  <>
                    <div className='h-screen'>
                        <div className='w-96 mx-auto mt-52 text-xl'>
                            <div className="alert alert-info text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span>There is no contact data available</span>
                            </div>
                        </div>
                    </div>
                </>
                }
                 {
                        contact?.length === 0 &&  <>
                        <div className='h-96'>
                            <div className='w-96 mx-auto mt-52 text-xl'>
                                <div className="alert alert-info text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>Sorry search data not found !!</span>
                                </div>
                            </div>
                        </div>
                    </>
                }
                <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
                    {
                        contact.sort((a: any, b: any) => b - a).map((item: any, index: string) =>
                            <div className="card w-72 m-6 bg-base-100 shadow-xl" key={index}>
                                <div className="card-body">
                                    <p className="text-md"> <span className="text-white font-bold">First name:</span> {item?.firstName}</p>
                                    <p className="text-md"><span className="text-white  font-bold">Last name:</span> {item?.lastName}</p>
                                    <p className="text-md"> <span className="text-white  font-bold">Email:</span> {item?.email}</p>
                                    <p>  <span className="text-white  font-bold"> Message:</span> {item?.message?.length > 12 ? item?.message?.slice(0, 12) : item?.message}</p>
                                    <p> <span className="text-white  font-bold">Status:</span> {item?.status}</p>
                                    <div className="card-actions mt-4 justify-center">
                                        <NavLink to={`/details-of-contact-info/${item?.id}`}> <button className="btn btn-sm  btn-success text-white"> <span>Show details </span> <BsArrowRightCircle className="text-white text-xl mx-2"></BsArrowRightCircle> </button></NavLink>
                                    </div>
                                    <div className="flex justify-between my-5 text-xl">
                                        <NavLink to={`/contact-edit/${item?.id}`}>
                                            <BiEdit className='text-success'></BiEdit>
                                        </NavLink>
                                        <BiTrash className='text-red-500 hover:cursor-pointer' onClick={() => deleteContact(item?.id)}></BiTrash>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Home;