export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'contentful_id'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlock = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulCollaboratorsContentfulHeroContentfulSponsorsUnion>>>;
  generic_page_template?: Maybe<Array<Maybe<ContentfulGenericPageTemplate>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockEdge>;
  nodes: Array<ContentfulBlock>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockGroupConnection>;
};


export type ContentfulBlockConnectionDistinctArgs = {
  field: ContentfulBlockFieldsEnum;
};


export type ContentfulBlockConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockFieldsEnum;
};

export type ContentfulBlockEdge = {
  next?: Maybe<ContentfulBlock>;
  node: ContentfulBlock;
  previous?: Maybe<ContentfulBlock>;
};

export type ContentfulBlockFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'title'
  | 'slug'
  | 'generic_page_template'
  | 'generic_page_template___id'
  | 'generic_page_template___parent___id'
  | 'generic_page_template___parent___parent___id'
  | 'generic_page_template___parent___parent___children'
  | 'generic_page_template___parent___children'
  | 'generic_page_template___parent___children___id'
  | 'generic_page_template___parent___children___children'
  | 'generic_page_template___parent___internal___content'
  | 'generic_page_template___parent___internal___contentDigest'
  | 'generic_page_template___parent___internal___description'
  | 'generic_page_template___parent___internal___fieldOwners'
  | 'generic_page_template___parent___internal___ignoreType'
  | 'generic_page_template___parent___internal___mediaType'
  | 'generic_page_template___parent___internal___owner'
  | 'generic_page_template___parent___internal___type'
  | 'generic_page_template___children'
  | 'generic_page_template___children___id'
  | 'generic_page_template___children___parent___id'
  | 'generic_page_template___children___parent___children'
  | 'generic_page_template___children___children'
  | 'generic_page_template___children___children___id'
  | 'generic_page_template___children___children___children'
  | 'generic_page_template___children___internal___content'
  | 'generic_page_template___children___internal___contentDigest'
  | 'generic_page_template___children___internal___description'
  | 'generic_page_template___children___internal___fieldOwners'
  | 'generic_page_template___children___internal___ignoreType'
  | 'generic_page_template___children___internal___mediaType'
  | 'generic_page_template___children___internal___owner'
  | 'generic_page_template___children___internal___type'
  | 'generic_page_template___internal___content'
  | 'generic_page_template___internal___contentDigest'
  | 'generic_page_template___internal___description'
  | 'generic_page_template___internal___fieldOwners'
  | 'generic_page_template___internal___ignoreType'
  | 'generic_page_template___internal___mediaType'
  | 'generic_page_template___internal___owner'
  | 'generic_page_template___internal___type'
  | 'generic_page_template___name'
  | 'generic_page_template___pathName'
  | 'generic_page_template___seo___id'
  | 'generic_page_template___seo___parent___id'
  | 'generic_page_template___seo___parent___children'
  | 'generic_page_template___seo___children'
  | 'generic_page_template___seo___children___id'
  | 'generic_page_template___seo___children___children'
  | 'generic_page_template___seo___internal___content'
  | 'generic_page_template___seo___internal___contentDigest'
  | 'generic_page_template___seo___internal___description'
  | 'generic_page_template___seo___internal___fieldOwners'
  | 'generic_page_template___seo___internal___ignoreType'
  | 'generic_page_template___seo___internal___mediaType'
  | 'generic_page_template___seo___internal___owner'
  | 'generic_page_template___seo___internal___type'
  | 'generic_page_template___seo___name'
  | 'generic_page_template___seo___title'
  | 'generic_page_template___seo___description'
  | 'generic_page_template___seo___image___id'
  | 'generic_page_template___seo___image___children'
  | 'generic_page_template___seo___image___contentful_id'
  | 'generic_page_template___seo___image___title'
  | 'generic_page_template___seo___image___description'
  | 'generic_page_template___seo___image___node_locale'
  | 'generic_page_template___seo___generic_page_template'
  | 'generic_page_template___seo___generic_page_template___id'
  | 'generic_page_template___seo___generic_page_template___children'
  | 'generic_page_template___seo___generic_page_template___name'
  | 'generic_page_template___seo___generic_page_template___pathName'
  | 'generic_page_template___seo___generic_page_template___blocks'
  | 'generic_page_template___seo___generic_page_template___spaceId'
  | 'generic_page_template___seo___generic_page_template___contentful_id'
  | 'generic_page_template___seo___generic_page_template___createdAt'
  | 'generic_page_template___seo___generic_page_template___updatedAt'
  | 'generic_page_template___seo___generic_page_template___node_locale'
  | 'generic_page_template___seo___spaceId'
  | 'generic_page_template___seo___contentful_id'
  | 'generic_page_template___seo___createdAt'
  | 'generic_page_template___seo___updatedAt'
  | 'generic_page_template___seo___sys___revision'
  | 'generic_page_template___seo___node_locale'
  | 'generic_page_template___blocks'
  | 'generic_page_template___blocks___id'
  | 'generic_page_template___blocks___parent___id'
  | 'generic_page_template___blocks___parent___children'
  | 'generic_page_template___blocks___children'
  | 'generic_page_template___blocks___children___id'
  | 'generic_page_template___blocks___children___children'
  | 'generic_page_template___blocks___internal___content'
  | 'generic_page_template___blocks___internal___contentDigest'
  | 'generic_page_template___blocks___internal___description'
  | 'generic_page_template___blocks___internal___fieldOwners'
  | 'generic_page_template___blocks___internal___ignoreType'
  | 'generic_page_template___blocks___internal___mediaType'
  | 'generic_page_template___blocks___internal___owner'
  | 'generic_page_template___blocks___internal___type'
  | 'generic_page_template___blocks___name'
  | 'generic_page_template___blocks___title'
  | 'generic_page_template___blocks___slug'
  | 'generic_page_template___blocks___generic_page_template'
  | 'generic_page_template___blocks___generic_page_template___id'
  | 'generic_page_template___blocks___generic_page_template___children'
  | 'generic_page_template___blocks___generic_page_template___name'
  | 'generic_page_template___blocks___generic_page_template___pathName'
  | 'generic_page_template___blocks___generic_page_template___blocks'
  | 'generic_page_template___blocks___generic_page_template___spaceId'
  | 'generic_page_template___blocks___generic_page_template___contentful_id'
  | 'generic_page_template___blocks___generic_page_template___createdAt'
  | 'generic_page_template___blocks___generic_page_template___updatedAt'
  | 'generic_page_template___blocks___generic_page_template___node_locale'
  | 'generic_page_template___blocks___spaceId'
  | 'generic_page_template___blocks___contentful_id'
  | 'generic_page_template___blocks___createdAt'
  | 'generic_page_template___blocks___updatedAt'
  | 'generic_page_template___blocks___sys___revision'
  | 'generic_page_template___blocks___node_locale'
  | 'generic_page_template___spaceId'
  | 'generic_page_template___contentful_id'
  | 'generic_page_template___createdAt'
  | 'generic_page_template___updatedAt'
  | 'generic_page_template___sys___revision'
  | 'generic_page_template___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulBlockFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  generic_page_template?: Maybe<ContentfulGenericPageTemplateFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockFilterListInput = {
  elemMatch?: Maybe<ContentfulBlockFilterInput>;
};

export type ContentfulBlockGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockEdge>;
  nodes: Array<ContentfulBlock>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockSysContentType>;
};

export type ContentfulBlockSysContentType = {
  sys?: Maybe<ContentfulBlockSysContentTypeSys>;
};

export type ContentfulBlockSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockSysContentTypeSysFilterInput>;
};

export type ContentfulBlockSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockSysContentTypeFilterInput>;
};

export type ContentfulCollaborator = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  collaborators?: Maybe<Array<Maybe<ContentfulCollaborators>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCollaboratorSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulCollaboratorCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCollaboratorUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCollaboratorConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCollaboratorEdge>;
  nodes: Array<ContentfulCollaborator>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCollaboratorGroupConnection>;
};


export type ContentfulCollaboratorConnectionDistinctArgs = {
  field: ContentfulCollaboratorFieldsEnum;
};


export type ContentfulCollaboratorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCollaboratorFieldsEnum;
};

export type ContentfulCollaboratorEdge = {
  next?: Maybe<ContentfulCollaborator>;
  node: ContentfulCollaborator;
  previous?: Maybe<ContentfulCollaborator>;
};

export type ContentfulCollaboratorFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'image___contentful_id'
  | 'image___file___url'
  | 'image___file___details___size'
  | 'image___file___fileName'
  | 'image___file___contentType'
  | 'image___title'
  | 'image___description'
  | 'image___node_locale'
  | 'image___fixed___base64'
  | 'image___fixed___tracedSVG'
  | 'image___fixed___aspectRatio'
  | 'image___fixed___width'
  | 'image___fixed___height'
  | 'image___fixed___src'
  | 'image___fixed___srcSet'
  | 'image___fixed___srcWebp'
  | 'image___fixed___srcSetWebp'
  | 'image___resolutions___base64'
  | 'image___resolutions___tracedSVG'
  | 'image___resolutions___aspectRatio'
  | 'image___resolutions___width'
  | 'image___resolutions___height'
  | 'image___resolutions___src'
  | 'image___resolutions___srcSet'
  | 'image___resolutions___srcWebp'
  | 'image___resolutions___srcSetWebp'
  | 'image___fluid___base64'
  | 'image___fluid___tracedSVG'
  | 'image___fluid___aspectRatio'
  | 'image___fluid___src'
  | 'image___fluid___srcSet'
  | 'image___fluid___srcWebp'
  | 'image___fluid___srcSetWebp'
  | 'image___fluid___sizes'
  | 'image___sizes___base64'
  | 'image___sizes___tracedSVG'
  | 'image___sizes___aspectRatio'
  | 'image___sizes___src'
  | 'image___sizes___srcSet'
  | 'image___sizes___srcWebp'
  | 'image___sizes___srcSetWebp'
  | 'image___sizes___sizes'
  | 'image___resize___base64'
  | 'image___resize___tracedSVG'
  | 'image___resize___src'
  | 'image___resize___width'
  | 'image___resize___height'
  | 'image___resize___aspectRatio'
  | 'collaborators'
  | 'collaborators___id'
  | 'collaborators___parent___id'
  | 'collaborators___parent___parent___id'
  | 'collaborators___parent___parent___children'
  | 'collaborators___parent___children'
  | 'collaborators___parent___children___id'
  | 'collaborators___parent___children___children'
  | 'collaborators___parent___internal___content'
  | 'collaborators___parent___internal___contentDigest'
  | 'collaborators___parent___internal___description'
  | 'collaborators___parent___internal___fieldOwners'
  | 'collaborators___parent___internal___ignoreType'
  | 'collaborators___parent___internal___mediaType'
  | 'collaborators___parent___internal___owner'
  | 'collaborators___parent___internal___type'
  | 'collaborators___children'
  | 'collaborators___children___id'
  | 'collaborators___children___parent___id'
  | 'collaborators___children___parent___children'
  | 'collaborators___children___children'
  | 'collaborators___children___children___id'
  | 'collaborators___children___children___children'
  | 'collaborators___children___internal___content'
  | 'collaborators___children___internal___contentDigest'
  | 'collaborators___children___internal___description'
  | 'collaborators___children___internal___fieldOwners'
  | 'collaborators___children___internal___ignoreType'
  | 'collaborators___children___internal___mediaType'
  | 'collaborators___children___internal___owner'
  | 'collaborators___children___internal___type'
  | 'collaborators___internal___content'
  | 'collaborators___internal___contentDigest'
  | 'collaborators___internal___description'
  | 'collaborators___internal___fieldOwners'
  | 'collaborators___internal___ignoreType'
  | 'collaborators___internal___mediaType'
  | 'collaborators___internal___owner'
  | 'collaborators___internal___type'
  | 'collaborators___name'
  | 'collaborators___list'
  | 'collaborators___list___id'
  | 'collaborators___list___parent___id'
  | 'collaborators___list___parent___children'
  | 'collaborators___list___children'
  | 'collaborators___list___children___id'
  | 'collaborators___list___children___children'
  | 'collaborators___list___internal___content'
  | 'collaborators___list___internal___contentDigest'
  | 'collaborators___list___internal___description'
  | 'collaborators___list___internal___fieldOwners'
  | 'collaborators___list___internal___ignoreType'
  | 'collaborators___list___internal___mediaType'
  | 'collaborators___list___internal___owner'
  | 'collaborators___list___internal___type'
  | 'collaborators___list___name'
  | 'collaborators___list___image___id'
  | 'collaborators___list___image___children'
  | 'collaborators___list___image___contentful_id'
  | 'collaborators___list___image___title'
  | 'collaborators___list___image___description'
  | 'collaborators___list___image___node_locale'
  | 'collaborators___list___collaborators'
  | 'collaborators___list___collaborators___id'
  | 'collaborators___list___collaborators___children'
  | 'collaborators___list___collaborators___name'
  | 'collaborators___list___collaborators___list'
  | 'collaborators___list___collaborators___block'
  | 'collaborators___list___collaborators___spaceId'
  | 'collaborators___list___collaborators___contentful_id'
  | 'collaborators___list___collaborators___createdAt'
  | 'collaborators___list___collaborators___updatedAt'
  | 'collaborators___list___collaborators___node_locale'
  | 'collaborators___list___spaceId'
  | 'collaborators___list___contentful_id'
  | 'collaborators___list___createdAt'
  | 'collaborators___list___updatedAt'
  | 'collaborators___list___sys___revision'
  | 'collaborators___list___node_locale'
  | 'collaborators___block'
  | 'collaborators___block___id'
  | 'collaborators___block___parent___id'
  | 'collaborators___block___parent___children'
  | 'collaborators___block___children'
  | 'collaborators___block___children___id'
  | 'collaborators___block___children___children'
  | 'collaborators___block___internal___content'
  | 'collaborators___block___internal___contentDigest'
  | 'collaborators___block___internal___description'
  | 'collaborators___block___internal___fieldOwners'
  | 'collaborators___block___internal___ignoreType'
  | 'collaborators___block___internal___mediaType'
  | 'collaborators___block___internal___owner'
  | 'collaborators___block___internal___type'
  | 'collaborators___block___name'
  | 'collaborators___block___title'
  | 'collaborators___block___slug'
  | 'collaborators___block___generic_page_template'
  | 'collaborators___block___generic_page_template___id'
  | 'collaborators___block___generic_page_template___children'
  | 'collaborators___block___generic_page_template___name'
  | 'collaborators___block___generic_page_template___pathName'
  | 'collaborators___block___generic_page_template___blocks'
  | 'collaborators___block___generic_page_template___spaceId'
  | 'collaborators___block___generic_page_template___contentful_id'
  | 'collaborators___block___generic_page_template___createdAt'
  | 'collaborators___block___generic_page_template___updatedAt'
  | 'collaborators___block___generic_page_template___node_locale'
  | 'collaborators___block___spaceId'
  | 'collaborators___block___contentful_id'
  | 'collaborators___block___createdAt'
  | 'collaborators___block___updatedAt'
  | 'collaborators___block___sys___revision'
  | 'collaborators___block___node_locale'
  | 'collaborators___copy___id'
  | 'collaborators___copy___parent___id'
  | 'collaborators___copy___parent___children'
  | 'collaborators___copy___children'
  | 'collaborators___copy___children___id'
  | 'collaborators___copy___children___children'
  | 'collaborators___copy___internal___content'
  | 'collaborators___copy___internal___contentDigest'
  | 'collaborators___copy___internal___description'
  | 'collaborators___copy___internal___fieldOwners'
  | 'collaborators___copy___internal___ignoreType'
  | 'collaborators___copy___internal___mediaType'
  | 'collaborators___copy___internal___owner'
  | 'collaborators___copy___internal___type'
  | 'collaborators___copy___content'
  | 'collaborators___copy___content___content'
  | 'collaborators___copy___content___nodeType'
  | 'collaborators___copy___nodeType'
  | 'collaborators___copy___copy'
  | 'collaborators___copy___json'
  | 'collaborators___spaceId'
  | 'collaborators___contentful_id'
  | 'collaborators___createdAt'
  | 'collaborators___updatedAt'
  | 'collaborators___sys___revision'
  | 'collaborators___node_locale'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___id'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___parent___id'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___parent___children'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___children'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___children___id'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___children___children'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___internal___content'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___internal___contentDigest'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___internal___description'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___internal___fieldOwners'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___internal___ignoreType'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___internal___mediaType'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___internal___owner'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___internal___type'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___content'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___content___content'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___content___nodeType'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___nodeType'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___copy'
  | 'collaborators___childContentfulCollaboratorsCopyRichTextNode___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulCollaboratorFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  collaborators?: Maybe<ContentfulCollaboratorsFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCollaboratorSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCollaboratorFilterListInput = {
  elemMatch?: Maybe<ContentfulCollaboratorFilterInput>;
};

