"use client"
import axios from "axios";

export const PokemonInstance = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    baseURL: "https://pokeapi.co/api/v2",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
});
console.log("🚀 ~ process.env.NEXT_PUBLIC_API_BASE_URL:", process.env.NEXT_PUBLIC_API_BASE_URL)
