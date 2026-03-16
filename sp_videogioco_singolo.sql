
CREATE OR ALTER PROCEDURE Videogioco_Singolo
	-- Add the parameters for the stored procedure here
	@ID INT 
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    SELECT 
		ID, 
		Titolo, 
		Genere, 
		AnnoUscita, 
		AnnoGiocata,
		Trama, 
		Recensione,
		DataInserimento,
		ImmagineUrl
		
	FROM Videogiochi

	WHERE 
		ID = @ID
		AND 
		Nascosto = 0

END
GO
