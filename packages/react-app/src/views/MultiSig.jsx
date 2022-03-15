import React from "react";
import QRCode from "react-qr-code";
import { Balance, Address, TransactionList } from "../components";
import { List, Spin } from "antd";
import { getAbiFromEtherscan } from "../helpers";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

function MultiSig({
  executeTransactionEvents,
  contractName,
  localProvider,
  readContracts,
  price,
  mainnetProvider,
  blockExplorer,
}) {
  return (
    <div style={{ padding: 32, maxWidth: 750, margin: "auto" }}>
      <h1>MultiSig</h1>
    </div>
  );
}
export default MultiSig;
