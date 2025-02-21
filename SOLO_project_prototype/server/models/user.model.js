import { model, Schema } from "mongoose";


const CartSchema = new Schema(
  {
      firstName:{
        required:[true, "First Name is required"],
        minlength: [3,"First Name just be at least 3 characters long"],
         type: String,
      },


      lastName:{
        required:[true, "Last Name is required"],
        minlength: [4,"Last Name just be at least 4 characters long"],
         type: String,
      },
       

      userName:{
        required:[true, "User Name is required"],
        minlength: [5,"User Name just be at least 5 characters long"],
         type: String,
      },
    
      email:{
        required:[true, " Email is required"],
        type:String,
    },

    password:{
        required:[true,"Password is required"],
        minlength:[8,"Password must be at least 8 characters long "],
        maxlength:[15,"Password must be at least 8-15 characters long "],
        type:String,
    },


    confirmPassword:{
        required:[true,"Password is required"],
        minlength:[8,"Password must be at least 8 characters long "],
        maxlength:[15,"Password must be at least 8-15 characters long "],
        type:String,
    },

    address:{
        required: [true,"Address is required"],
        minlength:[5,"Address must be at least 5 characters long"],
        type:String
    },

    city:{
        required: [true,"City is required"],
        minlength:[2,"City must be at least 2 characters long"],
        type:String,
    },

    
    state:{
        required: [true,"State is required"],
        minlength:[4,"State must be at least 2 characters long"],
        type:String,
    },

    street:{
        required: [true,"Street is required"],
        minlength:[5,"Street must be at least 5 characters long"],
        type:String,
    },


    zipCode:{
        required: [true, "Zip code is required"],
        maxlength:[5,"Zip code must be 5 characters long"],
        minlength:[5,"Zip code must be 5 characters long"],
        type:Number,
    },

   phone:{
    required: [true,"Phone number is required"],
    minlength:[10,"Phone number must be 10 characters long"],
    maxlength:[10,"Phone number must be 10 characters long"],
    type:String,
   },



},
{ timestamps: true }
);



const User = model('User', CartSchema)
export default User;