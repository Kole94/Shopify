require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
var mysql = require('mysql');
const Sequelize = require('sequelize');
const mount = require('koa-mount');
const graphqlHttp = require('koa-graphql');
const { buildSchema } = require('graphql');
const Product = require('./models/product')


dotenv.config();
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

const server = new Koa();

app.prepare().then(() => {
  server.use(session(server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ['read_products', 'write_products'],

      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;

        ctx.cookies.set('shopOrigin', shop, { httpOnly: false })
        ctx.redirect('/');
      },
    }),
  );


  //MYSQL
  const sequelize = new Sequelize('101', 'root', 'valkira2', {
    host: 'localhost',
    dialect: 'mysql'
  });

  sequelize
    .authenticate()
    .then( async() => {
      console.log('Connection has been established successfully.');

    
        console.log('dwads');
      const product = new Product({
        title: "argle",
        price: 42,
      });
      try {
        const result = await product.save();
  
        return result;
      } catch (err) {
        console.log(err);
        throw err;
      }
    
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

    


server.use(mount('/graphql',
    graphqlHttp({
      schema: buildSchema(`
    type Product{
      title: String!
      price: Int!
  
  }
    input ProductInput{
      title: String!
      price: Int!
  }
  
        type RootQuery {
          products: [Product!]
        }
        type RootMutation {
          createProduct(productInput: ProductInput): Product
        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
      rootValue: {
        createProduct: async (args, req) => {
          console.log('RESOLVER');
          const product = new Product({
            title: args.productInput.title,
            price: args.productInput.price,
          });
          try {
            const result = await product.save();

            return result;
          } catch (err) {
            console.log(err);
            throw err;
          }
        }
      },
      graphiql: true
    })
  ));

  server.use(graphQLProxy({ version: ApiVersion.October19 }))
  server.use(verifyRequest());
  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return
  });

//   server.use(async (args, req) => {
//     console.log('dwads');
//   const product = new Product({
//     title: "argle",
//     price: 42,
//   });
//   try {
//     const result = await product.save();

//     return result;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// })

  server.listen(port, () => {
    console.log(`> Ready on https://localhost:${port}`);
  });
});