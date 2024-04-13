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

#### Case 1: Tooltip is shown on hovering over the question mark icons

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/5a2f8595-d800-4bbe-bb85-1ef19a33a851" width="450" height="500">

#### Case 2: When try to submit without any input it will shows Error icon and when we hover it it will show a message "Input field is mandatory"
Image 1: Showing Error icon when we click on Submit. Error icon is shown only in Gross income input field and Age input field. It will consider extra income and applicable deductions equal to 0 if not provided by the user to calculate the tax.</br>
Image 2: Showing Error message "Input field is mandatory" when we hover over error icon (!).

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/5234f33b-5f61-4f4e-9fd8-efe49fc6cacd" width="400" height="500">

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/23649c47-cd05-4a71-82c4-7064fd43409d" width="450" height="500">

#### Case 3: When we try to write any characters in the Gross Income, Extra Income and Deductions input field instead of number. Then Error icon will appear with a message "Please enter numbers only"
Image 1: Show Error icon in the Gross income, Extra income and deductions input field. </br>
Image 2: When we hover over the error icon it will show a message "Please enter numbers only".

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/50fcb1c7-959a-4cce-91d2-77615be0a551" width="400" height="500">

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/3db30faa-7f21-4d10-964f-3d2624ecdd0f" width="450" height="500">

#### Case 4: When all other field are filled properly but age group is left empty then on submit error icon will be show in age group field which show a message "Input field is mandatory"

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/288e1732-c532-4537-9442-c57202cbc839" width="450" height="500">

#### Case 5: If Gross Income + Extra Income - Total Deductions is ≤ 8 lakhs then no tax is applicable.

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/2990e3a9-244b-4d9e-9582-0f44b7ae70f3" width="400" height="500">

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/5c77e87f-e05a-4945-88f9-d0d1c07067cd" width="450" height="500">

#### Case 6: If Gross Income + Extra Income - Total Deductions is > 8 lakhs then income tax is applicable based on age group. So overall income will be calculated accordingly. (USING DECIMAL VALUE)
1. Age < 40 (Taxed at 30%)

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/7f6d39bc-fac7-449c-ab92-b9afadd47c06" width="400" height="500">

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/bc0aaecb-ce8c-4334-861e-dafe9b263914" width="450" height="500">

2. Age ≥ 40 & < 60 (Taxed at 40%)

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/4ef190c6-0c67-4ae1-909c-62c4bfe2d483" width="400" height="500">

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/fe8cb8db-d0b0-40c1-a655-75e3b5d2c77a" width="450" height="495">

3. Age ≥ 60 (Taxed at 10%)

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/459482a4-03dc-4ed1-b4e0-3e78a0700702" width="400" height="500">

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/677a069a-3ec2-4afd-8e4d-ab554744afe7" width="450" height="500">

#### Case 7: We can calculate overall income after tax deduction in decimal value also.

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/6963fede-4c50-4ef3-a65f-df7aa75e9442" width="400" height="500">

<img src="https://github.com/AyushBishnoi/Tax-Calculator/assets/123483082/3984ffb0-d37e-49d4-80ac-6d74cd542732" width="450" height="500">
