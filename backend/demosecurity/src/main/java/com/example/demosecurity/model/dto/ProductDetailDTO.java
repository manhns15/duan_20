package com.example.demosecurity.model.dto;

import com.example.demosecurity.model.entity.Color;
import com.example.demosecurity.model.entity.Product;
import com.example.demosecurity.model.entity.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDetailDTO {
    private Long id;
    private Long idproduct;
    private Long idcolor;
    private Long idsize;
    private Product product;
    private Color color;
    private Size size;
    private Integer quantity;
    private Integer status;
    private Float price;
    private Date createdate;
    private String createby;

}
