package com.example.demo.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.Task;
import com.example.demo.TaskDao;

@Component
public class TaskDaoImpl implements TaskDao{
	
	@Autowired
	DbConnection db;
	
	int row = 0;
	
	@Autowired
	Task task = null;

	@Override
	public int save(Object object) {
		
		try {
			 task = (Task) object;
			 PreparedStatement ps = db.getConnection().prepareStatement("Insert into task values(?,?,?,?,?,?,?,?,?,?,?)");
			 ps.setInt(1, task.getTaskID());
			 ps.setInt(2, task.getOwnerID());
			 ps.setInt(3, task.getCreatorID());
			 ps.setString(4, task.getName());
			 ps.setString(5, task.getDescription());
			 ps.setString(6, task.getStatus());
			 ps.setString(7, task.getPriority());
			 ps.setString(8, task.getNotes());
			 ps.setBoolean(9, task.getIsBookmarked());
			 ps.setString(10, task.getCreatedOn());
			 ps.setString(11, task.getStatusChangedOn());
			 row = ps.executeUpdate();
			 db.closeConnection();
		}catch(SQLException e) {System.out.println(e);}
		
		return row;
	}

	@Override
	public List<Task> getAllTasks() {
		List<Task> taskList = new ArrayList<>();
		try {
		PreparedStatement ps = db.getConnection().prepareStatement("Select * from task");
		ResultSet rs = ps.executeQuery();
		while(rs.next()) {
			Task tk = new Task();
			int taskID = rs.getInt(1);
			int ownerID = rs.getInt(2);
			int creatorID = rs.getInt(3);
			String name = rs.getString(4);
			String description = rs.getString(5);
			String status = rs.getString(6);
			String priority = rs.getString(7);
			String notes = rs.getString(8);
			Boolean isBookmarked = rs.getBoolean(9);
			String createdOn = rs.getString(10);
			String statusChangedOn = rs.getString(11);
			
			tk.setTaskID(taskID);
			tk.setOwnerID(ownerID);
			tk.setCreatorID(creatorID);
			tk.setName(name);
			tk.setDescription(description);
			tk.setStatus(status);
			tk.setPriority(priority);
			tk.setNotes(notes);
			tk.setIsBookmarked(isBookmarked);
			tk.setCreatedOn(createdOn);
			tk.setStatusChangedOn(statusChangedOn);
			
			taskList.add(tk);
		}
		
	   }catch(SQLException se) {se.printStackTrace();}
		return taskList;
	}

	@Override
	public int setpriority(int taskid, String priority) {
		try {
			 
			 PreparedStatement ps = db.getConnection().prepareStatement("update task set priority = ? where task_id = ?");
			 ps.setString(1, priority);
			 ps.setInt(2, taskid);
			 row = ps.executeUpdate();
			 db.closeConnection();
			 
		 }catch(SQLException sqe) {sqe.printStackTrace();}
		 
		return row;

	}
	
	public int addTask(Task task) {
		try {
			 PreparedStatement ps = db.getConnection().prepareStatement("Insert into task values(?,?,?,?,?,?,?,?,?,?,?)");
			 ps.setInt(1, task.getTaskID());
			 ps.setInt(2, task.getOwnerID());
			 ps.setInt(3, task.getCreatorID());
			 ps.setString(4, task.getName());
			 ps.setString(5, task.getDescription());
			 ps.setString(6, task.getStatus());
			 ps.setString(7, task.getPriority());
			 ps.setString(8, task.getNotes());
			 ps.setBoolean(9, task.getIsBookmarked());
			 ps.setString(10, task.getCreatedOn());
			 ps.setString(11, task.getStatusChangedOn());
			 row = ps.executeUpdate();
			 db.closeConnection();
		}catch(SQLException e) {System.out.println(e);}
		
		return row;
		
	}