export type ContentfulCollaboratorGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCollaboratorEdge>;
  nodes: Array<ContentfulCollaborator>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCollaborators = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  list?: Maybe<Array<Maybe<ContentfulCollaborator>>>;
  block?: Maybe<Array<Maybe<ContentfulBlock>>>;
  copy?: Maybe<ContentfulCollaboratorsCopyRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCollaboratorsSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulCollaboratorsCopyRichTextNode?: Maybe<ContentfulCollaboratorsCopyRichTextNode>;
};


export type ContentfulCollaboratorsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCollaboratorsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCollaboratorsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCollaboratorsEdge>;
  nodes: Array<ContentfulCollaborators>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCollaboratorsGroupConnection>;
};


export type ContentfulCollaboratorsConnectionDistinctArgs = {
  field: ContentfulCollaboratorsFieldsEnum;
};


export type ContentfulCollaboratorsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCollaboratorsFieldsEnum;
};

export type ContentfulCollaboratorsContentfulHeroContentfulSponsorsUnion = ContentfulCollaborators | ContentfulHero | ContentfulSponsors;

export type ContentfulCollaboratorsCopyRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Array<Maybe<ContentfulCollaboratorsCopyRichTextNodeContent>>>;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulCollaboratorsCopyRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCollaboratorsCopyRichTextNodeEdge>;
  nodes: Array<ContentfulCollaboratorsCopyRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCollaboratorsCopyRichTextNodeGroupConnection>;
};


export type ContentfulCollaboratorsCopyRichTextNodeConnectionDistinctArgs = {
  field: ContentfulCollaboratorsCopyRichTextNodeFieldsEnum;
};


export type ContentfulCollaboratorsCopyRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCollaboratorsCopyRichTextNodeFieldsEnum;
};

export type ContentfulCollaboratorsCopyRichTextNodeContent = {
  content?: Maybe<Array<Maybe<ContentfulCollaboratorsCopyRichTextNodeContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulCollaboratorsCopyRichTextNodeContentContent = {
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulCollaboratorsCopyRichTextNodeContentContentFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCollaboratorsCopyRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulCollaboratorsCopyRichTextNodeContentContentFilterInput>;
};

export type ContentfulCollaboratorsCopyRichTextNodeContentFilterInput = {
  content?: Maybe<ContentfulCollaboratorsCopyRichTextNodeContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCollaboratorsCopyRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulCollaboratorsCopyRichTextNodeContentFilterInput>;
};

export type ContentfulCollaboratorsCopyRichTextNodeEdge = {
  next?: Maybe<ContentfulCollaboratorsCopyRichTextNode>;
  node: ContentfulCollaboratorsCopyRichTextNode;
  previous?: Maybe<ContentfulCollaboratorsCopyRichTextNode>;
};

export type ContentfulCollaboratorsCopyRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'content'
  | 'content___content'
  | 'content___content___value'
  | 'content___content___nodeType'
  | 'content___nodeType'
  | 'nodeType'
  | 'copy'
  | 'json';

export type ContentfulCollaboratorsCopyRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulCollaboratorsCopyRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulCollaboratorsCopyRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCollaboratorsCopyRichTextNodeEdge>;
  nodes: Array<ContentfulCollaboratorsCopyRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCollaboratorsCopyRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCollaboratorsCopyRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCollaboratorsEdge = {
  next?: Maybe<ContentfulCollaborators>;
  node: ContentfulCollaborators;
  previous?: Maybe<ContentfulCollaborators>;
};

export type ContentfulCollaboratorsFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'list'
  | 'list___id'
  | 'list___parent___id'
  | 'list___parent___parent___id'
  | 'list___parent___parent___children'
  | 'list___parent___children'
  | 'list___parent___children___id'
  | 'list___parent___children___children'
  | 'list___parent___internal___content'
  | 'list___parent___internal___contentDigest'
  | 'list___parent___internal___description'
  | 'list___parent___internal___fieldOwners'
  | 'list___parent___internal___ignoreType'
  | 'list___parent___internal___mediaType'
  | 'list___parent___internal___owner'
  | 'list___parent___internal___type'
  | 'list___children'
  | 'list___children___id'
  | 'list___children___parent___id'
  | 'list___children___parent___children'
  | 'list___children___children'
  | 'list___children___children___id'
  | 'list___children___children___children'
  | 'list___children___internal___content'
  | 'list___children___internal___contentDigest'
  | 'list___children___internal___description'
  | 'list___children___internal___fieldOwners'
  | 'list___children___internal___ignoreType'
  | 'list___children___internal___mediaType'
  | 'list___children___internal___owner'
  | 'list___children___internal___type'
  | 'list___internal___content'
  | 'list___internal___contentDigest'
  | 'list___internal___description'
  | 'list___internal___fieldOwners'
  | 'list___internal___ignoreType'
  | 'list___internal___mediaType'
  | 'list___internal___owner'
  | 'list___internal___type'
  | 'list___name'
  | 'list___image___id'
  | 'list___image___parent___id'
  | 'list___image___parent___children'
  | 'list___image___children'
  | 'list___image___children___id'
  | 'list___image___children___children'
  | 'list___image___internal___content'
  | 'list___image___internal___contentDigest'
  | 'list___image___internal___description'
  | 'list___image___internal___fieldOwners'
  | 'list___image___internal___ignoreType'
  | 'list___image___internal___mediaType'
  | 'list___image___internal___owner'
  | 'list___image___internal___type'
  | 'list___image___contentful_id'
  | 'list___image___file___url'
  | 'list___image___file___fileName'
  | 'list___image___file___contentType'
  | 'list___image___title'
  | 'list___image___description'
  | 'list___image___node_locale'
  | 'list___image___fixed___base64'
  | 'list___image___fixed___tracedSVG'
  | 'list___image___fixed___aspectRatio'
  | 'list___image___fixed___width'
  | 'list___image___fixed___height'
  | 'list___image___fixed___src'
  | 'list___image___fixed___srcSet'
  | 'list___image___fixed___srcWebp'
  | 'list___image___fixed___srcSetWebp'
  | 'list___image___resolutions___base64'
  | 'list___image___resolutions___tracedSVG'
  | 'list___image___resolutions___aspectRatio'
  | 'list___image___resolutions___width'
  | 'list___image___resolutions___height'
  | 'list___image___resolutions___src'
  | 'list___image___resolutions___srcSet'
  | 'list___image___resolutions___srcWebp'
  | 'list___image___resolutions___srcSetWebp'
  | 'list___image___fluid___base64'
  | 'list___image___fluid___tracedSVG'
  | 'list___image___fluid___aspectRatio'
  | 'list___image___fluid___src'
  | 'list___image___fluid___srcSet'
  | 'list___image___fluid___srcWebp'
  | 'list___image___fluid___srcSetWebp'
  | 'list___image___fluid___sizes'
  | 'list___image___sizes___base64'
  | 'list___image___sizes___tracedSVG'
  | 'list___image___sizes___aspectRatio'
  | 'list___image___sizes___src'
  | 'list___image___sizes___srcSet'
  | 'list___image___sizes___srcWebp'
  | 'list___image___sizes___srcSetWebp'
  | 'list___image___sizes___sizes'
  | 'list___image___resize___base64'
  | 'list___image___resize___tracedSVG'
  | 'list___image___resize___src'
  | 'list___image___resize___width'
  | 'list___image___resize___height'
  | 'list___image___resize___aspectRatio'
  | 'list___collaborators'
  | 'list___collaborators___id'
  | 'list___collaborators___parent___id'
  | 'list___collaborators___parent___children'
  | 'list___collaborators___children'
  | 'list___collaborators___children___id'
  | 'list___collaborators___children___children'
  | 'list___collaborators___internal___content'
  | 'list___collaborators___internal___contentDigest'
  | 'list___collaborators___internal___description'
  | 'list___collaborators___internal___fieldOwners'
  | 'list___collaborators___internal___ignoreType'
  | 'list___collaborators___internal___mediaType'
  | 'list___collaborators___internal___owner'
  | 'list___collaborators___internal___type'
  | 'list___collaborators___name'
  | 'list___collaborators___list'
  | 'list___collaborators___list___id'
  | 'list___collaborators___list___children'
  | 'list___collaborators___list___name'
  | 'list___collaborators___list___collaborators'
  | 'list___collaborators___list___spaceId'
  | 'list___collaborators___list___contentful_id'
  | 'list___collaborators___list___createdAt'
  | 'list___collaborators___list___updatedAt'
  | 'list___collaborators___list___node_locale'
  | 'list___collaborators___block'
  | 'list___collaborators___block___id'
  | 'list___collaborators___block___children'
  | 'list___collaborators___block___name'
  | 'list___collaborators___block___title'
  | 'list___collaborators___block___slug'
  | 'list___collaborators___block___generic_page_template'
  | 'list___collaborators___block___spaceId'
  | 'list___collaborators___block___contentful_id'
  | 'list___collaborators___block___createdAt'
  | 'list___collaborators___block___updatedAt'
  | 'list___collaborators___block___node_locale'
  | 'list___collaborators___copy___id'
  | 'list___collaborators___copy___children'
  | 'list___collaborators___copy___content'
  | 'list___collaborators___copy___nodeType'
  | 'list___collaborators___copy___copy'
  | 'list___collaborators___copy___json'
  | 'list___collaborators___spaceId'
  | 'list___collaborators___contentful_id'
  | 'list___collaborators___createdAt'
  | 'list___collaborators___updatedAt'
  | 'list___collaborators___sys___revision'
  | 'list___collaborators___node_locale'
  | 'list___collaborators___childContentfulCollaboratorsCopyRichTextNode___id'
  | 'list___collaborators___childContentfulCollaboratorsCopyRichTextNode___children'
  | 'list___collaborators___childContentfulCollaboratorsCopyRichTextNode___content'
  | 'list___collaborators___childContentfulCollaboratorsCopyRichTextNode___nodeType'
  | 'list___collaborators___childContentfulCollaboratorsCopyRichTextNode___copy'
  | 'list___collaborators___childContentfulCollaboratorsCopyRichTextNode___json'
  | 'list___spaceId'
  | 'list___contentful_id'
  | 'list___createdAt'
  | 'list___updatedAt'
  | 'list___sys___revision'
  | 'list___node_locale'
  | 'block'
  | 'block___id'
  | 'block___parent___id'
  | 'block___parent___parent___id'
  | 'block___parent___parent___children'
  | 'block___parent___children'
  | 'block___parent___children___id'
  | 'block___parent___children___children'
  | 'block___parent___internal___content'
  | 'block___parent___internal___contentDigest'
  | 'block___parent___internal___description'
  | 'block___parent___internal___fieldOwners'
  | 'block___parent___internal___ignoreType'
  | 'block___parent___internal___mediaType'
  | 'block___parent___internal___owner'
  | 'block___parent___internal___type'
  | 'block___children'
  | 'block___children___id'
  | 'block___children___parent___id'
  | 'block___children___parent___children'
  | 'block___children___children'
  | 'block___children___children___id'
  | 'block___children___children___children'
  | 'block___children___internal___content'
  | 'block___children___internal___contentDigest'
  | 'block___children___internal___description'
  | 'block___children___internal___fieldOwners'
  | 'block___children___internal___ignoreType'
  | 'block___children___internal___mediaType'
  | 'block___children___internal___owner'
  | 'block___children___internal___type'
  | 'block___internal___content'
  | 'block___internal___contentDigest'
  | 'block___internal___description'
  | 'block___internal___fieldOwners'
  | 'block___internal___ignoreType'
  | 'block___internal___mediaType'
  | 'block___internal___owner'
  | 'block___internal___type'
  | 'block___name'
  | 'block___title'
  | 'block___slug'
  | 'block___generic_page_template'
  | 'block___generic_page_template___id'
  | 'block___generic_page_template___parent___id'
  | 'block___generic_page_template___parent___children'
  | 'block___generic_page_template___children'
  | 'block___generic_page_template___children___id'
  | 'block___generic_page_template___children___children'
  | 'block___generic_page_template___internal___content'
  | 'block___generic_page_template___internal___contentDigest'
  | 'block___generic_page_template___internal___description'
  | 'block___generic_page_template___internal___fieldOwners'
  | 'block___generic_page_template___internal___ignoreType'
  | 'block___generic_page_template___internal___mediaType'
  | 'block___generic_page_template___internal___owner'
  | 'block___generic_page_template___internal___type'
  | 'block___generic_page_template___name'
  | 'block___generic_page_template___pathName'
  | 'block___generic_page_template___seo___id'
  | 'block___generic_page_template___seo___children'
  | 'block___generic_page_template___seo___name'
  | 'block___generic_page_template___seo___title'
  | 'block___generic_page_template___seo___description'
  | 'block___generic_page_template___seo___generic_page_template'
  | 'block___generic_page_template___seo___spaceId'
  | 'block___generic_page_template___seo___contentful_id'
  | 'block___generic_page_template___seo___createdAt'
  | 'block___generic_page_template___seo___updatedAt'
  | 'block___generic_page_template___seo___node_locale'
  | 'block___generic_page_template___blocks'
  | 'block___generic_page_template___blocks___id'
  | 'block___generic_page_template___blocks___children'
  | 'block___generic_page_template___blocks___name'
  | 'block___generic_page_template___blocks___title'
  | 'block___generic_page_template___blocks___slug'
  | 'block___generic_page_template___blocks___generic_page_template'
  | 'block___generic_page_template___blocks___spaceId'
  | 'block___generic_page_template___blocks___contentful_id'
  | 'block___generic_page_template___blocks___createdAt'
  | 'block___generic_page_template___blocks___updatedAt'
  | 'block___generic_page_template___blocks___node_locale'
  | 'block___generic_page_template___spaceId'
  | 'block___generic_page_template___contentful_id'
  | 'block___generic_page_template___createdAt'
  | 'block___generic_page_template___updatedAt'
  | 'block___generic_page_template___sys___revision'
  | 'block___generic_page_template___node_locale'
  | 'block___spaceId'
  | 'block___contentful_id'
  | 'block___createdAt'
  | 'block___updatedAt'
  | 'block___sys___revision'
  | 'block___node_locale'
  | 'copy___id'
  | 'copy___parent___id'
  | 'copy___parent___parent___id'
  | 'copy___parent___parent___children'
  | 'copy___parent___children'
  | 'copy___parent___children___id'
  | 'copy___parent___children___children'
  | 'copy___parent___internal___content'
  | 'copy___parent___internal___contentDigest'
  | 'copy___parent___internal___description'
  | 'copy___parent___internal___fieldOwners'
  | 'copy___parent___internal___ignoreType'
  | 'copy___parent___internal___mediaType'
  | 'copy___parent___internal___owner'
  | 'copy___parent___internal___type'
  | 'copy___children'
  | 'copy___children___id'
  | 'copy___children___parent___id'
  | 'copy___children___parent___children'
  | 'copy___children___children'
  | 'copy___children___children___id'
  | 'copy___children___children___children'
  | 'copy___children___internal___content'
  | 'copy___children___internal___contentDigest'
  | 'copy___children___internal___description'
  | 'copy___children___internal___fieldOwners'
  | 'copy___children___internal___ignoreType'
  | 'copy___children___internal___mediaType'
  | 'copy___children___internal___owner'
  | 'copy___children___internal___type'
  | 'copy___internal___content'
  | 'copy___internal___contentDigest'
  | 'copy___internal___description'
  | 'copy___internal___fieldOwners'
  | 'copy___internal___ignoreType'
  | 'copy___internal___mediaType'
  | 'copy___internal___owner'
  | 'copy___internal___type'
  | 'copy___content'
  | 'copy___content___content'
  | 'copy___content___content___value'
  | 'copy___content___content___nodeType'
  | 'copy___content___nodeType'
  | 'copy___nodeType'
  | 'copy___copy'
  | 'copy___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulCollaboratorsCopyRichTextNode___id'
  | 'childContentfulCollaboratorsCopyRichTextNode___parent___id'
  | 'childContentfulCollaboratorsCopyRichTextNode___parent___parent___id'
  | 'childContentfulCollaboratorsCopyRichTextNode___parent___parent___children'
  | 'childContentfulCollaboratorsCopyRichTextNode___parent___children'
  | 'childContentfulCollaboratorsCopyRichTextNode___parent___children___id'
  | 'childContentfulCollaboratorsCopyRichTextNode___parent___children___children'
  | 'childContentfulCollaboratorsCopyRichTextNode___parent___internal___content'
  | 'childContentfulCollaboratorsCopyRichTextNode___parent___internal___contentDigest'
  | 'childContentfulCollaboratorsCopyRichTextNode___parent___internal___description'
  | 'childContentfulCollaboratorsCopyRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulCollaboratorsCopyRichTextNode___parent___internal___ignoreType'
  | 'childContentfulCollaboratorsCopyRichTextNode___parent___internal___mediaType'
  | 'childContentfulCollaboratorsCopyRichTextNode___parent___internal___owner'
  | 'childContentfulCollaboratorsCopyRichTextNode___parent___internal___type'
  | 'childContentfulCollaboratorsCopyRichTextNode___children'
  | 'childContentfulCollaboratorsCopyRichTextNode___children___id'
  | 'childContentfulCollaboratorsCopyRichTextNode___children___parent___id'
  | 'childContentfulCollaboratorsCopyRichTextNode___children___parent___children'
  | 'childContentfulCollaboratorsCopyRichTextNode___children___children'
  | 'childContentfulCollaboratorsCopyRichTextNode___children___children___id'
  | 'childContentfulCollaboratorsCopyRichTextNode___children___children___children'
  | 'childContentfulCollaboratorsCopyRichTextNode___children___internal___content'
  | 'childContentfulCollaboratorsCopyRichTextNode___children___internal___contentDigest'
  | 'childContentfulCollaboratorsCopyRichTextNode___children___internal___description'
  | 'childContentfulCollaboratorsCopyRichTextNode___children___internal___fieldOwners'
  | 'childContentfulCollaboratorsCopyRichTextNode___children___internal___ignoreType'
  | 'childContentfulCollaboratorsCopyRichTextNode___children___internal___mediaType'
  | 'childContentfulCollaboratorsCopyRichTextNode___children___internal___owner'
  | 'childContentfulCollaboratorsCopyRichTextNode___children___internal___type'
  | 'childContentfulCollaboratorsCopyRichTextNode___internal___content'
  | 'childContentfulCollaboratorsCopyRichTextNode___internal___contentDigest'
  | 'childContentfulCollaboratorsCopyRichTextNode___internal___description'
  | 'childContentfulCollaboratorsCopyRichTextNode___internal___fieldOwners'
  | 'childContentfulCollaboratorsCopyRichTextNode___internal___ignoreType'
  | 'childContentfulCollaboratorsCopyRichTextNode___internal___mediaType'
  | 'childContentfulCollaboratorsCopyRichTextNode___internal___owner'
  | 'childContentfulCollaboratorsCopyRichTextNode___internal___type'
  | 'childContentfulCollaboratorsCopyRichTextNode___content'
  | 'childContentfulCollaboratorsCopyRichTextNode___content___content'
  | 'childContentfulCollaboratorsCopyRichTextNode___content___content___value'
  | 'childContentfulCollaboratorsCopyRichTextNode___content___content___nodeType'
  | 'childContentfulCollaboratorsCopyRichTextNode___content___nodeType'
  | 'childContentfulCollaboratorsCopyRichTextNode___nodeType'
  | 'childContentfulCollaboratorsCopyRichTextNode___copy'
  | 'childContentfulCollaboratorsCopyRichTextNode___json';

export type ContentfulCollaboratorsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  list?: Maybe<ContentfulCollaboratorFilterListInput>;
  block?: Maybe<ContentfulBlockFilterListInput>;
  copy?: Maybe<ContentfulCollaboratorsCopyRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCollaboratorsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulCollaboratorsCopyRichTextNode?: Maybe<ContentfulCollaboratorsCopyRichTextNodeFilterInput>;
};

