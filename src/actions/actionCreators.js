const generateQuote = (quoteData) => {
    return {
        type: 'NEW',
        quoteData
    }
}

const fetchQuote = (quotes) => {
    return {
        type: 'FETCH',
        quotes
    }
}
export {generateQuote, fetchQuote}