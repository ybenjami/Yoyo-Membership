// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Promo, Post, Testimonial } = initSchema(schema);

export {
  Promo,
  Post,
  Testimonial
};