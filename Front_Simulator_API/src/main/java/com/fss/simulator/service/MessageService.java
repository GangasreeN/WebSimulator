package com.fss.simulator.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fss.simulator.entity.Card;
import com.fss.simulator.entity.Message;
import com.fss.simulator.repository.MessageRepository;

@Service
public class MessageService {

	
	@Autowired
	private MessageRepository repository;	
	
	public Message saveMessage(Message message)  {
		return repository.save(message);
	}
	
	public List<Message> saveMessages(List<Message> messages) {
		return repository.saveAll(messages);
	}
	public List<Message> getMessages() {
		return repository.findAll();
	}
	
	public List<Message> getTemplateMessages() {
		return repository.findAllTemplate();
	}
	
	public List<Message> getTemplateByScehmaId(int schemaID) {
		return repository.findTemplateBySchemaID(schemaID);
	}
	public Message getMessagebyMessageId(int msgID) {
		Message message = repository.findById(msgID).orElse(null);	
		return message;
	}
	public String deleteMessage(int id) {
		repository.deleteById(id);
		return "message removed " + id;
	}
	public Message updateMessage(Message message) {
		Message existingMessage = repository.findById(message.getMsgId()).orElse(null);

		existingMessage.setMsgName(message.getMsgName());
		existingMessage.setMsgType(message.getMsgType());
		existingMessage.setMsgIND(message.getMsgIND());
		existingMessage.setTemplateInd(message.getTemplateInd());
		existingMessage.setDataElementLink(message.getDataElementLink());
		existingMessage.setDE001(message.getDE001());
        existingMessage.setDE002(message.getDE002());
        existingMessage.setDE003(message.getDE003());
        existingMessage.setDE004(message.getDE004());
        existingMessage.setDE005(message.getDE005());
        existingMessage.setDE006(message.getDE006());
        existingMessage.setDE007(message.getDE007());
        existingMessage.setDE008(message.getDE008());
        existingMessage.setDE009(message.getDE009());
        existingMessage.setDE010(message.getDE010());
        existingMessage.setDE011(message.getDE011());
        existingMessage.setDE012(message.getDE012());
        existingMessage.setDE013(message.getDE013());
        existingMessage.setDE014(message.getDE014());
        existingMessage.setDE015(message.getDE015());
        existingMessage.setDE016(message.getDE016());
        existingMessage.setDE017(message.getDE017());
        existingMessage.setDE018(message.getDE018());
        existingMessage.setDE019(message.getDE019());
        existingMessage.setDE020(message.getDE020());
        existingMessage.setDE021(message.getDE021());
        existingMessage.setDE022(message.getDE022());
        existingMessage.setDE023(message.getDE023());
        existingMessage.setDE024(message.getDE024());
        existingMessage.setDE025(message.getDE025());
        existingMessage.setDE026(message.getDE026());
        existingMessage.setDE027(message.getDE027());
        existingMessage.setDE028(message.getDE028());
        existingMessage.setDE029(message.getDE029());
        existingMessage.setDE030(message.getDE030());
        existingMessage.setDE031(message.getDE031());
        existingMessage.setDE032(message.getDE032());
        existingMessage.setDE033(message.getDE033());
        existingMessage.setDE034(message.getDE034());
        existingMessage.setDE035(message.getDE035());
        existingMessage.setDE036(message.getDE036());
        existingMessage.setDE037(message.getDE037());
        existingMessage.setDE038(message.getDE038());
        existingMessage.setDE039(message.getDE039());
        existingMessage.setDE040(message.getDE040());
        existingMessage.setDE041(message.getDE041());
        existingMessage.setDE042(message.getDE042());
        existingMessage.setDE043(message.getDE043());
        existingMessage.setDE044(message.getDE044());
        existingMessage.setDE045(message.getDE045());
        existingMessage.setDE046(message.getDE046());
        existingMessage.setDE047(message.getDE047());
        existingMessage.setDE048(message.getDE048());
        existingMessage.setDE049(message.getDE049());
        existingMessage.setDE050(message.getDE050());
        existingMessage.setDE051(message.getDE051());
        existingMessage.setDE052(message.getDE052());
        existingMessage.setDE053(message.getDE053());
        existingMessage.setDE054(message.getDE054());
        existingMessage.setDE055(message.getDE055());
        existingMessage.setDE056(message.getDE056());
        existingMessage.setDE057(message.getDE057());
        existingMessage.setDE058(message.getDE058());
        existingMessage.setDE059(message.getDE059());
        existingMessage.setDE060(message.getDE060());
        existingMessage.setDE065(message.getDE065());
        existingMessage.setDE066(message.getDE066());
        existingMessage.setDE067(message.getDE067());
        existingMessage.setDE068(message.getDE068());
        existingMessage.setDE069(message.getDE069());
        existingMessage.setDE070(message.getDE070());
        existingMessage.setDE071(message.getDE071());
        existingMessage.setDE072(message.getDE072());
        existingMessage.setDE073(message.getDE073());
        existingMessage.setDE074(message.getDE074());
        existingMessage.setDE075(message.getDE075());
        existingMessage.setDE076(message.getDE076());
        existingMessage.setDE077(message.getDE077());
        existingMessage.setDE078(message.getDE078());
        existingMessage.setDE079(message.getDE079());
        existingMessage.setDE080(message.getDE080());
        existingMessage.setDE081(message.getDE081());
        existingMessage.setDE082(message.getDE082());
        existingMessage.setDE083(message.getDE083());
        existingMessage.setDE084(message.getDE084());
        existingMessage.setDE085(message.getDE085());
        existingMessage.setDE086(message.getDE086());
        existingMessage.setDE087(message.getDE087());
        existingMessage.setDE088(message.getDE088());
        existingMessage.setDE089(message.getDE089());
        existingMessage.setDE090(message.getDE090());
        existingMessage.setDE091(message.getDE091());
        existingMessage.setDE092(message.getDE092());
        existingMessage.setDE093(message.getDE093());
        existingMessage.setDE094(message.getDE094());
        existingMessage.setDE095(message.getDE095());
        existingMessage.setDE096(message.getDE096());
        existingMessage.setDE097(message.getDE097());
        existingMessage.setDE098(message.getDE098());
        existingMessage.setDE099(message.getDE099());
        existingMessage.setDE100(message.getDE100());
        existingMessage.setDE101(message.getDE101());
        existingMessage.setDE102(message.getDE102());
        existingMessage.setDE103(message.getDE103());
        existingMessage.setDE104(message.getDE104());
        existingMessage.setDE105(message.getDE105());
        existingMessage.setDE106(message.getDE106());
        existingMessage.setDE107(message.getDE107());
        existingMessage.setDE108(message.getDE108());
        existingMessage.setDE109(message.getDE109());
        existingMessage.setDE110(message.getDE110());
        existingMessage.setDE111(message.getDE111());
        existingMessage.setDE112(message.getDE112());
        existingMessage.setDE113(message.getDE113());
        existingMessage.setDE114(message.getDE114());
        existingMessage.setDE115(message.getDE115());
        existingMessage.setDE116(message.getDE116());
        existingMessage.setDE117(message.getDE117());
        existingMessage.setDE118(message.getDE118());
        existingMessage.setDE119(message.getDE119());
        existingMessage.setDE120(message.getDE120());
        existingMessage.setDE121(message.getDE121());
        existingMessage.setDE122(message.getDE122());
        existingMessage.setDE123(message.getDE123());
        existingMessage.setDE124(message.getDE124());
        existingMessage.setDE125(message.getDE125());
        existingMessage.setDE126(message.getDE126());
        existingMessage.setDE127(message.getDE127());
        existingMessage.setDE128(message.getDE128());
		return repository.save(existingMessage);
	}
}
