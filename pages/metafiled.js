import gql from 'graphql-tag';

const CREATE_METAFILED = gql`
mutation privateMetafieldUpsert($input: PrivateMetafieldInput!) {
    privateMetafieldUpsert(input: $input) {
      privateMetafield {
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
  
      return (
        <Mutation
          mutation={CREATE_METAFILED}
        >
          {(handleSubmit, { error, data }) => {
            const showError = error && (
              <Banner status="critical">{error.message}</Banner>
            );
            const showToast = data && data.productVariantUpdate && (
              <Toast
                content="Sucessfully updated"
                onDismiss={() => this.setState({ showToast: false })}
              />
            );
            return (
              <Frame>
                        <PageActions
                          primaryAction={[
                            {
                              content: 'Save',
                              onAction: () => {
                                const PrivateMetafieldInput = {
                                  key: 'key',
                                  namespace : 'namespace',
                                  
                                };
                                handleSubmit({
                                  variables: { input: PrivateMetafieldInput },
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


export default Metafields;