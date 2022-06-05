import 'tailwindcss/tailwind.css'
import { APP_NAME } from '@/lib/consts'
import '@rainbow-me/rainbowkit/styles.css'
import { chain, createClient, WagmiConfig } from 'wagmi'
import { apiProvider, configureChains, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '../index.css'
import { TransactionProvider } from '../context/TransactionContext'

const { chains, provider } = configureChains(
	[chain.optimism],
	[apiProvider.infura(process.env.NEXT_PUBLIC_INFURA_ID), apiProvider.fallback()]
)

const { connectors } = getDefaultWallets({ appName: APP_NAME, chains })
const wagmiClient = createClient({ autoConnect: true, connectors, provider })

const App = ({ Component, pageProps }) => {
	return (
		<TransactionProvider>
			<WagmiConfig client={wagmiClient}>
				<RainbowKitProvider chains={chains}>
					<div className="min-h-screen">
						<div className="gradient-bg-welcome">
							<Component {...pageProps} />
						</div>
					</div>
				</RainbowKitProvider>
			</WagmiConfig>
		</TransactionProvider>
	)
}

export default App
