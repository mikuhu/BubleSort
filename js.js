// Enter necessary numbers of inputs and add that
function addInputs() {
    
        var numbersOfinputs = $('#createInput').val();
        debugger;
        if (numbersOfinputs != '' && numbersOfinputs <= 10 && numbersOfinputs > 0) {
            for (let i = 0; i < +numbersOfinputs; i++) {
                $('.allBlocks').append('<input type="text" class="block" id="' + i + '">')
                //$('#'+i).css('height', 10 * (i+1) + 'px');
    
            }
            // hide btn and input
            $('#inputBtn').css('visibility', 'visible');
            $('#inputBtn2, #createInput').hide();
        } else {
            alert('Can you enter correct params? more 0 less 10');
        }
    
    }
    
    //The func parse values from inputs 
    function inputAddParams() {
    
        var a = [];
        var inputValues = $(".block");
        for (let i = 0; i < inputValues.length; i++) {
            if (inputValues[i]['value'] != "") {
                a.push(inputValues[i]['value']);
            }
    
    
        }
        return a;
    }
    
    //The func sorts values 
    function bubbleSort() {
        let a = inputAddParams();
    
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < a.length - 1; i++) {
                //debugger;
    
                if (a[i] > a[i + 1]) {
                    var temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    swapped = true;
                    //The code replaces divs
                    $("#" + (i + 1)).insertBefore("#" + i);
                    //The code replaces ID
                    $("#" + i).attr("id", i + 1);
                    $("#" + (i + 1)).attr("id", i);
                }
    
    
            }
        } while (swapped);
    }