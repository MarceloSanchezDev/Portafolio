export function Major() {
    return (
        <div className="container my-4">
          <h2 className="mb-4">Major Component</h2>
          <div className="row">
            {/* Generar 12 celdas en 4 filas y 3 columnas */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="p-3 border bg-light text-center">
                  <strong>Item {index + 1}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}