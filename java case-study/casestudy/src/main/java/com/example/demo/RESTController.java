package com.example.demo;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.impl.TaskDaoImpl;
import com.example.demo.impl.UserDaoImpl;

@RestController
public class RESTController {
	
	@Autowired
	Task tk;
	
	@Autowired
	TaskDaoImpl dao;
	
	@Autowired
	User user;
	
	@Autowired
	UserDaoImpl dao1;

	@RequestMapping(value = "/tasks", method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> getTask() {
		return dao.getAllTasks();
	}
	
	@RequestMapping(value = "/task/{taskid}", method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> getTaskbyId(@PathVariable("taskid") int taskid, Model model) {
		model.addAttribute("taskid", taskid);
		List<Task> row = dao.getTask(taskid);
		return dao.getTask(taskid);
	}
	
	@RequestMapping(value = "/status/{status}", method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> getTaskbystatus(@PathVariable("status") String Status,Model model) {
		model.addAttribute("Status", Status);
		List<Task> row = dao.getTaskstatus(Status);
		return dao.getTaskstatus(Status);
	}
	
	
	@RequestMapping(value="/taskid/{taskid}/priority/{priority}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printTask(@PathVariable("taskid") int taskid, @PathVariable("priority") String priority, Model model) {
		model.addAttribute("taskid", taskid);
		model.addAttribute("priority", priority);
		int row = dao.setpriority(taskid, priority);
		return dao.getAllTasks();
	}
	
	@PostMapping(value= "/addtask", consumes = "application/json", produces = "application/json")
	public Task addTask(@RequestBody Task task) throws Exception
	{
	   dao.addTask(task);
	   return task;

	}
	
	@RequestMapping(value="/taskid/{taskid}/notes/{notes}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printNotes(@PathVariable("taskid") int taskid, @PathVariable("notes") String notes, Model model) {
		model.addAttribute("taskid", taskid);
		model.addAttribute("notes", notes);
		int row = dao.setnotes(taskid, notes);
		return dao.getAllTasks();
	}
	
	@RequestMapping(value="/taskid/{taskid}/isBookmarked/{isBookmarked}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printBookmarked(@PathVariable("taskid") int taskid, @PathVariable("isBookmarked") Boolean isBookmarked, Model model) {
		model.addAttribute("taskid", taskid);
		model.addAttribute("notes", isBookmarked);
		int row = dao.bookmark(taskid, isBookmarked);
		return dao.getAllTasks();
	}
	
	@PostMapping(value= "/adduser", consumes = "application/json", produces = "application/json")
	public User addUser(@RequestBody User user) throws Exception
	{
	   dao1.addUser(user);
	   return user;

	}
	@RequestMapping(value="/taskid/{taskid}/ownerid/{ownerid}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> AssignTask(@PathVariable("taskid") int taskid, @PathVariable("ownerid") int ownerid, Model model) {
		model.addAttribute("taskid", taskid);
		model.addAttribute("ownerid", ownerid);
		int row = dao.TaskAssign(taskid, ownerid);
		return dao.getAllTasks();
	}
	
	
	
	

}
