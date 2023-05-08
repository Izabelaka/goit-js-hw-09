// Zrobisz zadanie?
// Zadanie 1 - zmiana koloru
// Wykonaj to zadanie w plikach 01-color-switcher.html i 01-color-switcher.js.

// Obejrzyj wersję demonstracyjną wideo o działaniu zmiany koloru.

// W HTML znajdują się przyciski «Start» i «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>


// Napisz skrypt, który po kliknięciu przycisku «Start», raz na sekundę zmienia kolor tła <body> na wartość losową używając do tego stylu inline. Po kliknięciu przycisku «Stop», kolor tła powinien przestać się zmieniać i “zatrzymać” się na aktualnym kolorze.

// UWAGA
// Zwróć uwagę na to, że przycisk «Start» można klikać w nieskończoność. Zrób tak, żeby przycisk «Start» był nieaktywny, tak długo jak zmiana kolorów jest uruchomiona (użytj atrybutu disabled).

// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// HTML:
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Color switcher</title>
//     <link rel="stylesheet" href="css/common.css" />
//   </head>
//   <body>
//     <p><a href="index.html">Go back</a></p>

//     <button type="button" data-start>Start</button>
//     <button type="button" data-stop>Stop</button>

//     <script src="js/01-color-switcher.js" type="module"></script>
//   </body>
// </html>
