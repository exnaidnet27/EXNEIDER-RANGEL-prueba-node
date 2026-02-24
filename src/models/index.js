const Producto = require("./productos.model");
const Categoria = require("./categorias.model");
const Tienda = require("./tiendas");
const ProductoStock = require("./productos_stocks.model");
const PedidoProducto = require("./pedidos_productos.model");
const Pedido = require("./pedidos.model");
const Promocion = require("./promociones.model");
const TiendaPromocion = require("./tiendas_promociones.model");

// ================= RELACIONES =================

// Producto -> Categoria
Producto.belongsTo(Categoria, { foreignKey: "CATEGORIA_ID" });
Categoria.hasMany(Producto, { foreignKey: "CATEGORIA_ID" });

// Producto -> Stock -> Tienda
Producto.hasMany(ProductoStock, { foreignKey: "PRODUCTO_ID" });
ProductoStock.belongsTo(Producto, { foreignKey: "PRODUCTO_ID" });

ProductoStock.belongsTo(Tienda, { foreignKey: "TIENDA_ID" });
Tienda.hasMany(ProductoStock, { foreignKey: "TIENDA_ID" });

// PedidoProducto -> Producto
PedidoProducto.belongsTo(Producto, { foreignKey: "PRODUCTO_ID" });

// Promociones <-> Tiendas
Promocion.belongsToMany(Tienda, {
  through: TiendaPromocion,
  foreignKey: "PROMOCION_ID",
  otherKey: "TIENDA_ID"
});

Tienda.belongsToMany(Promocion, {
  through: TiendaPromocion,
  foreignKey: "TIENDA_ID",
  otherKey: "PROMOCION_ID"
});

module.exports = {
  Producto,
  Categoria,
  Tienda,
  ProductoStock,
  PedidoProducto,
  Pedido,
  Promocion,
  TiendaPromocion
};