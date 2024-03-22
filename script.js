// Definición de la función constructora para el objeto Paciente
function Paciente(nombre, edad, genero, diagnostico) {
    // Propiedades privadas
    var _nombre = nombre;
    var _edad = edad;
    var _genero = genero;
    var _diagnostico = diagnostico;

    // Métodos getters y setters públicos
    this.getNombre = function () {
        return _nombre;
    };

    this.setNombre = function (nombre) {
        _nombre = nombre;
    };

    this.getEdad = function () {
        return _edad;
    };

    this.setEdad = function (edad) {
        _edad = edad;
    };

    this.getGenero = function () {
        return _genero;
    };

    this.setGenero = function (genero) {
        _genero = genero;
    };

    this.getDiagnostico = function () {
        return _diagnostico;
    };

    this.setDiagnostico = function (diagnostico) {
        _diagnostico = diagnostico;
    };
}

// Método para buscar pacientes por nombre
Paciente.prototype.buscarPorNombre = function (nombre) {
    return this.getNombre() === nombre ? this : null;
};

// Método para mostrar todos los pacientes registrados
Paciente.prototype.mostrarTodos = function () {
    console.log("Pacientes registrados:");
    pacientes.forEach(function (paciente) {
        console.log("Nombre: " + paciente.getNombre() + ", Edad: " + paciente.getEdad() + ", Género: " + paciente.getGenero() + ", Diagnóstico: " + paciente.getDiagnostico());
    });
};

// Crear instancias de objetos Paciente
var paciente1 = new Paciente("Juan", 35, "Masculino", "Resfriado común");
var paciente2 = new Paciente("María", 40, "Femenino", "Gripe");
var paciente3 = new Paciente("Pedro", 25, "Masculino", "Dolor de cabeza");

// Array para almacenar los pacientes
var pacientes = [paciente1, paciente2, paciente3];

// Ejemplo de uso
paciente1.setDiagnostico("Fiebre alta");
console.log("Diagnóstico de paciente1 después de la actualización: " + paciente1.getDiagnostico());

var pacienteEncontrado = paciente2.buscarPorNombre("María");
console.log("Datos de paciente encontrado:");
console.log(pacienteEncontrado);