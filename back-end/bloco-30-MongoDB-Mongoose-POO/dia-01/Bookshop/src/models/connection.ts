// models/connection.ts

import mongoose from 'mongoose';

const connection = (mongoDatabaseURI = 'mongodb://127.0.0.1:27017/model_example') =>
  mongoose.connect(mongoDatabaseURI);

export default connection;
