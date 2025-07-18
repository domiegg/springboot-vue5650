package com.entity.view;

import com.entity.ShangpinleixingEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;

import java.io.Serializable;
import com.utils.EncryptUtil;
 

/**
 * 商品类型
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-08-05 14:29:29
 */
@TableName("shangpinleixing")
public class ShangpinleixingView  extends ShangpinleixingEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public ShangpinleixingView(){
	}
 
 	public ShangpinleixingView(ShangpinleixingEntity shangpinleixingEntity){
 	try {
			BeanUtils.copyProperties(this, shangpinleixingEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}


}
