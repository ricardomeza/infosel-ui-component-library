import { IHistoryData } from '../Chart/ISChart'
import { IISTableData } from './ISTable'

export const HEADERS_MOCK = ['Name', 'Price', '(24H)']

export const LOGOS_MOCK: { [key: string]: string } = {
  btc: 'https://assets.coincap.io/assets/icons/btc@2x.png',
  eth: 'https://assets.coincap.io/assets/icons/eth@2x.png',
  usdt: 'https://assets.coincap.io/assets/icons/usdt@2x.png',
  bnb: 'https://assets.coincap.io/assets/icons/bnb@2x.png',
  usdc: 'https://assets.coincap.io/assets/icons/usdc@2x.png',
  sol: 'https://assets.coincap.io/assets/icons/sol@2x.png',
  ada: 'https://assets.coincap.io/assets/icons/ada@2x.png',
  xrp: 'https://assets.coincap.io/assets/icons/xrp@2x.png',
  dot: 'https://assets.coincap.io/assets/icons/dot@2x.png',
  luna: 'https://assets.coincap.io/assets/icons/luna@2x.png',
  avax: 'https://assets.coincap.io/assets/icons/avax@2x.png',
  doge: 'https://assets.coincap.io/assets/icons/doge@2x.png',
  shib: 'https://assets.coincap.io/assets/icons/shib@2x.png',
  matic: 'https://assets.coincap.io/assets/icons/matic@2x.png',
  busd: 'https://assets.coincap.io/assets/icons/busd@2x.png',
  cro: 'https://assets.coincap.io/assets/icons/cro@2x.png',
  wbtc: 'https://assets.coincap.io/assets/icons/wbtc@2x.png',
  link: 'https://assets.coincap.io/assets/icons/link@2x.png',
  ust: 'https://assets.coincap.io/assets/icons/ust@2x.png',
  uni: 'https://assets.coincap.io/assets/icons/uni@2x.png',
  atom: 'https://assets.coincap.io/assets/icons/atom@2x.png',
  dai: 'https://assets.coincap.io/assets/icons/dai@2x.png',
  algo: 'https://assets.coincap.io/assets/icons/algo@2x.png',
  ltc: 'https://assets.coincap.io/assets/icons/ltc@2x.png',
  near: 'https://assets.coincap.io/assets/icons/near@2x.png',
  bch: 'https://assets.coincap.io/assets/icons/bch@2x.png',
  trx: 'https://assets.coincap.io/assets/icons/trx@2x.png',
  ftm: 'https://assets.coincap.io/assets/icons/ftm@2x.png',
  xlm: 'https://assets.coincap.io/assets/icons/xlm@2x.png',
  mana: 'https://assets.coincap.io/assets/icons/mana@2x.png',
  icp: 'https://assets.coincap.io/assets/icons/icp@2x.png',
  ftt: 'https://assets.coincap.io/assets/icons/ftt@2x.png',
  vet: 'https://assets.coincap.io/assets/icons/vet@2x.png',
  fil: 'https://assets.coincap.io/assets/icons/fil@2x.png',
  sand: 'https://assets.coincap.io/assets/icons/sand@2x.png',
  axs: 'https://assets.coincap.io/assets/icons/axs@2x.png',
  btcb: 'https://assets.coincap.io/assets/icons/btcb@2x.png',
  hbar: 'https://assets.coincap.io/assets/icons/hbar@2x.png',
  theta: 'https://assets.coincap.io/assets/icons/theta@2x.png',
  vbtc: 'https://assets.coincap.io/assets/icons/vbtc@2x.png',
  etc: 'https://assets.coincap.io/assets/icons/etc@2x.png',
  egld: 'https://assets.coincap.io/assets/icons/egld@2x.png',
  hnt: 'https://assets.coincap.io/assets/icons/hnt@2x.png',
  leo: 'https://assets.coincap.io/assets/icons/leo@2x.png',
  xtz: 'https://assets.coincap.io/assets/icons/xtz@2x.png',
  xmr: 'https://assets.coincap.io/assets/icons/xmr@2x.png',
  klay: 'https://assets.coincap.io/assets/icons/klay@2x.png',
  one: 'https://assets.coincap.io/assets/icons/one@2x.png',
  miota: 'https://assets.coincap.io/assets/icons/miota@2x.png',
  grt: 'https://assets.coincap.io/assets/icons/grt@2x.png',
  aave: 'https://assets.coincap.io/assets/icons/aave@2x.png',
  cake: 'https://assets.coincap.io/assets/icons/cake@2x.png',
  eos: 'https://assets.coincap.io/assets/icons/eos@2x.png',
  btt: 'https://assets.coincap.io/assets/icons/btt@2x.png',
  stx: 'https://assets.coincap.io/assets/icons/stx@2x.png',
  flow: 'https://assets.coincap.io/assets/icons/flow@2x.png',
  gala: 'https://assets.coincap.io/assets/icons/gala@2x.png',
  lrc: 'https://assets.coincap.io/assets/icons/lrc@2x.png',
  crv: 'https://assets.coincap.io/assets/icons/crv@2x.png',
  ksm: 'https://assets.coincap.io/assets/icons/ksm@2x.png',
  mkr: 'https://assets.coincap.io/assets/icons/mkr@2x.png',
  qnt: 'https://assets.coincap.io/assets/icons/qnt@2x.png',
  rune: 'https://assets.coincap.io/assets/icons/rune@2x.png',
  bsv: 'https://assets.coincap.io/assets/icons/bsv@2x.png',
  enj: 'https://assets.coincap.io/assets/icons/enj@2x.png',
  time: 'https://assets.coincap.io/assets/icons/time@2x.png',
  frax: 'https://assets.coincap.io/assets/icons/frax@2x.png',
  xec: 'https://assets.coincap.io/assets/icons/xec@2x.png',
  amp: 'https://assets.coincap.io/assets/icons/amp@2x.png',
  zec: 'https://assets.coincap.io/assets/icons/zec@2x.png',
  celo: 'https://assets.coincap.io/assets/icons/celo@2x.png',
  cvx: 'https://assets.coincap.io/assets/icons/cvx@2x.png',
  hbtc: 'https://assets.coincap.io/assets/icons/hbtc@2x.png',
  neo: 'https://assets.coincap.io/assets/icons/neo@2x.png',
  ar: 'https://assets.coincap.io/assets/icons/ar@2x.png',
  chz: 'https://assets.coincap.io/assets/icons/chz@2x.png',
  kda: 'https://assets.coincap.io/assets/icons/kda@2x.png',
  bat: 'https://assets.coincap.io/assets/icons/bat@2x.png',
  kcs: 'https://assets.coincap.io/assets/icons/kcs@2x.png',
  okb: 'https://assets.coincap.io/assets/icons/okb@2x.png',
  ttt: 'https://assets.coincap.io/assets/icons/ttt@2x.png',
  waves: 'https://assets.coincap.io/assets/icons/waves@2x.png',
  ht: 'https://assets.coincap.io/assets/icons/ht@2x.png',
  tusd: 'https://assets.coincap.io/assets/icons/tusd@2x.png',
  safemoon: 'https://assets.coincap.io/assets/icons/safemoon@2x.png',
  rose: 'https://assets.coincap.io/assets/icons/rose@2x.png',
  dash: 'https://assets.coincap.io/assets/icons/dash@2x.png',
  ccxx: 'https://assets.coincap.io/assets/icons/ccxx@2x.png',
  nexo: 'https://assets.coincap.io/assets/icons/nexo@2x.png',
  rvn: 'https://assets.coincap.io/assets/icons/rvn@2x.png',
  comp: 'https://assets.coincap.io/assets/icons/comp@2x.png',
  yfi: 'https://assets.coincap.io/assets/icons/yfi@2x.png',
  mina: 'https://assets.coincap.io/assets/icons/mina@2x.png',
  hot: 'https://assets.coincap.io/assets/icons/hot@2x.png',
  xdc: 'https://assets.coincap.io/assets/icons/xdc@2x.png',
  xem: 'https://assets.coincap.io/assets/icons/xem@2x.png',
  xym: 'https://assets.coincap.io/assets/icons/xym@2x.png',
  iotx: 'https://assets.coincap.io/assets/icons/iotx@2x.png',
  '1inch': 'https://assets.coincap.io/assets/icons/1inch@2x.png',
  usdp: 'https://assets.coincap.io/assets/icons/usdp@2x.png'
}

