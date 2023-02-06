import * as dotenv from 'dotenv';
dotenv.config();

// ENV variables
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  POSTGRES_USERNAME: `${process.env.POSTGRES_USERNAME}`,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  AWS_REGION: process.env.AWS_REGION,
  AWS_DEFAULT_REGION: process.env.AWS_DEFAULT_REGION,
  AWS_PROFILE: process.env.AWS_PROFILE,
  AWS_BUCKET: process.env.AWS_BUCKET,
  URL: process.env.URL,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  JWT_SECRET: {
    secret: process.env.JWT_SECRET,
  },
};
