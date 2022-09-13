import DailyCryptoVideo from '../assets/dailyCryptovideo.mp4'
import GetShreddedVideo from '../assets/getShreddedVideo.mp4'
import SpaceXCloneVideo from '../assets/SpaceXCloneVideo.mp4'

export const projects = [
    {
       link: 'https://dailycryptoapp.netlify.app',
       link__github: 'https://github.com/lucasdoritos44/dailyCrypto',
        name: 'Daily Crypto',
        description: 'Daily Crypto is a website where you can find important information about Bitcoin, Ethereum and other cryptocurrencies, such as price charts, price history or useful links to dive deep into blockchain technology. Daily Crypto also brings you daily news about blockchain. In addition to cryptocurrencies, you can find here the top 100 exchanges where you can buy and hold your cryptocurrencies.',
        dependencies: 'HTML, CSS, Javascript, React, React-chartjs, Axios, CoinGecko API, Material-UI', 
        video: DailyCryptoVideo   
    },
    {
        link: 'https://get-shredded-v2.netlify.app/',
       link__github: 'https://github.com/lucasdoritos44/get-shredded',
        name: 'Get Shredded',
        description: 'Get Shredded is a fully responsive website where you can find over 1000 exercises with gifs, description and youtube videos to help keeping your body in shape. You can also find there a body calculator that calculate your body fat and number of calories to grow or lose weight. ',
        dependencies: 'HTML, CSS, Javascript, React, Axios, Rapid API, Material-UI', 
        video: GetShreddedVideo 
    },
    {
        link: '',
       link__github: '',
        name: 'Hunters Lair',
        description: 'Hunters Lair is fully responsive online shop with working payments', 
        dependencies: 'HTML, CSS, Javascript, NextJS', 
        video: '',
        img: '' 
    },
    {
        link: 'https://spacex-clone44.netlify.app/',
       link__github: 'https://github.com/lucasdoritos44/SpaceX-Clone',
        name: 'SpaceX Clone',
        description: 'Fully responsive SpaceX clone', 
        dependencies: 'HTML, CSS, Javascript', 
        video: SpaceXCloneVideo 
    },
]