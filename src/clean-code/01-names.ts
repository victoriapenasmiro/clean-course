(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToDelete = [
    { id: 1, remove: false },
    { id: 2, remove: false },
    { id: 3, remove: true },
    { id: 4, remove: false },
    { id: 5, remove: false },
    { id: 7, remove: true },
  ];

  // Archivos marcados para borrar - files to delete
  const arhivos = filesToDelete.map((file) => file.remove);

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const today = new Date();

  // días transcurridos - elapsed time in days
  const totalDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  const totalFiles = 33;

  // primer nombre - first name
  const firstName = "Fernando";

  // primer apellido - last name
  const lastName = "Herrera";

  // días desde la última modificación - days since modification
  const daysFromLastUpdate = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassesByStudent = 6;
})();
