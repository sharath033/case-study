<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action="priorityupdated" method="post">
Task ID :&nbsp; <input type="number" id="taskid" name="taskid"/><br><br>
Priority :&nbsp;
<select name = "priority">
<option value = "High" >high</option>
<option value = "medium" >medium</option>
<option value = "low" >low</option>
</select><br><br>
<input type ="submit" value="Submit"/>
</form>

</body>
</html>