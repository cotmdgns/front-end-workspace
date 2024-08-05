<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<c:forEach items="${allLocation}" var="Location">
	 <form action="/location/Locations" method="get">
		<input type="hidden" name="location" value="${Location.locLargeCode}" />
		<input type="submit" value="${Location.locLargeName}"/>
	</form>
</c:forEach>

</body>
</html>