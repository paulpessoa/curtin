import { Routes, Route } from "react-router-dom";

import Home from "../layout/pages/Home"
import Error404 from "../layout/pages/Error404"
  
function Routers(){
    return (
 <Routes>
   <Route exact  path="/" element={<Home />} />
   <Route exact  path="/Error404" element={<Error404 />} />
   <Route path="*" element={<Error404 />} />
 </Routes>
    );
}

export default Routers;
