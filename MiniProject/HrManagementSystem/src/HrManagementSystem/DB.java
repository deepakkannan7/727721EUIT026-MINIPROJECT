package HrManagementSystem;

import java.sql.Connection;
import java.sql.DriverManager;

public class DB {
	
	private static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	private static final String DB_URL = "jdbc:mysql://localhost:3306/hrmini";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "Deepak@7";
    
    public static Connection connection;
    
    public static Connection connect() {
    	
    	try {
    		Class.forName(JDBC_DRIVER);
    		connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
    	}
    	catch(Exception e) {
    		System.out.println(e.getMessage());
    	}
    		
    	return connection;
    }

}
