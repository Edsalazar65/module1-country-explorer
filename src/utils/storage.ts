import type { Country } from '../types/country';

const FAVORITES_KEY = 'country_explorer_favorites';

export function getFavorites(): Country[] {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveToFavorites(country: Country): void {
  const favorites = getFavorites();
  if (!favorites.some(f => f.cca3 === country.cca3)) {
    favorites.push(country);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

export function removeFromFavorites(countryCode: string): void {
  const favorites = getFavorites().filter(f => f.cca3 !== countryCode);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function isFavorite(countryCode: string): boolean {
  return getFavorites().some(f => f.cca3 === countryCode);
}

export function clearAllFavorites(): void {
  localStorage.removeItem(FAVORITES_KEY);
}