const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobIdSchema = new Schema({
    jobs: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        require: true
    }],

    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}
);

const Job = mongoose.model('Job', jobIdSchema);
module.exports = Job;