

		
		$('#searchClick').on("click", function(){

			// collecting the value from the input field.
			var state = $('#state').val().trim();

			// This is our API call using the name from the input box to make the call for all surgeons with a last name of something specific. 
			var queryURL = "https://data.cms.gov/resource/jc9n-itkq.json/";
			console.log("Click Is Working");

	

			

			// This is the Actual API call. Using the Get Method. 
			$.ajax({
			          url: queryURL,
			          method: "GET"
			        }).done(function(response){
			        	// console.log(response);

			 
			        	// Looping over all of the responses in my Ajax call. 
						for(var i=0; i<response.length; i++){	

							if(state == response[i].state){
								// console.log(response);

							// Creating Containers to append data to. 
							var resultsDiv = $(".resultsDiv");
							var snfResults = $("<div>");
							var snfName = $("<div>");
				        	var snfDetails = $("<div>");
				        	var snfState = $("<div>");

				        	// Pulling Specific Variables from the AJAX call and the objects.
				        	snfResults.attr("id", "mainSNFContainer") 
				        	snfName.attr("id", "snfName");
				        	snfName.text("SNF Name: " + response[i].facility_name);
				        	snfState.attr("id", "snfState");
				        	snfState.text("The SNF State is: " + response[i].state);
				        	snfDetails.attr("id", "snfDetails");		        	
				        	snfDetails.text("Average Patient Age: " + response[i].average_age);

				        	// Appending everying to a main parent DIV 
				        	snfResults.append(snfName);
				        	snfResults.append(snfDetails);
				        	snfResults.append(snfState);

				        	// Appending to the Results Div in the HTML document
				        	resultsDiv.append(snfResults);
				        	}
				        }
			        

			        });


			
		})


