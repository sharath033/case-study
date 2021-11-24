package com.example.demo.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.UserValidationInterface;


@Component
public class DefaultUserValidation implements UserValidationInterface {
	
	@Autowired
	DbConnection db;
	
	boolean status;

	@Override
	public boolean validateUser(String username, String password) {
		
		try {
			
			PreparedStatement ps = db.getConnection().prepareStatement("Select Username, password from user where username = ? or password = ?;");
			ps.setString(1, username );
			ps.setString(2, password);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				
				if(username.equals(rs.getString(1))&& password.equals(rs.getString(2)))
					return status = true;
				else
					return status = false;
			}
		}catch(SQLException se) {se.printStackTrace();}
		
		return status;
	}

}
