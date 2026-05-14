CREATE OR ALTER PROCEDURE videogioco_cancella
    @ID INT
AS
BEGIN
    UPDATE Videogiochi 
    SET Nascosto = 1 
    WHERE ID = @ID;
    
    SELECT @ID AS ID_Nascosto;
END;
GO