export const DATA_MOCK: IISTableData[] = [
  {
    id: 'bitcoin',
    rank: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    supply: '18922025.0000000000000000',
    maxSupply: '21000000.0000000000000000',
    marketCapUsd: '796477049845.2476719936281475',
    volumeUsd24Hr: '17814135696.1469694117416739',
    priceUsd: '42092.5905047291540939',
    changePercent24Hr: '-2.3973922718325649',
    vwap24Hr: '43089.9566734987993883',
    explorer: 'https://blockchain.info/'
  },
  {
    id: 'ethereum',
    rank: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    supply: '119055281.8740000000000000',
    maxSupply: null,
    marketCapUsd: '392046440208.0739066702110120',
    volumeUsd24Hr: '18909296670.0203488852412051',
    priceUsd: '3292.9781361820565998',
    changePercent24Hr: '-5.0743182852011658',
    vwap24Hr: '3386.3061226063515713',
    explorer: 'https://etherscan.io/'
  },
  {
    id: 'tether',
    rank: '3',
    symbol: 'USDT',
    name: 'Tether',
    supply: '78426163467.5612000000000000',
    maxSupply: null,
    marketCapUsd: '79763564367.3939406694064113',
    volumeUsd24Hr: '46290556653.5198461996712104',
    priceUsd: '1.0170529940609159',
    changePercent24Hr: '1.3401673747803900',
    vwap24Hr: '1.0013289428835508',
    explorer: 'https://www.omniexplorer.info/asset/31'
  },
  {
    id: 'binance-coin',
    rank: '4',
    symbol: 'BNB',
    name: 'Binance Coin',
    supply: '166801148.0000000000000000',
    maxSupply: '166801148.0000000000000000',
    marketCapUsd: '75791778356.7611503223203392',
    volumeUsd24Hr: '1202360191.7542880844557928',
    priceUsd: '454.3840331168533104',
    changePercent24Hr: '-2.9237013192919310',
    vwap24Hr: '470.9008011260497405',
    explorer: 'https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52'
  },
  {
    id: 'usd-coin',
    rank: '5',
    symbol: 'USDC',
    name: 'USD Coin',
    supply: '43149188321.1833800000000000',
    maxSupply: null,
    marketCapUsd: '44534856848.0733619571295952',
    volumeUsd24Hr: '2200954804.3619442144000470',
    priceUsd: '1.0321134320436269',
    changePercent24Hr: '2.8387752510352372',
    vwap24Hr: '1.0023624767545348',
    explorer: 'https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
  },
  {
    id: 'solana',
    rank: '6',
    symbol: 'SOL',
    name: 'Solana',
    supply: '309904913.5369862300000000',
    maxSupply: null,
    marketCapUsd: '43472631705.5879205907095656',
    volumeUsd24Hr: '613427297.2354398190679228',
    priceUsd: '140.2773231615754658',
    changePercent24Hr: '-6.4245678737028553',
    vwap24Hr: '149.1026680653057361',
    explorer: 'https://explorer.solana.com/'
  },
  {
    id: 'cardano',
    rank: '7',
    symbol: 'ADA',
    name: 'Cardano',
    supply: '33499542639.3540000000000000',
    maxSupply: '45000000000.0000000000000000',
    marketCapUsd: '40868651333.4192450363557112',
    volumeUsd24Hr: '1127077846.3404430502515168',
    priceUsd: '1.2199763970929052',
    changePercent24Hr: '0.1183085208789991',
    vwap24Hr: '1.2422326574578450',
    explorer: 'https://cardanoexplorer.com/'
  },
  {
    id: 'xrp',
    rank: '8',
    symbol: 'XRP',
    name: 'XRP',
    supply: '45404028640.0000000000000000',
    maxSupply: '100000000000.0000000000000000',
    marketCapUsd: '34012151543.9797547320287040',
    volumeUsd24Hr: '1165878207.6482930564464357',
    priceUsd: '0.7490998610201686',
    changePercent24Hr: '-1.4354131246681823',
    vwap24Hr: '0.7652306063357553',
    explorer: 'https://xrpcharts.ripple.com/#/graph/'
  },
  {
    id: 'polkadot',
    rank: '9',
    symbol: 'DOT',
    name: 'Polkadot',
    supply: '1071806228.1654100000000000',
    maxSupply: null,
    marketCapUsd: '26833987476.7410117157386244',
    volumeUsd24Hr: '1131482366.2601985112112955',
    priceUsd: '25.0362302173520948',
    changePercent24Hr: '-3.6963186598765772',
    vwap24Hr: '26.3389220861314954',
    explorer: 'https://polkascan.io/polkadot'
  },
  {
    id: 'terra-luna',
    rank: '10',
    symbol: 'LUNA',
    name: 'Terra',
    supply: '358975468.2180469600000000',
    maxSupply: null,
    marketCapUsd: '25604537944.4353159850800194',
    volumeUsd24Hr: '792958552.1390699749606787',
    priceUsd: '71.3267067288362569',
    changePercent24Hr: '-6.8818849222042247',
    vwap24Hr: '76.6199953309236348',
    explorer: 'https://finder.terra.money/'
  },
  {
    id: 'avalanche',
    rank: '11',
    symbol: 'AVAX',
    name: 'Avalanche',
    supply: '244034338.8310908400000000',
    maxSupply: null,
    marketCapUsd: '21421092837.4661109552113383',
    volumeUsd24Hr: '718578379.0221093290975780',
    priceUsd: '87.7790106919862205',
    changePercent24Hr: '-6.3204507460298253',
    vwap24Hr: '94.0708454269737659',
    explorer: 'https://avascan.info/'
  },
  {
    id: 'dogecoin',
    rank: '12',
    symbol: 'DOGE',
    name: 'Dogecoin',
    supply: '132670764299.8940900000000000',
    maxSupply: null,
    marketCapUsd: '20435305485.5435257109091914',
    volumeUsd24Hr: '471268320.5563349569413422',
    priceUsd: '0.1540302084892703',
    changePercent24Hr: '-1.4835007618754693',
    vwap24Hr: '0.1581255035818049',
    explorer: 'http://dogechain.info/chain/Dogecoin'
  },
  {
    id: 'shiba-inu',
    rank: '13',
    symbol: 'SHIB',
    name: 'Shiba Inu',
    supply: '549063278876301.9400000000000000',
    maxSupply: null,
    marketCapUsd: '16110096688.4084266509140629',
    volumeUsd24Hr: '829863267.2648627605514809',
    priceUsd: '0.0000293410565015',
    changePercent24Hr: '-1.4918555658377471',
    vwap24Hr: '0.0000302548582762',
    explorer: 'https://etherscan.io/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
  },
  {
    id: 'polygon',
    rank: '14',
    symbol: 'MATIC',
    name: 'Polygon',
    supply: '7162892403.2700000000000000',
    maxSupply: '10000000000.0000000000000000',
    marketCapUsd: '15189928797.0183834179229822',
    volumeUsd24Hr: '1289967737.3634068370527146',
    priceUsd: '2.1206417661786857',
    changePercent24Hr: '-0.7258596185001016',
    vwap24Hr: '2.1846711270309169',
    explorer: 'https://etherscan.io/token/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0'
  },
  {
    id: 'binance-usd',
    rank: '15',
    symbol: 'BUSD',
    name: 'Binance USD',
    supply: '14381645604.2692550000000000',
    maxSupply: null,
    marketCapUsd: '14632918402.5945142417880770',
    volumeUsd24Hr: '932817532.2549620581770498',
    priceUsd: '1.0174717695901690',
    changePercent24Hr: '1.3374491350098794',
    vwap24Hr: '1.0036397835387320',
    explorer: 'https://etherscan.io/token/0x4Fabb145d64652a948d72533023f6E7A623C7C53'
  },
  {
    id: 'crypto-com-coin',
    rank: '16',
    symbol: 'CRO',
    name: 'Crypto.com Coin',
    supply: '25263013692.0000000000000000',
    maxSupply: '30263013692.0000000000000000',
    marketCapUsd: '12250615606.5365436570200148',
    volumeUsd24Hr: '200198718.8816404227555223',
    priceUsd: '0.4849229690445019',
    changePercent24Hr: '-1.9656666674977258',
    vwap24Hr: '0.4984593815108031',
    explorer: 'https://etherscan.io/token/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b'
  },
  {
    id: 'wrapped-bitcoin',
    rank: '17',
    symbol: 'WBTC',
    name: 'Wrapped Bitcoin',
    supply: '263539.4953777200000000',
    maxSupply: null,
    marketCapUsd: '11228488555.1859721345776436',
    volumeUsd24Hr: '264167093.1851180015084144',
    priceUsd: '42606.4736106922225162',
    changePercent24Hr: '-1.2502108891016214',
    vwap24Hr: '43094.3008036502615883',
    explorer: 'https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
  },
  {
    id: 'chainlink',
    rank: '18',
    symbol: 'LINK',
    name: 'Chainlink',
    supply: '467009550.4397637000000000',
    maxSupply: '1000000000.0000000000000000',
    marketCapUsd: '10897142965.6072941247190370',
    volumeUsd24Hr: '1540669615.5319405915329654',
    priceUsd: '23.3338760531682970',
    changePercent24Hr: '-2.5231758646365950',
    vwap24Hr: '24.6427247985486573',
    explorer: 'https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca'
  },
  {
    id: 'terrausd',
    rank: '19',
    symbol: 'UST',
    name: 'TerraUSD',
    supply: '10392354874.3363200000000000',
    maxSupply: null,
    marketCapUsd: '10606285587.6412331842172546',
    volumeUsd24Hr: '124311110.8410119405007160',
    priceUsd: '1.0205853933869416',
    changePercent24Hr: '2.1972355982729364',
    vwap24Hr: '1.0045366342375360',
    explorer: 'https://finder.terra.money/'
  },
  {
    id: 'uniswap',
    rank: '20',
    symbol: 'UNI',
    name: 'Uniswap',
    supply: '627277533.3784946000000000',
    maxSupply: '1000000000.0000000000000000',
    marketCapUsd: '9942908116.3848001247654659',
    volumeUsd24Hr: '309619872.3589414720437320',
    priceUsd: '15.8508914910958931',
    changePercent24Hr: '-5.8878581592548884',
    vwap24Hr: '16.7201534745516203',
    explorer: 'https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
  },
  {
    id: 'cosmos',
    rank: '21',
    symbol: 'ATOM',
    name: 'Cosmos',
    supply: '248453201.0000000000000000',
    maxSupply: null,
    marketCapUsd: '9695230956.7552862105577059',
    volumeUsd24Hr: '1652164905.9946982275804791',
    priceUsd: '39.0223628342598259',
    changePercent24Hr: '6.4574026749780651',
    vwap24Hr: '38.3479412989595128',
    explorer: 'https://www.mintscan.io/'
  },
  {
    id: 'multi-collateral-dai',
    rank: '22',
    symbol: 'DAI',
    name: 'Multi Collateral DAI',
    supply: '9316832960.4181020000000000',
    maxSupply: null,
    marketCapUsd: '9520758970.9192580134688578',
    volumeUsd24Hr: '149751126.6588501786298897',
    priceUsd: '1.0218879109851514',
    changePercent24Hr: '1.9627879065192019',
    vwap24Hr: '1.0009105971834715',
    explorer: 'https://etherscan.io/token/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359'
  },
  {
    id: 'algorand',
    rank: '23',
    symbol: 'ALGO',
    name: 'Algorand',
    supply: '6449496020.0701740000000000',
    maxSupply: '10000000000.0000000000000000',
    marketCapUsd: '9272700239.2290684902643382',
    volumeUsd24Hr: '419656860.7407908621166896',
    priceUsd: '1.4377402839498421',
    changePercent24Hr: '-5.2425843683444434',
    vwap24Hr: '1.5418592796602780',
    explorer: 'https://algoexplorer.io/'
  },
  {
    id: 'litecoin',
    rank: '24',
    symbol: 'LTC',
    name: 'Litecoin',
    supply: '69359069.5202397700000000',
    maxSupply: '84000000.0000000000000000',
    marketCapUsd: '9050950698.6590046901871329',
    volumeUsd24Hr: '570557409.6235765466846250',
    priceUsd: '130.4941193886379016',
    changePercent24Hr: '-3.6711005587076170',
    vwap24Hr: '135.5297224146965483',
    explorer: 'http://explorer.litecoin.net/chain/Litecoin'
  },
  {
    id: 'near-protocol',
    rank: '25',
    symbol: 'NEAR',
    name: 'NEAR Protocol',
    supply: '604227595.0000000000000000',
    maxSupply: '1000000000.0000000000000000',
    marketCapUsd: '8886851880.4732751235522000',
    volumeUsd24Hr: '831626538.2519806973607571',
    priceUsd: '14.7077888431647600',
    changePercent24Hr: '-2.5530196775707949',
    vwap24Hr: '15.6526795674227468',
    explorer: 'https://explorer.nearprotocol.com/'
  },
  {
    id: 'bitcoin-cash',
    rank: '26',
    symbol: 'BCH',
    name: 'Bitcoin Cash',
    supply: '18929756.2500000000000000',
    maxSupply: '21000000.0000000000000000',
    marketCapUsd: '7341047929.5950504148780206',
    volumeUsd24Hr: '326070393.7506398920747196',
    priceUsd: '387.8046728464900553',
    changePercent24Hr: '-2.3413853861981085',
    vwap24Hr: '396.3115593596623546',
    explorer: 'https://blockchair.com/bitcoin-cash/blocks'
  },
  {
    id: 'tron',
    rank: '27',
    symbol: 'TRX',
    name: 'TRON',
    supply: '101848959955.9525100000000000',
    maxSupply: null,
    marketCapUsd: '6985448147.0246254956555200',
    volumeUsd24Hr: '1054356370.1821609321250044',
    priceUsd: '0.0685863473720859',
    changePercent24Hr: '-2.2619580120602717',
    vwap24Hr: '0.0705857274475218',
    explorer: 'https://tronscan.org/#/'
  },
  {
    id: 'fantom',
    rank: '28',
    symbol: 'FTM',
    name: 'Fantom',
    supply: '2545006273.0000000000000000',
    maxSupply: '3175000000.0000000000000000',
    marketCapUsd: '6796913451.3348451143403572',
    volumeUsd24Hr: '1569410594.9390007002804256',
    priceUsd: '2.6706863253907764',
    changePercent24Hr: '-2.0273938695686244',
    vwap24Hr: '2.8347240129642088',
    explorer: 'https://etherscan.io/token/0x4e15361fd6b4bb609fa63c81a2be19d873717870'
  },
  {
    id: 'stellar',
    rank: '29',
    symbol: 'XLM',
    name: 'Stellar',
    supply: '24727785908.9170200000000000',
    maxSupply: '50001806812.0000000000000000',
    marketCapUsd: '6353771728.6360262174658666',
    volumeUsd24Hr: '259660546.6007365937760723',
    priceUsd: '0.2569486711038213',
    changePercent24Hr: '-2.0868018709415117',
    vwap24Hr: '0.2671206652369296',
    explorer: 'https://dashboard.stellar.org/'
  },
  {
    id: 'decentraland',
    rank: '30',
    symbol: 'MANA',
    name: 'Decentraland',
    supply: '1824534734.8740842000000000',
    maxSupply: null,
    marketCapUsd: '5749712688.2749574311627478',
    volumeUsd24Hr: '1204545331.1245128726141015',
    priceUsd: '3.1513309000783478',
    changePercent24Hr: '10.9445468783142061',
    vwap24Hr: '3.2337834115950867',
    explorer: 'https://etherscan.io/token/decentraland'
  },
  {
    id: 'internet-computer',
    rank: '31',
    symbol: 'ICP',
    name: 'Internet Computer',
    supply: '191882331.2500000000000000',
    maxSupply: null,
    marketCapUsd: '5392596073.6108605391442463',
    volumeUsd24Hr: '656523641.3252113832909045',
    priceUsd: '28.1036614391814178',
    changePercent24Hr: '-5.6221801362499428',
    vwap24Hr: '30.2430374145374318',
    explorer: 'https://www.dfinityexplorer.org/#/'
  },
  {
    id: 'ftx-token',
    rank: '32',
    symbol: 'FTT',
    name: 'FTX Token',
    supply: '138768339.7187437400000000',
    maxSupply: '352170015.0000000000000000',
    marketCapUsd: '5099798139.5015086880820770',
    volumeUsd24Hr: '117969241.3412436312502353',
    priceUsd: '36.7504443004636447',
    changePercent24Hr: '-0.9101573091608203',
    vwap24Hr: '37.9659113831238562',
    explorer: 'https://etherscan.io/token/0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9'
  },
  {
    id: 'vechain',
    rank: '33',
    symbol: 'VET',
    name: 'VeChain',
    supply: '64315576989.0000000000000000',
    maxSupply: '86712634466.0000000000000000',
    marketCapUsd: '5044272940.0623216282988050',
    volumeUsd24Hr: '278322266.7804339382143451',
    priceUsd: '0.0784300347787450',
    changePercent24Hr: '-4.6693337884906441',
    vwap24Hr: '0.0824257433030850',
    explorer: 'https://explore.veforge.com/'
  },
  {
    id: 'filecoin',
    rank: '34',
    symbol: 'FIL',
    name: 'Filecoin',
    supply: '146059586.0000000000000000',
    maxSupply: null,
    marketCapUsd: '4593840786.9516274398499372',
    volumeUsd24Hr: '407797638.6211310744588776',
    priceUsd: '31.4518267014095702',
    changePercent24Hr: '-4.3505421347323117',
    vwap24Hr: '32.7491627623602284',
    explorer: 'https://protocol.ai'
  },
  {
    id: 'the-sandbox',
    rank: '35',
    symbol: 'SAND',
    name: 'The Sandbox',
    supply: '919748319.2233225000000000',
    maxSupply: '3000000000.0000000000000000',
    marketCapUsd: '4469346381.7961652284468029',
    volumeUsd24Hr: '807323465.4658302760311935',
    priceUsd: '4.8593145411456533',
    changePercent24Hr: '-0.2506171866551109',
    vwap24Hr: '5.0569293034751947',
    explorer: 'https://etherscan.io/token/0x3845badAde8e6dFF049820680d1F14bD3903a5d0'
  },
  {
    id: 'axie-infinity',
    rank: '36',
    symbol: 'AXS',
    name: 'Axie Infinity',
    supply: '60907500.0000000000000000',
    maxSupply: '270000000.0000000000000000',
    marketCapUsd: '4441598851.3846265592315000',
    volumeUsd24Hr: '245230361.2267725009899554',
    priceUsd: '72.9236769098161402',
    changePercent24Hr: '-6.3981722815519120',
    vwap24Hr: '78.2262278910171986',
    explorer: 'https://etherscan.io/token/0xf5d669627376ebd411e34b98f19c868c8aba5ada'
  },
  {
    id: 'bitcoin-bep2',
    rank: '37',
    symbol: 'BTCB',
    name: 'Bitcoin BEP2',
    supply: '105120.9312244200000000',
    maxSupply: null,
    marketCapUsd: '4353842056.2826821675540514',
    volumeUsd24Hr: '664644383.0484809153007904',
    priceUsd: '41417.4608764431091051',
    changePercent24Hr: '-3.7502375786707373',
    vwap24Hr: '42974.4395650417401163',
    explorer: 'https://explorer.binance.org/asset/BTCB-1DE'
  },
  {
    id: 'hedera-hashgraph',
    rank: '38',
    symbol: 'HBAR',
    name: 'Hedera Hashgraph',
    supply: '14832756028.0000000000000000',
    maxSupply: '50000000000.0000000000000000',
    marketCapUsd: '4194311397.4882478505931888',
    volumeUsd24Hr: '100563575.3221760767990959',
    priceUsd: '0.2827735715176996',
    changePercent24Hr: '0.2752561597829677',
    vwap24Hr: '0.2874651606839539',
    explorer: 'https://hash-hash.info/'
  },
  {
    id: 'theta',
    rank: '39',
    symbol: 'THETA',
    name: 'THETA',
    supply: '1000000000.0000000000000000',
    maxSupply: '1000000000.0000000000000000',
    marketCapUsd: '4149606453.1283116000000000',
    volumeUsd24Hr: '221782261.1404656839448308',
    priceUsd: '4.1496064531283116',
    changePercent24Hr: '-3.6354153518199483',
    vwap24Hr: '4.3239784786558820',
    explorer: 'https://explorer.thetatoken.org/'
  },
  {
    id: 'venus-btc',
    rank: '40',
    symbol: 'VBTC',
    name: 'Venus BTC',
    supply: '205836.0000000000000000',
    maxSupply: null,
    marketCapUsd: '4086834377.8177660212208332',
    volumeUsd24Hr: '173002.3572402647626337',
    priceUsd: '19854.8085748740065937',
    changePercent24Hr: '-11.8701841357566767',
    vwap24Hr: null,
    explorer: 'https://bscscan.com/address/0x882C173bC7Ff3b7786CA16dfeD3DFFfb9Ee7847B'
  },
  {
    id: 'ethereum-classic',
    rank: '41',
    symbol: 'ETC',
    name: 'Ethereum Classic',
    supply: '132122498.9404539800000000',
    maxSupply: '210700000.0000000000000000',
    marketCapUsd: '4021393698.1342799149112121',
    volumeUsd24Hr: '163038760.0131750794101031',
    priceUsd: '30.4368576917900535',
    changePercent24Hr: '-3.5971572840626449',
    vwap24Hr: '31.3636631458720292',
    explorer: 'http://gastracker.io/'
  },
  {
    id: 'elrond-egld',
    rank: '42',
    symbol: 'EGLD',
    name: 'Elrond',
    supply: '19981219.8724937300000000',
    maxSupply: '31415926.0000000000000000',
    marketCapUsd: '3988823818.3107186024948905',
    volumeUsd24Hr: '151258471.5359554497310866',
    priceUsd: '199.6286434844630267',
    changePercent24Hr: '-3.3610248340373464',
    vwap24Hr: '208.6047620246363823',
    explorer: 'https://explorer.elrond.com/'
  },
  {
    id: 'helium',
    rank: '43',
    symbol: 'HNT',
    name: 'Helium',
    supply: '105655550.6025798900000000',
    maxSupply: '223000000.0000000000000000',
    marketCapUsd: '3961619941.1520780414756762',
    volumeUsd24Hr: '27044941.5686192156450717',
    priceUsd: '37.4956158815885578',
    changePercent24Hr: '-0.0382605049886224',
    vwap24Hr: '38.5617794066824714',
    explorer: 'https://explorer.helium.com/'
  },
  {
    id: 'unus-sed-leo',
    rank: '44',
    symbol: 'LEO',
    name: 'UNUS SED LEO',
    supply: '953954130.0000000000000000',
    maxSupply: null,
    marketCapUsd: '3723900627.3646136308028370',
    volumeUsd24Hr: '3498665.1925257585678324',
    priceUsd: '3.9036474713565249',
    changePercent24Hr: '1.6521952752896202',
    vwap24Hr: '3.7926123936886091',
    explorer: 'https://eospark.com/account/bitfinexleo1'
  },
  {
    id: 'tezos',
    rank: '45',
    symbol: 'XTZ',
    name: 'Tezos',
    supply: '873455571.7974440000000000',
    maxSupply: null,
    marketCapUsd: '3633835549.5312582517961093',
    volumeUsd24Hr: '215923501.6848564406024543',
    priceUsd: '4.1602980928421527',
    changePercent24Hr: '-4.6384327492202410',
    vwap24Hr: '4.3847799574262082',
    explorer: 'https://tzkt.io/'
  },
  {
    id: 'monero',
    rank: '46',
    symbol: 'XMR',
    name: 'Monero',
    supply: '18058787.0852290500000000',
    maxSupply: null,
    marketCapUsd: '3605140198.2998411559059838',
    volumeUsd24Hr: '132875345.9328174982339372',
    priceUsd: '199.6335734667705722',
    changePercent24Hr: '0.2396499305928252',
    vwap24Hr: '201.8555234525499584',
    explorer: 'http://moneroblocks.info/'
  },
  {
    id: 'klaytn',
    rank: '47',
    symbol: 'KLAY',
    name: 'Klaytn',
    supply: '2584591079.8000000000000000',
    maxSupply: null,
    marketCapUsd: '3359319436.4987609825393452',
    volumeUsd24Hr: '34246345.7851060205985345',
    priceUsd: '1.2997489091228740',
    changePercent24Hr: '-0.5311838212103810',
    vwap24Hr: '1.3297860862757730',
    explorer: 'https://scope.klaytn.com/blocks'
  },
  {
    id: 'harmony',
    rank: '48',
    symbol: 'ONE',
    name: 'Harmony',
    supply: '11578348302.1006700000000000',
    maxSupply: null,
    marketCapUsd: '3325910759.3267375399432612',
    volumeUsd24Hr: '295705207.5324853225754820',
    priceUsd: '0.2872526091414364',
    changePercent24Hr: '4.5432878071520067',
    vwap24Hr: '0.2932536139254156',
    explorer: 'https://explorer.harmony.one'
  },
  {
    id: 'iota',
    rank: '49',
    symbol: 'MIOTA',
    name: 'IOTA',
    supply: '2779530283.0000000000000000',
    maxSupply: '2779530283.0000000000000000',
    marketCapUsd: '3149625026.0251308887598237',
    volumeUsd24Hr: '47184819.9054147729270615',
    priceUsd: '1.1331501028388439',
    changePercent24Hr: '-1.0350323047196727',
    vwap24Hr: '1.1845661830290656',
    explorer: 'https://thetangle.org/'
  },
  {
    id: 'the-graph',
    rank: '50',
    symbol: 'GRT',
    name: 'The Graph',
    supply: '4715735200.0000000000000000',
    maxSupply: '10057044431.0000000000000000',
    marketCapUsd: '2824332808.5935648739451200',
    volumeUsd24Hr: '121220913.4567697475867104',
    priceUsd: '0.5989167518552706',
    changePercent24Hr: '-4.3772740416820414',
    vwap24Hr: '0.6282120661898338',
    explorer: 'https://etherscan.io/token/0xc944e90c64b2c07662a292be6244bdf05cda44a7'
  },
  {
    id: 'aave',
    rank: '51',
    symbol: 'AAVE',
    name: 'Aave',
    supply: '13478861.5699020300000000',
    maxSupply: '16000000.0000000000000000',
    marketCapUsd: '2802040831.5748879022403620',
    volumeUsd24Hr: '276257006.0011549558054665',
    priceUsd: '207.8840870234751069',
    changePercent24Hr: '-7.2362416989444949',
    vwap24Hr: '223.3884168411856154',
    explorer: 'https://etherscan.io/token/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03'
  },
  {
    id: 'pancakeswap',
    rank: '52',
    symbol: 'CAKE',
    name: 'PancakeSwap',
    supply: '256173527.4231246700000000',
    maxSupply: null,
    marketCapUsd: '2750532451.6010390399609192',
    volumeUsd24Hr: '45970139.6583549680136334',
    priceUsd: '10.7369894120946929',
    changePercent24Hr: '-4.2870417706790233',
    vwap24Hr: '11.0473476538446698',
    explorer: 'https://bscscan.com/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'
  },
  {
    id: 'eos',
    rank: '53',
    symbol: 'EOS',
    name: 'EOS',
    supply: '977160954.3612000000000000',
    maxSupply: null,
    marketCapUsd: '2728493203.7392908777391082',
    volumeUsd24Hr: '314295527.9939088122586302',
    priceUsd: '2.7922658918795935',
    changePercent24Hr: '-3.0560323981450967',
    vwap24Hr: '2.8863279339163210',
    explorer: 'https://bloks.io/'
  },
  {
    id: 'bittorrent',
    rank: '54',
    symbol: 'BTT',
    name: 'BitTorrent',
    supply: '990000000000.0000000000000000',
    maxSupply: null,
    marketCapUsd: '2663351912.6054280000000000',
    volumeUsd24Hr: '61823916.0417585269917157',
    priceUsd: '0.0026902544571772',
    changePercent24Hr: '-1.9919078210765529',
    vwap24Hr: '0.0027535807020705',
    explorer: 'https://tronscan.org/#/token/1002000'
  },
  {
    id: 'stacks',
    rank: '55',
    symbol: 'STX',
    name: 'Stacks',
    supply: '1292227941.5787470000000000',
    maxSupply: '1818000000.0000000000000000',
    marketCapUsd: '2646496978.8515020188704451',
    volumeUsd24Hr: '13590148.7683022435380558',
    priceUsd: '2.0480109535614985',
    changePercent24Hr: '-4.7803434504317048',
    vwap24Hr: '2.1471337064906331',
    explorer: 'https://explorer.xinfin.network/'
  },
  {
    id: 'flow',
    rank: '56',
    symbol: 'FLOW',
    name: 'Flow',
    supply: '316835587.0000000000000000',
    maxSupply: null,
    marketCapUsd: '2548924745.2342803788794084',
    volumeUsd24Hr: '37460480.7989961032991400',
    priceUsd: '8.0449446016121932',
    changePercent24Hr: '-1.8348244103452509',
    vwap24Hr: '8.2274002483311185',
    explorer: 'https://flowscan.org/'
  },
  {
    id: 'gala',
    rank: '57',
    symbol: 'GALA',
    name: 'Gala',
    supply: '6977205436.0000000000000000',
    maxSupply: null,
    marketCapUsd: '2479908608.7795145019924756',
    volumeUsd24Hr: '603071331.6190166313866385',
    priceUsd: '0.3554300688903371',
    changePercent24Hr: '-1.5397030047684540',
    vwap24Hr: '0.3758803189668735',
    explorer: 'https://ethplorer.io/es/address/0x15d4c048f83bd7e37d49ea4c83a07267ec4203da#chart=candlestick'
  },
  {
    id: 'loopring',
    rank: '58',
    symbol: 'LRC',
    name: 'Loopring',
    supply: '1328716100.1723177000000000',
    maxSupply: '1374513896.0000000000000000',
    marketCapUsd: '2293510651.5868224248821411',
    volumeUsd24Hr: '446801607.5435715290966065',
    priceUsd: '1.7261103792521089',
    changePercent24Hr: '-1.7232617206109590',
    vwap24Hr: '1.8492124504192625',
    explorer: 'https://etherscan.io/token/0xEF68e7C694F40c8202821eDF525dE3782458639f'
  },
  {
    id: 'curve-dao-token',
    rank: '59',
    symbol: 'CRV',
    name: 'Curve DAO Token',
    supply: '446784615.7716820000000000',
    maxSupply: '3303030299.0000000000000000',
    marketCapUsd: '2189697066.3517662201862931',
    volumeUsd24Hr: '429348524.6140510490849042',
    priceUsd: '4.9010126782672294',
    changePercent24Hr: '-7.8926758340060223',
    vwap24Hr: '5.2999477222151852',
    explorer: 'https://etherscan.io/token/0xD533a949740bb3306d119CC777fa900bA034cd52'
  },
  {
    id: 'kusama',
    rank: '60',
    symbol: 'KSM',
    name: 'Kusama',
    supply: '8470098.0572620600000000',
    maxSupply: null,
    marketCapUsd: '2169400762.9787757733030800',
    volumeUsd24Hr: '54998374.6553625286406270',
    priceUsd: '256.1246337778561271',
    changePercent24Hr: '-2.9290379760340419',
    vwap24Hr: '266.5395217389153905',
    explorer: 'https://kusama.subscan.io/'
  },
  {
    id: 'maker',
    rank: '61',
    symbol: 'MKR',
    name: 'Maker',
    supply: '985944.9340082700000000',
    maxSupply: '1005577.0000000000000000',
    marketCapUsd: '2137094921.5679879300726432',
    volumeUsd24Hr: '48823878.5832842514919847',
    priceUsd: '2167.5601221255042301',
    changePercent24Hr: '-1.4624381442988582',
    vwap24Hr: '2226.8258398544102266',
    explorer: 'https://etherscan.io/token/Maker'
  },
  {
    id: 'quant',
    rank: '62',
    symbol: 'QNT',
    name: 'Quant',
    supply: '12072738.0000000000000000',
    maxSupply: '14612493.0000000000000000',
    marketCapUsd: '2121080246.8992372548730702',
    volumeUsd24Hr: '60355112.0530990218072913',
    priceUsd: '175.6917318092413879',
    changePercent24Hr: '7.5138916651908513',
    vwap24Hr: '169.3226918521545739',
    explorer: 'https://etherscan.io/token/0x4a220e6096b25eadb88358cb44068a3248254675'
  },
  {
    id: 'thorchain',
    rank: '63',
    symbol: 'RUNE',
    name: 'THORChain',
    supply: '330688061.3344559700000000',
    maxSupply: '500000000.0000000000000000',
    marketCapUsd: '2119215728.6782590646678633',
    volumeUsd24Hr: '67757880.0048555073041906',
    priceUsd: '6.4085038937492717',
    changePercent24Hr: '-4.9573341564162238',
    vwap24Hr: '6.9358293550509068',
    explorer: 'https://explorer.binance.org/asset/RUNE-B1A'
  },
  {
    id: 'bitcoin-sv',
    rank: '64',
    symbol: 'BSV',
    name: 'Bitcoin SV',
    supply: '18944651.6442390500000000',
    maxSupply: '21000000.0000000000000000',
    marketCapUsd: '2036092272.4737960796285914',
    volumeUsd24Hr: '62166403.7100238510626692',
    priceUsd: '107.4758359620172270',
    changePercent24Hr: '-5.0926437769682873',
    vwap24Hr: '111.1712444100518768',
    explorer: 'https://bsvexplorer.io/'
  },
  {
    id: 'enjin-coin',
    rank: '65',
    symbol: 'ENJ',
    name: 'Enjin Coin',
    supply: '846734704.5675580000000000',
    maxSupply: '1000000000.0000000000000000',
    marketCapUsd: '2027464263.0809830295049946',
    volumeUsd24Hr: '227526705.3384935860542715',
    priceUsd: '2.3944504130327857',
    changePercent24Hr: '0.3428791851421620',
    vwap24Hr: '2.4882068338594892',
    explorer: 'https://etherscan.io/token/0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c'
  },
  {
    id: 'chrono-tech',
    rank: '66',
    symbol: 'TIME',
    name: 'Chrono.tech',
    supply: '710112.0000000000000000',
    maxSupply: '710112.0000000000000000',
    marketCapUsd: '1989725865.6201424182303840',
    volumeUsd24Hr: '550671.5163260262681673',
    priceUsd: '2801.9887927821842445',
    changePercent24Hr: '1.9809648439250627',
    vwap24Hr: null,
    explorer: 'https://etherscan.io/token/0x485d17A6f1B8780392d53D64751824253011A260'
  },
  {
    id: 'frax',
    rank: '67',
    symbol: 'FRAX',
    name: 'Frax',
    supply: '1925575294.2799530000000000',
    maxSupply: '131992706.0000000000000000',
    marketCapUsd: '1975289742.9306022235389695',
    volumeUsd24Hr: '736590.1855565938567228',
    priceUsd: '1.0258179718021566',
    changePercent24Hr: '1.9257695131721146',
    vwap24Hr: '1.0016549415658817',
    explorer: 'https://etherscan.io/token/0x853d955acef822db058eb8505911ed77f175b99e'
  },
  {
    id: 'ecash',
    rank: '68',
    symbol: 'XEC',
    name: 'eCash',
    supply: '18944567173313.0000000000000000',
    maxSupply: '21000000000000.0000000000000000',
    marketCapUsd: '1871914589.2850942971453219',
    volumeUsd24Hr: '13430496.1729829754249380',
    priceUsd: '0.0000988101006563',
    changePercent24Hr: '-4.8457781022225283',
    vwap24Hr: '0.0001026554100517',
    explorer: 'https://explorer.bitcoinabc.org/'
  },
  {
    id: 'amp',
    rank: '69',
    symbol: 'AMP',
    name: 'Amp',
    supply: '42227702186.0000000000000000',
    maxSupply: '92547638199.0000000000000000',
    marketCapUsd: '1840716844.7680782208670042',
    volumeUsd24Hr: '17271178.0212988257478881',
    priceUsd: '0.0435902677503097',
    changePercent24Hr: '-3.9397797376089359',
    vwap24Hr: '0.0456967965626336',
    explorer: null
  },
  {
    id: 'zcash',
    rank: '70',
    symbol: 'ZEC',
    name: 'Zcash',
    supply: '13468337.5000000000000000',
    maxSupply: '21000000.0000000000000000',
    marketCapUsd: '1804124314.5387396887257800',
    volumeUsd24Hr: '225835476.4747483801486642',
    priceUsd: '133.9530075288609072',
    changePercent24Hr: '-0.6838440313891232',
    vwap24Hr: '135.2947605105751724',
    explorer: 'https://explorer.zcha.in/'
  },
  {
    id: 'celo',
    rank: '71',
    symbol: 'CELO',
    name: 'Celo',
    supply: '387111233.0000000000000000',
    maxSupply: '1000000000.0000000000000000',
    marketCapUsd: '1752869313.0331932687130642',
    volumeUsd24Hr: '67334256.2142382137771174',
    priceUsd: '4.5280765929961874',
    changePercent24Hr: '-9.0579152343181413',
    vwap24Hr: '4.9415011933616973',
    explorer: 'https://explorer.celo.org/blocks'
  },
  {
    id: 'convex-finance',
    rank: '72',
    symbol: 'CVX',
    name: 'Convex Finance',
    supply: '45056292.9699907000000000',
    maxSupply: '100000000.0000000000000000',
    marketCapUsd: '1749679462.6604665373295243',
    volumeUsd24Hr: '26349631.1994961936907647',
    priceUsd: '38.8331872714389376',
    changePercent24Hr: '-6.0323983440697821',
    vwap24Hr: '40.9814432035546199',
    explorer: 'https://etherscan.io/token/0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b'
  },
  {
    id: 'huobi-btc',
    rank: '73',
    symbol: 'HBTC',
    name: 'Huobi BTC',
    supply: '39884.0822047400000000',
    maxSupply: '6910.0000000000000000',
    marketCapUsd: '1687134669.8273477467170683',
    volumeUsd24Hr: '147303.2299861194097050',
    priceUsd: '42300.9525746800620001',
    changePercent24Hr: '-2.3229784277959178',
    vwap24Hr: '43252.0209125558151715',
    explorer: 'https://etherscan.io/token/0x0316EB71485b0Ab14103307bf65a021042c6d380'
  },
  {
    id: 'neo',
    rank: '74',
    symbol: 'NEO',
    name: 'Neo',
    supply: '70538831.0000000000000000',
    maxSupply: '100000000.0000000000000000',
    marketCapUsd: '1671484699.0041341164683044',
    volumeUsd24Hr: '51370978.3585023530939419',
    priceUsd: '23.6959512272628124',
    changePercent24Hr: '-2.1007461730932761',
    vwap24Hr: '24.3986540561338043',
    explorer: 'https://neotracker.io'
  },
  {
    id: 'arweave',
    rank: '75',
    symbol: 'AR',
    name: 'Arweave',
    supply: '33394701.0000000000000000',
    maxSupply: '66000000.0000000000000000',
    marketCapUsd: '1664996516.0108729303926482',
    volumeUsd24Hr: '60695344.5933596654433847',
    priceUsd: '49.8581052128861082',
    changePercent24Hr: '-11.3028758486633204',
    vwap24Hr: '54.7553442435250997',
    explorer: 'https://viewblock.io/arweave'
  },
  {
    id: 'chiliz',
    rank: '76',
    symbol: 'CHZ',
    name: 'Chiliz',
    supply: '5954919766.3541180000000000',
    maxSupply: '8888888888.0000000000000000',
    marketCapUsd: '1600576321.6175141621099548',
    volumeUsd24Hr: '104664699.6064983089478878',
    priceUsd: '0.2687821808550516',
    changePercent24Hr: '-1.4999097073779397',
    vwap24Hr: '0.2775166665162817',
    explorer: 'https://etherscan.io/token/0x3506424f91fd33084466f402d5d97f05f8e3b4af'
  },
  {
    id: 'kadena',
    rank: '77',
    symbol: 'KDA',
    name: 'Kadena',
    supply: '166581608.8868000000000000',
    maxSupply: '1000000000.0000000000000000',
    marketCapUsd: '1600384118.2074566538235090',
    volumeUsd24Hr: '34187616.5226007189636176',
    priceUsd: '9.6072077157988825',
    changePercent24Hr: '-6.2797786196405769',
    vwap24Hr: '10.1937769693711541',
    explorer: 'https://explorer.chainweb.com/mainnet'
  },
  {
    id: 'basic-attention-token',
    rank: '78',
    symbol: 'BAT',
    name: 'Basic Attention Token',
    supply: '1494004919.4473505000000000',
    maxSupply: '1500000000.0000000000000000',
    marketCapUsd: '1597001627.4328770706857211',
    volumeUsd24Hr: '175413904.2842242718088690',
    priceUsd: '1.0689400059161962',
    changePercent24Hr: '-6.8034755156541458',
    vwap24Hr: '1.1407229226748520',
    explorer: 'https://etherscan.io/token/Bat'
  },
  {
    id: 'kucoin-token',
    rank: '79',
    symbol: 'KCS',
    name: 'KuCoin Token',
    supply: '80118638.0000000000000000',
    maxSupply: '170118638.0000000000000000',
    marketCapUsd: '1594626749.8580094438323194',
    volumeUsd24Hr: '19656542.4902942442656457',
    priceUsd: '19.9033182498435563',
    changePercent24Hr: '-3.7699373440409010',
    vwap24Hr: '20.8244644256345115',
    explorer: 'https://etherscan.io/token/0xf34960d9d60be18cc1d5afc1a6f012a723a28811'
  },
  {
    id: 'okb',
    rank: '80',
    symbol: 'OKB',
    name: 'OKB',
    supply: '60000000.0000000000000000',
    maxSupply: null,
    marketCapUsd: '1553474100.8060323320000000',
    volumeUsd24Hr: '254808592.2161376762566702',
    priceUsd: '25.8912350134338722',
    changePercent24Hr: '0.1005627545991846',
    vwap24Hr: '25.9427918490888336',
    explorer: 'https://etherscan.io/token/0x75231f58b43240c9718dd58b4967c5114342a86c'
  },
  {
    id: 'trustnote',
    rank: '81',
    symbol: 'TTT',
    name: 'TrustNote',
    supply: '309999945.0035280000000000',
    maxSupply: null,
    marketCapUsd: '1496781120.2748027668147260',
    volumeUsd24Hr: '195991.7104532756671473',
    priceUsd: '4.8283270510185685',
    changePercent24Hr: '-1.9208360596434953',
    vwap24Hr: '5.0153350688937037',
    explorer: 'https://explorer.trustnote.org/'
  },
  {
    id: 'waves',
    rank: '82',
    symbol: 'WAVES',
    name: 'Waves',
    supply: '107157694.0000000000000000',
    maxSupply: null,
    marketCapUsd: '1459029988.7518170529873320',
    volumeUsd24Hr: '35548495.2846674422208566',
    priceUsd: '13.6157277586788780',
    changePercent24Hr: '-2.6481411082085093',
    vwap24Hr: '14.0475945138005992',
    explorer: 'http://wavesexplorer.com/'
  },
  {
    id: 'huobi-token',
    rank: '83',
    symbol: 'HT',
    name: 'Huobi Token',
    supply: '157723680.2544120800000000',
    maxSupply: '500000000.0000000000000000',
    marketCapUsd: '1400728771.7806404597607775',
    volumeUsd24Hr: '30037116.9421223734707760',
    priceUsd: '8.8809034224995977',
    changePercent24Hr: '-1.5305024051109792',
    vwap24Hr: '8.8046155997558123',
    explorer: 'https://etherscan.io/token/0x6f259637dcd74c767781e37bc6133cd6a68aa161'
  },
  {
    id: 'trueusd',
    rank: '84',
    symbol: 'TUSD',
    name: 'TrueUSD',
    supply: '1314807311.4754070000000000',
    maxSupply: null,
    marketCapUsd: '1337179798.4889766727232472',
    volumeUsd24Hr: '76847636.9055883792709858',
    priceUsd: '1.0170157914534750',
    changePercent24Hr: '1.3622749744869579',
    vwap24Hr: '1.0033757780962607',
    explorer: 'https://etherscan.io/token/0x8dd5fbce2f6a956c3022ba3663759011dd51e73e'
  },
  {
    id: 'safemoon',
    rank: '85',
    symbol: 'SAFEMOON',
    name: 'SafeMoon',
    supply: '585536366402812.0000000000000000',
    maxSupply: '1000000000000000.0000000000000000',
    marketCapUsd: '1311258081.0206238072614056',
    volumeUsd24Hr: '2032596.5875802006021149',
    priceUsd: '0.0000022394135638',
    changePercent24Hr: '-5.6817393682276766',
    vwap24Hr: '0.0000023293626942',
    explorer: 'https://www.bscscan.com/token/0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3'
  },
  {
    id: 'oasis-network',
    rank: '86',
    symbol: 'ROSE',
    name: 'Oasis Network',
    supply: '3493014306.2800000000000000',
    maxSupply: '10000000000.0000000000000000',
    marketCapUsd: '1265490648.9100562927175460',
    volumeUsd24Hr: '174632516.6374831586579443',
    priceUsd: '0.3622918596797223',
    changePercent24Hr: '-0.3074783824896775',
    vwap24Hr: '0.3840831629155051',
    explorer: 'https://www.oasisscan.com/'
  },
  {
    id: 'dash',
    rank: '87',
    symbol: 'DASH',
    name: 'Dash',
    supply: '10517151.8373742000000000',
    maxSupply: '18900000.0000000000000000',
    marketCapUsd: '1264864870.9516320656730861',
    volumeUsd24Hr: '156153191.0286698321834343',
    priceUsd: '120.2668641196901078',
    changePercent24Hr: '-0.6107009968153582',
    vwap24Hr: '122.2257612685227694',
    explorer: 'https://explorer.dash.org'
  },
  {
    id: 'counos-x',
    rank: '88',
    symbol: 'CCXX',
    name: 'Counos X',
    supply: '17864458.2103634400000000',
    maxSupply: '21000000.0000000000000000',
    marketCapUsd: '1259099832.6279782917576082',
    volumeUsd24Hr: '1875934.4353326288341668',
    priceUsd: '70.4807175119117581',
    changePercent24Hr: '77.4861240465489466',
    vwap24Hr: '62.7409575790813522',
    explorer: 'https://ccxxblocks.counos.org/'
  },
  {
    id: 'nexo',
    rank: '89',
    symbol: 'NEXO',
    name: 'Nexo',
    supply: '560000011.0000000000000000',
    maxSupply: '1000000000.0000000000000000',
    marketCapUsd: '1227431187.1990527332442414',
    volumeUsd24Hr: '16211155.3598166270775188',
    priceUsd: '2.1918413626585674',
    changePercent24Hr: '-7.2378156810246651',
    vwap24Hr: '2.2852466331499939',
    explorer: 'https://etherscan.io/token/0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206'
  },
  {
    id: 'ravencoin',
    rank: '90',
    symbol: 'RVN',
    name: 'Ravencoin',
    supply: '10467860000.0000000000000000',
    maxSupply: '21000000000.0000000000000000',
    marketCapUsd: '1226154098.7011135595880000',
    volumeUsd24Hr: '129767276.7293680857943153',
    priceUsd: '0.1171351258711058',
    changePercent24Hr: '2.2157872355516209',
    vwap24Hr: '0.1217067458740205',
    explorer: 'https://ravencoin.network/'
  },
  {
    id: 'compound',
    rank: '91',
    symbol: 'COMP',
    name: 'Compound',
    supply: '6315287.9525234000000000',
    maxSupply: '10000000.0000000000000000',
    marketCapUsd: '1206057743.6628457655134458',
    volumeUsd24Hr: '106222049.5700199693162597',
    priceUsd: '190.9743075422144762',
    changePercent24Hr: '-3.9728067496644930',
    vwap24Hr: '200.1075745698174354',
    explorer: 'https://etherscan.io/token/0xc00e94cb662c3520282e6f5717214004a7f26888'
  },
  {
    id: 'yearn-finance',
    rank: '92',
    symbol: 'YFI',
    name: 'yearn.finance',
    supply: '36637.7212258800000000',
    maxSupply: '36666.0000000000000000',
    marketCapUsd: '1183707098.7995616111034045',
    volumeUsd24Hr: '367569081.2574753688350254',
    priceUsd: '32308.4258298089661381',
    changePercent24Hr: '1.4441984058674676',
    vwap24Hr: '34507.8622275205818864',
    explorer: 'https://etherscan.io/token/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e'
  },
  {
    id: 'mina',
    rank: '93',
    symbol: 'MINA',
    name: 'Mina',
    supply: '342212501.8400392500000000',
    maxSupply: null,
    marketCapUsd: '1164435693.2520575078296221',
    volumeUsd24Hr: '66870253.2878875569343543',
    priceUsd: '3.4026684793542432',
    changePercent24Hr: '-5.1934118604623826',
    vwap24Hr: '3.6343468497948234',
    explorer: 'https://minaexplorer.com/'
  },
  {
    id: 'holo',
    rank: '94',
    symbol: 'HOT',
    name: 'Holo',
    supply: '173113683516.8686200000000000',
    maxSupply: null,
    marketCapUsd: '1093066344.4801233570836868',
    volumeUsd24Hr: '18421673.6439183978077189',
    priceUsd: '0.0063141533486786',
    changePercent24Hr: '-4.3102914360927786',
    vwap24Hr: '0.0066261790986663',
    explorer: 'https://etherscan.io/token/0x6c6ee5e31d828de241282b9606c8e98ea48526e2'
  },
  {
    id: 'xinfin-network',
    rank: '95',
    symbol: 'XDC',
    name: 'XinFin Network',
    supply: '12293293518.5500000000000000',
    maxSupply: null,
    marketCapUsd: '1069131187.2378132271357225',
    volumeUsd24Hr: '4536616.3307751203514491',
    priceUsd: '0.0869686537317721',
    changePercent24Hr: '-3.8083017599470002',
    vwap24Hr: '0.0919579864044260',
    explorer: 'https://etherscan.io/token/0x41ab1b6fcbb2fa9dced81acbdec13ea6315f2bf2'
  },
  {
    id: 'nem',
    rank: '96',
    symbol: 'XEM',
    name: 'NEM',
    supply: '8999999999.0000000000000000',
    maxSupply: '8999999999.0000000000000000',
    marketCapUsd: '1045526927.3334032413944919',
    volumeUsd24Hr: '21745354.5327693657274367',
    priceUsd: '0.1161696586055081',
    changePercent24Hr: '-5.6667464393178047',
    vwap24Hr: '0.1222242004890828',
    explorer: 'http://nembex.nem.ninja/'
  },
  {
    id: 'symbol',
    rank: '97',
    symbol: 'XYM',
    name: 'Symbol',
    supply: '5582460004.5584020000000000',
    maxSupply: '8999999999.0000000000000000',
    marketCapUsd: '1019650596.5705999087016715',
    volumeUsd24Hr: '3046828.3275702634359192',
    priceUsd: '0.1826525574277283',
    changePercent24Hr: '-1.3471294441975572',
    vwap24Hr: '0.1884682789552929',
    explorer: 'http://explorer.symbolblockchain.io/'
  },
  {
    id: 'iotex',
    rank: '98',
    symbol: 'IOTX',
    name: 'IoTeX',
    supply: '9540779324.3078800000000000',
    maxSupply: '10000000000.0000000000000000',
    marketCapUsd: '1012355796.9744355737472486',
    volumeUsd24Hr: '32169295.8635672412408292',
    priceUsd: '0.1061082918452131',
    changePercent24Hr: '-3.1676334599371901',
    vwap24Hr: '0.1115863372302868',
    explorer: 'https://etherscan.io/token/0x6fb3e0a217407efff7ca062d46c26e5d60a14d69'
  },
  {
    id: '1inch',
    rank: '99',
    symbol: '1INCH',
    name: '1inch Network',
    supply: '438447227.9820123000000000',
    maxSupply: null,
    marketCapUsd: '962018099.4469922958419314',
    volumeUsd24Hr: '95039182.4124105058296308',
    priceUsd: '2.1941479796206169',
    changePercent24Hr: '-3.1162969800264540',
    vwap24Hr: '2.3144437235944864',
    explorer: 'https://etherscan.io/token/0x111111111117dc0aa78b770fa6a738034120c302'
  },
  {
    id: 'paxos-standard',
    rank: '100',
    symbol: 'USDP',
    name: 'Pax Dollar',
    supply: '945642940.1100000000000000',
    maxSupply: null,
    marketCapUsd: '958834917.8744622099564614',
    volumeUsd24Hr: '4525270.3522168823138736',
    priceUsd: '1.0139502736232850',
    changePercent24Hr: '1.3741006097535740',
    vwap24Hr: null,
    explorer: 'https://etherscan.io/token/0x8e870d67f660d95d5be530380d0ec0bd388289e1'
  }
]

