import app from './app';

import dotenv from 'dotenv';
import connectDb from './db';

dotenv.config({path: './.env'});

connectDb()
.then(() => {
    app.listen(process.env.PORT || 5500, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}/api/v1/`)
    })
})
.catch((error) => {
    console.log("error",error);
})
