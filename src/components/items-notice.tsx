import type { FilteredItems } from "@/utils/items";
import { Text } from "@chakra-ui/react";

export default function ItemsNotice({
  filteredItems,
}: {
  filteredItems: FilteredItems | null;
}) {
  if (!filteredItems) return null;
  const { visible, total } = filteredItems;
  if (visible.length >= total) return null;

  return (
    <Text
      position="absolute"
      bottom={4}
      left="50%"
      transform="translateX(-50%)"
      bg="bg/80"
      backdropFilter="blur(4px)"
      px={3}
      py={1}
      borderRadius="md"
      fontSize="xs"
      color="fg.muted"
      zIndex={1}
      whiteSpace="nowrap"
    >
      Showing {visible.length.toLocaleString()} of {total.toLocaleString()}{" "}
      items — zoom in or pan to see more
    </Text>
  );
}
