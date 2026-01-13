# videogames_db
Piccolo progetto personale per raccogliere e visualizzare una lista dei videogiochi che ho giocato.
Pubblicherò i progressi non appena inizierò con il frontend.

# Tecnologie 
Le tecnologie che utilizzerò per il progetto:
- SQL Server (database)
- C# (gestione backend)
- Angular 21 (gestione frontend)
- CSS Tailwind (stile CSS)

# Struttura Database
Il progetto utilizza SQL Server con le seguenti tabelle principali:

- **Videogiochi**: ID, Titolo, Genere, AnnoUscita, AnnoGiocata, Trama, Recensione, ImmagineUrl, Nascosto (Soft Delete).
- **Auth**: ID, Username, Password (Hashed), ProfilePicUrl.

Le operazioni CRUD sono gestite interamente tramite **Stored Procedure** per massimizzare la sicurezza e le prestazioni.
