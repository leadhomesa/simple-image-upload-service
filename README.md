## Simple Upload Service

### Setup
1) Make sure that you have an AWS account as well as your `~/.aws/credentials` set up
2) Change the `bucketName` variable `storeUpload.js` to point to your S3 bucket
3) run `npm install`
4) run `npm start`

### Upload example

```curl localhost:8000/graphql \
  -F operations='{ "query": "mutation ($file: Upload!) { uploadFile(id: 89283198231, file: $file) {id, success, filename, location, mimetype } }", "variables": { "file": null } }' \
  -F map='{ "0": ["variables.file"] }' \
  -F 0=@testImage.jpg
  ``` 