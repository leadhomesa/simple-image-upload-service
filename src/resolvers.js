import { storeUpload } from './storeUpload';

export const resolvers = {
  Mutation: {
    uploadFile: async (parent, { id, file }) => {
      console.time('upload');
      const { stream, filename, mimetype, encoding } = await file;

      return storeUpload({ id, stream, filename })
        .then((res) => {
          const response = [];
          const fileNames = ['small', 'medium', 'large'];

          for (let i = 0; i < res.length; i++) {
            const imageInfo = res[i];

            response.push({
              id,
              success: true,
              location: imageInfo.Location,
              filename: `${fileNames[i]}-${filename}`,
              mimetype,
              encoding
            });
          }

          console.timeEnd('upload');
          return response;
        })
        .catch(() => {
          return [{
            id,
            success: false
          }];
        });
    }
  },
  Query: {
    hello: () => 'hi'
  }
};