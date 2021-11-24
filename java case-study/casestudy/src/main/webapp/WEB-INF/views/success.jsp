<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action = "created" method = "post">
Task_ID :&nbsp;<input type = "number" id = "taskid" name = "taskid"/><br><br>
Owner_ID :&nbsp;<input type = "number" id = "ownerid" name = "ownerid"/><br><br>
Creator_ID :&nbsp;<input type = "number" id = "creatorid" name = "creatorid"/><br><br>
Name :&nbsp;<input type = "text" id = "name" name = "name"/><br><br>
Description :&nbsp; <input type ="text" id = "desc" name = "desc"/><br><br>
Status :&nbsp; <input type = "text" id = "status" name = "status"/><br><br>
Priority :&nbsp; <input type = "text" id = "priority" name="priority"/><br><br>
Notes :&nbsp; <input type = "text" id = "notes" name = "notes"/><br><br>
IsBookMarked :&nbsp;
<select name = "isbookmarked">
<option value = "true" >true</option>
<option value = "false" ">false</option>
</select><br><br>
Created_On :&nbsp;<input type = "datetime-local" id = "createdon" name = "createdon"/><br><br>
Status_Changed_On :&nbsp;<input type = "datetime-local" id = "changedon" name = "changedon"/><br><br>
<input type ="submit" value="Submit"/>
</form>
</body>
</html>