export type ContentfulCollaboratorsFilterListInput = {
  elemMatch?: Maybe<ContentfulCollaboratorsFilterInput>;
};

export type ContentfulCollaboratorsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCollaboratorsEdge>;
  nodes: Array<ContentfulCollaborators>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCollaboratorSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCollaboratorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCollaboratorsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCollaboratorsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCollaboratorsSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCollaboratorsSysContentType>;
};

export type ContentfulCollaboratorsSysContentType = {
  sys?: Maybe<ContentfulCollaboratorsSysContentTypeSys>;
};

export type ContentfulCollaboratorsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCollaboratorsSysContentTypeSysFilterInput>;
};

export type ContentfulCollaboratorsSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulCollaboratorsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCollaboratorsSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulCollaboratorsSysContentTypeFilterInput>;
};

export type ContentfulCollaboratorSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCollaboratorSysContentType>;
};

export type ContentfulCollaboratorSysContentType = {
  sys?: Maybe<ContentfulCollaboratorSysContentTypeSys>;
};

export type ContentfulCollaboratorSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCollaboratorSysContentTypeSysFilterInput>;
};

export type ContentfulCollaboratorSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulCollaboratorSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCollaboratorSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulCollaboratorSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCta = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  test?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCtaSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulCtaCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCtaUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCtaConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCtaEdge>;
  nodes: Array<ContentfulCta>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCtaGroupConnection>;
};


export type ContentfulCtaConnectionDistinctArgs = {
  field: ContentfulCtaFieldsEnum;
};


export type ContentfulCtaConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCtaFieldsEnum;
};

export type ContentfulCtaEdge = {
  next?: Maybe<ContentfulCta>;
  node: ContentfulCta;
  previous?: Maybe<ContentfulCta>;
};

export type ContentfulCtaFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'test'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulCtaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  test?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCtaSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCtaGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCtaEdge>;
  nodes: Array<ContentfulCta>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCtaSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCtaFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCtaSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCtaSysContentType>;
};

export type ContentfulCtaSysContentType = {
  sys?: Maybe<ContentfulCtaSysContentTypeSys>;
};

export type ContentfulCtaSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCtaSysContentTypeSysFilterInput>;
};

export type ContentfulCtaSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulCtaSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCtaSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulCtaSysContentTypeFilterInput>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulGenericPageTemplate = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  pathName?: Maybe<Scalars['String']>;
  seo?: Maybe<ContentfulSeoMetaData>;
  blocks?: Maybe<Array<Maybe<ContentfulBlock>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulGenericPageTemplateSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulGenericPageTemplateCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulGenericPageTemplateUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulGenericPageTemplateConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGenericPageTemplateEdge>;
  nodes: Array<ContentfulGenericPageTemplate>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulGenericPageTemplateGroupConnection>;
};


export type ContentfulGenericPageTemplateConnectionDistinctArgs = {
  field: ContentfulGenericPageTemplateFieldsEnum;
};


export type ContentfulGenericPageTemplateConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulGenericPageTemplateFieldsEnum;
};

export type ContentfulGenericPageTemplateEdge = {
  next?: Maybe<ContentfulGenericPageTemplate>;
  node: ContentfulGenericPageTemplate;
  previous?: Maybe<ContentfulGenericPageTemplate>;
};

export type ContentfulGenericPageTemplateFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'pathName'
  | 'seo___id'
  | 'seo___parent___id'
  | 'seo___parent___parent___id'
  | 'seo___parent___parent___children'
  | 'seo___parent___children'
  | 'seo___parent___children___id'
  | 'seo___parent___children___children'
  | 'seo___parent___internal___content'
  | 'seo___parent___internal___contentDigest'
  | 'seo___parent___internal___description'
  | 'seo___parent___internal___fieldOwners'
  | 'seo___parent___internal___ignoreType'
  | 'seo___parent___internal___mediaType'
  | 'seo___parent___internal___owner'
  | 'seo___parent___internal___type'
  | 'seo___children'
  | 'seo___children___id'
  | 'seo___children___parent___id'
  | 'seo___children___parent___children'
  | 'seo___children___children'
  | 'seo___children___children___id'
  | 'seo___children___children___children'
  | 'seo___children___internal___content'
  | 'seo___children___internal___contentDigest'
  | 'seo___children___internal___description'
  | 'seo___children___internal___fieldOwners'
  | 'seo___children___internal___ignoreType'
  | 'seo___children___internal___mediaType'
  | 'seo___children___internal___owner'
  | 'seo___children___internal___type'
  | 'seo___internal___content'
  | 'seo___internal___contentDigest'
  | 'seo___internal___description'
  | 'seo___internal___fieldOwners'
  | 'seo___internal___ignoreType'
  | 'seo___internal___mediaType'
  | 'seo___internal___owner'
  | 'seo___internal___type'
  | 'seo___name'
  | 'seo___title'
  | 'seo___description'
  | 'seo___image___id'
  | 'seo___image___parent___id'
  | 'seo___image___parent___children'
  | 'seo___image___children'
  | 'seo___image___children___id'
  | 'seo___image___children___children'
  | 'seo___image___internal___content'
  | 'seo___image___internal___contentDigest'
  | 'seo___image___internal___description'
  | 'seo___image___internal___fieldOwners'
  | 'seo___image___internal___ignoreType'
  | 'seo___image___internal___mediaType'
  | 'seo___image___internal___owner'
  | 'seo___image___internal___type'
  | 'seo___image___contentful_id'
  | 'seo___image___file___url'
  | 'seo___image___file___fileName'
  | 'seo___image___file___contentType'
  | 'seo___image___title'
  | 'seo___image___description'
  | 'seo___image___node_locale'
  | 'seo___image___fixed___base64'
  | 'seo___image___fixed___tracedSVG'
  | 'seo___image___fixed___aspectRatio'
  | 'seo___image___fixed___width'
  | 'seo___image___fixed___height'
  | 'seo___image___fixed___src'
  | 'seo___image___fixed___srcSet'
  | 'seo___image___fixed___srcWebp'
  | 'seo___image___fixed___srcSetWebp'
  | 'seo___image___resolutions___base64'
  | 'seo___image___resolutions___tracedSVG'
  | 'seo___image___resolutions___aspectRatio'
  | 'seo___image___resolutions___width'
  | 'seo___image___resolutions___height'
  | 'seo___image___resolutions___src'
  | 'seo___image___resolutions___srcSet'
  | 'seo___image___resolutions___srcWebp'
  | 'seo___image___resolutions___srcSetWebp'
  | 'seo___image___fluid___base64'
  | 'seo___image___fluid___tracedSVG'
  | 'seo___image___fluid___aspectRatio'
  | 'seo___image___fluid___src'
  | 'seo___image___fluid___srcSet'
  | 'seo___image___fluid___srcWebp'
  | 'seo___image___fluid___srcSetWebp'
  | 'seo___image___fluid___sizes'
  | 'seo___image___sizes___base64'
  | 'seo___image___sizes___tracedSVG'
  | 'seo___image___sizes___aspectRatio'
  | 'seo___image___sizes___src'
  | 'seo___image___sizes___srcSet'
  | 'seo___image___sizes___srcWebp'
  | 'seo___image___sizes___srcSetWebp'
  | 'seo___image___sizes___sizes'
  | 'seo___image___resize___base64'
  | 'seo___image___resize___tracedSVG'
  | 'seo___image___resize___src'
  | 'seo___image___resize___width'
  | 'seo___image___resize___height'
  | 'seo___image___resize___aspectRatio'
  | 'seo___generic_page_template'
  | 'seo___generic_page_template___id'
  | 'seo___generic_page_template___parent___id'
  | 'seo___generic_page_template___parent___children'
  | 'seo___generic_page_template___children'
  | 'seo___generic_page_template___children___id'
  | 'seo___generic_page_template___children___children'
  | 'seo___generic_page_template___internal___content'
  | 'seo___generic_page_template___internal___contentDigest'
  | 'seo___generic_page_template___internal___description'
  | 'seo___generic_page_template___internal___fieldOwners'
  | 'seo___generic_page_template___internal___ignoreType'
  | 'seo___generic_page_template___internal___mediaType'
  | 'seo___generic_page_template___internal___owner'
  | 'seo___generic_page_template___internal___type'
  | 'seo___generic_page_template___name'
  | 'seo___generic_page_template___pathName'
  | 'seo___generic_page_template___seo___id'
  | 'seo___generic_page_template___seo___children'
  | 'seo___generic_page_template___seo___name'
  | 'seo___generic_page_template___seo___title'
  | 'seo___generic_page_template___seo___description'
  | 'seo___generic_page_template___seo___generic_page_template'
  | 'seo___generic_page_template___seo___spaceId'
  | 'seo___generic_page_template___seo___contentful_id'
  | 'seo___generic_page_template___seo___createdAt'
  | 'seo___generic_page_template___seo___updatedAt'
  | 'seo___generic_page_template___seo___node_locale'
  | 'seo___generic_page_template___blocks'
  | 'seo___generic_page_template___blocks___id'
  | 'seo___generic_page_template___blocks___children'
  | 'seo___generic_page_template___blocks___name'
  | 'seo___generic_page_template___blocks___title'
  | 'seo___generic_page_template___blocks___slug'
  | 'seo___generic_page_template___blocks___generic_page_template'
  | 'seo___generic_page_template___blocks___spaceId'
  | 'seo___generic_page_template___blocks___contentful_id'
  | 'seo___generic_page_template___blocks___createdAt'
  | 'seo___generic_page_template___blocks___updatedAt'
  | 'seo___generic_page_template___blocks___node_locale'
  | 'seo___generic_page_template___spaceId'
  | 'seo___generic_page_template___contentful_id'
  | 'seo___generic_page_template___createdAt'
  | 'seo___generic_page_template___updatedAt'
  | 'seo___generic_page_template___sys___revision'
  | 'seo___generic_page_template___node_locale'
  | 'seo___spaceId'
  | 'seo___contentful_id'
  | 'seo___createdAt'
  | 'seo___updatedAt'
  | 'seo___sys___revision'
  | 'seo___node_locale'
  | 'blocks'
  | 'blocks___id'
  | 'blocks___parent___id'
  | 'blocks___parent___parent___id'
  | 'blocks___parent___parent___children'
  | 'blocks___parent___children'
  | 'blocks___parent___children___id'
  | 'blocks___parent___children___children'
  | 'blocks___parent___internal___content'
  | 'blocks___parent___internal___contentDigest'
  | 'blocks___parent___internal___description'
  | 'blocks___parent___internal___fieldOwners'
  | 'blocks___parent___internal___ignoreType'
  | 'blocks___parent___internal___mediaType'
  | 'blocks___parent___internal___owner'
  | 'blocks___parent___internal___type'
  | 'blocks___children'
  | 'blocks___children___id'
  | 'blocks___children___parent___id'
  | 'blocks___children___parent___children'
  | 'blocks___children___children'
  | 'blocks___children___children___id'
  | 'blocks___children___children___children'
  | 'blocks___children___internal___content'
  | 'blocks___children___internal___contentDigest'
  | 'blocks___children___internal___description'
  | 'blocks___children___internal___fieldOwners'
  | 'blocks___children___internal___ignoreType'
  | 'blocks___children___internal___mediaType'
  | 'blocks___children___internal___owner'
  | 'blocks___children___internal___type'
  | 'blocks___internal___content'
  | 'blocks___internal___contentDigest'
  | 'blocks___internal___description'
  | 'blocks___internal___fieldOwners'
  | 'blocks___internal___ignoreType'
  | 'blocks___internal___mediaType'
  | 'blocks___internal___owner'
  | 'blocks___internal___type'
  | 'blocks___name'
  | 'blocks___title'
  | 'blocks___slug'
  | 'blocks___generic_page_template'
  | 'blocks___generic_page_template___id'
  | 'blocks___generic_page_template___parent___id'
  | 'blocks___generic_page_template___parent___children'
  | 'blocks___generic_page_template___children'
  | 'blocks___generic_page_template___children___id'
  | 'blocks___generic_page_template___children___children'
  | 'blocks___generic_page_template___internal___content'
  | 'blocks___generic_page_template___internal___contentDigest'
  | 'blocks___generic_page_template___internal___description'
  | 'blocks___generic_page_template___internal___fieldOwners'
  | 'blocks___generic_page_template___internal___ignoreType'
  | 'blocks___generic_page_template___internal___mediaType'
  | 'blocks___generic_page_template___internal___owner'
  | 'blocks___generic_page_template___internal___type'
  | 'blocks___generic_page_template___name'
  | 'blocks___generic_page_template___pathName'
  | 'blocks___generic_page_template___seo___id'
  | 'blocks___generic_page_template___seo___children'
  | 'blocks___generic_page_template___seo___name'
  | 'blocks___generic_page_template___seo___title'
  | 'blocks___generic_page_template___seo___description'
  | 'blocks___generic_page_template___seo___generic_page_template'
  | 'blocks___generic_page_template___seo___spaceId'
  | 'blocks___generic_page_template___seo___contentful_id'
  | 'blocks___generic_page_template___seo___createdAt'
  | 'blocks___generic_page_template___seo___updatedAt'
  | 'blocks___generic_page_template___seo___node_locale'
  | 'blocks___generic_page_template___blocks'
  | 'blocks___generic_page_template___blocks___id'
  | 'blocks___generic_page_template___blocks___children'
  | 'blocks___generic_page_template___blocks___name'
  | 'blocks___generic_page_template___blocks___title'
  | 'blocks___generic_page_template___blocks___slug'
  | 'blocks___generic_page_template___blocks___generic_page_template'
  | 'blocks___generic_page_template___blocks___spaceId'
  | 'blocks___generic_page_template___blocks___contentful_id'
  | 'blocks___generic_page_template___blocks___createdAt'
  | 'blocks___generic_page_template___blocks___updatedAt'
  | 'blocks___generic_page_template___blocks___node_locale'
  | 'blocks___generic_page_template___spaceId'
  | 'blocks___generic_page_template___contentful_id'
  | 'blocks___generic_page_template___createdAt'
  | 'blocks___generic_page_template___updatedAt'
  | 'blocks___generic_page_template___sys___revision'
  | 'blocks___generic_page_template___node_locale'
  | 'blocks___spaceId'
  | 'blocks___contentful_id'
  | 'blocks___createdAt'
  | 'blocks___updatedAt'
  | 'blocks___sys___revision'
  | 'blocks___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulGenericPageTemplateFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  pathName?: Maybe<StringQueryOperatorInput>;
  seo?: Maybe<ContentfulSeoMetaDataFilterInput>;
  blocks?: Maybe<ContentfulBlockFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulGenericPageTemplateSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulGenericPageTemplateFilterListInput = {
  elemMatch?: Maybe<ContentfulGenericPageTemplateFilterInput>;
};

export type ContentfulGenericPageTemplateGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGenericPageTemplateEdge>;
  nodes: Array<ContentfulGenericPageTemplate>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulGenericPageTemplateSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulGenericPageTemplateFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulGenericPageTemplateSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulGenericPageTemplateSysContentType>;
};

export type ContentfulGenericPageTemplateSysContentType = {
  sys?: Maybe<ContentfulGenericPageTemplateSysContentTypeSys>;
};

export type ContentfulGenericPageTemplateSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulGenericPageTemplateSysContentTypeSysFilterInput>;
};

export type ContentfulGenericPageTemplateSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulGenericPageTemplateSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulGenericPageTemplateSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulGenericPageTemplateSysContentTypeFilterInput>;
};

export type ContentfulHero = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  background?: Maybe<ContentfulAsset>;
  block?: Maybe<Array<Maybe<ContentfulBlock>>>;
  body?: Maybe<ContentfulHeroBodyRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulHeroSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulHeroBodyRichTextNode?: Maybe<ContentfulHeroBodyRichTextNode>;
};


export type ContentfulHeroCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulHeroUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulHeroBodyRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulHeroBodyRichTextNodeContent>>>;
  body?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulHeroBodyRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHeroBodyRichTextNodeEdge>;
  nodes: Array<ContentfulHeroBodyRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulHeroBodyRichTextNodeGroupConnection>;
};


export type ContentfulHeroBodyRichTextNodeConnectionDistinctArgs = {
  field: ContentfulHeroBodyRichTextNodeFieldsEnum;
};


export type ContentfulHeroBodyRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHeroBodyRichTextNodeFieldsEnum;
};

export type ContentfulHeroBodyRichTextNodeContent = {
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulHeroBodyRichTextNodeContentContent>>>;
};

export type ContentfulHeroBodyRichTextNodeContentContent = {
  nodeType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ContentfulHeroBodyRichTextNodeContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHeroBodyRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulHeroBodyRichTextNodeContentContentFilterInput>;
};

export type ContentfulHeroBodyRichTextNodeContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulHeroBodyRichTextNodeContentContentFilterListInput>;
};

export type ContentfulHeroBodyRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulHeroBodyRichTextNodeContentFilterInput>;
};

export type ContentfulHeroBodyRichTextNodeEdge = {
  next?: Maybe<ContentfulHeroBodyRichTextNode>;
  node: ContentfulHeroBodyRichTextNode;
  previous?: Maybe<ContentfulHeroBodyRichTextNode>;
};

export type ContentfulHeroBodyRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'nodeType'
  | 'content'
  | 'content___nodeType'
  | 'content___content'
  | 'content___content___nodeType'
  | 'content___content___value'
  | 'body'
  | 'json';

export type ContentfulHeroBodyRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulHeroBodyRichTextNodeContentFilterListInput>;
  body?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulHeroBodyRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHeroBodyRichTextNodeEdge>;
  nodes: Array<ContentfulHeroBodyRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulHeroBodyRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHeroBodyRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulHeroConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHeroEdge>;
  nodes: Array<ContentfulHero>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulHeroGroupConnection>;
};


export type ContentfulHeroConnectionDistinctArgs = {
  field: ContentfulHeroFieldsEnum;
};


export type ContentfulHeroConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHeroFieldsEnum;
};

export type ContentfulHeroEdge = {
  next?: Maybe<ContentfulHero>;
  node: ContentfulHero;
  previous?: Maybe<ContentfulHero>;
};

export type ContentfulHeroFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'background___id'
  | 'background___parent___id'
  | 'background___parent___parent___id'
  | 'background___parent___parent___children'
  | 'background___parent___children'
  | 'background___parent___children___id'
  | 'background___parent___children___children'
  | 'background___parent___internal___content'
  | 'background___parent___internal___contentDigest'
  | 'background___parent___internal___description'
  | 'background___parent___internal___fieldOwners'
  | 'background___parent___internal___ignoreType'
  | 'background___parent___internal___mediaType'
  | 'background___parent___internal___owner'
  | 'background___parent___internal___type'
  | 'background___children'
  | 'background___children___id'
  | 'background___children___parent___id'
  | 'background___children___parent___children'
  | 'background___children___children'
  | 'background___children___children___id'
  | 'background___children___children___children'
  | 'background___children___internal___content'
  | 'background___children___internal___contentDigest'
  | 'background___children___internal___description'
  | 'background___children___internal___fieldOwners'
  | 'background___children___internal___ignoreType'
  | 'background___children___internal___mediaType'
  | 'background___children___internal___owner'
  | 'background___children___internal___type'
  | 'background___internal___content'
  | 'background___internal___contentDigest'
  | 'background___internal___description'
  | 'background___internal___fieldOwners'
  | 'background___internal___ignoreType'
  | 'background___internal___mediaType'
  | 'background___internal___owner'
  | 'background___internal___type'
  | 'background___contentful_id'
  | 'background___file___url'
  | 'background___file___details___size'
  | 'background___file___fileName'
  | 'background___file___contentType'
  | 'background___title'
  | 'background___description'
  | 'background___node_locale'
  | 'background___fixed___base64'
  | 'background___fixed___tracedSVG'
  | 'background___fixed___aspectRatio'
  | 'background___fixed___width'
  | 'background___fixed___height'
  | 'background___fixed___src'
  | 'background___fixed___srcSet'
  | 'background___fixed___srcWebp'
  | 'background___fixed___srcSetWebp'
  | 'background___resolutions___base64'
  | 'background___resolutions___tracedSVG'
  | 'background___resolutions___aspectRatio'
  | 'background___resolutions___width'
  | 'background___resolutions___height'
  | 'background___resolutions___src'
  | 'background___resolutions___srcSet'
  | 'background___resolutions___srcWebp'
  | 'background___resolutions___srcSetWebp'
  | 'background___fluid___base64'
  | 'background___fluid___tracedSVG'
  | 'background___fluid___aspectRatio'
  | 'background___fluid___src'
  | 'background___fluid___srcSet'
  | 'background___fluid___srcWebp'
  | 'background___fluid___srcSetWebp'
  | 'background___fluid___sizes'
  | 'background___sizes___base64'
  | 'background___sizes___tracedSVG'
  | 'background___sizes___aspectRatio'
  | 'background___sizes___src'
  | 'background___sizes___srcSet'
  | 'background___sizes___srcWebp'
  | 'background___sizes___srcSetWebp'
  | 'background___sizes___sizes'
  | 'background___resize___base64'
  | 'background___resize___tracedSVG'
  | 'background___resize___src'
  | 'background___resize___width'
  | 'background___resize___height'
  | 'background___resize___aspectRatio'
  | 'block'
  | 'block___id'
  | 'block___parent___id'
  | 'block___parent___parent___id'
  | 'block___parent___parent___children'
  | 'block___parent___children'
  | 'block___parent___children___id'
  | 'block___parent___children___children'
  | 'block___parent___internal___content'
  | 'block___parent___internal___contentDigest'
  | 'block___parent___internal___description'
  | 'block___parent___internal___fieldOwners'
  | 'block___parent___internal___ignoreType'
  | 'block___parent___internal___mediaType'
  | 'block___parent___internal___owner'
  | 'block___parent___internal___type'
  | 'block___children'
  | 'block___children___id'
  | 'block___children___parent___id'
  | 'block___children___parent___children'
  | 'block___children___children'
  | 'block___children___children___id'
  | 'block___children___children___children'
  | 'block___children___internal___content'
  | 'block___children___internal___contentDigest'
  | 'block___children___internal___description'
  | 'block___children___internal___fieldOwners'
  | 'block___children___internal___ignoreType'
  | 'block___children___internal___mediaType'
  | 'block___children___internal___owner'
  | 'block___children___internal___type'
  | 'block___internal___content'
  | 'block___internal___contentDigest'
  | 'block___internal___description'
  | 'block___internal___fieldOwners'
  | 'block___internal___ignoreType'
  | 'block___internal___mediaType'
  | 'block___internal___owner'
  | 'block___internal___type'
  | 'block___name'
  | 'block___title'
  | 'block___slug'
  | 'block___generic_page_template'
  | 'block___generic_page_template___id'
  | 'block___generic_page_template___parent___id'
  | 'block___generic_page_template___parent___children'
  | 'block___generic_page_template___children'
  | 'block___generic_page_template___children___id'
  | 'block___generic_page_template___children___children'
  | 'block___generic_page_template___internal___content'
  | 'block___generic_page_template___internal___contentDigest'
  | 'block___generic_page_template___internal___description'
  | 'block___generic_page_template___internal___fieldOwners'
  | 'block___generic_page_template___internal___ignoreType'
  | 'block___generic_page_template___internal___mediaType'
  | 'block___generic_page_template___internal___owner'
  | 'block___generic_page_template___internal___type'
  | 'block___generic_page_template___name'
  | 'block___generic_page_template___pathName'
  | 'block___generic_page_template___seo___id'
  | 'block___generic_page_template___seo___children'
  | 'block___generic_page_template___seo___name'
  | 'block___generic_page_template___seo___title'
  | 'block___generic_page_template___seo___description'
  | 'block___generic_page_template___seo___generic_page_template'
  | 'block___generic_page_template___seo___spaceId'
  | 'block___generic_page_template___seo___contentful_id'
  | 'block___generic_page_template___seo___createdAt'
  | 'block___generic_page_template___seo___updatedAt'
  | 'block___generic_page_template___seo___node_locale'
  | 'block___generic_page_template___blocks'
  | 'block___generic_page_template___blocks___id'
  | 'block___generic_page_template___blocks___children'
  | 'block___generic_page_template___blocks___name'
  | 'block___generic_page_template___blocks___title'
  | 'block___generic_page_template___blocks___slug'
  | 'block___generic_page_template___blocks___generic_page_template'
  | 'block___generic_page_template___blocks___spaceId'
  | 'block___generic_page_template___blocks___contentful_id'
  | 'block___generic_page_template___blocks___createdAt'
  | 'block___generic_page_template___blocks___updatedAt'
  | 'block___generic_page_template___blocks___node_locale'
  | 'block___generic_page_template___spaceId'
  | 'block___generic_page_template___contentful_id'
  | 'block___generic_page_template___createdAt'
  | 'block___generic_page_template___updatedAt'
  | 'block___generic_page_template___sys___revision'
  | 'block___generic_page_template___node_locale'
  | 'block___spaceId'
  | 'block___contentful_id'
  | 'block___createdAt'
  | 'block___updatedAt'
  | 'block___sys___revision'
  | 'block___node_locale'
  | 'body___id'
  | 'body___parent___id'
  | 'body___parent___parent___id'
  | 'body___parent___parent___children'
  | 'body___parent___children'
  | 'body___parent___children___id'
  | 'body___parent___children___children'
  | 'body___parent___internal___content'
  | 'body___parent___internal___contentDigest'
  | 'body___parent___internal___description'
  | 'body___parent___internal___fieldOwners'
  | 'body___parent___internal___ignoreType'
  | 'body___parent___internal___mediaType'
  | 'body___parent___internal___owner'
  | 'body___parent___internal___type'
  | 'body___children'
  | 'body___children___id'
  | 'body___children___parent___id'
  | 'body___children___parent___children'
  | 'body___children___children'
  | 'body___children___children___id'
  | 'body___children___children___children'
  | 'body___children___internal___content'
  | 'body___children___internal___contentDigest'
  | 'body___children___internal___description'
  | 'body___children___internal___fieldOwners'
  | 'body___children___internal___ignoreType'
  | 'body___children___internal___mediaType'
  | 'body___children___internal___owner'
  | 'body___children___internal___type'
  | 'body___internal___content'
  | 'body___internal___contentDigest'
  | 'body___internal___description'
  | 'body___internal___fieldOwners'
  | 'body___internal___ignoreType'
  | 'body___internal___mediaType'
  | 'body___internal___owner'
  | 'body___internal___type'
  | 'body___nodeType'
  | 'body___content'
  | 'body___content___nodeType'
  | 'body___content___content'
  | 'body___content___content___nodeType'
  | 'body___content___content___value'
  | 'body___body'
  | 'body___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulHeroBodyRichTextNode___id'
  | 'childContentfulHeroBodyRichTextNode___parent___id'
  | 'childContentfulHeroBodyRichTextNode___parent___parent___id'
  | 'childContentfulHeroBodyRichTextNode___parent___parent___children'
  | 'childContentfulHeroBodyRichTextNode___parent___children'
  | 'childContentfulHeroBodyRichTextNode___parent___children___id'
  | 'childContentfulHeroBodyRichTextNode___parent___children___children'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___content'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___contentDigest'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___description'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___ignoreType'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___mediaType'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___owner'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___type'
  | 'childContentfulHeroBodyRichTextNode___children'
  | 'childContentfulHeroBodyRichTextNode___children___id'
  | 'childContentfulHeroBodyRichTextNode___children___parent___id'
  | 'childContentfulHeroBodyRichTextNode___children___parent___children'
  | 'childContentfulHeroBodyRichTextNode___children___children'
  | 'childContentfulHeroBodyRichTextNode___children___children___id'
  | 'childContentfulHeroBodyRichTextNode___children___children___children'
  | 'childContentfulHeroBodyRichTextNode___children___internal___content'
  | 'childContentfulHeroBodyRichTextNode___children___internal___contentDigest'
  | 'childContentfulHeroBodyRichTextNode___children___internal___description'
  | 'childContentfulHeroBodyRichTextNode___children___internal___fieldOwners'
  | 'childContentfulHeroBodyRichTextNode___children___internal___ignoreType'
  | 'childContentfulHeroBodyRichTextNode___children___internal___mediaType'
  | 'childContentfulHeroBodyRichTextNode___children___internal___owner'
  | 'childContentfulHeroBodyRichTextNode___children___internal___type'
  | 'childContentfulHeroBodyRichTextNode___internal___content'
  | 'childContentfulHeroBodyRichTextNode___internal___contentDigest'
  | 'childContentfulHeroBodyRichTextNode___internal___description'
  | 'childContentfulHeroBodyRichTextNode___internal___fieldOwners'
  | 'childContentfulHeroBodyRichTextNode___internal___ignoreType'
  | 'childContentfulHeroBodyRichTextNode___internal___mediaType'
  | 'childContentfulHeroBodyRichTextNode___internal___owner'
  | 'childContentfulHeroBodyRichTextNode___internal___type'
  | 'childContentfulHeroBodyRichTextNode___nodeType'
  | 'childContentfulHeroBodyRichTextNode___content'
  | 'childContentfulHeroBodyRichTextNode___content___nodeType'
  | 'childContentfulHeroBodyRichTextNode___content___content'
  | 'childContentfulHeroBodyRichTextNode___content___content___nodeType'
  | 'childContentfulHeroBodyRichTextNode___content___content___value'
  | 'childContentfulHeroBodyRichTextNode___body'
  | 'childContentfulHeroBodyRichTextNode___json';

