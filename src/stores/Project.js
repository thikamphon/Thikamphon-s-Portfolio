import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [
      {
        link: 'https://thikamphon.github.io/multi-step-form/',
        imageUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/oswvtcsjqgxswvdy1cgt.jpg',
        title: 'Multi-Form',
        about: 'Responsive Multiform on website.',
        tags: ['React'],
      },
      {
        link: 'https://thikamphon.github.io/ecommerce-product-page-main/',
        imageUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/vdyqztahkqyslrdsu9nx.jpg',
        title: 'E-commerce website',
        about: 'add product,modal gallary and delete product.',
        tags: ['HTML', 'CSS', 'JS'],
      },
      {
        link: 'https://thikamphon.github.io/launch-countdown-timer/',
        imageUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/cpedouxp4ymfbjf0mkwq.jpg',
        title: 'Countdown Timer',
        about: 'Countdown Timer is default at 9 days.',
        tags: ['HTML', 'CSS', 'JS'],
      },
      {
        link: 'https://www.frontendmentor.io/solutions/age-calculate-WXdsM9nqSw',
        imageUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/i36eacsocopecpdzayav.jpg',
        title: 'Calculate Ages',
        about: 'Calculate Ages Program on website',
        tags: ['HTML', 'CSS', 'JS'],
      },
      
    ]
  })
})
