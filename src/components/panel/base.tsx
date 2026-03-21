import { Box, HStack, Span } from "@chakra-ui/react";
import type { ReactNode } from "react";

export function PanelHeader({
  icon,
  children,
  actions,
}: {
  icon?: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <HStack>
      {icon}
      <Span flex={1} truncate>
        {children}
      </Span>
      {actions}
    </HStack>
  );
}

export function BasePanel({
  header,
  children,
}: {
  header: ReactNode;
  children: ReactNode;
}) {
  return (
    <Box
      bg={"bg.panel"}
      pointerEvents={"auto"}
      rounded={"xl"}
      borderWidth={1}
      borderColor={"border"}
      css={{
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
      }}
    >
      <Box
        borderBottomWidth={1}
        borderColor={"border.subtle"}
        py={2.5}
        px={4}
        fontWeight={"medium"}
        fontSize={"sm"}
        letterSpacing={"tight"}
        color={"fg.muted"}
      >
        {header}
      </Box>
      <Box p={4} overflow={"auto"} maxH={"80dvh"}>
        {children}
      </Box>
    </Box>
  );
}