export type ContentfulHeroFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<ContentfulAssetFilterInput>;
  block?: Maybe<ContentfulBlockFilterListInput>;
  body?: Maybe<ContentfulHeroBodyRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHeroSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulHeroBodyRichTextNode?: Maybe<ContentfulHeroBodyRichTextNodeFilterInput>;
};

export type ContentfulHeroGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHeroEdge>;
  nodes: Array<ContentfulHero>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulHeroSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHeroFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulHeroSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulHeroSysContentType>;
};

export type ContentfulHeroSysContentType = {
  sys?: Maybe<ContentfulHeroSysContentTypeSys>;
};

export type ContentfulHeroSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulHeroSysContentTypeSysFilterInput>;
};

export type ContentfulHeroSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulHeroSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHeroSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulHeroSysContentTypeFilterInput>;
};

export type ContentfulImageCropFocus = 
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ContentfulMicroCopy = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  copy?: Maybe<ContentfulMicroCopyCopyRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulMicroCopySys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulMicroCopyCopyRichTextNode?: Maybe<ContentfulMicroCopyCopyRichTextNode>;
};


export type ContentfulMicroCopyCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulMicroCopyUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulMicroCopyConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMicroCopyEdge>;
  nodes: Array<ContentfulMicroCopy>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMicroCopyGroupConnection>;
};


export type ContentfulMicroCopyConnectionDistinctArgs = {
  field: ContentfulMicroCopyFieldsEnum;
};


export type ContentfulMicroCopyConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMicroCopyFieldsEnum;
};

export type ContentfulMicroCopyCopyRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulMicroCopyCopyRichTextNodeContent>>>;
  copy?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulMicroCopyCopyRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMicroCopyCopyRichTextNodeEdge>;
  nodes: Array<ContentfulMicroCopyCopyRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMicroCopyCopyRichTextNodeGroupConnection>;
};


export type ContentfulMicroCopyCopyRichTextNodeConnectionDistinctArgs = {
  field: ContentfulMicroCopyCopyRichTextNodeFieldsEnum;
};


export type ContentfulMicroCopyCopyRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMicroCopyCopyRichTextNodeFieldsEnum;
};

export type ContentfulMicroCopyCopyRichTextNodeContent = {
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulMicroCopyCopyRichTextNodeContentContent>>>;
};

export type ContentfulMicroCopyCopyRichTextNodeContentContent = {
  nodeType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  data?: Maybe<ContentfulMicroCopyCopyRichTextNodeContentContentData>;
  content?: Maybe<Array<Maybe<ContentfulMicroCopyCopyRichTextNodeContentContentContent>>>;
};

export type ContentfulMicroCopyCopyRichTextNodeContentContentContent = {
  nodeType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ContentfulMicroCopyCopyRichTextNodeContentContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMicroCopyCopyRichTextNodeContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulMicroCopyCopyRichTextNodeContentContentContentFilterInput>;
};

export type ContentfulMicroCopyCopyRichTextNodeContentContentData = {
  uri?: Maybe<Scalars['String']>;
};

export type ContentfulMicroCopyCopyRichTextNodeContentContentDataFilterInput = {
  uri?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMicroCopyCopyRichTextNodeContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<ContentfulMicroCopyCopyRichTextNodeContentContentDataFilterInput>;
  content?: Maybe<ContentfulMicroCopyCopyRichTextNodeContentContentContentFilterListInput>;
};

export type ContentfulMicroCopyCopyRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulMicroCopyCopyRichTextNodeContentContentFilterInput>;
};

export type ContentfulMicroCopyCopyRichTextNodeContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulMicroCopyCopyRichTextNodeContentContentFilterListInput>;
};

export type ContentfulMicroCopyCopyRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulMicroCopyCopyRichTextNodeContentFilterInput>;
};

export type ContentfulMicroCopyCopyRichTextNodeEdge = {
  next?: Maybe<ContentfulMicroCopyCopyRichTextNode>;
  node: ContentfulMicroCopyCopyRichTextNode;
  previous?: Maybe<ContentfulMicroCopyCopyRichTextNode>;
};

export type ContentfulMicroCopyCopyRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'nodeType'
  | 'content'
  | 'content___nodeType'
  | 'content___content'
  | 'content___content___nodeType'
  | 'content___content___value'
  | 'content___content___data___uri'
  | 'content___content___content'
  | 'content___content___content___nodeType'
  | 'content___content___content___value'
  | 'copy'
  | 'json';

export type ContentfulMicroCopyCopyRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulMicroCopyCopyRichTextNodeContentFilterListInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulMicroCopyCopyRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMicroCopyCopyRichTextNodeEdge>;
  nodes: Array<ContentfulMicroCopyCopyRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMicroCopyCopyRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMicroCopyCopyRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMicroCopyEdge = {
  next?: Maybe<ContentfulMicroCopy>;
  node: ContentfulMicroCopy;
  previous?: Maybe<ContentfulMicroCopy>;
};

export type ContentfulMicroCopyFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'slug'
  | 'copy___id'
  | 'copy___parent___id'
  | 'copy___parent___parent___id'
  | 'copy___parent___parent___children'
  | 'copy___parent___children'
  | 'copy___parent___children___id'
  | 'copy___parent___children___children'
  | 'copy___parent___internal___content'
  | 'copy___parent___internal___contentDigest'
  | 'copy___parent___internal___description'
  | 'copy___parent___internal___fieldOwners'
  | 'copy___parent___internal___ignoreType'
  | 'copy___parent___internal___mediaType'
  | 'copy___parent___internal___owner'
  | 'copy___parent___internal___type'
  | 'copy___children'
  | 'copy___children___id'
  | 'copy___children___parent___id'
  | 'copy___children___parent___children'
  | 'copy___children___children'
  | 'copy___children___children___id'
  | 'copy___children___children___children'
  | 'copy___children___internal___content'
  | 'copy___children___internal___contentDigest'
  | 'copy___children___internal___description'
  | 'copy___children___internal___fieldOwners'
  | 'copy___children___internal___ignoreType'
  | 'copy___children___internal___mediaType'
  | 'copy___children___internal___owner'
  | 'copy___children___internal___type'
  | 'copy___internal___content'
  | 'copy___internal___contentDigest'
  | 'copy___internal___description'
  | 'copy___internal___fieldOwners'
  | 'copy___internal___ignoreType'
  | 'copy___internal___mediaType'
  | 'copy___internal___owner'
  | 'copy___internal___type'
  | 'copy___nodeType'
  | 'copy___content'
  | 'copy___content___nodeType'
  | 'copy___content___content'
  | 'copy___content___content___nodeType'
  | 'copy___content___content___value'
  | 'copy___content___content___content'
  | 'copy___copy'
  | 'copy___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulMicroCopyCopyRichTextNode___id'
  | 'childContentfulMicroCopyCopyRichTextNode___parent___id'
  | 'childContentfulMicroCopyCopyRichTextNode___parent___parent___id'
  | 'childContentfulMicroCopyCopyRichTextNode___parent___parent___children'
  | 'childContentfulMicroCopyCopyRichTextNode___parent___children'
  | 'childContentfulMicroCopyCopyRichTextNode___parent___children___id'
  | 'childContentfulMicroCopyCopyRichTextNode___parent___children___children'
  | 'childContentfulMicroCopyCopyRichTextNode___parent___internal___content'
  | 'childContentfulMicroCopyCopyRichTextNode___parent___internal___contentDigest'
  | 'childContentfulMicroCopyCopyRichTextNode___parent___internal___description'
  | 'childContentfulMicroCopyCopyRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulMicroCopyCopyRichTextNode___parent___internal___ignoreType'
  | 'childContentfulMicroCopyCopyRichTextNode___parent___internal___mediaType'
  | 'childContentfulMicroCopyCopyRichTextNode___parent___internal___owner'
  | 'childContentfulMicroCopyCopyRichTextNode___parent___internal___type'
  | 'childContentfulMicroCopyCopyRichTextNode___children'
  | 'childContentfulMicroCopyCopyRichTextNode___children___id'
  | 'childContentfulMicroCopyCopyRichTextNode___children___parent___id'
  | 'childContentfulMicroCopyCopyRichTextNode___children___parent___children'
  | 'childContentfulMicroCopyCopyRichTextNode___children___children'
  | 'childContentfulMicroCopyCopyRichTextNode___children___children___id'
  | 'childContentfulMicroCopyCopyRichTextNode___children___children___children'
  | 'childContentfulMicroCopyCopyRichTextNode___children___internal___content'
  | 'childContentfulMicroCopyCopyRichTextNode___children___internal___contentDigest'
  | 'childContentfulMicroCopyCopyRichTextNode___children___internal___description'
  | 'childContentfulMicroCopyCopyRichTextNode___children___internal___fieldOwners'
  | 'childContentfulMicroCopyCopyRichTextNode___children___internal___ignoreType'
  | 'childContentfulMicroCopyCopyRichTextNode___children___internal___mediaType'
  | 'childContentfulMicroCopyCopyRichTextNode___children___internal___owner'
  | 'childContentfulMicroCopyCopyRichTextNode___children___internal___type'
  | 'childContentfulMicroCopyCopyRichTextNode___internal___content'
  | 'childContentfulMicroCopyCopyRichTextNode___internal___contentDigest'
  | 'childContentfulMicroCopyCopyRichTextNode___internal___description'
  | 'childContentfulMicroCopyCopyRichTextNode___internal___fieldOwners'
  | 'childContentfulMicroCopyCopyRichTextNode___internal___ignoreType'
  | 'childContentfulMicroCopyCopyRichTextNode___internal___mediaType'
  | 'childContentfulMicroCopyCopyRichTextNode___internal___owner'
  | 'childContentfulMicroCopyCopyRichTextNode___internal___type'
  | 'childContentfulMicroCopyCopyRichTextNode___nodeType'
  | 'childContentfulMicroCopyCopyRichTextNode___content'
  | 'childContentfulMicroCopyCopyRichTextNode___content___nodeType'
  | 'childContentfulMicroCopyCopyRichTextNode___content___content'
  | 'childContentfulMicroCopyCopyRichTextNode___content___content___nodeType'
  | 'childContentfulMicroCopyCopyRichTextNode___content___content___value'
  | 'childContentfulMicroCopyCopyRichTextNode___content___content___content'
  | 'childContentfulMicroCopyCopyRichTextNode___copy'
  | 'childContentfulMicroCopyCopyRichTextNode___json';

export type ContentfulMicroCopyFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<ContentfulMicroCopyCopyRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMicroCopySysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulMicroCopyCopyRichTextNode?: Maybe<ContentfulMicroCopyCopyRichTextNodeFilterInput>;
};

export type ContentfulMicroCopyGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMicroCopyEdge>;
  nodes: Array<ContentfulMicroCopy>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMicroCopySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMicroCopyFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMicroCopySys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulMicroCopySysContentType>;
};

export type ContentfulMicroCopySysContentType = {
  sys?: Maybe<ContentfulMicroCopySysContentTypeSys>;
};

export type ContentfulMicroCopySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulMicroCopySysContentTypeSysFilterInput>;
};

export type ContentfulMicroCopySysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulMicroCopySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMicroCopySysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulMicroCopySysContentTypeFilterInput>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSeoMetaData = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  generic_page_template?: Maybe<Array<Maybe<ContentfulGenericPageTemplate>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSeoMetaDataSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulSeoMetaDataCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSeoMetaDataUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSeoMetaDataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSeoMetaDataEdge>;
  nodes: Array<ContentfulSeoMetaData>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSeoMetaDataGroupConnection>;
};


export type ContentfulSeoMetaDataConnectionDistinctArgs = {
  field: ContentfulSeoMetaDataFieldsEnum;
};


export type ContentfulSeoMetaDataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSeoMetaDataFieldsEnum;
};

export type ContentfulSeoMetaDataEdge = {
  next?: Maybe<ContentfulSeoMetaData>;
  node: ContentfulSeoMetaData;
  previous?: Maybe<ContentfulSeoMetaData>;
};

export type ContentfulSeoMetaDataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'title'
  | 'description'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'image___contentful_id'
  | 'image___file___url'
  | 'image___file___details___size'
  | 'image___file___fileName'
  | 'image___file___contentType'
  | 'image___title'
  | 'image___description'
  | 'image___node_locale'
  | 'image___fixed___base64'
  | 'image___fixed___tracedSVG'
  | 'image___fixed___aspectRatio'
  | 'image___fixed___width'
  | 'image___fixed___height'
  | 'image___fixed___src'
  | 'image___fixed___srcSet'
  | 'image___fixed___srcWebp'
  | 'image___fixed___srcSetWebp'
  | 'image___resolutions___base64'
  | 'image___resolutions___tracedSVG'
  | 'image___resolutions___aspectRatio'
  | 'image___resolutions___width'
  | 'image___resolutions___height'
  | 'image___resolutions___src'
  | 'image___resolutions___srcSet'
  | 'image___resolutions___srcWebp'
  | 'image___resolutions___srcSetWebp'
  | 'image___fluid___base64'
  | 'image___fluid___tracedSVG'
  | 'image___fluid___aspectRatio'
  | 'image___fluid___src'
  | 'image___fluid___srcSet'
  | 'image___fluid___srcWebp'
  | 'image___fluid___srcSetWebp'
  | 'image___fluid___sizes'
  | 'image___sizes___base64'
  | 'image___sizes___tracedSVG'
  | 'image___sizes___aspectRatio'
  | 'image___sizes___src'
  | 'image___sizes___srcSet'
  | 'image___sizes___srcWebp'
  | 'image___sizes___srcSetWebp'
  | 'image___sizes___sizes'
  | 'image___resize___base64'
  | 'image___resize___tracedSVG'
  | 'image___resize___src'
  | 'image___resize___width'
  | 'image___resize___height'
  | 'image___resize___aspectRatio'
  | 'generic_page_template'
  | 'generic_page_template___id'
  | 'generic_page_template___parent___id'
  | 'generic_page_template___parent___parent___id'
  | 'generic_page_template___parent___parent___children'
  | 'generic_page_template___parent___children'
  | 'generic_page_template___parent___children___id'
  | 'generic_page_template___parent___children___children'
  | 'generic_page_template___parent___internal___content'
  | 'generic_page_template___parent___internal___contentDigest'
  | 'generic_page_template___parent___internal___description'
  | 'generic_page_template___parent___internal___fieldOwners'
  | 'generic_page_template___parent___internal___ignoreType'
  | 'generic_page_template___parent___internal___mediaType'
  | 'generic_page_template___parent___internal___owner'
  | 'generic_page_template___parent___internal___type'
  | 'generic_page_template___children'
  | 'generic_page_template___children___id'
  | 'generic_page_template___children___parent___id'
  | 'generic_page_template___children___parent___children'
  | 'generic_page_template___children___children'
  | 'generic_page_template___children___children___id'
  | 'generic_page_template___children___children___children'
  | 'generic_page_template___children___internal___content'
  | 'generic_page_template___children___internal___contentDigest'
  | 'generic_page_template___children___internal___description'
  | 'generic_page_template___children___internal___fieldOwners'
  | 'generic_page_template___children___internal___ignoreType'
  | 'generic_page_template___children___internal___mediaType'
  | 'generic_page_template___children___internal___owner'
  | 'generic_page_template___children___internal___type'
  | 'generic_page_template___internal___content'
  | 'generic_page_template___internal___contentDigest'
  | 'generic_page_template___internal___description'
  | 'generic_page_template___internal___fieldOwners'
  | 'generic_page_template___internal___ignoreType'
  | 'generic_page_template___internal___mediaType'
  | 'generic_page_template___internal___owner'
  | 'generic_page_template___internal___type'
  | 'generic_page_template___name'
  | 'generic_page_template___pathName'
  | 'generic_page_template___seo___id'
  | 'generic_page_template___seo___parent___id'
  | 'generic_page_template___seo___parent___children'
  | 'generic_page_template___seo___children'
  | 'generic_page_template___seo___children___id'
  | 'generic_page_template___seo___children___children'
  | 'generic_page_template___seo___internal___content'
  | 'generic_page_template___seo___internal___contentDigest'
  | 'generic_page_template___seo___internal___description'
  | 'generic_page_template___seo___internal___fieldOwners'
  | 'generic_page_template___seo___internal___ignoreType'
  | 'generic_page_template___seo___internal___mediaType'
  | 'generic_page_template___seo___internal___owner'
  | 'generic_page_template___seo___internal___type'
  | 'generic_page_template___seo___name'
  | 'generic_page_template___seo___title'
  | 'generic_page_template___seo___description'
  | 'generic_page_template___seo___image___id'
  | 'generic_page_template___seo___image___children'
  | 'generic_page_template___seo___image___contentful_id'
  | 'generic_page_template___seo___image___title'
  | 'generic_page_template___seo___image___description'
  | 'generic_page_template___seo___image___node_locale'
  | 'generic_page_template___seo___generic_page_template'
  | 'generic_page_template___seo___generic_page_template___id'
  | 'generic_page_template___seo___generic_page_template___children'
  | 'generic_page_template___seo___generic_page_template___name'
  | 'generic_page_template___seo___generic_page_template___pathName'
  | 'generic_page_template___seo___generic_page_template___blocks'
  | 'generic_page_template___seo___generic_page_template___spaceId'
  | 'generic_page_template___seo___generic_page_template___contentful_id'
  | 'generic_page_template___seo___generic_page_template___createdAt'
  | 'generic_page_template___seo___generic_page_template___updatedAt'
  | 'generic_page_template___seo___generic_page_template___node_locale'
  | 'generic_page_template___seo___spaceId'
  | 'generic_page_template___seo___contentful_id'
  | 'generic_page_template___seo___createdAt'
  | 'generic_page_template___seo___updatedAt'
  | 'generic_page_template___seo___sys___revision'
  | 'generic_page_template___seo___node_locale'
  | 'generic_page_template___blocks'
  | 'generic_page_template___blocks___id'
  | 'generic_page_template___blocks___parent___id'
  | 'generic_page_template___blocks___parent___children'
  | 'generic_page_template___blocks___children'
  | 'generic_page_template___blocks___children___id'
  | 'generic_page_template___blocks___children___children'
  | 'generic_page_template___blocks___internal___content'
  | 'generic_page_template___blocks___internal___contentDigest'
  | 'generic_page_template___blocks___internal___description'
  | 'generic_page_template___blocks___internal___fieldOwners'
  | 'generic_page_template___blocks___internal___ignoreType'
  | 'generic_page_template___blocks___internal___mediaType'
  | 'generic_page_template___blocks___internal___owner'
  | 'generic_page_template___blocks___internal___type'
  | 'generic_page_template___blocks___name'
  | 'generic_page_template___blocks___title'
  | 'generic_page_template___blocks___slug'
  | 'generic_page_template___blocks___generic_page_template'
  | 'generic_page_template___blocks___generic_page_template___id'
  | 'generic_page_template___blocks___generic_page_template___children'
  | 'generic_page_template___blocks___generic_page_template___name'
  | 'generic_page_template___blocks___generic_page_template___pathName'
  | 'generic_page_template___blocks___generic_page_template___blocks'
  | 'generic_page_template___blocks___generic_page_template___spaceId'
  | 'generic_page_template___blocks___generic_page_template___contentful_id'
  | 'generic_page_template___blocks___generic_page_template___createdAt'
  | 'generic_page_template___blocks___generic_page_template___updatedAt'
  | 'generic_page_template___blocks___generic_page_template___node_locale'
  | 'generic_page_template___blocks___spaceId'
  | 'generic_page_template___blocks___contentful_id'
  | 'generic_page_template___blocks___createdAt'
  | 'generic_page_template___blocks___updatedAt'
  | 'generic_page_template___blocks___sys___revision'
  | 'generic_page_template___blocks___node_locale'
  | 'generic_page_template___spaceId'
  | 'generic_page_template___contentful_id'
  | 'generic_page_template___createdAt'
  | 'generic_page_template___updatedAt'
  | 'generic_page_template___sys___revision'
  | 'generic_page_template___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulSeoMetaDataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  generic_page_template?: Maybe<ContentfulGenericPageTemplateFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSeoMetaDataSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSeoMetaDataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSeoMetaDataEdge>;
  nodes: Array<ContentfulSeoMetaData>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSeoMetaDataSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSeoMetaDataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSeoMetaDataSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSeoMetaDataSysContentType>;
};

export type ContentfulSeoMetaDataSysContentType = {
  sys?: Maybe<ContentfulSeoMetaDataSysContentTypeSys>;
};

export type ContentfulSeoMetaDataSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSeoMetaDataSysContentTypeSysFilterInput>;
};

export type ContentfulSeoMetaDataSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulSeoMetaDataSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSeoMetaDataSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSeoMetaDataSysContentTypeFilterInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSponsor = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  logo?: Maybe<ContentfulAsset>;
  sponsors?: Maybe<Array<Maybe<ContentfulSponsors>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSponsorSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulSponsorCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSponsorUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSponsorConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSponsorEdge>;
  nodes: Array<ContentfulSponsor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSponsorGroupConnection>;
};


export type ContentfulSponsorConnectionDistinctArgs = {
  field: ContentfulSponsorFieldsEnum;
};


export type ContentfulSponsorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSponsorFieldsEnum;
};

export type ContentfulSponsorEdge = {
  next?: Maybe<ContentfulSponsor>;
  node: ContentfulSponsor;
  previous?: Maybe<ContentfulSponsor>;
};

export type ContentfulSponsorFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'url'
  | 'logo___id'
  | 'logo___parent___id'
  | 'logo___parent___parent___id'
  | 'logo___parent___parent___children'
  | 'logo___parent___children'
  | 'logo___parent___children___id'
  | 'logo___parent___children___children'
  | 'logo___parent___internal___content'
  | 'logo___parent___internal___contentDigest'
  | 'logo___parent___internal___description'
  | 'logo___parent___internal___fieldOwners'
  | 'logo___parent___internal___ignoreType'
  | 'logo___parent___internal___mediaType'
  | 'logo___parent___internal___owner'
  | 'logo___parent___internal___type'
  | 'logo___children'
  | 'logo___children___id'
  | 'logo___children___parent___id'
  | 'logo___children___parent___children'
  | 'logo___children___children'
  | 'logo___children___children___id'
  | 'logo___children___children___children'
  | 'logo___children___internal___content'
  | 'logo___children___internal___contentDigest'
  | 'logo___children___internal___description'
  | 'logo___children___internal___fieldOwners'
  | 'logo___children___internal___ignoreType'
  | 'logo___children___internal___mediaType'
  | 'logo___children___internal___owner'
  | 'logo___children___internal___type'
  | 'logo___internal___content'
  | 'logo___internal___contentDigest'
  | 'logo___internal___description'
  | 'logo___internal___fieldOwners'
  | 'logo___internal___ignoreType'
  | 'logo___internal___mediaType'
  | 'logo___internal___owner'
  | 'logo___internal___type'
  | 'logo___contentful_id'
  | 'logo___file___url'
  | 'logo___file___details___size'
  | 'logo___file___fileName'
  | 'logo___file___contentType'
  | 'logo___title'
  | 'logo___description'
  | 'logo___node_locale'
  | 'logo___fixed___base64'
  | 'logo___fixed___tracedSVG'
  | 'logo___fixed___aspectRatio'
  | 'logo___fixed___width'
  | 'logo___fixed___height'
  | 'logo___fixed___src'
  | 'logo___fixed___srcSet'
  | 'logo___fixed___srcWebp'
  | 'logo___fixed___srcSetWebp'
  | 'logo___resolutions___base64'
  | 'logo___resolutions___tracedSVG'
  | 'logo___resolutions___aspectRatio'
  | 'logo___resolutions___width'
  | 'logo___resolutions___height'
  | 'logo___resolutions___src'
  | 'logo___resolutions___srcSet'
  | 'logo___resolutions___srcWebp'
  | 'logo___resolutions___srcSetWebp'
  | 'logo___fluid___base64'
  | 'logo___fluid___tracedSVG'
  | 'logo___fluid___aspectRatio'
  | 'logo___fluid___src'
  | 'logo___fluid___srcSet'
  | 'logo___fluid___srcWebp'
  | 'logo___fluid___srcSetWebp'
  | 'logo___fluid___sizes'
  | 'logo___sizes___base64'
  | 'logo___sizes___tracedSVG'
  | 'logo___sizes___aspectRatio'
  | 'logo___sizes___src'
  | 'logo___sizes___srcSet'
  | 'logo___sizes___srcWebp'
  | 'logo___sizes___srcSetWebp'
  | 'logo___sizes___sizes'
  | 'logo___resize___base64'
  | 'logo___resize___tracedSVG'
  | 'logo___resize___src'
  | 'logo___resize___width'
  | 'logo___resize___height'
  | 'logo___resize___aspectRatio'
  | 'sponsors'
  | 'sponsors___id'
  | 'sponsors___parent___id'
  | 'sponsors___parent___parent___id'
  | 'sponsors___parent___parent___children'
  | 'sponsors___parent___children'
  | 'sponsors___parent___children___id'
  | 'sponsors___parent___children___children'
  | 'sponsors___parent___internal___content'
  | 'sponsors___parent___internal___contentDigest'
  | 'sponsors___parent___internal___description'
  | 'sponsors___parent___internal___fieldOwners'
  | 'sponsors___parent___internal___ignoreType'
  | 'sponsors___parent___internal___mediaType'
  | 'sponsors___parent___internal___owner'
  | 'sponsors___parent___internal___type'
  | 'sponsors___children'
  | 'sponsors___children___id'
  | 'sponsors___children___parent___id'
  | 'sponsors___children___parent___children'
  | 'sponsors___children___children'
  | 'sponsors___children___children___id'
  | 'sponsors___children___children___children'
  | 'sponsors___children___internal___content'
  | 'sponsors___children___internal___contentDigest'
  | 'sponsors___children___internal___description'
  | 'sponsors___children___internal___fieldOwners'
  | 'sponsors___children___internal___ignoreType'
  | 'sponsors___children___internal___mediaType'
  | 'sponsors___children___internal___owner'
  | 'sponsors___children___internal___type'
  | 'sponsors___internal___content'
  | 'sponsors___internal___contentDigest'
  | 'sponsors___internal___description'
  | 'sponsors___internal___fieldOwners'
  | 'sponsors___internal___ignoreType'
  | 'sponsors___internal___mediaType'
  | 'sponsors___internal___owner'
  | 'sponsors___internal___type'
  | 'sponsors___name'
  | 'sponsors___list'
  | 'sponsors___list___id'
  | 'sponsors___list___parent___id'
  | 'sponsors___list___parent___children'
  | 'sponsors___list___children'
  | 'sponsors___list___children___id'
  | 'sponsors___list___children___children'
  | 'sponsors___list___internal___content'
  | 'sponsors___list___internal___contentDigest'
  | 'sponsors___list___internal___description'
  | 'sponsors___list___internal___fieldOwners'
  | 'sponsors___list___internal___ignoreType'
  | 'sponsors___list___internal___mediaType'
  | 'sponsors___list___internal___owner'
  | 'sponsors___list___internal___type'
  | 'sponsors___list___name'
  | 'sponsors___list___url'
  | 'sponsors___list___logo___id'
  | 'sponsors___list___logo___children'
  | 'sponsors___list___logo___contentful_id'
  | 'sponsors___list___logo___title'
  | 'sponsors___list___logo___description'
  | 'sponsors___list___logo___node_locale'
  | 'sponsors___list___sponsors'
  | 'sponsors___list___sponsors___id'
  | 'sponsors___list___sponsors___children'
  | 'sponsors___list___sponsors___name'
  | 'sponsors___list___sponsors___list'
  | 'sponsors___list___sponsors___block'
  | 'sponsors___list___sponsors___spaceId'
  | 'sponsors___list___sponsors___contentful_id'
  | 'sponsors___list___sponsors___createdAt'
  | 'sponsors___list___sponsors___updatedAt'
  | 'sponsors___list___sponsors___node_locale'
  | 'sponsors___list___spaceId'
  | 'sponsors___list___contentful_id'
  | 'sponsors___list___createdAt'
  | 'sponsors___list___updatedAt'
  | 'sponsors___list___sys___revision'
  | 'sponsors___list___node_locale'
  | 'sponsors___block'
  | 'sponsors___block___id'
  | 'sponsors___block___parent___id'
  | 'sponsors___block___parent___children'
  | 'sponsors___block___children'
  | 'sponsors___block___children___id'
  | 'sponsors___block___children___children'
  | 'sponsors___block___internal___content'
  | 'sponsors___block___internal___contentDigest'
  | 'sponsors___block___internal___description'
  | 'sponsors___block___internal___fieldOwners'
  | 'sponsors___block___internal___ignoreType'
  | 'sponsors___block___internal___mediaType'
  | 'sponsors___block___internal___owner'
  | 'sponsors___block___internal___type'
  | 'sponsors___block___name'
  | 'sponsors___block___title'
  | 'sponsors___block___slug'
  | 'sponsors___block___generic_page_template'
  | 'sponsors___block___generic_page_template___id'
  | 'sponsors___block___generic_page_template___children'
  | 'sponsors___block___generic_page_template___name'
  | 'sponsors___block___generic_page_template___pathName'
  | 'sponsors___block___generic_page_template___blocks'
  | 'sponsors___block___generic_page_template___spaceId'
  | 'sponsors___block___generic_page_template___contentful_id'
  | 'sponsors___block___generic_page_template___createdAt'
  | 'sponsors___block___generic_page_template___updatedAt'
  | 'sponsors___block___generic_page_template___node_locale'
  | 'sponsors___block___spaceId'
  | 'sponsors___block___contentful_id'
  | 'sponsors___block___createdAt'
  | 'sponsors___block___updatedAt'
  | 'sponsors___block___sys___revision'
  | 'sponsors___block___node_locale'
  | 'sponsors___copy___id'
  | 'sponsors___copy___parent___id'
  | 'sponsors___copy___parent___children'
  | 'sponsors___copy___children'
  | 'sponsors___copy___children___id'
  | 'sponsors___copy___children___children'
  | 'sponsors___copy___internal___content'
  | 'sponsors___copy___internal___contentDigest'
  | 'sponsors___copy___internal___description'
  | 'sponsors___copy___internal___fieldOwners'
  | 'sponsors___copy___internal___ignoreType'
  | 'sponsors___copy___internal___mediaType'
  | 'sponsors___copy___internal___owner'
  | 'sponsors___copy___internal___type'
  | 'sponsors___copy___nodeType'
  | 'sponsors___copy___content'
  | 'sponsors___copy___content___nodeType'
  | 'sponsors___copy___content___content'
  | 'sponsors___copy___copy'
  | 'sponsors___copy___json'
  | 'sponsors___spaceId'
  | 'sponsors___contentful_id'
  | 'sponsors___createdAt'
  | 'sponsors___updatedAt'
  | 'sponsors___sys___revision'
  | 'sponsors___node_locale'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___id'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___parent___id'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___parent___children'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___children'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___children___id'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___children___children'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___internal___content'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___internal___contentDigest'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___internal___description'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___internal___fieldOwners'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___internal___ignoreType'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___internal___mediaType'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___internal___owner'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___internal___type'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___nodeType'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___content'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___content___nodeType'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___content___content'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___copy'
  | 'sponsors___childContentfulSponsorsCopyRichTextNode___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulSponsorFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<ContentfulAssetFilterInput>;
  sponsors?: Maybe<ContentfulSponsorsFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSponsorSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSponsorFilterListInput = {
  elemMatch?: Maybe<ContentfulSponsorFilterInput>;
};

