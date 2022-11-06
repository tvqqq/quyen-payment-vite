import { useState } from "react";
import {
  Box,
  Image,
  Center,
  Text,
  Flex,
  Input,
  IconButton,
  Stack,
  Alert,
  AlertIcon,
  Link,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import qrMomo from "../quyen-momo.jpeg";
import {
  TriangleDownIcon,
  SearchIcon,
  ChatIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

function Momo() {
  const [transId, setTransId] = useState("");
  const [find, setFind] = useState(false);
  const [success, setSuccess] = useState(null);
  const [transaction, setTransaction] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const findTransactionId = async () => {
    setIsLoading(true);
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/momo/query?transId=" + transId
    );
    const data = await response.json();
    setIsLoading(false);
    setFind(true);
    if (data.data.length === 0) {
      setSuccess(false);
      return;
    }
    setTransaction(data.data[0]);
    setSuccess(true);
  };

  return (
    <Center>
      <Flex alignItems="center" direction="column">
        <Text fontSize="lg">(PC) Mở app MoMo và quét mã QR</Text>
        <HamburgerIcon my="2" color="gray.500" />
        <Text fontSize="lg">(Điện thoại) Nhấn vào mã QR</Text>
        <TriangleDownIcon my="1" color="gray.700" />
        <Link href="https://page.momoapp.vn/ilaqKqDNzPj" isExternal>
          <Box
            boxShadow="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            my="1"
          >
            <Image src={qrMomo} alt="Scan me" />
          </Box>
        </Link>
      </Flex>
    </Center>
  );
}

export default Momo;
