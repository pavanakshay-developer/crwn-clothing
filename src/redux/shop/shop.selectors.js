import { createSelector } from "reselect";
import { memoize } from "lodash";

const selectshop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectshop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);