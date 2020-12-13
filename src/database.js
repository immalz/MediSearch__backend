import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/MediSearch', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(db => console.log('Database is connected'))
    .catch(error => console.log(error));