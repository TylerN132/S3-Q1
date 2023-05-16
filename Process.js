// Process is a global object that provides information and control to the current node.js process.
// It allows command line arguments, enviroments, variables and various process events

// Example usage of process in Node.js

console.log("Command-line arguments:", process.argv);
// Output: Command-line arguments: [ 'node', 'app.js', 'arg1', 'arg2' ]

console.log("Environment variable:", process.env.NODE_ENV);
// If NODE_ENV is set to 'development'
// Output: Environment variable: development

process.on("exit", (code) => {
  console.log("Process exited with code:", code);
});

// Exiting the process
process.exit(1);
