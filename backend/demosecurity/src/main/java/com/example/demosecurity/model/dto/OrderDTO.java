package com.example.demosecurity.model.dto;


import com.example.demosecurity.model.entity.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
    private Long Id;
    private Users user;
    private Customer customer;
    private Long idUser;
    private Long idcustomer;
    private String namecustom;
    private String email;
    private String phone;
    private String address;
    private String paymentmethod;
    private String decription;
    private int status;
    private Date createdate;
    private String createby;
    private Set<ProductDetailDTO> productDetailList ;
    private Set<OrderProductDetail> orderProductDetails ;
}
