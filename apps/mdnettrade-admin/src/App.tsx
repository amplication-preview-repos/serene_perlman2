import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SchemeList } from "./scheme/SchemeList";
import { SchemeCreate } from "./scheme/SchemeCreate";
import { SchemeEdit } from "./scheme/SchemeEdit";
import { SchemeShow } from "./scheme/SchemeShow";
import { InvestmentList } from "./investment/InvestmentList";
import { InvestmentCreate } from "./investment/InvestmentCreate";
import { InvestmentEdit } from "./investment/InvestmentEdit";
import { InvestmentShow } from "./investment/InvestmentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Mdnettrade"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Scheme"
          list={SchemeList}
          edit={SchemeEdit}
          create={SchemeCreate}
          show={SchemeShow}
        />
        <Resource
          name="Investment"
          list={InvestmentList}
          edit={InvestmentEdit}
          create={InvestmentCreate}
          show={InvestmentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
      </Admin>
    </div>
  );
};

export default App;
