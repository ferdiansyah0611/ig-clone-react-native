import {createContext} from 'react'
const ctx = createContext({
  post: [],
  auth: null,
})

export const VALUE = {
  auth: false,
  post: [
    {
      id: 0,
      src: 'https://instagram.fcgk1-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/260460199_1001098150447501_3896188214554506827_n.jpg?_nc_ht=instagram.fcgk1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=WIZfaxHLJoAAX-oJRR7&edm=AP_V10EBAAAA&ccb=7-4&oh=3b0289aab5650263d0e91142caa1b4ee&oe=61A9920B&_nc_sid=4f375e',
    },
    {
      id: 1,
      src: 'https://instagram.fcgk1-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/260190513_605109960543619_4072457004994650186_n.jpg?_nc_ht=instagram.fcgk1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xcxt9Al_uAYAX9P954O&tn=hbFCqX4bEoepy05p&edm=AP_V10EBAAAA&ccb=7-4&oh=8e73c5e3037e6013ee7f92f374e5e01e&oe=61AA4CBA&_nc_sid=4f375e',
    },
    {
      id: 2,
      src: 'https://instagram.fcgk1-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/259488144_1374105789671014_920728692429158878_n.jpg?_nc_ht=instagram.fcgk1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=p5vDacU00y0AX81PmDx&edm=AP_V10EBAAAA&ccb=7-4&oh=8f0487f9a5d9dd4ae69dfcd707607b85&oe=61AAB0E5&_nc_sid=4f375e'
    },
    {
      id: 3,
      src: 'https://instagram.fcgk1-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/259336899_1296323254168635_3029120183564687205_n.jpg?_nc_ht=instagram.fcgk1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Fl2BL4RiCEcAX-tPqW1&tn=hbFCqX4bEoepy05p&edm=AP_V10EBAAAA&ccb=7-4&oh=16787a972f2bba5fc47b923ee0e07b62&oe=61A9EE83&_nc_sid=4f375e'
    },
    {
      id: 4,
      src: 'https://instagram.fcgk1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/259708387_236245921929159_2486722434318685828_n.jpg?_nc_ht=instagram.fcgk1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=popJMW3NnLYAX9ErRGi&edm=AP_V10EBAAAA&ccb=7-4&oh=04f0de53de355d4f40c7b02f5bc5a5c0&oe=61AB0C93&_nc_sid=4f375e'
    },
    {
      id: 5,
      src: 'https://instagram.fcgk1-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/258867564_324770846127022_1928882236931507268_n.jpg?_nc_ht=instagram.fcgk1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=RutYGPpjGQQAX9MSMY9&edm=AP_V10EBAAAA&ccb=7-4&oh=e4117e0da7145a0549d1ef0faeb632f1&oe=61A9E56D&_nc_sid=4f375e'
    }
  ]
}

export default ctx