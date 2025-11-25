import React, { useState } from "react";

const initialTasks = [
  {
    id: 1,
    title: "Revisar slides da aula de hoje",
    category: "Estudos",
    priority: "alta",
  },
  {
    id: 2,
    title: "Responder e-mail do grupo de TCC",
    category: "Faculdade",
    priority: "media",
  },
  {
    id: 3,
    title: "Organizar arquivos da matéria",
    category: "Pessoal",
    priority: "baixa",
  },
];

function TaskDemo() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("todas");
  const [formData, setFormData] = useState({
    title: "",
    category: "Estudos",
    priority: "media",
  });
  const [error, setError] = useState("");

  const filteredTasks =
    filter === "todas"
      ? tasks
      : tasks.filter((task) => task.category === filter);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.title.trim().length < 3) {
      setError("Descreva a tarefa com pelo menos 3 caracteres.");
      return;
    }
    setError("");

    const newTask = {
      id: Date.now(),
      title: formData.title.trim(),
      category: formData.category,
      priority: formData.priority,
    };

    setTasks((prev) => [newTask, ...prev]);
    setFormData((prev) => ({ ...prev, title: "" }));
  }

  return (
    <section id="demo" className="section section--muted" aria-labelledby="demo-title">
      <div className="section__header">
        <h2 id="demo-title">Teste como você organizaria suas tarefas</h2>
        <p>
          Adicione uma tarefa de estudo e filtre por categoria para sentir como
          seria planejar sua semana no FocusTrack.
        </p>
      </div>

      <div className="demo-layout">
        <form className="demo-form" onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend>Adicionar nova tarefa</legend>

            <label htmlFor="task-title">Tarefa</label>
            <input
              id="task-title"
              name="title"
              type="text"
              placeholder="Ex.: Revisar capítulo de Planejamento de Marketing"
              value={formData.title}
              onChange={handleChange}
              aria-describedby={error ? "task-error" : undefined}
              aria-invalid={Boolean(error)}
              required
            />

            {error && (
              <p id="task-error" className="form-error" role="alert">
                {error}
              </p>
            )}

            <div className="demo-form__row">
              <div>
                <label htmlFor="task-category">Categoria</label>
                <select
                  id="task-category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Estudos">Estudos</option>
                  <option value="Faculdade">Faculdade</option>
                  <option value="Trabalho">Trabalho</option>
                  <option value="Pessoal">Pessoal</option>
                </select>
              </div>

              <div>
                <label htmlFor="task-priority">Prioridade</label>
                <select
                  id="task-priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option value="alta">Alta</option>
                  <option value="media">Média</option>
                  <option value="baixa">Baixa</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-primary">
              Adicionar à lista
            </button>
          </fieldset>
        </form>

        <div className="demo-tasks" aria-live="polite">
          <div className="demo-tasks__header">
            <h3>Suas tarefas da semana</h3>
            <div className="filter-group" aria-label="Filtrar tarefas por categoria">
              {["todas", "Estudos", "Faculdade", "Trabalho", "Pessoal"].map(
                (cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`chip ${filter === cat ? "chip--active" : ""}`}
                    onClick={() => setFilter(cat)}
                    aria-pressed={filter === cat}
                  >
                    {cat === "todas" ? "Todas" : cat}
                  </button>
                )
              )}
            </div>
          </div>

          {filteredTasks.length === 0 ? (
            <p className="demo-tasks__empty">
              Nenhuma tarefa nessa categoria ainda. Que tal adicionar uma?
            </p>
          ) : (
            <ul className="task-list">
              {filteredTasks.map((task) => (
                <li key={task.id} className={`task task--${task.priority}`}>
                  <div>
                    <p className="task__title">{task.title}</p>
                    <p className="task__meta">
                      {task.category} ·{" "}
                      {task.priority === "alta"
                        ? "Alta prioridade"
                        : task.priority === "media"
                        ? "Prioridade média"
                        : "Prioridade baixa"}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default TaskDemo;
