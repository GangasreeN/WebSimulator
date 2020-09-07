package com.fss.simulator.service;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fss.simulator.entity.Connection;
import com.fss.simulator.exception.CardNotFoundException;
import com.fss.simulator.repository.ConnectionRepository;

@Service
public class ConnectionService {
	@Autowired
	private ConnectionRepository repository;
	
	
	public Connection saveConnection(Connection connection)
	{
		
		return repository.save(connection);
	}
	public List<Connection> saveConnections(List<Connection> connections)
	{
		return repository.saveAll(connections);
	}
	public List<Connection> getConnections()
	{
		return repository.findAll();
	}
	public Connection getConnectionbyConnectionId(int connectionid)
	{
		return repository.findById(connectionid).orElseThrow(() -> new CardNotFoundException("Connection Not Found with id "+ connectionid));
	}
	public Connection getConnectionbyConnectionsName(String name)
	{
		return repository.findByConnectionName(name);
	}
	public Connection getByCreatedBy(String CreatedName )
	{
		return repository.findByCreatedBy(CreatedName);
	}
	public String deleteConnection(int connectionid)
	{
		repository.deleteById(connectionid);
		return "card removed" + connectionid;
	}
	public Connection updateConnection(Connection connection) throws ParseException
	{
		Connection existingConnection= repository.findById(connection.getConnectionId()).orElse(null);
		
		existingConnection.setConnectionName(connection.getConnectionName());
		existingConnection.setIP(connection.getIP());
		existingConnection.setPORT(connection.getPORT());
		existingConnection.setNetworkType(connection.getNetworkType());
		existingConnection.setOutBoundKey1(connection.getOutBoundKey1());
		existingConnection.setOutBoundKey2(connection.getOutBoundKey2());
		existingConnection.setOutBoundKey3(connection.getOutBoundKey3());
		existingConnection.setKeyVarient(connection.getKeyVarient());
		existingConnection.setServerIP(connection.getServerIP());
		existingConnection.setServerPort(connection.getServerPort());
		existingConnection.setSystemIP(connection.getSystemIP());
		existingConnection.setSystemPort(connection.getSystemPort());			
		return repository.save(existingConnection);
	}
}
