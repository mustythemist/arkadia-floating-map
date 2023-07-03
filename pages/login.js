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
    const audio = new Audio('music/Flying_Islands_Theme.wav');

    audio.loop = true; // Set the music to loop
    audio.play();
  }, [address]);

  return (
    <div className="login-main">
      <div className="login-main__bg-img">
        <img src="sky.png" alt="" />
      </div>
      <div className="login-main__box">
        <img src="text-logo.webp" alt="" />
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