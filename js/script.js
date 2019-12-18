$( document ).ready(function() {
    var numInput = $("#numInput"), 
        convertToWordsBtn = $("#convertToWordsBtn"),       
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
    var convertError = $("#convertError");
    convertError.text("");
    var isValid = true;
    if(!num){
        convertError.text("Please add a number.");
        isValid = false;
    }else if(!$.isNumeric(num)){
        convertError.text("Please add a valid number.");
        isValid = false;
    }
    return isValid;
}