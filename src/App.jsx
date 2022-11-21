import {
  Container,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Flex,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import Momo from "./components/momo";
import ZaloPay from "./components/zalopay";
import btc from "./Bitcoin_evergreen.png";
import logo from "./quyen-payment-logo.png";
import "./App.css";
import Bitcoin from "./components/bitcoin";
import Tcb from "./components/tcb";

function App() {
  return (
    <div className="App">
      <Container p={[3, 10]} boxShadow="lg" background="white" rounded="lg">
        <Flex
          alignItems="center"
          justifyContent="center"
          mb="5"
          direction="column"
        >
          <Text
            fontSize="lg"
            boxShadow="sm"
            background="facebook.100"
            rounded="lg"
            paddingX={2}
            paddingY={1}
          >
            pay.qeoqeo.com
          </Text>
          <Image src={logo} alt="Logo" w="8" h="8" />
        </Flex>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab _selected={{ color: "white", bg: "pink.500" }}>MoMo</Tab>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>ZaloPay</Tab>
            <Tab _selected={{ color: "white", bg: "red.500" }}>Techcombank</Tab>
            <Tab _selected={{ color: "white", bg: "orange.500" }}>
              <Flex alignItems="center">
                Bitcoin <Image src={btc} alt="Bitcoin" w="5" h="5" />
              </Flex>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Momo />
            </TabPanel>
            <TabPanel>
              <ZaloPay />
            </TabPanel>
            <TabPanel>
              <Tcb />
            </TabPanel>
            <TabPanel>
              <Bitcoin />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );
}

export default App;