export const HISTORY_MOCK: IHistoryData[] = [
  {
    priceUsd: '47298.8575128845177627',
    time: 1641108600000,
    circulatingSupply: '18917531.0000000000000000',
    date: '2022-01-02T07:30:00.000Z'
  },
  {
    priceUsd: '47337.5389626497464480',
    time: 1641108900000,
    circulatingSupply: '18917531.0000000000000000',
    date: '2022-01-02T07:35:00.000Z'
  },
  {
    priceUsd: '47353.5117909001248079',
    time: 1641109200000,
    circulatingSupply: '18917531.0000000000000000',
    date: '2022-01-02T07:40:00.000Z'
  },
  {
    priceUsd: '47306.7144281380528767',
    time: 1641109500000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T07:45:00.000Z'
  },
  {
    priceUsd: '47278.2657706325246425',
    time: 1641109800000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T07:50:00.000Z'
  },
  {
    priceUsd: '47269.5953149253316729',
    time: 1641110100000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T07:55:00.000Z'
  },
  {
    priceUsd: '47268.7805903663287349',
    time: 1641110400000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T08:00:00.000Z'
  },
  {
    priceUsd: '47214.7403204461382263',
    time: 1641110700000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T08:05:00.000Z'
  },
  {
    priceUsd: '47165.7450986057436313',
    time: 1641111000000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T08:10:00.000Z'
  },
  {
    priceUsd: '47149.1183585480634789',
    time: 1641111300000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T08:15:00.000Z'
  },
  {
    priceUsd: '47207.2241287468113954',
    time: 1641111600000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T08:20:00.000Z'
  },
  {
    priceUsd: '47274.4208520578185223',
    time: 1641111900000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T08:25:00.000Z'
  },
  {
    priceUsd: '47276.6206926152759659',
    time: 1641112200000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T08:30:00.000Z'
  },
  {
    priceUsd: '47268.7726001119115489',
    time: 1641112500000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T08:35:00.000Z'
  },
  {
    priceUsd: '47198.0587802773729487',
    time: 1641112800000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T08:40:00.000Z'
  },
  {
    priceUsd: '47228.4850281935641545',
    time: 1641113100000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T08:45:00.000Z'
  },
  {
    priceUsd: '47278.8705155244513974',
    time: 1641113400000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T08:50:00.000Z'
  },
  {
    priceUsd: '47317.3290925670773992',
    time: 1641113700000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T08:55:00.000Z'
  },
  {
    priceUsd: '47335.2690505910375898',
    time: 1641114000000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T09:00:00.000Z'
  },
  {
    priceUsd: '47329.7922558108321949',
    time: 1641114300000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T09:05:00.000Z'
  },
  {
    priceUsd: '47317.9901098594754286',
    time: 1641114600000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T09:10:00.000Z'
  },
  {
    priceUsd: '47320.4255540022803116',
    time: 1641114900000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T09:15:00.000Z'
  },
  {
    priceUsd: '47316.8595029448739112',
    time: 1641115200000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T09:20:00.000Z'
  },
  {
    priceUsd: '47464.1034100577189810',
    time: 1641115500000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T09:25:00.000Z'
  },
  {
    priceUsd: '47478.2173323561148071',
    time: 1641115800000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T09:30:00.000Z'
  },
  {
    priceUsd: '47438.9544923128773618',
    time: 1641116100000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T09:35:00.000Z'
  },
  {
    priceUsd: '47461.1312666158341635',
    time: 1641116400000,
    circulatingSupply: '18917593.0000000000000000',
    date: '2022-01-02T09:40:00.000Z'
  },
  {
    priceUsd: '47478.6640389639351844',
    time: 1641116700000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T09:45:00.000Z'
  },
  {
    priceUsd: '47460.0625268670591629',
    time: 1641117000000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T09:50:00.000Z'
  },
  {
    priceUsd: '47429.8390846767991902',
    time: 1641117300000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T09:55:00.000Z'
  },
  {
    priceUsd: '47392.6555289805741776',
    time: 1641117600000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T10:00:00.000Z'
  },
  {
    priceUsd: '47391.2451301360563937',
    time: 1641117900000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T10:05:00.000Z'
  },
  {
    priceUsd: '47422.7762861887319130',
    time: 1641118200000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T10:10:00.000Z'
  },
  {
    priceUsd: '47433.1117913545175918',
    time: 1641118500000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T10:15:00.000Z'
  },
  {
    priceUsd: '47407.9089721591804858',
    time: 1641118800000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T10:20:00.000Z'
  },
  {
    priceUsd: '47389.1676614548730073',
    time: 1641119100000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T10:25:00.000Z'
  },
  {
    priceUsd: '47372.2337694376618198',
    time: 1641119400000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T10:30:00.000Z'
  },
  {
    priceUsd: '47386.8979091821715364',
    time: 1641119700000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T10:35:00.000Z'
  },
  {
    priceUsd: '47363.0336341967338540',
    time: 1641120000000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T10:40:00.000Z'
  },
  {
    priceUsd: '47369.2262587987072917',
    time: 1641120300000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T10:45:00.000Z'
  },
  {
    priceUsd: '47358.9966762628843167',
    time: 1641120600000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T10:50:00.000Z'
  },
  {
    priceUsd: '47347.1871950137856230',
    time: 1641120900000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T10:55:00.000Z'
  },
  {
    priceUsd: '47320.5711254581719128',
    time: 1641121200000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T11:00:00.000Z'
  },
  {
    priceUsd: '47312.4680900600592593',
    time: 1641121500000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T11:05:00.000Z'
  },
  {
    priceUsd: '47371.2744696259921711',
    time: 1641121800000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T11:10:00.000Z'
  },
  {
    priceUsd: '47376.5162423593267838',
    time: 1641122100000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T11:15:00.000Z'
  },
  {
    priceUsd: '47369.4624633215355446',
    time: 1641122400000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T11:20:00.000Z'
  },
  {
    priceUsd: '47418.1589884793750812',
    time: 1641122700000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T11:25:00.000Z'
  },
  {
    priceUsd: '47422.9090396244201822',
    time: 1641123000000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T11:30:00.000Z'
  },
  {
    priceUsd: '47451.0323731255897032',
    time: 1641123300000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T11:35:00.000Z'
  },
  {
    priceUsd: '47432.5654247435186969',
    time: 1641123600000,
    circulatingSupply: '18917681.0000000000000000',
    date: '2022-01-02T11:40:00.000Z'
  },
  {
    priceUsd: '47396.7840404980864961',
    time: 1641123900000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T11:45:00.000Z'
  },
  {
    priceUsd: '47333.0984294370610840',
    time: 1641124200000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T11:50:00.000Z'
  },
  {
    priceUsd: '47344.4293667069912842',
    time: 1641124500000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T11:55:00.000Z'
  },
  {
    priceUsd: '47340.5516936628774598',
    time: 1641124800000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T12:00:00.000Z'
  },
  {
    priceUsd: '47280.5255086508225759',
    time: 1641125100000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T12:05:00.000Z'
  },
  {
    priceUsd: '47204.2639604333951028',
    time: 1641125400000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T12:10:00.000Z'
  },
  {
    priceUsd: '47216.3853190788945959',
    time: 1641125700000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T12:15:00.000Z'
  },
  {
    priceUsd: '47216.4748198170719593',
    time: 1641126000000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T12:20:00.000Z'
  },
  {
    priceUsd: '47265.9010569370975657',
    time: 1641126300000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T12:25:00.000Z'
  },
  {
    priceUsd: '47261.6543773488942359',
    time: 1641126600000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T12:30:00.000Z'
  },
  {
    priceUsd: '47264.6476660099088946',
    time: 1641126900000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T12:35:00.000Z'
  },
  {
    priceUsd: '47402.2276440658250065',
    time: 1641127200000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T12:40:00.000Z'
  },
  {
    priceUsd: '47433.6927092506945732',
    time: 1641127500000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T12:45:00.000Z'
  },
  {
    priceUsd: '47458.2689023020978679',
    time: 1641127800000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T12:50:00.000Z'
  },
  {
    priceUsd: '47470.7490180958352986',
    time: 1641128100000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T12:55:00.000Z'
  },
  {
    priceUsd: '47436.5339927373063747',
    time: 1641128400000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T13:00:00.000Z'
  },
  {
    priceUsd: '47396.8269148552615494',
    time: 1641128700000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T13:05:00.000Z'
  },
  {
    priceUsd: '47397.5154747821362635',
    time: 1641129000000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T13:10:00.000Z'
  },
  {
    priceUsd: '47317.7073086662949358',
    time: 1641129300000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T13:15:00.000Z'
  },
  {
    priceUsd: '47286.8825558311563648',
    time: 1641129600000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T13:20:00.000Z'
  },
  {
    priceUsd: '47274.1121241293297237',
    time: 1641129900000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T13:25:00.000Z'
  },
  {
    priceUsd: '47329.7375866533151186',
    time: 1641130200000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T13:30:00.000Z'
  },
  {
    priceUsd: '47322.2517598940253593',
    time: 1641130500000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T13:35:00.000Z'
  },
  {
    priceUsd: '47280.3911549996006542',
    time: 1641130800000,
    circulatingSupply: '18917768.0000000000000000',
    date: '2022-01-02T13:40:00.000Z'
  },
  {
    priceUsd: '47284.6654542912243809',
    time: 1641131100000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T13:45:00.000Z'
  },
  {
    priceUsd: '47254.6313971108570521',
    time: 1641131400000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T13:50:00.000Z'
  },
  {
    priceUsd: '47258.4640682093772416',
    time: 1641131700000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T13:55:00.000Z'
  },
  {
    priceUsd: '47272.1067634218800086',
    time: 1641132000000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T14:00:00.000Z'
  },
  {
    priceUsd: '47227.3801919336854457',
    time: 1641132300000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T14:05:00.000Z'
  },
  {
    priceUsd: '47277.9099686651481719',
    time: 1641132600000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T14:10:00.000Z'
  },
  {
    priceUsd: '47285.1044496855875821',
    time: 1641132900000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T14:15:00.000Z'
  },
  {
    priceUsd: '47316.1065553950794352',
    time: 1641133200000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T14:20:00.000Z'
  },
  {
    priceUsd: '47233.0598929114560720',
    time: 1641133500000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T14:25:00.000Z'
  },
  {
    priceUsd: '47197.0335116924763357',
    time: 1641133800000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T14:30:00.000Z'
  },
  {
    priceUsd: '47245.9190071251050448',
    time: 1641134100000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T14:35:00.000Z'
  },
  {
    priceUsd: '47263.0360579620596502',
    time: 1641134400000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T14:40:00.000Z'
  },
  {
    priceUsd: '47273.6906703251028641',
    time: 1641134700000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T14:45:00.000Z'
  },
  {
    priceUsd: '47283.7296589961460899',
    time: 1641135000000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T14:50:00.000Z'
  },
  {
    priceUsd: '47250.4286746756871561',
    time: 1641135300000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T14:55:00.000Z'
  },
  {
    priceUsd: '47240.8338375940131175',
    time: 1641135600000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T15:00:00.000Z'
  },
  {
    priceUsd: '47237.5612730143150554',
    time: 1641135900000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T15:05:00.000Z'
  },
  {
    priceUsd: '47287.8952265375780971',
    time: 1641136200000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T15:10:00.000Z'
  },
  {
    priceUsd: '47362.1359089020926053',
    time: 1641136500000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T15:15:00.000Z'
  },
  {
    priceUsd: '47369.6556892145415021',
    time: 1641136800000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T15:20:00.000Z'
  },
  {
    priceUsd: '47363.2706974966252792',
    time: 1641137100000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T15:25:00.000Z'
  },
  {
    priceUsd: '47338.2597407837815066',
    time: 1641137400000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T15:30:00.000Z'
  },
  {
    priceUsd: '47284.4854917785496249',
    time: 1641137700000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T15:35:00.000Z'
  },
  {
    priceUsd: '47292.4781626101063286',
    time: 1641138000000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T15:40:00.000Z'
  },
  {
    priceUsd: '47334.5719902338910136',
    time: 1641138300000,
    circulatingSupply: '18917900.0000000000000000',
    date: '2022-01-02T15:45:00.000Z'
  },
  {
    priceUsd: '47390.3073654300441400',
    time: 1641138600000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T15:50:00.000Z'
  },
  {
    priceUsd: '47428.2263171253610589',
    time: 1641138900000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T15:55:00.000Z'
  },
  {
    priceUsd: '47453.5028451265708601',
    time: 1641139200000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T16:00:00.000Z'
  },
  {
    priceUsd: '47462.7912335525006314',
    time: 1641139500000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T16:05:00.000Z'
  },
  {
    priceUsd: '47476.1515231732922075',
    time: 1641139800000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T16:10:00.000Z'
  },
  {
    priceUsd: '47517.4615968230825900',
    time: 1641140100000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T16:15:00.000Z'
  },
  {
    priceUsd: '47512.3539467071003747',
    time: 1641140400000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T16:20:00.000Z'
  },
  {
    priceUsd: '47539.1895219115816757',
    time: 1641140700000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T16:25:00.000Z'
  },
  {
    priceUsd: '47535.1891792090711499',
    time: 1641141000000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T16:30:00.000Z'
  },
  {
    priceUsd: '47649.6591048276716323',
    time: 1641141300000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T16:35:00.000Z'
  },
  {
    priceUsd: '47679.3992882075106708',
    time: 1641141600000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T16:40:00.000Z'
  },
  {
    priceUsd: '47686.1552004002310998',
    time: 1641141900000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T16:45:00.000Z'
  },
  {
    priceUsd: '47784.9260789957146590',
    time: 1641142200000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T16:50:00.000Z'
  },
  {
    priceUsd: '47777.2129714474841604',
    time: 1641142500000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T16:55:00.000Z'
  },
  {
    priceUsd: '47913.6481267276206591',
    time: 1641142800000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T17:00:00.000Z'
  },
  {
    priceUsd: '47973.3932174919085527',
    time: 1641143100000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T17:05:00.000Z'
  },
  {
    priceUsd: '47911.8810315503159460',
    time: 1641143400000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T17:10:00.000Z'
  },
  {
    priceUsd: '47716.8409353253733548',
    time: 1641143700000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T17:15:00.000Z'
  },
  {
    priceUsd: '47690.0466084531870324',
    time: 1641144000000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T17:20:00.000Z'
  },
  {
    priceUsd: '47677.2927514925543013',
    time: 1641144300000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T17:25:00.000Z'
  },
  {
    priceUsd: '47738.6780610388637716',
    time: 1641144600000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T17:30:00.000Z'
  },
  {
    priceUsd: '47685.1218624887439506',
    time: 1641144900000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T17:35:00.000Z'
  },
  {
    priceUsd: '47696.2752502334606862',
    time: 1641145200000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T17:40:00.000Z'
  },
  {
    priceUsd: '47703.7933267920561710',
    time: 1641145500000,
    circulatingSupply: '18917987.0000000000000000',
    date: '2022-01-02T17:45:00.000Z'
  },
  {
    priceUsd: '47593.8452587149264476',
    time: 1641145800000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T17:50:00.000Z'
  },
  {
    priceUsd: '47542.0167800084268274',
    time: 1641146100000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T17:55:00.000Z'
  },
  {
    priceUsd: '47520.8723432772701443',
    time: 1641146400000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T18:00:00.000Z'
  },
  {
    priceUsd: '47475.0302022945712642',
    time: 1641146700000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T18:05:00.000Z'
  },
  {
    priceUsd: '47393.8032600777997593',
    time: 1641147000000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T18:10:00.000Z'
  },
  {
    priceUsd: '47377.5104701373140030',
    time: 1641147300000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T18:15:00.000Z'
  },
  {
    priceUsd: '47353.9851366869130672',
    time: 1641147600000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T18:20:00.000Z'
  },
  {
    priceUsd: '47252.5844300360286115',
    time: 1641147900000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T18:25:00.000Z'
  },
  {
    priceUsd: '47080.3491213857748670',
    time: 1641148200000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T18:30:00.000Z'
  },
  {
    priceUsd: '46924.2343825197357732',
    time: 1641148500000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T18:35:00.000Z'
  },
  {
    priceUsd: '47031.9270463958143965',
    time: 1641148800000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T18:40:00.000Z'
  },
  {
    priceUsd: '47059.8736085195200982',
    time: 1641149100000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T18:45:00.000Z'
  },
  {
    priceUsd: '47072.9790999156862340',
    time: 1641149400000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T18:50:00.000Z'
  },
  {
    priceUsd: '47057.3883987126089590',
    time: 1641149700000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T18:55:00.000Z'
  },
  {
    priceUsd: '47118.4796562227676704',
    time: 1641150000000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T19:00:00.000Z'
  },
  {
    priceUsd: '47161.3686390986178536',
    time: 1641150300000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T19:05:00.000Z'
  },
  {
    priceUsd: '47247.0987592765543988',
    time: 1641150600000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T19:10:00.000Z'
  },
  {
    priceUsd: '47200.2905955603001749',
    time: 1641150900000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T19:15:00.000Z'
  },
  {
    priceUsd: '47187.7103597811350465',
    time: 1641151200000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T19:20:00.000Z'
  },
  {
    priceUsd: '47085.6044520159749458',
    time: 1641151500000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T19:25:00.000Z'
  },
  {
    priceUsd: '47041.5558826037593378',
    time: 1641151800000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T19:30:00.000Z'
  },
  {
    priceUsd: '47025.0557351003843342',
    time: 1641152100000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T19:35:00.000Z'
  },
  {
    priceUsd: '47093.5945661791942335',
    time: 1641152400000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T19:40:00.000Z'
  },
  {
    priceUsd: '47065.5403431085215965',
    time: 1641152700000,
    circulatingSupply: '18918050.0000000000000000',
    date: '2022-01-02T19:45:00.000Z'
  },
  {
    priceUsd: '47030.8105901026591542',
    time: 1641153000000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T19:50:00.000Z'
  },
  {
    priceUsd: '47056.0206845022496641',
    time: 1641153300000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T19:55:00.000Z'
  },
  {
    priceUsd: '47047.6748108125016312',
    time: 1641153600000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T20:00:00.000Z'
  },
  {
    priceUsd: '47033.0870078337413471',
    time: 1641153900000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T20:05:00.000Z'
  },
  {
    priceUsd: '47048.5008803910624999',
    time: 1641154200000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T20:10:00.000Z'
  },
  {
    priceUsd: '47133.1101917229841722',
    time: 1641154500000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T20:15:00.000Z'
  },
  {
    priceUsd: '47118.9577444922536285',
    time: 1641154800000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T20:20:00.000Z'
  },
  {
    priceUsd: '47098.1547737824064777',
    time: 1641155100000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T20:25:00.000Z'
  },
  {
    priceUsd: '47127.0549270179992731',
    time: 1641155400000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T20:30:00.000Z'
  },
  {
    priceUsd: '47075.4313598612690785',
    time: 1641155700000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T20:35:00.000Z'
  },
  {
    priceUsd: '47046.4575058194992404',
    time: 1641156000000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T20:40:00.000Z'
  },
  {
    priceUsd: '47070.1179549422664709',
    time: 1641156300000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T20:45:00.000Z'
  },
  {
    priceUsd: '47119.9730993677983565',
    time: 1641156600000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T20:50:00.000Z'
  },
  {
    priceUsd: '47133.5831137795498038',
    time: 1641156900000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T20:55:00.000Z'
  },
  {
    priceUsd: '47143.3024231728837772',
    time: 1641157200000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T21:00:00.000Z'
  },
  {
    priceUsd: '47048.6435663658697503',
    time: 1641157500000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T21:05:00.000Z'
  },
  {
    priceUsd: '47100.8001056931114458',
    time: 1641157800000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T21:10:00.000Z'
  },
  {
    priceUsd: '47209.8206783044447116',
    time: 1641158100000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T21:15:00.000Z'
  },
  {
    priceUsd: '47203.7784615332421137',
    time: 1641158400000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T21:20:00.000Z'
  },
  {
    priceUsd: '47172.0246218121482334',
    time: 1641158700000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T21:25:00.000Z'
  },
  {
    priceUsd: '47153.3767649970206145',
    time: 1641159000000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T21:30:00.000Z'
  },
  {
    priceUsd: '47164.9874747808856763',
    time: 1641159300000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T21:35:00.000Z'
  },
  {
    priceUsd: '47187.4933182718419502',
    time: 1641159600000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T21:40:00.000Z'
  },
  {
    priceUsd: '47183.8690635088675734',
    time: 1641159900000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T21:45:00.000Z'
  },
  {
    priceUsd: '47114.8253182768242691',
    time: 1641160200000,
    circulatingSupply: '18918106.0000000000000000',
    date: '2022-01-02T21:50:00.000Z'
  },
  {
    priceUsd: '47090.8990949670531239',
    time: 1641160500000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T21:55:00.000Z'
  },
  {
    priceUsd: '47099.7714947690695452',
    time: 1641160800000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T22:00:00.000Z'
  },
  {
    priceUsd: '47159.6834191578742266',
    time: 1641161100000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T22:05:00.000Z'
  },
  {
    priceUsd: '47208.7477928759398421',
    time: 1641161400000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T22:10:00.000Z'
  },
  {
    priceUsd: '47234.3159597370188211',
    time: 1641161700000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T22:15:00.000Z'
  },
  {
    priceUsd: '47253.0240569227297285',
    time: 1641162000000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T22:20:00.000Z'
  },
  {
    priceUsd: '47253.5959386619085865',
    time: 1641162300000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T22:25:00.000Z'
  },
  {
    priceUsd: '47249.8884213444769733',
    time: 1641162600000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T22:30:00.000Z'
  },
  {
    priceUsd: '47307.5661748331239233',
    time: 1641162900000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T22:35:00.000Z'
  },
  {
    priceUsd: '47417.8652852764592552',
    time: 1641163200000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T22:40:00.000Z'
  },
  {
    priceUsd: '47428.0274501341739091',
    time: 1641163500000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T22:45:00.000Z'
  },
  {
    priceUsd: '47388.2547290581068779',
    time: 1641163800000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T22:50:00.000Z'
  },
  {
    priceUsd: '47351.6670637663624337',
    time: 1641164100000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T22:55:00.000Z'
  },
  {
    priceUsd: '47349.4970177488868525',
    time: 1641164400000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T23:00:00.000Z'
  },
  {
    priceUsd: '47373.1832315227715499',
    time: 1641164700000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T23:05:00.000Z'
  },
  {
    priceUsd: '47432.2801801321909590',
    time: 1641165000000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T23:10:00.000Z'
  },
  {
    priceUsd: '47405.9405814653547580',
    time: 1641165300000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T23:15:00.000Z'
  },
  {
    priceUsd: '47410.7172447036622642',
    time: 1641165600000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T23:20:00.000Z'
  },
  {
    priceUsd: '47409.5066851688418331',
    time: 1641165900000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T23:25:00.000Z'
  },
  {
    priceUsd: '47443.4050574511168041',
    time: 1641166200000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T23:30:00.000Z'
  },
  {
    priceUsd: '47503.0588378524345198',
    time: 1641166500000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T23:35:00.000Z'
  },
  {
    priceUsd: '47438.8093199844964851',
    time: 1641166800000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T23:40:00.000Z'
  },
  {
    priceUsd: '47426.8993311258485747',
    time: 1641167100000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T23:45:00.000Z'
  },
  {
    priceUsd: '47450.6086715170535373',
    time: 1641167400000,
    circulatingSupply: '18918175.0000000000000000',
    date: '2022-01-02T23:50:00.000Z'
  },
  {
    priceUsd: '47399.0340460472763090',
    time: 1641167700000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-02T23:55:00.000Z'
  },
  {
    priceUsd: '47391.4674352572265210',
    time: 1641168000000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T00:00:00.000Z'
  },
  {
    priceUsd: '47315.7655223331890355',
    time: 1641168300000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T00:05:00.000Z'
  },
  {
    priceUsd: '47298.5333195900648815',
    time: 1641168600000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T00:10:00.000Z'
  },
  {
    priceUsd: '47269.4983975510165314',
    time: 1641168900000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T00:15:00.000Z'
  },
  {
    priceUsd: '47272.9062587688653697',
    time: 1641169200000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T00:20:00.000Z'
  },
  {
    priceUsd: '47325.2959476858446950',
    time: 1641169500000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T00:25:00.000Z'
  },
  {
    priceUsd: '47269.8149266465909927',
    time: 1641169800000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T00:30:00.000Z'
  },
  {
    priceUsd: '47190.1840290725270324',
    time: 1641170100000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T00:35:00.000Z'
  },
  {
    priceUsd: '47196.4235060428651883',
    time: 1641170400000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T00:40:00.000Z'
  },
  {
    priceUsd: '47223.6255967231971871',
    time: 1641170700000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T00:45:00.000Z'
  },
  {
    priceUsd: '47207.1589861321967835',
    time: 1641171000000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T00:50:00.000Z'
  },
  {
    priceUsd: '47251.6140683898947453',
    time: 1641171300000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T00:55:00.000Z'
  },
  {
    priceUsd: '47177.1787160623909786',
    time: 1641171600000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T01:00:00.000Z'
  },
  {
    priceUsd: '47157.6155200268518475',
    time: 1641171900000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T01:05:00.000Z'
  },
  {
    priceUsd: '47134.9674133114950193',
    time: 1641172200000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T01:10:00.000Z'
  },
  {
    priceUsd: '47134.4947328136191333',
    time: 1641172500000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T01:15:00.000Z'
  },
  {
    priceUsd: '47152.7410378861217858',
    time: 1641172800000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T01:20:00.000Z'
  },
  {
    priceUsd: '47101.4903927393772011',
    time: 1641173100000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T01:25:00.000Z'
  },
  {
    priceUsd: '47098.2896037891727611',
    time: 1641173400000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T01:30:00.000Z'
  },
  {
    priceUsd: '47125.5011880898669474',
    time: 1641173700000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T01:35:00.000Z'
  },
  {
    priceUsd: '47124.0811906084786085',
    time: 1641174000000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T01:40:00.000Z'
  },
  {
    priceUsd: '47070.4973405086918328',
    time: 1641174300000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T01:45:00.000Z'
  },
  {
    priceUsd: '47062.8732475382160623',
    time: 1641174600000,
    circulatingSupply: '18918243.0000000000000000',
    date: '2022-01-03T01:50:00.000Z'
  },
  {
    priceUsd: '47107.1601965308410525',
    time: 1641174900000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T01:55:00.000Z'
  },
  {
    priceUsd: '47169.0126422252188542',
    time: 1641175200000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T02:00:00.000Z'
  },
  {
    priceUsd: '47174.0818898157218424',
    time: 1641175500000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T02:05:00.000Z'
  },
  {
    priceUsd: '47071.7558345911554528',
    time: 1641175800000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T02:10:00.000Z'
  },
  {
    priceUsd: '47035.8213433956679519',
    time: 1641176100000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T02:15:00.000Z'
  },
  {
    priceUsd: '47053.8659531599768232',
    time: 1641176400000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T02:20:00.000Z'
  },
  {
    priceUsd: '47068.8618279822992264',
    time: 1641176700000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T02:25:00.000Z'
  },
  {
    priceUsd: '47078.7855836568017505',
    time: 1641177000000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T02:30:00.000Z'
  },
  {
    priceUsd: '47086.9787496824578799',
    time: 1641177300000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T02:35:00.000Z'
  },
  {
    priceUsd: '47105.7745461084630625',
    time: 1641177600000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T02:40:00.000Z'
  },
  {
    priceUsd: '47073.6986315513188189',
    time: 1641177900000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T02:45:00.000Z'
  },
  {
    priceUsd: '47033.6998970526710135',
    time: 1641178200000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T02:50:00.000Z'
  },
  {
    priceUsd: '47029.4823254767190578',
    time: 1641178500000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T02:55:00.000Z'
  },
  {
    priceUsd: '47083.0258375980679664',
    time: 1641178800000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T03:00:00.000Z'
  },
  {
    priceUsd: '47133.1348939561711938',
    time: 1641179100000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T03:05:00.000Z'
  },
  {
    priceUsd: '47112.3838368589486027',
    time: 1641179400000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T03:10:00.000Z'
  },
  {
    priceUsd: '47072.1212926631744529',
    time: 1641179700000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T03:15:00.000Z'
  },
  {
    priceUsd: '46988.5599661753466485',
    time: 1641180000000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T03:20:00.000Z'
  },
  {
    priceUsd: '47024.8628264425216509',
    time: 1641180300000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T03:25:00.000Z'
  },
  {
    priceUsd: '47053.1178498462929923',
    time: 1641180600000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T03:30:00.000Z'
  },
  {
    priceUsd: '47035.3647520341097491',
    time: 1641180900000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T03:35:00.000Z'
  },
  {
    priceUsd: '46947.3865422929561913',
    time: 1641181200000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T03:40:00.000Z'
  },
  {
    priceUsd: '46921.4114123345234576',
    time: 1641181500000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T03:45:00.000Z'
  },
  {
    priceUsd: '46872.9616243409500691',
    time: 1641181800000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T03:50:00.000Z'
  },
  {
    priceUsd: '46898.0581237652605716',
    time: 1641182100000,
    circulatingSupply: '18918306.0000000000000000',
    date: '2022-01-03T03:55:00.000Z'
  },
  {
    priceUsd: '46897.7670032352033732',
    time: 1641182400000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T04:00:00.000Z'
  },
  {
    priceUsd: '46890.0052643866328111',
    time: 1641182700000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T04:05:00.000Z'
  },
  {
    priceUsd: '46933.3886879917257380',
    time: 1641183000000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T04:10:00.000Z'
  },
  {
    priceUsd: '46950.3932872673746832',
    time: 1641183300000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T04:15:00.000Z'
  },
  {
    priceUsd: '46976.7258924379323711',
    time: 1641183600000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T04:20:00.000Z'
  },
  {
    priceUsd: '46938.8548863132637919',
    time: 1641183900000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T04:25:00.000Z'
  },
  {
    priceUsd: '46955.4979432152477267',
    time: 1641184200000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T04:30:00.000Z'
  },
  {
    priceUsd: '46958.5917666888973301',
    time: 1641184500000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T04:35:00.000Z'
  },
  {
    priceUsd: '46991.1399786627107082',
    time: 1641184800000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T04:40:00.000Z'
  },
  {
    priceUsd: '47020.3200461448134998',
    time: 1641185100000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T04:45:00.000Z'
  },
  {
    priceUsd: '47010.5702425104318534',
    time: 1641185400000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T04:50:00.000Z'
  },
  {
    priceUsd: '46954.8193753833494796',
    time: 1641185700000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T04:55:00.000Z'
  },
  {
    priceUsd: '46942.9863081505706452',
    time: 1641186000000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T05:00:00.000Z'
  },
  {
    priceUsd: '46981.0456103126233715',
    time: 1641186300000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T05:05:00.000Z'
  },
  {
    priceUsd: '46956.1182455401123250',
    time: 1641186600000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T05:10:00.000Z'
  },
  {
    priceUsd: '46917.0028453138818349',
    time: 1641186900000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T05:15:00.000Z'
  },
  {
    priceUsd: '46938.8484120463204064',
    time: 1641187200000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T05:20:00.000Z'
  },
  {
    priceUsd: '46946.1630746103686518',
    time: 1641187500000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T05:25:00.000Z'
  },
  {
    priceUsd: '47047.5253901507428960',
    time: 1641187800000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T05:30:00.000Z'
  },
  {
    priceUsd: '47115.4545016170101545',
    time: 1641188100000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T05:35:00.000Z'
  },
  {
    priceUsd: '47161.7563778165680169',
    time: 1641188400000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T05:40:00.000Z'
  },
  {
    priceUsd: '47233.4276664964576924',
    time: 1641188700000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T05:45:00.000Z'
  },
  {
    priceUsd: '47199.5937932177552277',
    time: 1641189000000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T05:50:00.000Z'
  },
  {
    priceUsd: '47200.8651293938940349',
    time: 1641189300000,
    circulatingSupply: '18918406.0000000000000000',
    date: '2022-01-03T05:55:00.000Z'
  },
  {
    priceUsd: '47201.9830151889473670',
    time: 1641189600000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T06:00:00.000Z'
  },
  {
    priceUsd: '47218.0522964218645521',
    time: 1641189900000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T06:05:00.000Z'
  },
  {
    priceUsd: '47204.3612881803316699',
    time: 1641190200000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T06:10:00.000Z'
  },
  {
    priceUsd: '47163.3857565964313863',
    time: 1641190500000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T06:15:00.000Z'
  },
  {
    priceUsd: '47151.0126862336775143',
    time: 1641190800000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T06:20:00.000Z'
  },
  {
    priceUsd: '47149.7403192370411093',
    time: 1641191100000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T06:25:00.000Z'
  },
  {
    priceUsd: '47091.7934140002571964',
    time: 1641191400000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T06:30:00.000Z'
  },
  {
    priceUsd: '47057.8250949024365261',
    time: 1641191700000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T06:35:00.000Z'
  },
  {
    priceUsd: '47079.0834204109407988',
    time: 1641192000000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T06:40:00.000Z'
  },
  {
    priceUsd: '47132.8119172019292494',
    time: 1641192300000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T06:45:00.000Z'
  },
  {
    priceUsd: '47115.4415946200849211',
    time: 1641192600000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T06:50:00.000Z'
  },
  {
    priceUsd: '47069.8594525504261830',
    time: 1641192900000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T06:55:00.000Z'
  },
  {
    priceUsd: '47005.6700613106762599',
    time: 1641193200000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T07:00:00.000Z'
  },
  {
    priceUsd: '47005.4463698529232382',
    time: 1641193500000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T07:05:00.000Z'
  },
  {
    priceUsd: '46983.8146338055144612',
    time: 1641193800000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T07:10:00.000Z'
  },
  {
    priceUsd: '46910.7073442543522532',
    time: 1641194100000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T07:15:00.000Z'
  },
  {
    priceUsd: '46956.4273111108083528',
    time: 1641194400000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T07:20:00.000Z'
  },
  {
    priceUsd: '46953.1101544130135389',
    time: 1641194700000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T07:25:00.000Z'
  },
  {
    priceUsd: '46977.6741351353508190',
    time: 1641195000000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T07:30:00.000Z'
  },
  {
    priceUsd: '47037.8392419511921771',
    time: 1641195300000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T07:35:00.000Z'
  },
  {
    priceUsd: '47043.9088109205228651',
    time: 1641195600000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T07:40:00.000Z'
  },
  {
    priceUsd: '47040.5094592178233178',
    time: 1641195900000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T07:45:00.000Z'
  },
  {
    priceUsd: '47023.1115970674077861',
    time: 1641196200000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T07:50:00.000Z'
  },
  {
    priceUsd: '47075.2722483591412605',
    time: 1641196500000,
    circulatingSupply: '18918512.0000000000000000',
    date: '2022-01-03T07:55:00.000Z'
  },
  {
    priceUsd: '47110.2308530021234541',
    time: 1641196800000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T08:00:00.000Z'
  },
  {
    priceUsd: '47142.4152210568450416',
    time: 1641197100000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T08:05:00.000Z'
  },
  {
    priceUsd: '47120.5655665039307169',
    time: 1641197400000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T08:10:00.000Z'
  },
  {
    priceUsd: '47129.8047805041995923',
    time: 1641197700000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T08:15:00.000Z'
  },
  {
    priceUsd: '47084.1222380736576353',
    time: 1641198000000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T08:20:00.000Z'
  },
  {
    priceUsd: '47066.8710963715510204',
    time: 1641198300000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T08:25:00.000Z'
  },
  {
    priceUsd: '47059.2795075952423068',
    time: 1641198600000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T08:30:00.000Z'
  },
  {
    priceUsd: '47053.3628540444496022',
    time: 1641198900000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T08:35:00.000Z'
  },
  {
    priceUsd: '47021.2427050610784917',
    time: 1641199200000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T08:40:00.000Z'
  },
  {
    priceUsd: '46984.8247602348183604',
    time: 1641199500000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T08:45:00.000Z'
  },
  {
    priceUsd: '46969.2441575713636710',
    time: 1641199800000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T08:50:00.000Z'
  },
  {
    priceUsd: '46934.8752322600447391',
    time: 1641200100000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T08:55:00.000Z'
  },
  {
    priceUsd: '46960.0137816688092809',
    time: 1641200400000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T09:00:00.000Z'
  },
  {
    priceUsd: '47040.8273258620339325',
    time: 1641200700000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T09:05:00.000Z'
  },
  {
    priceUsd: '47064.7941217086049528',
    time: 1641201000000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T09:10:00.000Z'
  },
  {
    priceUsd: '47093.4683653925555920',
    time: 1641201300000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T09:15:00.000Z'
  },
  {
    priceUsd: '46966.1839181481622885',
    time: 1641201600000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T09:20:00.000Z'
  },
  {
    priceUsd: '46940.0389951875038852',
    time: 1641201900000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T09:25:00.000Z'
  },
  {
    priceUsd: '46914.0227652301857879',
    time: 1641202200000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T09:30:00.000Z'
  },
  {
    priceUsd: '46903.7547462113739222',
    time: 1641202500000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T09:35:00.000Z'
  },
  {
    priceUsd: '46923.8565226042165462',
    time: 1641202800000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T09:40:00.000Z'
  },
  {
    priceUsd: '46959.9063232776949842',
    time: 1641203100000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T09:45:00.000Z'
  },
  {
    priceUsd: '46982.3362281786450006',
    time: 1641203400000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T09:50:00.000Z'
  },
  {
    priceUsd: '47029.3995387576208213',
    time: 1641203700000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T09:55:00.000Z'
  },
  {
    priceUsd: '47041.6273081148498315',
    time: 1641204000000,
    circulatingSupply: '18918568.0000000000000000',
    date: '2022-01-03T10:00:00.000Z'
  },
  {
    priceUsd: '47146.2164187344402901',
    time: 1641204300000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T10:05:00.000Z'
  },
  {
    priceUsd: '47131.7506913463946739',
    time: 1641204600000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T10:10:00.000Z'
  },
  {
    priceUsd: '47230.3821934404067136',
    time: 1641204900000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T10:15:00.000Z'
  },
  {
    priceUsd: '47221.2621353798524951',
    time: 1641205200000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T10:20:00.000Z'
  },
  {
    priceUsd: '47177.0219032531687189',
    time: 1641205500000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T10:25:00.000Z'
  },
  {
    priceUsd: '47152.3054618552980280',
    time: 1641205800000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T10:30:00.000Z'
  },
  {
    priceUsd: '47146.4222011166638038',
    time: 1641206100000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T10:35:00.000Z'
  },
  {
    priceUsd: '47195.5819734519668623',
    time: 1641206400000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T10:40:00.000Z'
  },
  {
    priceUsd: '47224.5844330089009500',
    time: 1641206700000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T10:45:00.000Z'
  },
  {
    priceUsd: '47260.5065560180192932',
    time: 1641207000000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T10:50:00.000Z'
  },
  {
    priceUsd: '47238.7694394171041130',
    time: 1641207300000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T10:55:00.000Z'
  },
  {
    priceUsd: '47213.6330694828751492',
    time: 1641207600000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T11:00:00.000Z'
  },
  {
    priceUsd: '47266.6766524485025449',
    time: 1641207900000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T11:05:00.000Z'
  },
  {
    priceUsd: '47306.9547341213952026',
    time: 1641208200000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T11:10:00.000Z'
  },
  {
    priceUsd: '47344.5912460463712869',
    time: 1641208500000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T11:15:00.000Z'
  },
  {
    priceUsd: '47300.6607645647585375',
    time: 1641208800000,
    circulatingSupply: '18918625.0000000000000000',
    date: '2022-01-03T11:20:00.000Z'
  },
  {
    priceUsd: '47269.2009862602572235',
    time: 1641209100000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T11:25:00.000Z'
  },
  {
    priceUsd: '47428.3637994767432900',
    time: 1641209400000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T11:30:00.000Z'
  },
  {
    priceUsd: '47248.9667134785478637',
    time: 1641209700000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T11:35:00.000Z'
  },
  {
    priceUsd: '47271.4804957139690822',
    time: 1641210000000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T11:40:00.000Z'
  },
  {
    priceUsd: '47231.1294393010547482',
    time: 1641210300000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T11:45:00.000Z'
  },
  {
    priceUsd: '47234.9115961772010001',
    time: 1641210600000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T11:50:00.000Z'
  },
  {
    priceUsd: '47268.9490899167939766',
    time: 1641210900000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T11:55:00.000Z'
  },
  {
    priceUsd: '47331.4688144490240679',
    time: 1641211200000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T12:00:00.000Z'
  },
  {
    priceUsd: '47282.9071618090034638',
    time: 1641211500000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T12:05:00.000Z'
  },
  {
    priceUsd: '47336.0056178380356609',
    time: 1641211800000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T12:10:00.000Z'
  },
  {
    priceUsd: '47572.5266140181801392',
    time: 1641212100000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T12:15:00.000Z'
  },
  {
    priceUsd: '47600.9924843251093669',
    time: 1641212400000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T12:20:00.000Z'
  },
  {
    priceUsd: '47509.3424189032221924',
    time: 1641212700000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T12:25:00.000Z'
  },
  {
    priceUsd: '47506.6639024681543655',
    time: 1641213000000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T12:30:00.000Z'
  },
  {
    priceUsd: '47437.2338833831113206',
    time: 1641213300000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T12:35:00.000Z'
  },
  {
    priceUsd: '47391.1761820849496720',
    time: 1641213600000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T12:40:00.000Z'
  },
  {
    priceUsd: '47407.7605432840903963',
    time: 1641213900000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T12:45:00.000Z'
  },
  {
    priceUsd: '47400.7720287461740278',
    time: 1641214200000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T12:50:00.000Z'
  },
  {
    priceUsd: '47393.4254065455097438',
    time: 1641214500000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T12:55:00.000Z'
  },
  {
    priceUsd: '47337.9234023929821223',
    time: 1641214800000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T13:00:00.000Z'
  },
  {
    priceUsd: '47384.6516093884796883',
    time: 1641215100000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T13:05:00.000Z'
  },
  {
    priceUsd: '47388.0074339797555591',
    time: 1641215400000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T13:10:00.000Z'
  },
  {
    priceUsd: '47374.3122015798827207',
    time: 1641215700000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T13:15:00.000Z'
  },
  {
    priceUsd: '47341.4877164645048972',
    time: 1641216000000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T13:20:00.000Z'
  },
  {
    priceUsd: '47341.1769511444670805',
    time: 1641216300000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T13:25:00.000Z'
  },
  {
    priceUsd: '47323.4440235817537476',
    time: 1641216600000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T13:30:00.000Z'
  },
  {
    priceUsd: '47280.5669222223512566',
    time: 1641216900000,
    circulatingSupply: '18918687.0000000000000000',
    date: '2022-01-03T13:35:00.000Z'
  },
  {
    priceUsd: '47272.1408810464820558',
    time: 1641217200000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T13:40:00.000Z'
  },
  {
    priceUsd: '47256.3292763056996689',
    time: 1641217500000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T13:45:00.000Z'
  },
  {
    priceUsd: '47266.7959473728055201',
    time: 1641217800000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T13:50:00.000Z'
  },
  {
    priceUsd: '47244.0072097961102065',
    time: 1641218100000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T13:55:00.000Z'
  },
  {
    priceUsd: '47179.0731674627795484',
    time: 1641218400000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T14:00:00.000Z'
  },
  {
    priceUsd: '47262.9991425048076269',
    time: 1641218700000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T14:05:00.000Z'
  },
  {
    priceUsd: '47141.5238441460361932',
    time: 1641219000000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T14:10:00.000Z'
  },
  {
    priceUsd: '47144.3238056370523250',
    time: 1641219300000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T14:15:00.000Z'
  },
  {
    priceUsd: '47160.7232711720423004',
    time: 1641219600000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T14:20:00.000Z'
  },
  {
    priceUsd: '47184.3172847924342174',
    time: 1641219900000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T14:25:00.000Z'
  },
  {
    priceUsd: '47178.7492013504158777',
    time: 1641220200000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T14:30:00.000Z'
  },
  {
    priceUsd: '47235.5707858969688011',
    time: 1641220500000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T14:35:00.000Z'
  },
  {
    priceUsd: '47276.3056696969375075',
    time: 1641220800000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T14:40:00.000Z'
  },
  {
    priceUsd: '47239.5140853345862924',
    time: 1641221100000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T14:45:00.000Z'
  },
  {
    priceUsd: '47091.0837186570873885',
    time: 1641221400000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T14:50:00.000Z'
  },
  {
    priceUsd: '47005.0028748386573828',
    time: 1641221700000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T14:55:00.000Z'
  },
  {
    priceUsd: '47040.1391515615760836',
    time: 1641222000000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T15:00:00.000Z'
  },
  {
    priceUsd: '46971.4880324005597510',
    time: 1641222300000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T15:05:00.000Z'
  },
  {
    priceUsd: '46897.4249169235078202',
    time: 1641222600000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T15:10:00.000Z'
  },
  {
    priceUsd: '46965.2629609531951577',
    time: 1641222900000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T15:15:00.000Z'
  },
  {
    priceUsd: '46955.8829829848402088',
    time: 1641223200000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T15:20:00.000Z'
  },
  {
    priceUsd: '46924.2707542571272374',
    time: 1641223500000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T15:25:00.000Z'
  },
  {
    priceUsd: '46977.3153017930155193',
    time: 1641223800000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T15:30:00.000Z'
  },
  {
    priceUsd: '46912.0060028057232143',
    time: 1641224100000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T15:35:00.000Z'
  },
  {
    priceUsd: '46921.5087702491191390',
    time: 1641224400000,
    circulatingSupply: '18918762.0000000000000000',
    date: '2022-01-03T15:40:00.000Z'
  },
  {
    priceUsd: '46908.5548027017054630',
    time: 1641224700000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T15:45:00.000Z'
  },
  {
    priceUsd: '46890.8181830701351596',
    time: 1641225000000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T15:50:00.000Z'
  },
  {
    priceUsd: '46733.2142484127200062',
    time: 1641225300000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T15:55:00.000Z'
  },
  {
    priceUsd: '46684.4292739259684547',
    time: 1641225600000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T16:00:00.000Z'
  },
  {
    priceUsd: '46769.1781315145228657',
    time: 1641225900000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T16:05:00.000Z'
  },
  {
    priceUsd: '46666.7674870913889400',
    time: 1641226200000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T16:10:00.000Z'
  },
  {
    priceUsd: '46693.2551577345121908',
    time: 1641226500000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T16:15:00.000Z'
  },
  {
    priceUsd: '46600.2764187854267725',
    time: 1641226800000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T16:20:00.000Z'
  },
  {
    priceUsd: '46473.3401300835312959',
    time: 1641227100000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T16:25:00.000Z'
  },
  {
    priceUsd: '46481.1861542244665766',
    time: 1641227400000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T16:30:00.000Z'
  },
  {
    priceUsd: '46536.8374799884621497',
    time: 1641227700000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T16:35:00.000Z'
  },
  {
    priceUsd: '46498.5541928433865808',
    time: 1641228000000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T16:40:00.000Z'
  },
  {
    priceUsd: '46529.8708814355277947',
    time: 1641228300000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T16:45:00.000Z'
  },
  {
    priceUsd: '46525.3684874708330117',
    time: 1641228600000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T16:50:00.000Z'
  },
  {
    priceUsd: '46536.9862421112828782',
    time: 1641228900000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T16:55:00.000Z'
  },
  {
    priceUsd: '46605.5069825710289064',
    time: 1641229200000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T17:00:00.000Z'
  },
  {
    priceUsd: '46658.3102109802757609',
    time: 1641229500000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T17:05:00.000Z'
  },
  {
    priceUsd: '46742.4990201831474228',
    time: 1641229800000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T17:10:00.000Z'
  },
  {
    priceUsd: '46661.0873148603263919',
    time: 1641230100000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T17:15:00.000Z'
  },
  {
    priceUsd: '46630.0686051034171173',
    time: 1641230400000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T17:20:00.000Z'
  },
  {
    priceUsd: '46660.5837459794543765',
    time: 1641230700000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T17:25:00.000Z'
  },
  {
    priceUsd: '46810.9948829497198904',
    time: 1641231000000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T17:30:00.000Z'
  },
  {
    priceUsd: '46871.2158066247321639',
    time: 1641231300000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T17:35:00.000Z'
  },
  {
    priceUsd: '46850.2289387693965674',
    time: 1641231600000,
    circulatingSupply: '18918856.0000000000000000',
    date: '2022-01-03T17:40:00.000Z'
  },
  {
    priceUsd: '46804.8732204298415849',
    time: 1641231900000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T17:45:00.000Z'
  },
  {
    priceUsd: '46799.6999805054277286',
    time: 1641232200000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T17:50:00.000Z'
  },
  {
    priceUsd: '46801.2493192048181365',
    time: 1641232500000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T17:55:00.000Z'
  },
  {
    priceUsd: '46755.2450333177496399',
    time: 1641232800000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T18:00:00.000Z'
  },
  {
    priceUsd: '46846.4969246785418312',
    time: 1641233100000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T18:05:00.000Z'
  },
  {
    priceUsd: '46777.0701396917258988',
    time: 1641233400000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T18:10:00.000Z'
  },
  {
    priceUsd: '46803.3150822521315225',
    time: 1641233700000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T18:15:00.000Z'
  },
  {
    priceUsd: '46802.4119295139987857',
    time: 1641234000000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T18:20:00.000Z'
  },
  {
    priceUsd: '46805.6164143100561498',
    time: 1641234300000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T18:25:00.000Z'
  },
  {
    priceUsd: '46809.0508777578391306',
    time: 1641234600000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T18:30:00.000Z'
  },
  {
    priceUsd: '46784.2540335912376594',
    time: 1641234900000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T18:35:00.000Z'
  },
  {
    priceUsd: '46730.9599243965886016',
    time: 1641235200000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T18:40:00.000Z'
  },
  {
    priceUsd: '46681.6070056348492260',
    time: 1641235500000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T18:45:00.000Z'
  },
  {
    priceUsd: '46630.0906852892980243',
    time: 1641235800000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T18:50:00.000Z'
  },
  {
    priceUsd: '46646.5933180379997064',
    time: 1641236100000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T18:55:00.000Z'
  },
  {
    priceUsd: '46641.3583771511161050',
    time: 1641236400000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T19:00:00.000Z'
  },
  {
    priceUsd: '46624.0079566146206196',
    time: 1641236700000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T19:05:00.000Z'
  },
  {
    priceUsd: '46642.4171404579494992',
    time: 1641237000000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T19:10:00.000Z'
  },
  {
    priceUsd: '46654.4044616588257799',
    time: 1641237300000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T19:15:00.000Z'
  },
  {
    priceUsd: '46692.8093558266214245',
    time: 1641237600000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T19:20:00.000Z'
  },
  {
    priceUsd: '46726.9477655729590145',
    time: 1641237900000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T19:25:00.000Z'
  },
  {
    priceUsd: '46749.7574499237255287',
    time: 1641238200000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T19:30:00.000Z'
  },
  {
    priceUsd: '46754.1939735341889911',
    time: 1641238500000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T19:35:00.000Z'
  },
  {
    priceUsd: '46748.7260266277054311',
    time: 1641238800000,
    circulatingSupply: '18918931.0000000000000000',
    date: '2022-01-03T19:40:00.000Z'
  },
  {
    priceUsd: '46736.3390102663050558',
    time: 1641239100000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T19:45:00.000Z'
  },
  {
    priceUsd: '46719.1502383328763277',
    time: 1641239400000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T19:50:00.000Z'
  },
  {
    priceUsd: '46672.0630807063157809',
    time: 1641239700000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T19:55:00.000Z'
  },
  {
    priceUsd: '46585.6495543128466579',
    time: 1641240000000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T20:00:00.000Z'
  },
  {
    priceUsd: '46540.6913614482785977',
    time: 1641240300000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T20:05:00.000Z'
  },
  {
    priceUsd: '46479.5457042049960385',
    time: 1641240600000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T20:10:00.000Z'
  },
  {
    priceUsd: '46488.6132642634784814',
    time: 1641240900000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T20:15:00.000Z'
  },
  {
    priceUsd: '46447.6634517944124181',
    time: 1641241200000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T20:20:00.000Z'
  },
  {
    priceUsd: '46232.0886624274979924',
    time: 1641241500000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T20:25:00.000Z'
  },
  {
    priceUsd: '46046.9964496240722208',
    time: 1641241800000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T20:30:00.000Z'
  },
  {
    priceUsd: '46149.2602725249353409',
    time: 1641242100000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T20:35:00.000Z'
  },
  {
    priceUsd: '46091.8201977196863165',
    time: 1641242400000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T20:40:00.000Z'
  },
  {
    priceUsd: '46023.2418193918413922',
    time: 1641242700000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T20:45:00.000Z'
  },
  {
    priceUsd: '46073.7710218929658732',
    time: 1641243000000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T20:50:00.000Z'
  },
  {
    priceUsd: '46066.7025985791041841',
    time: 1641243300000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T20:55:00.000Z'
  },
  {
    priceUsd: '46063.4978168175786169',
    time: 1641243600000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T21:00:00.000Z'
  },
  {
    priceUsd: '46128.6249233647709325',
    time: 1641243900000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T21:05:00.000Z'
  },
  {
    priceUsd: '46129.9029693929265121',
    time: 1641244200000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T21:10:00.000Z'
  },
  {
    priceUsd: '46057.7101259947227161',
    time: 1641244500000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T21:15:00.000Z'
  },
  {
    priceUsd: '46066.4274955845506663',
    time: 1641244800000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T21:20:00.000Z'
  },
  {
    priceUsd: '46121.0980497408683701',
    time: 1641245100000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T21:25:00.000Z'
  },
  {
    priceUsd: '46212.1670613050900377',
    time: 1641245400000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T21:30:00.000Z'
  },
  {
    priceUsd: '46317.3151540085143493',
    time: 1641245700000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T21:35:00.000Z'
  },
  {
    priceUsd: '46318.3784590196534858',
    time: 1641246000000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T21:40:00.000Z'
  },
  {
    priceUsd: '46280.3856594190115527',
    time: 1641246300000,
    circulatingSupply: '18919012.0000000000000000',
    date: '2022-01-03T21:45:00.000Z'
  },
  {
    priceUsd: '46301.6215491097691893',
    time: 1641246600000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T21:50:00.000Z'
  },
  {
    priceUsd: '46272.3079454718461005',
    time: 1641246900000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T21:55:00.000Z'
  },
  {
    priceUsd: '46242.7435437465535524',
    time: 1641247200000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T22:00:00.000Z'
  },
  {
    priceUsd: '46247.6010167674399037',
    time: 1641247500000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T22:05:00.000Z'
  },
  {
    priceUsd: '46225.4878607628798543',
    time: 1641247800000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T22:10:00.000Z'
  },
  {
    priceUsd: '46280.0403065407231982',
    time: 1641248100000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T22:15:00.000Z'
  },
  {
    priceUsd: '46290.4291714952400457',
    time: 1641248400000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T22:20:00.000Z'
  },
  {
    priceUsd: '46339.8187584593479913',
    time: 1641248700000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T22:25:00.000Z'
  },
  {
    priceUsd: '46404.0479772090942776',
    time: 1641249000000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T22:30:00.000Z'
  },
  {
    priceUsd: '46431.8940837059529328',
    time: 1641249300000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T22:35:00.000Z'
  },
  {
    priceUsd: '46509.5219326765675984',
    time: 1641249600000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T22:40:00.000Z'
  },
  {
    priceUsd: '46408.9601458238980900',
    time: 1641249900000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T22:45:00.000Z'
  },
  {
    priceUsd: '46366.4803642470585759',
    time: 1641250200000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T22:50:00.000Z'
  },
  {
    priceUsd: '46337.1518144333848264',
    time: 1641250500000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T22:55:00.000Z'
  },
  {
    priceUsd: '46361.1022033497682981',
    time: 1641250800000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T23:00:00.000Z'
  },
  {
    priceUsd: '46384.7182735088937581',
    time: 1641251100000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T23:05:00.000Z'
  },
  {
    priceUsd: '46491.6937315168115163',
    time: 1641251400000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T23:10:00.000Z'
  },
  {
    priceUsd: '46554.6712965114082607',
    time: 1641251700000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T23:15:00.000Z'
  },
  {
    priceUsd: '46601.6100389229132243',
    time: 1641252000000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T23:20:00.000Z'
  },
  {
    priceUsd: '46570.3234224510570348',
    time: 1641252300000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T23:25:00.000Z'
  },
  {
    priceUsd: '46576.4185264528860590',
    time: 1641252600000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T23:30:00.000Z'
  },
  {
    priceUsd: '46620.2507826201995912',
    time: 1641252900000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T23:35:00.000Z'
  },
  {
    priceUsd: '46701.8227973583016414',
    time: 1641253200000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T23:40:00.000Z'
  },
  {
    priceUsd: '46701.0196146537173981',
    time: 1641253500000,
    circulatingSupply: '18919087.0000000000000000',
    date: '2022-01-03T23:45:00.000Z'
  },
  {
    priceUsd: '46659.4954991691525731',
    time: 1641253800000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-03T23:50:00.000Z'
  },
  {
    priceUsd: '46628.8637500821147539',
    time: 1641254100000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-03T23:55:00.000Z'
  },
  {
    priceUsd: '46609.8609396703682647',
    time: 1641254400000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T00:00:00.000Z'
  },
  {
    priceUsd: '46628.9169104087127179',
    time: 1641254700000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T00:05:00.000Z'
  },
  {
    priceUsd: '46636.8448658411425843',
    time: 1641255000000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T00:10:00.000Z'
  },
  {
    priceUsd: '46584.0127233332528445',
    time: 1641255300000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T00:15:00.000Z'
  },
  {
    priceUsd: '46500.8313560926969044',
    time: 1641255600000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T00:20:00.000Z'
  },
  {
    priceUsd: '46452.5983370434229157',
    time: 1641255900000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T00:25:00.000Z'
  },
  {
    priceUsd: '46571.5496676636360988',
    time: 1641256200000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T00:30:00.000Z'
  },
  {
    priceUsd: '46583.0551689490627304',
    time: 1641256500000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T00:35:00.000Z'
  },
  {
    priceUsd: '46548.2870885592617889',
    time: 1641256800000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T00:40:00.000Z'
  },
  {
    priceUsd: '46493.0958251253730364',
    time: 1641257100000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T00:45:00.000Z'
  },
  {
    priceUsd: '46467.2439325827683150',
    time: 1641257400000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T00:50:00.000Z'
  },
  {
    priceUsd: '46428.6350502180758767',
    time: 1641257700000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T00:55:00.000Z'
  },
  {
    priceUsd: '46411.2482485396723868',
    time: 1641258000000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T01:00:00.000Z'
  },
  {
    priceUsd: '46392.1471794932313247',
    time: 1641258300000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T01:05:00.000Z'
  },
  {
    priceUsd: '46419.8955499340404191',
    time: 1641258600000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T01:10:00.000Z'
  },
  {
    priceUsd: '46439.5225324206754953',
    time: 1641258900000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T01:15:00.000Z'
  },
  {
    priceUsd: '46530.9070980576457835',
    time: 1641259200000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T01:20:00.000Z'
  },
  {
    priceUsd: '46498.9960742157051044',
    time: 1641259500000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T01:25:00.000Z'
  },
  {
    priceUsd: '46510.5945722046419710',
    time: 1641259800000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T01:30:00.000Z'
  },
  {
    priceUsd: '46455.8706354432252583',
    time: 1641260100000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T01:35:00.000Z'
  },
  {
    priceUsd: '46433.7575788494396911',
    time: 1641260400000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T01:40:00.000Z'
  },
  {
    priceUsd: '46368.4408757763479550',
    time: 1641260700000,
    circulatingSupply: '18919118.0000000000000000',
    date: '2022-01-04T01:45:00.000Z'
  },
  {
    priceUsd: '46308.6870687529434140',
    time: 1641261000000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T01:50:00.000Z'
  },
  {
    priceUsd: '46300.7996101576641789',
    time: 1641261300000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T01:55:00.000Z'
  },
  {
    priceUsd: '46282.0951251765235018',
    time: 1641261600000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T02:00:00.000Z'
  },
  {
    priceUsd: '46294.5609532829647156',
    time: 1641261900000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T02:05:00.000Z'
  },
  {
    priceUsd: '46305.6666282837267338',
    time: 1641262200000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T02:10:00.000Z'
  },
  {
    priceUsd: '46245.7810939679201352',
    time: 1641262500000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T02:15:00.000Z'
  },
  {
    priceUsd: '46265.4108249405329715',
    time: 1641262800000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T02:20:00.000Z'
  },
  {
    priceUsd: '46319.6272122774046634',
    time: 1641263100000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T02:25:00.000Z'
  },
  {
    priceUsd: '46354.6452105330306364',
    time: 1641263400000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T02:30:00.000Z'
  },
  {
    priceUsd: '46379.4626142065385255',
    time: 1641263700000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T02:35:00.000Z'
  },
  {
    priceUsd: '46339.8838675546350238',
    time: 1641264000000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T02:40:00.000Z'
  },
  {
    priceUsd: '46419.3999109072539017',
    time: 1641264300000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T02:45:00.000Z'
  },
  {
    priceUsd: '46403.5957089633625085',
    time: 1641264600000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T02:50:00.000Z'
  },
  {
    priceUsd: '46340.5274559371662436',
    time: 1641264900000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T02:55:00.000Z'
  },
  {
    priceUsd: '46329.4387085738722938',
    time: 1641265200000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T03:00:00.000Z'
  },
  {
    priceUsd: '46313.0135573056943441',
    time: 1641265500000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T03:05:00.000Z'
  },
  {
    priceUsd: '46309.4351134034313821',
    time: 1641265800000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T03:10:00.000Z'
  },
  {
    priceUsd: '46274.9151883715380950',
    time: 1641266100000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T03:15:00.000Z'
  },
  {
    priceUsd: '46321.4444728659571747',
    time: 1641266400000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T03:20:00.000Z'
  },
  {
    priceUsd: '46380.5077855230291707',
    time: 1641266700000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T03:25:00.000Z'
  },
  {
    priceUsd: '46408.9784590549837564',
    time: 1641267000000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T03:30:00.000Z'
  },
  {
    priceUsd: '46461.2137828398648459',
    time: 1641267300000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T03:35:00.000Z'
  },
  {
    priceUsd: '46491.0589543486781003',
    time: 1641267600000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T03:40:00.000Z'
  },
  {
    priceUsd: '46521.0684509488939265',
    time: 1641267900000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T03:45:00.000Z'
  },
  {
    priceUsd: '46544.4762315642746457',
    time: 1641268200000,
    circulatingSupply: '18919193.0000000000000000',
    date: '2022-01-04T03:50:00.000Z'
  },
  {
    priceUsd: '46570.9635948928680544',
    time: 1641268500000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T03:55:00.000Z'
  },
  {
    priceUsd: '46558.6548949134942143',
    time: 1641268800000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T04:00:00.000Z'
  },
  {
    priceUsd: '46572.0787446973773482',
    time: 1641269100000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T04:05:00.000Z'
  },
  {
    priceUsd: '46465.5111568207058081',
    time: 1641269400000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T04:10:00.000Z'
  },
  {
    priceUsd: '46447.1953150427627181',
    time: 1641269700000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T04:15:00.000Z'
  },
  {
    priceUsd: '46464.4985102318037925',
    time: 1641270000000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T04:20:00.000Z'
  },
  {
    priceUsd: '46483.7623155694327778',
    time: 1641270300000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T04:25:00.000Z'
  },
  {
    priceUsd: '46502.4761804814781386',
    time: 1641270600000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T04:30:00.000Z'
  },
  {
    priceUsd: '46571.4237137443229720',
    time: 1641270900000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T04:35:00.000Z'
  },
  {
    priceUsd: '46516.9718844573321123',
    time: 1641271200000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T04:40:00.000Z'
  },
  {
    priceUsd: '46345.6110466509073186',
    time: 1641271500000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T04:45:00.000Z'
  },
  {
    priceUsd: '46337.7240797449350000',
    time: 1641271800000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T04:50:00.000Z'
  },
  {
    priceUsd: '46316.5515033619779056',
    time: 1641272100000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T04:55:00.000Z'
  },
  {
    priceUsd: '46308.2886536443829778',
    time: 1641272400000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T05:00:00.000Z'
  },
  {
    priceUsd: '46280.9750711805097309',
    time: 1641272700000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T05:05:00.000Z'
  },
  {
    priceUsd: '46335.2269951917289762',
    time: 1641273000000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T05:10:00.000Z'
  },
  {
    priceUsd: '46344.4650688465812186',
    time: 1641273300000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T05:15:00.000Z'
  },
  {
    priceUsd: '46347.1640281848402608',
    time: 1641273600000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T05:20:00.000Z'
  },
  {
    priceUsd: '46377.7495546784330927',
    time: 1641273900000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T05:25:00.000Z'
  },
  {
    priceUsd: '46432.4480068329677444',
    time: 1641274200000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T05:30:00.000Z'
  },
  {
    priceUsd: '46400.2585087194433779',
    time: 1641274500000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T05:35:00.000Z'
  },
  {
    priceUsd: '46334.7524148736817254',
    time: 1641274800000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T05:40:00.000Z'
  },
  {
    priceUsd: '46322.9708350575575634',
    time: 1641275100000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T05:45:00.000Z'
  },
  {
    priceUsd: '46278.8717086816154323',
    time: 1641275400000,
    circulatingSupply: '18919250.0000000000000000',
    date: '2022-01-04T05:50:00.000Z'
  },
  {
    priceUsd: '46314.4313738194258120',
    time: 1641275700000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T05:55:00.000Z'
  },
  {
    priceUsd: '46344.7944298014766966',
    time: 1641276000000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T06:00:00.000Z'
  },
  {
    priceUsd: '46390.7948297156096197',
    time: 1641276300000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T06:05:00.000Z'
  },
  {
    priceUsd: '46438.2973457756693598',
    time: 1641276600000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T06:10:00.000Z'
  },
  {
    priceUsd: '46400.8912114552829585',
    time: 1641276900000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T06:15:00.000Z'
  },
  {
    priceUsd: '46352.8153355134182183',
    time: 1641277200000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T06:20:00.000Z'
  },
  {
    priceUsd: '46367.5833425458089855',
    time: 1641277500000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T06:25:00.000Z'
  },
  {
    priceUsd: '46413.8879808088765348',
    time: 1641277800000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T06:30:00.000Z'
  },
  {
    priceUsd: '46446.0414010266111624',
    time: 1641278100000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T06:35:00.000Z'
  },
  {
    priceUsd: '46468.0947148152040359',
    time: 1641278400000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T06:40:00.000Z'
  },
  {
    priceUsd: '46485.6964052674490967',
    time: 1641278700000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T06:45:00.000Z'
  },
  {
    priceUsd: '46465.6034447946883805',
    time: 1641279000000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T06:50:00.000Z'
  },
  {
    priceUsd: '46480.8777917292286594',
    time: 1641279300000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T06:55:00.000Z'
  },
  {
    priceUsd: '46502.7395349222117104',
    time: 1641279600000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T07:00:00.000Z'
  },
  {
    priceUsd: '46561.0339785639906894',
    time: 1641279900000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T07:05:00.000Z'
  },
  {
    priceUsd: '46533.7587601558439244',
    time: 1641280200000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T07:10:00.000Z'
  },
  {
    priceUsd: '46499.2576114861247550',
    time: 1641280500000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T07:15:00.000Z'
  },
  {
    priceUsd: '46517.1279209615137727',
    time: 1641280800000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T07:20:00.000Z'
  },
  {
    priceUsd: '46503.8706356312364810',
    time: 1641281100000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T07:25:00.000Z'
  },
  {
    priceUsd: '46588.7948990164314537',
    time: 1641281400000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T07:30:00.000Z'
  },
  {
    priceUsd: '46601.4027919353719019',
    time: 1641281700000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T07:35:00.000Z'
  },
  {
    priceUsd: '46614.5127496500993921',
    time: 1641282000000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T07:40:00.000Z'
  },
  {
    priceUsd: '46634.0095958108580033',
    time: 1641282300000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T07:45:00.000Z'
  },
  {
    priceUsd: '46598.2043936817562286',
    time: 1641282600000,
    circulatingSupply: '18919318.0000000000000000',
    date: '2022-01-04T07:50:00.000Z'
  },
  {
    priceUsd: '46630.3870499183622396',
    time: 1641282900000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T07:55:00.000Z'
  },
  {
    priceUsd: '46633.1305071557845910',
    time: 1641283200000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T08:00:00.000Z'
  },
  {
    priceUsd: '46636.2769081939890972',
    time: 1641283500000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T08:05:00.000Z'
  },
  {
    priceUsd: '46704.2693692103237338',
    time: 1641283800000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T08:10:00.000Z'
  },
  {
    priceUsd: '46758.7943538035955293',
    time: 1641284100000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T08:15:00.000Z'
  },
  {
    priceUsd: '46741.8728779256335490',
    time: 1641284400000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T08:20:00.000Z'
  },
  {
    priceUsd: '46709.2417394482297047',
    time: 1641284700000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T08:25:00.000Z'
  },
  {
    priceUsd: '46692.8067115604176585',
    time: 1641285000000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T08:30:00.000Z'
  },
  {
    priceUsd: '46691.8622503678084800',
    time: 1641285300000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T08:35:00.000Z'
  },
  {
    priceUsd: '46733.9324179920828804',
    time: 1641285600000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T08:40:00.000Z'
  },
  {
    priceUsd: '46703.7213630270868480',
    time: 1641285900000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T08:45:00.000Z'
  },
  {
    priceUsd: '46639.5760014719290251',
    time: 1641286200000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T08:50:00.000Z'
  },
  {
    priceUsd: '46632.1874153999508609',
    time: 1641286500000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T08:55:00.000Z'
  },
  {
    priceUsd: '46633.1636582511808617',
    time: 1641286800000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T09:00:00.000Z'
  },
  {
    priceUsd: '46646.0594152059151664',
    time: 1641287100000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T09:05:00.000Z'
  },
  {
    priceUsd: '46709.3662968063693944',
    time: 1641287400000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T09:10:00.000Z'
  },
  {
    priceUsd: '46704.5073819475601855',
    time: 1641287700000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T09:15:00.000Z'
  },
  {
    priceUsd: '46649.4530405193433964',
    time: 1641288000000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T09:20:00.000Z'
  },
  {
    priceUsd: '46592.1285063874120687',
    time: 1641288300000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T09:25:00.000Z'
  },
  {
    priceUsd: '46559.3434689240252033',
    time: 1641288600000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T09:30:00.000Z'
  },
  {
    priceUsd: '46490.4921406354504383',
    time: 1641288900000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T09:35:00.000Z'
  },
  {
    priceUsd: '46493.4837942644286942',
    time: 1641289200000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T09:40:00.000Z'
  },
  {
    priceUsd: '46482.7961933619980764',
    time: 1641289500000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T09:45:00.000Z'
  },
  {
    priceUsd: '46457.1389538717562418',
    time: 1641289800000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T09:50:00.000Z'
  },
  {
    priceUsd: '46456.8653948886381352',
    time: 1641290100000,
    circulatingSupply: '18919400.0000000000000000',
    date: '2022-01-04T09:55:00.000Z'
  },
  {
    priceUsd: '46458.2154527739489823',
    time: 1641290400000,
    circulatingSupply: '18919506.0000000000000000',
    date: '2022-01-04T10:00:00.000Z'
  },
  {
    priceUsd: '46477.9230748883205090',
    time: 1641290700000,
    circulatingSupply: '18919506.0000000000000000',
    date: '2022-01-04T10:05:00.000Z'
  },
  {
    priceUsd: '46447.7724943329254248',
    time: 1641291000000,
    circulatingSupply: '18919506.0000000000000000',
    date: '2022-01-04T10:10:00.000Z'
  },
  {
    priceUsd: '46459.8168423709302937',
    time: 1641291300000,
    circulatingSupply: '18919506.0000000000000000',
    date: '2022-01-04T10:15:00.000Z'
  },
  {
    priceUsd: '46529.3783619946125497',
    time: 1641291600000,
    circulatingSupply: '18919506.0000000000000000',
    date: '2022-01-04T10:20:00.000Z'
  },
  {
    priceUsd: '46542.4419680361960124',
    time: 1641291900000,
    circulatingSupply: '18919506.0000000000000000',
    date: '2022-01-04T10:25:00.000Z'
  },
  {
    priceUsd: '46616.5093978887115506',
    time: 1641292200000,
    circulatingSupply: '18919506.0000000000000000',
    date: '2022-01-04T10:30:00.000Z'
  },
  {
    priceUsd: '46661.7019086910207582',
    time: 1641292500000,
    circulatingSupply: '18919506.0000000000000000',
    date: '2022-01-04T10:35:00.000Z'
  },
  {
    priceUsd: '46638.2989670139712867',
    time: 1641292800000,
    circulatingSupply: '18919506.0000000000000000',
    date: '2022-01-04T10:40:00.000Z'
  },
  {
    priceUsd: '46697.5231187380602255',
    time: 1641293100000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T10:45:00.000Z'
  },
  {
    priceUsd: '46744.7016005648026039',
    time: 1641293400000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T10:50:00.000Z'
  },
  {
    priceUsd: '46780.1225982955288462',
    time: 1641293700000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T10:55:00.000Z'
  },
  {
    priceUsd: '46777.5780285013332951',
    time: 1641294000000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T11:00:00.000Z'
  },
  {
    priceUsd: '46803.6336787839426300',
    time: 1641294300000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T11:05:00.000Z'
  },
  {
    priceUsd: '46805.9120731373905457',
    time: 1641294600000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T11:10:00.000Z'
  },
  {
    priceUsd: '46819.3159981910553792',
    time: 1641294900000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T11:15:00.000Z'
  },
  {
    priceUsd: '46828.0571222900521612',
    time: 1641295200000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T11:20:00.000Z'
  },
  {
    priceUsd: '46804.3831023821434169',
    time: 1641295500000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T11:25:00.000Z'
  },
  {
    priceUsd: '46792.5066807553588252',
    time: 1641295800000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T11:30:00.000Z'
  },
  {
    priceUsd: '46784.0526615798478752',
    time: 1641296100000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T11:35:00.000Z'
  },
  {
    priceUsd: '46828.9181407104730406',
    time: 1641296400000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T11:40:00.000Z'
  },
  {
    priceUsd: '46831.6705428654863161',
    time: 1641296700000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T11:45:00.000Z'
  },
  {
    priceUsd: '46810.5392844313333842',
    time: 1641297000000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T11:50:00.000Z'
  },
  {
    priceUsd: '46841.3133115536501476',
    time: 1641297300000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T11:55:00.000Z'
  },
  {
    priceUsd: '46841.4655143224679051',
    time: 1641297600000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T12:00:00.000Z'
  },
  {
    priceUsd: '46780.5872540714544069',
    time: 1641297900000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T12:05:00.000Z'
  },
  {
    priceUsd: '46752.4625494140636649',
    time: 1641298200000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T12:10:00.000Z'
  },
  {
    priceUsd: '46730.8287214734403536',
    time: 1641298500000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T12:15:00.000Z'
  },
  {
    priceUsd: '46717.8816067014538257',
    time: 1641298800000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T12:20:00.000Z'
  },
  {
    priceUsd: '46680.9254015043431746',
    time: 1641299100000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T12:25:00.000Z'
  },
  {
    priceUsd: '46652.3274182437164622',
    time: 1641299400000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T12:30:00.000Z'
  },
  {
    priceUsd: '46644.7701817730020824',
    time: 1641299700000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T12:35:00.000Z'
  },
  {
    priceUsd: '46633.7865516561500828',
    time: 1641300000000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T12:40:00.000Z'
  },
  {
    priceUsd: '46622.7345433454450710',
    time: 1641300300000,
    circulatingSupply: '18919593.0000000000000000',
    date: '2022-01-04T12:45:00.000Z'
  },
  {
    priceUsd: '46614.8312229718398016',
    time: 1641300600000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T12:50:00.000Z'
  },
  {
    priceUsd: '46630.4013738597550231',
    time: 1641300900000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T12:55:00.000Z'
  },
  {
    priceUsd: '46681.7399788049989666',
    time: 1641301200000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T13:00:00.000Z'
  },
  {
    priceUsd: '46665.8218182796393864',
    time: 1641301500000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T13:05:00.000Z'
  },
  {
    priceUsd: '46627.1603427845754766',
    time: 1641301800000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T13:10:00.000Z'
  },
  {
    priceUsd: '46560.7496208507694375',
    time: 1641302100000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T13:15:00.000Z'
  },
  {
    priceUsd: '46547.5862083205588653',
    time: 1641302400000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T13:20:00.000Z'
  },
  {
    priceUsd: '46595.9254331489792226',
    time: 1641302700000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T13:25:00.000Z'
  },
  {
    priceUsd: '46797.8569924777094780',
    time: 1641303000000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T13:30:00.000Z'
  },
  {
    priceUsd: '46774.4879999610821281',
    time: 1641303300000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T13:35:00.000Z'
  },
  {
    priceUsd: '46880.6778487505417831',
    time: 1641303600000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T13:40:00.000Z'
  },
  {
    priceUsd: '46858.3726799429517535',
    time: 1641303900000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T13:45:00.000Z'
  },
  {
    priceUsd: '46899.1026208982508482',
    time: 1641304200000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T13:50:00.000Z'
  },
  {
    priceUsd: '46962.7729618107058756',
    time: 1641304500000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T13:55:00.000Z'
  },
  {
    priceUsd: '46995.7157471818263633',
    time: 1641304800000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T14:00:00.000Z'
  },
  {
    priceUsd: '47064.6162121140747014',
    time: 1641305100000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T14:05:00.000Z'
  },
  {
    priceUsd: '46979.7845652083583034',
    time: 1641305400000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T14:10:00.000Z'
  },
  {
    priceUsd: '46964.9004798786814694',
    time: 1641305700000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T14:15:00.000Z'
  },
  {
    priceUsd: '46964.7037992212549930',
    time: 1641306000000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T14:20:00.000Z'
  },
  {
    priceUsd: '46937.0685543547441019',
    time: 1641306300000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T14:25:00.000Z'
  },
  {
    priceUsd: '46961.8555926906864371',
    time: 1641306600000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T14:30:00.000Z'
  },
  {
    priceUsd: '46997.4637540835908319',
    time: 1641306900000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T14:35:00.000Z'
  },
  {
    priceUsd: '47051.8518738954066344',
    time: 1641307200000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T14:40:00.000Z'
  },
  {
    priceUsd: '47087.8923342074110440',
    time: 1641307500000,
    circulatingSupply: '18919700.0000000000000000',
    date: '2022-01-04T14:45:00.000Z'
  },
  {
    priceUsd: '47291.6125741901627177',
    time: 1641307800000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T14:50:00.000Z'
  },
  {
    priceUsd: '47401.9107233163801485',
    time: 1641308100000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T14:55:00.000Z'
  },
  {
    priceUsd: '47413.0077743361268756',
    time: 1641308400000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T15:00:00.000Z'
  },
  {
    priceUsd: '47494.1867416471181898',
    time: 1641308700000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T15:05:00.000Z'
  },
  {
    priceUsd: '47458.7940856306863813',
    time: 1641309000000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T15:10:00.000Z'
  },
  {
    priceUsd: '47439.4321493252993521',
    time: 1641309300000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T15:15:00.000Z'
  },
  {
    priceUsd: '47393.4631383212159091',
    time: 1641309600000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T15:20:00.000Z'
  },
  {
    priceUsd: '47370.8830853760728992',
    time: 1641309900000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T15:25:00.000Z'
  },
  {
    priceUsd: '47371.4046465166918314',
    time: 1641310200000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T15:30:00.000Z'
  },
  {
    priceUsd: '47348.7983845778411684',
    time: 1641310500000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T15:35:00.000Z'
  },
  {
    priceUsd: '47268.7051298626849017',
    time: 1641310800000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T15:40:00.000Z'
  },
  {
    priceUsd: '47163.4601904878762281',
    time: 1641311100000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T15:45:00.000Z'
  },
  {
    priceUsd: '47202.7719395139871715',
    time: 1641311400000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T15:50:00.000Z'
  },
  {
    priceUsd: '47152.0842636671189178',
    time: 1641311700000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T15:55:00.000Z'
  },
  {
    priceUsd: '47009.6070836996320039',
    time: 1641312000000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T16:00:00.000Z'
  },
  {
    priceUsd: '46932.3630212883212092',
    time: 1641312300000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T16:05:00.000Z'
  },
  {
    priceUsd: '46886.4595288100359880',
    time: 1641312600000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T16:10:00.000Z'
  },
  {
    priceUsd: '46896.7854202679033349',
    time: 1641312900000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T16:15:00.000Z'
  },
  {
    priceUsd: '46879.2433774026704591',
    time: 1641313200000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T16:20:00.000Z'
  },
  {
    priceUsd: '46810.7915049673801218',
    time: 1641313500000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T16:25:00.000Z'
  },
  {
    priceUsd: '46753.5276649302989166',
    time: 1641313800000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T16:30:00.000Z'
  },
  {
    priceUsd: '46781.9547565030403054',
    time: 1641314100000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T16:35:00.000Z'
  },
  {
    priceUsd: '46824.5014591079268207',
    time: 1641314400000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T16:40:00.000Z'
  },
  {
    priceUsd: '46871.1628733626839749',
    time: 1641314700000,
    circulatingSupply: '18919787.0000000000000000',
    date: '2022-01-04T16:45:00.000Z'
  },
  {
    priceUsd: '46895.7140116518556844',
    time: 1641315000000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T16:50:00.000Z'
  },
  {
    priceUsd: '46928.8889643869137927',
    time: 1641315300000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T16:55:00.000Z'
  },
  {
    priceUsd: '46887.5005672280209692',
    time: 1641315600000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T17:00:00.000Z'
  },
  {
    priceUsd: '46873.3683796688554675',
    time: 1641315900000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T17:05:00.000Z'
  },
  {
    priceUsd: '46807.1398105996976117',
    time: 1641316200000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T17:10:00.000Z'
  },
  {
    priceUsd: '46853.5865089433978150',
    time: 1641316500000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T17:15:00.000Z'
  },
  {
    priceUsd: '46974.1443533080329689',
    time: 1641316800000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T17:20:00.000Z'
  },
  {
    priceUsd: '46932.3451928472305599',
    time: 1641317100000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T17:25:00.000Z'
  },
  {
    priceUsd: '46889.5391424295160244',
    time: 1641317400000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T17:30:00.000Z'
  },
  {
    priceUsd: '46892.7290503043952774',
    time: 1641317700000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T17:35:00.000Z'
  },
  {
    priceUsd: '46952.7556537005859072',
    time: 1641318000000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T17:40:00.000Z'
  },
  {
    priceUsd: '46952.1006750379887095',
    time: 1641318300000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T17:45:00.000Z'
  },
  {
    priceUsd: '46909.3301047113177793',
    time: 1641318600000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T17:50:00.000Z'
  },
  {
    priceUsd: '46847.0236801055594417',
    time: 1641318900000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T17:55:00.000Z'
  },
  {
    priceUsd: '46708.5023083437450414',
    time: 1641319200000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T18:00:00.000Z'
  },
  {
    priceUsd: '46695.6901473094245376',
    time: 1641319500000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T18:05:00.000Z'
  },
  {
    priceUsd: '46719.2207033558917942',
    time: 1641319800000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T18:10:00.000Z'
  },
  {
    priceUsd: '46738.2961197937762650',
    time: 1641320100000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T18:15:00.000Z'
  },
  {
    priceUsd: '46719.1877932072238301',
    time: 1641320400000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T18:20:00.000Z'
  },
  {
    priceUsd: '46696.8016799479644007',
    time: 1641320700000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T18:25:00.000Z'
  },
  {
    priceUsd: '46603.1398522768443650',
    time: 1641321000000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T18:30:00.000Z'
  },
  {
    priceUsd: '46403.8838211187325966',
    time: 1641321300000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T18:35:00.000Z'
  },
  {
    priceUsd: '46080.0984888558953628',
    time: 1641321600000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T18:40:00.000Z'
  },
  {
    priceUsd: '46078.3736449589932755',
    time: 1641321900000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T18:45:00.000Z'
  },
  {
    priceUsd: '45978.5073622035760390',
    time: 1641322200000,
    circulatingSupply: '18919868.0000000000000000',
    date: '2022-01-04T18:50:00.000Z'
  },
  {
    priceUsd: '45872.5319789880738030',
    time: 1641322500000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T18:55:00.000Z'
  },
  {
    priceUsd: '45834.9212769212354073',
    time: 1641322800000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T19:00:00.000Z'
  },
  {
    priceUsd: '45883.4659622683657863',
    time: 1641323100000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T19:05:00.000Z'
  },
  {
    priceUsd: '46157.8461687208625782',
    time: 1641323400000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T19:10:00.000Z'
  },
  {
    priceUsd: '46294.9667423956994393',
    time: 1641323700000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T19:15:00.000Z'
  },
  {
    priceUsd: '46328.1830179441059136',
    time: 1641324000000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T19:20:00.000Z'
  },
  {
    priceUsd: '46327.4952269265347197',
    time: 1641324300000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T19:25:00.000Z'
  },
  {
    priceUsd: '46284.9978006611130733',
    time: 1641324600000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T19:30:00.000Z'
  },
  {
    priceUsd: '46312.0116930850423361',
    time: 1641324900000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T19:35:00.000Z'
  },
  {
    priceUsd: '46214.8245966060711362',
    time: 1641325200000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T19:40:00.000Z'
  },
  {
    priceUsd: '46199.0328940455860635',
    time: 1641325500000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T19:45:00.000Z'
  },
  {
    priceUsd: '46180.5634513655070975',
    time: 1641325800000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T19:50:00.000Z'
  },
  {
    priceUsd: '46144.3848817394848681',
    time: 1641326100000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T19:55:00.000Z'
  },
  {
    priceUsd: '46101.9879681406950244',
    time: 1641326400000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T20:00:00.000Z'
  },
  {
    priceUsd: '46080.4263920280262728',
    time: 1641326700000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T20:05:00.000Z'
  },
  {
    priceUsd: '46103.3881573807176850',
    time: 1641327000000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T20:10:00.000Z'
  },
  {
    priceUsd: '46207.0467149807997453',
    time: 1641327300000,
    circulatingSupply: '18919925.0000000000000000',
    date: '2022-01-04T20:15:00.000Z'
  },
  {
    priceUsd: '46308.0084497624568106',
    time: 1641327600000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T20:20:00.000Z'
  },
  {
    priceUsd: '46337.5319539185245739',
    time: 1641327900000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T20:25:00.000Z'
  },
  {
    priceUsd: '46417.1590213158899874',
    time: 1641328200000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T20:30:00.000Z'
  },
  {
    priceUsd: '46444.2831288426350899',
    time: 1641328500000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T20:35:00.000Z'
  },
  {
    priceUsd: '46411.0678650472767835',
    time: 1641328800000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T20:40:00.000Z'
  },
  {
    priceUsd: '46408.5478758929289445',
    time: 1641329100000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T20:45:00.000Z'
  },
  {
    priceUsd: '46409.8483220744687146',
    time: 1641329400000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T20:50:00.000Z'
  },
  {
    priceUsd: '46391.5969501975983080',
    time: 1641329700000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T20:55:00.000Z'
  },
  {
    priceUsd: '46359.8509143459398079',
    time: 1641330000000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T21:00:00.000Z'
  },
  {
    priceUsd: '46326.5974201780171711',
    time: 1641330300000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T21:05:00.000Z'
  },
  {
    priceUsd: '46322.1477866274032043',
    time: 1641330600000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T21:10:00.000Z'
  },
  {
    priceUsd: '46311.6812341927584090',
    time: 1641330900000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T21:15:00.000Z'
  },
  {
    priceUsd: '46156.2699677834747302',
    time: 1641331200000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T21:20:00.000Z'
  },
  {
    priceUsd: '46205.9160923437603415',
    time: 1641331500000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T21:25:00.000Z'
  },
  {
    priceUsd: '46242.4790083590626654',
    time: 1641331800000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T21:30:00.000Z'
  },
  {
    priceUsd: '46247.2738318836654201',
    time: 1641332100000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T21:35:00.000Z'
  },
  {
    priceUsd: '46262.0594427012461414',
    time: 1641332400000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T21:40:00.000Z'
  },
  {
    priceUsd: '46314.2717135424435970',
    time: 1641332700000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T21:45:00.000Z'
  },
  {
    priceUsd: '46301.8076399943800521',
    time: 1641333000000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T21:50:00.000Z'
  },
  {
    priceUsd: '46284.0861008418071268',
    time: 1641333300000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T21:55:00.000Z'
  },
  {
    priceUsd: '46336.3428623122833385',
    time: 1641333600000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T22:00:00.000Z'
  },
  {
    priceUsd: '46245.6769332236899570',
    time: 1641333900000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T22:05:00.000Z'
  },
  {
    priceUsd: '46233.4741481264603250',
    time: 1641334200000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T22:10:00.000Z'
  },
  {
    priceUsd: '46216.0160854943526977',
    time: 1641334500000,
    circulatingSupply: '18919987.0000000000000000',
    date: '2022-01-04T22:15:00.000Z'
  },
  {
    priceUsd: '46228.7989775535331248',
    time: 1641334800000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T22:20:00.000Z'
  },
  {
    priceUsd: '46216.2128604085382090',
    time: 1641335100000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T22:25:00.000Z'
  },
  {
    priceUsd: '46186.8912457422227359',
    time: 1641335400000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T22:30:00.000Z'
  },
  {
    priceUsd: '46260.0364056593239976',
    time: 1641335700000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T22:35:00.000Z'
  },
  {
    priceUsd: '46290.7690812246211048',
    time: 1641336000000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T22:40:00.000Z'
  },
  {
    priceUsd: '46302.7262533829183066',
    time: 1641336300000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T22:45:00.000Z'
  },
  {
    priceUsd: '46268.9780974457514739',
    time: 1641336600000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T22:50:00.000Z'
  },
  {
    priceUsd: '46228.7443146563789804',
    time: 1641336900000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T22:55:00.000Z'
  },
  {
    priceUsd: '46193.1165986827996206',
    time: 1641337200000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T23:00:00.000Z'
  },
  {
    priceUsd: '46205.7842640117075856',
    time: 1641337500000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T23:05:00.000Z'
  },
  {
    priceUsd: '46134.2779834881319109',
    time: 1641337800000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T23:10:00.000Z'
  },
  {
    priceUsd: '46075.7034617280130830',
    time: 1641338100000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T23:15:00.000Z'
  },
  {
    priceUsd: '46034.1578403785075741',
    time: 1641338400000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T23:20:00.000Z'
  },
  {
    priceUsd: '46020.8152709242991002',
    time: 1641338700000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T23:25:00.000Z'
  },
  {
    priceUsd: '46097.2251079229755057',
    time: 1641339000000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T23:30:00.000Z'
  },
  {
    priceUsd: '46073.5013825237843884',
    time: 1641339300000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T23:35:00.000Z'
  },
  {
    priceUsd: '46051.0663333095733552',
    time: 1641339600000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T23:40:00.000Z'
  },
  {
    priceUsd: '45918.2666447437778088',
    time: 1641339900000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T23:45:00.000Z'
  },
  {
    priceUsd: '45992.1265885464040474',
    time: 1641340200000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T23:50:00.000Z'
  },
  {
    priceUsd: '46001.5961641566942444',
    time: 1641340500000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-04T23:55:00.000Z'
  },
  {
    priceUsd: '45959.6495976713446260',
    time: 1641340800000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-05T00:00:00.000Z'
  },
  {
    priceUsd: '45882.2535695462299988',
    time: 1641341100000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-05T00:05:00.000Z'
  },
  {
    priceUsd: '45990.4214606078071003',
    time: 1641341400000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-05T00:10:00.000Z'
  },
  {
    priceUsd: '46085.0191032788282934',
    time: 1641341700000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-05T00:15:00.000Z'
  },
  {
    priceUsd: '46150.0839220362373817',
    time: 1641342000000,
    circulatingSupply: '18920025.0000000000000000',
    date: '2022-01-05T00:20:00.000Z'
  },
  {
    priceUsd: '46158.0748613830231894',
    time: 1641342300000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T00:25:00.000Z'
  },
  {
    priceUsd: '46117.6144517716162346',
    time: 1641342600000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T00:30:00.000Z'
  },
  {
    priceUsd: '46208.5942523019276499',
    time: 1641342900000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T00:35:00.000Z'
  },
  {
    priceUsd: '46252.2821988239474094',
    time: 1641343200000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T00:40:00.000Z'
  },
  {
    priceUsd: '46263.1073305718282436',
    time: 1641343500000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T00:45:00.000Z'
  },
  {
    priceUsd: '46258.9583585019120323',
    time: 1641343800000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T00:50:00.000Z'
  },
  {
    priceUsd: '46265.2739895745622487',
    time: 1641344100000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T00:55:00.000Z'
  },
  {
    priceUsd: '46332.3756141400969159',
    time: 1641344400000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T01:00:00.000Z'
  },
  {
    priceUsd: '46326.3190649161007174',
    time: 1641344700000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T01:05:00.000Z'
  },
  {
    priceUsd: '46340.7058017326184844',
    time: 1641345000000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T01:10:00.000Z'
  },
  {
    priceUsd: '46359.0773682562831850',
    time: 1641345300000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T01:15:00.000Z'
  },
  {
    priceUsd: '46375.1293031559632905',
    time: 1641345600000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T01:20:00.000Z'
  },
  {
    priceUsd: '46358.5486598756154577',
    time: 1641345900000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T01:25:00.000Z'
  },
  {
    priceUsd: '46293.0675881138177170',
    time: 1641346200000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T01:30:00.000Z'
  },
  {
    priceUsd: '46273.8330079763649297',
    time: 1641346500000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T01:35:00.000Z'
  },
  {
    priceUsd: '46261.4676583104235541',
    time: 1641346800000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T01:40:00.000Z'
  },
  {
    priceUsd: '46313.9690527299776083',
    time: 1641347100000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T01:45:00.000Z'
  },
  {
    priceUsd: '46262.7943313187597082',
    time: 1641347400000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T01:50:00.000Z'
  },
  {
    priceUsd: '46264.4768232035547837',
    time: 1641347700000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T01:55:00.000Z'
  },
  {
    priceUsd: '46216.5844722622124546',
    time: 1641348000000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T02:00:00.000Z'
  },
  {
    priceUsd: '46258.7044230306822975',
    time: 1641348300000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T02:05:00.000Z'
  },
  {
    priceUsd: '46270.2557485342687231',
    time: 1641348600000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T02:10:00.000Z'
  },
  {
    priceUsd: '46282.7071760813514753',
    time: 1641348900000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T02:15:00.000Z'
  },
  {
    priceUsd: '46362.0566411442667066',
    time: 1641349200000,
    circulatingSupply: '18920106.0000000000000000',
    date: '2022-01-05T02:20:00.000Z'
  },
  {
    priceUsd: '46345.4035412064838494',
    time: 1641349500000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T02:25:00.000Z'
  },
  {
    priceUsd: '46332.6746249415502386',
    time: 1641349800000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T02:30:00.000Z'
  },
  {
    priceUsd: '46352.7100778692773156',
    time: 1641350100000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T02:35:00.000Z'
  },
  {
    priceUsd: '46371.7524774976879388',
    time: 1641350400000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T02:40:00.000Z'
  },
  {
    priceUsd: '46421.4264490667581136',
    time: 1641350700000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T02:45:00.000Z'
  },
  {
    priceUsd: '46409.9111744138688715',
    time: 1641351000000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T02:50:00.000Z'
  },
  {
    priceUsd: '46400.0537173638482342',
    time: 1641351300000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T02:55:00.000Z'
  },
  {
    priceUsd: '46366.9670665226138915',
    time: 1641351600000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T03:00:00.000Z'
  },
  {
    priceUsd: '46396.6187988669816293',
    time: 1641351900000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T03:05:00.000Z'
  },
  {
    priceUsd: '46399.4529738426844437',
    time: 1641352200000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T03:10:00.000Z'
  },
  {
    priceUsd: '46489.4089931240673371',
    time: 1641352500000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T03:15:00.000Z'
  },
  {
    priceUsd: '46533.5344029933614048',
    time: 1641352800000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T03:20:00.000Z'
  },
  {
    priceUsd: '46514.6342494903099217',
    time: 1641353100000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T03:25:00.000Z'
  },
  {
    priceUsd: '46466.0967350757933545',
    time: 1641353400000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T03:30:00.000Z'
  },
  {
    priceUsd: '46457.4640012579536244',
    time: 1641353700000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T03:35:00.000Z'
  },
  {
    priceUsd: '46460.8369660262662326',
    time: 1641354000000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T03:40:00.000Z'
  },
  {
    priceUsd: '46447.5521338123257742',
    time: 1641354300000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T03:45:00.000Z'
  },
  {
    priceUsd: '46491.1362302016646003',
    time: 1641354600000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T03:50:00.000Z'
  },
  {
    priceUsd: '46489.7803653845208456',
    time: 1641354900000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T03:55:00.000Z'
  },
  {
    priceUsd: '46464.1169829703916503',
    time: 1641355200000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T04:00:00.000Z'
  },
  {
    priceUsd: '46445.7475991707145116',
    time: 1641355500000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T04:05:00.000Z'
  },
  {
    priceUsd: '46448.1233644829145222',
    time: 1641355800000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T04:10:00.000Z'
  },
  {
    priceUsd: '46496.0707581537523849',
    time: 1641356100000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T04:15:00.000Z'
  },
  {
    priceUsd: '46526.0223095138126787',
    time: 1641356400000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T04:20:00.000Z'
  },
  {
    priceUsd: '46534.0749337092061951',
    time: 1641356700000,
    circulatingSupply: '18920181.0000000000000000',
    date: '2022-01-05T04:25:00.000Z'
  },
  {
    priceUsd: '46528.3908249038968832',
    time: 1641357000000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T04:30:00.000Z'
  },
  {
    priceUsd: '46480.2646352307694031',
    time: 1641357300000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T04:35:00.000Z'
  },
  {
    priceUsd: '46430.8802122662700539',
    time: 1641357600000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T04:40:00.000Z'
  },
  {
    priceUsd: '46449.9806386811288508',
    time: 1641357900000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T04:45:00.000Z'
  },
  {
    priceUsd: '46443.7300506275677455',
    time: 1641358200000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T04:50:00.000Z'
  },
  {
    priceUsd: '46452.5633496376739312',
    time: 1641358500000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T04:55:00.000Z'
  },
  {
    priceUsd: '46431.6661272487044346',
    time: 1641358800000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T05:00:00.000Z'
  },
  {
    priceUsd: '46420.6540586481785184',
    time: 1641359100000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T05:05:00.000Z'
  },
  {
    priceUsd: '46398.6006760165333468',
    time: 1641359400000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T05:10:00.000Z'
  },
  {
    priceUsd: '46364.9259333849650445',
    time: 1641359700000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T05:15:00.000Z'
  },
  {
    priceUsd: '46357.2425576917551933',
    time: 1641360000000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T05:20:00.000Z'
  },
  {
    priceUsd: '46336.6811167915124191',
    time: 1641360300000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T05:25:00.000Z'
  },
  {
    priceUsd: '46358.8968082123433990',
    time: 1641360600000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T05:30:00.000Z'
  },
  {
    priceUsd: '46354.8510959513748548',
    time: 1641360900000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T05:35:00.000Z'
  },
  {
    priceUsd: '46317.4447174836693605',
    time: 1641361200000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T05:40:00.000Z'
  },
  {
    priceUsd: '46313.2712135389661048',
    time: 1641361500000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T05:45:00.000Z'
  },
  {
    priceUsd: '46344.6764620453129228',
    time: 1641361800000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T05:50:00.000Z'
  },
  {
    priceUsd: '46354.6995145782547347',
    time: 1641362100000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T05:55:00.000Z'
  },
  {
    priceUsd: '46369.6862829199848256',
    time: 1641362400000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T06:00:00.000Z'
  },
  {
    priceUsd: '46339.5029868759163501',
    time: 1641362700000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T06:05:00.000Z'
  },
  {
    priceUsd: '46342.5431195894644089',
    time: 1641363000000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T06:10:00.000Z'
  },
  {
    priceUsd: '46418.0953048894009649',
    time: 1641363300000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T06:15:00.000Z'
  },
  {
    priceUsd: '46430.8051756838852785',
    time: 1641363600000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T06:20:00.000Z'
  },
  {
    priceUsd: '46409.3537554082579982',
    time: 1641363900000,
    circulatingSupply: '18920231.0000000000000000',
    date: '2022-01-05T06:25:00.000Z'
  },
  {
    priceUsd: '46393.0416670613011553',
    time: 1641364200000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T06:30:00.000Z'
  },
  {
    priceUsd: '46427.5239989358852795',
    time: 1641364500000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T06:35:00.000Z'
  },
  {
    priceUsd: '46472.2692158183155003',
    time: 1641364800000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T06:40:00.000Z'
  },
  {
    priceUsd: '46457.1324860108004188',
    time: 1641365100000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T06:45:00.000Z'
  },
  {
    priceUsd: '46477.5967585555648498',
    time: 1641365400000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T06:50:00.000Z'
  },
  {
    priceUsd: '46511.3564514834370530',
    time: 1641365700000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T06:55:00.000Z'
  },
  {
    priceUsd: '46534.2757398253932075',
    time: 1641366000000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T07:00:00.000Z'
  },
  {
    priceUsd: '46518.6343744878089116',
    time: 1641366300000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T07:05:00.000Z'
  },
  {
    priceUsd: '46514.6490785887014984',
    time: 1641366600000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T07:10:00.000Z'
  },
  {
    priceUsd: '46543.6417297692916932',
    time: 1641366900000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T07:15:00.000Z'
  },
  {
    priceUsd: '46514.7678009503791968',
    time: 1641367200000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T07:20:00.000Z'
  },
  {
    priceUsd: '46485.8211067736030584',
    time: 1641367500000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T07:25:00.000Z'
  },
  {
    priceUsd: '46462.7159974967295200',
    time: 1641367800000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T07:30:00.000Z'
  },
  {
    priceUsd: '46459.8396422330650193',
    time: 1641368100000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T07:35:00.000Z'
  },
  {
    priceUsd: '46441.0531427990180836',
    time: 1641368400000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T07:40:00.000Z'
  },
  {
    priceUsd: '46422.1652170491441754',
    time: 1641368700000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T07:45:00.000Z'
  },
  {
    priceUsd: '46434.7586713570519059',
    time: 1641369000000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T07:50:00.000Z'
  },
  {
    priceUsd: '46447.6261988970510114',
    time: 1641369300000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T07:55:00.000Z'
  },
  {
    priceUsd: '46469.7681595164344819',
    time: 1641369600000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T08:00:00.000Z'
  },
  {
    priceUsd: '46434.8657486434445134',
    time: 1641369900000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T08:05:00.000Z'
  },
  {
    priceUsd: '46402.1778949121823160',
    time: 1641370200000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T08:10:00.000Z'
  },
  {
    priceUsd: '46387.1182260007208036',
    time: 1641370500000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T08:15:00.000Z'
  },
  {
    priceUsd: '46388.2121332281563834',
    time: 1641370800000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T08:20:00.000Z'
  },
  {
    priceUsd: '46388.3143010337652369',
    time: 1641371100000,
    circulatingSupply: '18920325.0000000000000000',
    date: '2022-01-05T08:25:00.000Z'
  },
  {
    priceUsd: '46408.1338104002004493',
    time: 1641371400000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T08:30:00.000Z'
  },
  {
    priceUsd: '46408.5406368107629804',
    time: 1641371700000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T08:35:00.000Z'
  },
  {
    priceUsd: '46424.9142422565955007',
    time: 1641372000000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T08:40:00.000Z'
  },
  {
    priceUsd: '46520.6335035538225022',
    time: 1641372300000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T08:45:00.000Z'
  },
  {
    priceUsd: '46647.8015703564322667',
    time: 1641372600000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T08:50:00.000Z'
  },
  {
    priceUsd: '46689.3945414640638957',
    time: 1641372900000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T08:55:00.000Z'
  },
  {
    priceUsd: '46679.6975608649040014',
    time: 1641373200000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T09:00:00.000Z'
  },
  {
    priceUsd: '46686.5156922589774318',
    time: 1641373500000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T09:05:00.000Z'
  },
  {
    priceUsd: '46717.3056517249363390',
    time: 1641373800000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T09:10:00.000Z'
  },
  {
    priceUsd: '46721.9936994637416864',
    time: 1641374100000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T09:15:00.000Z'
  },
  {
    priceUsd: '46795.7734518906959491',
    time: 1641374400000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T09:20:00.000Z'
  },
  {
    priceUsd: '46866.8490045834376155',
    time: 1641374700000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T09:25:00.000Z'
  },
  {
    priceUsd: '46873.3851759330115383',
    time: 1641375000000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T09:30:00.000Z'
  },
  {
    priceUsd: '46870.1511510704055830',
    time: 1641375300000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T09:35:00.000Z'
  },
  {
    priceUsd: '46896.7750295549172057',
    time: 1641375600000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T09:40:00.000Z'
  },
  {
    priceUsd: '46973.6491789970624832',
    time: 1641375900000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T09:45:00.000Z'
  },
  {
    priceUsd: '46937.2706491611374936',
    time: 1641376200000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T09:50:00.000Z'
  },
  {
    priceUsd: '46916.0149722907416881',
    time: 1641376500000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T09:55:00.000Z'
  },
  {
    priceUsd: '46931.0604219335919985',
    time: 1641376800000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T10:00:00.000Z'
  },
  {
    priceUsd: '47016.1394464533745570',
    time: 1641377100000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T10:05:00.000Z'
  },
  {
    priceUsd: '47039.2360395718033080',
    time: 1641377400000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T10:10:00.000Z'
  },
  {
    priceUsd: '47015.9200633325443703',
    time: 1641377700000,
    circulatingSupply: '18920456.0000000000000000',
    date: '2022-01-05T10:15:00.000Z'
  },
  {
    priceUsd: '46906.8868847904955394',
    time: 1641378000000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T10:20:00.000Z'
  },
  {
    priceUsd: '46878.8225196865525333',
    time: 1641378300000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T10:25:00.000Z'
  },
  {
    priceUsd: '46870.2334345361722387',
    time: 1641378600000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T10:30:00.000Z'
  },
  {
    priceUsd: '46833.3066672596249033',
    time: 1641378900000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T10:35:00.000Z'
  },
  {
    priceUsd: '46791.0436522003587379',
    time: 1641379200000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T10:40:00.000Z'
  },
  {
    priceUsd: '46788.3809426974219968',
    time: 1641379500000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T10:45:00.000Z'
  },
  {
    priceUsd: '46781.3879030751094298',
    time: 1641379800000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T10:50:00.000Z'
  },
  {
    priceUsd: '46816.7712025993224242',
    time: 1641380100000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T10:55:00.000Z'
  },
  {
    priceUsd: '46847.8585581099178493',
    time: 1641380400000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T11:00:00.000Z'
  },
  {
    priceUsd: '46798.1835115391821705',
    time: 1641380700000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T11:05:00.000Z'
  },
  {
    priceUsd: '46801.0117639063707194',
    time: 1641381000000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T11:10:00.000Z'
  },
  {
    priceUsd: '46705.2351351731750296',
    time: 1641381300000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T11:15:00.000Z'
  },
  {
    priceUsd: '46703.1784263055234417',
    time: 1641381600000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T11:20:00.000Z'
  },
  {
    priceUsd: '46619.0611446739441012',
    time: 1641381900000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T11:25:00.000Z'
  },
  {
    priceUsd: '46601.9885684404911806',
    time: 1641382200000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T11:30:00.000Z'
  },
  {
    priceUsd: '46482.1850870161996147',
    time: 1641382500000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T11:35:00.000Z'
  },
  {
    priceUsd: '46362.4873101657602440',
    time: 1641382800000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T11:40:00.000Z'
  },
  {
    priceUsd: '46319.9506723706985595',
    time: 1641383100000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T11:45:00.000Z'
  },
  {
    priceUsd: '46341.5887273698998778',
    time: 1641383400000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T11:50:00.000Z'
  },
  {
    priceUsd: '46294.2035438725870142',
    time: 1641383700000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T11:55:00.000Z'
  },
  {
    priceUsd: '46306.0405920925646154',
    time: 1641384000000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T12:00:00.000Z'
  },
  {
    priceUsd: '46345.5916036654451463',
    time: 1641384300000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T12:05:00.000Z'
  },
  {
    priceUsd: '46267.0945736398105993',
    time: 1641384600000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T12:10:00.000Z'
  },
  {
    priceUsd: '46255.1311554471005106',
    time: 1641384900000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T12:15:00.000Z'
  },
  {
    priceUsd: '46256.5450275185668403',
    time: 1641385200000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T12:20:00.000Z'
  },
  {
    priceUsd: '46135.9711091367440929',
    time: 1641385500000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T12:25:00.000Z'
  },
  {
    priceUsd: '46202.1805635430949800',
    time: 1641385800000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T12:30:00.000Z'
  },
  {
    priceUsd: '46187.7016822221219454',
    time: 1641386100000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T12:35:00.000Z'
  },
  {
    priceUsd: '46153.6538421853660289',
    time: 1641386400000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T12:40:00.000Z'
  },
  {
    priceUsd: '46115.8265187367416835',
    time: 1641386700000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T12:45:00.000Z'
  },
  {
    priceUsd: '46069.1205644635895908',
    time: 1641387000000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T12:50:00.000Z'
  },
  {
    priceUsd: '46174.4173950376200463',
    time: 1641387300000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T12:55:00.000Z'
  },
  {
    priceUsd: '46258.0904521055324290',
    time: 1641387600000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T13:00:00.000Z'
  },
  {
    priceUsd: '46271.9812381709668673',
    time: 1641387900000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T13:05:00.000Z'
  },
  {
    priceUsd: '46235.5790818154796081',
    time: 1641388200000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T13:10:00.000Z'
  },
  {
    priceUsd: '46204.3860135667197150',
    time: 1641388500000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T13:15:00.000Z'
  },
  {
    priceUsd: '46312.4003792850170484',
    time: 1641388800000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T13:20:00.000Z'
  },
  {
    priceUsd: '46334.6045906154891520',
    time: 1641389100000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T13:25:00.000Z'
  },
  {
    priceUsd: '46417.0577226541511926',
    time: 1641389400000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T13:30:00.000Z'
  },
  {
    priceUsd: '46442.8831252197757768',
    time: 1641389700000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T13:35:00.000Z'
  },
  {
    priceUsd: '46483.5051404507618322',
    time: 1641390000000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T13:40:00.000Z'
  },
  {
    priceUsd: '46441.8642420663671765',
    time: 1641390300000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T13:45:00.000Z'
  },
  {
    priceUsd: '46412.0882670178664597',
    time: 1641390600000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T13:50:00.000Z'
  },
  {
    priceUsd: '46397.4192445097949307',
    time: 1641390900000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T13:55:00.000Z'
  },
  {
    priceUsd: '46443.8420898602774615',
    time: 1641391200000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T14:00:00.000Z'
  },
  {
    priceUsd: '46508.5841218439770116',
    time: 1641391500000,
    circulatingSupply: '18920518.0000000000000000',
    date: '2022-01-05T14:05:00.000Z'
  },
  {
    priceUsd: '46466.6663342208289987',
    time: 1641391800000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T14:10:00.000Z'
  },
  {
    priceUsd: '46490.8862880022732938',
    time: 1641392100000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T14:15:00.000Z'
  },
  {
    priceUsd: '46417.5690056370125937',
    time: 1641392400000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T14:20:00.000Z'
  },
  {
    priceUsd: '46409.3799906550254617',
    time: 1641392700000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T14:25:00.000Z'
  },
  {
    priceUsd: '46435.0324975545636284',
    time: 1641393000000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T14:30:00.000Z'
  },
  {
    priceUsd: '46368.4749382301970894',
    time: 1641393300000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T14:35:00.000Z'
  },
  {
    priceUsd: '46346.0108014885520109',
    time: 1641393600000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T14:40:00.000Z'
  },
  {
    priceUsd: '46414.7745483965499452',
    time: 1641393900000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T14:45:00.000Z'
  },
  {
    priceUsd: '46350.3468234005634003',
    time: 1641394200000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T14:50:00.000Z'
  },
  {
    priceUsd: '46572.5640387725326855',
    time: 1641394500000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T14:55:00.000Z'
  },
  {
    priceUsd: '46695.1808175774294722',
    time: 1641394800000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T15:00:00.000Z'
  },
  {
    priceUsd: '46779.0065604724360181',
    time: 1641395100000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T15:05:00.000Z'
  },
  {
    priceUsd: '46738.7025794191940745',
    time: 1641395400000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T15:10:00.000Z'
  },
  {
    priceUsd: '46644.8557038419240854',
    time: 1641395700000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T15:15:00.000Z'
  },
  {
    priceUsd: '46635.3370835567657522',
    time: 1641396000000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T15:20:00.000Z'
  },
  {
    priceUsd: '46661.8409874996281157',
    time: 1641396300000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T15:25:00.000Z'
  },
  {
    priceUsd: '46776.9248294559465447',
    time: 1641396600000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T15:30:00.000Z'
  },
  {
    priceUsd: '46710.5708574786713623',
    time: 1641396900000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T15:35:00.000Z'
  },
  {
    priceUsd: '46588.3981048358007854',
    time: 1641397200000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T15:40:00.000Z'
  },
  {
    priceUsd: '46583.8196702543612786',
    time: 1641397500000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T15:45:00.000Z'
  },
  {
    priceUsd: '46529.5208923740756710',
    time: 1641397800000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T15:50:00.000Z'
  },
  {
    priceUsd: '46581.4386534555695928',
    time: 1641398100000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T15:55:00.000Z'
  },
  {
    priceUsd: '46649.2980731923433915',
    time: 1641398400000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T16:00:00.000Z'
  },
  {
    priceUsd: '46632.0655896977240984',
    time: 1641398700000,
    circulatingSupply: '18920593.0000000000000000',
    date: '2022-01-05T16:05:00.000Z'
  },
  {
    priceUsd: '46524.9201835473926492',
    time: 1641399000000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T16:10:00.000Z'
  },
  {
    priceUsd: '46498.1317841523858548',
    time: 1641399300000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T16:15:00.000Z'
  },
  {
    priceUsd: '46524.8684097030107350',
    time: 1641399600000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T16:20:00.000Z'
  },
  {
    priceUsd: '46611.6067346933916755',
    time: 1641399900000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T16:25:00.000Z'
  },
  {
    priceUsd: '46670.2714249372739291',
    time: 1641400200000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T16:30:00.000Z'
  },
  {
    priceUsd: '46618.9256875574624265',
    time: 1641400500000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T16:35:00.000Z'
  },
  {
    priceUsd: '46531.6129705457930482',
    time: 1641400800000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T16:40:00.000Z'
  },
  {
    priceUsd: '46499.9378713511792013',
    time: 1641401100000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T16:45:00.000Z'
  },
  {
    priceUsd: '46420.2019426735495036',
    time: 1641401400000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T16:50:00.000Z'
  },
  {
    priceUsd: '46414.5202005014791468',
    time: 1641401700000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T16:55:00.000Z'
  },
  {
    priceUsd: '46381.5794641123137109',
    time: 1641402000000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T17:00:00.000Z'
  },
  {
    priceUsd: '46450.1574835513724834',
    time: 1641402300000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T17:05:00.000Z'
  },
  {
    priceUsd: '46465.5873772999457374',
    time: 1641402600000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T17:10:00.000Z'
  },
  {
    priceUsd: '46446.8970347338894997',
    time: 1641402900000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T17:15:00.000Z'
  },
  {
    priceUsd: '46373.2053675851126671',
    time: 1641403200000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T17:20:00.000Z'
  },
  {
    priceUsd: '46330.8278985361872731',
    time: 1641403500000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T17:25:00.000Z'
  },
  {
    priceUsd: '46386.2745204950888062',
    time: 1641403800000,
    circulatingSupply: '18920687.0000000000000000',
    date: '2022-01-05T17:30:00.000Z'
  },
  {
    priceUsd: '46341.9086869439002345',
    time: 1641404100000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T17:35:00.000Z'
  },
  {
    priceUsd: '46216.0205896628832681',
    time: 1641404400000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T17:40:00.000Z'
  },
  {
    priceUsd: '46198.7339872458573415',
    time: 1641404700000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T17:45:00.000Z'
  },
  {
    priceUsd: '46233.8962636481929401',
    time: 1641405000000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T17:50:00.000Z'
  },
  {
    priceUsd: '46202.3834979565625850',
    time: 1641405300000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T17:55:00.000Z'
  },
  {
    priceUsd: '46106.2168069109520922',
    time: 1641405600000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T18:00:00.000Z'
  },
  {
    priceUsd: '45914.3670413742839939',
    time: 1641405900000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T18:05:00.000Z'
  },
  {
    priceUsd: '45843.9044659063550472',
    time: 1641406200000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T18:10:00.000Z'
  },
  {
    priceUsd: '45818.6348401332555273',
    time: 1641406500000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T18:15:00.000Z'
  },
  {
    priceUsd: '45731.0600582172996526',
    time: 1641406800000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T18:20:00.000Z'
  },
  {
    priceUsd: '45871.7587814584211010',
    time: 1641407100000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T18:25:00.000Z'
  },
  {
    priceUsd: '45923.2860565510902557',
    time: 1641407400000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T18:30:00.000Z'
  },
  {
    priceUsd: '46010.0272793293409207',
    time: 1641407700000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T18:35:00.000Z'
  },
  {
    priceUsd: '45954.3723101202730689',
    time: 1641408000000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T18:40:00.000Z'
  },
  {
    priceUsd: '45974.3900520520782129',
    time: 1641408300000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T18:45:00.000Z'
  },
  {
    priceUsd: '46063.1313949652507394',
    time: 1641408600000,
    circulatingSupply: '18920743.0000000000000000',
    date: '2022-01-05T18:50:00.000Z'
  },
  {
    priceUsd: '46046.1685997583986398',
    time: 1641408900000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T18:55:00.000Z'
  },
  {
    priceUsd: '46018.5960502249703310',
    time: 1641409200000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T19:00:00.000Z'
  },
  {
    priceUsd: '45995.7799788700891023',
    time: 1641409500000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T19:05:00.000Z'
  },
  {
    priceUsd: '45956.2791548141650121',
    time: 1641409800000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T19:10:00.000Z'
  },
  {
    priceUsd: '45858.3787412092026058',
    time: 1641410100000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T19:15:00.000Z'
  },
  {
    priceUsd: '45843.7353088599074280',
    time: 1641410400000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T19:20:00.000Z'
  },
  {
    priceUsd: '45865.5907437729263782',
    time: 1641410700000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T19:25:00.000Z'
  },
  {
    priceUsd: '45959.9242870971692086',
    time: 1641411000000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T19:30:00.000Z'
  },
  {
    priceUsd: '45872.5379639309842139',
    time: 1641411300000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T19:35:00.000Z'
  },
  {
    priceUsd: '45816.6214520599287911',
    time: 1641411600000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T19:40:00.000Z'
  },
  {
    priceUsd: '45797.3576508518526368',
    time: 1641411900000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T19:45:00.000Z'
  },
  {
    priceUsd: '45335.3325262524731288',
    time: 1641412200000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T19:50:00.000Z'
  },
  {
    priceUsd: '45041.2917040089781989',
    time: 1641412500000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T19:55:00.000Z'
  },
  {
    priceUsd: '44979.0177285744741255',
    time: 1641412800000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T20:00:00.000Z'
  },
  {
    priceUsd: '44842.6944936459160247',
    time: 1641413100000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T20:05:00.000Z'
  },
  {
    priceUsd: '44522.1217937393097405',
    time: 1641413400000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T20:10:00.000Z'
  },
  {
    priceUsd: '44587.6440089380378761',
    time: 1641413700000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T20:15:00.000Z'
  },
  {
    priceUsd: '44442.1435391535816985',
    time: 1641414000000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T20:20:00.000Z'
  },
  {
    priceUsd: '44465.2062368193097866',
    time: 1641414300000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T20:25:00.000Z'
  },
  {
    priceUsd: '44326.6620183321193539',
    time: 1641414600000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T20:30:00.000Z'
  },
  {
    priceUsd: '44358.2723925256706507',
    time: 1641414900000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T20:35:00.000Z'
  },
  {
    priceUsd: '44390.6594419552961299',
    time: 1641415200000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T20:40:00.000Z'
  },
  {
    priceUsd: '44357.2779776960926490',
    time: 1641415500000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T20:45:00.000Z'
  },
  {
    priceUsd: '44316.8187148522806276',
    time: 1641415800000,
    circulatingSupply: '18920812.0000000000000000',
    date: '2022-01-05T20:50:00.000Z'
  },
  {
    priceUsd: '44284.9474695566207132',
    time: 1641416100000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T20:55:00.000Z'
  },
  {
    priceUsd: '44133.0707093008402531',
    time: 1641416400000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T21:00:00.000Z'
  },
  {
    priceUsd: '44205.9204454314450201',
    time: 1641416700000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T21:05:00.000Z'
  },
  {
    priceUsd: '44331.8702437232940969',
    time: 1641417000000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T21:10:00.000Z'
  },
  {
    priceUsd: '44282.4367158341319269',
    time: 1641417300000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T21:15:00.000Z'
  },
  {
    priceUsd: '44165.8673918515077065',
    time: 1641417600000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T21:20:00.000Z'
  },
  {
    priceUsd: '44125.8161921733633486',
    time: 1641417900000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T21:25:00.000Z'
  },
  {
    priceUsd: '44034.7548994214847781',
    time: 1641418200000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T21:30:00.000Z'
  },
  {
    priceUsd: '43892.0245365831722326',
    time: 1641418500000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T21:35:00.000Z'
  },
  {
    priceUsd: '43759.9599354336244033',
    time: 1641418800000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T21:40:00.000Z'
  },
  {
    priceUsd: '43787.4829758086717419',
    time: 1641419100000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T21:45:00.000Z'
  },
  {
    priceUsd: '43919.5679992625999069',
    time: 1641419400000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T21:50:00.000Z'
  },
  {
    priceUsd: '43879.7367983687215137',
    time: 1641419700000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T21:55:00.000Z'
  },
  {
    priceUsd: '43759.7339561142140439',
    time: 1641420000000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T22:00:00.000Z'
  },
  {
    priceUsd: '43745.0131649131303402',
    time: 1641420300000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T22:05:00.000Z'
  },
  {
    priceUsd: '43826.7264671507217707',
    time: 1641420600000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T22:10:00.000Z'
  },
  {
    priceUsd: '43517.9918594700728666',
    time: 1641420900000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T22:15:00.000Z'
  },
  {
    priceUsd: '43486.7940759175967557',
    time: 1641421200000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T22:20:00.000Z'
  },
  {
    priceUsd: '43400.9878717052923387',
    time: 1641421500000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T22:25:00.000Z'
  },
  {
    priceUsd: '43220.0432733674955938',
    time: 1641421800000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T22:30:00.000Z'
  },
  {
    priceUsd: '42843.2246818843662029',
    time: 1641422100000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T22:35:00.000Z'
  },
  {
    priceUsd: '43185.3217213605715289',
    time: 1641422400000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T22:40:00.000Z'
  },
  {
    priceUsd: '43376.5328428499906011',
    time: 1641422700000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T22:45:00.000Z'
  },
  {
    priceUsd: '43574.9956417484510716',
    time: 1641423000000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T22:50:00.000Z'
  },
  {
    priceUsd: '43537.4374079326875287',
    time: 1641423300000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T22:55:00.000Z'
  },
  {
    priceUsd: '43520.0713349829687633',
    time: 1641423600000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T23:00:00.000Z'
  },
  {
    priceUsd: '43516.6003928240909840',
    time: 1641423900000,
    circulatingSupply: '18920893.0000000000000000',
    date: '2022-01-05T23:05:00.000Z'
  },
  {
    priceUsd: '43444.6227496926346438',
    time: 1641424200000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-05T23:10:00.000Z'
  },
  {
    priceUsd: '43595.8894876422569959',
    time: 1641424500000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-05T23:15:00.000Z'
  },
  {
    priceUsd: '43669.3540361074004779',
    time: 1641424800000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-05T23:20:00.000Z'
  },
  {
    priceUsd: '43679.6010246920197305',
    time: 1641425100000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-05T23:25:00.000Z'
  },
  {
    priceUsd: '43732.0322094549770445',
    time: 1641425400000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-05T23:30:00.000Z'
  },
  {
    priceUsd: '43696.4974430178778699',
    time: 1641425700000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-05T23:35:00.000Z'
  },
  {
    priceUsd: '43622.1767969085018091',
    time: 1641426000000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-05T23:40:00.000Z'
  },
  {
    priceUsd: '43662.3803838395485562',
    time: 1641426300000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-05T23:45:00.000Z'
  },
  {
    priceUsd: '43753.5840504821223140',
    time: 1641426600000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-05T23:50:00.000Z'
  },
  {
    priceUsd: '43663.6328865882842417',
    time: 1641426900000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-05T23:55:00.000Z'
  },
  {
    priceUsd: '43597.7398951799389108',
    time: 1641427200000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T00:00:00.000Z'
  },
  {
    priceUsd: '43540.0964954052892695',
    time: 1641427500000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T00:05:00.000Z'
  },
  {
    priceUsd: '43597.1465473107694312',
    time: 1641427800000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T00:10:00.000Z'
  },
  {
    priceUsd: '43621.6229417525652692',
    time: 1641428100000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T00:15:00.000Z'
  },
  {
    priceUsd: '43646.1019123961844241',
    time: 1641428400000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T00:20:00.000Z'
  },
  {
    priceUsd: '43568.1584131892276226',
    time: 1641428700000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T00:25:00.000Z'
  },
  {
    priceUsd: '43627.1059708822811194',
    time: 1641429000000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T00:30:00.000Z'
  },
  {
    priceUsd: '43724.2468523491295792',
    time: 1641429300000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T00:35:00.000Z'
  },
  {
    priceUsd: '43782.4468388062431535',
    time: 1641429600000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T00:40:00.000Z'
  },
  {
    priceUsd: '43759.3875470991242265',
    time: 1641429900000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T00:45:00.000Z'
  },
  {
    priceUsd: '43721.1954599968554352',
    time: 1641430200000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T00:50:00.000Z'
  },
  {
    priceUsd: '43723.9797021484213086',
    time: 1641430500000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T00:55:00.000Z'
  },
  {
    priceUsd: '43752.5120030165128880',
    time: 1641430800000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T01:00:00.000Z'
  },
  {
    priceUsd: '43733.2010519734292285',
    time: 1641431100000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T01:05:00.000Z'
  },
  {
    priceUsd: '43697.7347663834708099',
    time: 1641431400000,
    circulatingSupply: '18920981.0000000000000000',
    date: '2022-01-06T01:10:00.000Z'
  },
  {
    priceUsd: '43733.3408644602886782',
    time: 1641431700000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T01:15:00.000Z'
  },
  {
    priceUsd: '43829.0859294082629674',
    time: 1641432000000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T01:20:00.000Z'
  },
  {
    priceUsd: '43826.8623383330197515',
    time: 1641432300000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T01:25:00.000Z'
  },
  {
    priceUsd: '43757.1486078480224171',
    time: 1641432600000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T01:30:00.000Z'
  },
  {
    priceUsd: '43720.8808918361410572',
    time: 1641432900000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T01:35:00.000Z'
  },
  {
    priceUsd: '43696.2503678226916827',
    time: 1641433200000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T01:40:00.000Z'
  },
  {
    priceUsd: '43736.1783788626885539',
    time: 1641433500000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T01:45:00.000Z'
  },
  {
    priceUsd: '43689.0393785985078964',
    time: 1641433800000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T01:50:00.000Z'
  },
  {
    priceUsd: '43541.8492119081743035',
    time: 1641434100000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T01:55:00.000Z'
  },
  {
    priceUsd: '43681.3382536311596724',
    time: 1641434400000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T02:00:00.000Z'
  },
  {
    priceUsd: '43678.1837615416274920',
    time: 1641434700000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T02:05:00.000Z'
  },
  {
    priceUsd: '43656.9390392393121481',
    time: 1641435000000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T02:10:00.000Z'
  },
  {
    priceUsd: '43562.1710346618747132',
    time: 1641435300000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T02:15:00.000Z'
  },
  {
    priceUsd: '43488.6051195319924781',
    time: 1641435600000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T02:20:00.000Z'
  },
  {
    priceUsd: '43509.5309219485391734',
    time: 1641435900000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T02:25:00.000Z'
  },
  {
    priceUsd: '43404.4185892189552730',
    time: 1641436200000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T02:30:00.000Z'
  },
  {
    priceUsd: '43471.2495748133267415',
    time: 1641436500000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T02:35:00.000Z'
  },
  {
    priceUsd: '43426.5070324596010102',
    time: 1641436800000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T02:40:00.000Z'
  },
  {
    priceUsd: '43466.0453420666986635',
    time: 1641437100000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T02:45:00.000Z'
  },
  {
    priceUsd: '43477.3921436695910792',
    time: 1641437400000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T02:50:00.000Z'
  },
  {
    priceUsd: '43478.2049014128459428',
    time: 1641437700000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T02:55:00.000Z'
  },
  {
    priceUsd: '43403.5186403996411621',
    time: 1641438000000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T03:00:00.000Z'
  },
  {
    priceUsd: '43405.5330954659325701',
    time: 1641438300000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T03:05:00.000Z'
  },
  {
    priceUsd: '43340.4911343591384900',
    time: 1641438600000,
    circulatingSupply: '18921043.0000000000000000',
    date: '2022-01-06T03:10:00.000Z'
  },
  {
    priceUsd: '43334.4570996824818809',
    time: 1641438900000,
    circulatingSupply: '18921062.0000000000000000',
    date: '2022-01-06T03:15:00.000Z'
  },
  {
    priceUsd: '43299.9067912531231983',
    time: 1641439200000,
    circulatingSupply: '18921062.0000000000000000',
    date: '2022-01-06T03:20:00.000Z'
  },
  {
    priceUsd: '43314.2845150443550712',
    time: 1641439500000,
    circulatingSupply: '18921062.0000000000000000',
    date: '2022-01-06T03:25:00.000Z'
  },
  {
    priceUsd: '43289.8088739920281203',
    time: 1641439800000,
    circulatingSupply: '18921062.0000000000000000',
    date: '2022-01-06T03:30:00.000Z'
  },
  {
    priceUsd: '43251.1223156484662675',
    time: 1641440100000,
    circulatingSupply: '18921062.0000000000000000',
    date: '2022-01-06T03:35:00.000Z'
  },
  {
    priceUsd: '43276.0250301142660952',
    time: 1641440400000,
    circulatingSupply: '18921062.0000000000000000',
    date: '2022-01-06T03:40:00.000Z'
  },
  {
    priceUsd: '43242.9638683739065592',
    time: 1641440700000,
    circulatingSupply: '18921062.0000000000000000',
    date: '2022-01-06T03:45:00.000Z'
  },
  {
    priceUsd: '43154.0502800428885027',
    time: 1641441000000,
    circulatingSupply: '18921062.0000000000000000',
    date: '2022-01-06T03:50:00.000Z'
  },
  {
    priceUsd: '43123.2310843141556505',
    time: 1641441300000,
    circulatingSupply: '18921062.0000000000000000',
    date: '2022-01-06T03:55:00.000Z'
  },
  {
    priceUsd: '43017.1045084763581918',
    time: 1641441600000,
    circulatingSupply: '18921062.0000000000000000',
    date: '2022-01-06T04:00:00.000Z'
  },
  {
    priceUsd: '42953.9202502188824729',
    time: 1641441900000,
    circulatingSupply: '18921062.0000000000000000',
    date: '2022-01-06T04:05:00.000Z'
  },
  {
    priceUsd: '42964.2978191856360526',
    time: 1641442200000,
    circulatingSupply: '18921062.0000000000000000',
    date: '2022-01-06T04:10:00.000Z'
  },
  {
    priceUsd: '43112.0831011082290474',
    time: 1641442500000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T04:15:00.000Z'
  },
  {
    priceUsd: '43186.5070388202412850',
    time: 1641442800000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T04:20:00.000Z'
  },
  {
    priceUsd: '43097.1631086781066452',
    time: 1641443100000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T04:25:00.000Z'
  },
  {
    priceUsd: '43059.0981238828410653',
    time: 1641443400000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T04:30:00.000Z'
  },
  {
    priceUsd: '42993.8678022036076555',
    time: 1641443700000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T04:35:00.000Z'
  },
  {
    priceUsd: '42902.1653606238492547',
    time: 1641444000000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T04:40:00.000Z'
  },
  {
    priceUsd: '42924.9248013807814698',
    time: 1641444300000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T04:45:00.000Z'
  },
  {
    priceUsd: '42931.7933512944845867',
    time: 1641444600000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T04:50:00.000Z'
  },
  {
    priceUsd: '43079.2735675908339249',
    time: 1641444900000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T04:55:00.000Z'
  },
  {
    priceUsd: '43145.2298247874968651',
    time: 1641445200000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T05:00:00.000Z'
  },
  {
    priceUsd: '43122.3164738241117978',
    time: 1641445500000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T05:05:00.000Z'
  },
  {
    priceUsd: '43226.2348794335233304',
    time: 1641445800000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T05:10:00.000Z'
  },
  {
    priceUsd: '43238.6054537610598874',
    time: 1641446100000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T05:15:00.000Z'
  },
  {
    priceUsd: '43284.1047243442426578',
    time: 1641446400000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T05:20:00.000Z'
  },
  {
    priceUsd: '43242.6771603172870398',
    time: 1641446700000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T05:25:00.000Z'
  },
  {
    priceUsd: '43234.4827005845568065',
    time: 1641447000000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T05:30:00.000Z'
  },
  {
    priceUsd: '43215.3786830661142761',
    time: 1641447300000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T05:35:00.000Z'
  },
  {
    priceUsd: '43193.9585656668042977',
    time: 1641447600000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T05:40:00.000Z'
  },
  {
    priceUsd: '43144.9435062362026725',
    time: 1641447900000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T05:45:00.000Z'
  },
  {
    priceUsd: '43131.1429566896354788',
    time: 1641448200000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T05:50:00.000Z'
  },
  {
    priceUsd: '43163.5682375124304205',
    time: 1641448500000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T05:55:00.000Z'
  },
  {
    priceUsd: '43198.1022980872312350',
    time: 1641448800000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T06:00:00.000Z'
  },
  {
    priceUsd: '43129.4130694630915241',
    time: 1641449100000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T06:05:00.000Z'
  },
  {
    priceUsd: '43114.7342676296002550',
    time: 1641449400000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T06:10:00.000Z'
  },
  {
    priceUsd: '43146.4348845101189491',
    time: 1641449700000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T06:15:00.000Z'
  },
  {
    priceUsd: '43256.2200927954726669',
    time: 1641450000000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T06:20:00.000Z'
  },
  {
    priceUsd: '43276.9768023063074948',
    time: 1641450300000,
    circulatingSupply: '18921131.0000000000000000',
    date: '2022-01-06T06:25:00.000Z'
  },
  {
    priceUsd: '43222.4514888074076018',
    time: 1641450600000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T06:30:00.000Z'
  },
  {
    priceUsd: '43173.1287448353402187',
    time: 1641450900000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T06:35:00.000Z'
  },
  {
    priceUsd: '43090.6622964442601489',
    time: 1641451200000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T06:40:00.000Z'
  },
  {
    priceUsd: '43050.4943556607521581',
    time: 1641451500000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T06:45:00.000Z'
  },
  {
    priceUsd: '43129.2530573230269057',
    time: 1641451800000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T06:50:00.000Z'
  },
  {
    priceUsd: '43114.5099323371780181',
    time: 1641452100000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T06:55:00.000Z'
  },
  {
    priceUsd: '43189.0529394545593360',
    time: 1641452400000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T07:00:00.000Z'
  },
  {
    priceUsd: '43238.9932440565029545',
    time: 1641452700000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T07:05:00.000Z'
  },
  {
    priceUsd: '43227.4074947091132012',
    time: 1641453000000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T07:10:00.000Z'
  },
  {
    priceUsd: '43203.7972121320883261',
    time: 1641453300000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T07:15:00.000Z'
  },
  {
    priceUsd: '43240.4977345749433103',
    time: 1641453600000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T07:20:00.000Z'
  },
  {
    priceUsd: '43262.4253555493670282',
    time: 1641453900000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T07:25:00.000Z'
  },
  {
    priceUsd: '43278.0798201137958099',
    time: 1641454200000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T07:30:00.000Z'
  },
  {
    priceUsd: '43234.3363617869283007',
    time: 1641454500000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T07:35:00.000Z'
  },
  {
    priceUsd: '43223.5887522181606167',
    time: 1641454800000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T07:40:00.000Z'
  },
  {
    priceUsd: '43162.0337232003430180',
    time: 1641455100000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T07:45:00.000Z'
  },
  {
    priceUsd: '43189.8803185326931729',
    time: 1641455400000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T07:50:00.000Z'
  },
  {
    priceUsd: '43272.5042292979985477',
    time: 1641455700000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T07:55:00.000Z'
  },
  {
    priceUsd: '43305.2739924769725296',
    time: 1641456000000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T08:00:00.000Z'
  },
  {
    priceUsd: '43275.1283201795068683',
    time: 1641456300000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T08:05:00.000Z'
  },
  {
    priceUsd: '43249.2089937462922652',
    time: 1641456600000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T08:10:00.000Z'
  },
  {
    priceUsd: '43198.7284057686210833',
    time: 1641456900000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T08:15:00.000Z'
  },
  {
    priceUsd: '43253.5719886103173547',
    time: 1641457200000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T08:20:00.000Z'
  },
  {
    priceUsd: '43207.0193992717679938',
    time: 1641457500000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T08:25:00.000Z'
  },
  {
    priceUsd: '43210.3612412743147431',
    time: 1641457800000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T08:30:00.000Z'
  },
  {
    priceUsd: '43148.5039985206540440',
    time: 1641458100000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T08:35:00.000Z'
  },
  {
    priceUsd: '43126.3134161975511180',
    time: 1641458400000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T08:40:00.000Z'
  },
  {
    priceUsd: '43101.6529119246581949',
    time: 1641458700000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T08:45:00.000Z'
  },
  {
    priceUsd: '43114.6592918842305017',
    time: 1641459000000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T08:50:00.000Z'
  },
  {
    priceUsd: '43079.7133975421757570',
    time: 1641459300000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T08:55:00.000Z'
  },
  {
    priceUsd: '43139.7975304210575342',
    time: 1641459600000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T09:00:00.000Z'
  },
  {
    priceUsd: '43088.9953695307207059',
    time: 1641459900000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T09:05:00.000Z'
  },
  {
    priceUsd: '42996.1075323598091337',
    time: 1641460200000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T09:10:00.000Z'
  },
  {
    priceUsd: '43036.7073815692483630',
    time: 1641460500000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T09:15:00.000Z'
  },
  {
    priceUsd: '43050.9533518741874763',
    time: 1641460800000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T09:20:00.000Z'
  },
  {
    priceUsd: '43019.7613536998355122',
    time: 1641461100000,
    circulatingSupply: '18921256.0000000000000000',
    date: '2022-01-06T09:25:00.000Z'
  },
  {
    priceUsd: '42871.2906351027709664',
    time: 1641461400000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T09:30:00.000Z'
  },
  {
    priceUsd: '42761.8252153093181351',
    time: 1641461700000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T09:35:00.000Z'
  },
  {
    priceUsd: '42678.8160630913073662',
    time: 1641462000000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T09:40:00.000Z'
  },
  {
    priceUsd: '42795.6194773426171075',
    time: 1641462300000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T09:45:00.000Z'
  },
  {
    priceUsd: '42757.4503803895813538',
    time: 1641462600000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T09:50:00.000Z'
  },
  {
    priceUsd: '42728.9183751185275189',
    time: 1641462900000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T09:55:00.000Z'
  },
  {
    priceUsd: '42705.3989565816437462',
    time: 1641463200000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T10:00:00.000Z'
  },
  {
    priceUsd: '42794.9155982348358616',
    time: 1641463500000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T10:05:00.000Z'
  },
  {
    priceUsd: '42815.1158131785643190',
    time: 1641463800000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T10:10:00.000Z'
  },
  {
    priceUsd: '42801.1068817033567332',
    time: 1641464100000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T10:15:00.000Z'
  },
  {
    priceUsd: '42797.7962584512102779',
    time: 1641464400000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T10:20:00.000Z'
  },
  {
    priceUsd: '42814.7677258296805364',
    time: 1641464700000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T10:25:00.000Z'
  },
  {
    priceUsd: '42875.2985338661489034',
    time: 1641465000000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T10:30:00.000Z'
  },
  {
    priceUsd: '42972.0164823352230491',
    time: 1641465300000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T10:35:00.000Z'
  },
  {
    priceUsd: '42927.0749865566711988',
    time: 1641465600000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T10:40:00.000Z'
  },
  {
    priceUsd: '42888.1103567777842910',
    time: 1641465900000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T10:45:00.000Z'
  },
  {
    priceUsd: '42942.1964103304581148',
    time: 1641466200000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T10:50:00.000Z'
  },
  {
    priceUsd: '42962.3525226118295748',
    time: 1641466500000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T10:55:00.000Z'
  },
  {
    priceUsd: '42982.7171467321867797',
    time: 1641466800000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T11:00:00.000Z'
  },
  {
    priceUsd: '42984.2227259283756080',
    time: 1641467100000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T11:05:00.000Z'
  },
  {
    priceUsd: '43001.6350907107575259',
    time: 1641467400000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T11:10:00.000Z'
  },
  {
    priceUsd: '43020.6010915786248697',
    time: 1641467700000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T11:15:00.000Z'
  },
  {
    priceUsd: '43035.2286760971651453',
    time: 1641468000000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T11:20:00.000Z'
  },
  {
    priceUsd: '42970.1076813312370090',
    time: 1641468300000,
    circulatingSupply: '18921312.0000000000000000',
    date: '2022-01-06T11:25:00.000Z'
  },
  {
    priceUsd: '42903.5327271604623376',
    time: 1641468600000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T11:30:00.000Z'
  },
  {
    priceUsd: '42948.2609833661680664',
    time: 1641468900000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T11:35:00.000Z'
  },
  {
    priceUsd: '42856.1399375816370401',
    time: 1641469200000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T11:40:00.000Z'
  },
  {
    priceUsd: '42853.8576887495152369',
    time: 1641469500000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T11:45:00.000Z'
  },
  {
    priceUsd: '42915.0733428711639059',
    time: 1641469800000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T11:50:00.000Z'
  },
  {
    priceUsd: '42950.4506168201191717',
    time: 1641470100000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T11:55:00.000Z'
  },
  {
    priceUsd: '42970.4854429536383945',
    time: 1641470400000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T12:00:00.000Z'
  },
  {
    priceUsd: '42979.6127751908629792',
    time: 1641470700000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T12:05:00.000Z'
  },
  {
    priceUsd: '42906.7108642498727910',
    time: 1641471000000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T12:10:00.000Z'
  },
  {
    priceUsd: '42890.9742873407167488',
    time: 1641471300000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T12:15:00.000Z'
  },
  {
    priceUsd: '42907.7817642905635261',
    time: 1641471600000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T12:20:00.000Z'
  },
  {
    priceUsd: '42845.7099612243607806',
    time: 1641471900000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T12:25:00.000Z'
  },
  {
    priceUsd: '42798.9162751315502819',
    time: 1641472200000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T12:30:00.000Z'
  },
  {
    priceUsd: '42789.7129251710945290',
    time: 1641472500000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T12:35:00.000Z'
  },
  {
    priceUsd: '42872.6525864188551924',
    time: 1641472800000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T12:40:00.000Z'
  },
  {
    priceUsd: '42895.3016534082637613',
    time: 1641473100000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T12:45:00.000Z'
  },
  {
    priceUsd: '42976.8680360679412530',
    time: 1641473400000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T12:50:00.000Z'
  },
  {
    priceUsd: '42997.6047641310773237',
    time: 1641473700000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T12:55:00.000Z'
  },
  {
    priceUsd: '43087.1908800880400841',
    time: 1641474000000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T13:00:00.000Z'
  },
  {
    priceUsd: '43157.4344637948491198',
    time: 1641474300000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T13:05:00.000Z'
  },
  {
    priceUsd: '43187.0477498865631625',
    time: 1641474600000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T13:10:00.000Z'
  },
  {
    priceUsd: '43171.4072606938794100',
    time: 1641474900000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T13:15:00.000Z'
  },
  {
    priceUsd: '43099.7025013727697147',
    time: 1641475200000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T13:20:00.000Z'
  },
  {
    priceUsd: '43124.6888730898210712',
    time: 1641475500000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T13:25:00.000Z'
  },
  {
    priceUsd: '43088.1400670268392493',
    time: 1641475800000,
    circulatingSupply: '18921400.0000000000000000',
    date: '2022-01-06T13:30:00.000Z'
  },
  {
    priceUsd: '43062.3236526545816079',
    time: 1641476100000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T13:35:00.000Z'
  },
  {
    priceUsd: '43071.3377674180331429',
    time: 1641476400000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T13:40:00.000Z'
  },
  {
    priceUsd: '43088.6695029059114640',
    time: 1641476700000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T13:45:00.000Z'
  },
  {
    priceUsd: '43171.4028327617246459',
    time: 1641477000000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T13:50:00.000Z'
  },
  {
    priceUsd: '43213.0655688504075003',
    time: 1641477300000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T13:55:00.000Z'
  },
  {
    priceUsd: '43228.1565672948699980',
    time: 1641477600000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T14:00:00.000Z'
  },
  {
    priceUsd: '43222.7729855939535061',
    time: 1641477900000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T14:05:00.000Z'
  },
  {
    priceUsd: '43188.2696396803056703',
    time: 1641478200000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T14:10:00.000Z'
  },
  {
    priceUsd: '43147.0576098317587019',
    time: 1641478500000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T14:15:00.000Z'
  },
  {
    priceUsd: '43082.3394459151182897',
    time: 1641478800000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T14:20:00.000Z'
  },
  {
    priceUsd: '43091.3979048356294266',
    time: 1641479100000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T14:25:00.000Z'
  },
  {
    priceUsd: '43003.6190058256228554',
    time: 1641479400000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T14:30:00.000Z'
  },
  {
    priceUsd: '43100.3521989619575086',
    time: 1641479700000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T14:35:00.000Z'
  },
  {
    priceUsd: '43229.2809280382762930',
    time: 1641480000000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T14:40:00.000Z'
  },
  {
    priceUsd: '43200.4283018391398891',
    time: 1641480300000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T14:45:00.000Z'
  },
  {
    priceUsd: '43088.1957185709780912',
    time: 1641480600000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T14:50:00.000Z'
  },
  {
    priceUsd: '43060.0716990668393360',
    time: 1641480900000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T14:55:00.000Z'
  },
  {
    priceUsd: '42946.9382794546894148',
    time: 1641481200000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T15:00:00.000Z'
  },
  {
    priceUsd: '42895.7969773127256764',
    time: 1641481500000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T15:05:00.000Z'
  },
  {
    priceUsd: '42908.8209694641198202',
    time: 1641481800000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T15:10:00.000Z'
  },
  {
    priceUsd: '42861.1429890686434491',
    time: 1641482100000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T15:15:00.000Z'
  },
  {
    priceUsd: '42939.9006912585970727',
    time: 1641482400000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T15:20:00.000Z'
  },
  {
    priceUsd: '42952.5682485091049218',
    time: 1641482700000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T15:25:00.000Z'
  },
  {
    priceUsd: '42973.9794812589779067',
    time: 1641483000000,
    circulatingSupply: '18921475.0000000000000000',
    date: '2022-01-06T15:30:00.000Z'
  },
  {
    priceUsd: '43044.2970994296255127',
    time: 1641483300000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T15:35:00.000Z'
  },
  {
    priceUsd: '43067.7377844725713369',
    time: 1641483600000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T15:40:00.000Z'
  },
  {
    priceUsd: '42996.8167253124213148',
    time: 1641483900000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T15:45:00.000Z'
  },
  {
    priceUsd: '43051.8866455345964178',
    time: 1641484200000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T15:50:00.000Z'
  },
  {
    priceUsd: '43050.2480383633756527',
    time: 1641484500000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T15:55:00.000Z'
  },
  {
    priceUsd: '43097.0007235365261074',
    time: 1641484800000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T16:00:00.000Z'
  },
  {
    priceUsd: '43074.0191015514915453',
    time: 1641485100000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T16:05:00.000Z'
  },
  {
    priceUsd: '43036.4025190087874634',
    time: 1641485400000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T16:10:00.000Z'
  },
  {
    priceUsd: '43070.9938227602253077',
    time: 1641485700000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T16:15:00.000Z'
  },
  {
    priceUsd: '43105.9668501595123363',
    time: 1641486000000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T16:20:00.000Z'
  },
  {
    priceUsd: '43031.5682929071982309',
    time: 1641486300000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T16:25:00.000Z'
  },
  {
    priceUsd: '42981.0043348841951453',
    time: 1641486600000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T16:30:00.000Z'
  },
  {
    priceUsd: '42897.1379404369880823',
    time: 1641486900000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T16:35:00.000Z'
  },
  {
    priceUsd: '42927.7645268998658569',
    time: 1641487200000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T16:40:00.000Z'
  },
  {
    priceUsd: '43000.5600118609845549',
    time: 1641487500000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T16:45:00.000Z'
  },
  {
    priceUsd: '42977.0298922770647364',
    time: 1641487800000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T16:50:00.000Z'
  },
  {
    priceUsd: '42989.0983795417701738',
    time: 1641488100000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T16:55:00.000Z'
  },
  {
    priceUsd: '42992.3890780120096010',
    time: 1641488400000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T17:00:00.000Z'
  },
  {
    priceUsd: '43025.1422854348764719',
    time: 1641488700000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T17:05:00.000Z'
  },
  {
    priceUsd: '43084.5954881067541933',
    time: 1641489000000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T17:10:00.000Z'
  },
  {
    priceUsd: '43020.0989243689428911',
    time: 1641489300000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T17:15:00.000Z'
  },
  {
    priceUsd: '43010.3699107868940343',
    time: 1641489600000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T17:20:00.000Z'
  },
  {
    priceUsd: '43046.4886106332098161',
    time: 1641489900000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T17:25:00.000Z'
  },
  {
    priceUsd: '43112.9795973410225192',
    time: 1641490200000,
    circulatingSupply: '18921531.0000000000000000',
    date: '2022-01-06T17:30:00.000Z'
  },
  {
    priceUsd: '43138.4138816391250859',
    time: 1641490500000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T17:35:00.000Z'
  },
  {
    priceUsd: '43172.6266454511224731',
    time: 1641490800000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T17:40:00.000Z'
  },
  {
    priceUsd: '43219.8405346519990512',
    time: 1641491100000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T17:45:00.000Z'
  },
  {
    priceUsd: '43244.6647588561744500',
    time: 1641491400000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T17:50:00.000Z'
  },
  {
    priceUsd: '43184.9879080241676868',
    time: 1641491700000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T17:55:00.000Z'
  },
  {
    priceUsd: '43150.5839621392890983',
    time: 1641492000000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T18:00:00.000Z'
  },
  {
    priceUsd: '43165.3735350881258646',
    time: 1641492300000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T18:05:00.000Z'
  },
  {
    priceUsd: '43169.2353139226223281',
    time: 1641492600000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T18:10:00.000Z'
  },
  {
    priceUsd: '43236.0649444846180822',
    time: 1641492900000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T18:15:00.000Z'
  },
  {
    priceUsd: '43222.6246715071294010',
    time: 1641493200000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T18:20:00.000Z'
  },
  {
    priceUsd: '43201.1409002094801739',
    time: 1641493500000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T18:25:00.000Z'
  },
  {
    priceUsd: '43173.4672243102393785',
    time: 1641493800000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T18:30:00.000Z'
  },
  {
    priceUsd: '43169.2299249402318081',
    time: 1641494100000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T18:35:00.000Z'
  },
  {
    priceUsd: '43229.4575550752364500',
    time: 1641494400000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T18:40:00.000Z'
  },
  {
    priceUsd: '43256.7359956360909792',
    time: 1641494700000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T18:45:00.000Z'
  },
  {
    priceUsd: '43347.7662293252067085',
    time: 1641495000000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T18:50:00.000Z'
  },
  {
    priceUsd: '43336.4653264624328695',
    time: 1641495300000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T18:55:00.000Z'
  },
  {
    priceUsd: '43435.2744243751039940',
    time: 1641495600000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T19:00:00.000Z'
  },
  {
    priceUsd: '43397.1793749013313676',
    time: 1641495900000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T19:05:00.000Z'
  },
  {
    priceUsd: '43391.2768610556475057',
    time: 1641496200000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T19:10:00.000Z'
  },
  {
    priceUsd: '43453.7675043375272863',
    time: 1641496500000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T19:15:00.000Z'
  },
  {
    priceUsd: '43416.1506372640910533',
    time: 1641496800000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T19:20:00.000Z'
  },
  {
    priceUsd: '43424.6276670790159053',
    time: 1641497100000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T19:25:00.000Z'
  },
  {
    priceUsd: '43455.7920413387072701',
    time: 1641497400000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T19:30:00.000Z'
  },
  {
    priceUsd: '43437.0987734614963857',
    time: 1641497700000,
    circulatingSupply: '18921593.0000000000000000',
    date: '2022-01-06T19:35:00.000Z'
  },
  {
    priceUsd: '43489.6394873981512465',
    time: 1641498000000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T19:40:00.000Z'
  },
  {
    priceUsd: '43535.7569000119074961',
    time: 1641498300000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T19:45:00.000Z'
  },
  {
    priceUsd: '43553.0058694187070677',
    time: 1641498600000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T19:50:00.000Z'
  },
  {
    priceUsd: '43561.0716108822043114',
    time: 1641498900000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T19:55:00.000Z'
  },
  {
    priceUsd: '43559.4297589729758046',
    time: 1641499200000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T20:00:00.000Z'
  },
  {
    priceUsd: '43576.5403391376017522',
    time: 1641499500000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T20:05:00.000Z'
  },
  {
    priceUsd: '43607.8442562164486726',
    time: 1641499800000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T20:10:00.000Z'
  },
  {
    priceUsd: '43557.7300058999410897',
    time: 1641500100000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T20:15:00.000Z'
  },
  {
    priceUsd: '43390.8943076638150692',
    time: 1641500400000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T20:20:00.000Z'
  },
  {
    priceUsd: '43355.6241789483161099',
    time: 1641500700000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T20:25:00.000Z'
  },
  {
    priceUsd: '43368.3933723185941624',
    time: 1641501000000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T20:30:00.000Z'
  },
  {
    priceUsd: '43330.8027712640915998',
    time: 1641501300000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T20:35:00.000Z'
  },
  {
    priceUsd: '43288.6248953199000799',
    time: 1641501600000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T20:40:00.000Z'
  },
  {
    priceUsd: '43294.1508005909571143',
    time: 1641501900000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T20:45:00.000Z'
  },
  {
    priceUsd: '43315.6720293463103713',
    time: 1641502200000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T20:50:00.000Z'
  },
  {
    priceUsd: '43280.0139747658147138',
    time: 1641502500000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T20:55:00.000Z'
  },
  {
    priceUsd: '43295.1953225717805230',
    time: 1641502800000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T21:00:00.000Z'
  },
  {
    priceUsd: '43308.7353882770229261',
    time: 1641503100000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T21:05:00.000Z'
  },
  {
    priceUsd: '43281.6818749951067985',
    time: 1641503400000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T21:10:00.000Z'
  },
  {
    priceUsd: '43277.2445692808826672',
    time: 1641503700000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T21:15:00.000Z'
  },
  {
    priceUsd: '43317.6740521390163601',
    time: 1641504000000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T21:20:00.000Z'
  },
  {
    priceUsd: '43321.2396712363212444',
    time: 1641504300000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T21:25:00.000Z'
  },
  {
    priceUsd: '43280.0136329977381517',
    time: 1641504600000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T21:30:00.000Z'
  },
  {
    priceUsd: '43320.2531399553780750',
    time: 1641504900000,
    circulatingSupply: '18921656.0000000000000000',
    date: '2022-01-06T21:35:00.000Z'
  },
  {
    priceUsd: '43308.2476042290045911',
    time: 1641505200000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T21:40:00.000Z'
  },
  {
    priceUsd: '43265.9305980878358512',
    time: 1641505500000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T21:45:00.000Z'
  },
  {
    priceUsd: '43260.3648254555754495',
    time: 1641505800000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T21:50:00.000Z'
  },
  {
    priceUsd: '43263.8332676017265610',
    time: 1641506100000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T21:55:00.000Z'
  },
  {
    priceUsd: '43244.3322719542245655',
    time: 1641506400000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T22:00:00.000Z'
  },
  {
    priceUsd: '43237.3229502699165970',
    time: 1641506700000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T22:05:00.000Z'
  },
  {
    priceUsd: '43241.1996113254308722',
    time: 1641507000000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T22:10:00.000Z'
  },
  {
    priceUsd: '43186.4139544206867810',
    time: 1641507300000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T22:15:00.000Z'
  },
  {
    priceUsd: '43184.5885384573762505',
    time: 1641507600000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T22:20:00.000Z'
  },
  {
    priceUsd: '43240.0546824723641078',
    time: 1641507900000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T22:25:00.000Z'
  },
  {
    priceUsd: '43240.0544123135120554',
    time: 1641508200000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T22:30:00.000Z'
  },
  {
    priceUsd: '43271.3694562061620613',
    time: 1641508500000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T22:35:00.000Z'
  },
  {
    priceUsd: '43287.2233930072186375',
    time: 1641508800000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T22:40:00.000Z'
  },
  {
    priceUsd: '43250.0828234823866591',
    time: 1641509100000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T22:45:00.000Z'
  },
  {
    priceUsd: '43232.9430070748342544',
    time: 1641509400000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T22:50:00.000Z'
  },
  {
    priceUsd: '43270.2620512971632721',
    time: 1641509700000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T22:55:00.000Z'
  },
  {
    priceUsd: '43291.0649432130212656',
    time: 1641510000000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T23:00:00.000Z'
  },
  {
    priceUsd: '43256.2292607332692950',
    time: 1641510300000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T23:05:00.000Z'
  },
  {
    priceUsd: '43250.4839270922433220',
    time: 1641510600000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T23:10:00.000Z'
  },
  {
    priceUsd: '43257.0804183066188857',
    time: 1641510900000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T23:15:00.000Z'
  },
  {
    priceUsd: '43237.8198474980935982',
    time: 1641511200000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T23:20:00.000Z'
  },
  {
    priceUsd: '43213.5604545805989160',
    time: 1641511500000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T23:25:00.000Z'
  },
  {
    priceUsd: '43268.7173892441011354',
    time: 1641511800000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T23:30:00.000Z'
  },
  {
    priceUsd: '43273.0590525581577956',
    time: 1641512100000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T23:35:00.000Z'
  },
  {
    priceUsd: '43306.9633092051821196',
    time: 1641512400000,
    circulatingSupply: '18921762.0000000000000000',
    date: '2022-01-06T23:40:00.000Z'
  },
  {
    priceUsd: '43324.4445956648776610',
    time: 1641512700000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-06T23:45:00.000Z'
  },
  {
    priceUsd: '43292.5510585637522210',
    time: 1641513000000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-06T23:50:00.000Z'
  },
  {
    priceUsd: '43264.1475466723967853',
    time: 1641513300000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-06T23:55:00.000Z'
  },
  {
    priceUsd: '43254.7479394104671283',
    time: 1641513600000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T00:00:00.000Z'
  },
  {
    priceUsd: '43239.1545238536459671',
    time: 1641513900000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T00:05:00.000Z'
  },
  {
    priceUsd: '43186.9038058950435145',
    time: 1641514200000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T00:10:00.000Z'
  },
  {
    priceUsd: '43117.3251695305889284',
    time: 1641514500000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T00:15:00.000Z'
  },
  {
    priceUsd: '43108.4632251784138334',
    time: 1641514800000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T00:20:00.000Z'
  },
  {
    priceUsd: '43091.7151330709908293',
    time: 1641515100000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T00:25:00.000Z'
  },
  {
    priceUsd: '43093.7402136402717353',
    time: 1641515400000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T00:30:00.000Z'
  },
  {
    priceUsd: '43011.9299922339347573',
    time: 1641515700000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T00:35:00.000Z'
  },
  {
    priceUsd: '43033.5592195217955288',
    time: 1641516000000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T00:40:00.000Z'
  },
  {
    priceUsd: '43001.8851093945728016',
    time: 1641516300000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T00:45:00.000Z'
  },
  {
    priceUsd: '43043.3174496631913479',
    time: 1641516600000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T00:50:00.000Z'
  },
  {
    priceUsd: '43060.1767480500240268',
    time: 1641516900000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T00:55:00.000Z'
  },
  {
    priceUsd: '43034.9919568720110617',
    time: 1641517200000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T01:00:00.000Z'
  },
  {
    priceUsd: '43091.2570451553760745',
    time: 1641517500000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T01:05:00.000Z'
  },
  {
    priceUsd: '43169.6671917638279326',
    time: 1641517800000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T01:10:00.000Z'
  },
  {
    priceUsd: '43129.7995725348105432',
    time: 1641518100000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T01:15:00.000Z'
  },
  {
    priceUsd: '43115.9418053290200745',
    time: 1641518400000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T01:20:00.000Z'
  },
  {
    priceUsd: '43070.2382500169085009',
    time: 1641518700000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T01:25:00.000Z'
  },
  {
    priceUsd: '43148.0862790830412055',
    time: 1641519000000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T01:30:00.000Z'
  },
  {
    priceUsd: '43176.5547922025528371',
    time: 1641519300000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T01:35:00.000Z'
  },
  {
    priceUsd: '43159.2991669654196254',
    time: 1641519600000,
    circulatingSupply: '18921868.0000000000000000',
    date: '2022-01-07T01:40:00.000Z'
  },
  {
    priceUsd: '43155.4577747234443335',
    time: 1641519900000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T01:45:00.000Z'
  },
  {
    priceUsd: '43188.2695133124752319',
    time: 1641520200000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T01:50:00.000Z'
  },
  {
    priceUsd: '43190.2620998916320416',
    time: 1641520500000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T01:55:00.000Z'
  },
  {
    priceUsd: '43201.1015828530016375',
    time: 1641520800000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T02:00:00.000Z'
  },
  {
    priceUsd: '43192.5344461086178297',
    time: 1641521100000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T02:05:00.000Z'
  },
  {
    priceUsd: '43124.5821390540212855',
    time: 1641521400000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T02:10:00.000Z'
  },
  {
    priceUsd: '43102.9769980502967599',
    time: 1641521700000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T02:15:00.000Z'
  },
  {
    priceUsd: '43126.1862622561307961',
    time: 1641522000000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T02:20:00.000Z'
  },
  {
    priceUsd: '43135.6176803149912788',
    time: 1641522300000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T02:25:00.000Z'
  },
  {
    priceUsd: '43136.2849230000932717',
    time: 1641522600000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T02:30:00.000Z'
  },
  {
    priceUsd: '43118.1594422436510154',
    time: 1641522900000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T02:35:00.000Z'
  },
  {
    priceUsd: '43083.4477040816364981',
    time: 1641523200000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T02:40:00.000Z'
  },
  {
    priceUsd: '43051.8245005578018260',
    time: 1641523500000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T02:45:00.000Z'
  },
  {
    priceUsd: '43043.5428460366176565',
    time: 1641523800000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T02:50:00.000Z'
  },
  {
    priceUsd: '43067.7004161486389260',
    time: 1641524100000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T02:55:00.000Z'
  },
  {
    priceUsd: '43030.4848388942222225',
    time: 1641524400000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T03:00:00.000Z'
  },
  {
    priceUsd: '43048.4693172013679516',
    time: 1641524700000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T03:05:00.000Z'
  },
  {
    priceUsd: '43019.4722614266933655',
    time: 1641525000000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T03:10:00.000Z'
  },
  {
    priceUsd: '43062.7856380691420268',
    time: 1641525300000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T03:15:00.000Z'
  },
  {
    priceUsd: '43046.7862715184969632',
    time: 1641525600000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T03:20:00.000Z'
  },
  {
    priceUsd: '42779.8281225065723940',
    time: 1641525900000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T03:25:00.000Z'
  },
  {
    priceUsd: '42696.7917423986381814',
    time: 1641526200000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T03:30:00.000Z'
  },
  {
    priceUsd: '42552.8959677201082671',
    time: 1641526500000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T03:35:00.000Z'
  },
  {
    priceUsd: '42535.9010612583947571',
    time: 1641526800000,
    circulatingSupply: '18921950.0000000000000000',
    date: '2022-01-07T03:40:00.000Z'
  },
  {
    priceUsd: '42382.6683389687118944',
    time: 1641527100000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T03:45:00.000Z'
  },
  {
    priceUsd: '42456.8273401023559076',
    time: 1641527400000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T03:50:00.000Z'
  },
  {
    priceUsd: '42393.5459248318808150',
    time: 1641527700000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T03:55:00.000Z'
  },
  {
    priceUsd: '42359.3082004813773102',
    time: 1641528000000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T04:00:00.000Z'
  },
  {
    priceUsd: '42376.5287659494742555',
    time: 1641528300000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T04:05:00.000Z'
  },
  {
    priceUsd: '42378.6029255895269316',
    time: 1641528600000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T04:10:00.000Z'
  },
  {
    priceUsd: '42351.9594707461978391',
    time: 1641528900000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T04:15:00.000Z'
  },
  {
    priceUsd: '42159.9409494597946571',
    time: 1641529200000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T04:20:00.000Z'
  },
  {
    priceUsd: '42139.8748158331991164',
    time: 1641529500000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T04:25:00.000Z'
  },
  {
    priceUsd: '42093.9982434800625014',
    time: 1641529800000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T04:30:00.000Z'
  },
  {
    priceUsd: '41922.9031170613542625',
    time: 1641530100000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T04:35:00.000Z'
  },
  {
    priceUsd: '42013.6427158436957450',
    time: 1641530400000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T04:40:00.000Z'
  },
  {
    priceUsd: '42045.6474784293897030',
    time: 1641530700000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T04:45:00.000Z'
  },
  {
    priceUsd: '42144.1132319227983877',
    time: 1641531000000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T04:50:00.000Z'
  },
  {
    priceUsd: '42227.6399479338995298',
    time: 1641531300000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T04:55:00.000Z'
  },
  {
    priceUsd: '42193.1443850339632646',
    time: 1641531600000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T05:00:00.000Z'
  },
  {
    priceUsd: '42173.2649057791738235',
    time: 1641531900000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T05:05:00.000Z'
  },
  {
    priceUsd: '42145.0161793025509043',
    time: 1641532200000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T05:10:00.000Z'
  },
  {
    priceUsd: '42197.4666747804550642',
    time: 1641532500000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T05:15:00.000Z'
  },
  {
    priceUsd: '42288.4493166444992343',
    time: 1641532800000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T05:20:00.000Z'
  },
  {
    priceUsd: '42297.8376356695467651',
    time: 1641533100000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T05:25:00.000Z'
  },
  {
    priceUsd: '42280.6523425443213529',
    time: 1641533400000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T05:30:00.000Z'
  },
  {
    priceUsd: '42331.5846259795770790',
    time: 1641533700000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T05:35:00.000Z'
  },
  {
    priceUsd: '42306.5691232159949008',
    time: 1641534000000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T05:40:00.000Z'
  },
  {
    priceUsd: '42236.0895921489178066',
    time: 1641534300000,
    circulatingSupply: '18922025.0000000000000000',
    date: '2022-01-07T05:45:00.000Z'
  },
  {
    priceUsd: '42206.6810858939227102',
    time: 1641534600000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T05:50:00.000Z'
  },
  {
    priceUsd: '42180.8420172987468652',
    time: 1641534900000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T05:55:00.000Z'
  },
  {
    priceUsd: '42262.4151832205881847',
    time: 1641535200000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T06:00:00.000Z'
  },
  {
    priceUsd: '42272.8685371831313227',
    time: 1641535500000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T06:05:00.000Z'
  },
  {
    priceUsd: '42226.3363707935577214',
    time: 1641535800000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T06:10:00.000Z'
  },
  {
    priceUsd: '42201.1007568282362040',
    time: 1641536100000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T06:15:00.000Z'
  },
  {
    priceUsd: '42189.5317490287472465',
    time: 1641536400000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T06:20:00.000Z'
  },
  {
    priceUsd: '42248.9672390895209241',
    time: 1641536700000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T06:25:00.000Z'
  },
  {
    priceUsd: '42206.3629907943622327',
    time: 1641537000000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T06:30:00.000Z'
  },
  {
    priceUsd: '42251.1444870753564578',
    time: 1641537300000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T06:35:00.000Z'
  },
  {
    priceUsd: '42128.8548434166369929',
    time: 1641537600000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T06:40:00.000Z'
  },
  {
    priceUsd: '42142.7620929834758862',
    time: 1641537900000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T06:45:00.000Z'
  },
  {
    priceUsd: '42083.0780752214809840',
    time: 1641538200000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T06:50:00.000Z'
  },
  {
    priceUsd: '42107.7534267841186892',
    time: 1641538500000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T06:55:00.000Z'
  },
  {
    priceUsd: '42116.8477773033180538',
    time: 1641538800000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T07:00:00.000Z'
  },
  {
    priceUsd: '42012.6634965087247294',
    time: 1641539100000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T07:05:00.000Z'
  },
  {
    priceUsd: '42026.8200355599688974',
    time: 1641539400000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T07:10:00.000Z'
  },
  {
    priceUsd: '41312.2344856329378854',
    time: 1641539700000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T07:15:00.000Z'
  },
  {
    priceUsd: '41404.6238365287612834',
    time: 1641540000000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T07:20:00.000Z'
  },
  {
    priceUsd: '41479.6853307197674606',
    time: 1641540300000,
    circulatingSupply: '18922112.0000000000000000',
    date: '2022-01-07T07:25:00.000Z'
  }
]
