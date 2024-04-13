# Tax-Calculator
This is a simple tax calculator implemented using HTML, CSS, JAVASCRIPT. It calculates your overall income after tax deductions. Besides thid we have given various validation for input fields also.

### References & Requirements

- The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
        - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
        - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax
    - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60
        - Example
            - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs
- Do not restrict user from entering incorrect values like characters in the number fields
    - Highlight a error icon to the right of the input field (shown as an example in above image as a circle with `!`). Hovering over it should show the error in a tooltip
    - If no errors are present, dont show the error icon
    - This should be present in all the number fields
- The age dropdown field should have 3 values -
    - <40
    - ≥ 40 & < 60
    - ≥ 60
    - If user has not entered this value and clicks on submit, show a error icon hovering over which should show that input field is mandatory
- Error icons should not be visible in the form by default.
- Clicking on submit should show a modal which would show the final values based on above calculations.

### How to run Tax Calculator
To run this application locally, follow below steps:-
1. Download the above HTML, CSS, JAVASCRIPT files to your computer.
2. Open these files in any code editor of your preference. Now if you have GO LIVE extension in your code editor you can click on this and it will be live on browser.
3. Another option is you can right click on HTML file and select "Open with" and choose any browser of your choice.
4. Now you can interact with the application and have fun with this tax calculator

### How to use the Tax Calculator
 - Input the gross income, extra income, age group and total deductions.
 - Click on the submit button it will calculate the overall income and display the result on the screen.
 - If any error in the input field is there it will be shown to you and you have to correct it.

### Test Cases

# Case 1: Tooltip is shown on hovering over the question mark icons

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/2eb85e8c-b139-4110-91d9-f5aea4ef6219" width="450" height="500">

Case 2


