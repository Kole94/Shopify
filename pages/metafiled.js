import gql from 'graphql-tag';

const CREATE_METAFILED = gql`
mutation productUpdate($input: ProductInput!) {
  productUpdate(input: $input) {
    product {
      id
    }
    userErrors {
      field
      message
    }
  }
}
`;


class Metafields extends React.Component {


  render() {

    console.log('METAFIELDS');

    return (
      <Mutation
        mutation={CREATE_METAFILED}
      >
        {(handleSubmit, { error, data }) => {
          const showError = error && (
            <Banner status="critical">{error.message}</Banner>
          );

          return (
            <Frame>

              <PageActions
                primaryAction={[
                  {
                    content: 'Save',
                    onAction: () => {
                      const ProductInput = {
                        id: "gid://shopify/Product/4548010803335",
                        privateMetafields: [{
                          key: "abc",
                          namespace: "name",
                          valueInput: {
                            value: "Petar",
                            valueType: STRING
                          }
                        },
                        {
                          key: "def",
                          namespace: "space",
                          valueInput: {
                            value: "Petrovic",
                            valueType: STRING
                          }
                        }]
                      };
                        handleSubmit({
                          variables: { input: ProductInput },
                        });
                      },
                    },
                          ]}
                secondaryActions={[
                  {
                    content: 'Remove discount'
                  },
                ]}
              />

            </Frame>
          );
        }}
      </Mutation>
    );
  }
}

  export default Metafields;