import {
  Container,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Momo from "./components/momo";
import Timo from "./components/timo";

function App() {
  return (
    <div className="App">
      <Container my={10}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab _selected={{ color: "white", bg: "pink.500" }}>Momo</Tab>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>
              Ngân hàng Timo
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Momo />
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
