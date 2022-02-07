
/*Decide on what types of messages you want your program to output*/

const OUTPUT = `Your sign is `;
const sign = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];

const randomMessage = () => {
   const idx = Math.floor(Math.random() * sign.length);
   return `${OUTPUT}${sign[idx]}`;
}

console.log(`

    I think..... 
    ${randomMessage()}
    
    right?....
   
`);