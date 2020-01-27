import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card } from '@shopify/polaris';

const GET_PRODUCTS_BY_ID = gql`
query {
    shop {
      name
      primaryDomain {
        url
        host
      }
    }
  }
`;

class Abc extends React.Component {
  render() {
    return (
      <Query query={GET_PRODUCTS_BY_ID}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading…</div>;
          if (error) return <div>{error.message}</div>;
          console.log(data);
          return (
            <Card>
              <p>stuff here</p>
            </Card>
          );
        }}
      </Query>
    );
  }
}

 export default Abc;