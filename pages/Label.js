import React from 'react';
import Inputbox from './Inputbox'
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import View from './View';
import Nutrition from './Nutrition';
import { Provider } from 'react-redux';
import { EmptyState, Layout, Page } from '@shopify/polaris';

function Label() {
    return (
        <Page>
            <div className='title'>
                <h1>Vue Nutrition Label</h1>
            </div>
            <div className='content'>
                <Inputbox />
                <View />
                <Nutrition />
            </div>
        </Page>);
}

export default Label;