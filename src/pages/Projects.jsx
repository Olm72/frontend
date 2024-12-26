import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import { useUser } from "../components/UserContext";

const Projects = () => {
  const { user } = useUser();
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  // Simulación de carga de proyectos
  useEffect(() => {
    setProjects([
      { id: 1, title: "Proyecto 1", status: "En progreso" },
      { id: 2, title: "Proyecto 2", status: "Completado" },
      { id: 3, title: "Proyecto 3", status: "En progreso" },
    ]);
  }, []);

  // Filtro de proyectos
  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((project) => project.status === filter);

  // Función para agregar un proyecto
  const addProject = () => {
    const newProject = {
      id: projects.length + 1,
      title: `Proyecto ${projects.length + 1}`,
      status: "En progreso",
    };
    setProjects((prev) => [...prev, newProject]);
  };

  // Función para editar un proyecto
  const editProject = (updatedProject) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
    setShowEditForm(false);
  };

  // Función para eliminar un proyecto
  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Gestión de Proyectos</h1>

      {/* Botón para crear proyecto (Solo admin) */}
      {user.role === "admin" && (
        <button
          className="primary-button"
          onClick={addProject}
          style={{ marginBottom: "20px" }}
        >
          Crear Proyecto
        </button>
      )}

      {/* Filtro */}
      <div className="filter-container">
        <label>Filtrar por estado:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="Todos">Todos</option>
          <option value="En progreso">En progreso</option>
          <option value="Completado">Completado</option>
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
            <p>Estado: {project.status}</p>

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
          </div>
        ))}
      </div>

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
                  setSelectedProject({
                    ...selectedProject,
                    title: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Estado:
              <select
                value={selectedProject.status}
                onChange={(e) =>
                  setSelectedProject({
                    ...selectedProject,
                    status: e.target.value,
                  })
                }
              >
                <option value="En progreso">En progreso</option>
                <option value="Completado">Completado</option>
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
