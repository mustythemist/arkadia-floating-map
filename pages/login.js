import { ConnectWallet } from "@thirdweb-dev/react";
import NftData from "../components/common/nftData";
import { useEffect } from "react";

const Login = () => {


  const { data, address, isLoading, error } = NftData();

  return (
    <div className="login-main">
      <div className="login-main__box">
        <img src="text-logo.webp" alt="" />
        <ConnectWallet />
        <h2>{isLoading ? 'Loading...' : ''}</h2>
        <h2>{address}</h2>
      </div>
    </div>
  );
}

export default Login;