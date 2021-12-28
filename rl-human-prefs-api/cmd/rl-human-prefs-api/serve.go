package main

import (
	"fmt"

	"github.com/spf13/cobra"
)

func init() {
	rootCmd.AddCommand(serveCmd)
}

var serveCmd = &cobra.Command{
	Use:   "serve",
	Short: "",
	Long:  ``,
	Run: func(cmd *cobra.Command, args []string) {
		serve()
	},
}

func serve() {
	fmt.Println("Hello World!")
}
