import React from "react";

import { CollectionPreviewContainer, TitleConatainer, PreviewContainer } from "./collection-preview.styles";

import CollectionItem from "./../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleConatainer>{title.toUpperCase()}</TitleConatainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
