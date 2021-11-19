import { StacksTestnet } from "@stacks/network";

const Config = {
	erc721ContractName: "erc721",
	erc721ContractAddress: "STH65BDD88EQ3FE0HARR848CNWBP17KGEK0BNEH0"

}
// See contract at: https://explorer.stacks.co/txid/0x4f080e895c26c930cc6eefeb97eb6b46f4243fb58d21647e4dd9d20a2d839bd8?chain=testnet

export default Config;

export const Network = new StacksTestnet();
