
package com.fss.simulator.repository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.fss.simulator.entity.EMVData;

public interface EMVDataRepository extends JpaRepository<EMVData, Integer> {

	//   EMVData findByEMV_Id(String CardIdName);

	// EMVData findByCreatedBy(String CreatedName);
	  EMVData findByCardId(int Cardid);

}
