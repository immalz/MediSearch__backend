import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/MediSearch', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(db => console.log('Database is connected'))
    .catch(error => console.log(error));