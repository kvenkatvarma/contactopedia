import React,{Component} from "react";
import Header from "../../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContact";
import GeneralContacts from "./GeneralContact";
import Footer from "../../Layout/Footer";

class ContactIndex extends React.Component{
   constructor(props){
     super(props);
     this.state= {
      contactList :[
         {
            id: 1,
            name: "Ben Parker",
            phone: "666-666-7770",
            email: "ben@dotnetmastery.com",
            isFavorite: false,
          },
          {
            id: 2,
            name: "Kathy Patrick",
            phone: "111-222-0000",
            email: "kathy@dotnetmastery.com",
            isFavorite: true,
          },
          {
            id: 3,
            name: "Paul Show",
            phone: "999-222-1111",
            email: "paul@dotnetmastery.com",
            isFavorite: true,
          },
      ]
     }
   }
   handleAddContact =(newContact)=>{   
      if(newContact.name == "")
         {
            return {status : "failure",msg: "Please enter a valid name"};
         }   
         else if(newContact.phone == "")
         {
         return {status : "failure",msg: "Please enter a valid phone number"};
         }   
         const duplicateRecord = this.state.contactList.filter((x) => {
            if (x.name == newContact.name && x.phone == newContact.phone) {
              return true;
            }
          });
          if (duplicateRecord.length > 0) {
            return { status: "failure", msg: "Duplicate Record" };
          }
          else{          
       const newFinalcontact ={...newContact,id:this.state.contactList[this.state.contactList.length -1].id + 1,isFavorite:false,};
       this.setState((prevState)=>{
         return{
            contactList :prevState.contactList.concat([newFinalcontact]),
         }
       });
       return { status: "success", msg: "Contact was added successfully" };
      }
   }
   handleToggleFavorite =(contact)=>{
       this.setState((prevState)=>{
         return{
            contactList : prevState.contactList.map((obj)=>{
               if(obj.id == contact.id)
               {
                  return {...obj,isFavorite :!obj.isFavorite};
               }
               return obj;
            })
         }
       });
   };
   handleDeleteContact =(contactId)=>{
  
      this.setState((prevState)=>{
        return{
           contactList : prevState.contactList.filter((obj)=>{
             return obj.id !== contactId;
           })
        }
      });
  };

  handleAddRandomcontact=(newContact)=>{
   const newFinalcontact ={...newContact,id:this.state.contactList[this.state.contactList.length -1].id + 1,isFavorite:false,};
   this.setState((prevState)=>{
      return{
         contactList :prevState.contactList.concat([newFinalcontact]),
      }
    });
  }
      render(){
        return(
                <div>
                    <Header/>
                    <div className="container" style={{minHeight : "85vh"}}>
                         <div className="row py-3">
                             <div className="col-4 offset-2 row">                            
                                 <AddRandomContact handleAddRandomcontact = {this.handleAddRandomcontact}/>                             
                             </div>
                             <div className="col-4 row">
                              
                                <RemoveAllContact/>
                             </div>
                             <div className="row py-2">
                                 <div className="col-8 offset-2 row">
                                 <AddContact handleAddContact ={this.handleAddContact}/>
                              </div>
                             </div>
                             <div className="row py-2">
                             <div className="col-8 offset-2 row">
                                <FavoriteContacts contacts = {this.state.contactList.filter((u)=>u.isFavorite == true)} favoriteClick = {this.handleToggleFavorite} deleteContact={this.handleDeleteContact}/>
                             </div>
                             </div>
                             <div className="row py-2">
                             <div className="col-8 offset-2 row">
                                <GeneralContacts contacts = {this.state.contactList.filter((u)=>u.isFavorite == false)} favoriteClick = {this.handleToggleFavorite} deleteContact={this.handleDeleteContact}/>
                             </div>
                             </div>
                         </div>
                    </div>
                    <Footer/>
                </div>
        );
      }
}
export default ContactIndex