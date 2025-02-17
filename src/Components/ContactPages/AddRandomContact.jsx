import { getRandomUser } from "../../Utility/aip";

const GetRandomContact =async()=>{
  const responseFromAPI = await getRandomUser();
}
const  AddRandomContact = () => {
    return (
      <div>
       <button className="btn btn-success form-control" onClick={()=> GetRandomContact()}>Add Random Contact</button>
      </div>
    );
  };
  
  export default AddRandomContact;