export type ContentfulSponsorGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSponsorEdge>;
  nodes: Array<ContentfulSponsor>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSponsors = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  list?: Maybe<Array<Maybe<ContentfulSponsor>>>;
  block?: Maybe<Array<Maybe<ContentfulBlock>>>;
  copy?: Maybe<ContentfulSponsorsCopyRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSponsorsSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulSponsorsCopyRichTextNode?: Maybe<ContentfulSponsorsCopyRichTextNode>;
};


export type ContentfulSponsorsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSponsorsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSponsorsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSponsorsEdge>;
  nodes: Array<ContentfulSponsors>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSponsorsGroupConnection>;
};


export type ContentfulSponsorsConnectionDistinctArgs = {
  field: ContentfulSponsorsFieldsEnum;
};


export type ContentfulSponsorsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSponsorsFieldsEnum;
};

export type ContentfulSponsorsCopyRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulSponsorsCopyRichTextNodeContent>>>;
  copy?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulSponsorsCopyRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSponsorsCopyRichTextNodeEdge>;
  nodes: Array<ContentfulSponsorsCopyRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSponsorsCopyRichTextNodeGroupConnection>;
};


export type ContentfulSponsorsCopyRichTextNodeConnectionDistinctArgs = {
  field: ContentfulSponsorsCopyRichTextNodeFieldsEnum;
};


export type ContentfulSponsorsCopyRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSponsorsCopyRichTextNodeFieldsEnum;
};

export type ContentfulSponsorsCopyRichTextNodeContent = {
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulSponsorsCopyRichTextNodeContentContent>>>;
};

export type ContentfulSponsorsCopyRichTextNodeContentContent = {
  nodeType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  data?: Maybe<ContentfulSponsorsCopyRichTextNodeContentContentData>;
  content?: Maybe<Array<Maybe<ContentfulSponsorsCopyRichTextNodeContentContentContent>>>;
};

export type ContentfulSponsorsCopyRichTextNodeContentContentContent = {
  nodeType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ContentfulSponsorsCopyRichTextNodeContentContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSponsorsCopyRichTextNodeContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulSponsorsCopyRichTextNodeContentContentContentFilterInput>;
};

export type ContentfulSponsorsCopyRichTextNodeContentContentData = {
  uri?: Maybe<Scalars['String']>;
};

export type ContentfulSponsorsCopyRichTextNodeContentContentDataFilterInput = {
  uri?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSponsorsCopyRichTextNodeContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<ContentfulSponsorsCopyRichTextNodeContentContentDataFilterInput>;
  content?: Maybe<ContentfulSponsorsCopyRichTextNodeContentContentContentFilterListInput>;
};

export type ContentfulSponsorsCopyRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulSponsorsCopyRichTextNodeContentContentFilterInput>;
};

export type ContentfulSponsorsCopyRichTextNodeContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulSponsorsCopyRichTextNodeContentContentFilterListInput>;
};

export type ContentfulSponsorsCopyRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulSponsorsCopyRichTextNodeContentFilterInput>;
};

export type ContentfulSponsorsCopyRichTextNodeEdge = {
  next?: Maybe<ContentfulSponsorsCopyRichTextNode>;
  node: ContentfulSponsorsCopyRichTextNode;
  previous?: Maybe<ContentfulSponsorsCopyRichTextNode>;
};

export type ContentfulSponsorsCopyRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'nodeType'
  | 'content'
  | 'content___nodeType'
  | 'content___content'
  | 'content___content___nodeType'
  | 'content___content___value'
  | 'content___content___data___uri'
  | 'content___content___content'
  | 'content___content___content___nodeType'
  | 'content___content___content___value'
  | 'copy'
  | 'json';

export type ContentfulSponsorsCopyRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulSponsorsCopyRichTextNodeContentFilterListInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulSponsorsCopyRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSponsorsCopyRichTextNodeEdge>;
  nodes: Array<ContentfulSponsorsCopyRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSponsorsCopyRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSponsorsCopyRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSponsorsEdge = {
  next?: Maybe<ContentfulSponsors>;
  node: ContentfulSponsors;
  previous?: Maybe<ContentfulSponsors>;
};

export type ContentfulSponsorsFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'list'
  | 'list___id'
  | 'list___parent___id'
  | 'list___parent___parent___id'
  | 'list___parent___parent___children'
  | 'list___parent___children'
  | 'list___parent___children___id'
  | 'list___parent___children___children'
  | 'list___parent___internal___content'
  | 'list___parent___internal___contentDigest'
  | 'list___parent___internal___description'
  | 'list___parent___internal___fieldOwners'
  | 'list___parent___internal___ignoreType'
  | 'list___parent___internal___mediaType'
  | 'list___parent___internal___owner'
  | 'list___parent___internal___type'
  | 'list___children'
  | 'list___children___id'
  | 'list___children___parent___id'
  | 'list___children___parent___children'
  | 'list___children___children'
  | 'list___children___children___id'
  | 'list___children___children___children'
  | 'list___children___internal___content'
  | 'list___children___internal___contentDigest'
  | 'list___children___internal___description'
  | 'list___children___internal___fieldOwners'
  | 'list___children___internal___ignoreType'
  | 'list___children___internal___mediaType'
  | 'list___children___internal___owner'
  | 'list___children___internal___type'
  | 'list___internal___content'
  | 'list___internal___contentDigest'
  | 'list___internal___description'
  | 'list___internal___fieldOwners'
  | 'list___internal___ignoreType'
  | 'list___internal___mediaType'
  | 'list___internal___owner'
  | 'list___internal___type'
  | 'list___name'
  | 'list___url'
  | 'list___logo___id'
  | 'list___logo___parent___id'
  | 'list___logo___parent___children'
  | 'list___logo___children'
  | 'list___logo___children___id'
  | 'list___logo___children___children'
  | 'list___logo___internal___content'
  | 'list___logo___internal___contentDigest'
  | 'list___logo___internal___description'
  | 'list___logo___internal___fieldOwners'
  | 'list___logo___internal___ignoreType'
  | 'list___logo___internal___mediaType'
  | 'list___logo___internal___owner'
  | 'list___logo___internal___type'
  | 'list___logo___contentful_id'
  | 'list___logo___file___url'
  | 'list___logo___file___fileName'
  | 'list___logo___file___contentType'
  | 'list___logo___title'
  | 'list___logo___description'
  | 'list___logo___node_locale'
  | 'list___logo___fixed___base64'
  | 'list___logo___fixed___tracedSVG'
  | 'list___logo___fixed___aspectRatio'
  | 'list___logo___fixed___width'
  | 'list___logo___fixed___height'
  | 'list___logo___fixed___src'
  | 'list___logo___fixed___srcSet'
  | 'list___logo___fixed___srcWebp'
  | 'list___logo___fixed___srcSetWebp'
  | 'list___logo___resolutions___base64'
  | 'list___logo___resolutions___tracedSVG'
  | 'list___logo___resolutions___aspectRatio'
  | 'list___logo___resolutions___width'
  | 'list___logo___resolutions___height'
  | 'list___logo___resolutions___src'
  | 'list___logo___resolutions___srcSet'
  | 'list___logo___resolutions___srcWebp'
  | 'list___logo___resolutions___srcSetWebp'
  | 'list___logo___fluid___base64'
  | 'list___logo___fluid___tracedSVG'
  | 'list___logo___fluid___aspectRatio'
  | 'list___logo___fluid___src'
  | 'list___logo___fluid___srcSet'
  | 'list___logo___fluid___srcWebp'
  | 'list___logo___fluid___srcSetWebp'
  | 'list___logo___fluid___sizes'
  | 'list___logo___sizes___base64'
  | 'list___logo___sizes___tracedSVG'
  | 'list___logo___sizes___aspectRatio'
  | 'list___logo___sizes___src'
  | 'list___logo___sizes___srcSet'
  | 'list___logo___sizes___srcWebp'
  | 'list___logo___sizes___srcSetWebp'
  | 'list___logo___sizes___sizes'
  | 'list___logo___resize___base64'
  | 'list___logo___resize___tracedSVG'
  | 'list___logo___resize___src'
  | 'list___logo___resize___width'
  | 'list___logo___resize___height'
  | 'list___logo___resize___aspectRatio'
  | 'list___sponsors'
  | 'list___sponsors___id'
  | 'list___sponsors___parent___id'
  | 'list___sponsors___parent___children'
  | 'list___sponsors___children'
  | 'list___sponsors___children___id'
  | 'list___sponsors___children___children'
  | 'list___sponsors___internal___content'
  | 'list___sponsors___internal___contentDigest'
  | 'list___sponsors___internal___description'
  | 'list___sponsors___internal___fieldOwners'
  | 'list___sponsors___internal___ignoreType'
  | 'list___sponsors___internal___mediaType'
  | 'list___sponsors___internal___owner'
  | 'list___sponsors___internal___type'
  | 'list___sponsors___name'
  | 'list___sponsors___list'
  | 'list___sponsors___list___id'
  | 'list___sponsors___list___children'
  | 'list___sponsors___list___name'
  | 'list___sponsors___list___url'
  | 'list___sponsors___list___sponsors'
  | 'list___sponsors___list___spaceId'
  | 'list___sponsors___list___contentful_id'
  | 'list___sponsors___list___createdAt'
  | 'list___sponsors___list___updatedAt'
  | 'list___sponsors___list___node_locale'
  | 'list___sponsors___block'
  | 'list___sponsors___block___id'
  | 'list___sponsors___block___children'
  | 'list___sponsors___block___name'
  | 'list___sponsors___block___title'
  | 'list___sponsors___block___slug'
  | 'list___sponsors___block___generic_page_template'
  | 'list___sponsors___block___spaceId'
  | 'list___sponsors___block___contentful_id'
  | 'list___sponsors___block___createdAt'
  | 'list___sponsors___block___updatedAt'
  | 'list___sponsors___block___node_locale'
  | 'list___sponsors___copy___id'
  | 'list___sponsors___copy___children'
  | 'list___sponsors___copy___nodeType'
  | 'list___sponsors___copy___content'
  | 'list___sponsors___copy___copy'
  | 'list___sponsors___copy___json'
  | 'list___sponsors___spaceId'
  | 'list___sponsors___contentful_id'
  | 'list___sponsors___createdAt'
  | 'list___sponsors___updatedAt'
  | 'list___sponsors___sys___revision'
  | 'list___sponsors___node_locale'
  | 'list___sponsors___childContentfulSponsorsCopyRichTextNode___id'
  | 'list___sponsors___childContentfulSponsorsCopyRichTextNode___children'
  | 'list___sponsors___childContentfulSponsorsCopyRichTextNode___nodeType'
  | 'list___sponsors___childContentfulSponsorsCopyRichTextNode___content'
  | 'list___sponsors___childContentfulSponsorsCopyRichTextNode___copy'
  | 'list___sponsors___childContentfulSponsorsCopyRichTextNode___json'
  | 'list___spaceId'
  | 'list___contentful_id'
  | 'list___createdAt'
  | 'list___updatedAt'
  | 'list___sys___revision'
  | 'list___node_locale'
  | 'block'
  | 'block___id'
  | 'block___parent___id'
  | 'block___parent___parent___id'
  | 'block___parent___parent___children'
  | 'block___parent___children'
  | 'block___parent___children___id'
  | 'block___parent___children___children'
  | 'block___parent___internal___content'
  | 'block___parent___internal___contentDigest'
  | 'block___parent___internal___description'
  | 'block___parent___internal___fieldOwners'
  | 'block___parent___internal___ignoreType'
  | 'block___parent___internal___mediaType'
  | 'block___parent___internal___owner'
  | 'block___parent___internal___type'
  | 'block___children'
  | 'block___children___id'
  | 'block___children___parent___id'
  | 'block___children___parent___children'
  | 'block___children___children'
  | 'block___children___children___id'
  | 'block___children___children___children'
  | 'block___children___internal___content'
  | 'block___children___internal___contentDigest'
  | 'block___children___internal___description'
  | 'block___children___internal___fieldOwners'
  | 'block___children___internal___ignoreType'
  | 'block___children___internal___mediaType'
  | 'block___children___internal___owner'
  | 'block___children___internal___type'
  | 'block___internal___content'
  | 'block___internal___contentDigest'
  | 'block___internal___description'
  | 'block___internal___fieldOwners'
  | 'block___internal___ignoreType'
  | 'block___internal___mediaType'
  | 'block___internal___owner'
  | 'block___internal___type'
  | 'block___name'
  | 'block___title'
  | 'block___slug'
  | 'block___generic_page_template'
  | 'block___generic_page_template___id'
  | 'block___generic_page_template___parent___id'
  | 'block___generic_page_template___parent___children'
  | 'block___generic_page_template___children'
  | 'block___generic_page_template___children___id'
  | 'block___generic_page_template___children___children'
  | 'block___generic_page_template___internal___content'
  | 'block___generic_page_template___internal___contentDigest'
  | 'block___generic_page_template___internal___description'
  | 'block___generic_page_template___internal___fieldOwners'
  | 'block___generic_page_template___internal___ignoreType'
  | 'block___generic_page_template___internal___mediaType'
  | 'block___generic_page_template___internal___owner'
  | 'block___generic_page_template___internal___type'
  | 'block___generic_page_template___name'
  | 'block___generic_page_template___pathName'
  | 'block___generic_page_template___seo___id'
  | 'block___generic_page_template___seo___children'
  | 'block___generic_page_template___seo___name'
  | 'block___generic_page_template___seo___title'
  | 'block___generic_page_template___seo___description'
  | 'block___generic_page_template___seo___generic_page_template'
  | 'block___generic_page_template___seo___spaceId'
  | 'block___generic_page_template___seo___contentful_id'
  | 'block___generic_page_template___seo___createdAt'
  | 'block___generic_page_template___seo___updatedAt'
  | 'block___generic_page_template___seo___node_locale'
  | 'block___generic_page_template___blocks'
  | 'block___generic_page_template___blocks___id'
  | 'block___generic_page_template___blocks___children'
  | 'block___generic_page_template___blocks___name'
  | 'block___generic_page_template___blocks___title'
  | 'block___generic_page_template___blocks___slug'
  | 'block___generic_page_template___blocks___generic_page_template'
  | 'block___generic_page_template___blocks___spaceId'
  | 'block___generic_page_template___blocks___contentful_id'
  | 'block___generic_page_template___blocks___createdAt'
  | 'block___generic_page_template___blocks___updatedAt'
  | 'block___generic_page_template___blocks___node_locale'
  | 'block___generic_page_template___spaceId'
  | 'block___generic_page_template___contentful_id'
  | 'block___generic_page_template___createdAt'
  | 'block___generic_page_template___updatedAt'
  | 'block___generic_page_template___sys___revision'
  | 'block___generic_page_template___node_locale'
  | 'block___spaceId'
  | 'block___contentful_id'
  | 'block___createdAt'
  | 'block___updatedAt'
  | 'block___sys___revision'
  | 'block___node_locale'
  | 'copy___id'
  | 'copy___parent___id'
  | 'copy___parent___parent___id'
  | 'copy___parent___parent___children'
  | 'copy___parent___children'
  | 'copy___parent___children___id'
  | 'copy___parent___children___children'
  | 'copy___parent___internal___content'
  | 'copy___parent___internal___contentDigest'
  | 'copy___parent___internal___description'
  | 'copy___parent___internal___fieldOwners'
  | 'copy___parent___internal___ignoreType'
  | 'copy___parent___internal___mediaType'
  | 'copy___parent___internal___owner'
  | 'copy___parent___internal___type'
  | 'copy___children'
  | 'copy___children___id'
  | 'copy___children___parent___id'
  | 'copy___children___parent___children'
  | 'copy___children___children'
  | 'copy___children___children___id'
  | 'copy___children___children___children'
  | 'copy___children___internal___content'
  | 'copy___children___internal___contentDigest'
  | 'copy___children___internal___description'
  | 'copy___children___internal___fieldOwners'
  | 'copy___children___internal___ignoreType'
  | 'copy___children___internal___mediaType'
  | 'copy___children___internal___owner'
  | 'copy___children___internal___type'
  | 'copy___internal___content'
  | 'copy___internal___contentDigest'
  | 'copy___internal___description'
  | 'copy___internal___fieldOwners'
  | 'copy___internal___ignoreType'
  | 'copy___internal___mediaType'
  | 'copy___internal___owner'
  | 'copy___internal___type'
  | 'copy___nodeType'
  | 'copy___content'
  | 'copy___content___nodeType'
  | 'copy___content___content'
  | 'copy___content___content___nodeType'
  | 'copy___content___content___value'
  | 'copy___content___content___content'
  | 'copy___copy'
  | 'copy___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulSponsorsCopyRichTextNode___id'
  | 'childContentfulSponsorsCopyRichTextNode___parent___id'
  | 'childContentfulSponsorsCopyRichTextNode___parent___parent___id'
  | 'childContentfulSponsorsCopyRichTextNode___parent___parent___children'
  | 'childContentfulSponsorsCopyRichTextNode___parent___children'
  | 'childContentfulSponsorsCopyRichTextNode___parent___children___id'
  | 'childContentfulSponsorsCopyRichTextNode___parent___children___children'
  | 'childContentfulSponsorsCopyRichTextNode___parent___internal___content'
  | 'childContentfulSponsorsCopyRichTextNode___parent___internal___contentDigest'
  | 'childContentfulSponsorsCopyRichTextNode___parent___internal___description'
  | 'childContentfulSponsorsCopyRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulSponsorsCopyRichTextNode___parent___internal___ignoreType'
  | 'childContentfulSponsorsCopyRichTextNode___parent___internal___mediaType'
  | 'childContentfulSponsorsCopyRichTextNode___parent___internal___owner'
  | 'childContentfulSponsorsCopyRichTextNode___parent___internal___type'
  | 'childContentfulSponsorsCopyRichTextNode___children'
  | 'childContentfulSponsorsCopyRichTextNode___children___id'
  | 'childContentfulSponsorsCopyRichTextNode___children___parent___id'
  | 'childContentfulSponsorsCopyRichTextNode___children___parent___children'
  | 'childContentfulSponsorsCopyRichTextNode___children___children'
  | 'childContentfulSponsorsCopyRichTextNode___children___children___id'
  | 'childContentfulSponsorsCopyRichTextNode___children___children___children'
  | 'childContentfulSponsorsCopyRichTextNode___children___internal___content'
  | 'childContentfulSponsorsCopyRichTextNode___children___internal___contentDigest'
  | 'childContentfulSponsorsCopyRichTextNode___children___internal___description'
  | 'childContentfulSponsorsCopyRichTextNode___children___internal___fieldOwners'
  | 'childContentfulSponsorsCopyRichTextNode___children___internal___ignoreType'
  | 'childContentfulSponsorsCopyRichTextNode___children___internal___mediaType'
  | 'childContentfulSponsorsCopyRichTextNode___children___internal___owner'
  | 'childContentfulSponsorsCopyRichTextNode___children___internal___type'
  | 'childContentfulSponsorsCopyRichTextNode___internal___content'
  | 'childContentfulSponsorsCopyRichTextNode___internal___contentDigest'
  | 'childContentfulSponsorsCopyRichTextNode___internal___description'
  | 'childContentfulSponsorsCopyRichTextNode___internal___fieldOwners'
  | 'childContentfulSponsorsCopyRichTextNode___internal___ignoreType'
  | 'childContentfulSponsorsCopyRichTextNode___internal___mediaType'
  | 'childContentfulSponsorsCopyRichTextNode___internal___owner'
  | 'childContentfulSponsorsCopyRichTextNode___internal___type'
  | 'childContentfulSponsorsCopyRichTextNode___nodeType'
  | 'childContentfulSponsorsCopyRichTextNode___content'
  | 'childContentfulSponsorsCopyRichTextNode___content___nodeType'
  | 'childContentfulSponsorsCopyRichTextNode___content___content'
  | 'childContentfulSponsorsCopyRichTextNode___content___content___nodeType'
  | 'childContentfulSponsorsCopyRichTextNode___content___content___value'
  | 'childContentfulSponsorsCopyRichTextNode___content___content___content'
  | 'childContentfulSponsorsCopyRichTextNode___copy'
  | 'childContentfulSponsorsCopyRichTextNode___json';

