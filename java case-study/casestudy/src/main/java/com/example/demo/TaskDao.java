package com.example.demo;

import java.util.List;

public interface TaskDao {
	public int save(Object object);
	public List<Task> getAllTasks();
	public int setpriority(int taskid, String Priority);
	public int setnotes(int taskid, String Notes);
	public int bookmark(int taskid, Boolean isBookmarked);
	public List<Task> getTask(int taskid);
	public List<Task> getTaskstatus(String Status);
	
	
}
