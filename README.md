# FlatPyramid NFT Landing Pages

FP3D landing pages for https://fp3d.flatpyramid.com/ and https://fp3d.flatpyramid.com/presale

# Dependencies

* node
* angular cli
* aws cli
* S3 bucket
* Cloudfront

# Development

npm i
npm start

# Deployment

export AWS_PROFILE=<flatpyramid|flatpyramiddev>

## For Production
```
npm run build:prod

npm run deploy:prod


# Note: after deploy, if you get a cloudfront access error, then go to S3 and make all objects in the bucket public

```

