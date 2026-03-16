CREATE TABLE Auth (
	ID INT PRIMARY KEY IDENTITY(1,1),
	Username NVARCHAR(10),
	Pw NVARCHAR(10)
)


ALTER TABLE Auth ALTER COLUMN Username NVARCHAR(50);
ALTER TABLE Auth ALTER COLUMN Pw NVARCHAR(255); -- Più spazio per password sicure
ALTER TABLE Auth ADD ProfilePicUrl NVARCHAR(500);
select * from auth