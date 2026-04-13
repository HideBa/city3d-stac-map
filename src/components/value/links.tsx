import { useStore } from "@/store";
import {
  Button,
  ButtonGroup,
  Center,
  HStack,
  IconButton,
  List,
  Span,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  LuArrowRight,
  LuChevronDown,
  LuExternalLink,
  LuLink,
} from "react-icons/lu";
import type { StacLink } from "stac-ts";
import { Section } from "../section";

const HIERARCHICAL_LINKS = [
  "child",
  "parent",
  "root",
  "collection",
  "item",
  "items",
];

const EXCLUDED_RELS = ["item"];
const PAGE_SIZE = 50;

export default function Links({ links }: { links: StacLink[] }) {
  const filtered = links.filter((l) => !EXCLUDED_RELS.includes(l.rel));
  const [displayCount, setDisplayCount] = useState(PAGE_SIZE);
  const displayed = filtered.slice(0, displayCount);
  const hasMore = displayCount < filtered.length;

  return (
    <Section
      icon={<LuLink />}
      title={`Links (${filtered.length})`}
      open={false}
    >
      <List.Root variant={"plain"}>
        {displayed.map((link, i) => (
          <LinkListItem link={link} key={"link-" + i} />
        ))}
      </List.Root>
      {hasMore && (
        <Center>
          <Button
            size="xs"
            variant="ghost"
            onClick={() => setDisplayCount((c) => c + PAGE_SIZE)}
          >
            <LuChevronDown />
            Show more ({filtered.length - displayCount} remaining)
          </Button>
        </Center>
      )}
    </Section>
  );
}

function LinkListItem({ link }: { link: StacLink }) {
  const setHref = useStore((store) => store.setHref);

  return (
    <List.Item display={"block"}>
      <HStack>
        <Span flex={1}>{link.title || link.rel}</Span>
        <ButtonGroup variant={"plain"} size="2xs">
          {HIERARCHICAL_LINKS.includes(link.rel) && (
            <IconButton onClick={() => setHref(link.href)}>
              <LuArrowRight />
            </IconButton>
          )}
          <IconButton asChild>
            <a href={link.href} target="_blank">
              <LuExternalLink />
            </a>
          </IconButton>
        </ButtonGroup>
      </HStack>
    </List.Item>
  );
}
