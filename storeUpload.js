import AWS from 'aws-sdk';
import { imageResizer } from './imageResizer';

const bucketName = 'file-upload-service';
const s3 = new AWS.S3();

export const storeUpload = async ({ id, stream, filename }) => {
  const small = await imageResizer('small', filename);
  const medium = await imageResizer('medium', filename);
  const large = await imageResizer('large', filename);

  const uploadParams = { Bucket: `${bucketName}/${id}`, ContentEncoding: 'base64' };
  const smallParams = Object.assign({ Key: `small-${filename}`, Body: small }, uploadParams);
  const mediumParams = Object.assign({ Key: `medium-${filename}`, Body: medium }, uploadParams);
  const largeParams = Object.assign({ Key: `large-${filename}`, Body: large }, uploadParams);

  return Promise.all([
    await s3.upload(smallParams).promise(),
    await s3.upload(mediumParams).promise(),
    await s3.upload(largeParams).promise()
  ]);
};