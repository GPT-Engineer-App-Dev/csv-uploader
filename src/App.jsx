import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Box bg="gray.900" color="white" minH="100vh">
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
