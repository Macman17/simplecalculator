function calculation(){
    console.log("calculating...");
    //get the values from the prompt and store them in two vars
        let number1=prompt("Enter first number");
        let number2=prompt("Enter second number");

    // do operation and store the results in vars (you need four vars)
        let sum=number1*number2;
        let add=number1+number2;
    //display the result in the HTML
    document.getElementById("results").innerHTML=`<p>The sum is: ${add}</p>,<p>The sum is: ${sum}</p>`;
