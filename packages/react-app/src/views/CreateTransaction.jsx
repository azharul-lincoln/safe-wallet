import React, { useCallback, useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button, Select, List, Divider, Input, Card, DatePicker, Slider, Switch, Progress, Spin } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { parseEther, formatEther } from "@ethersproject/units";
import { Address, AddressInput, Balance, EtherInput, Blockie } from "../components";
import { useEventListener, useLocalStorage } from "../hooks";
import { useContractReader } from "eth-hooks";
const { Option } = Select;

const { ethers } = require("ethers");
const axios = require("axios");

export default function CreateTransaction({
  contractName,
  address,
  setRoute,
  userProvider,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
}) {
  return (
    <div>
      <h1>Create Transactions</h1>
    </div>
  );
}
