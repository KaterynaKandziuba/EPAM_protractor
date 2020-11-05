Test-cases of the framework:

1st part: Checking the Investors page

1.	To check the correct order of the button list on the investors page
Given user arrives on the https://www.epam.com/
When user click on the link ‘Investors’ on footer
And user can see http://investors.epam.com/investors page
Then user can see list of links on this page with correct order (starts from ‘Stock Price’ ends on ‘Contact Investor Relations’)

2.	To check the button of the Stock Price
Given user arrives on the https://www.epam.com/
When user click on the link ‘Investors’ on footer
And user can see http://investors.epam.com/investors page
Then user can click on Stock Price button 
And go to the Stock Price page https://investors.epam.com/investors/stock-price

3.	To check the news order in the News section 
Given user arrives on the https://www.epam.com/
When user click on the link ‘Investors’ on footer
And user can see http://investors.epam.com/investors page
Then user can see list of news on this page with correct headers

4.	To check the Epam management buttons presence
Given user arrives on the https://www.epam.com/
When user click on the link ‘Investors’ on footer
And user can see http://investors.epam.com/investors page
Then user can see list of links to EPAM management page
And list have correctly named buttons: Board of Directors and Executive Management

5.	To check  the Board of Directors button
Given user arrives on the https://www.epam.com/
When user click on the link ‘Investors’ on footer
And user can see http://investors.epam.com/investors page
Then user can click on Board of Directors button
And go to the Board of Directors Page https://investors.epam.com/investors/leadership-and-governance#directors


2nd part: Checking the Search functionality

1.	To check the Search button 
Given user arrives on the https://www.epam.com/
When user clicks on “Search” icon on the header
Then tab with the most frequent searches occurs

2.	To check the search "Submit" button is blue
Given user arrives on the https://www.epam.com/
When user clicks on “Search” icon on the header
Then the search "Submit" button is blue

3.	To check the correctness of the search results
Given user arrives on the https://www.epam.com/
When user clicks on “Search” icon on the header
And enters “Investors” in the search field
And presses “Find” button
Then page with result for “Investors” opens
And all results contain “Investor” word


3rd part: Checking the “Contact Us” form

1.	To check the Contact Us button
Given user arrives on the https://www.epam.com/
When user clicks on “Contact Us” button
Then Contact Us page opens

2.	To check the ability to fill all form fields with text
Given user arrives on the https://www.epam.com/
When user clicks on “Contact Us” button
Then user fills the form fields with text
And fills checkboxes
And no error occurs

3.	To check the obligatory filling of the fields with *
Given user arrives on the https://www.epam.com/
When user clicks on “Contact Us” button
Then user clicks on the fields with *
And fields start to glow red

4.	To check for errors for empty checkboxes
Given user arrives on the https://www.epam.com/
When user clicks on “Contact Us” button
And fills the form fields with text
And fills "HOW DID YOU HEAR ABOUT EPAM?*?" combo box
And press “Submit” button
Then “Fill checkbox” error occurs

