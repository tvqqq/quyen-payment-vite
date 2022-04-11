import {
  Box,
  Image,
  Center,
  Text,
  Flex,
  IconButton,
  Badge,
  Alert,
  AlertIcon,
  Link,
} from "@chakra-ui/react";
import qrBtc from "../quyen-btc-nexo.png";
import {
  CopyIcon,
  TriangleDownIcon,
  LinkIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Bitcoin() {
  return (
    <Center>
      <Flex alignItems="center" direction="column">
        <Flex alignItems="center" direction="column">
          <Badge colorScheme="teal" variant="subtle">
            Address
          </Badge>
          <Flex alignItems="center">
            <Text m="1">32PKD7Gs9CU8Se1zKft23zVHmWwJSVQctB</Text>
            <CopyToClipboard text="32PKD7Gs9CU8Se1zKft23zVHmWwJSVQctB">
              <IconButton
                size="xs"
                icon={<CopyIcon />}
                variant="outline"
                colorScheme="teal"
              />
            </CopyToClipboard>
          </Flex>
        </Flex>
        <HamburgerIcon my="2" color="gray.500" />
        <Text fontSize="md">or scan QR</Text>
        <TriangleDownIcon my="1" color="gray.700" />
        <Box
          boxShadow="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          my="1"
        >
          <Image src={qrBtc} alt="Scan me" w="300" h="300" />
        </Box>
        <Alert status="warning" variant="left-accent" mt="3">
          <AlertIcon />
          <Text align="left">
            Send only Bitcoin (BTC) to this address using the Bitcoin (native)
            network.
          </Text>
        </Alert>
        <Alert status="success" variant="left-accent" mt="3">
          <AlertIcon />
          <Text align="left">
            Check wallet:{" "}
            <Link
              href="https://blockchair.com/bitcoin/address/32PKD7Gs9CU8Se1zKft23zVHmWwJSVQctB"
              isExternal
            >
              Blockchair <LinkIcon mr="3px" />
            </Link>
          </Text>
        </Alert>
      </Flex>
    </Center>
  );
}

export default Bitcoin;
