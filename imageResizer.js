import sharp from 'sharp';

const sizes = {
  small: 200,
  medium: 400,
  large: 600
};

export const imageResizer = async (size, fileName) =>
  await sharp(`src/images/${fileName}`)
    .resize(sizes[size], sizes[size])
    .ignoreAspectRatio()
    .toBuffer()
    .then(data => data);

