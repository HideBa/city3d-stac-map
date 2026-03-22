import type { StacAsset, StacCatalog, StacCollection, StacItem } from "stac-ts";

export interface StacItemCollection {
  type: "FeatureCollection";
  features: StacItem[];
  id?: string;
  title?: string;
  description?: string;
  links?: StacLink[];
  numberMatched?: number;
  [k: string]: unknown;
}

export type StacValue =
  | StacCatalog
  | StacCollection
  | StacItem
  | StacItemCollection;

export interface StacCollections {
  collections: StacCollection[];
  links?: StacLink[];
  numberMatched?: number;
}

export interface NaturalLanguageCollectionSearchResult {
  collection_id: string;
  explanation: string;
}

export type StacAssets = { [k: string]: StacAsset };

export interface StacSearch {
  collections: string[];
  bbox?: [number, number, number, number];
  datetime?: string;
  limit?: number;
}

export type DatetimeBounds = { start: Date | null; end: Date | null };

type AssetWithAlternates = StacAsset & {
  alternate?: { [key: string]: AlternateAsset };
  bands?: Band[];
  "eo:bands"?: Band[];
};

interface AlternateAsset {
  href: string;
  title?: string;
}

interface Band {
  name?: string;
  common_name?: string;
  description?: string;
}

interface SignedItem extends StacItem {
  bbox: BBox2D;
  assets: { data: StacAsset };
}

// STAC 3D City Model Extension types
// See: https://github.com/cityjson/stac-city3d
// Internal representation after extracting city3d:* fields from STAC properties/summaries
export interface City3DProperties {
  version?: string;
  cityObjects?: number | CityObjectsStatistics;
  lods?: number[];
  coTypes?: string[];
  attributes?: AttributeDefinition[];
  semanticSurfaces?: boolean;
  textures?: boolean;
  materials?: boolean;
  projCode?: string | string[];
  wkt2?: string;
  projjson?: object;
  mediaType?: string;
}

export interface CityObjectsStatistics {
  min?: number;
  max?: number;
  total?: number;
}

export interface AttributeDefinition {
  name: string;
  type: "String" | "Number" | "Boolean" | "Date" | "Array" | "Object";
  description?: string;
  required?: boolean;
}

// City object type categories for better organization
export type CityObjectType =
  | "Building"
  | "BuildingPart"
  | "BuildingInstallation"
  | "BuildingStorey"
  | "BuildingRoom"
  | "Bridge"
  | "BridgePart"
  | "Road"
  | "Railway"
  | "Tunnel"
  | "TunnelPart"
  | "WaterBody"
  | "WaterSurface"
  | "PlantCover"
  | "SolitaryVegetationObject"
  | "TINRelief"
  | "LandUse"
  | "CityFurniture"
  | "CityObjectGroup"
  | "GenericCityObject"
  | "TransportSquare"
  | string; // Allow for extension types prefixed with "+"
