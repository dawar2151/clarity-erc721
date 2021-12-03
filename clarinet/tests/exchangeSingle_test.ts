import {
    Clarinet,
    Tx,
    Chain,
    Account,
    types,
  } from "https://deno.land/x/clarinet@v0.14.0/index.ts";
  
  Clarinet.test({
    name: "mint returns u0 ",
    async fn(chain: Chain, accounts: Map<string, Account>) {
       // Get the deployer account.
    let deployer = accounts.get("deployer")!;

    // Mine a block with one transaction.
    let block = chain.mineBlock([
      // Generate a contract call to count-up from the deployer address.
      Tx.contractCall("exchangeSingle", "mint", [types.principal(deployer.address), types.uint(1)], deployer.address),
    ]);
    // Get the first (and only) transaction receipt.
    let [receipt] = block.receipts;
    // Assert that the returned result is a boolean true.
    receipt.result.expectOk().expectBool(true);
    },
  });
