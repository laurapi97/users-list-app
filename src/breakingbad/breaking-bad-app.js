
// peticion http

/**
 * @returns {Promise <Object>}  quote information
 */
const fetchQuote = async () => {
   const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
   const data = await res.json();

   console.log(data[0]);
   return data[0];
   
   
}

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BreakingBadApp = async (element) => {

    document.querySelector('#app-title').innerHTML = 'BreakingBad App';



    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');

    nextQuoteButton.innerText='Next Quote';



// MOSTRAR EL QUOTE
    
    const renderQuote = (data) =>{

        quoteLabel.innerHTML = `${data.quote}`;
        authorLabel.innerHTML = `${data.author}`;

        element.replaceChildren (quoteLabel, authorLabel, nextQuoteButton)

    }

//   // Obtener y mostrar la primera frase
  
//   const loadQuote = () => {
//     fetchQuote().then(renderQuote);
// };

// // Evento para el botón
// nextQuoteButton.addEventListener('click', loadQuote);

// // Cargar la primera frase automáticamente
// loadQuote();


// }


nextQuoteButton.addEventListener('click', async ()=>{
    element.innerHTML = 'Loading...';
    const loadQuote = await fetchQuote ();
    renderQuote(loadQuote);
});


fetchQuote()
    .then (renderQuote);

}
