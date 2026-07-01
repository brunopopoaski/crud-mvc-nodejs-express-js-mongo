import mongoose from 'mongoose';

export default async function connect(uriDB) {
  await mongoose.connect(uriDB);
  console.log('MongoDB conectado');
}