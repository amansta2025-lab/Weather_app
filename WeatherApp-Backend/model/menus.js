import mongoose from 'mongoose';

const menuSchema = mongoose.Schema(
    {
        mid : {type: Number, required:true, unique:true},
        menu : {type: String, required: true}

    }
);

const menus = mongoose.model("menus",menuSchema);
export default menus;