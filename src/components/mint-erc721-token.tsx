import { FinishedTxData, openContractCall } from "@stacks/connect";
import { Button } from "@stacks/ui";
import Config from "../config";
import { useState } from "react";
import {
  uintCV,
  standardPrincipalCV
} from "@stacks/transactions";

async function mintToken() {
    return openContractCall({
      onCancel: () => alert("Cancelled!"),
      onFinish: (tx: FinishedTxData) => console.log("tx sent", tx),
      contractAddress: Config.erc721ContractAddress,
      contractName: Config.erc721ContractName,
      functionName: "mintToken",
      functionArgs: [ standardPrincipalCV('SP2JXKMSH007NPYAQHKJPQMAQYAD90NQGTVJVQ02B'), uintCV('3')],
      //network: Network
    });
  }

const PlayButton = (props: any) => {
  const [tokenId, setTokenId] = useState('2');
  
  return (
    <>
    <Button isLoading={false} onClick={mintToken} {...props}>
      Mint token
    </Button>

    </>
  );
};

export default PlayButton;
