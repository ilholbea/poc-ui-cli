package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	// Set the directory for static files (React build)
	fs := http.FileServer(http.Dir("./poc-cli-ui-js/dist")) // this can be any route, we just need the bundled react/preact app, built with `npm run build`

	// Serve the static files
	http.Handle("/", fs)

	// Get the PORT from environment variables (default 3000)
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	fmt.Println("Server started at http://localhost:" + port)
	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		fmt.Println("Error starting server:", err)
	}
}
