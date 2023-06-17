import { useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import myABI from "../../abi.json";

const NftData = () => {


  const address = useAddress();
  // const address = "0xa3083DeD9E6EC804117C24E7e2089FEd7173305a";

  const { contract } = useContract("0x3c178321f5BC73494046a46b5A065F9211b7C65E", myABI);

  const { data, isLoading, error } = useOwnedNFTs(
    contract,
    address
  );

  console.log(data);

  return {
    data,
    address,
    isLoading,
    error,
  };
}

export default NftData;