
CREATE OR ALTER PROCEDURE Videogioco_Crea_Modifica
	-- Add the parameters for the stored procedure here
	@ID INT = NULL,
    @Titolo NVARCHAR(200),
    @Genere NVARCHAR(100),
    @AnnoUscita INT,
    @AnnoGiocata INT,
    @Trama NVARCHAR(MAX),
    @Recensione NVARCHAR(MAX),
    @ImmagineUrl NVARCHAR(500)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    IF @ID IS NULL OR @ID = 0
    BEGIN
        INSERT INTO Videogiochi (Titolo, Genere, AnnoUscita, AnnoGiocata, Trama, Recensione, ImmagineUrl, Nascosto)
        VALUES (@Titolo, @Genere, @AnnoUscita, @AnnoGiocata, @Trama, @Recensione, @ImmagineUrl, 0);
        SELECT SCOPE_IDENTITY() AS NuovoID;
    END
    ELSE
    BEGIN
        UPDATE Videogiochi
        SET Titolo = @Titolo,
            Genere = @Genere,
            AnnoUscita = @AnnoUscita,
            AnnoGiocata = @AnnoGiocata,
            Trama = @Trama,
            Recensione = @Recensione,
            ImmagineUrl = @ImmagineUrl
        WHERE ID = @ID;
        SELECT @ID AS ID_Modificato;
    END

END
GO
