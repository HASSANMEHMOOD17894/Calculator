function calculate() {
    let string = "";
    const operators = ['+', '-', '×', '÷']; // Define operator characters
    let buttons = document.querySelectorAll('.function');
    let lastClickedOperator = null; // Store the last clicked operator button
    
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            const clickedButton = e.target;
            
            // If the clicked button is an operator, apply the styling
            if (operators.includes(clickedButton.innerHTML)) {
                // Reset the previous operator's style if there is one
                if (lastClickedOperator) {
                    lastClickedOperator.style.backgroundColor = '#f39c12'; // Reset to original orange color
                    lastClickedOperator.style.color = 'white'; // Reset text color to white
                }

                // Apply new style to the clicked operator button
                clickedButton.style.backgroundColor = 'white'; // White background on click
                clickedButton.style.color = '#f39c12'; // Light orange text color
                clickedButton.style.transitionDuration = '.2s'; // Smooth transition
                
                // Update the lastClickedOperator to the current one
                lastClickedOperator = clickedButton;
            }

            if (clickedButton.innerHTML === '=') {
                try {
                    string = eval(string.replace('×', '*').replace('÷', '/')); // Evaluate the expression (replace symbols with JS operators)
                    document.querySelector('#display').value = string;
                    
                    // Reset the last clicked operator button's style after evaluation
                    if (lastClickedOperator) {
                        lastClickedOperator.style.backgroundColor = '#f39c12'; // Reset to original orange color
                        lastClickedOperator.style.color = 'white'; // Reset text color to white
                        lastClickedOperator = null; // Reset the lastClickedOperator variable
                    }
                } catch {
                    document.querySelector('#display').value = "Error";
                }
            } else if (clickedButton.innerHTML === 'C') {
                string = "";
                document.querySelector('#display').value = string;
                lastClickedOperator = null; // Reset the lastClickedOperator variable
            } else {
                string += clickedButton.innerHTML;
                document.querySelector('#display').value = string;
            }
        });
    });
}

// Call the calculate function to set up event listeners
calculate();
