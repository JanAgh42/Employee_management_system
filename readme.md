# Vývojové prostredie

-   dotnet 6.0 SDK
    -   https://dotnet.microsoft.com/en-us/download/dotnet
-   node 16
    -   https://nodejs.org/en/
-   VS Code
    -   https://code.visualstudio.com/

# Zadanie

## Vytvorte webovú stránku, ktorá bude slúžiť na správu zamestnancov vo firme.

**K zamestnancovi prislúchajú nasledujúce údaje:**

-   Meno - povinný udaj
-   Priezvisko - povinný udaj
-   Adresa - nepovinný udaj
-   Dátum narodenia - povinný udaj, dátum z minulosti
-   Dátum nástupu - povinný udaj, dátum z budúcnosti alebo aktuálny dátum
-   Pozícia vo firme - povinný udaj
-   Plat - povinný udaj, desatinne číslo.

**Možné pozície vo firme:**

-   Tester
-   Programátor
-   Support
-   Analytik
-   Obchodník
-   Iné

**Pomocou stránky má byť používateľ schopný:**

-   Zobraziť si zoznam aktuálnych zamestnancov.
-   Zobraziť si zoznam predošlých zamestnancov.
-   Zobraziť si detail konkrétneho zamestnanca. Tento detail sa zobrazí výberom konkrétneho zamestnanca zo zoznamu zamestnancov.
-   Vytvoriť nového zamestnanca.
-   Zmazať aktuálneho zamestnanca.
-   Zobraziť zoznam pozícii vo firme.
-   Vytvoriť novu pozíciu.
-   Zmazať pozíciu.

## Ako ma stránka vyzerať

Stránka ma mat tri navigačne tlačidla (umiestnene v hornej časti). Jedno bude slúžiť na zobrazenie zoznamu aktuálnych zamestnancov, druhé na zobrazenie zoznamu predošlých zamestnancov a tretie na zobrazenie zoznamu pozícii vo firme.

**Zoznam aktuálnych zamestnancov ma mat nasledujúce stĺpce:**

-   Meno - vznikne spojením mena a priezviska zamestnanca. Po kliknutí na meno zamestnanca sa zobrazí obrazovka, na ktorej budú aktuálne údaje zamestnanca bez možnosti ich editácie.
-   Aktuálna pozícia
-   V tretom stĺpci bude tlačidlo pre editovanie údajov zamestnanca. Po jeho stlačení sa zobrazí obrazovka, na ktorej budú aktuálne údaje zamestnanca s možnosťou ich editácie. Pozícia zamestnanca sa bude vyberať skrz dropdown element. Na obrazovke sa bude nachádzať aj zoznam predošlých pozícii zamestnanca spolu s dátumovým ohraničením (kedy na danú pozíciu nastúpil a dokedy na danej pozícii pracoval). Editovanie zoznamu predošlých pozícii nebude povolene. V dolnej časti tejto obrazovky bude tlačidlo na uloženie zmien.
-   Vo štvrtom stĺpci bude tlačidlo pre zmazanie zamestnanca.

Obrazovka, na ktorej sa nachádza zoznam zamestnancov, bude obsahovať jedno globálne tlačidlo pre pridanie nového zamestnanca. Po jeho stlačení sa zobrazí rovnaká obrazovka ako pri zmene údajov existujúceho zamestnanca. Dátum nástupu ma byt automaticky vyplnený na dnešný deň (ale s možnosťou manuálnej zmeny).

Pred zmazaním zamestnanca sa aplikácia spýta, ci ma zamestnanca archivovať. Archivovaní zamestnanci sa budú zobrazovať v zozname predošlých zamestnancov.

**Zoznam predošlých zamestnancov ma mat nasledujúce stĺpce:**

-   Meno - vznikne spojením mena a priezviska zamestnanca. Po kliknutí na meno zamestnanca sa zobrazí obrazovka, na ktorej budú zobrazene aktuálne údaje zamestnanca bez možnosti ich editácie.
    -Posledná pozícia vo firme.
-   Dátum zmazania (prepustenia) zamestnanca.
-   Vo štvrtom stĺpci bude tlačidlo pre trvale zmazanie zamestnanca zo systému. Trvalému zmazaniu zamestnanca musí predchádzať potvrdenie akcie používateľom (aplikácia sa spýta, ci skutočne trvalo zmazať zamestnanca).

**Zamestnanci a pozície musia byt evidovaní na serveri. Dáta budú uložene v SQL databáze ľubovoľného typu. Môžeme predpokladať, že vždy bude existovať len jeden klient.**

## Technológie

Klient (frontend)

-   Vue.js v3
-   Vite
-   Typescript
-   SASS, LESS alebo CSS (Bootstrap alebo iný CSS framework)

Server (backend)

-   ASP.NET Core Web API - dotnet 6

Databáza

-   SQL

Na čo dbať

-   čistota, štruktúra a formátovanie kódu
-   SOLID principle
-   DRY principle

# Čo študovať

**Backend**

-   REST API
-   DDD - domain driven design
-   IoC a Dependency Injection
    -   https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0
-   C#
    -   https://www.syncfusion.com/ebooks/csharp
    -   https://docs.microsoft.com/en-us/dotnet/csharp/
-   ASP.NET Web API 2
    -   https://www.syncfusion.com/ebooks/ASPNET_Web_API_Succinctly
-   Entity Framework
    -   https://docs.microsoft.com/en-us/ef/
-   C# Async programming
    -   https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/

**Frontend**

-   SPA
    -   https://en.wikipedia.org/wiki/Single-page_application
-   HTTP
    -   https://www.syncfusion.com/ebooks/http
-   SASS, LESS alebo CSS
-   Vue3
    -   https://vuejs.org/guide/introduction.html
-   Typescript
    -   https://www.syncfusion.com/ebooks/typescript
-   Async/Promises
    -   https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks
-   Bootstrap
    -   https://www.syncfusion.com/ebooks/twitterbootstrap4-succinctly
