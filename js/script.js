$( document ).ready(function() {
    var numInput = $("#numInput"), 
        convertToWordsBtn = $("#convertToWordsBtn"),
        convertError = $("#convertError"),
        convertResult =  $("#convertResult")
    ;     
    convertToWordsBtn.click(function() {
        convertResult.text("");
        var num = numInput.val();
        var isValid = validateNum(num);        
        if(isValid){
           var words = num_to_words(num);
           convertResult.text(words);
        }
    });
})
function validateNum(num){
    convertError.text("");
    var isValid = true;
    //todo: validation
    return isValid;
}