# Wisercat Pet Dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0

## Front end run

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Back end run

Download the application. Navigate to `src/main/java/excercises/wisercat3/Wisercat3Application.java`. Run `main()` method. The API is running on
`http://localhost:8080/`


## API Documentation

API Documentation can be found at `http://localhost:8080/swagger-ui/index.html`

## Main Framework Versions

Angular CLI version 16.0.0
Bootstrap version 5.2.3
SpringBoot version 3.0.6

+ additional libraries and dependecies.

## Business rules

User password must be atleast of length 5
Users can enter their pet id codes themselves, however, they must be exactly 8 digits long
Every pet id code must be unique, the user must enter a new one if their desired one alreayd exists
Pet name can be any string of length 1
Pet type (animal), fur color and country can only be predefined values from the database, user cannot 



## Mõtteid

Kogu ülesandele kulus kokku umbes 30 tundi. Backend ei valmistanud erilisi probleeme kuna SpringBoot ei ole endale võõras asi,
ent frondis mõni asi võttis ikka pusimist. Kõige keerulisemaks osutus lemmiklooma lisamine ja muutmine, kus soovitud pop-up'e kasutavat lahendust
lõpuks ei suutnud implementeerida, sest tuleb välja, et Bootstrap Modal'id on üpris keerulised ja omanäolised asjad. Kui oleksin kohe teinud lihtsalt praeguse
lahenduse, oleks ülesanne saanud tehtud arvatavasti 10 tundi kiiremini. Informatsiooni leidsin dokumentatsioonist, StackOverflow-st, baeldungist (parim koht praktiliste SpringBoot materjalideks) ning YouTube-st. Samuti kasutasin MDN Web Docse et võimalikult hästi järgida HTTP standardeid.
