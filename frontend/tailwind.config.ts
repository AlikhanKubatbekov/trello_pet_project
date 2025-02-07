import type { Config } from 'tailwindcss';

import { COLORS, CONFIG_COLORS } from './src/constants/color.constants';

const config: Config = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: COLORS,
      spacing: {
        0.5: '0.12rem',
        layout: '1.4rem',
        'big-layout': '2.3rem',
      },
      fontSize: {
        xs: '0.9rem',
        sm: '1.07rem',
        base: '1.18rem',
        lg: '1.24rem',
        xl: '1.38rem',
        '1.5xl': '1.5rem',
        '2xl': '1.82rem',
        '3xl': '2.22rem',
        '4xl': '2.66rem',
        '5xl': '3.56rem',
        '6xl': '4.44rem',
        '7xl': '5.33rem',
        '8xl': '7.1rem',
        '9xl': '9.5rem',
      },
      transitionDuration: {
        DEFAULT: '266ms',
      },
      width: {
        '1p': '1%',
        '2p': '2%',
        '3p': '3%',
        '4p': '4%',
        '5p': '5%',
        '6p': '6%',
        '7p': '7%',
        '8p': '8%',
        '9p': '9%',
        '10p': '10%',
        '11p': '11%',
        '12p': '12%',
        '13p': '13%',
        '14p': '14%',
        '15p': '15%',
        '16p': '16%',
        '17p': '17%',
        '18p': '18%',
        '19p': '19%',
        '20p': '20%',
        '21p': '21%',
        '22p': '22%',
        '23p': '23%',
        '24p': '24%',
        '25p': '25%',
        '26p': '26%',
        '27p': '27%',
        '28p': '28%',
        '29p': '29%',
        '30p': '30%',
        '31p': '31%',
        '32p': '32%',
        '33p': '33%',
        '34p': '34%',
        '35p': '35%',
        '36p': '36%',
        '37p': '37%',
        '38p': '38%',
        '39p': '39%',
        '40p': '40%',
        '41p': '41%',
        '42p': '42%',
        '43p': '43%',
        '44p': '44%',
        '45p': '45%',
        '46p': '46%',
        '47p': '47%',
        '48p': '48%',
        '49p': '49%',
        '50p': '50%',
        '51p': '51%',
        '52p': '52%',
        '53p': '53%',
        '54p': '54%',
        '55p': '55%',
        '56p': '56%',
        '57p': '57%',
        '58p': '58%',
        '59p': '59%',
        '60p': '60%',
        '61p': '61%',
        '62p': '62%',
        '63p': '63%',
        '64p': '64%',
        '65p': '65%',
        '66p': '66%',
        '67p': '67%',
        '68p': '68%',
        '69p': '69%',
        '70p': '70%',
        '71p': '71%',
        '72p': '72%',
        '73p': '73%',
        '74p': '74%',
        '75p': '75%',
        '76p': '76%',
        '77p': '77%',
        '78p': '78%',
        '79p': '79%',
        '80p': '80%',
        '81p': '81%',
        '82p': '82%',
        '83p': '83%',
        '84p': '84%',
        '85p': '85%',
        '86p': '86%',
        '87p': '87%',
        '88p': '88%',
        '89p': '89%',
        '90p': '90%',
        '91p': '91%',
        '92p': '92%',
        '93p': '93%',
        '94p': '94%',
        '95p': '95%',
        '96p': '96%',
        '97p': '97%',
        '98p': '98%',
        '99p': '99%',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '14px 17px 40px 4px',
        inset: 'inset 0px 18px 22px',
        darkinset: '0px 4px 4px inset',
      },
      backgroundImage: {
        ballanceDashboard: "url('/src//public/img/dashboards/balanceImg.png')",
        ellispisModeCarInterface: "url('https://i.ibb.co/Y3nrFfd/elipse-light.png')",
        ellispisModeCarInterfaceDark: "url('https://i.ibb.co/g66yJnm/Ellipse-94.png')",
        homeButton: 'linear-gradient(112.83deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0) 110.84%)',
        smartHomeDropzone: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='13' ry='13' stroke='%23E0E5F2FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='5' stroke-linecap='square'/%3e%3c/svg%3e")`,
      },
    },
    screens: {
      sm: '576px',
      'sm-max': { max: '576px' },
      md: '768px',
      'md-max': { max: '768px' },
      lg: '992px',
      'lg-max': { max: '992px' },
      xl: '1200px',
      'xl-max': { max: '1200px' },
      '2xl': '1320px',
      '2xl-max': { max: '1320px' },
      '3xl': '1600px',
      '3xl-max': { max: '1600px' },
      '4xl': '1850px',
      '4xl-max': { max: '1850px' },
    },
    colors: CONFIG_COLORS,
  },
  plugins: [],
};
export default config;
