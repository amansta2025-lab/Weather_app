import mongoose from 'mongoose';

const rolesmappingSchema = mongoose.Schema(
    {
        role :{type:Number, required:true},
        mid : {type:Number, required:true}

    }
);

const rolesmappings = mongoose.model("rolesmappings", rolesmappingSchema);
export default rolesmappings;