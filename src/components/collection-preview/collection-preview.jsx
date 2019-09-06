import React from "react";

import CollectionItem from "../collection-item/collection-item";
import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps}></CollectionItem>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
