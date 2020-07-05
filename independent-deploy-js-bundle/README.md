# Independent Deployability for JS-Bundles

The goal of this project is to have any HTML file load a js-bundle from a public path.
Then I update the js-bundle, and changes are immediately visible in the page.
Independent deployability.

## Requirements

- czen-dev account for AWS
- CDK with TypeScript (S3 buckets)

```sh
npm install -g aws-cdk
```

## Powerup

```sh
eval $(powerup --account-alias czen-dev poweruser)
```

## CDK app

Created with

```sh
cdk init app --language typescript
npm install @aws-cdk/aws-s3
```

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
