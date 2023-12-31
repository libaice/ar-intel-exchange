import { Web3Dependencies } from "@_types/hooks";
import { Web3Hooks, setupHooks } from "@hooks/web3/setupHooks";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, providers } from "ethers";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export type Web3State = {
  isLoading: boolean;
  hooks: Web3Hooks;
} & Nullable<Web3Dependencies>;

export const createDefaultState = () => {
  return {
    ethereum: null,
    provider: null,
    contract: null,
    isLoading: true,
    hooks: setupHooks({} as any),
  };
};

export const createWeb3State = ({
  ethereum,
  provider,
  contract,
  isLoading,
}: Web3Dependencies & { isLoading: boolean }) => {
  return {
    ethereum,
    provider,
    contract,
    isLoading,
    hooks: setupHooks({} as any),
  };
};

const NETWORK_ID = 5777;

export const loadContract = async (
  name: string,
  provider: providers.Web3Provider
): Promise<Contract> => {
  if (!NETWORK_ID) {
    return Promise.reject("Network ID is not defined");
  }
  const res = await fetch(`/contracts/${name}.json`);
  const Artifact = await res.json();
  if (Artifact.networks[NETWORK_ID].address) {
    const contract = new Contract(
      Artifact.networks[NETWORK_ID].address,
      Artifact.abi,
      provider
    );
    return contract;
  } else {
    return Promise.reject(`Contract [${name}] can not be loaded`);
  }
};
