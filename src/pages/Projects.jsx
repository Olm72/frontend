import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import { useUser } from "../components/UserContext";
import Comments from "../components/Comments";

const Projects = () => {
  const { user } = useUser();
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    status: "En progreso",
  });
  const [notification, setNotification] = useState({ message: "", type: "" });

  // Simulación de carga de proyectos
  useEffect(() => {
    setProjects([
      { id: 1, title: "Proyecto 1", description: "Descripción del proyecto 1", status: "En progreso" },
      { id: 2, title: "Proyecto 2", description: "Descripción del proyecto 2", status: "Completado" },
      { id: 3, title: "Proyecto 3", description: "Descripción del proyecto 3", status: "Pendiente" },
    ]);
  }, []);

  // Mostrar notificación
  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: "", type: "" }), 3000);
  };

  // Filtro de proyectos
  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((project) => project.status === filter);

  // Función para crear un proyecto
  const createProject = () => {
    if (!newProject.title.trim()) {
      showNotification("El título no puede estar vacío.", "error");
      return;
    }
    setProjects((prev) => [...prev, { id: Date.now(), ...newProject }]);
    setShowCreateForm(false);
    setNewProject({ title: "", description: "", status: "En progreso" });
    showNotification("Proyecto creado con éxito.", "success");
  };

  // Función para editar un proyecto
  const editProject = (updatedProject) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
    setShowEditForm(false);
    showNotification("Proyecto actualizado con éxito.", "success");
  };

  // Función para eliminar un proyecto
  const deleteProject = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar el proyecto?")) {
      setProjects((prev) => prev.filter((project) => project.id !== id));
      showNotification("Proyecto eliminado con éxito.", "success");
    }
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Gestión de Proyectos</h1>

      {/* Notificación */}
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      {/* Botón para crear proyecto (Solo admin) */}
      {user.role === "admin" && (
        <button className="add-project-button" onClick={() => setShowCreateForm(true)}>
          Crear Proyecto
        </button>
      )}

      {/* Filtro */}
      <div className="filter-container">
        <label>Filtrar por estado:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="Todos">Todos</option>
          <option value="Pendiente">Pendiente</option>
          <option value="En progreso">En progreso</option>
          <option value="Completado">Completado</option>
          <option value="Cancelado">Cancelado</option>
        </select>
      </div>

      {/* Lista de proyectos */}
      <div className="projects-list">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${project.status.toLowerCase()}`}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Estado:</strong> {project.status}</p>

            {/* Solo mostrar acciones si el rol es "admin" */}
            {user.role === "admin" && (
              <div className="project-actions">
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setShowEditForm(true);
                  }}
                >
                  Editar
                </button>
                <button onClick={() => deleteProject(project.id)}>
                  Eliminar
                </button>
              </div>
            )}

            {/* Sección de Comentarios */}
            <Comments projectId={project.id} />
          </div>
        ))}
      </div>

      {/* Modal para crear proyecto */}
      {showCreateForm && (
        <div className="modal">
          <div className="modal-content">
            <h3>Crear Nuevo Proyecto</h3>
            <label>
              Título:
              <input
                type="text"
                value={newProject.title}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              />
            </label>
            <label>
              Descripción:
              <textarea
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              />
            </label>
            <label>
              Estado:
              <select
                value={newProject.status}
                onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
              >
                <option value="Pendiente">Pendiente</option>
                <option value="En progreso">En progreso</option>
                <option value="Completado">Completado</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </label>
            <button onClick={createProject}>Guardar</button>
            <button onClick={() => setShowCreateForm(false)}>Cancelar</button>
          </div>
        </div>
      )}

      {/* Modal para editar proyecto */}
      {showEditForm && selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <h3>Editar Proyecto</h3>
            <label>
              Título:
              <input
                type="text"
                value={selectedProject.title}
                onChange={(e) =>
                  setSelectedProject({ ...selectedProject, title: e.target.value })
                }
              />
            </label>
            <label>
              Descripción:
              <textarea
                value={selectedProject.description}
                onChange={(e) =>
                  setSelectedProject({ ...selectedProject, description: e.target.value })
                }
              />
            </label>
            <label>
              Estado:
              <select
                value={selectedProject.status}
                onChange={(e) =>
                  setSelectedProject({ ...selectedProject, status: e.target.value })
                }
              >
                <option value="Pendiente">Pendiente</option>
                <option value="En progreso">En progreso</option>
                <option value="Completado">Completado</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </label>
            <button onClick={() => editProject(selectedProject)}>Guardar</button>
            <button onClick={() => setShowEditForm(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

