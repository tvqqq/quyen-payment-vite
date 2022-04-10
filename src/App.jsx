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
import Timo from "./components/timo";
import btc from "./Bitcoin_evergreen.png";
import logo from "./quyen-payment-logo.png";
import "./App.css";

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
          <Text fontSize="2xl">Quyen Payment</Text>
          <Image src={logo} alt="Logo" w="8" h="8" />
        </Flex>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab _selected={{ color: "white", bg: "pink.500" }}>MoMo</Tab>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>
              Ngân hàng Timo
            </Tab>
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
              <Timo />
            </TabPanel>
            <TabPanel>
              <Timo />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );
}

export default App;
