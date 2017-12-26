
$('#searchClick').on("click", function() {

    // collecting the value from the input field.
    var state = $('#state').val().trim();

    // This is our API call using the name from the input box to make the call for all surgeons with a last name of something specific. 
    var queryURL = "https://data.cms.gov/resource/jc9n-itkq.json/?state=" + state;
    console.log("Click Is Working");

    // Clearing the main Div after every search
    $(".resultsDiv").empty();




    // This is the Actual API call. Using the Get Method. 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        // console.log(response);


        // Looping over all of the responses in my Ajax call. 
        for (var i = 0; i < response.length; i++) {

           

                // Creating Containers to append data to. 
                var resultsDiv = $(".resultsDiv");
                var snfResults = $("<div>");
                var snfName = $("<div>");
                var snfDetails = $("<div>");
                var snfState = $("<div>");
                var snfCostPerPatient =$("<div>");
                var snfAvgLOS = $("<div>");

                // Pulling Specific Variables from the AJAX call and the objects.
                snfResults.attr("id", "mainSNFContainer")

                snfName.attr("id", "snfName");
                snfName.text("SNF Name: " + response[i].facility_name);

                snfState.attr("id", "snfState");
                snfState.text("SNF State: " + response[i].state);

                snfDetails.attr("id", "snfDetails");
                snfDetails.text("Average Patient Age: " + response[i].average_age);

                snfCostPerPatient.attr("id", "snfCostPerPatient");
                snfCostPerPatient.text("Average CMS Payment Per Patient: $" +  (response[i].total_snf_medicare_payment_amount / response[i].distinct_beneficiaries_per_provider).toFixed(2));

                snfAvgLOS.attr("id", "snfAvgLOS");
                snfAvgLOS.text("Average SNF LOS: " + response[i].average_length_of_stay_days);

                // Appending everying to a main parent DIV 
                snfResults.append(snfName);
                snfResults.append(snfDetails);
                snfResults.append(snfState);
                snfResults.append(snfCostPerPatient);
                snfResults.append(snfAvgLOS);

                // Appending to the Results Div in the HTML document
                resultsDiv.append(snfResults);
           
        }


    });



})