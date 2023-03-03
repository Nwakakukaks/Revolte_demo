'use client'

import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { optimismGoerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
    [optimismGoerli],
    [
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'Revolte.app',
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})

export default function Chapter2Layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode,
}) {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
                theme={darkTheme({
                    accentColor: 'grey',
                    accentColorForeground: 'black',
                })}
                chains={chains}
                initialChain={optimismGoerli}
            >
                <section>
                    {/* Include shared UI here e.g. a header or sidebar */}
                    <nav></nav>
                    {children}
                </section>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}
