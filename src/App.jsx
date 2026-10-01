import './App.css'

function App() {
  return (
    <main className="page">
      <section className="card">

        <div className="badge">
          Laboratorio DevOps
        </div>

        <h1>Laboratorio DevOps - AWS</h1>

        <h2>Desplegado con AWS Amplify</h2>

        <div className="information">
          <p>
            <strong>Estudiante:</strong> Cristian Camilo Osorio Latorre
            Y nadie mas
          </p>

          <p>
            <strong>Curso:</strong> Laboratorio DevOps
          </p>

          <p>
            <strong>Tecnologías:</strong> React, Vite, GitHub y AWS Amplify
          </p>
        </div>

        <div className="status">
       Segundo despliegue realizado mediante CI/CD
        </div>

        <p className="footer-text">
        Flujo DevOps implementado con integración y despliegue continuo.
        </p>

      </section>
    </main>
  )
}

export default App