	@Override
	public int setnotes(int taskid, String Notes) {
		try {
			 
			 PreparedStatement ps = db.getConnection().prepareStatement("update task set notes = ? where task_id = ?");
			 ps.setString(1, Notes);
			 ps.setInt(2, taskid);
			 row = ps.executeUpdate();
			 db.closeConnection();
			 
		 }catch(SQLException sqe) {sqe.printStackTrace();}
		 
		return row;
	}

	@Override
	public int bookmark(int taskid, Boolean isBookmarked) {
		try {
			 
			 PreparedStatement ps = db.getConnection().prepareStatement("update task set isBookmarked = ? where task_id = ?");
			 ps.setBoolean(1, isBookmarked);
			 ps.setInt(2, taskid);
			 row = ps.executeUpdate();
			 db.closeConnection();
			 
		 }catch(SQLException sqe) {sqe.printStackTrace();}
		 
		return row;
	}

	@Override
	public List<Task> getTask(int taskid) {
		List<Task> taskList = new ArrayList<>();
		try {
		PreparedStatement ps = db.getConnection().prepareStatement("Select * from task where task_id = ?");
		ps.setInt(1, taskid);
		ResultSet rs = ps.executeQuery();
		while(rs.next()) {
			Task tk = new Task();
			int taskID = rs.getInt(1);
			int ownerID = rs.getInt(2);
			int creatorID = rs.getInt(3);
			String name = rs.getString(4);
			String description = rs.getString(5);
			String status = rs.getString(6);
			String priority = rs.getString(7);
			String notes = rs.getString(8);
			Boolean isBookmarked = rs.getBoolean(9);
			String createdOn = rs.getString(10);
			String statusChangedOn = rs.getString(11);
			
			tk.setTaskID(taskID);
			tk.setOwnerID(ownerID);
			tk.setCreatorID(creatorID);
			tk.setName(name);
			tk.setDescription(description);
			tk.setStatus(status);
			tk.setPriority(priority);
			tk.setNotes(notes);
			tk.setIsBookmarked(isBookmarked);
			tk.setCreatedOn(createdOn);
			tk.setStatusChangedOn(statusChangedOn);
			
			taskList.add(tk);
		}
		
	   }catch(SQLException se) {se.printStackTrace();}
		return taskList;
	}

	@Override
	public List<Task> getTaskstatus(String Status) {
		List<Task> taskList = new ArrayList<>();
		try {
		PreparedStatement ps = db.getConnection().prepareStatement("Select * from task where Status = ?");
		ps.setString(1, Status);
		ResultSet rs = ps.executeQuery();
		while(rs.next()) {
			Task tk = new Task();
			int taskID = rs.getInt(1);
			int ownerID = rs.getInt(2);
			int creatorID = rs.getInt(3);
			String name = rs.getString(4);
			String description = rs.getString(5);
			String status = rs.getString(6);
			String priority = rs.getString(7);
			String notes = rs.getString(8);
			Boolean isBookmarked = rs.getBoolean(9);
			String createdOn = rs.getString(10);
			String statusChangedOn = rs.getString(11);
			
			tk.setTaskID(taskID);
			tk.setOwnerID(ownerID);
			tk.setCreatorID(creatorID);
			tk.setName(name);
			tk.setDescription(description);
			tk.setStatus(status);
			tk.setPriority(priority);
			tk.setNotes(notes);
			tk.setIsBookmarked(isBookmarked);
			tk.setCreatedOn(createdOn);
			tk.setStatusChangedOn(statusChangedOn);
			
			taskList.add(tk);
		}
		
	   }catch(SQLException se) {se.printStackTrace();}
		return taskList;
	}
	
	public int TaskAssign(int taskid, int ownerid) {
		try {

		PreparedStatement p=db.getConnection().prepareStatement("update task set owner_id=? where task_id=?");
		p.setInt(1, ownerid);



		p.setInt(2, taskid);



		row=p.executeUpdate();
		db.closeConnection();
		}
		catch(Exception e) {System.out.println();}
		return row;
		}

	
	

}
