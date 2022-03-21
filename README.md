# 3-Password_Generator

## Description

As a training developer, I was presented with the challenge of coding a **Secure Password Generator** using javaScript as primary tool. The outcome is a fully functional, user friendly web page; that asks the user all the elements they would like to include in their password as well as the lenght desired. And also, it verifies that all the criteria selected are fulfilled in it.

One of the main tools used to solve this challenge, outside of the obvious JavaScript, was pseudocode. Once, all the steps were thoroughly designed in plain languague it was easier the coding task.

## Usage

The user is presented with a homepage that includes a button to start generating the desired password.

1. The user clicks on the "Generate Password" button.

![Homepage](/Assets/images/Homepage.PNG)

2. A prompt requests the length desired for the password. The password needs to be at least 8 characters and no more than 128 in length. If the user fails to enter a number in the accepted interval, or enters a NaN, the prompt will repeat itself until the conditions are fulfilled.

![Length desired](/Assets/images/Length.PNG)

3. The user is asked, using prompts, the criteria for their password following this order:
    
    1. Uppercase letters \[A-Z\]
    
    ![Uppercase](/Assets/images/Uppercase.PNG)
    
    2. Lowercase letters \[a-z\]

    ![Lowercase](/Assets/images/Lowercase.PNG)

    3. Numbers \[0-9\]

    ![Numbers](/Assets/images/Numbers.PNG)

    4. Special Characters \[!"#$%&'()*+,-./:;<=>?@\[\\\]^_`{|}~\]

    ![Special Characters](/Assets/images/SpecialCharacters.PNG)

The user needs to select at least one type of character or the interface is going to repeat itself until they do so.

![No criteria selected](/Assets/images/NoSelection.PNG)

4. Once the user has selected at least one criteria, the code will, randomly, generate a password and show it to them. This password is, previously, verified to check that it includes all the criteria selected by the user. We do this using regular expressions, built based on the user's preferences.

![Password Generated](/Assets/images/PasswordGenerated.PNG)