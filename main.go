package main

import (
	"embed"
	"fmt"
	"net/http"
	"io/fs"
	"os"
	"log"
)

//go:embed all:poc-cli-ui-js/dist
var staticFiles embed.FS

func main() {
	staticFS := fs.FS(staticFiles)
	htmlContent, err := fs.Sub(staticFS, "poc-cli-ui-js/dist")
	if err != nil {
		log.Fatal(err)
	}
	fs := http.FileServer(http.FS(htmlContent))

	// Serve the static files
	http.Handle("/", fs)

	// Get the PORT from environment variables (default 3000)
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	fmt.Println("Server started at http://localhost:" + port)
	err = http.ListenAndServe(":"+port, nil)
	if err != nil {
		fmt.Println("Error starting server:", err)
	}
}