
async function getAPIData() {
    //This function retrieves a set of 10 questions when the user cicks the button.
    var questResponse = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple");
    var questData = await questResponse.json();

    // console.log(questResponse);

    console.log(questData);

    console.log(questData.response_code);

    console.log(questData.results[0].question);
    
    // var question1 = questData.results[0].question;

    document.getElementById("quest1").innerHTML = questData.results[0].question;
}


