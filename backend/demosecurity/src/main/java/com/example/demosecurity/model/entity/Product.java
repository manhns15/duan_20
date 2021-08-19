package com.example.demosecurity.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;


import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "product")
@EntityListeners(AuditingEntityListener.class)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IdProduct")
    private Long id;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "IdCategory")
    private Category category;

    @Column(name = "nameproduct",columnDefinition = "VARCHAR(100)  NULL")
    private String nameproduct;
    private Float price;
    private Integer status;
    @Column(name = "image",columnDefinition = "VARCHAR(255)  NULL")
    private String image;
    @Column(name = "decription",columnDefinition = "VARCHAR(255)  NULL")
    private String decription;
    private Integer purchase;
    private Integer count;
    @CreatedDate
    private Date createdate;
    @Column(name = "createby",columnDefinition = "VARCHAR(30)  NULL")
    @CreatedBy
    private String createby;

    @OneToMany
    @JsonIgnore
    @JoinColumn(name = "IdProduct")
    Set<ProductDetail> productDetail;

    @ManyToMany
    @JoinTable(
            // ten bang lien ket
            name = "supplierproduct",
            joinColumns = {@JoinColumn(name = "IdProduct", referencedColumnName = "IdProduct")},
            inverseJoinColumns = {@JoinColumn(name = "IdSupplier", referencedColumnName = "IdSupplier")}
    )
    Set<Supplier> suppliers;

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", category=" + category +
                ", nameproduct='" + nameproduct + '\'' +
                ", price=" + price +
                ", status=" + status +
                ", image='" + image + '\'' +
                ", decription='" + decription + '\'' +
                ", purchase=" + purchase +
                ", count=" + count +
                ", createdate=" + createdate +
                ", createby='" + createby + '\'' +
                ", productDetail=" + productDetail +
                ", suppliers=" + suppliers +
                '}';
    }
}
