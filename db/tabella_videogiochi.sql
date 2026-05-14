CREATE TABLE Videogiochi (
	ID INT PRIMARY KEY IDENTITY(1,1), 
	Titolo NVARCHAR(200) NOT NULL, 
	Genere NVARCHAR(100), 
	AnnoUscita INT NOT NULL, 
	AnnoGiocata INT,
	Trama NVARCHAR(MAX),
	Recensione NVARCHAR(MAX),
	DataInserimento DATETIME DEFAULT GETDATE()
);

ALTER TABLE Videogiochi ADD ImmagineUrl NVARCHAR(500);

ALTER TABLE Videogiochi 
ADD Nascosto BIT DEFAULT 0;
GO

-- Aggiorniamo i record esistenti (se ce ne sono) per non lasciarli NULL
UPDATE Videogiochi SET Nascosto = 0 WHERE Nascosto IS NULL;
GO

select * from videogiochi
