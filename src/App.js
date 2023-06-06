import { GoogleOAuthProvider } from '@react-oauth/google';
// img

//components
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '365079144824-f6vkcvc4rf5n56jq2o0o9d8tm8uhrldk.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}
export default App;