import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import SHOP_DATA from './shop.data.js';
import './shop.styles.scss';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }


    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                <h1>Collections</h1>
                <div>
                     {
                         collections.map(({id, ...otherCollectionProps})=> (
                         <CollectionPreview key={id} {...otherCollectionProps} />))
                    }
                </div>
            </div>
        );
    };

}
export default ShopPage;