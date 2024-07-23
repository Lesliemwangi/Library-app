// Favorites.jsx
import React from "react";
import { Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux"; // Ensure this is installed

const BASE_URL = "http://localhost:5000"; // Update this with your actual base URL

const Favorites = ({ bookId, onAddToFavorites }) => {
  const handleAddToFavorites = async () => {
    try {
      const response = await fetch(`${BASE_URL}/favorites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId }),
      });

      if (!response.ok) {
        throw new Error("Failed to add to favorites");
      }

      toast.success("Added to favorites!");
      onAddToFavorites(); // Notify parent component about successful addition
    } catch (error) {
      console.error("Error adding to favorites:", error);
      toast.error("Error adding to favorites");
    }
  };

  return (
    <Button variant="danger" onClick={handleAddToFavorites} className="mt-3">
      <FaHeart className="me-2" />
      Add to Favorites
    </Button>
  );
};

export default Favorites;
