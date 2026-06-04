export const typedefs = `graphql
        type Product{
            title: String
            category: String
        }

        Query {
            products: [products]
        }
    `