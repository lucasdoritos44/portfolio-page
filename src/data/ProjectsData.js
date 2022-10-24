import DailyCryptoVideo from '../assets/dailyCryptovideo.mp4'
import GetShreddedVideo from '../assets/getShreddedVideo.mp4'
import SpaceXCloneVideo from '../assets/SpaceXCloneVideo.mp4'
import BlackjackVideo from '../assets/blackjack.mp4'
import FlavorosaVideo from '../assets/flavorosaVideo.mp4'

export const projects = [
    {
        id:0,
        link: 'https://daily-crypto-v2.netlify.app',
        link__github: 'https://github.com/lucasdoritos44/dailyCrypto',
         name: 'Daily Crypto',
         description: 'Daily Crypto is a fully responsive website where you can find important information about Bitcoin, Ethereum and other cryptocurrencies, such as price charts, price history or useful links to dive deep into blockchain technology. Daily Crypto also brings you daily news about blockchain. In addition to cryptocurrencies, you can find here the top 100 exchanges where you can buy and hold your cryptocurrencies.',
         tools: 'HTML, CSS, Javascript, React, React-chartjs, Axios, CoinGecko API, Material-UI', 
         video: DailyCryptoVideo   
     },
    {
        id:1,
        link: 'https://get-shredded-v2.netlify.app/',
       link__github: 'https://github.com/lucasdoritos44/get-shredded',
        name: 'Get Shredded',
        description: 'Get Shredded is a fully responsive website where you can find over 1000 exercises with gifs, description and youtube videos to help keeping your body in shape. You can also find there a body calculator that calculate your body fat and number of calories to grow or lose weight. ',
        tools: 'HTML, CSS, Javascript, React, Axios, Rapid API, Material-UI', 
        video: GetShreddedVideo 
    },
    {
        id:2,
        link: 'https://spacex-clone44.netlify.app/',
       link__github: 'https://github.com/lucasdoritos44/SpaceX-Clone',
        name: 'SpaceX Clone',
        description: 'Fully responsive SpaceX clone', 
        tools: 'HTML, CSS, Javascript', 
        video: SpaceXCloneVideo 
    },
    {
        id:3,
        link: 'https://blackjack-ld44.netlify.app/',
        link__github: 'https://github.com/lucasdoritos44/Blackjack',
        name: 'Blackjack Game',
        description: 'Fully responsive Blackjack Game',
        tools: 'HTML, CSS, Javascript', 
        video: BlackjackVideo
    },
    {
        id:4,
        link: 'https://flavorosa.netlify.app/',
        link__github: 'https://github.com/lucasdoritos44/Flavorosa',
        name: 'Flavorosa Restaurant',
        description: 'Fully responsive fake restaurant website',
        tools: 'HTML, CSS, Javascript, React', 
        video: FlavorosaVideo
    },
    {
        id:5,
        link: '',
        link__github: '',
        name: 'Hunters Lair',
        description: 'Hunters Lair is fully responsive online shop with working payments', 
        tools: 'HTML, CSS, Javascript, NextJS', 
        video: '',
        img: '' 
    },
]