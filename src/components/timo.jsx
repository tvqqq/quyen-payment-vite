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
  Badge,
  Tooltip,
} from "@chakra-ui/react";
import qrTimo from "../quyen-timo.jpeg";
import {
  CopyIcon,
  TriangleDownIcon,
  SearchIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Timo() {
  const [transId, setTransId] = useState("");
  const [find, setFind] = useState(false);
  const [success, setSuccess] = useState(null);
  const [transaction, setTransaction] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Center>
      <Flex alignItems="center" direction="column">
        <Flex alignItems="center" direction="column" my="1">
          <Badge colorScheme="pink" variant="subtle">
            Tên NH
          </Badge>
          <Text mt="1">
            <span>Viet Capital Bank</span>
            <br />
            <span>Ngân hàng TMCP Bản Việt</span>
          </Text>
        </Flex>
        <Flex alignItems="center" direction="row" my="1">
          <Badge colorScheme="teal" variant="subtle">
            Số TK
          </Badge>
          <Text mx="2">9017041090402</Text>
          <CopyToClipboard text="9017041090402">
            <Tooltip label="Copy" hasArrow arrowSize={15}>
              <IconButton
                size="xs"
                icon={<CopyIcon />}
                variant="outline"
                colorScheme="teal"
              />
            </Tooltip>
          </CopyToClipboard>
        </Flex>
        <Flex alignItems="center" direction="row" my="1">
          <Badge colorScheme="orange" variant="subtle">
            Chủ TK
          </Badge>
          <Text mx="2">TAT VI QUYEN</Text>
          <CopyToClipboard text="TAT VI QUYEN">
            <Tooltip label="Copy" hasArrow arrowSize={15}>
              <IconButton
                size="xs"
                icon={<CopyIcon />}
                variant="outline"
                colorScheme="orange"
              />
            </Tooltip>
          </CopyToClipboard>
        </Flex>
        <HamburgerIcon my="2" color="gray.500" />
        <Text fontSize="md">hoặc scan mã VietQR</Text>
        <TriangleDownIcon my="1" color="gray.700" />
        <Box
          boxShadow="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          my="1"
        >
          <Image src={qrTimo} alt="Scan me" />
        </Box>
        <TriangleDownIcon my="1" color="gray.900" />
        <Text fontSize="lg">Kiểm tra giao dịch</Text>
        <Text fontSize="sm" color="gray.500">
          (Coming soon)
        </Text>
        <Stack spacing={3} px="3">
          <Flex alignItems="center" mt="2">
            <Input
              placeholder="Mã giao dịch"
              variant="filled"
              _placeholder={{ opacity: 1, color: "gray.500" }}
              isDisabled
              onChange={(e) => setTransId(e.target.value)}
            />
            <IconButton
              ml="1"
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
              variant="outline"
              isLoading={isLoading}
              isDisabled
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

export default Timo;
