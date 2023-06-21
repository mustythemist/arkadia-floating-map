import { ConnectWallet } from "@thirdweb-dev/react";
import NftData from "../components/common/nftData";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const { data, address, isLoading, error } = NftData();

  useEffect(() => {
    console.log('address', address);
    if (address) {
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }, [address]);

  return (
    <div className="login-main">
      <div className="login-main__box">
        <img src="text-logo.webp" alt="" />
        <p>Connect You Wallet to Visit the Arkadia <br />Floating Guarden</p>
        <ConnectWallet />
        <div>
          {/* <h2>{isLoading ? 'Loading...' : ''}</h2> */}
          <h2>{address ? 'Waiting to load the map ...' : ''}</h2>
        </div>
      </div>
    </div>
  );
}

export default Login;