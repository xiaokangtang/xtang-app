package main
import (
"encoding/json"
"log"
"net/http"
"sync"
)
type Product struct {
ID int `json:"id"`
Name string `json:"name"`
Price float64 `json:"price"`
Category string `json:"category"`
}
var products = []Product{
{ID: 1, Name: "Laptop", Price: 999.99, Category: "Electronics"},
{ID: 2, Name: "Coffee Maker", Price: 49.99, Category: "Home Appliances"},
{ID: 3, Name: "Book: The Great Gatsby", Price: 9.99, Category: "Books"},
// ... add more products as needed
}
var mu sync.Mutex
func getProducts(w http.ResponseWriter, r *http.Request) {
mu.Lock()
defer mu.Unlock()
w.Header().Set("Content-Type", "application/json")
w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
json.NewEncoder(w).Encode(products)
}
func main() {
http.HandleFunc("/api/products", getProducts)
log.Println("Server started on :8080")
log.Fatal(http.ListenAndServe(":8080", nil))
}