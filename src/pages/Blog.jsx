import React from "react";
import "../styles/Blog.css";
import articulos from "../assets/articles";

const Blog = () => {
  return (
    <div className="blog">
      <div className="wrap">
        <header className="page-header">
          <h1 className="page-title">Blog</h1>
        </header>
        <div id="primary" className="content-area">
          <main id="main" className="site-main">
            {articulos.map((articulo) => (
              <div key={articulo.id} className="articulo">
                <p className="articulo-fecha">{articulo.fecha}</p>
                <h2 className="articulo-titulo">{articulo.titulo}</h2>
                <p className="articulo-extracto">{articulo.extracto}</p>
                <p className="articulo-fuente">
                  Fuente: <strong>{articulo.fuente}</strong>
                </p>
                <a
                  href={articulo.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="articulo-enlace"
                >
                  Leer artículo completo
                </a>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Blog;
