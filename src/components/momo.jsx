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
import img from "../quyen-momo.jpeg";
import { TriangleDownIcon, SearchIcon, ChatIcon } from "@chakra-ui/icons";

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
        <Text fontSize="lg">Mở app Momo</Text>
        <TriangleDownIcon my="1" color="gray.500" />
        <Text fontSize="lg">Quét mã QR</Text>
        <TriangleDownIcon my="1" color="gray.600" />
        <Box
          boxShadow="md"
          boxSize="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          my="1"
        >
          <Image src={img} alt="Quyen Momo" />
        </Box>
        <TriangleDownIcon mb="1" color="gray.700" />
        <Text fontSize="lg">Kiểm tra giao dịch</Text>
        <Stack spacing={3} px="3">
          <Flex alignItems="center" mt="2">
            <Input
              placeholder="Mã giao dịch"
              variant="filled"
              onChange={(e) => setTransId(e.target.value)}
            />
            <IconButton
              ml="1"
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
              variant="outline"
              isLoading={isLoading}
              onClick={() => findTransactionId()}
            />
          </Flex>
          {find && (
            <Box boxShadow="md">
              {!success ? (
                <Alert status="error">
                  <AlertIcon />
                  <div>
                    <Text fontSize="xl" color="red.500">
                      Không tìm thấy giao dịch. Vui lòng thử lại sau 1 phút.
                    </Text>
                    <Text fontSize="md">
                      Giai đoạn đầu hệ thống sẽ chưa ổn định nên nếu vẫn còn lỗi
                      thì{" "}
                      <Link href="https://m.me/tvqqq" isExternal>
                        <u>
                          inbox Messenger cho mình <ChatIcon mr="3px" />
                        </u>
                      </Link>
                      nhé ^^!
                    </Text>
                  </div>
                </Alert>
              ) : (
                <>
                  <Alert status="success">
                    <AlertIcon />
                    Giao dịch thành công! Cảm ơn bạn.
                  </Alert>
                  {transaction && (
                    <TableContainer>
                      <Table variant="simple">
                        <Tbody>
                          <Tr>
                            <Td>Mã giao dịch</Td>
                            <Td>{transaction.transactionId}</Td>
                          </Tr>
                          <Tr>
                            <Td>Số tiền</Td>
                            <Td>{transaction.amount.toLocaleString()} VNĐ</Td>
                          </Tr>
                          <Tr>
                            <Td>Người gửi</Td>
                            <Td>{transaction.senderName}</Td>
                          </Tr>
                          <Tr>
                            <Td>Số điện thoại người gửi</Td>
                            <Td>{transaction.senderPhone}</Td>
                          </Tr>
                          <Tr>
                            <Td>Thời gian</Td>
                            <Td>{transaction.time}</Td>
                          </Tr>
                          <Tr>
                            <Td>Lời nhắn</Td>
                            <Td>{transaction.message}</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  )}
                </>
              )}
            </Box>
          )}
        </Stack>
      </Flex>
    </Center>
  );
}

export default Momo;
