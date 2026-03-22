import type { StacCollection } from "stac-ts";

export const KNOWN_LODS = [0, 1, 1.2, 1.3, 2, 2.2, 2.3, 3] as const;

export const CO_TYPE_GROUPS: Record<string, string[]> = {
  Buildings: [
    "Building",
    "BuildingPart",
    "BuildingInstallation",
    "BuildingStorey",
    "BuildingRoom",
  ],
  Infrastructure: [
    "Bridge",
    "BridgePart",
    "Road",
    "Railway",
    "Tunnel",
    "TunnelPart",
    "TransportSquare",
  ],
  Water: ["WaterBody", "WaterSurface"],
  Vegetation: ["PlantCover", "SolitaryVegetationObject"],
  Terrain: ["TINRelief", "LandUse"],
  Other: ["CityFurniture", "CityObjectGroup", "GenericCityObject"],
};

export type FilterMode = "include" | "exclude";
export type BooleanFilterState = "must" | "must-not" | "any";

function getSummaryArray<T>(
  collection: StacCollection,
  key: string
): T[] | null {
  const raw = (collection.summaries as Record<string, unknown> | undefined)?.[
    key
  ];
  if (!Array.isArray(raw)) return null;
  return (raw as unknown[]).flat() as T[];
}

function getSummaryBoolean(
  collection: StacCollection,
  key: string
): boolean | null {
  const raw = (collection.summaries as Record<string, unknown> | undefined)?.[
    key
  ];
  if (typeof raw === "boolean") return raw;
  if (!Array.isArray(raw)) return null;
  return raw.includes(true);
}

export function isCollectionMatchingLods(
  collection: StacCollection,
  selectedLods: Set<number>,
  mode: FilterMode
): boolean {
  if (selectedLods.size === 0) return true;
  const collectionLods = getSummaryArray<number>(collection, "city3d:lods");
  if (collectionLods === null) return true;
  const hasMatch = collectionLods.some((lod) => selectedLods.has(lod));
  return mode === "include" ? hasMatch : !hasMatch;
}

export function isCollectionMatchingCoTypes(
  collection: StacCollection,
  selectedTypes: Set<string>,
  mode: FilterMode
): boolean {
  if (selectedTypes.size === 0) return true;
  const collectionTypes = getSummaryArray<string>(
    collection,
    "city3d:co_types"
  );
  if (collectionTypes === null) return true;
  const hasMatch = collectionTypes.some((type) => selectedTypes.has(type));
  return mode === "include" ? hasMatch : !hasMatch;
}

export function isCollectionMatchingBooleanSummary(
  collection: StacCollection,
  key: "city3d:semantic_surfaces" | "city3d:textures" | "city3d:materials",
  state: BooleanFilterState
): boolean {
  if (state === "any") return true;
  const hasTrue = getSummaryBoolean(collection, key);
  if (hasTrue === null) return true;
  return state === "must" ? hasTrue : !hasTrue;
}
