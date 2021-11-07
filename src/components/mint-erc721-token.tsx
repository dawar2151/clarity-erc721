import { FinishedTxData, openContractCall } from "@stacks/connect";
import { Button } from "@stacks/ui";
import Config from "../config";
import { useState } from "react";
import {
  uintCV,
  standardPrincipalCV
} from "@stacks/transactions";

import { displayName, userSession, getTestNetAddress } from "../auth";
const PlayButton = (props: any) => {
  const [tokenId, setTokenId] = useState('2');
  async function mintToken() {
    const address = getTestNetAddress();
    console.log(address);
    return openContractCall({
      onCancel: () => alert("Cancelled!"),
      onFinish: (tx: FinishedTxData) => console.log("tx sent", tx),
      contractAddress: Config.erc721ContractAddress,
      contractName: Config.erc721ContractName,
      functionName: "mintToken",
      functionArgs: [ standardPrincipalCV(address), uintCV(tokenId)],
      //network: Network
    });
  }
  return (
    <>
    <input 
      type="text"
      value={tokenId}
      onChange={(e) => setTokenId(e.target.value)} />
    <Button isLoading={false} onClick={mintToken} {...props}>
      Mint token
    </Button>

    </>
  );
};

export default PlayButton;
