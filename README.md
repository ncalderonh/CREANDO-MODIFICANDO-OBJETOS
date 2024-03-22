# Sistema de Gestión de Consultorio Médico

Este es un sistema de gestión para un consultorio médico, implementado en JavaScript, que permite almacenar y modificar los datos de los pacientes, así como buscar pacientes por nombre y mostrar todos los datos de los pacientes registrados.

## Requerimientos

1. Crear una función constructora para cada objeto.
2. Implementar métodos getters y setters para acceder y modificar los datos de los pacientes.
3. Crear un método mediante la propiedad prototype para buscar los datos de los usuarios por nombre y otro método para mostrar todos los datos de los usuarios registrados.
4. Instanciar cada objeto utilizando la instrucción `new`.

## Uso

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.
3. Utiliza la consola del navegador para interactuar con el sistema.

## Ejemplo de Uso

```javascript
// Crear instancias de objetos Paciente
var paciente1 = new Paciente("Juan", 35, "Masculino", "Resfriado común");
var paciente2 = new Paciente("María", 40, "Femenino", "Gripe");
var paciente3 = new Paciente("Pedro", 25, "Masculino", "Dolor de cabeza");

// Array para almacenar los pacientes
var pacientes = [paciente1, paciente2, paciente3];

// Modificar el diagnóstico de paciente1
paciente1.setDiagnostico("Fiebre alta");

// Buscar paciente por nombre
var pacienteEncontrado = paciente2.buscarPorNombre("María");

// Mostrar todos los pacientes registrados
paciente1.mostrarTodos();
