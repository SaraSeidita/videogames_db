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

## Passo 1 - Database (SQL Server)

Ho usato SQL Server (SQL Server Management Studio) per la gestione del database.

- ho usato l’autenticazione windows per facilitare la connessione al database  
- nome database: GamesPopone

---

# Tabelle

## Tabella ‘Videogiochi’

Un’unica tabella per i record dei videogiochi che voglio mostrare: hanno il loro ID (primary key), titolo, genere del videogioco, anno in cui è uscito, anno in cui l’ho giocato (può essere null, se non ricordo quando), trama in breve, recensione/commento, quando ho inserito il record, il path dell’immagine per la copertina, “nascosto” per quando non voglio mostrare un record (lo nascondo, invece di cancellarlo)

## Tabella ‘Auth’

Semplice tabella di autenticazione / utente. Questo per implementazione futura: voglio essere l’unica a inserire / modificare / cancellare i record. Ma vorrei poter mostrare la lista dei videogiochi.  
Ha semplicemente ID (Primary key), username, password (criptata), path della foto profilo.

## Stored Procedure

Per gestire i dati non scrivo le query nel codice del sito, ma uso le Stored Procedure. Sono dei "comandi pronti" salvati direttamente nel database. Il backend è più leggero perché delega il lavoro sporco al database.

### Videogioco Singolo

SP che, dato un ID, mostra un singolo record della tabella videogiochi.

### Videogioco Lista

SP che mostra una lista di record, ossia la lista dei videogiochi. Non mostra tutti gli attributi, ma solo “un’anteprima”.  
La SP è implementata in modo da poter essere utilizzata anche per la ricerca, dato il titolo, per filtrare la lista.

### Videogioco Crea/Modifica

Ho fatto un’unica SP per la creazione o modifica di un record della tabella Videogiochi.

### Videogioco cancella

La SP per la cancellazione non cancella direttamente il record della tabella Videogiochi. Semplicemente, “nasconde” il record. Così è facile ripristinare il record in un secondo momento.
