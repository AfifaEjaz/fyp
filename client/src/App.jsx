import React, { useContext, useState, useEffect } from "react";
import "./App.css";
import User from "./User";
import Admin from "./Admin";
import Guest from './Guest'
import Organization from './Organization'
import { decodeToken } from "react-jwt";
import { GlobalContext } from "./Context/login/context";

const ComponentByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guest,
  'organization': Organization,
}

const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']

function App() {

  const { state, dispatch } = useContext(GlobalContext)

  const decodeUser = (token) => {
    if (!token) {
      return undefined
    }
    else {
      const res = decodeToken(token)
      console.log(res)
      return res?.role
    }
  }

  const currentToken = decodeUser(state?.token)
  const CurrentUser = getUserRole(currentToken)
  // console.log("current user",CurrentUser)
  return <CurrentUser />
  }

  // const [isToken, setIsToken] = useState(false);
  // const location = useLocation();

  // const token = localStorage.getItem("token");
  // console.log(token);
  // const resp = decodeToken(token);
  // console.log("ye hai role", resp?.role);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   setIsToken(!!token);
  // }, [location]);

  // console.log(isToken);

  // if(resp?.role === "user")
  //   return(
  //   <>
  //     {/* <Navigation isToken={isToken} /> */}
  //     <Routes>
  //     {/* <Route path="/" element={<Home />} />
  //     <Route path="/reset-password-email" element={<ResetPasswordEmail />} />
  //     <Route path="/api/user/reset/:id/:token" element={<ResetPassword />} /> */}
  //     <Route path="/user" element={<User />} />
  //   </Routes>
  //   </>
  //   )

//  else if(resp?.role === "admin")
//   return (
//     <>
//       <Navigation isToken={isToken} />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/reset-password-email" element={<ResetPasswordEmail />} />
//         <Route path="/api/user/reset/:id/:token" element={<ResetPassword />} />
//         <Route path="/admin" element={<Admin />} />
//       </Routes>
//     </>
//   );
//   else
//   return(
//     <>
//     <Navigation isToken={isToken} />

//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/loginReg" element={<LoginReg />} />
//       <Route path="/reset-password-email" element={<ResetPasswordEmail />} />
//       <Route path="/api/user/reset/:id/:token" element={<ResetPassword />} />
//       <Route path='/dashboard' element={<Dashboard />} />
//     </Routes>
//   </>
//   )
// }

export default App;
