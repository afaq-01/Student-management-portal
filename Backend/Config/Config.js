import mongoose from 'mongoose';

const ConnectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/student-portal')
        console.log('Db Connected')
    } catch (error) {
        console.log(error)

    }
};

export default ConnectDb;