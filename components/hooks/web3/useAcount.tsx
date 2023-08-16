import useSWR from "swr";
import { CryptoHookFactory } from "@_types/hooks";

type AccountHookFactory = CryptoHookFactory<string, string>;

export type UseAccountHook = ReturnType<AccountHookFactory>;

export const hookFactory: CryptoHookFactory<string, string> =
  (deps: any) => (params: any) => {
    const swrRes = useSWR("web3/useAccount", () => {
      console.log(deps);
      console.log(params);

      return "Test User";
    });
    return swrRes;
  };

export const useAccount = hookFactory({
  ethereum: undefined,
  provider: undefined,
});
