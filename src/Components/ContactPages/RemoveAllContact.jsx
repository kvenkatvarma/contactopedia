const RemoveAllContact = (props) => {
    return (
      <div>
       <button className="btn btn-danger form-control" onClick={()=> props.handleRemoveAllcontact()}>Remove All</button>
      </div>
    );
  };
  
  export default RemoveAllContact;