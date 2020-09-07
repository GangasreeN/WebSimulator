package com.fss.simulator.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "message")
public class Message implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "msgId")
	@GeneratedValue
	private int  msgId;	
	
	@Column(name = "SchemaID")	
	private int schemaID;
		
	@Column(name = "MsgName")
	private String msgName;

	@Column(name = "TemplateInd")
	private int templateInd;
	
	@Column(name = "DataElementLink")
	private String[] DataElementLink;
	
	@Column(name = "MsgType")
	private String msgType;
	
	@Column(name = "msgIND")
	private String msgIND;
	//data elements
	@Column(name = "DE001")
	private String DE001;
	
	@Column(name = "DE002")
	private String DE002;
	
	@Column(name = "DE003")
	private String DE003;
	
	@Column(name = "DE004")
	private String DE004;

	@Column(name = "DE005")
	private String DE005;

	@Column(name = "DE006")
	private String DE006;

	@Column(name = "DE007")
	private String DE007;

	@Column(name = "DE008")
	private String DE008;

	@Column(name = "DE009")
	private String DE009;

	@Column(name = "DE010")
	private String DE010;

	@Column(name = "DE011")
	private String DE011;

	@Column(name = "DE012")
	private String DE012;

	@Column(name = "DE013")
	private String DE013;

	@Column(name = "DE014")
	private String DE014;

	@Column(name = "DE015")
	private String DE015;

	@Column(name = "DE016")
	private String DE016;

	@Column(name = "DE017")
	private String DE017;

	@Column(name = "DE018")
	private String DE018;

	@Column(name = "DE019")
	private String DE019;

	@Column(name = "DE020")
	private String DE020;

	@Column(name = "DE021")
	private String DE021;

	@Column(name = "DE022")
	private String DE022;

	@Column(name = "DE023")
	private String DE023;

	@Column(name = "DE024")
	private String DE024;

	@Column(name = "DE025")
	private String DE025;

	@Column(name = "DE026")
	private String DE026;

	@Column(name = "DE027")
	private String DE027;

	@Column(name = "DE028")
	private String DE028;

	@Column(name = "DE029")
	private String DE029;

	@Column(name = "DE030")
	private String DE030;
    
	@Column(name = "DE031")
	private String DE031;
    
	@Column(name = "DE032")
	private String DE032;

	@Column(name = "DE033")
	private String DE033;

	@Column(name = "DE034")
	private String DE034;

	@Column(name = "DE035")
	private String DE035;

	@Column(name = "DE036")
	private String DE036;

	@Column(name = "DE037")
	private String DE037;

	@Column(name = "DE038")
	private String DE038;

	@Column(name = "DE039")
	private String DE039;

	@Column(name = "DE040")
	private String DE040;

	@Column(name = "DE041")
	private String DE041;

	@Column(name = "DE042")
	private String DE042;

	@Column(name = "DE043")
	private String DE043;

	@Column(name = "DE044")
	private String DE044;

	@Column(name = "DE045")
	private String DE045;

	@Column(name = "DE046")
	private String DE046;

	@Column(name = "DE047")
	private String DE047;

	@Column(name = "DE048")
	private String DE048;

	@Column(name = "DE049")
	private String DE049;

	@Column(name = "DE050")
	private String DE050;

	@Column(name = "DE051")
	private String DE051;

	@Column(name = "DE052")
	private String DE052;

	@Column(name = "DE053")
	private String DE053;

	@Column(name = "DE054")
	private String DE054;

	@Column(name = "DE055")
	private String DE055;

	@Column(name = "DE056")
	private String DE056;

	@Column(name = "DE057")
	private String DE057;

	@Column(name = "DE058")
	private String DE058;

	@Column(name = "DE059")
	private String DE059;

	@Column(name = "DE060")
	private String DE060;

	@Column(name = "DE061")
	private String DE061;

	@Column(name = "DE062")
	private String DE062;

	@Column(name = "DE063")
	private String DE063;

	@Column(name = "DE064")
	private String DE064;

	@Column(name = "DE065")
	private String DE065;

	@Column(name = "DE066")
	private String DE066;

	@Column(name = "DE067")
	private String DE067;

	@Column(name = "DE068")
	private String DE068;

	@Column(name = "DE069")
	private String DE069;

	@Column(name = "DE070")
	private String DE070;

	@Column(name = "DE071")
	private String DE071;

	@Column(name = "DE072")
	private String DE072;

	@Column(name = "DE073")
	private String DE073;

	@Column(name = "DE074")
	private String DE074;

	@Column(name = "DE075")
	private String DE075;

	@Column(name = "DE076")
	private String DE076;

	@Column(name = "DE077")
	private String DE077;

	@Column(name = "DE078")
	private String DE078;

	@Column(name = "DE079")
	private String DE079;

	@Column(name = "DE080")
	private String DE080;

	@Column(name = "DE081")
	private String DE081;

	@Column(name = "DE082")
	private String DE082;

	@Column(name = "DE083")
	private String DE083;

	@Column(name = "DE084")
	private String DE084;

	@Column(name = "DE085")
	private String DE085;

	@Column(name = "DE086")
	private String DE086;

	@Column(name = "DE087")
	private String DE087;

	@Column(name = "DE088")
	private String DE088;

	@Column(name = "DE089")
	private String DE089;

	@Column(name = "DE090")
	private String DE090;

	@Column(name = "DE091")
	private String DE091;

	@Column(name = "DE092")
	private String DE092;

	@Column(name = "DE093")
	private String DE093;

	@Column(name = "DE094")
	private String DE094;

	@Column(name = "DE095")
	private String DE095;

	@Column(name = "DE096")
	private String DE096;

	@Column(name = "DE097")
	private String DE097;

	@Column(name = "DE098")
	private String DE098;

	@Column(name = "DE099")
	private String DE099;

	@Column(name = "DE100")
	private String DE100;

	@Column(name = "DE101")
	private String DE101;

	@Column(name = "DE102")
	private String DE102;

	@Column(name = "DE103")
	private String DE103;

	@Column(name = "DE104")
	private String DE104;

	@Column(name = "DE105")
	private String DE105;

	@Column(name = "DE106")
	private String DE106;

	@Column(name = "DE107")
	private String DE107;

	@Column(name = "DE108")
	private String DE108;

	@Column(name = "DE109")
	private String DE109;

	@Column(name = "DE110")
	private String DE110;

	@Column(name = "DE111")
	private String DE111;

	@Column(name = "DE112")
	private String DE112;

	@Column(name = "DE113")
	private String DE113;

	@Column(name = "DE114")
	private String DE114;

	@Column(name = "DE115")
	private String DE115;

	@Column(name = "DE116")
	private String DE116;

	@Column(name = "DE117")
	private String DE117;

	@Column(name = "DE118")
	private String DE118;

	@Column(name = "DE119")
	private String DE119;

	@Column(name = "DE120")
	private String DE120;

	@Column(name = "DE121")
	private String DE121;

	@Column(name = "DE122")
	private String DE122;

	@Column(name = "DE123")
	private String DE123;

	@Column(name = "DE124")
	private String DE124;

	@Column(name = "DE125")
	private String DE125;

	@Column(name = "DE126")
	private String DE126;

	@Column(name = "DE127")
	private String DE127;

	@Column(name = "DE128")
	private String DE128;
	
	@Column(name = "createdBy")
	private String createdBy;
	
	@Column(name = "modifyBy")
	private String modifyBy;
	
	@Temporal(value = TemporalType.DATE)
	@CreationTimestamp
	@Column(name = "createdDate")
	private Date createdDate;
	
	@Temporal(value = TemporalType.DATE)
	@UpdateTimestamp
	@Column(name = "modifyDate")
	private Date modifyDate;
	

}
