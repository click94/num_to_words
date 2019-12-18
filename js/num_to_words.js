/* Array of units as words */
var units  = [
    '', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];  

/* Array of tens as words */
var tens  = [
'', '', 'twenty', 'thirty', 'forty',
'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

/* Array of scales as words */
var scales  = [
'', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
];

/* and word*/
var and = "and";

function num_to_words(num){
    var string = num.toString(), chunks = [], words = ""; 

    /* Remove spaces and commas */
    string = string.replace(/[, ]/g,"");

    /* Is number zero? */
    if( parseInt( string ) === 0 ) {
        return 'zero';
    }

    /* Split user arguemnt into 3 digit chunks from right to left */
    start = string.length;
    while( start > 0 ) {
        end = start;
        chunks.push( string.slice( ( start = Math.max( 0, start - 3 ) ), end ) );
    }

    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if( chunksLen > scales.length ) {
        return '';
    }

    return words;
}