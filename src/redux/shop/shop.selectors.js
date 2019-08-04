import { createSelector } from 'reselect';


export const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.SHOP_DATA
);

export const selectCollection = (collectionParamUrl) => {
    return createSelector(
        [selectShopData],
        shopData => shopData[collectionParamUrl]
    );
};

export const selectShopDataForPreview = createSelector(
    [selectShopData],
    shopData => Object.keys(shopData).map((key)=>shopData[key])
)
