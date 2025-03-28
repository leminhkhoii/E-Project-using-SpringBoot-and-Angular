package com.sheldon.ecommerce.entity;

import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.data.rest.core.config.Projection;
import java.math.BigDecimal;
import java.sql.Date;

import com.sheldon.ecommerce.entity.Product;

@Projection(name = "customProduct", types = { Product.class })
@RestResource(path="products", rel="products")
public interface ProductProjection {
    Long getId();
    String getSku();
    String getName();
    String getDescription();
    BigDecimal getUnitPrice();
    String getImageUrl();
    boolean isActive();
    int getUnitsInStock();
    Date getDateCreated();
    Date getLastUpdated();
}
