**Limit Function Visualizer**

**Overview**

The Limit Function Visualizer is an interactive web application designed to help users explore the behavior of mathematical functions as they approach a specific point (limits in calculus). Built with HTML, CSS, JavaScript, p5.js, and math.js, the app visualizes functions graphically and provides a numerical table of function values near the limit point. It supports one-sided limits, infinite limits, and common functions like sin(x)/x or 1/x, making it a valuable tool for students and educators in calculus.

**Features**

Function Input: Enter any single-variable mathematical function (e.g., sin(x)/x, x^2, 1/x) using math.js syntax.
Limit Point Selection: Specify the point where the limit is evaluated (e.g., x → 0).
Interactive Graph: Visualize the function with p5.js, with axes and a marker for the limit point.
Numerical Table: View function values approaching the limit point from both sides (left and right).
Zoom Control: Adjust the graph’s range to zoom in or out for better visualization.
Error Handling: Displays errors for invalid functions or undefined points.

**Tech Stack**

**HTML**: Structure of the web application.
**CSS**: Custom styling, enhanced with Tailwind CSS for responsive design.
**JavaScript**: Core logic for user input handling and visualization updates.
p5.js: Renders the interactive function graph.
math.js: Parses and evaluates mathematical expressions.
Tailwind CSS: Provides utility-first CSS for styling.

**Project Structure**

limit-function-visualizer/
├── index.html       # Main HTML file
├── styles.css       # Custom CSS styles
├── script.js        # JavaScript logic for visualization
└── README.md        # Project documentation

**Setup Instructions**

Clone or Download the Project:
Clone the repository or download the files (index.html, styles.css, script.js).


Place Files in a Directory:

Ensure all files are in the same directory.


Run a Local Server:

Due to CDN dependencies (p5.js, math.js, Tailwind CSS), serve the project using a local server to avoid CORS issues.
Example with Python:python -m http.server 8000


Alternatively, use VS Code’s Live Server extension.


Access the Application:
Open a browser and navigate to http://localhost:8000.



**Usage**

Enter a Function:
In the input field, type a mathematical function (e.g., sin(x)/x, 1/x, x^2).
Supported functions follow math.js syntax (see math.js documentation).


**Set the Limit Point:**

Input the value of x where the limit is evaluated (e.g., 0 for x → 0).

**Adjust Zoom:**

Use the range slider to zoom in (smaller range) or out (larger range) on the graph.


**Update Visualization:**

Click the "Update Graph" button or adjust inputs to refresh the graph and table.


**View Results:**

The graph shows the function’s behavior, with a red dot marking the limit point.
The table lists function values for x approaching the limit point from both sides.



**Example**

Function: sin(x)/x, Limit Point: 0
Graph: Shows the function converging to 1.
Table: Displays values like f(-0.0001) ≈ 1, f(0.0001) ≈ 1, indicating the limit is 1.


Function: 1/x, Limit Point: 0
Graph: Shows a vertical asymptote.
Table: Shows diverging values, indicating no two-sided limit exists.



**Limitations**

Supports only single-variable functions parsable by math.js (e.g., no piecewise functions without extension).
Numerical approximations may not capture exact limits for complex cases (e.g., indeterminate forms requiring symbolic analysis).
Graph resolution is pixel-based, so very small steps may not render precisely.

**Future Enhancements**

Add symbolic limit computation using a library like Algebrite.
Include preset functions (e.g., sin(x)/x, e^x) for quick testing.
Enhance the table to indicate whether the limit exists or is infinite.
Improve UI with additional styling or a framework like React.

**Contributing**

Contributions are welcome! To contribute:

**Fork the repository**

Create a new branch (git checkout -b feature-branch).
Make changes and test locally.
Submit a pull request with a clear description of changes.

**License**

This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

Built with p5.js for visualization.
Uses math.js for function parsing.
Styled with Tailwind CSS.

For issues or suggestions, please open an issue on the repository or contact the maintainer.
