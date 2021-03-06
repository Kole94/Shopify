import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';
import Metafields from './metafiled';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  state = { open: false };

  saveData() {
    let query = {
      query:
        `mutation {
        createProduct(productInput: {
          title:"wadwa"
          price:99
        }){
          price
      }}`};
    fetch('https://b61cbbeb.ngrok.io/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

        'Accept': 'application/json'
      },
      body: JSON.stringify(query),
    })
      .then(resData => {
        console.log('wads');
      })
      .catch(err => {
        console.log('skoadks')
        console.log(JSON.stringify(err, null, 2));
      });
  }
  render() {


    const emptyState = !store.get('ids');
    return (
      <Page>
        <TitleBar
          primaryAction={{
            content: 'Select products',
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        {emptyState ? (
          <Layout>
            <EmptyState
              heading="Select products to start"
              action={{
                content: 'Select products',
                onAction: () => this.setState({ open: true })
              }}
              image={img}
            >
              <p>Select products and change their price temporarily</p>
            </EmptyState>
          </Layout>
        ) : (
              <ResourceListWithProducts />
          )}

      </Page>
    );
  }
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    store.set('ids', idsFromResources);
  };
}

export default Index;