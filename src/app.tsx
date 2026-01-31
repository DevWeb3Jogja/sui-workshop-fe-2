import { ConnectButton } from "@mysten/dapp-kit-react";
import { UsdcSection } from "./components/usdc-section";

export function App() {
  return (
    <div className="bg-background bg-grid min-h-screen">
      <header className="bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <h1 className="font-bold">Sui Workshop</h1>
          <ConnectButton />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6">
        <UsdcSection />
      </main>
    </div>
  );
}
