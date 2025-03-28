package com.sheldon.ecommerce.entity;

import org.springframework.data.rest.core.config.Projection;
@Projection(name = "customCategory", types = ProductCategory.class)
public interface ProductCategoryProjection {
        Long getId();
        String getCategoryName();

}

