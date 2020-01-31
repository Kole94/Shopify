import React from 'react';
import Inputbox from './Inputbox'
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import View from './View';
import Nutrition from './Nutrition';
import { Provider } from 'react-redux';
import { EmptyState, Layout, Page, Caption } from '@shopify/polaris';

function Label() {
    return (
        <Page title='Vue Nutrition Label'>

            <Layout>
                <Layout.Section oneThird>
                    <Inputbox />

                </Layout.Section >

                <Layout.Section oneThird>
                    <View />
                </Layout.Section>

                <Layout.Section oneThird>
                    <Nutrition />
                </Layout.Section>
            </Layout>
        </Page>
    );
}

export default Label;