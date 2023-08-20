import  {Helmet} from "react-helmet" ;
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ContactDetails = () => {
    const { id }:any = useParams();
     //get contact data from state
    let contactData = useSelector((store:any) => store?.reducers?.contacts?.contactData);
     //get the match object from contact
    let getContact = contactData.find((item:any) => parseInt(item.id) === parseInt(id));
    return (
        <>
       <Helmet><title>Contact details </title></Helmet>
           <div className="my-20">
           <div className="alert alert-success mx-auto  px-4 text-white w-96 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className='text-xl'>Contact details of <span className='text-primary'>{getContact?.firstName}</span></span>
            </div>

            <div className="card w-96 mx-auto m-6 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <p className="text-md">First name: {getContact?.firstName}</p>
                    <p className="text-md">Last name: {getContact?.lastName}</p>
                    <p className="text-md">Email: {getContact?.email}</p>
                    <p>Message: {getContact?.message}</p>
                    <p>Status: {getContact?.status}</p>
                </div>
            </div>
           </div>
        </>
    );
};

export default ContactDetails;