
CREATE OR ALTER PROCEDURE Videogioco_Ricerca
	-- Add the parameters for the stored procedure here
	@Titolo NVARCHAR(200) = NULL
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
		ImmagineUrl
	
	FROM Videogiochi

	WHERE 
		(@Titolo IS NULL OR Titolo LIKE '%' + @Titolo + '%') 
		AND 
		Nascosto = 0 

	ORDER BY 
		DataInserimento DESC

END
GO