export type ContentfulSponsorsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  list?: Maybe<ContentfulSponsorFilterListInput>;
  block?: Maybe<ContentfulBlockFilterListInput>;
  copy?: Maybe<ContentfulSponsorsCopyRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSponsorsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulSponsorsCopyRichTextNode?: Maybe<ContentfulSponsorsCopyRichTextNodeFilterInput>;
};

export type ContentfulSponsorsFilterListInput = {
  elemMatch?: Maybe<ContentfulSponsorsFilterInput>;
};

export type ContentfulSponsorsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSponsorsEdge>;
  nodes: Array<ContentfulSponsors>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSponsorSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSponsorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSponsorsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSponsorsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSponsorsSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSponsorsSysContentType>;
};

export type ContentfulSponsorsSysContentType = {
  sys?: Maybe<ContentfulSponsorsSysContentTypeSys>;
};

export type ContentfulSponsorsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSponsorsSysContentTypeSysFilterInput>;
};

export type ContentfulSponsorsSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulSponsorsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSponsorsSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSponsorsSysContentTypeFilterInput>;
};

export type ContentfulSponsorSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSponsorSysContentType>;
};

export type ContentfulSponsorSysContentType = {
  sys?: Maybe<ContentfulSponsorSysContentTypeSys>;
};

export type ContentfulSponsorSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSponsorSysContentTypeSysFilterInput>;
};

export type ContentfulSponsorSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulSponsorSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSponsorSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSponsorSysContentTypeFilterInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageResizingBehavior = 
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulCollaboratorsCopyRichTextNode?: Maybe<ContentfulCollaboratorsCopyRichTextNode>;
  allContentfulCollaboratorsCopyRichTextNode: ContentfulCollaboratorsCopyRichTextNodeConnection;
  contentfulCollaborators?: Maybe<ContentfulCollaborators>;
  allContentfulCollaborators: ContentfulCollaboratorsConnection;
  contentfulCollaborator?: Maybe<ContentfulCollaborator>;
  allContentfulCollaborator: ContentfulCollaboratorConnection;
  contentfulSponsorsCopyRichTextNode?: Maybe<ContentfulSponsorsCopyRichTextNode>;
  allContentfulSponsorsCopyRichTextNode: ContentfulSponsorsCopyRichTextNodeConnection;
  contentfulSponsors?: Maybe<ContentfulSponsors>;
  allContentfulSponsors: ContentfulSponsorsConnection;
  contentfulSponsor?: Maybe<ContentfulSponsor>;
  allContentfulSponsor: ContentfulSponsorConnection;
  contentfulMicroCopyCopyRichTextNode?: Maybe<ContentfulMicroCopyCopyRichTextNode>;
  allContentfulMicroCopyCopyRichTextNode: ContentfulMicroCopyCopyRichTextNodeConnection;
  contentfulMicroCopy?: Maybe<ContentfulMicroCopy>;
  allContentfulMicroCopy: ContentfulMicroCopyConnection;
  contentfulSeoMetaData?: Maybe<ContentfulSeoMetaData>;
  allContentfulSeoMetaData: ContentfulSeoMetaDataConnection;
  contentfulGenericPageTemplate?: Maybe<ContentfulGenericPageTemplate>;
  allContentfulGenericPageTemplate: ContentfulGenericPageTemplateConnection;
  contentfulBlock?: Maybe<ContentfulBlock>;
  allContentfulBlock: ContentfulBlockConnection;
  contentfulCta?: Maybe<ContentfulCta>;
  allContentfulCta: ContentfulCtaConnection;
  contentfulHeroBodyRichTextNode?: Maybe<ContentfulHeroBodyRichTextNode>;
  allContentfulHeroBodyRichTextNode: ContentfulHeroBodyRichTextNodeConnection;
  contentfulHero?: Maybe<ContentfulHero>;
  allContentfulHero: ContentfulHeroConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCollaboratorsCopyRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulCollaboratorsCopyRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulCollaboratorsCopyRichTextNodeArgs = {
  filter?: Maybe<ContentfulCollaboratorsCopyRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulCollaboratorsCopyRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCollaboratorsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  list?: Maybe<ContentfulCollaboratorFilterListInput>;
  block?: Maybe<ContentfulBlockFilterListInput>;
  copy?: Maybe<ContentfulCollaboratorsCopyRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCollaboratorsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulCollaboratorsCopyRichTextNode?: Maybe<ContentfulCollaboratorsCopyRichTextNodeFilterInput>;
};


export type QueryAllContentfulCollaboratorsArgs = {
  filter?: Maybe<ContentfulCollaboratorsFilterInput>;
  sort?: Maybe<ContentfulCollaboratorsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCollaboratorArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  collaborators?: Maybe<ContentfulCollaboratorsFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCollaboratorSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulCollaboratorArgs = {
  filter?: Maybe<ContentfulCollaboratorFilterInput>;
  sort?: Maybe<ContentfulCollaboratorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSponsorsCopyRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulSponsorsCopyRichTextNodeContentFilterListInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulSponsorsCopyRichTextNodeArgs = {
  filter?: Maybe<ContentfulSponsorsCopyRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulSponsorsCopyRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSponsorsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  list?: Maybe<ContentfulSponsorFilterListInput>;
  block?: Maybe<ContentfulBlockFilterListInput>;
  copy?: Maybe<ContentfulSponsorsCopyRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSponsorsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulSponsorsCopyRichTextNode?: Maybe<ContentfulSponsorsCopyRichTextNodeFilterInput>;
};


export type QueryAllContentfulSponsorsArgs = {
  filter?: Maybe<ContentfulSponsorsFilterInput>;
  sort?: Maybe<ContentfulSponsorsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSponsorArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<ContentfulAssetFilterInput>;
  sponsors?: Maybe<ContentfulSponsorsFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSponsorSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulSponsorArgs = {
  filter?: Maybe<ContentfulSponsorFilterInput>;
  sort?: Maybe<ContentfulSponsorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMicroCopyCopyRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulMicroCopyCopyRichTextNodeContentFilterListInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulMicroCopyCopyRichTextNodeArgs = {
  filter?: Maybe<ContentfulMicroCopyCopyRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulMicroCopyCopyRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMicroCopyArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<ContentfulMicroCopyCopyRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMicroCopySysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulMicroCopyCopyRichTextNode?: Maybe<ContentfulMicroCopyCopyRichTextNodeFilterInput>;
};


export type QueryAllContentfulMicroCopyArgs = {
  filter?: Maybe<ContentfulMicroCopyFilterInput>;
  sort?: Maybe<ContentfulMicroCopySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSeoMetaDataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  generic_page_template?: Maybe<ContentfulGenericPageTemplateFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSeoMetaDataSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulSeoMetaDataArgs = {
  filter?: Maybe<ContentfulSeoMetaDataFilterInput>;
  sort?: Maybe<ContentfulSeoMetaDataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulGenericPageTemplateArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  pathName?: Maybe<StringQueryOperatorInput>;
  seo?: Maybe<ContentfulSeoMetaDataFilterInput>;
  blocks?: Maybe<ContentfulBlockFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulGenericPageTemplateSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulGenericPageTemplateArgs = {
  filter?: Maybe<ContentfulGenericPageTemplateFilterInput>;
  sort?: Maybe<ContentfulGenericPageTemplateSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  generic_page_template?: Maybe<ContentfulGenericPageTemplateFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulBlockArgs = {
  filter?: Maybe<ContentfulBlockFilterInput>;
  sort?: Maybe<ContentfulBlockSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCtaArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  test?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCtaSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulCtaArgs = {
  filter?: Maybe<ContentfulCtaFilterInput>;
  sort?: Maybe<ContentfulCtaSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulHeroBodyRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulHeroBodyRichTextNodeContentFilterListInput>;
  body?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulHeroBodyRichTextNodeArgs = {
  filter?: Maybe<ContentfulHeroBodyRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulHeroBodyRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulHeroArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<ContentfulAssetFilterInput>;
  block?: Maybe<ContentfulBlockFilterListInput>;
  body?: Maybe<ContentfulHeroBodyRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHeroSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulHeroBodyRichTextNode?: Maybe<ContentfulHeroBodyRichTextNodeFilterInput>;
};


export type QueryAllContentfulHeroArgs = {
  filter?: Maybe<ContentfulHeroFilterInput>;
  sort?: Maybe<ContentfulHeroSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Date']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___displayName'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___rule___include'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___richText___resolveFieldLocales'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___displayName'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___rule___include'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___richText___resolveFieldLocales'
  | 'pluginOptions___fileName'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  displayName?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  rule?: Maybe<SitePluginPluginOptionsRule>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  richText?: Maybe<SitePluginPluginOptionsRichText>;
  fileName?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  displayName?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  rule?: Maybe<SitePluginPluginOptionsRuleFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  richText?: Maybe<SitePluginPluginOptionsRichTextFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsRichText = {
  resolveFieldLocales?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsRichTextFilterInput = {
  resolveFieldLocales?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsRule = {
  include?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsRuleFilterInput = {
  include?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type SeoDataQueryVariables = Exact<{ [key: string]: never; }>;


export type SeoDataQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'author'>> }> };

export type HeroFragment = { background?: Maybe<{ fluid?: Maybe<GatsbyContentfulFluid_WithWebpFragment> }>, body?: Maybe<Pick<ContentfulHeroBodyRichTextNode, 'json'>> };

export type SponsorsFragment = { copy?: Maybe<Pick<ContentfulSponsorsCopyRichTextNode, 'json'>>, list?: Maybe<Array<Maybe<(
    Pick<ContentfulSponsor, 'id' | 'name' | 'url'>
    & { logo?: Maybe<{ fluid?: Maybe<GatsbyContentfulFluid_WithWebpFragment> }> }
  )>>> };

export type CollaboratorsFragment = { copy?: Maybe<Pick<ContentfulCollaboratorsCopyRichTextNode, 'json'>>, list?: Maybe<Array<Maybe<(
    Pick<ContentfulCollaborator, 'id' | 'name'>
    & { image?: Maybe<{ fluid?: Maybe<GatsbyContentfulFluid_WithWebpFragment> }> }
  )>>> };

export type SeoFragment = { seo?: Maybe<(
    Pick<ContentfulSeoMetaData, 'title' | 'description'>
    & { image?: Maybe<{ file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }> }
  )> };

export type GenericPageBlocksFragment = { nav?: Maybe<Array<Maybe<Pick<ContentfulBlock, 'slug' | 'title'>>>>, blocks?: Maybe<Array<Maybe<(
    Pick<ContentfulBlock, 'slug'>
    & { content?: Maybe<Array<Maybe<(
      { __typename: 'ContentfulCollaborators' }
      & CollaboratorsFragment
    ) | (
      { __typename: 'ContentfulHero' }
      & HeroFragment
    ) | (
      { __typename: 'ContentfulSponsors' }
      & SponsorsFragment
    )>>> }
  )>>> };

export type FooterMicroCopyQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterMicroCopyQuery = { contentfulMicroCopy?: Maybe<{ copy?: Maybe<Pick<ContentfulMicroCopyCopyRichTextNode, 'json'>> }> };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { page?: Maybe<(
    SeoFragment
    & GenericPageBlocksFragment
  )> };

export type GenericPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GenericPageQuery = { page?: Maybe<(
    SeoFragment
    & GenericPageBlocksFragment
  )> };

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
