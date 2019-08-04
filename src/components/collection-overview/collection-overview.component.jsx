import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectShopDataForPreview } from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => {

    return (
        <div className='collection-overview'>
            <h2>collection overview</h2>
            <div>
                    {
                        collections.map(({id, ...otherCollectionProps})=> (
                        <CollectionPreview key={id} {...otherCollectionProps} />))
                }
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopDataForPreview
})

export default connect(mapStateToProps)(CollectionOverview);