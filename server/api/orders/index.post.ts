// Within this file, we will create a discord notification that privately exclaims that item(s) sold,
// and encourages the seller to check the db for the order details.
// then, over in the products collection, the product(s) become(s) marked as sold
// TODO: dont render items with sold: true
// TODO: update product model to include sold: boolean
import { WebhookClient } from 'discord.js';
import {Validator}  from '#nuxt-server-utils';
import OrderSchema from '~/schemas/Order.schema';
import { Order } from '~/server/models/Order.model';
import { rateLimitWrapper } from '~/utils/rateLimitWrapper';

const config = useRuntimeConfig();
const url = config.discordWebhook;
const token = config.discordToken;
const webhookClient = new WebhookClient({ url, token });

const messagePoster = async (event: any) => {
  const body = await readBody(event);
  Validator.validateSchema(OrderSchema, body);
  const order = await Order.create({
    ...body
  })
  console.log('ORDER POSTED \n', order);


  let orderStringSendable = `New order of ${order.buyerItems}, check details!`;
  webhookClient.send(orderStringSendable); //discord integration (won't be public to anyone but us)
};

export default eventHandler(rateLimitWrapper(messagePoster, {
  interval: 1000, 
  threshold: 5,
  cb: (info, args) => {
    console.log(`Rate limit reached. Temperature: ${info.temperature}, Wait: ${info.wait}`);
    return 'The server is experiencing a high volume of requests. Please try again soon.';
  }
}));