# Angular E-Commerce Shop

## Opis projektu  
Angular E-Commerce Shop to aplikacja frontendowa zbudowana przy użyciu Angulara, mająca służyć jako sklep internetowy. Celem tego projektu jest umożliwienie przeglądania produktów, zarządzania koszykiem oraz integracji z backendem (API). Projekt ma pełnić rolę przykładowej aplikacji pokazującej wzorce i dobre praktyki w tworzeniu sklepu w Angularze.

## Funkcjonalności  
- Przeglądanie katalogu produktów (lista produktów)  
- Wyświetlanie szczegółów pojedynczego produktu  
- Dodawanie produktów do koszyka  
- Zarządzanie zawartością koszyka (zmiana ilości, usuwanie pozycji)  
- Obsługa stanów ładowania (loading), błędów przy komunikacji z API  
- Responsywność interfejsu na urządzeniach mobilnych i desktopowych

## Technologie i podejścia  
- Angular (TypeScript, HTML, SCSS)  
- Angular CLI jako narzędzie do generowania i zarządzania projektem  
- Modularna struktura aplikacji
- Komponenty, serwisy (logika, komunikacja z API), interfejsy i modele typów  
- Routing Angulara
- HTTPClient do wysyłania żądań REST

## Instrukcja uruchomienia  
1. Sklonuj repozytorium:  
   ```bash
   git clone https://github.com/Jutrzenka/Angular-ecommarce-shop.git
   cd Angular-ecommarce-shop
   npm install
   ng serve
   ```
   Opcjonalnie zbuduj wersję produkcyjną:
   ```bash
   ng build --configuration production
   ```
   
